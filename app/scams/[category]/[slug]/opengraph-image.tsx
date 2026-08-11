import { ImageResponse } from 'next/og';
import { allArticleParams, getArticle } from '@/content';
import { categoryMap } from '@/content/categories';
import { site } from '@/lib/site';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Prerender one image per guide at build time, matching the page routes.
export function generateStaticParams() {
  return allArticleParams();
}

type Params = { category: string; slug: string };

export async function generateImageMetadata({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  return [{ id: 'og', alt: article?.title ?? site.name, size, contentType }];
}

/**
 * Per-guide social preview. Satori subset only — inline styles, flexbox, and
 * every multi-child element needs `display: flex`. Title font size steps down
 * for longer headlines so it never overflows the card.
 */
export default async function OpengraphImage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  // Falls back to the site default look if a slug ever doesn't resolve.
  const title = article?.title ?? site.name;
  const categoryName = article ? categoryMap[article.category].name : '';
  const titleSize = title.length > 78 ? 52 : title.length > 52 ? 62 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0F172A',
          padding: '64px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Category chip */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {categoryName ? (
            <div
              style={{
                display: 'flex',
                padding: '10px 22px',
                borderRadius: 999,
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34D399',
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              {categoryName}
            </div>
          ) : (
            <div style={{ display: 'flex' }} />
          )}
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: titleSize,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>

        {/* Footer: wordmark + label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: 12,
                background: '#10B981',
                marginRight: 16,
                fontSize: 28,
              }}
            >
              🛡️
            </div>
            <div style={{ display: 'flex', fontSize: 32, fontWeight: 800, color: '#ffffff' }}>
              Scam
              <span style={{ color: '#34D399' }}>Alert</span>
              <span style={{ color: '#64748B' }}>360</span>
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 24, color: '#64748B' }}>
            Free fraud guide
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
