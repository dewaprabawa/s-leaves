import { CONTACT_EMAIL, CONTACT_PHONE_E164, CONTACT_WHATSAPP_URL } from '@/lib/contact'
import {
  ACTIVITY_BASE,
  PRIMARY_NAP_ADDRESS,
  postalAddressSchema,
} from '@/lib/locations'

export const SITE_URL = 'https://www.sekarbaliactivity.com'
export const SITE_NAME = 'Sekar Bali Activity'

/** SERP title target: brand + offer, ≤60 characters */
export const DEFAULT_TITLE = 'Sekar Bali Activity | Ubud Travel & Tours'
export const DEFAULT_DESCRIPTION =
  'Book Ubud travel activities — ATV, rafting, ricefield cycling, cooking class, coffee & day tours. Clear IDR pricing. Free Ubud pickup on cycling. WhatsApp booking.'

/** Social previews (og:title ≤60, og:description ≤160) */
export const OG_TITLE = 'Ubud Travel & Activities | Sekar Bali'
export const OG_DESCRIPTION =
  'Adventure, village cycling, cooking class, coffee & private day tours near Ubud. Transparent IDR. Free cycling pickup. Book via WhatsApp.'

export const OG_IMAGE = {
  url: '/images/adventures/og-cover.jpg',
  width: 1200,
  height: 630,
  alt: 'Bali travel activities and tours with Sekar Bali Activity in Ubud',
}

/** Organization + Product ItemList JSON-LD for homepage technical SEO & AI citation */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ['Sekar Bali', 'Sekar Bali Activity Ubud', 'Sekar Bali Pejeng'],
    legalName: SITE_NAME,
    description:
      'Bali travel activities in Pejeng near Ubud — ATV rides, whitewater rafting, canyon tubing, ricefield cycling, Tumang Bali Cooking Class, coffee tasting, and private day tours. Free Ubud hotel pickup on cycling and Tumang cooking class.',
    url: SITE_URL,
    telephone: CONTACT_PHONE_E164,
    email: CONTACT_EMAIL,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: 'IDR 359000 - IDR 1100000',
    // NAP must match Google Business Profile (corporate / registered office)
    address: postalAddressSchema(PRIMARY_NAP_ADDRESS),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: PRIMARY_NAP_ADDRESS.lat,
      longitude: PRIMARY_NAP_ADDRESS.lng,
    },
    hasMap: PRIMARY_NAP_ADDRESS.mapUrl,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'activityBase',
        value: ACTIVITY_BASE.formatted,
      },
      {
        '@type': 'PropertyValue',
        name: 'activityBaseNote',
        value:
          'Adventures run from Pejeng / All New Bali Adventure near Ubud — not from the corporate office pin.',
      },
    ],
    areaServed: [
      { '@type': 'Place', name: 'Ubud' },
      { '@type': 'Place', name: 'Pejeng' },
      { '@type': 'Place', name: 'Kenderan' },
      { '@type': 'Place', name: 'Gianyar' },
      { '@type': 'Place', name: 'Bali' },
    ],
    sameAs: [
      'https://www.instagram.com/sekarbaliactivity',
      'https://www.facebook.com/sekarbaliactivity',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT_PHONE_E164,
        email: CONTACT_EMAIL,
        contactType: 'customer service',
        availableLanguage: ['English', 'Indonesian'],
        areaServed: 'ID',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'reservations',
        url: CONTACT_WHATSAPP_URL,
        availableLanguage: ['English', 'Indonesian'],
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:00',
      closes: '20:00',
    },
  }
}

/** Primary nav URLs that help Google understand site structure for sitelinks */
export const SITE_NAV_LINKS = [
  { name: 'Book Activities', url: `${SITE_URL}/book` },
  { name: 'Bali ATV Adventure', url: `${SITE_URL}/tours/bali-atv-adventure` },
  { name: 'Ubud Ricefield Cycling', url: `${SITE_URL}/tours/ubud-ricefield-cycling-tour` },
  { name: 'Whitewater Rafting', url: `${SITE_URL}/tours/whitewater-rafting` },
  { name: 'Canyon Tubing', url: `${SITE_URL}/tours/canyon-tubing` },
  { name: 'Tumang Bali Cooking Class', url: `${SITE_URL}/tours/balinese-cooking-class` },
  { name: 'Full Day Ubud Tour', url: `${SITE_URL}/tours/full-day-ubud-tour` },
  { name: 'About Us', url: `${SITE_URL}/about` },
  { name: 'Contact', url: `${SITE_URL}/contact` },
  { name: 'Blog', url: `${SITE_URL}/blog` },
  { name: 'Cancellation Policy', url: `${SITE_URL}/cancellation-policy` },
  { name: 'Privacy Policy', url: `${SITE_URL}/privacy-policy` },
] as const

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
    dateModified: '2026-09-04',
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'llms.txt — AI assistant summary',
        url: `${SITE_URL}/llms.txt`,
        encodingFormat: 'text/plain',
      },
      {
        '@type': 'WebPage',
        name: 'llms-full.txt — extended AI context',
        url: `${SITE_URL}/llms-full.txt`,
        encodingFormat: 'text/plain',
      },
      {
        '@type': 'WebPage',
        name: 'pricing.md — agent-readable pricing',
        url: `${SITE_URL}/pricing.md`,
        encodingFormat: 'text/markdown',
      },
    ],
  }
}

/** SiteNavigationElement ItemList — clarifies important pages for crawlers / sitelinks */
export function buildSiteNavigationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/#sitenavigation`,
    name: `${SITE_NAME} main navigation`,
    itemListElement: SITE_NAV_LINKS.map((link, index) => ({
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: link.name,
      url: link.url,
    })),
  }
}

export type AdventureOffer = {
  name: string
  description: string
  price: string
  image?: string
  originalPrice?: string
}

export function buildAdventureItemListSchema(adventures: AdventureOffer[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/#adventure-packages`,
    name: 'Bali Travel & Activity Packages',
    description: 'ATV, rafting, canyon tubing, and village cycling tours in Bali',
    numberOfItems: adventures.length,
    itemListElement: adventures.map((adv, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: adv.name,
        description: adv.description,
        image: adv.image ? `${SITE_URL}${adv.image}` : undefined,
        brand: { '@type': 'Brand', name: SITE_NAME },
        offers: {
          '@type': 'Offer',
          url: `${SITE_URL}/#experiences`,
          priceCurrency: 'IDR',
          price: adv.price,
          availability: 'https://schema.org/InStock',
          ...(adv.originalPrice
            ? {
                priceValidUntil: '2026-12-31',
                description: `Promo from IDR ${Number(adv.originalPrice).toLocaleString('id-ID')}`,
              }
            : {}),
        },
      },
    })),
  }
}
