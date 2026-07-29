import type { Article, CategorySlug } from './types';
import { article as bankFraudAlert } from './articles/bank-fraud-alert-text-scam';
import { article as p2pAccidental } from './articles/p2p-accidental-transfer-scam';
import { article as voiceCloning } from './articles/ai-voice-cloning-emergency-scams';
import { article as quishing } from './articles/quishing-qr-code-scams';
import { article as fakeRemoteWork } from './articles/fake-remote-work-check-deposit-scams';
import { article as rfidSkimming } from './articles/contactless-card-rfid-skimming';
import { article as uspsDelivery } from './articles/usps-package-delivery-text-scam';
import { article as unpaidToll } from './articles/unpaid-toll-text-scam';
import { article as techSupport } from './articles/tech-support-popup-scam';
import { article as pigButchering } from './articles/pig-butchering-investment-scam';
import { article as governmentImposter } from './articles/irs-social-security-imposter-calls';
import { article as marketplace } from './articles/facebook-marketplace-scams';
import { article as giftCards } from './articles/gift-card-scams';

/** Sorted newest-updated first, which drives the homepage "Latest guides" rail. */
export const articles: Article[] = [
  quishing,
  p2pAccidental,
  bankFraudAlert,
  voiceCloning,
  fakeRemoteWork,
  rfidSkimming,
  uspsDelivery,
  unpaidToll,
  techSupport,
  pigButchering,
  governmentImposter,
  marketplace,
  giftCards,
].sort((a, b) => (a.updated < b.updated ? 1 : -1));

export function getArticle(category: string, slug: string): Article | undefined {
  return articles.find((a) => a.category === category && a.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const related = article.related
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => Boolean(a) && a!.slug !== article.slug);

  if (related.length >= limit) return related.slice(0, limit);

  // Backfill with same-category guides, then anything else, so the
  // recommendation grid is never short.
  const seen = new Set([article.slug, ...related.map((a) => a.slug)]);
  const backfill = [
    ...getArticlesByCategory(article.category),
    ...articles,
  ].filter((a) => !seen.has(a.slug) && (seen.add(a.slug), true));

  return [...related, ...backfill].slice(0, limit);
}

export function articleHref(article: Pick<Article, 'category' | 'slug'>) {
  return `/scams/${article.category}/${article.slug}`;
}

/** Every article path, used by generateStaticParams and the sitemap. */
export function allArticleParams() {
  return articles.map((a) => ({ category: a.category, slug: a.slug }));
}

export * from './types';
export * from './categories';
export * from './authors';
