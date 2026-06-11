import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { getPayload } from "@/lib/payload"
import "../globals.css"
import Link from "next/link"
import { CurrencyProvider } from "@/context/CurrencyContext"
import HeaderClient from "@/components/HeaderClient"
import { CheckCircle2, Award, Compass } from "lucide-react"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload()
  let settings: any = null

  if (payload) {
    try {
      settings = await payload.findGlobal({
        slug: 'global-settings',
      })
    } catch (e) {
      // Fallback
    }
  }

  const title = settings?.defaultMetaTitle || "S-Leaves | Premium Travel Experiences"
  const description = settings?.defaultMetaDescription || "Discover extraordinary tours and unforgettable travel experiences."

  return {
    title,
    description,
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const payload = await getPayload()
  let settings: any = null

  if (payload) {
    try {
      settings = await payload.findGlobal({
        slug: 'global-settings',
        depth: 2,
      })
    } catch (e) {
      // Fallback
    }
  }

  const siteName = settings?.siteName || "S-Leaves"
  const logoUrl = settings?.logo?.url || "/logo.png"

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <CurrencyProvider>
          
          {/* Navigation Header */}
          <Suspense fallback={
            <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-gray-950/90 border-b border-gray-200/80 dark:border-gray-800/80 h-16 flex items-center justify-between px-6">
              <div className="flex items-center gap-2 font-bold text-xl">
                <img src={logoUrl} alt="S-Leaves Logo" className="w-9 h-9 rounded-xl object-cover" />
                <span>{siteName}</span>
              </div>
              <div className="w-20 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
            </header>
          }>
            <HeaderClient siteName={siteName} logoUrl={logoUrl} />
          </Suspense>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col w-full">
            {children}
          </div>

          {/* Multi-Column Premium Footer */}
          <footer className="border-t border-gray-250 dark:border-gray-850 bg-white dark:bg-gray-950/80 pt-16 pb-12 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              
              {/* Column 1: Brand & Bio */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight">
                  <img src={logoUrl} alt="S-Leaves Logo" className="w-8 h-8 rounded-lg object-cover" />
                  <span>{siteName}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
                  Crafting meaningful eco-conscious journeys and premium private tours across the Indonesian archipelago.
                </p>
                
                {/* Trust Badge Indicators */}
                <div className="pt-2 flex items-center gap-3">
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-500 bg-gray-100 dark:bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800">
                    <Award className="w-3.5 h-3.5 text-amber-500" /> TripAdvisor Partner
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-650 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1.5 rounded-lg border border-emerald-100/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> SSL Secured
                  </div>
                </div>
              </div>

              {/* Column 2: Quick Navigation */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Explore Activities</h4>
                <ul className="space-y-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                  <li><Link href="/tours" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">All Day Tours</Link></li>
                  <li><Link href="/transfers" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Airport Transfers</Link></li>
                  <li><Link href="/tours?category=Adventure" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Adventure Expeditions</Link></li>
                  <li><Link href="/tours?category=Culture" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Culture & Heritage</Link></li>
                </ul>
              </div>

              {/* Column 3: Travel Guides & Help */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Travel Support</h4>
                <ul className="space-y-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                  <li><Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About S-Leaves</Link></li>
                  <li><Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Help & Contact</Link></li>
                  <li><a href="/admin" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">CMS Admin Panel</a></li>
                  <li className="text-gray-400 text-xs font-normal">Opening Hours: 24/7 Support</li>
                </ul>
              </div>

              {/* Column 4: Contact & Socials */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Contact Info</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {settings?.contactInfo?.email && (
                    <p className="font-semibold">Email: <span className="text-gray-500 font-normal">{settings.contactInfo.email}</span></p>
                  )}
                  {settings?.contactInfo?.phone && (
                    <p className="font-semibold">Phone: <span className="text-gray-500 font-normal">{settings.contactInfo.phone}</span></p>
                  )}
                </div>
                
                {/* Social links */}
                <div className="flex items-center gap-3 pt-2">
                  {settings?.socialLinks?.map((social: any, i: number) => {
                    const isInstagram = social.platform?.toLowerCase() === 'instagram'
                    const isFacebook = social.platform?.toLowerCase() === 'facebook'
                    return (
                      <a 
                        key={i} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-gray-100 hover:bg-emerald-50 hover:text-emerald-650 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-emerald-400 text-gray-600 dark:text-gray-300 rounded-full transition-all border border-gray-200/50 dark:border-gray-800"
                        title={social.platform}
                      >
                        {isInstagram ? (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        ) : isFacebook ? (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        ) : (
                          <Compass className="w-4 h-4" />
                        )}
                      </a>
                    )
                  })}
                </div>
              </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200/60 dark:border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                © {new Date().getFullYear()} {siteName}. All rights reserved. S-Leaves Eco-Tourism & Travel Ltd.
              </p>
              <div className="flex items-center gap-6 text-xs text-gray-450 font-semibold">
                <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </footer>

        </CurrencyProvider>
      </body>
    </html>
  )
}
