import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { footerNav, site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-navy-100 bg-navy-50/60 dark:border-navy-800 dark:bg-navy-950/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-navy-900 dark:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald text-white">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              Scam<span className="-ml-2 text-emerald">Alert</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-navy-600 dark:text-navy-400">
              {site.tagline} Independent fraud prevention guidance, checked against primary
              sources.
            </p>
            <p className="mt-4 text-sm text-navy-500 dark:text-navy-400">
              Editorial:{' '}
              <a
                className="font-medium text-emerald-700 hover:underline dark:text-emerald-400"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-900 dark:text-white">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-600 transition hover:text-emerald-700 dark:text-navy-400 dark:hover:text-emerald-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-amber-300/60 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
          <strong className="font-semibold">Important disclaimer:</strong> ScamAlert
          publishes general consumer education. Nothing on this site is legal, financial,
          investment or tax advice, and reading it does not create a professional
          relationship. Fraud rules, dispute deadlines and liability limits change and vary
          by institution and jurisdiction. If you have lost money, contact your bank and the
          official agencies listed on our{' '}
          <Link href="/report-a-scam" className="font-semibold underline">
            reporting page
          </Link>
          .
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-navy-200 pt-6 text-sm text-navy-500 sm:flex-row sm:items-center sm:justify-between dark:border-navy-800 dark:text-navy-400">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms
            </Link>
            <Link href="/editorial-policy" className="hover:underline">
              Editorial Policy
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
