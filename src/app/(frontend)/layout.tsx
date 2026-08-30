import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "../globals.css"
import Link from "next/link"
import { Leaf, Mail, Phone } from "lucide-react"
import { CurrencyProvider } from "@/context/CurrencyContext"
import HeaderNav from "@/components/HeaderNav"
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from "@/lib/contact"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  buildAdventureItemListSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo"

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
    'Bali ATV tour',
    'Ubud ATV adventure',
    'Bali ATV river tubing',
    'Wos River tubing',
    'Bali whitewater rafting',
    'Bali canyon tubing',
    'Pejeng cycling tour',
    'Ubud adventure packages',
    'Sekar Bali Activity',
    'Bali hotel pickup adventure',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  other: {
    'geo.region': 'ID-BA',
    'geo.placename': 'Pejeng, Ubud, Bali',
    'geo.position': '-8.5133;115.2989',
    ICBM: '-8.5133, 115.2989',
  },
}

const adventureOffers = [
  {
    name: 'Single ATV Jungle Ride',
    description:
      'Complete Bali quad bike adventure with lunch, boot shoes, helmet, and insurance. Optional river tubing on the Wos River.',
    price: '650000',
    image: '/images/adventures/atv-adventure.jpg',
  },
  {
    name: 'Tandem ATV Ride',
    description:
      'Share a complete Bali ATV experience with a partner. Boot shoes, helmet, lunch, and insurance included.',
    price: '859000',
    image: '/images/adventures/atv-adventure.jpg',
  },
  {
    name: 'Whitewater Rafting Adventure',
    description: 'Navigate Class II-III rapids through a stunning river canyon.',
    price: '400000',
    image: '/images/adventures/rafting.jpg',
  },
  {
    name: 'Canyon Tubing Experience',
    description: 'Float through hidden canyons on an inflatable tube. Pair with an ATV ride for the ultimate combo.',
    price: '359000',
    image: '/images/adventures/canyon-tubing.jpg',
  },
  {
    name: 'Village Cycling Tour',
    description: 'Cycle through Pejeng village lanes, temples, and Subak rice terraces. Includes lunch or breakfast.',
    price: '650000',
    originalPrice: '888000',
    image: '/images/adventures/cycling.jpg',
  },
]

const schemaData = [
  buildOrganizationSchema(),
  buildWebsiteSchema(),
  buildAdventureItemListSchema(adventureOffers),
  ...adventureOffers.map((adv) => ({
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: adv.name,
    description: adv.description,
    touristType: ['Couples', 'Families', 'Adventure seekers'],
    provider: { '@id': `${SITE_URL}/#organization` },
    image: adv.image ? `${SITE_URL}${adv.image}` : undefined,
    offers: {
      '@type': 'Offer',
      price: adv.price,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#adventures`,
      ...(adv.originalPrice
        ? {
            priceValidUntil: '2026-12-31',
            description: `Promo price (was IDR ${Number(adv.originalPrice).toLocaleString('id-ID')}). Lunch or breakfast included.`,
          }
        : {}),
    },
  })),
]

const SETTINGS = { siteName: SITE_NAME }

const footerLinks = {
  adventures: [
    { label: "ATV Rides", href: "/tours/bali-atv-adventure" },
    { label: "Whitewater Rafting", href: "/#adventures" },
    { label: "Canyon Tubing", href: "/#adventures" },
    { label: "Village Cycling", href: "/#adventures" },
    { label: "All Pricing", href: "/#pricing" },
  ],
  explore: [
    { label: "Tours", href: "/tours" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteName = SETTINGS.siteName

  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM content summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full context" />
        {schemaData.map((schema, index) => (
          <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col bg-sand text-foreground`}>
        <HeaderNav siteName={siteName} />
        <div className="flex-1 flex flex-col w-full">
          <CurrencyProvider>{children}</CurrencyProvider>
        </div>

        {/* Footer */}
        <footer className="bg-brand-green text-sand pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <Link href="/#top" className="flex items-center gap-2 mb-4">
                  <img src="/logo.png" alt={siteName} className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
                </Link>
                <p className="text-sm opacity-70 leading-relaxed mb-6">Premium adventure experiences in Bali. ATV rides, whitewater rafting, canyon tubing, village cycling, and more. Expert local guides and all-inclusive packages.</p>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/sekarbaliactivity" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center hover:bg-sand/20 transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://www.facebook.com/sekarbaliactivity" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center hover:bg-sand/20 transition-colors" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                </div>
              </div>
              {/* Adventures */}
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-gold">Adventures</h4>
                <ul className="space-y-3">
                  {footerLinks.adventures.map((link) => (
                    <li key={link.label}><Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              {/* Explore */}
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-gold">Explore</h4>
                <ul className="space-y-3">
                  {footerLinks.explore.map((link) => (
                    <li key={link.label}><Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              {/* Contact */}
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-gold">Get in Touch</h4>
                <ul className="space-y-4">
                  <li><a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"><Phone className="w-4 h-4 shrink-0" />{CONTACT_PHONE_DISPLAY}</a></li>
                  <li><a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"><Mail className="w-4 h-4 shrink-0" />{CONTACT_EMAIL}</a></li>
                  <li className="flex items-start gap-3 text-sm opacity-70"><Leaf className="w-4 h-4 shrink-0 mt-0.5" /><span>Pejeng, Ubud<br />Bali, Indonesia</span></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-sand/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs opacity-50">© {new Date().getFullYear()} {siteName}. All rights reserved.</p>
              <p className="text-xs opacity-40">Partner: <a href="https://tumangbaliclass.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4">Tumang Bali Class</a></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
