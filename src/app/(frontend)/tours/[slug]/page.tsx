import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Camera, Check, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import TourBookingCard from "@/components/TourBookingCard"
import TourItinerary, { TourIncludedLists } from "@/components/TourItinerary"
import CookingGeoBlock from "@/components/CookingGeoBlock"
import {
  getAllTourSlugs,
  getTourBySlug,
  getTourCategoryLabel,
  type Tour,
} from "@/data/tours"
import { SITE_NAME, SITE_URL } from "@/lib/seo"
import { formatIdr } from "@/lib/whatsapp"
import {
  COOKING_CLASS_PRICE_IDR,
  COOKING_CLASS_STANDARD_PRICE_IDR,
} from "@/data/cultureSales"
import {
  COOKING_GEO_ENTITY,
  COOKING_GEO_FAQS,
  COOKING_GEO_TLDR,
  COOKING_GEO_UPDATED,
} from "@/data/cookingGeo"
import { GEO_UPDATED } from "@/data/geoContent"
import { TIER_PRICES_IDR } from "@/lib/pricing"
import { getTourHostNote, getTourRelatedGuides } from "@/data/tourGuides"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }))
}

function isCookingTour(tour: Tour) {
  return tour.slug === "balinese-cooking-class"
}

function isJeepTour(tour: Tour) {
  return tour.slug === "batur-sunrise-jeep-tour"
}

