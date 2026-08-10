# Deploying ScamAlert360 to Hostinger shared hosting

This project builds to a **static HTML export** (`output: 'export'` in
`next.config.mjs`) because Hostinger's shared plans serve files via Apache
and don't keep a Node process running — `next start` and API routes don't
work there. The build produces a self-contained `out/` folder you upload
as-is.

## What changed to make this work

- `next.config.mjs` sets `output: 'export'` and `trailingSlash: true`. Every
  page becomes `<route>/index.html`, which Apache serves automatically for a
  directory request — no rewrite rules needed for clean URLs.
- The old `app/api/contact/route.ts` (a Node route handler) is gone — static
  exports can't include those. Its job is now done by **`public/contact.php`**,
  which ships the same validation, honeypot and rate-limiting logic and gets
  copied into `out/contact.php` on every build.
- `components/contact-form.tsx` posts to `site.contactEndpoint` (`/contact.php`
  by default, set in `lib/site.ts`) instead of `/api/contact`.
- Security headers that used to come from `next.config.mjs`'s `headers()`
  (not supported in export mode — there's no server to run that hook) now
  live in **`public/.htaccess`**, along with the HTTPS redirect, the custom
  404, and static-asset caching.

## One-time setup

**1. Confirm the contact inbox.** Open `public/contact.php` and check the
`$recipientEmail` value near the top matches a real mailbox on your domain.

**2. Build:**

```bash
npm install
npm run build
```

This produces `out/`. Verify it locally before uploading:

```bash
npx serve out
```

Visit the printed URL and click through a few pages — home, a guide, the
risk checker, `/contact`.

## Uploading to Hostinger

**Option A — hPanel File Manager (simplest, no Git needed)**

1. In hPanel, go to **Files → File Manager** and open `public_html` for
   `scamalert360.com`.
2. Delete Hostinger's default placeholder files if any exist there.
3. Upload **the contents of `out/`** — not the `out` folder itself — so
   `index.html` sits directly inside `public_html`. Hostinger's File Manager
   can upload a zip and extract it in place, which is faster than uploading
   dozens of files individually: zip the contents of `out/`, upload the zip,
   extract it, delete the zip.
4. Confirm `.htaccess` made it across — File Manager hides dotfiles by
   default; toggle "Show Hidden Files" to check.

**Option B — Git-based deploy (hPanel → Git)**

Hostinger's Git deploy pulls a repo but does **not** run a build step, so it
can only serve what's already committed — and `out/` is gitignored (build
artifacts don't belong in version control). Two ways to handle that:

- Build locally (`npm run build`) and use hPanel's Git deploy against a
  **separate, un-ignored branch or repo** containing only the `out/`
  contents, pushed after each build. More moving parts, but keeps the main
  repo clean.
- Or just use Option A after each `npm run build` — for a content site that
  doesn't change every hour, this is genuinely simpler.

**Option C — FTP**, if you prefer a client like FileZilla: point it at the
credentials in hPanel → Files → FTP Accounts, and upload `out/`'s contents to
`public_html`.

## After the first upload

1. **SSL** — hPanel → **SSL** → issue a free Let's Encrypt certificate for
   `scamalert360.com`. The `.htaccess` HTTPS redirect assumes this exists;
   without it, visitors get redirect errors.
2. **Test the contact form for real** — local `npx serve` can't execute PHP,
   so this is the first point it can actually be verified. Submit it and
   confirm the email arrives. Shared-hosting `mail()` is notoriously
   unreliable; if nothing shows up (check spam too), switch to SMTP — there's
   a commented PHPMailer block at the bottom of `public/contact.php`.
3. **Submit the sitemap** — Google Search Console → Sitemaps →
   `https://scamalert360.com/sitemap.xml`.
4. **Spot-check indexability** — `https://scamalert360.com/robots.txt` should
   show `Allow: /`, and view-source on a guide page should show the
   `<link rel="canonical">` pointing at `scamalert360.com`, not any prior
   domain.

## Redeploying after content changes

```bash
npm run build
```

Then repeat whichever upload option you used. There's no cache to bust on
the HTML itself — only the hashed `_next/static` assets are cached long-term
by `.htaccess`, and their filenames change automatically whenever their
content does.

## If you outgrow shared hosting

The API route and `headers()` config are easy to restore if you ever move to
a Node-capable host (a Hostinger VPS, Vercel, Railway): drop `output: 'export'`
and `trailingSlash: true` from `next.config.mjs`, restore the `headers()`
block, and recreate `app/api/contact/route.ts` from `public/contact.php`'s
logic (or just point `contactEndpoint` back at `/api/contact`). Vercel in
particular needs none of this — it runs the Next.js server natively, so the
static-export step becomes unnecessary if you deploy there instead while
keeping the domain at Hostinger.
