'use client';

import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  OctagonAlert,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReportingButtons } from './content-blocks';

export type Option = {
  id: string;
  label: string;
  /** Compact label used by the homepage entry point. */
  shortLabel?: string;
  hint?: string;
  weight: number;
  /**
   * Critical answers are individually sufficient to indicate fraud, so they
   * raise the floor of the score rather than merely adding to it. Without this
   * a single decisive signal could be diluted by many benign answers.
   */
  critical?: boolean;
  /** Selecting this clears every other option in the step. */
  exclusive?: boolean;
};

type Step = {
  id: 'channel' | 'asks' | 'signals' | 'actions';
  title: string;
  question: string;
  help: string;
  multi: boolean;
  options: Option[];
};

const STEPS: Step[] = [
  {
    id: 'channel',
    title: 'Contact',
    question: 'How did this contact reach you?',
    help: 'Pick the single option that best describes the first contact.',
    multi: false,
    options: [
      {
        id: 'text',
        label: 'An unexpected text message',
        shortLabel: 'A text',
        hint: 'Fraud alert, delivery notice, toll charge, bank warning',
        weight: 12,
      },
      {
        id: 'call',
        label: 'An unexpected phone call',
        shortLabel: 'A phone call',
        hint: 'Someone called me claiming to be a bank, agency or company',
        weight: 12,
      },
      { id: 'email', label: 'An unexpected email', shortLabel: 'An email', weight: 10 },
      {
        id: 'qr',
        label: 'A QR code in a public place',
        shortLabel: 'A QR code',
        hint: 'Parking meter, EV charger, restaurant table, delivery slip',
        weight: 12,
      },
      {
        id: 'social',
        label: 'A social media message, marketplace listing or job board',
        shortLabel: 'Social or marketplace',
        weight: 10,
      },
      {
        id: 'searched',
        label: 'I called a number or opened a link I found by searching',
        shortLabel: 'A search result',
        hint: 'Scam call centres buy search ads against support queries',
        weight: 8,
      },
      {
        id: 'official',
        label: 'I opened my official app or called the number on my card',
        shortLabel: 'My own app or card',
        weight: 0,
      },
    ],
  },
  {
    id: 'asks',
    title: 'The ask',
    question: 'What have they asked you to do?',
    help: 'Select everything that applies. These carry the most weight.',
    multi: true,
    options: [
      {
        id: 'otp',
        label: 'Read back a one-time passcode or verification code',
        weight: 40,
        critical: true,
      },
      {
        id: 'safe-account',
        label: 'Move money to a "safe", "secure" or "protected" account',
        weight: 40,
        critical: true,
      },
      {
        id: 'remote',
        label: 'Install software so they can access my device',
        hint: 'AnyDesk, TeamViewer, or an app sent by link',
        weight: 35,
        critical: true,
      },
      {
        id: 'giftcards',
        label: 'Pay with gift cards, cryptocurrency, or a wire to a person',
        weight: 35,
        critical: true,
      },
      {
        id: 'check',
        label: 'Deposit a check and send part of it onward',
        hint: 'Equipment allowance, overpayment refund, mystery shopping',
        weight: 35,
        critical: true,
      },
      {
        id: 'return-transfer',
        label: 'Return money that arrived unexpectedly',
        weight: 30,
        critical: true,
      },
      {
        id: 'credentials',
        label: 'Give my full card number, PIN, password or Social Security number',
        weight: 30,
        critical: true,
      },
      {
        id: 'fee',
        label: 'Pay a fee to receive a prize, refund, job, or delivery',
        weight: 25,
      },
      {
        id: 'link',
        label: 'Click a link to verify or reactivate my account',
        weight: 18,
      },
      {
        id: 'personal',
        label: 'Provide personal details like date of birth or address',
        weight: 12,
      },
      { id: 'ask-none', label: 'Nothing yet — they have not asked for anything', weight: 0, exclusive: true },
    ],
  },
  {
    id: 'signals',
    title: 'Behaviour',
    question: 'Which of these happened?',
    help: 'Select everything that applies.',
    multi: true,
    options: [
      {
        id: 'refuse-callback',
        label: 'They discouraged me from hanging up and calling back',
        weight: 25,
        critical: true,
      },
      {
        id: 'secrecy',
        label: 'They told me to keep it secret from family or my bank',
        weight: 22,
        critical: true,
      },
      {
        id: 'unexpected-money',
        label: 'Money arrived in my account that I was not expecting',
        weight: 20,
      },
      {
        id: 'threat',
        label: 'They threatened arrest, legal action, or account closure',
        weight: 16,
      },
      {
        id: 'voice',
        label: 'A familiar voice claimed to be in an emergency',
        hint: 'Voice cloning needs only seconds of audio',
        weight: 16,
      },
      { id: 'urgency', label: 'There was a deadline or pressure to act now', weight: 12 },
      {
        id: 'too-good',
        label: 'The price, pay or return was well below or above market',
        weight: 12,
      },
      {
        id: 'knew-details',
        label: 'They already knew some of my personal details',
        hint: 'Breached data makes impersonators sound authoritative',
        weight: 8,
      },
      {
        id: 'looked-official',
        label: 'The caller ID, sender or logo looked genuine',
        hint: 'Caller ID and sender names are trivially spoofed',
        weight: 6,
      },
      { id: 'errors', label: 'There were spelling, grammar or formatting errors', weight: 8 },
      { id: 'signal-none', label: 'None of these', weight: 0, exclusive: true },
    ],
  },
  {
    id: 'actions',
    title: 'Exposure',
    question: 'Have you already done any of these?',
    help: 'This determines how urgent your next steps are.',
    multi: true,
    options: [
      { id: 'did-otp', label: 'I read out a one-time passcode', weight: 25, critical: true },
      {
        id: 'did-install',
        label: 'I installed software they sent or gave remote access',
        weight: 25,
        critical: true,
      },
      { id: 'did-send', label: 'I sent money or gift card numbers', weight: 22, critical: true },
      {
        id: 'did-details',
        label: 'I gave card, bank or Social Security details',
        weight: 20,
        critical: true,
      },
      {
        id: 'did-login',
        label: 'I entered my login on a page they linked to',
        weight: 20,
        critical: true,
      },
      { id: 'did-deposit', label: 'I deposited a check they sent', weight: 20, critical: true },
      { id: 'did-click', label: 'I only clicked or scanned, and entered nothing', weight: 5 },
      { id: 'did-none', label: 'Nothing — I have not acted', weight: 0, exclusive: true },
    ],
  },
];

