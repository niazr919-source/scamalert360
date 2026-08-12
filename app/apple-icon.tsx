import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** iOS home-screen icon when a visitor bookmarks the site. */
export default function AppleIcon() {
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
        }}
      >
        <svg width="104" height="104" viewBox="0 0 24 24" fill="none">
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
