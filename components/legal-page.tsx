import { Breadcrumbs } from './ui';
import { formatDate } from '@/lib/utils';

/**
 * Shared shell for policy and about pages. Constrains the measure, applies
 * consistent typography to plain HTML children, and renders the last-updated
 * stamp that ad networks and reviewers look for.
 */
export function LegalPage({
  title,
  intro,
  updated,
  breadcrumb,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  breadcrumb: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="max-w-prose">
        <Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: breadcrumb }]} />
        <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-navy-900 dark:text-white">
          {title}
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-navy-600 dark:text-navy-300">
          {intro}
        </p>
        <p className="mt-4 text-sm text-navy-500 dark:text-navy-400">
          Last updated: <time dateTime={updated}>{formatDate(updated)}</time>
        </p>

        <div
          className={[
            'mt-10',
            '[&_h2]:mt-10 [&_h2]:scroll-mt-28 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-navy-900 dark:[&_h2]:text-white',
            '[&_h3]:mt-7 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-navy-900 dark:[&_h3]:text-white',
            '[&_p]:my-4 [&_p]:text-[17px] [&_p]:leading-[1.75] [&_p]:text-navy-700 dark:[&_p]:text-navy-300',
            '[&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-[17px] [&_ul]:text-navy-700 dark:[&_ul]:text-navy-300',
            '[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:text-[17px] [&_ol]:text-navy-700 dark:[&_ol]:text-navy-300',
            '[&_li]:leading-[1.7] [&_li]:marker:text-emerald',
            '[&_a]:font-medium [&_a]:text-emerald-700 [&_a]:underline-offset-2 hover:[&_a]:underline dark:[&_a]:text-emerald-400',
            '[&_strong]:font-semibold [&_strong]:text-navy-900 dark:[&_strong]:text-white',
          ].join(' ')}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
