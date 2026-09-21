/**
 * Curated footer internal links for SEO discoverability.
 * Keep unique destinations + natural labels — avoid keyword-stuffed duplicates
 * that inflate link count and keyword density on the homepage.
 */
export type SeoFooterLink = {
  label: string
  href: string
}

export const SEO_FOOTER_HEADING = 'Explore every activity & guide'

export const SEO_FOOTER_LINKS: SeoFooterLink[] = [
  { label: 'Things to do near Ubud 2026', href: '/blog/things-to-do-near-ubud-2026' },
  { label: 'Tumang Bali Cooking Class', href: '/tours/balinese-cooking-class' },
  { label: 'Book cooking class', href: '/book?activity=balinese-cooking-class' },
  { label: 'Inside Tumang cooking class', href: '/blog/inside-balinese-cooking-class-pejeng' },
  { label: 'Cooking class Ubud price 2026', href: '/blog/cooking-class-ubud-price-2026-worth-it' },
  { label: 'Vegetarian cooking class Ubud', href: '/blog/vegetarian-vegan-cooking-class-ubud' },
  { label: 'What is lawar?', href: '/blog/what-is-lawar-balinese-dish' },
  { label: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
  { label: 'Batur jeep tour guide', href: '/blog/mount-batur-sunrise-jeep-tour-guide-2026' },
  { label: 'Batur jeep vs sunrise trek', href: '/blog/mount-batur-jeep-vs-sunrise-trek' },
  { label: 'Batur jeep pickup times', href: '/blog/mount-batur-jeep-pickup-times-canggu-ubud-2026' },
  { label: 'Batur jeep sunrise vs sunset', href: '/blog/mount-batur-jeep-sunrise-vs-sunset' },
  { label: 'Private Kintamani Day', href: '/blog/private-kintamani-day-jeep-itinerary' },
  { label: 'Ubud ricefield cycling', href: '/tours/ubud-ricefield-cycling-tour' },
  { label: 'Is an Ubud cycling tour worth it?', href: '/blog/is-ubud-cycling-tour-worth-it' },
  { label: 'Pejeng vs Tegallalang cycling', href: '/blog/pejeng-rice-terrace-cycling-vs-tegallalang' },
  { label: 'E-bike vs pedal cycling Ubud', href: '/blog/ebike-vs-pedal-ubud-cycling-tour' },
  { label: 'Family cycling tour Ubud', href: '/blog/ubud-cycling-tour-for-families' },
  { label: 'Cycling & cooking class day', href: '/blog/cycling-cooking-class-ubud-full-day-itinerary' },
  { label: 'Book cycling + cooking', href: '/book?activity=combo-cycling-cooking' },
  { label: 'Hotel pickup explained', href: '/blog/ubud-hotel-pickup-bali-adventures-explained' },
  { label: 'Tirta Empu Purification (Melukat)', href: '/tours/tirta-empu-purification' },
  { label: 'Melukat at Tirta Empu guide', href: '/blog/tirta-empu-melukat-ubud-guide' },
  { label: 'Bali ATV Adventure', href: '/tours/bali-atv-adventure' },
  { label: 'ATV prices near Ubud (2026)', href: '/blog/how-much-does-atv-cost-bali-ubud-2026' },
  { label: 'Whitewater rafting', href: '/tours/whitewater-rafting' },
  { label: 'Canyon tubing', href: '/tours/canyon-tubing' },
  { label: 'Umah Kuno Luwak tasting', href: '/tours/luwak-coffee-plantation' },
  { label: 'Umah Kuno Luwak price 2026', href: '/blog/luwak-coffee-plantation-umah-kuno-price-2026' },
  { label: 'Full day Ubud tour', href: '/tours/full-day-ubud-tour' },
  { label: 'Full day Ubud tour guide', href: '/blog/full-day-ubud-tour-guide-2026' },
  { label: 'Tanah Lot sunset half day', href: '/tours/half-day-ubud-tanah-lot-tour' },
  { label: 'Tanah Lot sunset guide', href: '/blog/half-day-ubud-tanah-lot-sunset-tour-2026' },
  { label: 'Book on WhatsApp', href: '/book' },
  { label: 'Adventure package prices', href: '/blog/bali-adventure-packages-prices-2026' },
  { label: 'Airport transfer DPS → Ubud', href: '/transfers' },
  { label: 'Blog & travel guides', href: '/blog' },
  { label: 'Contact & meeting point', href: '/contact' },
  { label: 'About our Pejeng team', href: '/about' },
]
