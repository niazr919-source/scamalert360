'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import { site } from '@/lib/site';

const TOPICS = [
  'Report a scam I encountered',
  'Correction to an article',
  'Story tip or research lead',
  'Press or media enquiry',
  'Privacy or data request',
  'Something else',
] as const;

type Errors = Partial<Record<'name' | 'email' | 'topic' | 'message', string>>;

/**
 * Reasonable-practice email check. Deliberately not a maximal RFC 5322 regex —
 * those reject valid addresses more often than they catch typos. The server
 * validates independently.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Terms we refuse to accept so readers never send us credentials. */
const SENSITIVE_HINTS = [
  'ssn',
  'social security',
  'routing number',
  'account number',
  'password',
  'one-time code',
  'otp',
  'cvv',
  'pin number',
];

export function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    company: '', // honeypot — real users never see or fill this
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const sensitiveWarning = SENSITIVE_HINTS.some((hint) =>
    values.message.toLowerCase().includes(hint),
  );

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!EMAIL_RE.test(values.email.trim()))
      next.email = 'Please enter a valid email address so we can reply.';
    if (!values.topic) next.topic = 'Please choose a topic.';
    if (values.message.trim().length < 20)
      next.message = 'Please give us at least a sentence or two (20 characters minimum).';
    if (values.message.length > 5000) next.message = 'Please keep your message under 5,000 characters.';
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    setServerError('');

    try {
      // The site is a static export with no Node server, so this posts to a
      // PHP handler (public/contact.php) rather than a Next.js API route.
      const response = await fetch(site.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setStatus('error');
        setServerError(data.error ?? 'Something went wrong. Please email us directly.');
        return;
      }
      setStatus('sent');
    } catch {
      setStatus('error');
      setServerError('We could not reach the server. Please email us directly.');
    }
  }

  function update(field: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  if (status === 'sent') {
    return (
      <div
        className="rounded-xl border border-emerald/40 bg-emerald/[0.07] p-6 dark:bg-emerald/[0.1]"
        role="status"
      >
        <CheckCircle2 className="h-8 w-8 text-emerald" aria-hidden="true" />
        <h2 className="mt-3 font-display text-xl font-bold text-navy-900 dark:text-white">
          Message received
        </h2>
        <p className="mt-2 leading-relaxed text-navy-600 dark:text-navy-400">
          Thank you. We read every message and aim to reply within two business days.
          Corrections that could cause financial harm are prioritized ahead of scheduled
          work.
        </p>
        <p className="mt-3 text-sm font-medium text-navy-700 dark:text-navy-300">
          If you have lost money, do not wait for our reply — contact your bank now on the
          number printed on your card and file with the agencies listed on this page.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues({ name: '', email: '', topic: '', message: '', company: '' });
            setStatus('idle');
          }}
          className="mt-4 text-sm font-semibold text-emerald-700 underline underline-offset-4 dark:text-emerald-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass = (hasError: boolean) =>
    cn(
      'mt-1.5 w-full rounded-lg border bg-white px-3.5 py-2.5 text-[15px] text-navy-900 transition placeholder:text-navy-400 dark:bg-navy-800 dark:text-white',
      hasError
        ? 'border-crimson focus:border-crimson'
        : 'border-navy-300 focus:border-emerald dark:border-navy-600',
    );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-navy-900 dark:text-white">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update('name', e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={fieldClass(Boolean(errors.name))}
          placeholder="Alex Rivera"
        />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-sm text-crimson">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-navy-900 dark:text-white">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update('email', e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : 'email-hint'}
          className={fieldClass(Boolean(errors.email))}
          placeholder="you@example.com"
        />
        {errors.email ? (
          <p id="email-error" className="mt-1.5 text-sm text-crimson">
            {errors.email}
          </p>
        ) : (
          <p id="email-hint" className="mt-1.5 text-sm text-navy-500 dark:text-navy-400">
            Used only to reply to you. We never add you to a mailing list.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="topic" className="text-sm font-semibold text-navy-900 dark:text-white">
          What is this about?
        </label>
        <select
          id="topic"
          name="topic"
          value={values.topic}
          onChange={(e) => update('topic', e.target.value)}
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? 'topic-error' : undefined}
          className={fieldClass(Boolean(errors.topic))}
        >
          <option value="">Choose a topic…</option>
          {TOPICS.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {errors.topic ? (
          <p id="topic-error" className="mt-1.5 text-sm text-crimson">
            {errors.topic}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-semibold text-navy-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          className={cn(fieldClass(Boolean(errors.message)), 'resize-y')}
          placeholder="Tell us what happened, what you received, or what needs correcting."
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-crimson">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-1.5 text-sm text-navy-500 dark:text-navy-400">
            {values.message.length} / 5,000 characters
          </p>
        )}
      </div>

      {sensitiveWarning ? (
        <div
          className="flex gap-3 rounded-lg border border-crimson/40 bg-crimson/[0.06] p-4"
          role="alert"
        >
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-crimson" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-navy-700 dark:text-navy-300">
            <strong className="font-semibold text-navy-900 dark:text-white">
              Please remove any account details.
            </strong>{' '}
            Your message looks like it may contain sensitive information. Never send account
            numbers, card numbers, passwords, one-time codes or Social Security numbers — to
            us or to anyone who contacts you. Describe what happened instead.
          </p>
        </div>
      ) : null}

      {/* Honeypot: hidden from users, filled by naive bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => update('company', e.target.value)}
        />
      </div>

      {status === 'error' ? (
        <p className="rounded-lg border border-crimson/40 bg-crimson/[0.06] p-4 text-sm text-navy-700 dark:text-navy-300" role="alert">
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-2 rounded-lg bg-emerald px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
