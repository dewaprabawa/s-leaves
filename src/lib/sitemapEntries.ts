import { collectArticleLinkHrefs, mappedArticleSlugs } from '@/data/articleInternalLinks'
import { BLOG_POSTS } from '@/data/blog'
import { GEO_UPDATED } from '@/data/geoContent'
import { ACTIVITY_GEO_UPDATED } from '@/data/activityGeo'
import { COOKING_GEO_UPDATED } from '@/data/cookingGeo'
import { JEEP_GEO_UPDATED } from '@/data/jeepGeo'
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
  'mount-batur-sunrise-jeep-tour-guide-2026',
  'mount-batur-sunrise-jeep-tour-price-guide-2026',
  'mount-batur-jeep-vs-sunrise-trek',
  'mount-batur-jeep-pickup-times-canggu-ubud-2026',
  'mount-batur-jeep-sunrise-vs-sunset',
  'mount-batur-sit-in-jeep-vs-tracking',
  'private-kintamani-day-jeep-itinerary',
  'cooking-class-ubud-price-2026-worth-it',
  'ubud-ricefield-cycling-tour-guide-2026',
  'how-much-does-atv-cost-bali-ubud-2026',
  'bali-whitewater-rafting-near-ubud-guide',
  'bali-canyon-tubing-guide-ubud',
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
  'is-bali-swing-worth-it': GEO_UPDATED,
  'swing-heaven-bali-ubud-guide': GEO_UPDATED,
  'mount-batur-sunrise-jeep-tour-guide-2026': JEEP_GEO_UPDATED,
  'mount-batur-sunrise-jeep-tour-price-guide-2026': JEEP_GEO_UPDATED,
  'mount-batur-jeep-vs-sunrise-trek': JEEP_GEO_UPDATED,
  'mount-batur-jeep-pickup-times-canggu-ubud-2026': JEEP_GEO_UPDATED,
  'mount-batur-jeep-sunrise-vs-sunset': JEEP_GEO_UPDATED,
  'mount-batur-sit-in-jeep-vs-tracking': JEEP_GEO_UPDATED,
  'private-kintamani-day-jeep-itinerary': JEEP_GEO_UPDATED,
  'cooking-class-ubud-price-2026-worth-it': COOKING_GEO_UPDATED,
  'how-much-does-atv-cost-bali-ubud-2026': ACTIVITY_GEO_UPDATED,
  'ubud-ricefield-cycling-tour-guide-2026': ACTIVITY_GEO_UPDATED,
  'bali-whitewater-rafting-near-ubud-guide': ACTIVITY_GEO_UPDATED,
  'bali-canyon-tubing-guide-ubud': ACTIVITY_GEO_UPDATED,
}

/** Paths Google should not receive via sitemap (redirects, noindex, or non-HTML). */
const BLOCKED_SITEMAP_MARKERS = [
  '/admin',
  '/api/',
  '/tools/',
  '/invoice',
  '/tours/pejeng-cycling-tour',
  '/tours/bali-dirt-bike-adventure',
  '/blog/mount-batur-jeep-vs-trekking',
]

function toDate(isoDate: string): Date {
  const parsed = isoDate.includes('T') ? new Date(isoDate) : new Date(`${isoDate}T00:00:00.000Z`)
  if (Number.isNaN(parsed.getTime())) {
    return new Date(`${SITEMAP_UPDATED}T00:00:00.000Z`)
  }
  return parsed
}

function tourLastModified(slug: string): Date {
  if (slug === 'balinese-cooking-class') return toDate(COOKING_GEO_UPDATED)
  if (slug === 'batur-sunrise-jeep-tour') return toDate(JEEP_GEO_UPDATED)
  return toDate(ACTIVITY_GEO_UPDATED)
}

function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * Next.js interpolates image:loc with no XML escaping. Production GSC error
 * "Parsing error / Line 90" is Unsplash `?auto=format&fit=crop` — the raw `&`
 * makes the document not well-formed. Keep image sitemap first-party and
 * query-free so Search Console can read every loc.
 */
