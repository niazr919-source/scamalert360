import { NextResponse, type NextRequest } from 'next/server';

/**
 * Applies HSTS. Deliberately does NOT redirect http:// to https://.
 *
 * (This is the Next.js 16 "proxy" convention — the direct successor to the
 * old `middleware.ts`.)
 *
 * An earlier version of this file 308-redirected any request whose
 * `x-forwarded-proto` was `http` over to https. That broke deployment: every
 * deploy since it was introduced failed, while the build logs stayed clean.
 *
 * The reason is that the platform probes the Node process directly over plain
 * HTTP to decide whether the app came up. Next.js sets
 * `x-forwarded-proto: http` on those requests itself, so the redirect fired
 * and the probe was answered with `308 -> https://<internal-host>/` instead
 * of a `200`. That address is not reachable, the health check never passed,
 * and the deployment was reported as failed even though `next build` had
 * succeeded.
 *
 * Redirecting here was also redundant: Hostinger's edge already answers plain
 * HTTP with `301 -> https://scamalert360.com/` before a request ever reaches
 * this process. Scheme upgrading belongs at the edge, which can see the real
 * scheme; this process cannot.
 *
 * HSTS is still worth setting from here, because the edge does not send it.
 * Browsers ignore the header on plain-HTTP responses, so emitting it
 * unconditionally is safe and avoids depending on proxy headers at all.
 * Deliberately conservative: one year, apex only. `includeSubDomains` and
 * `preload` are omitted — they are hard to walk back and would force HTTPS
 * onto any subdomain added later (email, staging, etc.).
 */
export function proxy(_request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('Strict-Transport-Security', 'max-age=31536000');
  return response;
}

export const config = {
  /*
   * Run on everything except Next.js internals and static assets — those are
   * already same-origin and don't need the header, and skipping them keeps
   * the proxy off the hot path for every image and script.
   */
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
