import type { Metadata } from 'next';
import Link from 'next/link';
import { articles, getArticlesByCategory } from '@/content';
import { categories } from '@/content/categories';
import { ArticleCard } from '@/components/article-card';
import { Breadcrumbs, JsonLd, SectionHeading } from '@/components/ui';
import { ContentRecommendationAd, InFeedAd } from '@/components/ads';
import { pageGraph } from '@/lib/schema';
import { site } from '@/lib/site';

const title = 'All Scam Guides: Banking, Payments, AI and Everyday Fraud';
const description =
  'Every ScamAlert360 guide in one place — bank impersonation texts, P2P payment traps, AI voice cloning, QR code phishing, fake job checks and card skimming.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/scams' },
  openGraph: { title, description, url: `${site.url}/scams`, type: 'website' },
};

export default function ScamsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={pageGraph({
          path: '/scams',
          name: title,
          description,
          breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Scam Guides', url: '/scams' },
          ],
        })}
      />
      <Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'Scam Guides' }]} />

      <SectionHeading
        eyebrow={`${articles.length} guides`}
        title="Every scam guide on ScamAlert360"
        description="Grouped by how the fraud reaches you. Each guide explains the mechanism, the red flags, a recovery timeline, and where to report."
      />

      <nav aria-label="Jump to category" className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <a
            key={category.slug}
            href={`#${category.slug}`}
            className="rounded-full border border-navy-200 px-3.5 py-1.5 text-sm font-medium text-navy-700 transition hover:border-emerald hover:text-emerald-700 dark:border-navy-700 dark:text-navy-300 dark:hover:text-emerald-400"
          >
            {category.shortName}
          </a>
        ))}
      </nav>

      {categories.map((category, i) => {
        const items = getArticlesByCategory(category.slug);
        return (
          <section key={category.slug} id={category.slug} className="mt-14 scroll-mt-28">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
                  {category.name}
                </h2>
                <p className="mt-2 leading-relaxed text-navy-600 dark:text-navy-400">
                  {category.intro}
                </p>
              </div>
              <Link
                href={`/scams/${category.slug}`}
                className="shrink-0 text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
              >
                View hub →
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((article) => (
                <ArticleCard key={article.slug} article={article} showCategory={false} />
              ))}
            </div>
            {i === 1 ? (
              <div className="mt-8">
                <InFeedAd id="scams-index-infeed" />
              </div>
            ) : null}
          </section>
        );
      })}

      <ContentRecommendationAd id="scams-index-native" />
    </div>
  );
}