type Selections = Record<Step['id'], string[]>;

const EMPTY: Selections = { channel: [], asks: [], signals: [], actions: [] };

/**
 * Exported so the homepage entry point renders exactly the same first-step
 * options as the tool itself — one source of truth, no drift.
 */
export const CHANNEL_OPTIONS = STEPS[0].options;

const BANDS = [
  {
    min: 75,
    label: 'Critical risk',
    verdict: 'This has the signature of an active scam.',
    tone: 'critical',
  },
  {
    min: 50,
    label: 'High risk',
    verdict: 'Multiple strong fraud indicators are present.',
    tone: 'high',
  },
  {
    min: 25,
    label: 'Elevated risk',
    verdict: 'Some indicators are present. Verify before you act.',
    tone: 'medium',
  },
  {
    min: 0,
    label: 'Low risk',
    verdict: 'Nothing here matches a common scam pattern.',
    tone: 'low',
  },
] as const;

const toneStyles = {
  critical: {
    ring: 'border-crimson/40 bg-crimson/[0.06] dark:bg-crimson/[0.1]',
    text: 'text-red-700 dark:text-red-400',
    bar: 'bg-crimson',
    Icon: OctagonAlert,
  },
  high: {
    ring: 'border-orange-400/50 bg-orange-50 dark:bg-orange-500/10',
    text: 'text-orange-700 dark:text-orange-400',
    bar: 'bg-orange-500',
    Icon: ShieldAlert,
  },
  medium: {
    ring: 'border-amber-400/50 bg-amber-50 dark:bg-amber-500/10',
    text: 'text-amber-700 dark:text-amber-400',
    bar: 'bg-amber-500',
    Icon: AlertTriangle,
  },
  low: {
    ring: 'border-emerald/40 bg-emerald/[0.06] dark:bg-emerald/[0.1]',
    text: 'text-emerald-700 dark:text-emerald-400',
    bar: 'bg-emerald',
    Icon: ShieldCheck,
  },
} as const;

