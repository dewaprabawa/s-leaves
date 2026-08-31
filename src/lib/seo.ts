import { CONTACT_EMAIL, CONTACT_PHONE_E164, CONTACT_WHATSAPP_URL } from '@/lib/contact'

export const SITE_URL = 'https://www.sekarbaliactivity.com'
export const SITE_NAME = 'Sekar Bali Activity'

export const DEFAULT_TITLE =
  'Sekar Bali Activity | Bali ATV, Rafting, Canyon Tubing & Cycling Tours'
export const DEFAULT_DESCRIPTION =
  'Book Bali adventures in Pejeng, Ubud: ATV jungle rides with optional Wos River tubing, whitewater rafting, canyon tubing, and village cycling. All-inclusive prices, hotel pickup, and WhatsApp booking — inquire free today.'

export const OG_IMAGE = {
  url: '/images/adventures/og-cover.jpg',
  width: 1200,
  height: 630,
  alt: 'Bali ATV and adventure tours with Sekar Bali Activity in Ubud',
}

/** Organization + Product ItemList JSON-LD for homepage technical SEO & AI citation */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_NAME,
    description:
      'Bali adventure tours in Pejeng near Ubud — ATV rides, whitewater rafting, canyon tubing, and village cycling with hotel pickup.',
    url: SITE_URL,
    telephone: CONTACT_PHONE_E164,
    email: CONTACT_EMAIL,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: 'IDR 359000 - IDR 859000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pejeng Village',
      addressLocality: 'Ubud, Gianyar',
      addressRegion: 'Bali',
      postalCode: '80552',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.5133,
      longitude: 115.2989,
    },
    areaServed: [
      { '@type': 'Place', name: 'Ubud' },
      { '@type': 'Place', name: 'Pejeng' },
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '2500',
      reviewCount: '2500',
    },
  }
}

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
    dateModified: '2026-08-31',
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
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/#adventures`,
      'query-input': 'required name=search_term_string',
    },
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
    name: 'Bali Adventure Packages',
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
          url: `${SITE_URL}/#adventures`,
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
