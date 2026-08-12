# On-Page, Content & Schema — Findings

Full detail is in `../FULL-AUDIT-REPORT.md`; this file records the measured evidence.

## On-Page SEO (Live ≈ 55 / Codebase ≈ 78)

Measured title/description lengths (current build):

| Page | Title chars | Desc chars | Notes |
|---|---|---|---|
| Home | 44 | 187 | Title omits brand + lead keyword; desc over 155 |
| /scams/banking/how-to-freeze-your-credit | 82 | 187 | Title + desc both over limit |
| /scams/ai-cyber/sextortion-email-scam | 90 | 166 | Title well over 60; desc slightly over |
| /tool/scam-risk-checker | 80 | 172 | Both over |

- **Title tags 80–90 chars** exceed Google's ~60-char display; keyword is front-loaded so impact is moderate, but the `| ScamAlert360` suffix truncates. Fix: use each guide's `shortTitle` in the `<title>`.
- **Meta descriptions 166–187 chars** truncate at ~155–160. Fix: trim.
- **Homepage title weak** — lead with brand + primary keyword.
- Strengths: unique per-page titles/descriptions, one h1, logical headings, strong internal linking, OG/Twitter meta present.

## Content Quality (≈ 76)
- 17 guides, 1,600–2,900 words, primary-sourced, non-thin, honest. Strong.
- **Gap: no named author** (Organization byline). Highest-value content fix for YMYL. Add a real person + public profile URL.

## Schema (≈ 90)
- Per page: `Article` + `BreadcrumbList` + `FAQPage` + `HowTo`; site-wide `Organization` + `WebSite`. Verified live on an article page.
- `Article` includes `wordCount`, dates, author, publisher, `citation`.
- Author correctly `Organization`; **no false `hasCredential`** — clean.
- Minor: emit `Person` author with `sameAs` once a real author exists.

## AI Readiness (≈ 65) / Images (≈ 72)
- No `llms.txt` (add one). No favicon (add one). No content images by design (fine); OG social images added in codebase, not yet live.
