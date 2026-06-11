import { getPayload } from "@/lib/payload"
import { notFound } from "next/navigation"
import { draftMode } from "next/headers"
import type { Metadata } from "next"
import { LivePreviewListener } from "@/components/LivePreviewListener"
import BookingForm from "@/components/BookingForm"
import ReviewForm from "@/components/ReviewForm"
import Image from "next/image"
import Link from "next/link"
import { Star, Award, ShieldCheck, ArrowLeft, MapPin, Clock } from "lucide-react"

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

const renderRichText = (content: any) => {
  if (!content) return null
  if (typeof content === 'string') return <p>{content}</p>
  
  // Lexical format
  if (content.root && Array.isArray(content.root.children)) {
    return content.root.children.map((block: any, i: number) => (
      <p key={i} className="mb-4">{block.children?.map((c: any) => c.text).join('')}</p>
    ))
  }
  
  // Slate/Mock format
  if (Array.isArray(content)) {
    return content.map((block: any, i: number) => (
      <p key={i} className="mb-4">{block.children?.map((c: any) => c.text).join('')}</p>
    ))
  }
  
  return null
}

export default async function TourDetailPage({ params }: Props) {
  const resolvedParams = await params
  const payload = await getPayload()
  
  // Determine if we should fetch drafts
  const { isEnabled: isDraftMode } = await draftMode()

  let tour: any = null
  let isMock = false

  if (payload) {
    try {
      const { docs } = await payload.find({
        collection: 'tours',
        where: { slug: { equals: resolvedParams.slug } },
        draft: isDraftMode,
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

  let reviews: any[] = []
  if (payload && tour.id && !isMock) {
    try {
      const { docs } = await payload.find({
        collection: 'reviews',
        where: {
          and: [
            { tour: { equals: tour.id } },
            { status: { equals: 'approved' } }
          ]
        },
        limit: 100,
        sort: '-createdAt',
      })
      reviews = docs
    } catch (e) {
      console.error("Failed to fetch reviews for tour:", e)
    }
  }

  if (isMock || reviews.length === 0) {
    reviews = [
      {
        id: 'mock-rev-1',
        authorName: 'Sarah Jenkins',
        rating: 5,
        comment: 'Absolutely magical experience! Highly recommend S-Leaves.',
        createdAt: '2026-05-15T08:00:00.000Z',
        visitDate: '2026-05-10T00:00:00.000Z'
      },
      {
        id: 'mock-rev-2',
        authorName: 'Elena M.',
        rating: 4,
        comment: 'Beautiful scenic views. Very professional guides.',
        createdAt: '2026-05-20T09:30:00.000Z',
        visitDate: '2026-05-18T00:00:00.000Z'
      }
    ]
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
      {isDraftMode && <LivePreviewListener />}
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="relative h-[65vh] min-h-[500px] w-full bg-gray-955 flex items-end">
        {/* Back Button */}
        <Link 
          href="/tours" 
          className="absolute top-6 left-6 md:left-12 lg:left-24 z-20 inline-flex items-center gap-2 text-white bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider border border-white/10 hover:bg-black/60 transition-all shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Tours
        </Link>

        {tour.media?.heroImage?.url ? (
          <Image 
            src={tour.media.heroImage.url} 
            alt={tour.title}
            fill
            className="object-cover opacity-50"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-gray-955 opacity-90" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-24 pb-12 pt-24 space-y-6">
          <div className="max-w-4xl space-y-4">
            
            {/* Badges row */}
            <div className="flex gap-2 flex-wrap items-center">
              {tour.isBestseller && (
                <span className="inline-flex items-center gap-1 bg-amber-500 text-white px-3.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm border border-amber-400">
                  <Award className="w-3.5 h-3.5" /> Bestseller
                </span>
              )}
              {tour.categoryTags?.map((t: any, idx: number) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md border border-white/10">
                  {t.tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              {tour.title}
            </h1>

            {/* Trust and details row */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-white/95 text-sm font-semibold pt-2 border-t border-white/10">
              
              {/* Ratings */}
              <div className="flex items-center gap-2 bg-black/25 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      className={`w-3.5 h-3.5 ${
                        idx < Math.floor(tour.rating || 5) 
                          ? "text-amber-400 fill-amber-400" 
                          : "text-white/20"
                      }`} 
                    />
                  ))}
                </div>
                <span className="font-bold">{(tour.rating || 5).toFixed(1)}</span>
                <span className="text-white/60">({(tour.reviewCount || 85).toLocaleString()} reviews)</span>
              </div>

              {/* Flex Cancellation */}
              <div className="inline-flex items-center gap-1 text-emerald-300 bg-emerald-950/45 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4 text-emerald-450" /> Free cancellation up to 24h before
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-450" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-450" />
                  {tour.location}
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Description */}
          <section className="prose prose-lg dark:prose-invert prose-emerald max-w-none">
            <h2>About this experience</h2>
            {renderRichText(tour.description)}
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
                      {renderRichText(day.description)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Reviews & Feedback Section */}
          <section className="space-y-8 pt-8 border-t border-gray-100 dark:border-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Traveler Reviews</h2>
            
            {/* Reviews Summary Panel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-900/20 p-6 rounded-3xl border border-gray-200/50 dark:border-gray-850 items-center">
              
              {/* Rating text */}
              <div className="text-center space-y-2 md:border-r border-gray-250 dark:border-gray-800 md:pr-6">
                <span className="text-5xl font-black text-gray-900 dark:text-white animate-fade-in">
                  {(tour.rating || 5).toFixed(1)}
                </span>
                <div className="flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      className={`w-4 h-4 ${
                        idx < Math.floor(tour.rating || 5) 
                          ? "text-amber-500 fill-amber-500" 
                          : "text-gray-200 dark:text-gray-800"
                      }`} 
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-450 dark:text-gray-450 font-semibold">
                  Based on {reviews.length} reviews
                </p>
              </div>

              {/* Rating bars */}
              <div className="md:col-span-2 space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = reviews.filter(r => Math.round(r.rating || 5) === stars).length
                  const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0
                  return (
                    <div key={stars} className="flex items-center gap-3 text-xs font-semibold text-gray-650 dark:text-gray-350">
                      <span className="w-12 text-right">{stars} star</span>
                      <div className="flex-1 h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-amber-500 rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="w-8 text-left">{Math.round(pct)}%</span>
                    </div>
                  )
                })}
              </div>

            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((rev) => {
                const dateStr = rev.visitDate 
                  ? `Visited ${new Date(rev.visitDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
                  : `Written ${new Date(rev.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
                return (
                  <div key={rev.id} className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-150 dark:border-gray-800 space-y-3.5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                          {rev.authorName?.charAt(0).toUpperCase() || 'T'}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-gray-955 dark:text-white leading-none">{rev.authorName}</h4>
                          <span className="text-[10px] text-gray-400 font-medium">{dateStr}</span>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star 
                            key={idx} 
                            className={`w-3.5 h-3.5 ${
                              idx < (rev.rating || 5) 
                                ? "text-amber-500 fill-amber-500" 
                                : "text-gray-100 dark:text-gray-850"
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-650 dark:text-gray-400 leading-relaxed font-medium">
                      {rev.comment}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Review Form */}
            <div className="pt-4">
              <ReviewForm tourId={tour.id} />
            </div>

          </section>
        </div>

        {/* Sticky Booking Widget */}
        <div className="relative">
          <div className="sticky top-24">
            <BookingForm tour={tour} />
          </div>
        </div>
      </div>
    </main>
  )
}