function isLuwakTour(tour: Tour) {
  return tour.slug === "luwak-coffee-plantation"
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) return { title: "Tour Not Found" }

  const title = tour.seoTitle ?? tour.title
  const description = tour.seoDescription ?? tour.shortDescription
  const keywords = isCookingTour(tour)
    ? [
        "cooking class Ubud",
        "Tumang Bali Cooking Class",
        "Balinese cooking class Ubud",
        "cooking class Ubud market tour",
        "cooking class Ubud price",
        "small group cooking class Ubud",
        "vegetarian cooking class Ubud",
        "private cooking class Ubud",
        "Sekar Bali Activity",
      ]
    : isJeepTour(tour)
      ? [
          "Mount Batur sunrise jeep tour",
          "Mount Batur jeep tour Kintamani",
          "Batur sunrise without hiking",
          "Mount Batur jeep vs trek",
          "sunrise jeep Lake Batur",
          "private 4x4 Mount Batur",
          "Sekar Bali Activity",
        ]
      : isLuwakTour(tour)
        ? [
            "luwak coffee plantation Ubud",
            "Umah Kuno luwak coffee",
            "ethical Kopi Luwak Bali",
            "cage-free luwak coffee tasting",
            "coffee plantation Tampaksiring",
            "luwak coffee price Bali",
            "Sekar Bali Activity",
          ]
        : undefined

  const ogImage = {
    url: tour.heroImage.url,
    alt: tour.heroImage.alt,
    ...(tour.heroImage.width ? { width: tour.heroImage.width } : {}),
    ...(tour.heroImage.height ? { height: tour.heroImage.height } : {}),
  }

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/tours/${tour.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/tours/${tour.slug}`,
      images: [ogImage],
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [tour.heroImage.url],
    },
    other: isCookingTour(tour)
      ? {
          "geo.region": "ID-BA",
          "geo.placename": "Ubud, Bali",
        }
      : isJeepTour(tour)
        ? {
            "geo.region": "ID-BA",
            "geo.placename": "Kintamani, Mount Batur, Bali",
          }
        : isLuwakTour(tour)
          ? {
              "geo.region": "ID-BA",
              "geo.placename": "Tampaksiring, Ubud, Bali",
            }
          : undefined,
  }
}

function hoursToIso(hours: number): string {
  const wholeHours = Math.floor(hours)
  const minutes = Math.round((hours - wholeHours) * 60)
  if (minutes === 0) return `PT${wholeHours}H`
  if (wholeHours === 0) return `PT${minutes}M`
  return `PT${wholeHours}H${minutes}M`
}

function durationToIso(duration: string): string | undefined {
  const range = duration.match(/(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)\s*Hours?/i)
  if (range) return hoursToIso(parseFloat(range[2]))
  const single = duration.match(/(\d+(?:\.\d+)?)\s*Hours?/i)
  if (single) return hoursToIso(parseFloat(single[1]))
  const half = duration.match(/Half\s*Day/i)
  if (half) return "PT4H"
  const full = duration.match(/Full\s*Day/i)
  if (full) return "PT8H"
  return undefined
}

function buildTourSchema(tour: Tour) {
  const cooking = isCookingTour(tour)
  const isoDuration = durationToIso(tour.duration)
  const base = {
    "@context": "https://schema.org",
    "@type": cooking ? (["TouristTrip", "Product"] as const) : "TouristTrip",
    "@id": `${SITE_URL}/tours/${tour.slug}#trip`,
    name: tour.title,
    description: cooking ? COOKING_GEO_TLDR : (tour.seoDescription ?? tour.shortDescription),
    image: tour.heroImage.url.startsWith("http")
      ? tour.heroImage.url
      : `${SITE_URL}${tour.heroImage.url}`,
    url: `${SITE_URL}/tours/${tour.slug}`,
    ...(isoDuration ? { duration: isoDuration } : {}),
    touristType: cooking
      ? ["Couples", "Families", "Food travelers", "Culture travelers"]
      : tour.slug === "batur-sunrise-jeep-tour"
        ? ["Couples", "Families", "Non-hikers", "Sunrise photographers"]
        : tour.slug === "luwak-coffee-plantation"
          ? ["Couples", "Families", "Food travelers", "Culture travelers"]
          : ["Couples", "Families", "Adventure seekers"],
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Place",
      name: cooking
        ? COOKING_GEO_ENTITY.area
        : tour.slug === "bali-atv-adventure"
          ? "Sedang, Abiansemal, Badung, Bali"
          : tour.slug === "batur-sunrise-jeep-tour"
            ? "Kintamani, Mount Batur, Bali"
          : tour.area ?? "Ubud, Bali",
    },
    itinerary: tour.itinerary.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.description,
    })),
  }

  if (cooking) {
    return {
      ...base,
      brand: {
        "@type": "Brand",
        name: "Tumang Bali",
      },
      category: "Food & Workshops",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: COOKING_GEO_ENTITY.ratingValue,
        reviewCount: COOKING_GEO_ENTITY.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: COOKING_GEO_ENTITY.sharedPriceIdr,
        highPrice: COOKING_GEO_ENTITY.privateCoupleIdr,
        priceCurrency: "IDR",
        offerCount: 4,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/tours/${tour.slug}`,
        offers: [
          {
            "@type": "Offer",
            name: "Shared morning class (market tour)",
            price: COOKING_GEO_ENTITY.sharedPriceIdr,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/book?activity=balinese-cooking-class`,
          },
          {
            "@type": "Offer",
            name: "Shared afternoon class",
            price: COOKING_GEO_ENTITY.sharedPriceIdr,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/book?activity=balinese-cooking-class`,
          },
          {
            "@type": "Offer",
            name: "Private class (1 guest)",
            price: COOKING_GEO_ENTITY.privateSoloIdr,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/book?activity=balinese-cooking-class`,
          },
          {
            "@type": "Offer",
            name: "Private class (2 guests)",
            price: COOKING_GEO_ENTITY.privateCoupleIdr,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/book?activity=balinese-cooking-class`,
          },
        ],
      },
    }
  }

  if (tour.slug === "batur-sunrise-jeep-tour") {
    return {
      ...base,
      offers: {
        "@type": "AggregateOffer",
        name: tour.title,
        lowPrice: "750000",
        highPrice: "1350000",
        priceCurrency: "IDR",
        offerCount: 3,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/tours/${tour.slug}`,
        description: tour.included.join(", "),
        offers: [
          {
            "@type": "Offer",
            name: "Solo private jeep",
            price: "1350000",
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/tours/${tour.slug}`,
          },
          {
            "@type": "Offer",
            name: "2 guests sharing a jeep",
            price: "825000",
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/tours/${tour.slug}`,
          },
          {
            "@type": "Offer",
            name: "3+ guests sharing a jeep",
            price: "750000",
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/tours/${tour.slug}`,
          },
        ],
      },
    }
  }

  return {
    ...base,
    offers: {
      "@type": "Offer",
      name: tour.title,
      price: tour.basePrice,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/tours/${tour.slug}`,
      description: tour.included.join(", "),
    },
  }
}

function buildTourWebPageSchema(tour: Tour) {
  if (isCookingTour(tour)) return buildCookingWebPageSchema(tour)
  if (isJeepTour(tour)) return buildJeepWebPageSchema(tour)

  const significantLink = [
    `${SITE_URL}/book?activity=${tour.slug}`,
    `${SITE_URL}/llms.txt`,
    `${SITE_URL}/pricing.md`,
    ...getTourRelatedGuides(tour.slug).map((guide) =>
      guide.href.startsWith("http") ? guide.href : `${SITE_URL}${guide.href}`,
    ),
  ]

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/tours/${tour.slug}#webpage`,
    url: `${SITE_URL}/tours/${tour.slug}`,
    name: tour.seoTitle ?? tour.title,
    description: tour.seoDescription ?? tour.shortDescription,
    dateModified: GEO_UPDATED,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/tours/${tour.slug}#trip` },
    significantLink,
  }
}

function buildJeepWebPageSchema(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/tours/${tour.slug}#webpage`,
    url: `${SITE_URL}/tours/${tour.slug}`,
    name: tour.seoTitle ?? tour.title,
    description: tour.seoDescription ?? tour.shortDescription,
    dateModified: GEO_UPDATED,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/tours/${tour.slug}#trip` },
    significantLink: [
      `${SITE_URL}/blog/mount-batur-sunrise-jeep-tour-guide-2026`,
      `${SITE_URL}/blog/mount-batur-jeep-vs-sunrise-trek`,
      `${SITE_URL}/llms.txt`,
      `${SITE_URL}/pricing.md`,
    ],
  }
}

