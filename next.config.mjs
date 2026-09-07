/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  /*
   * Development only. Next.js 16 blocks requests for `/_next/*` dev resources
   * whose Host differs from the one the browser was opened on, so previewing
   * `next dev` through anything but plain `localhost` returns 403 for every
   * client chunk — the page renders server-side but never hydrates. Listing
   * the loopback hosts here allows the preview browser to load them. Ignored
   * entirely by `next build` / `next start`.
   */
  allowedDevOrigins: ['127.0.0.1', 'localhost'],

  /*
   * Hostinger's Git-connected hosting for this project (per the "Framework:
   * Next.js" / "Node version: 22.x" dashboard) runs a real Node process and
   * builds Next.js natively — it is not the classic Apache/public_html
   * shared hosting that a static export targets. So this stays a normal
   * server build with API routes, `headers()`, and the standard image
   * pipeline all working as usual.
   *
   * If a *different* Hostinger plan (classic hPanel shared hosting) is ever
   * used instead, see the "Static export" section of README.md — the repo
   * history (commit "Rebrand to ScamAlert360 and convert to static export
   * for Hostinger") has the output:'export' config to revive.
   */
  /*
   * No `output` override: this is a stock Next.js server build (`next build`
   * then `next start`), which is what the host's "Build and output settings:
   * Default" preset expects.
   *
   * `output: 'standalone'` was tried here previously, on the inference that
   * the platform ran `node server.js` because its dashboard exposes no
   * editable start-command field. That was never confirmed, and no deploy
   * ever succeeded with it. It also actively conflicts with `next start`,
   * which Next.js 16 refuses to pair with standalone output, and it required
   * a postbuild step to copy `.next/static` and `public/` into the
   * standalone tree, without which every CSS and JS file 404s. See DEPLOY.md.
   */
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
