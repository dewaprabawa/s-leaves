import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getPayload } from "@/lib/payload"
import "../globals.css"
import Link from "next/link"

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
      })
    } catch (e) {
      // Fallback
    }
  }

  const siteName = settings?.siteName || "S-Leaves"

  return (
    <div className={`${inter.variable} antialiased min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-black">
              S
            </div>
            {siteName}
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link href="/tours" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tours</Link>
            <Link href="/transfers" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Transfers</Link>
            <Link href="/admin" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Admin Login</Link>
          </nav>

          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </header>

      {children}

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="text-emerald-600 dark:text-emerald-400">S-Leaves</span> Travel
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {settings?.socialLinks?.map((social: any, i: number) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
