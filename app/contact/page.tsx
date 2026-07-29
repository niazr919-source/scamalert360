import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock3, Mail, Siren } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { ReportingButtons } from '@/components/content-blocks';
import { Breadcrumbs, JsonLd } from '@/components/ui';
import { pageGraph } from '@/lib/schema';
import { site } from '@/lib/site';

const title = 'Contact ScamAlert & Fraud Reporting Desk';
const description =
  'Report a scam you encountered, submit a correction, or reach our editorial team. Includes the official agency channels to use if you have lost money.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title, description, url: `${site.url}/contact`, type: 'website' },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={pageGraph({
          path: '/contact',
          name: title,
          description,
          breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ],
        })}
      />
      <Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'Contact' }]} />

      <header className="max-w-3xl">
        <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-navy-900 dark:text-white">
          Contact us
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-navy-600 dark:text-navy-300">
          Report a scam you have encountered, flag an error in a guide, or send a research
          lead. Every message is read by a member of the editorial team.
        </p>
      </header>

      {/* Emergency notice sits above the form deliberately — anyone mid-crisis
          needs the agency channels before they need our reply. */}
      <section
        className="mt-8 rounded-xl border border-crimson/40 bg-crimson/[0.05] p-5 dark:bg-crimson/[0.09]"
        role="alert"
      >
        <h2 className="flex items-center gap-2 font-display text-lg font-bold text-red-800 dark:text-red-300">
          <Siren className="h-5 w-5 shrink-0 text-crimson" aria-hidden="true" />
          If you have just lost money, do not wait for our reply
        </h2>
        <p className="mt-2 leading-relaxed text-navy-700 dark:text-navy-300">
          ScamAlert is a publisher, not an emergency service or a recovery agency. We
          cannot contact your bank, freeze a transfer, or recover funds on your behalf. Speed
          matters enormously in the first hour, so act through official channels now:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-navy-700 dark:text-navy-300">
          <li>
            Call your bank on the number printed on your card — not a number from a caller,
            a text, or a search result.
          </li>
          <li>Ask for a hold on the account and a recall attempt on any transfer.</li>
          <li>File with the agencies below the same day.</li>
        </ol>
        <p className="mt-3 text-sm font-medium text-navy-700 dark:text-navy-300">
          Full walkthrough: <Link href="/report-a-scam" className="underline">where and how to report a scam</Link>.
        </p>
      </section>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
            Send us a message
          </h2>
          <p className="mt-2 text-navy-600 dark:text-navy-400">
            Please do not include account numbers, card numbers, passwords, one-time codes or
            Social Security numbers. Describe what happened instead — that is what helps us.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-navy-200 bg-navy-50/60 p-5 dark:border-navy-700 dark:bg-navy-800/40">
            <h2 className="font-display font-semibold text-navy-900 dark:text-white">
              Fraud reporting desk
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
              Seeing a scam we have not covered? Our reporting desk collects new lures,
              intercepted text and emerging variants. Screenshots with sender details are
              especially useful — redact your own account information first.
            </p>
            <a
              href={`mailto:${site.reportEmail}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.reportEmail}
            </a>
          </div>

          <div className="rounded-xl border border-navy-200 p-5 dark:border-navy-700">
            <h2 className="font-display font-semibold text-navy-900 dark:text-white">
              Editorial &amp; corrections
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
              Corrections, press enquiries and privacy requests.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </a>
            <p className="mt-4 flex items-start gap-2 border-t border-navy-200 pt-4 text-sm text-navy-600 dark:border-navy-700 dark:text-navy-400">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />
              We aim to reply within two business days. Corrections that could cause
              financial harm are prioritized.
            </p>
          </div>

          <div className="rounded-xl border border-navy-200 p-5 dark:border-navy-700">
            <h2 className="font-display font-semibold text-navy-900 dark:text-white">
              What we cannot do
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
              <li>Recover money or negotiate with your bank on your behalf.</li>
              <li>Give legal, financial or tax advice about your specific situation.</li>
              <li>Investigate individuals, trace payments, or identify a scammer.</li>
              <li>Act as or contact a law enforcement agency for you.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
              Be wary of anyone offering to recover your losses for an upfront fee. Targeting
              people who have already been defrauded is one of the most common follow-on
              scams.
            </p>
          </div>
        </aside>
      </div>

      <ReportingButtons
        title="Official reporting channels"
        text="These are the agencies that can actually act on a fraud report. All are free to use."
        agencies={['ftc', 'ic3', 'cfpb', 'identityTheft']}
      />
    </div>
  );
}
