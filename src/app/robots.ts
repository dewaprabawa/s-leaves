import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.sekarbaliactivity.com'

const DISALLOW_NOINDEX = ['/admin/', '/api/', '/tools/', '/invoice']

/**
 * Google crawl + GEO: allow Search / Image / AI crawlers.
 * Sitemap (https://www.sekarbaliactivity.com/sitemap.xml) is the only URL list
 * we want Google to treat as canonical HTML inventory. llms.txt / pricing.md
 * stay off that file and are discovered via rel=alternate.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: DISALLOW_NOINDEX,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: DISALLOW_NOINDEX,
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
      },
      {
        userAgent: 'Google-InspectionTool',
        allow: '/',
        disallow: DISALLOW_NOINDEX,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW_NOINDEX,
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Anthropic-AI', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      { userAgent: 'meta-externalagent', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
