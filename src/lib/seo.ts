import { CONTACT_EMAIL, CONTACT_PHONE_E164, CONTACT_WHATSAPP_URL } from '@/lib/contact'

export const SITE_URL = 'https://www.sekarbaliactivity.com'
export const SITE_NAME = 'Sekar Bali Activity'

export const DEFAULT_TITLE =
  'Sekar Bali Activity | Private ATV, River Tubing & Village Cycling Tours Ubud'
export const DEFAULT_DESCRIPTION =
  'Book private Bali ATV tours near Ubud from IDR 600K — jungle quad bike rides with optional Wos River tubing combo, whitewater rafting, canyon tubing, and Ubud ricefield cycling from IDR 450K. Tier pricing for groups. Optional pickup IDR 50K. All-inclusive: meals, helmet, insurance. Free Ubud pickup on the cycling tour only. WhatsApp booking — free to inquire.'

/** Shorter variants for social previews (og:title ≤60, og:description ≤200) */
export const OG_TITLE = 'Private Bali ATV & Ubud Adventure Tours | Sekar Bali'
export const OG_DESCRIPTION =
  'Private ATV jungle rides, Wos River tubing combo, rafting & Ubud ricefield cycling from IDR 450K. Free Ubud pickup on cycling only. Book via WhatsApp.'

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
      'Bali adventure tours in Pejeng near Ubud — ATV rides, whitewater rafting, canyon tubing, and Ubud ricefield cycling. Free Ubud hotel pickup on the cycling tour only.',
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
  }
}

/** Primary nav URLs that help Google understand site structure for sitelinks */
export const SITE_NAV_LINKS = [
  { name: 'Book Adventures', url: `${SITE_URL}/book` },
  { name: 'Bali ATV Adventure', url: `${SITE_URL}/tours/bali-atv-adventure` },
  { name: 'Ubud Ricefield Cycling', url: `${SITE_URL}/tours/ubud-ricefield-cycling-tour` },
  { name: 'Whitewater Rafting', url: `${SITE_URL}/tours/whitewater-rafting` },
  { name: 'Canyon Tubing', url: `${SITE_URL}/tours/canyon-tubing` },
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
    dateModified: '2026-09-03',
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
