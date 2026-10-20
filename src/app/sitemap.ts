import type { MetadataRoute } from 'next';
import { projects, site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/works', '/me', ...projects.map((p) => `/works/${p.slug}`)].map((path) => ({ url: `${site.url}${path}` }));
}
