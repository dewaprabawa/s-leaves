import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Camera, Check, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import TourBookingCard from "@/components/TourBookingCard"
import TourItinerary, { TourIncludedLists } from "@/components/TourItinerary"
import { getAllTourSlugs, getTourBySlug } from "@/data/tours"
import { SITE_URL } from "@/lib/seo"
import { formatIdr } from "@/lib/whatsapp"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) return { title: "Tour Not Found" }

  return {
    title: tour.title,
    description: tour.shortDescription,
    alternates: {
      canonical: `/tours/${tour.slug}`,
    },
    openGraph: {
      title: tour.title,
      description: tour.shortDescription,
      url: `${SITE_URL}/tours/${tour.slug}`,
      images: [tour.heroImage.url],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tour.title,
      description: tour.shortDescription,
      images: [tour.heroImage.url],
    },
  }
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    notFound()
  }

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.shortDescription,
    image: `${SITE_URL}${tour.heroImage.url}`,
    touristType: ["Couples", "Families", "Adventure seekers"],
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      price: tour.basePrice,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/tours/${tour.slug}`,
    },
    itinerary: tour.itinerary.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.description,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Adventures",
        item: `${SITE_URL}/#adventures`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tour.title,
        item: `${SITE_URL}/tours/${tour.slug}`,
      },
    ],
  }

  return (
    <main className="w-full bg-sand pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Link
          href="/#adventures"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-light hover:text-brand-green transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to adventures
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-12 items-start">
          <div className="space-y-10 md:space-y-12">
            <header className="space-y-6">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={tour.heroImage.url}
                  alt={tour.heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-green">
                    {tour.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-brand-green-light">
                    <Clock className="w-4 h-4 text-brand-green" />
                    {tour.duration}
                  </span>
                  <span className="text-sm font-bold text-brand-green">
                    From {formatIdr(tour.basePrice)}
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green uppercase leading-tight">
                  {tour.title}
                </h1>
                <p className="text-lg text-brand-green-light leading-relaxed max-w-3xl">
                  {tour.shortDescription}
                </p>
              </div>
            </header>

            {tour.highlights.length > 0 && (
              <section className="flex flex-wrap gap-2">
                {tour.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-green border border-brand-green/10"
                  >
                    <Check className="w-3.5 h-3.5 text-accent-gold-dark" />
                    {highlight}
                  </span>
                ))}
              </section>
            )}

            <section className="rounded-3xl border border-brand-green/10 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-brand-green mb-4">About This Experience</h2>
              <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-display prose-headings:text-brand-green prose-headings:uppercase prose-a:text-brand-green">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {tour.fullDescription}
                </ReactMarkdown>
              </article>
            </section>

            {tour.gallery.length > 0 && (
              <section className="rounded-3xl border border-brand-green/10 bg-white p-6 md:p-8 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-brand-green flex items-center gap-2">
                  <Camera className="w-5 h-5 text-brand-green" />
                  Experience Photo Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.gallery.map((imgItem, idx) => (
                    <div
                      key={`${imgItem.url}-${idx}`}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-green/10 shadow-sm group"
                    >
                      <Image
                        src={imgItem.url}
                        alt={imgItem.alt || tour.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {imgItem.alt ? (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 text-xs text-white font-medium">
                          {imgItem.alt}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <TourItinerary items={tour.itinerary} />

            <TourIncludedLists included={tour.included} notIncluded={tour.notIncluded} />

            {tour.faqs.length > 0 && (
              <section className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-green uppercase">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {tour.faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="rounded-2xl border border-brand-green/10 bg-white p-5 md:p-6 shadow-sm"
                    >
                      <h3 className="font-bold text-brand-green mb-2">{faq.question}</h3>
                      <p className="text-sm md:text-base text-brand-green-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-28">
            <TourBookingCard
              tourId={tour.id}
              tourSlug={tour.slug}
              title={tour.title}
              duration={tour.duration}
              basePrice={tour.basePrice}
              childPrice={tour.childPrice}
              getYourGuideUrl={tour.getYourGuideUrl}
              activityOptions={tour.activityOptions}
            />
          </aside>
        </div>
      </div>
    </main>
  )
}
