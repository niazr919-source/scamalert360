# Deploying ScamAlert360 on Hostinger

Your Hostinger dashboard (Website → scamalert360.com) shows **Connected
with GitHub**, **Auto-deployment**, **Framework: Next.js**, **Node version:
22.x** — this is Hostinger's Git-integrated Node app hosting, which builds
and runs Next.js directly (similar in spirit to Vercel). It is **not**
classic `public_html`/Apache shared hosting, so none of that applies here:
no static export, no `.htaccess`, no PHP contact handler. The app runs as a
normal Next.js server — `next build` then `next start` — and Hostinger's
platform does that for you on every push to `main`.

## How deploys work

1. Push to the `main` branch of the connected repo.
2. Hostinger's dashboard picks it up automatically ("Auto-deployment") and
   runs `npm install && npm run build`, then starts the app with
   `npm run start` (the "Build and output settings: Default" shown on the
   dashboard maps to the `build`/`start` scripts in `package.json` — don't
   rename those). What those two scripts *do* is described in the next
   section; both differ from stock Next.js on purpose.
3. Progress shows under **Deployments** → **Last deployment**; **Logs: View**
   is where build or runtime errors actually show up if something fails.
4. **Redeploy** re-runs the same build without a new push — useful after
   changing an environment variable, which doesn't itself trigger a deploy.

## This is a stock Next.js app — keep it that way

`package.json` runs plain `next build` and `next start`, and
`next.config.mjs` sets no `output` override. That matches the dashboard's
"Build and output settings: **Default**" for the Next.js framework preset,
and it is the configuration the platform documents and tests.

It is worth recording what was tried instead, because it looked reasonable
and cost a lot of failed deploys:

`output: 'standalone'` was enabled on the inference that the platform ran
`node server.js`, because its dashboard exposes no editable start-command
field. That was never confirmed against documentation, and **no deployment
ever succeeded with it**. It also brought two problems of its own:

- `next start` refuses to pair with standalone output in Next.js 16, so the
  start script had to be changed too.
- `next build` does not copy `.next/static` or `public/` into
  `.next/standalone/` — it assumes a CDN serves them. Without a postbuild
  step to copy them in, every page answers 200 and **every CSS and JS file
  answers 404**, so the site serves as unstyled, non-interactive HTML.

Both of those are now moot, and the postbuild script is gone. If a future
change ever does require standalone output, that copy step is mandatory —
recover it from the commit "Fix standalone deploy serving 404s for every CSS
and JS file".

## Why every build-time package is in `dependencies`

`package.json` has **no `devDependencies` section**, and that is deliberate.

Managed Node platforms commonly run their install step with
`NODE_ENV=production` (or `npm install --omit=dev`), which skips
`devDependencies` entirely. Next.js needs `tailwindcss`, `postcss` and
`autoprefixer` to compile the CSS, and `typescript` plus the `@types/*`
packages to run its TypeScript step — all at **build** time. If those live in
`devDependencies` and the host omits them, the build dies immediately with:

```
Error: Turbopack build failed with 1 error:
./app/globals.css
Error: Cannot find module 'tailwindcss'
```

This was reproduced exactly (`npm ci --omit=dev && npm run build` → the error
above) and confirmed fixed by the move (same commands → clean build, server
serves every route and asset).

Moving them costs nothing at runtime: `output: 'standalone'` traces only the
modules the running server actually imports, so none of these end up in the
deployed bundle. Do not "tidy" them back into `devDependencies`.

