import { getPayload } from "@/lib/payload"
import type { Metadata } from "next"
import TransfersListClient from "@/components/TransfersListClient"

export const revalidate = 3600 // Cache for 1 hour

// Mock data fallback if MongoDB is down
const MOCK_TRANSFERS = [
  {
    id: 'mock-tr-1',
    title: 'DPS Airport to Ubud Private Transfer',
    slug: 'dps-to-ubud',
    route: {
      from: 'Ngurah Rai Airport (DPS)',
      to: 'Ubud Area',
    },
    vehicles: [
      {
        name: 'Standard MPV (Toyota Avanza)',
        capacity: 4,
        basePrice: 35,
        description: 'Best for small families or couples. Fits 4 passengers and 2 medium bags.',
      },
      {
        name: 'Executive SUV (Toyota Fortuner)',
        capacity: 5,
        basePrice: 55,
        description: 'Premium SUV class with extra road stability. Fits 5 passengers and 3 bags.',
      },
    ],
    dropPoints: [
      {
        name: 'Ubud Outer Zone (Tegallalang / Payangan)',
        additionalPrice: 10,
        description: 'Drop-off surcharge for hotels in northern Ubud regions',
      },
    ],
  },
  {
    id: 'mock-tr-2',
    title: 'DPS Airport to Seminyak Luxury Transfer',
    slug: 'dps-to-seminyak-luxury',
    route: {
      from: 'Ngurah Rai Airport (DPS)',
      to: 'Seminyak / Canggu / Kuta Area',
    },
    vehicles: [
      {
        name: 'Standard MPV (Toyota Avanza)',
        capacity: 4,
        basePrice: 25,
        description: 'Economical and reliable MPV. Fits 4 passengers and 2 medium bags.',
      },
      {
        name: 'VIP Luxury Van (Toyota Alphard)',
        capacity: 6,
        basePrice: 85,
        description: 'Executive class minivan. VIP airport pickup with cold towels.',
      },
    ],
    dropPoints: [
      {
        name: 'Extra Stop in Canggu Zone',
        additionalPrice: 10,
        description: 'Secondary hotel stop in Canggu area',
      },
    ],
  }
]

export const metadata: Metadata = {
  title: "Private Airport Transfers | S-Leaves",
  description: "Book reliable, premium private airport transfers in Bali. Professional English-speaking drivers, flat rates, and flight tracking.",
}

export default async function TransfersPage() {
  const payload = await getPayload()
  
  let transfers: any[] = []
  let isUsingMockData = false

  if (payload) {
    try {
      const { docs } = await payload.find({
        collection: 'transfers',
        depth: 2,
        limit: 50,
      })
      transfers = docs
    } catch (e) {
      console.error("Failed to fetch transfers from Payload", e)
      isUsingMockData = true
      transfers = MOCK_TRANSFERS
    }
  } else {
    isUsingMockData = true
    transfers = MOCK_TRANSFERS
  }

  // Fallback to mock data if DB is empty for demo purposes
  if (transfers.length === 0) {
    transfers = MOCK_TRANSFERS
  }

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

        {isUsingMockData && (
          <div className="rounded-lg bg-amber-50 dark:bg-amber-900/30 p-4 text-sm text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800/50 text-center max-w-2xl mx-auto">
            <strong>Database Connection Error:</strong> Displaying mock data for demonstration purposes.
          </div>
        )}

        <TransfersListClient initialTransfers={transfers} />
      </div>
    </main>
  )
}
