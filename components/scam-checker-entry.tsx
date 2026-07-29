'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  Mail,
  MessageSquare,
  Phone,
  QrCode,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { CHANNEL_OPTIONS } from './scam-risk-checker';

/**
 * Homepage entry point for the Scam Risk Checker.
 *
 * This deliberately renders only the tool's *first* step. Embedding the whole
 * wizard here would put substantially the same primary content on two URLs,
 * splitting ranking signal between the homepage and /tool/scam-risk-checker
 * and removing any reason to visit the tool page at all. Answering here
 * deep-links into the real tool with the answer pre-filled, so the homepage
 * gets the engagement and the tool page keeps the authority.
 */

const icons: Record<string, typeof MessageSquare> = {
  text: MessageSquare,
  call: Phone,
  email: Mail,
  qr: QrCode,
  social: Users,
  searched: Search,
};

// The "I used my own app / card" option is a valid answer inside the tool but
// a strange thing to lead with on a homepage, so it is omitted here.
const ENTRY_OPTIONS = CHANNEL_OPTIONS.filter((option) => option.id !== 'official');

export function ScamCheckerEntry() {
  const router = useRouter();

  return (
    <section
      id="checker"
      className="scroll-mt-24 border-y border-emerald/25 bg-emerald/[0.05] dark:bg-emerald/[0.07]"
      aria-labelledby="checker-entry-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Free scam risk checker
            </p>
            <h2
              id="checker-entry-heading"
              className="mt-2 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 dark:text-white"
            >
              Not sure if it&apos;s a scam? Start here.
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-navy-600 dark:text-navy-300">
              Pick how they contacted you. We&apos;ll ask three more short questions and give
              you a Scam Likelihood Score with recovery steps matched to what has already
              happened.
            </p>
          </div>
          <p className="shrink-0 text-sm text-navy-500 dark:text-navy-400">
            About 60 seconds · nothing stored
          </p>
        </div>

        <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {ENTRY_OPTIONS.map((option) => {
            const Icon = icons[option.id] ?? MessageSquare;
            return (
              <li key={option.id}>
                <button
                  type="button"
                  onClick={() =>
                    router.push(`/tool/scam-risk-checker?channel=${option.id}`)
                  }
                  className="group flex h-full w-full flex-col items-start gap-2.5 rounded-xl border border-navy-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-emerald hover:shadow-md dark:border-navy-700 dark:bg-navy-800/60 dark:hover:border-emerald"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald/10 text-emerald transition group-hover:bg-emerald group-hover:text-white">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-navy-900 dark:text-white">
                    {option.shortLabel ?? option.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-5 text-sm text-navy-600 dark:text-navy-400">
          Already lost money?{' '}
          <Link
            href="/report-a-scam"
            className="font-semibold text-emerald-700 underline underline-offset-2 dark:text-emerald-400"
          >
            Go straight to the recovery steps
          </Link>{' '}
          — or{' '}
          <Link
            href="/tool/scam-risk-checker"
            className="inline-flex items-center gap-1 font-semibold text-emerald-700 underline underline-offset-2 dark:text-emerald-400"
          >
            open the full checker
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