`engines.node` is declared as `>=20.9.0` (Next.js 16's own floor) so the
platform provisions a compatible runtime rather than guessing.

## If the build still fails: memory

The build peaks at roughly **1.4 GB** of Node memory across its processes
(measured locally). If the deploy log shows the build being killed with no
error message, `Killed`, `SIGKILL`, `exit code 137`, or `JavaScript heap out
of memory`, the container is running out of RAM rather than hitting a code
problem. Options, in order of preference:

1. Move to a plan with more build memory.
2. Reduce build parallelism by adding `experimental: { cpus: 1 }` to
   `next.config.mjs` — measured at ~1.23 GB, so it helps but does not
   transform the number; most of the usage is the compiler itself, not the
   workers.

## Why this app does not redirect http to https

`proxy.ts` sets HSTS but deliberately does **not** redirect plain HTTP to
HTTPS. An earlier version did, and it broke every deployment for months while
the build logs stayed completely clean — `next build` succeeded, 39 routes
generated, no errors, and the dashboard still reported "Deployment build
failed".

The cause: the platform probes the Node process directly over plain HTTP to
decide whether the app came up. Next.js sets `x-forwarded-proto: http` on
those requests itself, so the redirect fired and answered the probe with
`308 -> https://<internal-host>/` rather than `200`. That address is not
reachable from the probe, so the health check never passed and the deploy was
failed after the build had already succeeded — which is why the timing looked
odd: about 20 seconds of install and build, then roughly a minute of waiting.

Scheme upgrading belongs at the edge anyway. Hostinger already answers plain
HTTP with `301 -> https://scamalert360.com/` before a request reaches this
process, so the app-level redirect was redundant as well as harmful. The edge
can see the real scheme; this process cannot.

**Do not reintroduce an HTTP→HTTPS redirect here.** If the "Not Secure"
warning that originally motivated it ever comes back, fix it in the Hostinger
domain/SSL settings, not in application code.

HSTS is still sent from here because the edge does not send it. Browsers
ignore the header on plain-HTTP responses, so it is emitted unconditionally
and depends on no proxy headers at all.

## Checklist for a working deployment

**1. Confirm the connected repository and branch.** The dashboard should
show the repo this project is pushed to, branch `main`. If "Repository"
doesn't match where you actually push, deploys will silently keep serving
old code.

**2. Environment variables.** None are required for the app to build and
run as shipped — `lib/site.ts` hardcodes the production values rather than
reading from `process.env`. If you wire up real email delivery in
`app/api/contact/route.ts` (see the comment block there for a Resend
example), add the provider's API key under **Environment variables** in the
dashboard, then hit **Redeploy** so the running process picks it up.

**3. SSL.** The dashboard's SSL indicator needs to go green before HTTPS
works. This is normal right after connecting a fresh domain and can take
anywhere from minutes to a few hours — Hostinger has to validate domain
ownership before issuing the certificate. If it's still pending after 24
hours, that's worth a support ticket.

**4. DNS.** `scamalert360.com` needs to resolve to Hostinger's servers for
any of this to be reachable. If you bought the domain through Hostinger and
attached it in this same dashboard, DNS is usually handled automatically —
check **Domains → Manage domain** to confirm the A/AAAA records point at
Hostinger's IPs, not somewhere else.

**5. The domain security review.** Newly registered or newly connected
domains sometimes get held for a manual or automated review before they're
allowed to go fully live. If yours was flagged for "security
vulnerabilities," get the exact wording from the notice — the fix is
different depending on what triggered it:

   - **Registrar identity/abuse verification** (common on new `.com`
     registrations, unrelated to your content) — usually resolves once you
     confirm your registrant email, no code change needed.
   - **Automated content scanner false-positive** — plausible here
     specifically, because this is a fraud-awareness site whose entire
     purpose is to describe scam tactics in detail. A scanner pattern-matching
     for phishing-adjacent language ("verify your account", "urgent",
     "gift card", bank names) can flag legitimate anti-scam content. If this
     is the cause, it typically needs a manual appeal/review request through
     Hostinger support explaining the site's actual purpose — not a code fix.
   - **A real flagged vulnerability in the app itself** — worth ruling out
     explicitly. Nothing in this codebase collects credentials, executes
     user-supplied code, or embeds third-party scripts beyond the commented
     (currently inactive) AdSense loader in `app/layout.tsx`. If Hostinger's
     scanner names a specific issue, share the exact text and it can be
     addressed directly.

## Redeploying after content changes

```bash
git add -A
git commit -m "your message"
git push
```

That's the entire redeploy — Hostinger's auto-deployment takes it from
there. Use `npm run build` locally first if you want to catch build errors
before they show up in Hostinger's deploy logs.

## If this ever needs to move to different hosting

Everything here is a standard Next.js app — no platform-specific code. It
would run unchanged on Vercel, Railway, a VPS, or Hostinger's own Node
hosting elsewhere. The one path that *would* need work is classic
Apache/`public_html` shared hosting, which needs a static export instead of
a running Node process; that conversion (`output: 'export'`, `.htaccess`,
a PHP contact handler) was built once and is recoverable from the git
history if it's ever needed — see the commit titled "Rebrand to ScamAlert360
and convert to static export for Hostinger," and the revert commit right
after it for what changed back.
