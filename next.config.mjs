/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

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
   * `standalone` output: the platform's Next.js preset exposes no editable
   * "start command" field, which is characteristic of PaaS integrations that
   * run `node server.js` from a self-contained standalone build rather than
   * `next start`. Without this, `next build` succeeds but the platform has
   * nothing to actually launch afterward — the exact "build passes, nothing
   * ever starts, empty runtime logs" symptom seen in production. This traces
   * only the files each route actually needs into `.next/standalone/`,
   * including a minimal `node_modules`, and writes `server.js` as the entry
   * point. Harmless for platforms that instead run `next start` directly.
   */
  output: 'standalone',
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
