import type { Metadata } from "next"
import TransfersListClient from "@/components/TransfersListClient"
import { TRANSFERS } from "@/data/transfers"

export const metadata: Metadata = {
  title: "Private Airport Transfers",
  description: "Private Bali airport transfers from IDR 700,000. English-speaking drivers, flat rates, and flight tracking. Pair with ATV, rafting, or cycling adventures in Ubud.",
  alternates: {
    canonical: "/transfers",
  },
  openGraph: {
    title: "Private Airport Transfers | Sekar Bali Activity",
    description: "Private DPS to Ubud airport transfers from IDR 700,000 with English-speaking drivers, flat rates, and flight tracking.",
    url: "https://www.sekarbaliactivity.com/transfers",
    siteName: "Sekar Bali Activity",
    type: "website",
    images: [{ url: "/images/adventures/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Airport Transfers | Sekar Bali Activity",
    description: "Private Bali airport transfers from IDR 700,000 with flight tracking.",
    images: ["/images/adventures/og-cover.jpg"],
  },
}

export default function TransfersPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12 flex-1">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <header className="max-w-3xl space-y-4">
          <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm">
            Airport & hotel
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-green tracking-tight uppercase leading-tight">
            Private Airport{" "}
            <span className="text-accent-gold-dark">Transfers.</span>
          </h1>
          <p className="text-base md:text-lg text-brand-green-light leading-relaxed max-w-2xl">
            Arrive in style and comfort. Enjoy a direct, private transfer from Ngurah Rai Bali Airport
            (DPS) to your hotel from <strong>IDR 700,000</strong>. Includes toll fees, parking, and a professional driver.
          </p>
        </header>

        <TransfersListClient initialTransfers={TRANSFERS as any} />
      </div>
    </main>
  )
}
