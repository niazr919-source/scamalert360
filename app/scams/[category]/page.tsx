import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getArticlesByCategory } from '@/content';
import { categories, getCategory } from '@/content/categories';
import { ArticleCard } from '@/components/article-card';
import { Breadcrumbs, JsonLd } from '@/components/ui';
import { ContentRecommendationAd, InFeedAd } from '@/components/ads';
import { ReportingButtons } from '@/components/content-blocks';
import { collectionGraph } from '@/lib/schema';
import { site } from '@/lib/site';

type Params = { category: string };

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  const path = `/scams/${category.slug}`;
  return {
    title: category.title,
    description: category.description,
    keywords: category.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `${site.url}${path}`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getArticlesByCategory(category.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={collectionGraph(category, items)} />
      <Breadcrumbs
        trail={[
          { href: '/', label: 'Home' },
          { href: '/scams', label: 'Scam Guides' },
          { label: category.shortName },
        ]}
      />

      <header className="max-w-3xl">
        <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-navy-900 dark:text-white">
          {category.name}
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-navy-600 dark:text-navy-300">
          {category.intro}
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white">
            {items.length} {items.length === 1 ? 'guide' : 'guides'} in this hub
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {items.map((article) => (
              <ArticleCard key={article.slug} article={article} showCategory={false} />
            ))}
          </div>

          <div className="mt-8">
            <InFeedAd id={`category-${category.slug}-infeed`} />
          </div>

          <section className="mt-12">
            <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white">
              Other scam categories
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {otherCategories.map((other) => (
                <Link
                  key={other.slug}
                  href={`/scams/${other.slug}`}
                  className="group rounded-xl border border-navy-200 p-4 transition hover:border-emerald dark:border-navy-700"
                >
                  <p className="font-display font-semibold text-navy-900 dark:text-white">
                    {other.shortName}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-navy-600 dark:text-navy-400">
                    {getArticlesByCategory(other.slug).length} guides
                  </p>
                  <ArrowRight
                    className="mt-3 h-4 w-4 text-emerald opacity-0 transition group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-navy-200 bg-navy-50/60 p-5 dark:border-navy-700 dark:bg-navy-800/40">
            <h2 className="font-display font-semibold text-navy-900 dark:text-white">
              Free Scam Risk Checker
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
              Describe the message or call you received and get a risk score plus the exact
              next steps.
            </p>
            <Link
              href="/tool/scam-risk-checker"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Start the check
            </Link>
          </div>
          <InFeedAd id={`category-${category.slug}-sidebar`} />
        </aside>
      </div>

      <ReportingButtons
        title="Official reporting channels"
        text="Contact your bank first if money has moved, then file with the agencies below."
        agencies={['ftc', 'ic3', 'cfpb']}
      />
      <ContentRecommendationAd id={`category-${category.slug}-native`} />
    </div>
  );
}
