import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "../globals.css"
import Link from "next/link"
import { Leaf, Mail, Phone } from "lucide-react"
import { CurrencyProvider } from "@/context/CurrencyContext"
import HeaderNav from "@/components/HeaderNav"
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_WHATSAPP_URL } from "@/lib/contact"

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
  metadataBase: new URL('https://www.sekarbaliactivity.com'),
  title: "Sekar Bali Activity | Premium Bali Adventure Tours — ATV, Rafting, Canyon Tubing",
  description: "Book Bali's best adventure experiences: ATV jungle rides, whitewater rafting, canyon tubing. Expert guides, all-inclusive pricing, hotel pickup included.",

  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sekar Bali Activity | Premium Bali Adventure Tours',
    description: 'Book Bali\'s best adventure experiences: ATV jungle rides, whitewater rafting, canyon tubing. Expert guides, all-inclusive pricing, hotel pickup included.',
    url: 'https://www.sekarbaliactivity.com',
    siteName: 'Sekar Bali Activity',
    images: [{ url: '/images/adventures/hero-banner.jpg', width: 896, height: 1195, alt: 'ATV jungle adventure through tropical rainforest trails' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sekar Bali Activity | Premium Bali Adventure Tours',
    description: 'Book Bali\'s best adventure experiences: ATV jungle rides, whitewater rafting, canyon tubing.',
    images: ['/images/adventures/hero-banner.jpg'],
  },
}

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Sekar Bali Activity",
    "description": "Premium adventure tours in Bali — ATV rides, whitewater rafting, canyon tubing.",
    "url": "https://www.sekarbaliactivity.com",
    "telephone": CONTACT_PHONE_E164,
    "email": CONTACT_EMAIL,
    "address": { "@type": "PostalAddress", "addressLocality": "Pejeng", "addressRegion": "Bali", "addressCountry": "ID" },
    "image": "https://www.sekarbaliactivity.com/logo.png",
    "sameAs": ["https://www.instagram.com/sekarbaliactivity", "https://www.facebook.com/sekarbaliactivity"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_PHONE_E164,
      "email": CONTACT_EMAIL,
      "contactType": "customer service",
      "availableLanguage": ["English", "Indonesian"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Single ATV Jungle Ride",
    "description": "Conquer Bali's volcanic trails solo on a powerful ATV.",
    "provider": { "@type": "TravelAgency", "name": "Sekar Bali Activity" },
    "offers": { "@type": "Offer", "price": "650000", "priceCurrency": "IDR", "availability": "https://schema.org/InStock" }
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Tandem ATV Ride",
    "description": "Share the thrill with a partner on a powerful tandem ATV.",
    "provider": { "@type": "TravelAgency", "name": "Sekar Bali Activity" },
    "offers": { "@type": "Offer", "price": "859000", "priceCurrency": "IDR", "availability": "https://schema.org/InStock" }
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Whitewater Rafting Adventure",
    "description": "Navigate Class II-III rapids through a stunning river canyon.",
    "provider": { "@type": "TravelAgency", "name": "Sekar Bali Activity" },
    "offers": { "@type": "Offer", "price": "400000", "priceCurrency": "IDR", "availability": "https://schema.org/InStock" }
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Canyon Tubing Experience",
    "description": "Float through hidden canyons on an inflatable tube.",
    "provider": { "@type": "TravelAgency", "name": "Sekar Bali Activity" },
    "offers": { "@type": "Offer", "price": "359000", "priceCurrency": "IDR", "availability": "https://schema.org/InStock" }
  }
];

const SETTINGS = { siteName: "Sekar Bali Activity" }

const footerLinks = {
  adventures: [
    { label: "ATV Rides", href: "/#adventures" },
    { label: "Whitewater Rafting", href: "/#adventures" },
    { label: "Canyon Tubing", href: "/#adventures" },
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
                <p className="text-sm opacity-70 leading-relaxed mb-6">Premium adventure experiences in Bali. ATV rides, whitewater rafting, canyon tubing, and more. Expert local guides and all-inclusive packages.</p>
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
