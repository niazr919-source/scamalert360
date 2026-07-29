'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, ShieldCheck, X } from 'lucide-react';
import { primaryNav, site } from '@/lib/site';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile drawer whenever navigation completes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-navy-100 bg-white/85 backdrop-blur-md dark:border-navy-800 dark:bg-navy-900/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-display text-lg font-bold tracking-tight text-navy-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald text-white">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            Scam<span className="text-emerald">Alert</span>
          </span>
          <span className="sr-only">{site.name} home</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition',
                  active
                    ? 'bg-emerald/10 text-emerald-700 dark:text-emerald-300'
                    : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900 dark:text-navy-300 dark:hover:bg-navy-800 dark:hover:text-white',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-navy-200 text-navy-600 lg:hidden dark:border-navy-700 dark:text-navy-300"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-navy-100 bg-white px-4 py-3 lg:hidden dark:border-navy-800 dark:bg-navy-900"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 dark:text-navy-200 dark:hover:bg-navy-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/report-a-scam"
                className="mt-1 block rounded-lg bg-emerald px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Report a Scam
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
