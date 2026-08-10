import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

// Required for `output: 'export'` — metadata routes need an explicit static
// marker in this Next.js version or the export build fails.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // The former /api/contact route is gone — contact.php is a plain
        // PHP script with no crawl-worthy content, so nothing needs
        // disallowing here anymore.
        userAgent: '*',
        allow: '/',
      },
      {
        // Explicitly welcomed — AdSense needs to crawl pages to serve
        // relevant ads, and a blocked crawler is a common approval failure.
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
