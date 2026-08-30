import type { Metadata } from "next"
import TransfersListClient from "@/components/TransfersListClient"
import { TRANSFERS } from "@/data/transfers"

export const metadata: Metadata = {
  title: "Private Airport Transfers",
  description: "Book premium private Bali airport transfers with English-speaking drivers, flat rates, and flight tracking. Pair with ATV, rafting, or cycling adventures in Ubud.",
  alternates: {
    canonical: "/transfers",
  },
  openGraph: {
    title: "Private Airport Transfers | Sekar Bali Activity",
    description: "Book premium private Bali airport transfers with English-speaking drivers, flat rates, and flight tracking.",
    url: "https://www.sekarbaliactivity.com/transfers",
    siteName: "Sekar Bali Activity",
    type: "website",
    images: [{ url: "/images/adventures/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Airport Transfers | Sekar Bali Activity",
    description: "Flat-rate private Bali airport transfers with flight tracking.",
    images: ["/images/adventures/og-cover.jpg"],
  },
}

export default function TransfersPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Private Airport Transfers
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Arrive in style and comfort. Enjoy a direct, private transfer from Ngurah Rai Bali Airport (DPS) to your hotel. Includes toll fees, parking, and a professional driver.
          </p>
        </div>

        <TransfersListClient initialTransfers={TRANSFERS as any} />
      </div>
    </main>
  )
}
