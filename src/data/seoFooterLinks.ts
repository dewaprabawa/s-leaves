/**
 * Curated footer internal links for SEO discoverability.
 * Keep unique destinations + natural labels — avoid keyword-stuffed duplicates
 * that inflate link count and keyword density on the homepage.
 */
export type SeoFooterLink = {
  label: string
  href: string
}

export const SEO_FOOTER_HEADING = 'Explore cooking, cycling & guides'

export const SEO_FOOTER_LINKS: SeoFooterLink[] = [
  { label: 'Tumang Bali Cooking Class', href: '/tours/balinese-cooking-class' },
  { label: 'Book cooking class', href: '/book?activity=balinese-cooking-class' },
  { label: 'Inside Tumang cooking class', href: '/blog/inside-balinese-cooking-class-pejeng' },
  { label: 'Ubud ricefield cycling', href: '/tours/ubud-ricefield-cycling-tour' },
  { label: 'Is an Ubud cycling tour worth it?', href: '/blog/is-ubud-cycling-tour-worth-it' },
  { label: 'Pejeng vs Tegallalang cycling', href: '/blog/pejeng-rice-terrace-cycling-vs-tegallalang' },
  { label: 'Cycling & cooking class day', href: '/blog/cycling-cooking-class-ubud-full-day-itinerary' },
  { label: 'Book cycling + cooking', href: '/book?activity=combo-cycling-cooking' },
  { label: 'Hotel pickup explained', href: '/blog/ubud-hotel-pickup-bali-adventures-explained' },
  { label: 'Bali ATV Adventure', href: '/tours/bali-atv-adventure' },
  { label: 'ATV prices near Ubud (2026)', href: '/blog/how-much-does-atv-cost-bali-ubud-2026' },
  { label: 'Whitewater rafting', href: '/tours/whitewater-rafting' },
  { label: 'Canyon tubing', href: '/tours/canyon-tubing' },
  { label: 'Book on WhatsApp', href: '/book' },
  { label: 'Adventure package prices', href: '/blog/bali-adventure-packages-prices-2026' },
  { label: 'Airport transfer DPS → Ubud', href: '/transfers' },
  { label: 'Blog & travel guides', href: '/blog' },
  { label: 'Contact & meeting point', href: '/contact' },
  { label: 'About our Pejeng team', href: '/about' },
]
