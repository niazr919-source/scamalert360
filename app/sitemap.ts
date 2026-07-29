import type { MetadataRoute } from 'next';
import { articles, articleHref } from '@/content';
import { categories } from '@/content/categories';
import { site } from '@/lib/site';

const STATIC_PAGES: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'daily' },
  { path: '/scams', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/tool/scam-risk-checker', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/report-a-scam', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about-us', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/editorial-policy', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.4, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Freshest article date stands in as the "site last modified" signal.
  const newest = articles.reduce(
    (latest, article) => (article.updated > latest ? article.updated : latest),
    articles[0]?.updated ?? '2026-01-01',
  );

  const staticEntries = STATIC_PAGES.map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: new Date(newest),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${site.url}/scams/${category.slug}`,
    lastModified: new Date(newest),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const articleEntries = articles.map((article) => ({
    url: `${site.url}${articleHref(article)}`,
    lastModified: new Date(article.updated),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...categoryEntries, ...articleEntries];
}
