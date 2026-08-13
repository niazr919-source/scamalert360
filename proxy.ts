import { NextResponse, type NextRequest } from 'next/server';

/**
 * Forces HTTPS and applies HSTS.
 *
 * (This is the Next.js 16 "proxy" convention — the direct successor to the
 * old `middleware.ts`. Renamed to clear the deprecation warning Next.js 16
 * prints for the middleware file name, which was the only non-clean line in
 * the production build log.)
 *
 * The site has a valid TLS certificate, but the host also answers plain HTTP
 * on port 80 without redirecting — so any request that arrives over http://
 * is served insecurely and the browser shows "Not Secure". This 308-redirects
 * those requests to the https:// equivalent.
 *
 * Behind Hostinger's proxy the Node process sees the original scheme in the
 * `x-forwarded-proto` header, not in `request.url` (which is always the
 * internal http origin). So the check reads that header rather than the URL.
 */
export function proxy(request: NextRequest) {
  const proto = request.headers.get('x-forwarded-proto');

  // Only redirect when we can positively confirm the request came in over
  // plain HTTP. If the header is absent (e.g. local dev, or a host that
  // doesn't set it), do nothing rather than risk a redirect loop.
  if (proto === 'http') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }

  // On secure requests, add HSTS so browsers refuse plain HTTP on future
  // visits without even trying. Deliberately conservative: one year, apex
  // only. `includeSubDomains` / `preload` are intentionally omitted — they
  // are hard to walk back and would force HTTPS onto any subdomain added
  // later (email, staging, etc.). Tighten once the domain setup is settled.
  const response = NextResponse.next();
  if (proto === 'https') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000');
  }
  return response;
}

export const config = {
  /*
   * Run on everything except Next.js internals and static assets — those are
   * already same-origin and don't need the scheme check, and skipping them
   * keeps the proxy off the hot path for every image and script.
   */
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
