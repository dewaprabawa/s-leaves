import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "../globals.css"
import Link from "next/link"
import { Menu, Leaf } from "lucide-react"
import { CurrencyProvider } from "@/context/CurrencyContext"
import HeaderNav from "@/components/HeaderNav"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sekarbaliactivity.com'),
  title: "Sekar Bali Activity | Premium Bali Tours",
  description: "Discover extraordinary village-led tours in Pejeng, Bali. Join our small-group cycling tours, authentic cooking classes, and Luwak coffee plantation experiences.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sekar Bali Activity | Authentic Bali Tours in Pejeng',
    description: 'Discover extraordinary village-led tours in Pejeng, Bali. Join our small-group cycling tours, authentic cooking classes, and Luwak coffee plantation experiences.',
    url: 'https://www.sekarbaliactivity.com',
    siteName: 'Sekar Bali Activity',
    images: [
      {
        url: '/images/cycling/rice-field-bikes.jpg',
        width: 1200,
        height: 630,
        alt: 'Sekar Bali Activity Village Tours',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sekar Bali Activity | Authentic Bali Tours',
    description: 'Discover extraordinary village-led tours in Pejeng, Bali. Join our small-group cycling tours, authentic cooking classes, and Luwak coffee plantation experiences.',
    images: ['/images/cycling/rice-field-bikes.jpg'],
  },
}

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Sekar Bali Activity",
    "description": "Authentic village-led tours, cycling, and cooking classes in Pejeng, Bali.",
    "url": "https://www.sekarbaliactivity.com",
    "telephone": "+6281775723663",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pejeng",
      "addressRegion": "Bali",
      "addressCountry": "ID"
    },
    "image": "https://www.sekarbaliactivity.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/sekarbaliactivity",
      "https://www.facebook.com/sekarbaliactivity",
      "https://www.tripadvisor.com/Attraction_Review-g297701-d1234567-Reviews-Sekar_Bali_Activity-Ubud_Gianyar_Regency_Bali.html"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Pejeng Village & Terrace Cycling Tour",
    "description": "Explore the real Bali on a cycling tour through historic Pejeng, passing ancient temples, markets, and Subak rice terraces.",
    "provider": {
      "@type": "TravelAgency",
      "name": "Sekar Bali Activity"
    },
    "touristType": [
      "Couples",
      "Families",
      "Small groups"
    ],
    "offers": {
      "@type": "Offer",
      "price": "400000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Luwak Coffee Plantation Experience",
    "description": "Discover the secrets behind Bali's world-famous coffee at Umah Kuno. Jungle walk, traditional roasting, and coffee tasting.",
    "provider": {
      "@type": "TravelAgency",
      "name": "Sekar Bali Activity"
    },
    "touristType": [
      "Couples",
      "Small groups"
    ],
    "offers": {
      "@type": "Offer",
      "price": "400000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Traditional Balinese Dinner Cooking Class",
    "description": "Immerse yourself in the flavors of Indonesia in our hands-on cooking class in a traditional outdoor kitchen.",
    "provider": {
      "@type": "TravelAgency",
      "name": "Sekar Bali Activity"
    },
    "touristType": [
      "Couples",
      "Families"
    ],
    "offers": {
      "@type": "Offer",
      "price": "400000",
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

        {/* Minimal Footer */}
        <footer className="border-t border-brand-green/10 bg-brand-green text-sand pt-16 pb-16 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
            <Link href="#top" className="flex items-center gap-2 font-bold text-2xl opacity-90 hover:opacity-100 transition-opacity">
              <Leaf className="w-6 h-6" />
              <span>{siteName}</span>
            </Link>
            <p className="text-sm opacity-80">
              Village paths · Rice terraces · Shared tables
            </p>
            <p className="text-sm opacity-80 mt-4 flex gap-6 justify-center">
              <Link href="/#experiences" className="hover:text-brand-green-light transition-colors">Experiences</Link>
              <Link href="/blog" className="hover:text-brand-green-light transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-brand-green-light transition-colors">About</Link>
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
