import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "../globals.css"
import Link from "next/link"
import { Leaf, Mail, Phone } from "lucide-react"
import { CurrencyProvider } from "@/context/CurrencyContext"
import HeaderNav from "@/components/HeaderNav"
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from "@/lib/contact"
import { ACTIVITY_BASE } from "@/lib/locations"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_DESCRIPTION,
  OG_IMAGE,
  OG_TITLE,
  SITE_NAME,
  SITE_URL,
  buildAdventureItemListSchema,
  buildOrganizationSchema,
  buildSiteNavigationSchema,
  buildWebsiteSchema,
  type AdventureOffer,
} from "@/lib/seo"
import {
  buildGeoQASchemas,
  buildGeoWebPageSchema,
  buildLlmsDiscoverySchema,
} from "@/lib/geo"
import { SEO_FOOTER_HEADING, SEO_FOOTER_LINKS } from "@/data/seoFooterLinks"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'travel',
  keywords: [
    'private ATV tour Bali',
    'ATV ride Ubud',
    'Bali quad bike tour',
    'ATV river tubing combo',
    'Ubud ricefield cycling tour',
    'Bali whitewater rafting',
    'Bali canyon tubing',
    'Sekar Bali Activity',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    // Omit max-snippet:-1 — some auditors misread -1 as snippet blocking.
    // Default Google behavior already allows full snippets when unspecified.
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sekarbaliactivity',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  other: {
    'geo.region': 'ID-BA',
    // Activity base geography for discovery; NAP / GBP uses corporate office
    'geo.placename': ACTIVITY_BASE.formatted,
    'geo.position': `${ACTIVITY_BASE.lat};${ACTIVITY_BASE.lng}`,
    ICBM: `${ACTIVITY_BASE.lat}, ${ACTIVITY_BASE.lng}`,
  },
}

const adventureOffers: AdventureOffer[] = [
  {
    name: 'Single ATV Jungle Ride',
    description:
      'Private Bali quad bike adventure at All New Bali Adventure arena through jungle trails and muddy tracks. All-inclusive: lunch, boot shoes, helmet, insurance, and optional Wos River tubing combo.',
    price: '600000',
    image: '/images/adventures/atv-adventure.jpg',
  },
  {
    name: 'Tandem ATV Ride',
    description:
      'Private tandem ATV tour at All New Bali Adventure for couples and friends. Share a complete quad bike experience with lunch, safety gear, insurance, and optional river tubing.',
    price: '859000',
    image: '/images/adventures/atv-adventure.jpg',
  },
  {
    name: 'Whitewater Rafting Adventure',
    description: 'Class II-III whitewater rafting through a jungle river canyon. All-inclusive with professional crew and lunch.',
    price: '400000',
    image: '/images/adventures/rafting.jpg',
  },
  {
    name: 'Canyon Tubing Experience',
    description: 'Float through hidden Bali canyons on an inflatable tube. Pair with an ATV + river tubing combo for the ultimate adventure day.',
    price: '359000',
    image: '/images/adventures/canyon-tubing.jpg',
  },
  {
    name: 'Ubud Ricefield & Village Cycling Tour',
    description:
      'Authentic Ubud countryside / rice paddy cycling tour through Pejeng village paths — rice harvesting, Balinese home visit, wood carving studio, free breakfast, lunch & dinner, and free Ubud hotel pickup.',
    price: '450000',
    image: '/images/adventures/cycling.jpg',
  },
]

// Keep homepage JSON-LD lean: ItemList already covers package offers.
// Separate TouristTrip blocks live on /tours/[slug] detail pages.
const schemaData = [
  buildOrganizationSchema(),
  buildWebsiteSchema(),
  buildSiteNavigationSchema(),
  buildGeoWebPageSchema(),
  buildLlmsDiscoverySchema(),
  ...buildGeoQASchemas(),
  buildAdventureItemListSchema(adventureOffers),
]

const SETTINGS = { siteName: SITE_NAME }

