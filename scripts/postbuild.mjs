/**
 * Completes the `output: 'standalone'` build.
 *
 * `next build` traces the server code into `.next/standalone/` but deliberately
 * does NOT copy the browser assets in there — Next.js assumes a platform that
 * serves `.next/static` and `public/` from a CDN. Hostinger does not; it just
 * runs the Node process. Without this step `node .next/standalone/server.js`
 * answers 200 for every page and 404 for every CSS and JS chunk, so the site
 * deploys as unstyled, non-interactive HTML.
 *
 * Plain Node (no dependency, no shell), because this has to run on Windows
 * locally and Linux on the host.
 */
import { cpSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const standalone = join(root, '.next', 'standalone');

if (!existsSync(standalone)) {
  console.error(
    '[postbuild] .next/standalone is missing — expected output:\'standalone\' in next.config.mjs.',
  );
  process.exit(1);
}

/** [from, to, required] */
const copies = [
  [join(root, '.next', 'static'), join(standalone, '.next', 'static'), true],
  [join(root, 'public'), join(standalone, 'public'), false],
];

for (const [from, to, required] of copies) {
  if (!existsSync(from)) {
    if (required) {
      console.error(`[postbuild] missing required build output: ${from}`);
      process.exit(1);
    }
    continue;
  }
  cpSync(from, to, { recursive: true });
  console.log(`[postbuild] copied ${from.replace(root, '.')} -> ${to.replace(root, '.')}`);
}

console.log('[postbuild] standalone build is self-contained.');
