import {
  GEO_CITATION_SNIPPETS,
  GEO_FAQ_FOR_LLM,
  GEO_QUICK_ANSWER,
  GEO_UPDATED,
} from '@/data/geoContent'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL } from '@/lib/seo'

/** JSON-LD for GEO / AI discoverability on the homepage */
export function buildGeoWebPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    dateModified: GEO_UPDATED,
    inLanguage: 'en-US',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.geo-answer-block', '.geo-tldr'],
    },
    significantLink: [
      `${SITE_URL}/llms.txt`,
      `${SITE_URL}/llms-full.txt`,
      `${SITE_URL}/.well-known/llms.txt`,
      `${SITE_URL}/#adventures`,
      `${SITE_URL}/blog`,
    ],
  }
}

/** Points AI crawlers to llms.txt from structured data */
export function buildLlmsDiscoverySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    '@id': `${SITE_URL}/#llms-discovery`,
    name: `${SITE_NAME} AI Discovery`,
    description:
      'Machine-readable summaries for ChatGPT, Gemini, Perplexity, and other AI assistants.',
    url: `${SITE_URL}/llms.txt`,
    dateModified: GEO_UPDATED,
    publisher: { '@id': `${SITE_URL}/#organization` },
    dataset: [
      {
        '@type': 'Dataset',
        name: 'llms.txt — short summary',
        url: `${SITE_URL}/llms.txt`,
        encodingFormat: 'text/plain',
        description: 'Primary LLM crawler summary for Sekar Bali Activity',
      },
      {
        '@type': 'Dataset',
        name: 'llms-full.txt — extended context',
        url: `${SITE_URL}/llms-full.txt`,
        encodingFormat: 'text/plain',
        description: 'Extended FAQ and citation corpus for AI assistants',
      },
    ],
  }
}

/** Visible Q&A pairs as structured data (not FAQPage — commercial-safe QAPage-style blocks) */
export function buildGeoQASchemas() {
  return GEO_FAQ_FOR_LLM.slice(0, 8).map((item, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Question',
    '@id': `${SITE_URL}/#geo-qa-${index + 1}`,
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
      url: item.url,
    },
  }))
}

export { GEO_CITATION_SNIPPETS, GEO_FAQ_FOR_LLM, GEO_QUICK_ANSWER, GEO_UPDATED }
