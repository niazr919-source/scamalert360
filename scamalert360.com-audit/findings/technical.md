# Technical SEO — Findings (with raw evidence)

Category score: **Live ≈ 45 / Codebase ≈ 84**

## CRITICAL #1 — Live site serves stale, pre-rebrand code with wrong-domain canonicals

### Evidence (fetched live, 2026-08-11)

Homepage `<head>`:
```
title:       Scam Awareness & Fraud Prevention Guides   (brand: "ScamAlert", not "ScamAlert360")
canonical:   https://scamalert.blog                       <-- WRONG DOMAIN
```

Article page (`/scams/banking/bank-fraud-alert-text-scam`):
```
title:       Bank Fraud Alert Text Scam ... | ScamAlert   <-- old brand
canonical:   https://scamalert.blog/scams/banking/bank-fraud-alert-text-scam   <-- WRONG DOMAIN
```

robots.txt (live):
```
Host: https://scamalert.blog
Sitemap: https://scamalert.blog/sitemap.xml            <-- WRONG DOMAIN
```

Live sitemap: **26 URLs** (13-guide era). Current repo build: **30 URLs / 17 guides**.

Deploy-era probes (live):
```
/opengraph-image                                 -> 404   (OG images not deployed)
/scams/banking/how-to-freeze-your-credit         -> 404   (batch-3 guide not deployed)
/scams/ai-cyber/sextortion-email-scam            -> 404   (batch-3 guide not deployed)
/scams/banking/bank-fraud-alert-text-scam        -> 200   (original guide, live)
/scams/ai-cyber/unpaid-toll-text-scam            -> 200   (batch-2 guide, live)
```

### Why this is critical
A canonical tag is a directive telling Google which URL is the authoritative version of a page. Every live page declares its canonical on **scamalert.blog** — a different domain. Google will attempt to consolidate all ranking signals onto scamalert.blog and treat scamalert360.com as a non-canonical duplicate. Combined with the sitemap and robots `Host` also pointing there, the site is actively instructing search engines to ignore the real domain. No amount of content or link building overcomes a sitewide wrong canonical.

### Root cause
Hostinger is not deploying from `github.com/niazr919-source/scamalert360`. The live build predates the ScamAlert360 rebrand (commit that introduced scamalert360.com). The current repo — verified locally — emits correct scamalert360.com canonicals, robots, and sitemap (30 URLs, domain `https://scamalert360.com`).

### Fix (owner: you, in Hostinger)
1. hPanel → site → Git/Deployments: confirm connected repo = `scamalert360`, branch `main`.
2. Reconnect if it points elsewhere; then **Redeploy** and watch the log finish.
3. Verify: `/scams/banking/how-to-freeze-your-credit` returns 200 and homepage canonical reads `https://scamalert360.com`.

---

## HIGH #2 — No favicon
`/favicon.ico` → 404; no `app/icon.*`. Google renders a favicon beside every mobile SERP result; absence yields a generic icon and lower CTR. Fix in code (build-time generated icon).

## MEDIUM #3 — HSTS absent live
Live http→https is a 301 (Hostinger platform default). The repo's middleware adds a conservative `Strict-Transport-Security` header on HTTPS responses; deploying current code enables it.

## What works (keep)
- Valid HTTPS + Let's Encrypt cert; http→https redirect live.
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` — all present live.
- Clean URL structure, single h1, `lang="en"`, viewport meta, `Mediapartners-Google` allowed for AdSense.
- Static prerender + CDN cache (`x-nextjs-cache: HIT`).
- Dynamic sitemap + robots generated from content (correct domain in current build).
