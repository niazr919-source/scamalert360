import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Tag } from 'lucide-react';
import {
  allArticleParams,
  articleHref,
  getArticle,
  getRelatedArticles,
} from '@/content';
import { categoryMap } from '@/content/categories';
import { getPerson } from '@/content/authors';
import { ArticleBody } from '@/components/article-body';
import { ArticleCard } from '@/components/article-card';
import { ContentRecommendationAd, SidebarAd } from '@/components/ads';
import { FaqAccordion, HowToSteps } from '@/components/content-blocks';
import {
  AuthorByline,
  Breadcrumbs,
  JsonLd,
  QuickAnswer,
  SourcesList,
  TableOfContents,
} from '@/components/ui';
import { articleGraph } from '@/lib/schema';
import { site } from '@/lib/site';

type Params = { category: string; slug: string };

export function generateStaticParams() {
  return allArticleParams();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) return {};

  const path = articleHref(article);
  const author = getPerson(article.authorId);
  // The <title> tag needs to fit Google's ~60-char SERP display, so it uses
  // shortTitle where one exists. The full, descriptive `article.title` is
  // still used for the on-page <h1> and for OpenGraph/Twitter cards, which
  // have more room and read better with the complete headline.
  const metaTitle = article.shortTitle ?? article.title;

  return {
    title: metaTitle,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: author.name }],
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url: `${site.url}${path}`,
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [author.name],
      section: categoryMap[article.category].name,
      tags: article.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { category: categorySlug, slug } = await params;
  const article = getArticle(categorySlug, slug);
  if (!article) notFound();

  const category = categoryMap[article.category];
  const path = articleHref(article);
  const related = getRelatedArticles(article);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={articleGraph(article, category, path)} />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="min-w-0">
          <Breadcrumbs
            trail={[
              { href: '/', label: 'Home' },
              { href: '/scams', label: 'Scam Guides' },
              { href: `/scams/${category.slug}`, label: category.shortName },
              { label: article.shortTitle ?? article.title },
            ]}
          />

          <header>
            <Link
              href={`/scams/${category.slug}`}
              className="inline-flex items-center rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700 transition hover:bg-emerald/20 dark:text-emerald-400"
            >
              {category.shortName}
            </Link>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-[42px] dark:text-white">
              {article.title}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-navy-600 dark:text-navy-300">
              {article.description}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-navy-500 dark:text-navy-400">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {article.readingMinutes} minute read
            </p>

            <AuthorByline
              authorId={article.authorId}
              reviewerId={article.reviewerId}
              published={article.published}
              updated={article.updated}
            />
          </header>

          {/* max-w-prose keeps the reading measure comfortable on wide screens */}
          <div className="mt-2 max-w-prose">
            <QuickAnswer text={article.quickAnswer} takeaways={article.keyTakeaways} />
            <TableOfContents blocks={article.body} />
            <ArticleBody blocks={article.body} adId={article.slug} />

            {article.howTo ? (
              <HowToSteps
                name={article.howTo.name}
                description={article.howTo.description}
                steps={article.howTo.steps}
              />
            ) : null}

            <FaqAccordion items={article.faq} />
            <SourcesList sources={article.sources} />

            <section className="mt-10 rounded-xl border border-navy-200 bg-navy-50/60 p-5 dark:border-navy-700 dark:bg-navy-800/40">
              <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em] text-navy-900 dark:text-white">
                <Tag className="h-4 w-4 text-emerald" aria-hidden="true" />
                Topics covered
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {article.keywords.map((keyword) => (
                  <li
                    key={keyword}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-navy-600 ring-1 ring-navy-200 dark:bg-navy-800 dark:text-navy-300 dark:ring-navy-700"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-8 rounded-xl border border-navy-200 p-4 text-sm leading-relaxed text-navy-600 dark:border-navy-700 dark:text-navy-400">
              <strong className="font-semibold text-navy-900 dark:text-white">
                Editorial note:
              </strong>{' '}
              This guide is general consumer education, not legal or financial advice.
              Dispute deadlines, liability limits and reimbursement policies vary by
              institution and change over time. Confirm your specific rights with your bank
              or a qualified professional. See our{' '}
              <Link href="/editorial-policy" className="font-medium underline">
                editorial policy
              </Link>{' '}
              for how we research and review this content.
            </p>
          </div>

          <ContentRecommendationAd id={`${article.slug}-native`} />

          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
              Related guides
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </section>
        </article>

        <aside>
          <SidebarAd id={`${article.slug}-halfpage`} />
        </aside>
      </div>
    </div>
  );
}
