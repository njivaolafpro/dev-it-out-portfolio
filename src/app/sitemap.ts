import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: siteUrl, en: `${siteUrl}/en` };
  return [
    { url: siteUrl, alternates: { languages } },
    { url: `${siteUrl}/en`, alternates: { languages } },
  ];
}
