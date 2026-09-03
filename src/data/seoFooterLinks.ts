/**
 * Curated footer internal links for SEO discoverability.
 * Keep unique destinations + natural labels — avoid keyword-stuffed duplicates
 * that inflate link count and keyword density on the homepage.
 */
export type SeoFooterLink = {
  label: string
  href: string
}

export const SEO_FOOTER_HEADING = 'Explore adventures & guides'

export const SEO_FOOTER_LINKS: SeoFooterLink[] = [
  { label: 'Bali ATV Adventure', href: '/tours/bali-atv-adventure' },
  { label: 'Single & tandem quad rides', href: '/book?activity=single-atv' },
  { label: 'ATV prices near Ubud (2026)', href: '/blog/how-much-does-atv-cost-bali-ubud-2026' },
  { label: 'Private vs mass-market ATV', href: '/blog/private-atv-vs-mass-market-ubud' },
  { label: 'ATV + river tubing combo', href: '/blog/atv-river-tubing-wos-river-bali' },
  { label: 'All New Bali Adventure arena', href: '/blog/bali-atv-all-new-bali-adventure-location-guide' },
  { label: 'Whitewater rafting', href: '/tours/whitewater-rafting' },
  { label: 'Canyon tubing', href: '/tours/canyon-tubing' },
  { label: 'Rafting vs tubing vs ATV', href: '/blog/rafting-vs-tubing-vs-atv-near-ubud' },
  { label: 'Ubud ricefield cycling', href: '/tours/ubud-ricefield-cycling-tour' },
  { label: 'Is an Ubud cycling tour worth it?', href: '/blog/is-ubud-cycling-tour-worth-it' },
  { label: 'Cycling & cooking class day', href: '/blog/cycling-cooking-class-ubud-full-day-itinerary' },
  { label: 'Hotel pickup explained', href: '/blog/ubud-hotel-pickup-bali-adventures-explained' },
  { label: 'Book on WhatsApp', href: '/book' },
  { label: 'Adventure package prices', href: '/blog/bali-adventure-packages-prices-2026' },
  { label: 'Airport transfer DPS → Ubud', href: '/transfers' },
  { label: 'Balinese cooking class', href: '/tours/balinese-cooking-class' },
  { label: 'Blog & travel guides', href: '/blog' },
  { label: 'Contact & meeting point', href: '/contact' },
  { label: 'About our Pejeng team', href: '/about' },
]
