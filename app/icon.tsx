import { ImageResponse } from 'next/og';

// Node runtime (self-hosted on Hostinger's Node platform, not edge).
export const runtime = 'nodejs';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/**
 * Browser-tab favicon, generated at build time via Satori rather than a
 * static file. Kept in sync with the header/footer wordmark icon: an emerald
 * rounded square with a white shield. Next.js serves this automatically at
 * /icon and references it from the document head — no manual <link> needed.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#10B981',
          borderRadius: 7,
        }}
      >
        {/* Minimal shield glyph, matching the lucide-react ShieldCheck used
            elsewhere in the UI, simplified for legibility at 32x32. */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z"
            fill="#ffffff"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
