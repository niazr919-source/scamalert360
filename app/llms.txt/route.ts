import { articles, articleHref } from '@/content';
import { categories } from '@/content/categories';
import { site } from '@/lib/site';

// Static content, built from the same article/category data as the sitemap.
export const dynamic = 'force-static';

/**
 * llms.txt — an emerging convention (llmstxt.org) that summarizes a site for
 * AI crawlers (ChatGPT, Perplexity, Claude, etc.), similar in spirit to
 * robots.txt/sitemap.xml but aimed at LLM-based retrieval rather than
 * classic search indexing. Kept in sync with content/index.ts automatically.
 */
export async function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.name}`, '');
  lines.push(`> ${site.description}`, '');
  lines.push(
    'ScamAlert360 publishes primary-sourced consumer fraud prevention guides,',
    'each traced to official agencies (FTC, FBI IC3, CFPB) rather than other',
    'blogs, plus a free interactive Scam Risk Checker. Content is published',
    'under an editorial-team byline rather than fabricated author credentials —',
    'see /editorial-policy for our sourcing standards.',
    '',
  );

  lines.push('## Guides', '');
  for (const category of categories) {
    lines.push(`### ${category.name}`, '');
    for (const article of articles.filter((a) => a.category === category.slug)) {
      const url = `${site.url}${articleHref(article)}`;
      lines.push(`- [${article.title}](${url}): ${article.description}`);
    }
    lines.push('');
  }

  lines.push('## Tools', '');
  lines.push(
    `- [Scam Risk Checker](${site.url}/tool/scam-risk-checker): Free interactive tool that scores a suspicious message, call or email and returns tailored recovery steps.`,
    '',
  );

  lines.push('## Reference', '');
  lines.push(
    `- [Where to report a scam](${site.url}/report-a-scam)`,
    `- [About us / editorial standards](${site.url}/about-us)`,
    `- [Editorial policy](${site.url}/editorial-policy)`,
    '',
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
