# ScamAlert360 — SEO Action Plan

Prioritized. Each item marked **[You]** (Hostinger/Google console work only you can do) or **[Code]** (I can implement).

---

## Phase 1 — Critical (this week)

### 1. Fix the deployment so scamalert360.com serves the current repo **[You]**
**Why:** The live site is old pre-rebrand code. Every canonical, robots.txt and sitemap URL points to `scamalert.blog`, telling Google your real domain is a duplicate. This is the single most damaging SEO issue and it caps everything else.
**Do:**
- In hPanel → your site → **Git / Deployments**, confirm the connected repository is exactly `github.com/niazr919-source/scamalert360` and branch `main`.
- If it points anywhere else (e.g. an older `scamalert-blogs`), reconnect it to `scamalert360`.
- Trigger **Redeploy** and watch the deploy log to completion.
- **Verify:** `https://scamalert360.com/scams/banking/how-to-freeze-your-credit` returns 200 (currently 404), and the homepage's canonical reads `https://scamalert360.com` (currently `scamalert.blog`). View source and check `<link rel="canonical">`.

### 2. Confirm canonicals + sitemap now point to scamalert360.com **[You, after #1]**
After redeploy, re-check robots.txt (`Host:` and `Sitemap:` lines) and a couple of article canonicals. All must read scamalert360.com. This is the proof #1 worked.

---

## Phase 2 — High-impact (weeks 1–2)

### 3. Submit to Google Search Console + Bing **[You]**
Verify the domain and submit `https://scamalert360.com/sitemap.xml`. Nothing gets indexed until Google can crawl. (Full steps were provided separately.) Do Bing Webmaster Tools too.

### 4. Add a favicon / site icons **[Code]**
`/favicon.ico` 404s today. Google shows a favicon beside every mobile result; a generic globe lowers CTR. I can add a branded icon generated at build time.

### 5. Add a named author for E-E-A-T **[You + Code]**
The biggest content-trust lever for YMYL. Needs a real name + public profile URL (yours works). The schema and byline already support it — it just needs a real identity to stay truthful.

### 6. Tighten title tags and meta descriptions **[Code]**
- Titles: use each guide's `shortTitle` for the `<title>` so they stay under ~60 display chars (several are 82–90 now).
- Meta descriptions: trim the few over 155 chars.
- Homepage title: lead with brand + primary keyword, e.g. "ScamAlert360 — Spot Scams, Recover Money & Report Fraud".

---

## Phase 3 — Content & authority (month 2)

### 7. Keep publishing guides on a cadence **[Code + You]**
Breadth builds topical authority for a new domain. Good next targets: romance scam (general), Zelle "bank called me" reversal, phishing email red flags, package "address confirmation" scam, cryptocurrency recovery scams, elder-fraud overview. Aim for 1–2 per week.

### 8. Add `llms.txt` for AI search **[Code]**
A `/llms.txt` summarizing the site and linking key guides helps AI Overviews / ChatGPT / Perplexity cite you. Cheap, on-trend, low effort.

### 9. Earn a few quality backlinks **[You]**
For a new domain this is slow but decisive. Realistic starts: get listed on relevant consumer-protection resource pages, answer scam questions on Reddit/Quora with a genuine link where allowed, and pursue any local news "scam awareness" angle.

---

## Phase 4 — Monitoring & iteration (ongoing)

### 10. Watch Search Console weekly **[You]**
Track *impressions* first (they move before clicks for a new site), then which queries and pages surface. Fix any Coverage/Enhancement errors it reports (it will validate your FAQ/HowTo/Article rich results).

### 11. Validate Core Web Vitals **[You]**
Run PageSpeed Insights on the live home + an article once deployed; watch INP given the interactive risk-checker. Field data appears in Search Console after a few weeks of traffic.

### 12. Re-audit after deployment is fixed **[Code]**
Once #1 is done and the current code is live, a re-crawl will confirm the score jump (~66 → ~80) and catch anything the stale deploy was masking.

---

## The one-sentence version

**Get the current code actually deployed to scamalert360.com (Phase 1) — that alone fixes the wrong-domain canonicals and ships the rebrand, 4 new guides, and social images; everything else is optimization on top of that.**
