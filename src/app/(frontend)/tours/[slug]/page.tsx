import { notFound } from "next/navigation"
import type { Metadata } from "next"
import BookingForm from "@/components/BookingForm"
import ReviewForm from "@/components/ReviewForm"
import Image from "next/image"
import Link from "next/link"
import { Star, Award, ShieldCheck, ArrowLeft, MapPin, Clock, Info, HelpCircle } from "lucide-react"
import { TOURS, type Tour } from "@/data/tours"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return TOURS.map((tour) => ({
    slug: tour.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const tour = TOURS.find((t) => t.slug === resolvedParams.slug)

  if (!tour) return { title: 'Tour Not Found' }

  return {
    title: `${tour.title} | Sekar Bali Activity`,
    description: tour.shortDescription,
  }
}

export default async function TourDetailPage({ params }: Props) {
  const resolvedParams = await params
  const tour = TOURS.find((t) => t.slug === resolvedParams.slug)

  if (!tour) {
    notFound()
  }

  const basePrice = tour.basePrice || 0
  const childPrice = tour.childPrice || Math.round(basePrice * 0.7)
  const currencySymbol = 'Rp'
  const heroImage = tour.heroImage?.url || 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": tour.shortDescription,
    "image": heroImage,
    "touristType": [
      "Sightseeing",
      "Cultural"
    ],
    "offers": {
      "@type": "Offer",
      "price": basePrice,
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sekar Bali Activity"
    }
  }

  const faqSchema = tour.faqs && tour.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tour.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 transition-colors duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all experiences
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Details (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                {tour.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>4.9</span>
                  <span className="text-gray-400 font-normal">(120 reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span>Ubud, Bali</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span>{tour.duration}</span>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
              <Image
                src={heroImage}
                alt={tour.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Info className="w-5 h-5 text-emerald-500" /> About This Experience
              </h2>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-bold text-gray-900 dark:text-white" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-2" {...props} />,
                    li: ({node, ...props}) => <li {...props} />
                  }}
                >
                  {tour.fullDescription}
                </ReactMarkdown>
              </div>
            </div>

            {/* Video Player */}
            {tour.youtubeVideoId && (
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Experience Highlight</h2>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${tour.youtubeVideoId}?rel=0`}
                    title={`${tour.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Experience Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((item, index) => (
                    <div key={item.id || index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {tour.faqs && tour.faqs.length > 0 && (
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-500" /> Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {tour.faqs.map((faq) => (
                    <div key={faq.id} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Section */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Customer Reviews</h2>
              <ReviewForm tourId={tour.id} />
            </div>

          </div>

          {/* Booking Card (Right 1 col) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm tour={tour as any} />
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}
