import { getPayload } from "@/lib/payload"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import BookingForm from "@/components/BookingForm"

export const revalidate = 3600 // Cache for 1 hour

export async function generateStaticParams() {
  const payload = await getPayload()
  if (!payload) return []

  try {
    const { docs } = await payload.find({
      collection: 'tours',
      limit: 100,
    })
    return docs.map((tour: any) => ({
      slug: tour.slug,
    }))
  } catch (e) {
    return []
  }
}

// Mock data fallback
const MOCK_TOUR = {
  id: 'mock-1',
  title: 'Bali Highlights: Temples & Terraces',
  slug: 'bali-highlights',
  duration: 'Full Day (8 Hours)',
  location: 'Ubud, Bali',
  pricing: { currency: 'USD', basePrice: 85, childPrice: 45 },
  categoryTags: [{ id: '1', tag: 'Culture' }, { id: '2', tag: 'Nature' }],
  description: [
    {
      type: 'paragraph',
      children: [{ text: 'Experience the spiritual heart of Bali on this comprehensive full-day tour. Visit sacred water temples, iconic rice terraces, and witness traditional craftsmanship.' }]
    }
  ],
  itinerary: [
    {
      id: 'day1',
      dayTitle: 'Morning: Sacred Monkeys & Temples',
      description: [{ type: 'paragraph', children: [{ text: 'Start your day at the Sacred Monkey Forest Sanctuary, followed by a purification ritual at Tirta Empul.' }] }]
    },
    {
      id: 'day2',
      dayTitle: 'Afternoon: Tegalalang & Coffee',
      description: [{ type: 'paragraph', children: [{ text: 'Walk through the breathtaking Tegalalang rice terraces and enjoy a local Luwak coffee tasting.' }] }]
    }
  ],
  metaTitle: 'Bali Highlights Tour - S-Leaves',
  metaDescription: 'Book the ultimate Bali highlights tour including Ubud, temples, and rice terraces.',
  canonicalURL: 'https://s-leaves.com/tours/bali-highlights'
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const payload = await getPayload()
  
  let tour: any = null

  if (payload) {
    try {
      const { docs } = await payload.find({
        collection: 'tours',
        where: { slug: { equals: resolvedParams.slug } },
        limit: 1,
      })
      tour = docs[0]
    } catch (e) {
      // Fallback
    }
  }

  if (!tour && resolvedParams.slug === 'bali-highlights') {
    tour = MOCK_TOUR
  }

  if (!tour) return { title: 'Tour Not Found' }

  return {
    title: tour.metaTitle || `${tour.title} | S-Leaves`,
    description: tour.metaDescription,
    alternates: tour.canonicalURL ? { canonical: tour.canonicalURL } : undefined,
    // Add openGraph configuration here
  }
}

export default async function TourDetailPage({ params }: Props) {
  const resolvedParams = await params
  const payload = await getPayload()
  
  let tour: any = null
  let isMock = false

  if (payload) {
    try {
      const { docs } = await payload.find({
        collection: 'tours',
        where: { slug: { equals: resolvedParams.slug } },
        limit: 1,
        depth: 2, // Fetch related media
      })
      tour = docs[0]
    } catch (e) {
      isMock = true
    }
  } else {
    isMock = true
  }

  if (!tour && resolvedParams.slug === 'bali-highlights') {
    tour = MOCK_TOUR
  }

  if (!tour) {
    notFound()
  }

  // Generate JSON-LD
  const jsonLd = tour.jsonLDOverride ? JSON.parse(tour.jsonLDOverride) : {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.metaDescription || `Enjoy the ${tour.title} experience.`,
    touristType: tour.categoryTags?.map((t: any) => t.tag) || [],
    offers: {
      '@type': 'Offer',
      price: tour.pricing?.basePrice,
      priceCurrency: tour.pricing?.currency,
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pb-24">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-gray-900">
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white/20">
          Hero Image Placeholder
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:px-24">
          <div className="max-w-4xl space-y-4">
            <div className="flex gap-2 flex-wrap">
              {tour.categoryTags?.map((t: any) => (
                <span key={t.id || t.tag} className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-md border border-white/10">
                  {t.tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {tour.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90 text-lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {tour.duration}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {tour.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Description (Simulated RichText render) */}
          <section className="prose prose-lg dark:prose-invert prose-emerald max-w-none">
            <h2>About this experience</h2>
            {tour.description?.map((block: any, i: number) => (
              <p key={i}>{block.children?.map((c: any) => c.text).join('')}</p>
            ))}
          </section>

          {/* Itinerary */}
          {tour.itinerary && tour.itinerary.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Itinerary</h2>
              <div className="space-y-8">
                {tour.itinerary.map((day: any, index: number) => (
                  <div key={day.id || index} className="relative pl-8 border-l-2 border-emerald-200 dark:border-emerald-900">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-gray-950"></div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{day.dayTitle}</h3>
                    <div className="text-gray-600 dark:text-gray-400">
                      {day.description?.map((block: any, i: number) => (
                        <p key={i}>{block.children?.map((c: any) => c.text).join('')}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sticky Booking Widget */}
        <div className="relative">
          <div className="sticky top-24">
            <BookingForm 
              tourId={tour.id} 
              tourTitle={tour.title} 
              tourSlug={tour.slug}
              basePrice={tour.pricing?.basePrice || 0} 
              childPrice={tour.pricing?.childPrice || 0} 
            />
          </div>
        </div>
      </div>
    </main>
  )
}
