/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  /*
   * Static HTML export — required for Hostinger shared hosting, which serves
   * plain files via Apache and does not keep a Node process running. `next
   * start` and API route handlers do not work there; this produces an `out/`
   * folder of plain HTML/CSS/JS you upload as-is.
   *
   * Two features that need a live server are unavailable in this mode:
   *   - `headers()` below (security headers) — moved to public/.htaccess.
   *   - app/api/contact/route.ts — replaced by public/contact.php.
   * If you later move to a Node-capable host (Vercel, a VPS), both of those
   * are worth restoring; see README.md.
   */
  output: 'export',

  // Every route resolves to a folder + index.html (e.g. /about-us/index.html),
  // which Apache serves automatically for a directory request. No rewrite
  // rules are needed for clean URLs with this setting.
  trailingSlash: true,

  images: {
    // The static export has no server-side image optimizer to call.
    unoptimized: true,
  },
};

export default nextConfig;