/** Guidance keyed to the specific answers given, most urgent first. */
function buildActions(selections: Selections): { title: string; text: string }[] {
  const has = (step: Step['id'], id: string) => selections[step].includes(id);
  const actions: { title: string; text: string }[] = [];

  if (has('actions', 'did-otp') || has('actions', 'did-login')) {
    actions.push({
      title: 'Call your bank now on the number printed on your card',
      text: 'A disclosed passcode or password usually authorized a real action — a login, a new payee, or a transfer. Ask them to review the last hour of activity, force a password reset, and remove unrecognized devices.',
    });
  }
  if (has('actions', 'did-send')) {
    actions.push({
      title: 'Request a recall on the transfer today',
      text: 'Ask your bank explicitly to attempt a recall or reversal. Recalls only work while the funds remain in the receiving account, so this is measured in hours. For gift cards, call the card brand’s fraud line with the numbers and receipts.',
    });
  }
  if (has('actions', 'did-details')) {
    actions.push({
      title: 'Lock the card and treat this as identity exposure',
      text: 'Freeze the card in your banking app and request reissue. If you gave your Social Security number, place a credit freeze at all three bureaus and start a recovery plan at IdentityTheft.gov.',
    });
  }
  if (has('actions', 'did-install')) {
    actions.push({
      title: 'Disconnect that device from the internet',
      text: 'Remote access software can persist after the call. Disconnect it, have it inspected, and change your banking and email passwords from a different clean device — not the compromised one.',
    });
  }
  if (has('actions', 'did-deposit')) {
    actions.push({
      title: 'Tell your bank the check may be counterfeit',
      text: 'Ask them to hold those funds pending verification and do not forward any portion of it. Available funds are not cleared funds, and you are liable for the full amount if the item is returned weeks later.',
    });
  }
  if (has('signals', 'unexpected-money') && !has('actions', 'did-send')) {
    actions.push({
      title: 'Do not return the money manually',
      text: 'Report the transaction inside the app and let the platform reverse it. Money sent back by hand goes to the fraudster and is not reversed when the original payment is clawed back.',
    });
  }
  if (has('asks', 'otp')) {
    actions.push({
      title: 'Never read a passcode aloud',
      text: 'One-time codes are for you to type into an app you opened yourself. Anyone asking you to say one is authorizing something on your account at that moment.',
    });
  }
  if (has('asks', 'safe-account')) {
    actions.push({
      title: 'There is no such thing as a safe account',
      text: 'No US bank asks customers to move money into a safe or holding account during a fraud investigation. Compromised accounts are frozen in place. This request alone is conclusive.',
    });
  }
  if (has('asks', 'remote')) {
    actions.push({
      title: 'Do not install anything they send you',
      text: 'No bank or agency resolves fraud by taking control of your device. Remote access software lets them watch you log in and move money themselves. Install only from an official app store, never from a link.',
    });
  }
  if (has('asks', 'giftcards')) {
    actions.push({
      title: 'No real organization is paid in gift cards or crypto',
      text: 'Courts, tax agencies, utilities, police and banks never collect money this way. The payment method was chosen precisely because it cannot be reversed once you realize what happened.',
    });
  }
  if (has('asks', 'check')) {
    actions.push({
      title: 'Available funds are not cleared funds',
      text: 'A counterfeit check can be discovered weeks after your bank makes the money available, and the deposit is reversed onto you. Never forward any portion of a check from someone you have not independently verified.',
    });
  }
  if (has('asks', 'credentials')) {
    actions.push({
      title: 'Legitimate callers never need your full credentials',
      text: 'Banks verify with partial details and never ask for your PIN, password or full Social Security number. If you already gave these, call your bank on the number on your card and treat it as identity exposure.',
    });
  }
  if (has('asks', 'return-transfer') && !has('signals', 'unexpected-money')) {
    actions.push({
      title: 'Never return an unexpected payment by hand',
      text: 'Report it inside the app and let the platform reverse it. Money sent back manually goes to the fraudster and is not reversed when the original stolen payment is clawed back.',
    });
  }
  if (has('asks', 'fee')) {
    actions.push({
      title: 'Paying to receive money is always the scam',
      text: 'Genuine prizes, refunds, job offers and deliveries never require an advance fee. Once you pay, the promised money does not arrive and the fee is unrecoverable.',
    });
  }
  if (has('signals', 'voice')) {
    actions.push({
      title: 'Verify the person on a number you dial yourself',
      text: 'Hang up and call them back on their saved number, or reach another family member. Voice cloning needs only seconds of public audio, so recognizing the voice is not verification.',
    });
  }
  if (has('channel', 'qr')) {
    actions.push({
      title: 'Do not pay through a scanned code',
      text: 'Use the operator’s official app installed from an app store, pay at the machine, or type the address printed on the signage. Report the sticker to the property owner so it gets removed.',
    });
  }

  actions.push({
    title: 'Verify on a channel they do not control',
    text: 'Hang up or close the message, then contact the organization using a number from your card, your statement, or an app you installed yourself. A genuine representative will never object to this.',
  });

  return actions;
}

