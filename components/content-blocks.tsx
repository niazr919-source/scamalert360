import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  Info,
  OctagonAlert,
  Quote as QuoteIcon,
  ShieldAlert,
} from 'lucide-react';
import { agencies, type AgencyKey } from '@/lib/site';
import { cn, slugify } from '@/lib/utils';
import type { Block } from '@/content/types';

const alertStyles = {
  danger: {
    wrap: 'border-crimson/35 bg-crimson/5 dark:border-crimson/40 dark:bg-crimson/10',
    title: 'text-red-800 dark:text-red-300',
    icon: OctagonAlert,
    iconColor: 'text-crimson',
  },
  warning: {
    wrap: 'border-amber-400/50 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10',
    title: 'text-amber-900 dark:text-amber-200',
    icon: AlertTriangle,
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  info: {
    wrap: 'border-sky-400/45 bg-sky-50 dark:border-sky-500/30 dark:bg-sky-500/10',
    title: 'text-sky-900 dark:text-sky-200',
    icon: Info,
    iconColor: 'text-sky-600 dark:text-sky-400',
  },
  success: {
    wrap: 'border-emerald/40 bg-emerald/5 dark:border-emerald/30 dark:bg-emerald/10',
    title: 'text-emerald-800 dark:text-emerald-300',
    icon: BadgeCheck,
    iconColor: 'text-emerald',
  },
} as const;

export function AlertBox({
  variant,
  title,
  text,
}: {
  variant: keyof typeof alertStyles;
  title: string;
  text: string;
}) {
  const style = alertStyles[variant];
  const Icon = style.icon;
  return (
    <aside className={cn('my-7 rounded-xl border p-5', style.wrap)} role="note">
      <div className="flex gap-3">
        <Icon className={cn('mt-0.5 h-5 w-5 shrink-0', style.iconColor)} aria-hidden="true" />
        <div>
          <p className={cn('font-display text-base font-semibold', style.title)}>{title}</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-navy-700 dark:text-navy-300">
            {text}
          </p>
        </div>
      </div>
    </aside>
  );
}

export function RedFlagChecklist({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: string[];
}) {
  return (
    <section className="my-8 rounded-xl border border-crimson/30 bg-crimson/[0.04] p-5 dark:border-crimson/30 dark:bg-crimson/[0.07]">
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-navy-900 dark:text-white">
        <ShieldAlert className="h-5 w-5 text-crimson" aria-hidden="true" />
        {title}
      </h3>
      {intro ? (
        <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">{intro}</p>
      ) : null}
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
            <span
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-crimson"
              aria-hidden="true"
            />
            <span className="text-navy-700 dark:text-navy-300">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RecoveryTimeline({
  title,
  intro,
  steps,
}: {
  title: string;
  intro?: string;
  steps: { window: string; title: string; text: string }[];
}) {
  return (
    <section className="my-8 rounded-xl border border-navy-200 bg-white p-5 dark:border-navy-700 dark:bg-navy-800/40 sm:p-6">
      <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
        {title}
      </h3>
      {intro ? (
        <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">{intro}</p>
      ) : null}
      <ol className="mt-5 space-y-0">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
            {i < steps.length - 1 ? (
              <span
                className="absolute left-[15px] top-9 h-[calc(100%-1.75rem)] w-px bg-navy-200 dark:bg-navy-700"
                aria-hidden="true"
              />
            ) : null}
            <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald text-sm font-bold text-white">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
                {step.window}
              </p>
              <p className="mt-1 font-semibold text-navy-900 dark:text-white">{step.title}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-navy-600 dark:text-navy-400">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function DataTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <figure className="my-8">
      {caption ? (
        <figcaption className="mb-2 text-sm font-medium text-navy-600 dark:text-navy-400">
          {caption}
        </figcaption>
      ) : null}
      {/* Horizontal scroll is contained here so the page body never scrolls sideways. */}
      <div className="overflow-x-auto rounded-xl border border-navy-200 dark:border-navy-700">
        <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
          <thead>
            <tr className="bg-navy-50 dark:bg-navy-800">
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="border-b border-navy-200 px-4 py-3 font-display text-sm font-semibold text-navy-900 dark:border-navy-700 dark:text-white"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-navy-100 last:border-0 even:bg-navy-50/50 dark:border-navy-800 dark:even:bg-navy-800/30"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      'px-4 py-3 align-top leading-relaxed text-navy-700 dark:text-navy-300',
                      j === 0 && 'font-medium text-navy-900 dark:text-white',
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export function ReportingButtons({
  title = 'Report this scam',
  text,
  agencies: keys,
}: {
  title?: string;
  text?: string;
  agencies: AgencyKey[];
}) {
  return (
    <section className="my-8 rounded-xl border border-emerald/30 bg-emerald/[0.05] p-5 dark:border-emerald/25 dark:bg-emerald/[0.08]">
      <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
        {title}
      </h3>
      {text ? (
        <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">{text}</p>
      ) : null}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {keys.map((key) => {
          const agency = agencies[key];
          return (
            <a
              key={key}
              href={agency.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex items-start gap-3 rounded-lg border border-navy-200 bg-white p-3.5 transition hover:border-emerald hover:shadow-sm dark:border-navy-700 dark:bg-navy-800/60 dark:hover:border-emerald"
            >
              <ExternalLink
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald"
                aria-hidden="true"
              />
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-navy-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                  {agency.name}
                </span>
                <span className="mt-0.5 block text-[13px] leading-snug text-navy-600 dark:text-navy-400">
                  {agency.blurb}
                </span>
              </span>
            </a>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-navy-500 dark:text-navy-500">
        These are official government resources. ScamAlert360 is not affiliated with any
        government agency and receives no compensation for these links.
      </p>
    </section>
  );
}

export function KeyStat({
  value,
  label,
  source,
  url,
}: {
  value: string;
  label: string;
  source: string;
  url?: string;
}) {
  return (
    <div className="my-8 rounded-xl border-l-4 border-emerald bg-navy-50 p-5 dark:bg-navy-800/50">
      <p className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
        {value}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-navy-700 dark:text-navy-300">
        {label}
      </p>
      <p className="mt-2 text-xs text-navy-500 dark:text-navy-400">
        Source:{' '}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline hover:text-emerald-700 dark:hover:text-emerald-400"
          >
            {source}
          </a>
        ) : (
          source
        )}
      </p>
    </div>
  );
}

export function PullQuote({
  text,
  source,
  url,
}: {
  text: string;
  source: string;
  url?: string;
}) {
  return (
    <figure className="my-8 rounded-xl bg-navy-50 p-5 dark:bg-navy-800/50">
      <QuoteIcon className="h-5 w-5 text-emerald" aria-hidden="true" />
      <blockquote className="mt-2 font-display text-lg leading-relaxed text-navy-800 dark:text-navy-100">
        {text}
      </blockquote>
      <figcaption className="mt-3 text-sm text-navy-500 dark:text-navy-400">
        —{' '}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline hover:text-emerald-700"
          >
            {source}
          </a>
        ) : (
          source
        )}
      </figcaption>
    </figure>
  );
}

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section id="faq" className="mt-12 scroll-mt-28">
      <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
        Frequently asked questions
      </h2>
      <div className="mt-5 divide-y divide-navy-200 rounded-xl border border-navy-200 dark:divide-navy-700 dark:border-navy-700">
        {items.map((item) => (
          <details key={item.question} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display font-semibold text-navy-900 dark:text-white">
              {item.question}
              <ArrowUpRight
                className="mt-1 h-4 w-4 shrink-0 text-emerald transition group-open:rotate-90"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-600 dark:text-navy-400">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function HowToSteps({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return (
    <section id="steps" className="mt-12 scroll-mt-28 rounded-xl border border-emerald/30 bg-emerald/[0.04] p-5 dark:border-emerald/25 dark:bg-emerald/[0.07] sm:p-6">
      <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
        {name}
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-navy-600 dark:text-navy-400">
        {description}
      </p>
      <ol className="mt-5 space-y-4">
        {steps.map((step, i) => (
          <li key={step.name} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-emerald text-sm font-bold text-emerald-700 dark:text-emerald-400">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-navy-900 dark:text-white">{step.name}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-navy-600 dark:text-navy-400">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Renders one content block. Paragraph counting/ad injection happens upstream. */
export function ContentBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="my-5 text-[17px] leading-[1.75] text-navy-700 dark:text-navy-300">
          {block.text}
        </p>
      );
    case 'h2':
      return (
        <h2
          id={slugify(block.text)}
          className="mt-11 scroll-mt-28 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-[26px] dark:text-white"
        >
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3
          id={slugify(block.text)}
          className="mt-8 scroll-mt-28 font-display text-xl font-semibold tracking-tight text-navy-900 dark:text-white"
        >
          {block.text}
        </h3>
      );
    case 'list': {
      const items = block.items.map((item) => (
        <li key={item} className="pl-1.5 leading-[1.7] marker:text-emerald">
          {item}
        </li>
      ));
      return block.ordered ? (
        <ol className="my-5 list-decimal space-y-2.5 pl-5 text-[17px] text-navy-700 marker:font-semibold dark:text-navy-300">
          {items}
        </ol>
      ) : (
        <ul className="my-5 list-disc space-y-2.5 pl-5 text-[17px] text-navy-700 dark:text-navy-300">
          {items}
        </ul>
      );
    }
    case 'table':
      return <DataTable {...block} />;
    case 'alert':
      return <AlertBox variant={block.variant} title={block.title} text={block.text} />;
    case 'checklist':
      return <RedFlagChecklist title={block.title} intro={block.intro} items={block.items} />;
    case 'timeline':
      return (
        <RecoveryTimeline title={block.title} intro={block.intro} steps={block.steps} />
      );
    case 'quote':
      return <PullQuote text={block.text} source={block.source} url={block.url} />;
    case 'report':
      return (
        <ReportingButtons title={block.title} text={block.text} agencies={block.agencies} />
      );
    case 'keyStat':
      return (
        <KeyStat
          value={block.value}
          label={block.label}
          source={block.source}
          url={block.url}
        />
      );
    default: {
      // Exhaustiveness guard — a new block type is a compile error here.
      const _never: never = block;
      return null;
    }
  }
}

export { CheckCircle2 };
