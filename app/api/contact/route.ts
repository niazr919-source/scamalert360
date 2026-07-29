import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
/** Never cache a mutation endpoint. */
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

type Payload = {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  company?: unknown;
};

/**
 * In-memory rate limit. Adequate for a single instance; swap for a shared
 * store (Redis, Upstash) if you deploy to more than one region.
 */
const RATE_LIMIT = { windowMs: 60_000, max: 3 };
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + RATE_LIMIT.windowMs });
    return false;
  }
  entry.count += 1;

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (now > v.resetAt) hits.delete(k);
  }

  return entry.count > RATE_LIMIT.max;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  if (rateLimited(clientKey(request))) {
    return NextResponse.json(
      { ok: false, error: 'Too many messages. Please wait a minute and try again.' },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: a filled hidden field means a bot. Return success so the bot
  // does not learn that the submission was rejected.
  if (asString(body.company).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const topic = asString(body.topic);
  const message = asString(body.message);

  const errors: string[] = [];
  if (name.length < 2 || name.length > 120) errors.push('name');
  if (!EMAIL_RE.test(email) || email.length > 254) errors.push('email');
  if (topic.length < 2 || topic.length > 120) errors.push('topic');
  if (message.length < 20 || message.length > 5000) errors.push('message');

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Please check these fields: ${errors.join(', ')}.` },
      { status: 400 },
    );
  }

  /*
   * Delivery is intentionally not wired to a provider here, so the site has no
   * secrets to leak and builds cleanly out of the box. To go live, send the
   * message from this point using your provider of choice, e.g.:
   *
   *   await resend.emails.send({
   *     from: 'ScamAlert <noreply@scamalert.blog>',
   *     to: process.env.CONTACT_INBOX!,
   *     replyTo: email,
   *     subject: `[${topic}] ${name}`,
   *     text: message,
   *   });
   *
   * Keep the validation above regardless of provider — never trust the client.
   */
  console.info('[contact] %s <%s> — %s (%d chars)', name, email, topic, message.length);

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'Method not allowed.' }, { status: 405 });
}
