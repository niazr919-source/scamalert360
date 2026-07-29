import Link from 'next/link';
import { ArrowRight, SearchX } from 'lucide-react';
import { articles, articleHref } from '@/content';
import { categories } from '@/content/categories';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <SearchX className="mx-auto h-12 w-12 text-emerald" aria-hidden="true" />
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-navy-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-navy-600 dark:text-navy-300">
        That page does not exist or has moved. If you arrived here from a link in an email or
        text message, treat that message with suspicion.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/scams"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          Browse all guides
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href="/tool/scam-risk-checker"
          className="inline-flex items-center gap-2 rounded-lg border border-navy-300 px-5 py-3 text-sm font-semibold text-navy-800 transition hover:bg-navy-50 dark:border-navy-600 dark:text-navy-100 dark:hover:bg-navy-800"
        >
          Check a suspicious message
        </Link>
      </div>

      <div className="mt-12 text-left">
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy-900 dark:text-white">
          Scam categories
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/scams/${category.slug}`}
                className="inline-block rounded-full border border-navy-200 px-3.5 py-1.5 text-sm font-medium text-navy-700 transition hover:border-emerald hover:text-emerald-700 dark:border-navy-700 dark:text-navy-300"
              >
                {category.shortName}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-8 font-display text-sm font-bold uppercase tracking-[0.14em] text-navy-900 dark:text-white">
          Popular guides
        </h2>
        <ul className="mt-3 space-y-2">
          {articles.slice(0, 4).map((article) => (
            <li key={article.slug}>
              <Link
                href={articleHref(article)}
                className="text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
