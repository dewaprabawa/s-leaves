/**
 * Keyword link cloud for footer SEO (Tumang-style internal linking).
 * Prefer deep links to tours, /book, blog guides, and homepage anchors.
 */
export type SeoFooterLink = {
  label: string
  href: string
}

export const SEO_FOOTER_HEADING = "Our Bali Adventures Near Ubud"

export const SEO_FOOTER_LINKS: SeoFooterLink[] = [
  // ATV / quad bike (competitor head terms + our arena differentiators)
  { label: "Bali ATV Tour Ubud", href: "/tours/bali-atv-adventure" },
  { label: "ATV Ride Ubud", href: "/tours/bali-atv-adventure" },
  { label: "Bali Quad Bike Tour", href: "/tours/bali-atv-adventure" },
  { label: "Private ATV Jungle Ride", href: "/book?activity=single-atv" },
  { label: "Beginner ATV Ubud", href: "/blog/bali-atv-tour-ubud-guide" },
  { label: "Tandem ATV Bali", href: "/book?activity=tandem-atv" },
  { label: "Best ATV Near Ubud", href: "/blog/bali-atv-tour-ubud-guide" },
  { label: "ATV Mud Track Ubud", href: "/tours/bali-atv-adventure" },
  { label: "ATV + River Tubing Combo", href: "/blog/atv-river-tubing-wos-river-bali" },
  { label: "ATV Rafting Combo Bali", href: "/blog/rafting-vs-tubing-vs-atv-near-ubud" },
  { label: "All New Bali Adventure Arena", href: "/blog/bali-atv-all-new-bali-adventure-location-guide" },
  // Rafting / tubing
  { label: "Whitewater Rafting Bali", href: "/tours/whitewater-rafting" },
  { label: "Rafting Near Ubud", href: "/blog/bali-whitewater-rafting-near-ubud-guide" },
  { label: "Canyon Tubing Bali", href: "/tours/canyon-tubing" },
  { label: "Wos River Tubing", href: "/blog/bali-canyon-tubing-guide-ubud" },
  // Cycling (rice paddy / countryside / Pejeng — competitor mid-tail)
  { label: "Ubud Ricefield Cycling", href: "/tours/ubud-ricefield-cycling-tour" },
  { label: "Rice Paddy Cycling Ubud", href: "/tours/ubud-ricefield-cycling-tour" },
  { label: "Ubud Countryside Cycling", href: "/tours/ubud-ricefield-cycling-tour" },
  { label: "Bali Cycling Tour", href: "/book?activity=cycling" },
  { label: "Village Cycling Pejeng", href: "/blog/ubud-ricefield-cycling-tour-guide-2026" },
  { label: "Pejeng vs Tegallalang Cycling", href: "/blog/pejeng-rice-terrace-cycling-vs-tegallalang" },
  { label: "Cycling Tour with Lunch Ubud", href: "/tours/ubud-ricefield-cycling-tour" },
  // Booking / packages
  { label: "Book Bali Adventures", href: "/book" },
  { label: "Bali Adventure Packages 2026", href: "/blog/bali-adventure-packages-prices-2026" },
  { label: "Compare Rafting vs ATV vs Tubing", href: "/blog/rafting-vs-tubing-vs-atv-near-ubud" },
  { label: "Ubud Hotel Pickup", href: "/blog/ubud-hotel-pickup-bali-adventures-explained" },
  { label: "How to Book on WhatsApp", href: "/blog/how-to-book-bali-adventure-whatsapp" },
  { label: "Airport Transfer DPS to Ubud", href: "/transfers" },
  { label: "Balinese Cooking Class", href: "/tours/balinese-cooking-class" },
  { label: "Luwak Coffee Plantation", href: "/tours/luwak-coffee-plantation" },
  { label: "Bali Dirt Bike Adventure", href: "/tours/bali-dirt-bike-adventure" },
  { label: "Adventure Pricing", href: "/#pricing" },
  { label: "All Activities", href: "/#adventures" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "Contact Sekar Bali", href: "/contact" },
  { label: "About Pejeng Ubud", href: "/about" },
]
