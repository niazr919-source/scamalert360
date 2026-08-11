import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

// Node runtime (not edge) — this is self-hosted on Hostinger's Node platform.
export const runtime = 'nodejs';

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Default social preview image for the site (home page and any route without
 * its own opengraph-image). Rendered at build time via Satori, so only inline
 * styles and a flexbox subset of CSS are available — no Tailwind, and every
 * element with more than one child needs an explicit `display: flex`.
 *
 * Brand tokens mirror the site: navy #0F172A background, emerald #10B981
 * accent.
 */
export default function OpengraphImage() {
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
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#10B981',
              marginRight: 20,
              fontSize: 38,
            }}
          >
            🛡️
          </div>
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 800, color: '#ffffff' }}>
            Scam
            <span style={{ color: '#34D399' }}>Alert</span>
            <span style={{ color: '#64748B' }}>360</span>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Recognize the scam. Recover the money.
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 12,
              fontSize: 32,
              color: '#94A3B8',
            }}
          >
            Independent, primary-sourced fraud prevention guides.
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', fontSize: 28, color: '#10B981', fontWeight: 700 }}>
            scamalert360.com
          </div>
          <div style={{ display: 'flex', fontSize: 24, color: '#64748B' }}>
            FTC · FBI IC3 · CFPB sourced
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
