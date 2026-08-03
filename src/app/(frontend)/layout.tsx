import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "../globals.css"
import Link from "next/link"
import { Menu, Leaf } from "lucide-react"
import { CurrencyProvider } from "@/context/CurrencyContext"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sekar Bali Activity | Premium Bali Tours",
  description: "Discover extraordinary tours and private transfers across Bali and Indonesia.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

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
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-sand text-foreground transition-colors duration-200`}>
        
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-sand/90 border-b border-brand-green/10 h-20 flex items-center justify-between px-6 lg:px-12">
          <Link href="#top" className="flex items-center gap-2 font-bold text-xl text-brand-green hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt={siteName} className="h-14 w-auto object-contain" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-green-light">
            <Link href="#experiences" className="hover:text-brand-green transition-colors">Experiences</Link>
            <Link href="#itinerary" className="hover:text-brand-green transition-colors">The route</Link>
            <Link href="#about" className="hover:text-brand-green transition-colors">Our way</Link>
            <Link href="https://wa.me/6281775723663" target="_blank" className="ml-4 px-5 py-2.5 rounded-full bg-brand-green text-sand hover:bg-brand-green-light transition-colors shadow-sm font-semibold">
              Book a place
            </Link>
          </nav>
          
          <button className="md:hidden p-2 text-brand-green" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </header>

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
            <p className="text-xs opacity-50 mt-8">
              © {new Date().getFullYear()} {siteName}. All rights reserved.
            </p>
          </div>
        </footer>

      </body>
    </html>
  )
}
