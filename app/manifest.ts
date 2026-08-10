import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

// Required for `output: 'export'` — metadata routes need an explicit static
// marker in this Next.js version or the export build fails.
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    categories: ['education', 'finance', 'security'],
  };
}
