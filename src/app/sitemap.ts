import type { MetadataRoute } from 'next'
import { buildSitemapEntries } from '@/lib/sitemapEntries'

/**
 * Google-facing XML sitemap at /sitemap.xml.
 * lastmod is catalog/GEO dates (not deploy clock). Tour and blog rows include
 * image:loc so Googlebot-Image can discover activity photos.
 * llms.txt / pricing.md stay off this file — they are for AI crawlers via
 * rel=alternate, not Google Search inventory.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries()
}
