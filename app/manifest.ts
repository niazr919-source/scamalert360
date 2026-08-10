import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

// Fixed content — no need to regenerate this per request.
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