function buildCookingWebPageSchema(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/tours/${tour.slug}#webpage`,
    url: `${SITE_URL}/tours/${tour.slug}`,
    name: tour.seoTitle ?? tour.title,
    description: tour.seoDescription ?? tour.shortDescription,
    dateModified: COOKING_GEO_UPDATED,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/tours/${tour.slug}#trip` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".cooking-geo-tldr", ".cooking-geo-answer", ".geo-tldr"],
    },
    significantLink: [
      `${SITE_URL}/book?activity=balinese-cooking-class`,
      `${SITE_URL}/blog/cycling-cooking-class-ubud-full-day-itinerary`,
      `${SITE_URL}/llms.txt`,
      `${SITE_URL}/pricing.md`,
      COOKING_GEO_ENTITY.moneyPage,
      COOKING_GEO_ENTITY.tripadvisorUrl,
    ],
  }
}

function buildCookingQaSchemas() {
  return COOKING_GEO_FAQS.map((item, index) => ({
    "@context": "https://schema.org",
    "@type": "Question",
    "@id": `${SITE_URL}/tours/balinese-cooking-class#qa-${index + 1}`,
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
      url: `${SITE_URL}/tours/balinese-cooking-class#cooking-geo`,
    },
  }))
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    notFound()
  }

  const cooking = isCookingTour(tour)
  const tourSchema = buildTourSchema(tour)
  const webPageSchema = buildTourWebPageSchema(tour)

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
        name: "Experiences",
        item: `${SITE_URL}/#experiences`,
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
    <main className="w-full bg-sand pt-32 pb-28 lg:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {cooking
        ? buildCookingQaSchemas().map((qa) => (
            <script
              key={qa["@id"]}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(qa) }}
            />
          ))
        : null}

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Link
          href="/#experiences"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-light hover:text-brand-green transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to experiences
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
                    {getTourCategoryLabel(tour.category)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-brand-green-light">
                    <Clock className="w-4 h-4 text-brand-green" />
                    {tour.duration}
                  </span>
                  {cooking ? (
                    <span className="text-sm font-bold text-brand-green">
                      <span className="mr-2 text-brand-green-light line-through opacity-70 font-semibold">
                        {formatIdr(COOKING_CLASS_STANDARD_PRICE_IDR)}
                      </span>
                      Promo {formatIdr(COOKING_CLASS_PRICE_IDR)} / person
                    </span>
                  ) : isJeepTour(tour) ? (
                    <span className="text-sm font-bold text-brand-green">
                      From {formatIdr(TIER_PRICES_IDR["jeep-sunrise"][2])} / person (3+) · solo{" "}
                      {formatIdr(TIER_PRICES_IDR["jeep-sunrise"][0])}
                    </span>
                  ) : (
                    <span className="text-sm font-bold text-brand-green">
                      From {formatIdr(tour.basePrice)}
                    </span>
                  )}
                  {cooking ? (
                    <span className="text-xs text-brand-green-light">
                      Updated {COOKING_GEO_UPDATED || GEO_UPDATED}
                    </span>
                  ) : null}
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

            {cooking ? <CookingGeoBlock /> : null}

            <section className="rounded-3xl border border-brand-green/10 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-brand-green mb-4">
                {cooking ? "About Tumang Bali Cooking Class" : "About This Experience"}
              </h2>
              <article className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:text-brand-green prose-headings:uppercase prose-a:text-brand-green">
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

            {(() => {
              const hostNote = getTourHostNote(tour.slug)
              if (!hostNote) return null
              return (
                <section className="rounded-3xl border border-accent-gold/25 bg-accent-gold/5 p-6 md:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-gold-dark mb-2">
                    Host note
                  </p>
                  <h2 className="font-display text-2xl font-bold text-brand-green uppercase mb-3">
                    {hostNote.title}
                  </h2>
                  <p className="text-brand-green-light leading-relaxed">{hostNote.body}</p>
                </section>
              )
            })()}

            {(() => {
              const guides = getTourRelatedGuides(tour.slug)
              if (guides.length === 0) return null
              return (
                <section className="rounded-3xl border border-brand-green/10 bg-white p-6 md:p-8 shadow-sm space-y-5">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-green uppercase">
                    Guides for this activity
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {guides.map((guide) => (
                      <li key={guide.href}>
                        <Link
                          href={guide.href}
                          className="block h-full rounded-2xl border border-brand-green/10 bg-sand/40 p-5 hover:border-accent-gold/40 transition-colors"
                        >
                          <p className="font-bold text-brand-green mb-1.5 leading-snug">
                            {guide.title}
                          </p>
                          <p className="text-sm text-brand-green-light leading-relaxed">
                            {guide.blurb}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })()}

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