const footerLinks = {
  adventures: [
    { label: "ATV Rides", href: "/tours/bali-atv-adventure" },
    { label: "Whitewater Rafting", href: "/tours/whitewater-rafting" },
    { label: "Canyon Tubing", href: "/tours/canyon-tubing" },
    { label: "Ubud Ricefield Cycling", href: "/tours/ubud-ricefield-cycling-tour" },
    { label: "Book All Activities", href: "/book" },
    { label: "All Pricing", href: "/#pricing" },
  ],
  explore: [
    { label: "Book Adventures", href: "/book" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Transfers", href: "/transfers" },
    { label: "Cancellation Policy", href: "/cancellation-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteName = SETTINGS.siteName

  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM content summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full context" />
        <link rel="alternate" type="text/plain" href="/.well-known/llms.txt" title="LLM well-known summary" />
        {schemaData.map((schema, index) => (
          <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col bg-sand text-foreground`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-sand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-green focus:shadow-lg"
        >
          Skip to content
        </a>
        <HeaderNav siteName={siteName} />
        <div id="main-content" className="flex-1 flex flex-col w-full">
          <CurrencyProvider>{children}</CurrencyProvider>
        </div>

        {/* Footer */}
        <footer className="bg-brand-green text-sand pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <Link href="/#top" className="flex items-center gap-2 mb-4">
                  <img
                    src="/logo.png"
                    alt={`${siteName} logo`}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain rounded-full"
                  />
                </Link>
                <p className="text-sm opacity-70 leading-relaxed mb-6">
                  Pejeng-based adventure operator near Ubud — guided quad rides, rafting, canyon floats, and village cycling with local crews and all-inclusive packages.
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/sekarbaliactivity" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center hover:bg-sand/20 transition-colors">
                    <span className="sr-only">Sekar Bali Activity on Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://www.facebook.com/sekarbaliactivity" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center hover:bg-sand/20 transition-colors">
                    <span className="sr-only">Sekar Bali Activity on Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                </div>
              </div>
              {/* Adventures — use styled p (not h4) to avoid h2→h4 skips after page content */}
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-gold">Adventures</p>
                <ul className="space-y-3">
                  {footerLinks.adventures.map((link) => (
                    <li key={link.label}><Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              {/* Explore */}
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-gold">Explore</p>
                <ul className="space-y-3">
                  {footerLinks.explore.map((link) => (
                    <li key={link.label}><Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              {/* Contact */}
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-gold">Get in Touch</p>
                <ul className="space-y-4">
                  <li><a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"><Phone className="w-4 h-4 shrink-0" />{CONTACT_PHONE_DISPLAY}</a></li>
                  <li><a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"><Mail className="w-4 h-4 shrink-0" />{CONTACT_EMAIL}</a></li>
                  <li className="flex items-start gap-3 text-sm opacity-70">
                    <Leaf className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      <span className="block font-medium opacity-90">Activity base</span>
                      Pejeng Village, Ubud<br />Bali, Indonesia
                      <Link href="/contact" className="block mt-1.5 text-xs underline underline-offset-2 opacity-80 hover:opacity-100">
                        Corporate office &amp; meeting point
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Curated internal links */}
            <div className="border-t border-sand/10 pt-10 pb-8 mb-2">
              <p className="font-display text-sm font-bold uppercase tracking-wider text-center text-accent-gold mb-6">
                {SEO_FOOTER_HEADING}
              </p>
              <nav aria-label="Popular adventure searches" className="max-w-4xl mx-auto">
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2.5 text-center">
                  {SEO_FOOTER_LINKS.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-sand/55 hover:text-sand transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="border-t border-sand/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs opacity-50">© {new Date().getFullYear()} {siteName}. All rights reserved.</p>
              <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs opacity-50">
                <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity underline underline-offset-4">Privacy Policy</Link>
                <Link href="/cancellation-policy" className="hover:opacity-100 transition-opacity underline underline-offset-4">Booking Terms &amp; Cancellation</Link>
                <Link href="/about" className="hover:opacity-100 transition-opacity underline underline-offset-4">Our Team</Link>
                <span className="opacity-60">Partner: <a href="https://tumangbaliclass.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity underline underline-offset-4">Tumang Bali Class</a></span>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