function sitemapSafeUrl(url: string): string {
  try {
    const parsed = new URL(url)
    parsed.search = ''
    parsed.hash = ''
    return parsed.toString()
  } catch {
    return url.split('#')[0].split('?')[0]
  }
}

function uniqueAbsoluteImages(paths: Array<string | undefined>): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const path of paths) {
    if (!path) continue
    const url = sitemapSafeUrl(absoluteUrl(path))
    if (!url.startsWith(`${SITE_URL}/`)) continue
    if (url.includes('&') || url.includes('?') || url.includes('<')) continue
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
  return TOURS.map((tour) => ({
    url: `${SITE_URL}/tours/${tour.slug}`,
    lastModified: tourLastModified(tour.slug),
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

/**
 * Assert Google sitemap quality gates at build time so a new tour/post cannot
 * ship without a loc, and noindex/redirect/non-HTML URLs cannot sneak in.
 */
export function assertSitemapInventory(entries: MetadataRoute.Sitemap): void {
  const urls = entries.map((entry) => entry.url)
  const unique = new Set(urls)
  if (unique.size !== urls.length) {
    throw new Error('Sitemap contains duplicate URLs')
  }

  for (const tour of TOURS) {
    const expected = `${SITE_URL}/tours/${tour.slug}`
    if (!unique.has(expected)) {
      throw new Error(`Sitemap missing tour ${tour.slug}`)
    }
  }

  for (const post of BLOG_POSTS) {
    const expected = `${SITE_URL}/blog/${post.slug}`
    if (!unique.has(expected)) {
      throw new Error(`Sitemap missing blog ${post.slug}`)
    }
  }

  const blogSlugs = new Set(BLOG_POSTS.map((post) => post.slug))
  const tourSlugs = new Set(TOURS.map((tour) => tour.slug))
  for (const slug of mappedArticleSlugs()) {
    if (!blogSlugs.has(slug)) {
      throw new Error(`Article cluster maps unknown blog slug ${slug}`)
    }
  }
  for (const href of collectArticleLinkHrefs()) {
    if (href.startsWith('/blog/')) {
      const slug = href.slice('/blog/'.length)
      if (!blogSlugs.has(slug)) {
        throw new Error(`Article internal link missing blog ${slug}`)
      }
    }
    if (href.startsWith('/tours/')) {
      const slug = href.slice('/tours/'.length)
      if (!tourSlugs.has(slug)) {
        throw new Error(`Article internal link missing tour ${slug}`)
      }
    }
  }

  for (const url of urls) {
    if (!url.startsWith(`${SITE_URL}`)) {
      throw new Error(`Sitemap URL is not the HTTPS www host: ${url}`)
    }
    if (url.includes('?')) {
      throw new Error(`Sitemap includes a query-string URL (use the canonical): ${url}`)
    }
    if (url === `${SITE_URL}/tours`) {
      throw new Error('Sitemap includes /tours which 301s to /experiences')
    }
    if (BLOCKED_SITEMAP_MARKERS.some((marker) => url.includes(marker))) {
      throw new Error(`Sitemap includes a blocked/redirected path: ${url}`)
    }
    if (url.endsWith('.txt') || url.endsWith('.md')) {
      throw new Error(`Sitemap includes a non-HTML file (keep llms/pricing off Google inventory): ${url}`)
    }
    if (url.includes('&')) {
      throw new Error(`Sitemap loc has a raw & (XML-invalid): ${url}`)
    }
  }

  for (const entry of entries) {
    for (const image of entry.images ?? []) {
      if (!image.startsWith(`${SITE_URL}/`)) {
        throw new Error(`Sitemap image:loc must be first-party (GSC Line 90 was off-site Unsplash): ${image}`)
      }
      if (image.includes('&') || image.includes('?') || image.includes('<')) {
        throw new Error(`Sitemap image:loc must be query-free so Next XML stays well-formed: ${image}`)
      }
    }
  }
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const entries = [
    ...buildCoreSitemapEntries(),
    ...buildTourSitemapEntries(),
    ...buildBlogSitemapEntries(),
  ]
  assertSitemapInventory(entries)
  return entries
}
