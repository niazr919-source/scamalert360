import { site } from './site';
import { DEFAULT_AUTHOR_ID, getPerson } from '@/content/authors';
import type { Article, Category, FaqItem } from '@/content/types';

const orgId = `${site.url}/#organization`;
const siteId = `${site.url}/#website`;

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': orgId,
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    foundingDate: site.founded,
    knowsAbout: [
      'Consumer fraud prevention',
      'Bank impersonation scams',
      'Payment fraud',
      'Phishing and smishing',
      'AI voice cloning fraud',
      'Identity theft recovery',
    ],
    publishingPrinciples: `${site.url}/editorial-policy`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'editorial',
      email: site.email,
      url: `${site.url}/contact`,
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': siteId,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: 'en-US',
    publisher: { '@id': orgId },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${site.url}/scams?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** Root graph rendered once in the layout. */
export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema(), websiteSchema()],
  };
}

/**
 * Author entity for a contributor.
 *
 * The editorial team is emitted as an Organization rather than a Person —
 * claiming a team is a person is a false statement in structured data, and
 * Google accepts Organization authors. `hasCredential` is only emitted when a
 * real, verifiable credential exists, and `url` only when a real public
 * profile is on file. Never populate either speculatively.
 */
export function personSchema(id: string) {
  const person = getPerson(id);
  const isTeam = person.id === DEFAULT_AUTHOR_ID;

  const base: Record<string, unknown> = {
    '@type': isTeam ? 'Organization' : 'Person',
    '@id': `${site.url}/about-us#${person.id}`,
    name: person.name,
    description: person.bio,
    knowsAbout: person.expertise,
  };

  if (!isTeam) {
    base.jobTitle = person.role;
    base.worksFor = { '@id': orgId };
  }
  if (person.credentials) {
    base.hasCredential = {
      '@type': 'EducationalOccupationalCredential',
      name: person.credentials,
    };
  }
  if (person.profileUrl) base.url = person.profileUrl;

  return base;
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function howToSchema(howTo: NonNullable<Article['howTo']>) {
  return {
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime,
    step: howTo.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function articleSchema(article: Article, url: string) {
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    inLanguage: 'en-US',
    datePublished: article.published,
    dateModified: article.updated,
    keywords: article.keywords.join(', '),
    wordCount: countWords(article),
    articleSection: article.category,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: personSchema(article.authorId),
    ...(article.reviewerId ? { reviewedBy: personSchema(article.reviewerId) } : {}),
    publisher: { '@id': orgId },
    isPartOf: { '@id': siteId },
    citation: article.sources.map((source) => ({
      '@type': 'CreativeWork',
      name: source.label,
      publisher: { '@type': 'Organization', name: source.publisher },
      url: source.url,
    })),
  };
}

/**
 * Full graph for an article page: Article + Breadcrumb + FAQ (+ HowTo).
 * Emitting one @graph rather than several script tags keeps the entities
 * linked by @id, which Google resolves more reliably.
 */
export function articleGraph(article: Article, category: Category, path: string) {
  const url = `${site.url}${path}`;
  const graph: object[] = [
    organizationSchema(),
    websiteSchema(),
    articleSchema(article, url),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Scam Guides', url: '/scams' },
      { name: category.shortName, url: `/scams/${category.slug}` },
      { name: article.shortTitle ?? article.title, url: path },
    ]),
    faqSchema(article.faq),
  ];

  if (article.howTo) graph.push(howToSchema(article.howTo));

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function collectionGraph(category: Category, articles: Article[]) {
  const path = `/scams/${category.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      {
        '@type': 'CollectionPage',
        '@id': `${site.url}${path}#collection`,
        name: category.title,
        description: category.description,
        url: `${site.url}${path}`,
        isPartOf: { '@id': siteId },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: articles.map((article, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: article.title,
            url: `${site.url}/scams/${article.category}/${article.slug}`,
          })),
        },
      },
      breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Scam Guides', url: '/scams' },
        { name: category.shortName, url: path },
      ]),
    ],
  };
}

export function pageGraph({
  path,
  name,
  description,
  breadcrumb,
  faq,
}: {
  path: string;
  name: string;
  description: string;
  breadcrumb: { name: string; url: string }[];
  faq?: FaqItem[];
}) {
  const graph: object[] = [
    organizationSchema(),
    {
      '@type': 'WebPage',
      '@id': `${site.url}${path}#webpage`,
      url: `${site.url}${path}`,
      name,
      description,
      isPartOf: { '@id': siteId },
      inLanguage: 'en-US',
    },
    breadcrumbSchema(breadcrumb),
  ];
  if (faq?.length) graph.push(faqSchema(faq));
  return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * Approximate word count across all text-bearing blocks. Used for the
 * `wordCount` schema property and the reading-time sanity check.
 */
function countWords(article: Article): number {
  const parts: string[] = [article.quickAnswer, ...article.keyTakeaways];

  for (const block of article.body) {
    switch (block.type) {
      case 'p':
      case 'h2':
      case 'h3':
        parts.push(block.text);
        break;
      case 'list':
        parts.push(...block.items);
        break;
      case 'checklist':
        parts.push(block.title, block.intro ?? '', ...block.items);
        break;
      case 'timeline':
        parts.push(
          block.title,
          block.intro ?? '',
          ...block.steps.flatMap((s) => [s.title, s.text]),
        );
        break;
      case 'table':
        parts.push(block.caption ?? '', ...block.headers, ...block.rows.flat());
        break;
      case 'alert':
        parts.push(block.title, block.text);
        break;
      case 'quote':
        parts.push(block.text, block.source);
        break;
      case 'keyStat':
        parts.push(block.value, block.label);
        break;
      case 'report':
        parts.push(block.title ?? '', block.text ?? '');
        break;
    }
  }

  for (const item of article.faq) parts.push(item.question, item.answer);

  return parts.join(' ').trim().split(/\s+/).filter(Boolean).length;
}

export { countWords };
