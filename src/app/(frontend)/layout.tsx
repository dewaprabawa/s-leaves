import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "../globals.css"
import Link from "next/link"
import { Menu, Leaf, Mountain } from "lucide-react"
import { CurrencyProvider } from "@/context/CurrencyContext"
import HeaderNav from "@/components/HeaderNav"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sekarbaliactivity.com'),
  title: "Sekar Bali Activity | Bali ATV Adventure Tours",
  description: "Conquer Bali's wild trails on a thrilling ATV quad bike adventure! Ride through jungles, volcanoes, rice terraces & rivers. All skill levels welcome. Book your Bali ATV tour today.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sekar Bali Activity | Bali ATV Quad Bike Adventures',
    description: 'Conquer Bali\'s wild trails on a thrilling ATV quad bike adventure! Ride through jungles, volcanoes, rice terraces & rivers. All skill levels welcome.',
    url: 'https://www.sekarbaliactivity.com',
    siteName: 'Sekar Bali Activity',
    images: [
      {
        url: '/images/cycling/rice-field-bikes.jpg',
        width: 1200,
        height: 630,
        alt: 'Bali ATV Adventure Tour through jungle trails',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sekar Bali Activity | Bali ATV Adventures',
    description: 'Conquer Bali\'s wild trails on a thrilling ATV quad bike adventure! All skill levels. Book now.',
    images: ['/images/cycling/rice-field-bikes.jpg'],
  },
}

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "Organization"],
    "@id": "https://www.sekarbaliactivity.com/#organization",
    "name": "Sekar Bali Activity",
    "legalName": "Sekar Bali Activity",
    "description": "Bali's premier ATV quad bike adventure tours through jungles, volcanoes, and rice terraces. Plus village cycling, cooking classes, and coffee plantation experiences.",
    "url": "https://www.sekarbaliactivity.com",
    "telephone": "+6281775723663",
    "email": "sekarprivatebaliactivity@gmail.com",
    "logo": "https://www.sekarbaliactivity.com/logo.png",
    "image": "https://www.sekarbaliactivity.com/images/cycling/rice-field-bikes.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pejeng Village",
      "addressLocality": "Ubud, Gianyar",
      "addressRegion": "Bali",
      "postalCode": "80552",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -8.5133,
      "longitude": 115.2989
    },
    "sameAs": [
      "https://www.instagram.com/sekarbaliactivity",
      "https://www.facebook.com/sekarbaliactivity",
      "https://www.tripadvisor.com/Attraction_Review-g297701-d1234567-Reviews-Sekar_Bali_Activity-Ubud_Gianyar_Regency_Bali.html"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6281775723663",
      "contactType": "customer service",
      "availableLanguage": ["English", "Indonesian"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sekarbaliactivity.com/#website",
    "url": "https://www.sekarbaliactivity.com",
    "name": "Sekar Bali Activity",
    "description": "Bali ATV quad bike adventures, village cycling tours, cooking classes, and coffee plantation experiences.",
    "publisher": {
      "@id": "https://www.sekarbaliactivity.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.sekarbaliactivity.com/tours?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Bali ATV Jungle Trail Adventure",
    "description": "Ride through tropical jungles, cross rivers, and explore hidden waterfalls on a powerful ATV quad bike. Suitable for beginners and experienced riders.",
    "provider": {
      "@id": "https://www.sekarbaliactivity.com/#organization"
    },
    "touristType": ["Couples", "Families", "Adventure seekers", "Small groups"],
    "offers": {
      "@type": "Offer",
      "price": "850000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Bali ATV Volcano Route",
    "description": "An intermediate ATV adventure through volcanic black sand, pine forests, and stunning Mount Batur views.",
    "provider": {
      "@id": "https://www.sekarbaliactivity.com/#organization"
    },
    "touristType": ["Couples", "Adventure seekers"],
    "offers": {
      "@type": "Offer",
      "price": "1200000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Bali ATV Rice Terrace Signature Trail",
    "description": "Our signature 4-hour ATV experience through Bali's iconic rice terraces, villages, jungles, and rivers.",
    "provider": {
      "@id": "https://www.sekarbaliactivity.com/#organization"
    },
    "touristType": ["Couples", "Families", "Adventure seekers"],
    "offers": {
      "@type": "Offer",
      "price": "1500000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    }
  }
];

const SETTINGS = {
  siteName: "Sekar Bali Activity",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteName = SETTINGS.siteName

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-sand text-foreground transition-colors duration-200`}>
        
        {/* Interactive Navigation Header */}
        <HeaderNav siteName={siteName} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col w-full">
          <CurrencyProvider>
            {children}
          </CurrencyProvider>
        </div>

        {/* Footer — ATV Focused */}
        <footer className="border-t border-brand-green/10 bg-brand-green text-sand pt-16 pb-16 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
            <Link href="#top" className="flex items-center gap-2 font-bold text-2xl opacity-90 hover:opacity-100 transition-opacity">
              <Mountain className="w-6 h-6" />
              <span>{siteName}</span>
            </Link>
            <p className="text-sm opacity-80">
              ATV Adventures · Jungle Trails · Volcano Routes · Rice Terraces
            </p>
            <p className="text-sm opacity-80 mt-4 flex flex-wrap gap-6 justify-center">
              <Link href="/#atv-packages" className="hover:text-brand-accent-light transition-colors font-semibold">ATV Tours</Link>
              <Link href="/tours" className="hover:text-brand-accent-light transition-colors">All Tours</Link>
              <Link href="/transfers" className="hover:text-brand-accent-light transition-colors">Airport Transfers</Link>
              <Link href="/blog" className="hover:text-brand-accent-light transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-brand-accent-light transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-brand-accent-light transition-colors">Contact</Link>
            </p>
            <p className="text-xs opacity-60 mt-4">
              Partner: <a href="https://tumangbaliclass.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-brand-green-light/30 underline-offset-4">Tumang Bali Class</a>
            </p>
            <p className="text-xs opacity-50 mt-4">
              © {new Date().getFullYear()} {siteName}. All rights reserved.
            </p>
          </div>
        </footer>

      </body>
    </html>
  )
}
