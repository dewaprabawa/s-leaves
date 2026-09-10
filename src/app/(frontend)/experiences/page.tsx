import type { Metadata } from "next"
import ExperiencesCatalogClient from "@/components/ExperiencesCatalogClient"
import { TOURS } from "@/data/tours"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

const TITLE = "All Bali Tours & Activities Near Ubud"
const DESCRIPTION =
  "Browse every Sekar Bali Activity experience in one place — Tumang cooking class, Pejeng ricefield cycling, ATV, rafting, canyon tubing, Mount Batur sunrise jeep tour & day tours. Clear IDR pricing, WhatsApp booking, no upfront payment."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/experiences",
  },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/experiences`,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
}

export default function ExperiencesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "All Bali Tours & Activities — Sekar Bali Activity",
    description: DESCRIPTION,
    numberOfItems: TOURS.length,
    itemListElement: TOURS.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tour.title,
      url: `${SITE_URL}/tours/${tour.slug}`,
      item: {
        "@type": "TouristTrip",
        name: tour.title,
        description: tour.seoDescription ?? tour.shortDescription,
        url: `${SITE_URL}/tours/${tour.slug}`,
        image: tour.heroImage.url.startsWith("http")
          ? tour.heroImage.url
          : `${SITE_URL}${tour.heroImage.url}`,
        offers: {
          "@type": "Offer",
          price: tour.basePrice,
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/tours/${tour.slug}`,
        },
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "All Experiences", item: `${SITE_URL}/experiences` },
    ],
  }

  return (
    <main className="w-full bg-sand pt-28 md:pt-32 pb-16 lg:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <header className="mb-6 md:mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold-dark mb-3">
            Sekar Bali Activity
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-brand-green uppercase leading-tight mb-3">
            All Bali tours &amp; activities
          </h1>
          <p className="text-sm md:text-base text-brand-green-light leading-relaxed">
            Cooking class, ricefield cycling, ATV, rafting, canyon tubing, the Mount Batur sunrise
            jeep tour, and private day tours — clear IDR pricing, free cancellation up to 24 hours,
            and WhatsApp booking with no upfront payment.
          </p>
        </header>

        <ExperiencesCatalogClient />
      </div>
    </main>
  )
}
