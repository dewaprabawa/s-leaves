import { BLOG_POSTS } from '@/data/blog'
import { GEO_UPDATED } from '@/data/geoContent'
import { ACTIVITY_GEO_UPDATED } from '@/data/activityGeo'
import { TOURS } from '@/data/tours'
import { SITE_URL } from '@/lib/seo'
import type { MetadataRoute } from 'next'

/** Catalog / GEO refresh date — used so Google sees a real lastmod, not build-clock noise. */
export const SITEMAP_UPDATED = GEO_UPDATED

const MONEY_TOUR_SLUGS = new Set([
  'balinese-cooking-class',
  'batur-sunrise-jeep-tour',
  'tirta-empu-purification',
  'griya-beji-waterfall',
  'swing-heaven-bali',
  'ubud-ricefield-cycling-tour',
  'bali-atv-adventure',
])

const HIGH_BLOG_SLUGS = new Set([
  'things-to-do-near-ubud-2026',
  'griya-beji-waterfall-ubud-guide',
  'griya-beji-vs-tirta-empul-melukat',
  'palm-reading-bali-griya-beji',
  'mental-healing-bali-griya-beji',
  'swing-heaven-bali-ubud-guide',
  'full-day-ubud-tour-guide-2026',
  'half-day-ubud-tanah-lot-sunset-tour-2026',
  'luwak-coffee-plantation-umah-kuno-price-2026',
  'tirta-empu-melukat-ubud-guide',
])

/** Posts rewritten in the latest GEO pass — recrawl these even if publishedAt is older. */
const BLOG_LASTMOD_OVERRIDE: Record<string, string> = {
  'things-to-do-near-ubud-2026': GEO_UPDATED,
  'ubud-hotel-pickup-bali-adventures-explained': GEO_UPDATED,
  'bali-adventure-packages-prices-2026': GEO_UPDATED,
  'tirta-empu-melukat-ubud-guide': GEO_UPDATED,
}

function toDate(isoDate: string): Date {
  const parsed = isoDate.includes('T') ? new Date(isoDate) : new Date(`${isoDate}T00:00:00.000Z`)
  if (Number.isNaN(parsed.getTime())) {
    return new Date(`${SITEMAP_UPDATED}T00:00:00.000Z`)
  }
  return parsed
}

function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function uniqueAbsoluteImages(paths: Array<string | undefined>): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const path of paths) {
    if (!path) continue
    const url = absoluteUrl(path)
    if (seen.has(url)) continue
    seen.add(url)
    out.push(url)
  }
  return out
}

export function buildCoreSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = toDate(SITEMAP_UPDATED)
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/book`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/experiences`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/transfers`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/anti-scam`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/payment-policy`, lastModified, changeFrequency: 'yearly', priority: 0.55 },
    { url: `${SITE_URL}/refund-policy`, lastModified, changeFrequency: 'yearly', priority: 0.55 },
    { url: `${SITE_URL}/cancellation-policy`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
  ]
}

export function buildTourSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = toDate(ACTIVITY_GEO_UPDATED)
  return TOURS.map((tour) => ({
    url: `${SITE_URL}/tours/${tour.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: MONEY_TOUR_SLUGS.has(tour.slug) ? 0.95 : 0.85,
    images: uniqueAbsoluteImages([
      tour.heroImage.url,
      ...tour.gallery.map((image) => image.url),
    ]),
  }))
}

export function buildBlogSitemapEntries(): MetadataRoute.Sitemap {
  return BLOG_POSTS.map((post) => {
    const lastmod = BLOG_LASTMOD_OVERRIDE[post.slug] ?? post.publishedAt
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: toDate(lastmod),
      changeFrequency: 'monthly' as const,
      priority: HIGH_BLOG_SLUGS.has(post.slug) ? 0.9 : 0.7,
      images: uniqueAbsoluteImages([post.image]),
    }
  })
}

export function buildGeoSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = toDate(SITEMAP_UPDATED)
  return [
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/llms-full.txt`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/pricing.md`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/.well-known/llms.txt`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ]
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  return [
    ...buildCoreSitemapEntries(),
    ...buildTourSitemapEntries(),
    ...buildBlogSitemapEntries(),
    ...buildGeoSitemapEntries(),
  ]
}