/**
 * useSearchParams needs a Suspense boundary for the page to stay statically
 * rendered, so the reader lives in an inner component.
 */
export function ScamRiskChecker() {
  return (
    <Suspense fallback={<CheckerSkeleton />}>
      <CheckerBody />
    </Suspense>
  );
}

/** Reserves the wizard's height so the Suspense swap causes no layout shift. */
function CheckerSkeleton() {
  return <div className="min-h-[620px]" aria-hidden="true" />;
}

function CheckerBody() {
  const searchParams = useSearchParams();

  // The homepage entry point deep-links a first-step answer. If it names a
  // real option, pre-select it and open on step 2.
  const presetChannel = searchParams.get('channel');
  const presetValid = CHANNEL_OPTIONS.some((o) => o.id === presetChannel);

  const [stepIndex, setStepIndex] = useState(presetValid ? 1 : 0);
  const [selections, setSelections] = useState<Selections>(
    presetValid ? { ...EMPTY, channel: [presetChannel as string] } : EMPTY,
  );
  const [submitted, setSubmitted] = useState(false);

  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;

  const result = useMemo(() => {
    let total = 0;
    let floor = 0;

    for (const s of STEPS) {
      for (const optionId of selections[s.id]) {
        const option = s.options.find((o) => o.id === optionId);
        if (!option) continue;
        total += option.weight;
        if (option.critical) floor = Math.max(floor, 85);
      }
    }

    const score = Math.min(100, Math.max(floor, Math.round(total)));
    const band = BANDS.find((b) => score >= b.min) ?? BANDS[BANDS.length - 1];
    return { score, band };
  }, [selections]);

  function toggle(option: Option) {
    setSelections((prev) => {
      const current = prev[step.id];

      if (!step.multi) return { ...prev, [step.id]: [option.id] };

      if (option.exclusive) {
        return { ...prev, [step.id]: current.includes(option.id) ? [] : [option.id] };
      }

      const exclusiveIds = step.options.filter((o) => o.exclusive).map((o) => o.id);
      const withoutExclusive = current.filter((id) => !exclusiveIds.includes(id));

      return {
        ...prev,
        [step.id]: withoutExclusive.includes(option.id)
          ? withoutExclusive.filter((id) => id !== option.id)
          : [...withoutExclusive, option.id],
      };
    });
  }

  function reset() {
    setSelections(EMPTY);
    setStepIndex(0);
    setSubmitted(false);
  }

  if (submitted) {
    const tone = toneStyles[result.band.tone];
    const ToneIcon = tone.Icon;
    const actions = buildActions(selections);

    return (
      <div className="animate-fade-up">
        <section
          className={cn('rounded-2xl border p-6 sm:p-8', tone.ring)}
          aria-live="polite"
        >
          <div className="flex flex-wrap items-center gap-4">
            <ToneIcon className={cn('h-8 w-8 shrink-0', tone.text)} aria-hidden="true" />
            <div>
              <p className={cn('font-display text-2xl font-bold', tone.text)}>
                {result.band.label}
              </p>
              <p className="text-navy-700 dark:text-navy-300">{result.band.verdict}</p>
            </div>
            <p className="ml-auto font-display text-5xl font-bold tabular-nums text-navy-900 dark:text-white">
              {result.score}
              <span className="text-2xl text-navy-400">%</span>
            </p>
          </div>

          <div
            className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-navy-200 dark:bg-navy-700"
            role="img"
            aria-label={`Scam likelihood score: ${result.score} out of 100`}
          >
            <div
              className={cn('h-full rounded-full transition-all duration-700', tone.bar)}
              style={{ width: `${Math.max(result.score, 2)}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-navy-500 dark:text-navy-400">
            Scam Likelihood Score — an educational estimate based on your answers, not a
            verdict on a specific message.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
            What to do next
          </h2>
          <ol className="mt-5 space-y-4">
            {actions.map((action, i) => (
              <li
                key={action.title}
                className="flex gap-4 rounded-xl border border-navy-200 bg-white p-4 dark:border-navy-700 dark:bg-navy-800/40"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-navy-900 dark:text-white">
                    {action.title}
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-navy-600 dark:text-navy-400">
                    {action.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <ReportingButtons
          title="Report it to the official agencies"
          text="Contact your bank first if money has moved — external reports do not trigger a refund on their own."
          agencies={['ftc', 'ic3', 'cfpb', 'identityTheft']}
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-navy-300 px-5 py-2.5 text-sm font-semibold text-navy-800 transition hover:bg-navy-50 dark:border-navy-600 dark:text-navy-100 dark:hover:bg-navy-800"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Check another message
          </button>
          <Link
            href="/scams"
            className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800 dark:bg-emerald dark:hover:bg-emerald-600"
          >
            Read the full guides
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    );
  }

  const selectedCount = selections[step.id].length;
  const canAdvance = step.multi ? true : selectedCount > 0;

  return (
    <div>
      {/* Progress */}
      <ol className="flex flex-wrap gap-2" aria-label="Progress">
        {STEPS.map((s, i) => (
          <li key={s.id} className="flex items-center gap-2">
            <span
              className={cn(
                'flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition',
                i < stepIndex && 'bg-emerald text-white',
                i === stepIndex && 'bg-navy-900 text-white dark:bg-emerald',
                i > stepIndex &&
                  'bg-navy-100 text-navy-500 dark:bg-navy-800 dark:text-navy-400',
              )}
              aria-current={i === stepIndex ? 'step' : undefined}
            >
              {i < stepIndex ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : i + 1}
            </span>
            <span
              className={cn(
                'text-sm font-medium',
                i === stepIndex
                  ? 'text-navy-900 dark:text-white'
                  : 'text-navy-500 dark:text-navy-400',
              )}
            >
              {s.title}
            </span>
            {i < STEPS.length - 1 ? (
              <span className="mx-1 hidden h-px w-6 bg-navy-200 sm:block dark:bg-navy-700" />
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <fieldset>
          <legend className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
            {step.question}
          </legend>
          <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">{step.help}</p>

          <div className="mt-6 space-y-2.5">
            {step.options.map((option) => {
              const checked = selections[step.id].includes(option.id);
              return (
                <label
                  key={option.id}
                  className={cn(
                    'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition',
                    checked
                      ? 'border-emerald bg-emerald/[0.07] dark:bg-emerald/[0.12]'
                      : 'border-navy-200 hover:border-navy-300 hover:bg-navy-50 dark:border-navy-700 dark:hover:bg-navy-800/50',
                  )}
                >
                  <input
                    type={step.multi ? 'checkbox' : 'radio'}
                    name={step.id}
                    checked={checked}
                    onChange={() => toggle(option)}
                    className="sr-only"
                  />
                  <span
                    className={cn(
                      'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 transition',
                      step.multi ? 'rounded' : 'rounded-full',
                      checked
                        ? 'border-emerald bg-emerald text-white'
                        : 'border-navy-300 dark:border-navy-600',
                    )}
                    aria-hidden="true"
                  >
                    {checked ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium text-navy-900 dark:text-white">
                      {option.label}
                    </span>
                    {option.hint ? (
                      <span className="mt-0.5 block text-sm text-navy-500 dark:text-navy-400">
                        {option.hint}
                      </span>
                    ) : null}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="mt-8 flex items-center gap-3">
        {stepIndex > 0 ? (
          <button
            type="button"
            onClick={() => setStepIndex((i) => i - 1)}
            className="inline-flex items-center gap-2 rounded-lg border border-navy-300 px-4 py-2.5 text-sm font-semibold text-navy-800 transition hover:bg-navy-50 dark:border-navy-600 dark:text-navy-100 dark:hover:bg-navy-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </button>
        ) : null}

        <button
          type="button"
          disabled={!canAdvance}
          onClick={() => (isLast ? setSubmitted(true) : setStepIndex((i) => i + 1))}
          className="ml-auto inline-flex items-center gap-2 rounded-lg bg-emerald px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLast ? 'Get my risk score' : 'Continue'}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {!canAdvance ? (
        <p className="mt-3 text-right text-sm text-navy-500 dark:text-navy-400">
          Choose one option to continue.
        </p>
      ) : null}
    </div>
  );
}
