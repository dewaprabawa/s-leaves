import { getPayload } from "@/lib/payload"
import ToursListClient from "@/components/ToursListClient"
import type { Metadata } from "next"
import { Suspense } from "react"

export const revalidate = 3600 // Cache for 1 hour

// Mock data fallback if MongoDB is down
const MOCK_TOURS = [
  {
    id: 'mock-cycling',
    title: 'Pejeng Village & Terrace Cycling',
    slug: 'pejeng-village-cycling',
    duration: '4 Hours (Morning / Afternoon)',
    location: 'Pejeng, Ubud, Bali',
    rating: 4.9,
    reviewCount: 342,
    isBestseller: true,
    hasFreeCancellation: true,
    pricing: { currency: 'USD', basePrice: 25 },
    categoryTags: [{ id: 'c1', tag: 'Cycling' }, { id: 'c2', tag: 'Culture' }, { id: 'c3', tag: 'Nature' }]
  },
  {
    id: 'mock-coffee',
    title: 'Luwak Coffee Plantation Experience',
    slug: 'luwak-coffee-experience',
    duration: '1.5 Hours (Flexible)',
    location: 'Ubud, Bali',
    rating: 4.8,
    reviewCount: 215,
    isBestseller: true,
    hasFreeCancellation: true,
    pricing: { currency: 'USD', basePrice: 25 },
    categoryTags: [{ id: 'k1', tag: 'Culinary' }, { id: 'k2', tag: 'Culture' }]
  },
  {
    id: 'mock-cooking',
    title: 'Traditional Balinese Dinner Cooking Class',
    slug: 'balinese-cooking-class',
    duration: '3 Hours (5:30 PM – 8:30 PM)',
    location: 'Ubud, Bali',
    rating: 5.0,
    reviewCount: 418,
    isBestseller: true,
    hasFreeCancellation: true,
    pricing: { currency: 'USD', basePrice: 25 },
    categoryTags: [{ id: 'b1', tag: 'Culinary' }, { id: 'b2', tag: 'Culture' }]
  },
  {
    id: 'mock-1',
    title: 'Bali Highlights: Temples & Terraces',
    slug: 'bali-highlights',
    duration: 'Full Day (8 Hours)',
    location: 'Ubud, Bali',
    rating: 4.9,
    reviewCount: 1568,
    isBestseller: true,
    hasFreeCancellation: true,
    pricing: { currency: 'USD', basePrice: 85 },
    categoryTags: [{ id: '1', tag: 'Culture' }, { id: '2', tag: 'Nature' }]
  },
  {
    id: 'mock-2',
    title: 'Komodo Dragon 3-Day Expedition',
    slug: 'komodo-expedition',
    duration: '3 Days, 2 Nights',
    location: 'Flores, Indonesia',
    rating: 5.0,
    reviewCount: 9210,
    isBestseller: true,
    hasFreeCancellation: true,
    pricing: { currency: 'USD', basePrice: 450 },
    categoryTags: [{ id: '3', tag: 'Adventure' }, { id: '4', tag: 'Wildlife' }, { id: '5', tag: 'Ocean' }]
  },
  {
    id: 'mock-3',
    title: 'Mount Batur Sunrise Volcano Trekking',
    slug: 'mount-batur-trek',
    duration: '6 Hours (Early Morning)',
    location: 'Kintamani, Bali',
    rating: 4.8,
    reviewCount: 776,
    isBestseller: false,
    hasFreeCancellation: true,
    pricing: { currency: 'USD', basePrice: 60 },
    categoryTags: [{ id: '6', tag: 'Adventure' }, { id: '7', tag: 'Nature' }]
  }
]

export const metadata: Metadata = {
  title: "Explore Curated Tours | S-Leaves",
  description: "Browse our hand-picked day tours, volcano trekking packages, and luxury island expeditions across Bali and Flores.",
}

type Props = {
  searchParams: Promise<{ search?: string; category?: string; date?: string; wishlist?: string }>
}

export default async function ToursPage({ searchParams }: Props) {
  const payload = await getPayload()
  
  let tours: any[] = []
  let isUsingMockData = false

  if (payload) {
    try {
      const { docs } = await payload.find({
        collection: 'tours',
        depth: 2, // Fetch relations (specifically, media heroImage etc.)
        limit: 100,
      })
      tours = docs
    } catch (e) {
      console.error("Failed to fetch tours from Payload", e)
      isUsingMockData = true
      tours = MOCK_TOURS
    }
  } else {
    isUsingMockData = true
    tours = MOCK_TOURS
  }

  // Fallback to mock data if DB is empty for demo purposes
  if (tours.length === 0) {
    tours = MOCK_TOURS
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950/40 py-16 px-4 sm:px-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300 border border-emerald-100/30">
            Guided Adventures
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
            Curated S-Leaves Experiences
          </h1>
          <p className="text-base sm:text-lg text-gray-550 dark:text-gray-400 font-medium leading-relaxed">
            Embark on unforgettable journeys with our expertly crafted tours. 
            From serene nature walks to thrilling multi-day island expeditions.
          </p>
        </div>

        {isUsingMockData && (
          <div className="rounded-2xl bg-amber-50 dark:bg-amber-955/20 p-4 text-xs font-semibold text-amber-850 dark:text-amber-300 border border-amber-200/50 dark:border-amber-900/30 text-center max-w-md mx-auto">
            <strong>Demo Mode:</strong> Displaying offline mock experiences.
          </div>
        )}

        {/* Sidebar + Filter Grid layout client component */}
        <Suspense fallback={
          <div className="text-center py-24">
            <p className="text-gray-500 font-semibold">Loading experiences catalog...</p>
          </div>
        }>
          <ToursListClient initialTours={tours} />
        </Suspense>
        
      </div>
    </main>
  )
}
