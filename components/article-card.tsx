import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { articleHref } from '@/content';
import { categoryMap } from '@/content/categories';
import { formatDate, cn } from '@/lib/utils';
import type { Article } from '@/content/types';

export function ArticleCard({
  article,
  featured = false,
  showCategory = true,
}: {
  article: Article;
  featured?: boolean;
  showCategory?: boolean;
}) {
  const category = categoryMap[article.category];

  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-xl border border-navy-200 bg-white p-5 transition hover:border-emerald hover:shadow-md dark:border-navy-700 dark:bg-navy-800/40 dark:hover:border-emerald',
        featured && 'sm:p-7',
      )}
    >
      {showCategory ? (
        <p className="mb-3">
          <span className="inline-flex items-center rounded-full bg-navy-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-navy-700 dark:bg-navy-700 dark:text-navy-200">
            {category.shortName}
          </span>
        </p>
      ) : null}

      <h3
        className={cn(
          'font-display font-bold tracking-tight text-navy-900 dark:text-white',
          featured ? 'text-2xl leading-snug' : 'text-lg leading-snug',
        )}
      >
        <Link href={articleHref(article)} className="before:absolute before:inset-0">
          {article.shortTitle ?? article.title}
        </Link>
      </h3>

      <p
        className={cn(
          'mt-2.5 flex-1 leading-relaxed text-navy-600 dark:text-navy-400',
          featured ? 'text-[15px]' : 'text-sm',
        )}
      >
        {article.description}
      </p>

      <div className="mt-4 flex items-center gap-3 text-xs text-navy-500 dark:text-navy-400">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {article.readingMinutes} min read
        </span>
        <span aria-hidden="true">·</span>
        <span>Updated {formatDate(article.updated)}</span>
        <ArrowRight
          className="ml-auto h-4 w-4 text-emerald opacity-0 transition group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
