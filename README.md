# ScamAlert360 — scamalert360.com

A scam awareness and fraud prevention portal built with Next.js (App Router), TypeScript and Tailwind CSS. Built for ad-network approval and organic search, with attention to YMYL and E-E-A-T requirements.

Ships as a **static HTML export** for Hostinger shared hosting — see [DEPLOY.md](DEPLOY.md) for the upload steps.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # produces out/ — a static export, ready to upload
npx serve out   # preview the export exactly as it will be served
npm run typecheck
```

## What's here

32 routes, all statically generated — there is no server-rendered route in this build (see "Static export" below for why).

| Area | Route | Notes |
| --- | --- | --- |
| Home | `/` | Hero, checker entry band, category hubs, latest guides, six universal rules |
| Guide library | `/scams` | All 13 guides grouped by category |
| Category hubs | `/scams/[category]` | 4 hubs |
| Guides | `/scams/[category]/[slug]` | 13 guides, 1,668–2,909 words each |
| Interactive tool | `/tool/scam-risk-checker` | 4-step client-side risk calculator |
| Reporting | `/report-a-scam` | Official agency channels + 24h timeline |
| E-E-A-T | `/about-us`, `/editorial-policy` | Standards, sourcing, conflict of interest |
| Legal | `/privacy-policy`, `/terms-of-service` | GDPR/CCPA, educational-content disclaimer |
| Contact | `/contact` | Validated form → `public/contact.php` (PHP, not a Next.js API route) |

### Guides and their primary keyword targets

| Guide | Category | Primary targets |
| --- | --- | --- |
| Bank fraud alert text scam | banking | bank fraud alert text, smishing scam recovery |
| IRS & Social Security imposter calls | banking | irs scam call, social security scam call |
| Pig butchering investment scam | banking | pig butchering scam, crypto romance scam |
| P2P accidental transfer scam | credit-cards | zelle accidental money scam, venmo fake transfer |
| Gift card scams & draining | credit-cards | gift card scam, gift card draining |
| Contactless card RFID skimming | credit-cards | RFID blocker worth it, credit card skimming myth |
| USPS package delivery text scam | ai-cyber | usps text scam, package delivery scam text |
| Unpaid toll text scam | ai-cyber | unpaid toll text scam, ezpass scam text |
| Tech support popup scam | ai-cyber | microsoft security warning scam, fake virus popup |
| QR code (quishing) scams | ai-cyber | QR code payment scam, fake parking QR code |
| AI voice cloning scams | ai-cyber | AI voice cloning scam, deepfake voice call fraud |
| Facebook Marketplace scams | everyday | facebook marketplace scam, google voice code scam |
| Fake remote job & check scams | everyday | remote job check scam, fake check deposit fraud |

## Static export — why, and what it costs

`next.config.mjs` sets `output: 'export'` because Hostinger shared hosting serves plain files via Apache and doesn't keep a Node process running — `next start` and API route handlers don't work there. `npm run build` produces a self-contained `out/` folder instead.

Two things a normal Next.js deploy gets for free had to move elsewhere as a result:

- **Security headers.** `next.config.mjs`'s `headers()` needs a live server to run, so they're now set in `public/.htaccess` instead (HTTPS redirect, `X-Frame-Options`, etc.), which gets copied into `out/` on every build.
- **The contact form's backend.** `app/api/contact/route.ts` is gone — static exports can't include Node route handlers. `public/contact.php` reproduces the same validation, honeypot and rate-limiting logic in PHP, which Hostinger can execute. `components/contact-form.tsx` posts to `site.contactEndpoint` (`/contact.php`, set in `lib/site.ts`) instead of `/api/contact`.

If you ever move to a Node-capable host (a VPS, Vercel), both are easy to restore — see the bottom of [DEPLOY.md](DEPLOY.md).

## Authorship — read before adding contributors

`content/authors.ts` ships a single honest identity: the **ScamAlert360 Editorial Team**. This is deliberate and load-bearing.

This site publishes YMYL financial-safety content. Search quality raters and ad-network reviewers check bylines against real, findable people, and a schema `hasCredential` claim is a machine-readable factual assertion. Inventing a contributor or attaching a certification nobody holds converts a soft E-E-A-T weakness into a *verifiable false statement* — which is worse than an honest team byline.

So the site claims a **process** (primary sourcing, documented fact-checking, published corrections policy), which is true and checkable, rather than credentials. `personSchema()` emits the team as an `Organization`, and only emits `hasCredential` / `url` when those fields are actually populated.

**Adding a real person — including yourself — is the single strongest E-E-A-T upgrade available**, and costs nothing if the person is you. There's a commented template in `content/authors.ts`. Set `profileUrl` to a real public profile; leave `credentials` undefined unless it's genuine and verifiable.

## Content system

Guides live in `content/articles/*.ts` as typed data, not MDX. Each exports an `Article` built from a discriminated-union `Block[]`:

```ts
{ type: 'p' | 'h2' | 'h3' | 'list' | 'table' | 'alert'
       | 'checklist' | 'timeline' | 'quote' | 'report' | 'keyStat' }
```

Because the body is structured data rather than compiled markup, the renderer can count paragraphs and inject ads at exact intervals, and `lib/schema.ts` walks the blocks to compute a real `wordCount`. Adding a block type is a compile error until every renderer handles it (`ContentBlock` has a `never` exhaustiveness guard).

**To add a guide:** create `content/articles/your-slug.ts`, then register it in the `articles` array in `content/index.ts`. Routing, sitemap, breadcrumbs, schema and related-article backfill follow automatically.

> Do not bulk-edit article files with PowerShell `Get-Content`/`Set-Content` — Windows PowerShell 5.1 misreads UTF-8 as ANSI and will mangle every em dash and curly quote in the file. Use an editor or the `Edit` tool.

## Ad placement

All slots live in `components/ads.tsx`. Every one reserves height with an explicit `min-height` before any script loads, so a slow fill cannot push content down — the main defense against Cumulative Layout Shift.

| Component | Placement | Reserved size |
| --- | --- | --- |
| `HeaderBannerAd` | Sticky below header | 320×50 → 728×90 |
| `InArticleAd` | Auto after every 3rd paragraph | 300×250 |
| `SidebarAd` | Sticky, desktop article views | 300×600 |
| `ContentRecommendationAd` | Native grid below content | 4 × 220px |
| `InFeedAd` | Category and sidebar listings | 250px |

Injection logic is in `components/article-body.tsx`. Two guards keep placement clean: never inject after the final block, and never directly before a heading.

**To go live:** add the network loader in `app/layout.tsx` (there's a commented AdSense `<script>` in `<head>`), then pass the network's markup as `children` to each slot. The dashed "Advertisement" placeholder auto-hides once real markup is present. `data-ad-slot` is already set from the `id` prop.

## SEO

- **JSON-LD** (`lib/schema.ts`) emitted as one linked `@graph` per page so entities resolve by `@id`. Articles carry `Article` + `BreadcrumbList` + `FAQPage` + `HowTo`; the layout adds `Organization` + `WebSite`.
- **`generateStaticParams`** on both dynamic routes with `dynamicParams = false`, so unknown slugs 404 rather than render.
- **`app/sitemap.ts`** and **`app/robots.ts`** generate from content. `Mediapartners-Google` is explicitly allowed — a blocked AdSense crawler is a common approval failure.
- Per-page canonicals, OpenGraph and Twitter metadata; `metadataBase` from `lib/site.ts`.

## Before applying to ad networks

1. **Deploy to scamalert360.com.** You can't apply from localhost — see [DEPLOY.md](DEPLOY.md). `lib/site.ts` already points at the domain; canonicals, sitemap and schema derive from it.
2. **Add yourself as a named author** (see Authorship above). Highest-value single change.
3. **Legal review.** `/privacy-policy` and `/terms-of-service` carry template notices. Have counsel review, and update the ad networks named in the privacy policy to match what you actually run.
4. **Confirm the contact form actually delivers mail.** `public/contact.php` uses PHP's `mail()`, which is frequently unreliable on shared hosting — test it for real after deploying and check spam. A commented SMTP fallback is in the file.
5. **Consent banner** before serving ads in the EU/EEA/UK — the privacy policy already commits to one.
6. **Submit the sitemap** to Google Search Console and let the site get indexed. New domains get more scrutiny; a few weeks of history helps.

### Realistic platform expectations

| | Status | Why |
| --- | --- | --- |
| AdSense | Plausible once live + indexed | 13 in-depth guides is a reasonable base; more is better |
| Ezoic | Most realistic near-term | Lowest bar, content review is the main gate |
| Mediavine | Traffic-gated (~50k sessions/mo) | Nothing about the build changes this |

## Design

Deep navy slate `#0F172A`, emerald `#10B981`, crimson `#EF4444`. Inter (body) and Outfit (display) via `next/font`. Light/dark hybrid, theme applied by an inline script before first paint so there's no flash.

## Verified

- `npm run build` — 32 pages exported to `out/`, zero errors; `tsc --noEmit` clean.
- Static export served with `npx serve out`: all key routes (including the Suspense-wrapped risk checker) resolve 200, unknown paths 404 via the custom error page.
- Sitemap (26 URLs) and robots.txt correctly reference `scamalert360.com`; no leftover references to any prior domain.
- Article word counts 1,668–2,909.
- No `hasCredential` claims anywhere in emitted schema; article author is `Organization`.
- Every ad slot reserves non-zero height before fill; no horizontal overflow at 375px.
- No console errors in light or dark mode.
