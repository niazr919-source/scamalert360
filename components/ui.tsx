import Link from 'next/link';
import { ChevronRight, ListTree, ShieldCheck, UserRound } from 'lucide-react';
import { getPerson } from '@/content/authors';
import { formatDate, slugify, cn } from '@/lib/utils';
import type { Block } from '@/content/types';

export function Breadcrumbs({ trail }: { trail: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-500 dark:text-navy-400">
        {trail.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1">
            {i > 0 ? (
              <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            ) : null}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="transition hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-navy-700 dark:text-navy-300" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function TableOfContents({ blocks }: { blocks: Block[] }) {
  const headings = blocks.filter(
    (b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2',
  );
  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="my-8 rounded-xl border border-navy-200 bg-navy-50/60 p-5 dark:border-navy-700 dark:bg-navy-800/40"
    >
      <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em] text-navy-900 dark:text-white">
        <ListTree className="h-4 w-4 text-emerald" aria-hidden="true" />
        In this guide
      </h2>
      <ol className="mt-3 space-y-2 text-[15px]">
        {headings.map((heading, i) => (
          <li key={heading.text} className="flex gap-2.5">
            <span className="font-mono text-xs text-navy-400 dark:text-navy-500">
              {String(i + 1).padStart(2, '0')}
            </span>
            <a
              href={`#${slugify(heading.text)}`}
              className="text-navy-700 underline-offset-2 transition hover:text-emerald-700 hover:underline dark:text-navy-300 dark:hover:text-emerald-400"
            >
              {heading.text}
            </a>
          </li>
        ))}
        <li className="flex gap-2.5">
          <span className="font-mono text-xs text-navy-400 dark:text-navy-500">
            {String(headings.length + 1).padStart(2, '0')}
          </span>
          <a
            href="#faq"
            className="text-navy-700 underline-offset-2 transition hover:text-emerald-700 hover:underline dark:text-navy-300 dark:hover:text-emerald-400"
          >
            Frequently asked questions
          </a>
        </li>
      </ol>
    </nav>
  );
}

export function AuthorByline({
  authorId,
  reviewerId,
  published,
  updated,
}: {
  authorId: string;
  reviewerId?: string;
  published: string;
  updated: string;
}) {
  const author = getPerson(authorId);
  const reviewer = reviewerId ? getPerson(reviewerId) : undefined;

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-xl border border-navy-200 bg-navy-50/50 p-4 dark:border-navy-700 dark:bg-navy-800/40 sm:flex-row sm:items-center sm:gap-6">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white dark:bg-emerald">
          {author.initials}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-navy-900 dark:text-white">
            <UserRound className="mr-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
            Written by{' '}
            {author.profileUrl ? (
              <a
                href={author.profileUrl}
                target="_blank"
                rel="noopener noreferrer me"
                className="underline underline-offset-2"
              >
                {author.name}
              </a>
            ) : (
              author.name
            )}
          </p>
          <p className="truncate text-xs text-navy-600 dark:text-navy-400">
            {author.role}
            {author.credentials ? ` · ${author.credentials}` : ''}
          </p>
        </div>
      </div>

      {/*
        Claims a process we actually perform, rather than naming a reviewer who
        may not exist. If a real named reviewer is set on the article, we credit
        them instead.
      */}
      <div className="flex min-w-0 flex-1 items-center gap-3 sm:border-l sm:border-navy-200 sm:pl-6 dark:sm:border-navy-700">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald/15 text-emerald-700 dark:text-emerald-400">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-navy-900 dark:text-white">
            {reviewer ? `Reviewed by ${reviewer.name}` : 'Checked against primary sources'}
          </p>
          <p className="text-xs text-navy-600 dark:text-navy-400">
            {reviewer?.credentials ?? (
              <>
                FTC, FBI IC3 and CFPB —{' '}
                <Link href="/editorial-policy" className="underline underline-offset-2">
                  how we verify
                </Link>
              </>
            )}
          </p>
        </div>
      </div>

      <dl className="shrink-0 text-xs text-navy-500 sm:border-l sm:border-navy-200 sm:pl-6 dark:text-navy-400 dark:sm:border-navy-700">
        <div className="flex gap-1.5">
          <dt className="font-medium">Published:</dt>
          <dd>
            <time dateTime={published}>{formatDate(published)}</time>
          </dd>
        </div>
        <div className="mt-0.5 flex gap-1.5">
          <dt className="font-medium">Updated:</dt>
          <dd>
            <time dateTime={updated}>{formatDate(updated)}</time>
          </dd>
        </div>
      </dl>
    </div>
  );
}

export function QuickAnswer({ text, takeaways }: { text: string; takeaways: string[] }) {
  return (
    <section className="my-8 rounded-xl border-l-4 border-emerald bg-emerald/[0.06] p-5 dark:bg-emerald/[0.09] sm:p-6">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
        The short answer
      </h2>
      <p className="mt-2.5 text-[17px] font-medium leading-relaxed text-navy-800 dark:text-navy-100">
        {text}
      </p>
      <ul className="mt-4 space-y-2 border-t border-emerald/25 pt-4">
        {takeaways.map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed">
            <span
              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
              aria-hidden="true"
            />
            <span className="text-navy-700 dark:text-navy-300">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SourcesList({
  sources,
}: {
  sources: { label: string; publisher: string; url: string }[];
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
        Sources &amp; further reading
      </h2>
      <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">
        Every guide on ScamAlert is checked against primary sources from US consumer
        protection and law enforcement agencies.
      </p>
      <ol className="mt-4 space-y-2.5 text-[15px]">
        {sources.map((source, i) => (
          <li key={source.url} className="flex gap-3">
            <span className="font-mono text-xs text-navy-400 dark:text-navy-500">
              [{i + 1}]
            </span>
            <span className="min-w-0 text-navy-700 dark:text-navy-300">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                {source.label}
              </a>{' '}
              — {source.publisher}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty leading-relaxed text-navy-600 dark:text-navy-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

/** Serializes JSON-LD safely into a script tag. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for the `<` character so a string
      // value can never break out of the script element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
