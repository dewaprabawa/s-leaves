import { getPayload } from "@/lib/payload"
import Link from "next/link"

export const revalidate = 3600 // Cache for 1 hour

// Mock data fallback if MongoDB is down
const MOCK_TOURS = [
  {
    id: 'mock-1',
    title: 'Bali Highlights: Temples & Terraces',
    slug: 'bali-highlights',
    duration: 'Full Day (8 Hours)',
    location: 'Ubud, Bali',
    pricing: { currency: 'USD', basePrice: 85 },
    categoryTags: [{ id: '1', tag: 'Culture' }, { id: '2', tag: 'Nature' }]
  },
  {
    id: 'mock-2',
    title: 'Komodo Dragon 3-Day Expedition',
    slug: 'komodo-expedition',
    duration: '3 Days, 2 Nights',
    location: 'Flores, Indonesia',
    pricing: { currency: 'USD', basePrice: 450 },
    categoryTags: [{ id: '3', tag: 'Adventure' }, { id: '4', tag: 'Wildlife' }]
  }
]

export const metadata = {
  title: "Explore Tours | S-Leaves",
  description: "Discover our curated selection of premium travel experiences.",
}

export default async function ToursPage() {
  const payload = await getPayload()
  
  let tours: any[] = []
  let isUsingMockData = false

  if (payload) {
    try {
      const { docs } = await payload.find({
        collection: 'tours',
        depth: 1,
        limit: 50,
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
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Curated Experiences
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Embark on unforgettable journeys with our expertly crafted tours. 
            From serene nature walks to thrilling multi-day expeditions.
          </p>
        </div>

        {isUsingMockData && (
          <div className="rounded-lg bg-amber-50 dark:bg-amber-900/30 p-4 text-sm text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800/50 text-center max-w-2xl mx-auto">
            <strong>Database Connection Error:</strong> We are currently unable to connect to the database. Displaying mock data for demonstration purposes.
          </div>
        )}

        {tours.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl shadow-sm ring-1 ring-gray-900/5">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">No tours available</h3>
            <p className="mt-2 text-gray-500">Check back soon for new experiences!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Link 
                key={tour.id} 
                href={`/tours/${tour.slug}`}
                className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hero Image Placeholder */}
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  {/* Mock logic: Normally we'd render the relationTo media URL here */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-flex items-center rounded-md bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-gray-900">
                      {tour.pricing?.currency} {tour.pricing?.basePrice}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {tour.categoryTags?.map((t: any) => (
                      <span key={t.id || t.tag} className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        {t.tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {tour.title}
                  </h3>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {tour.location}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
