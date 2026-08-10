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
   rename those).
3. Progress shows under **Deployments** → **Last deployment**; **Logs: View**
   is where build or runtime errors actually show up if something fails.
4. **Redeploy** re-runs the same build without a new push — useful after
   changing an environment variable, which doesn't itself trigger a deploy.

There is nothing to upload by hand. If you ever used `npm run build` locally
expecting an `out/` folder to drag into a file manager — that was the
static-export path from an earlier, incorrect assumption about the hosting
type. It's not needed here.

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
