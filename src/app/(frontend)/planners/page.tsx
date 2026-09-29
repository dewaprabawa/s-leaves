import type { Metadata } from "next"
import Link from "next/link"
import PlannersCatalogClient from "@/components/PlannersCatalogClient"
import { PLANNERS_PAGE_KEYWORDS } from "@/data/activityKeywords"
import { PLANNERS, PLANNER_UPDATED } from "@/data/planners"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

const TITLE = "Free Bali activity planners"
const DESCRIPTION =
  "Free Ubud IDR calculators for ATV, motorbike, Mount Batur jeep, cooking class, and hotel pickup. Try one, then WhatsApp — no payment to inquire."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: PLANNERS_PAGE_KEYWORDS,
  alternates: {
    canonical: "/planners",
  },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/planners`,
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

export default function PlannersPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sekar Bali Activity planners",
    description: DESCRIPTION,
    numberOfItems: PLANNERS.length,
    dateModified: PLANNER_UPDATED,
    itemListElement: PLANNERS.map((planner, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: planner.h1,
      url: `${SITE_URL}/planners/${planner.slug}`,
      item: {
        "@type": "WebPage",
        name: planner.h1,
        description: planner.job,
        url: `${SITE_URL}/planners/${planner.slug}`,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Planners", item: `${SITE_URL}/planners` },
    ],
  }

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/planners`,
    dateModified: PLANNER_UPDATED,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".planner-hub-answer"],
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="mb-6 text-xs font-semibold text-brand-green-light">
          <Link href="/" className="hover:text-accent-gold-dark">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-green">Planners</span>
        </nav>

        <header className="mb-8 md:mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold-dark mb-3">
            Free planners · 2026 IDR
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-brand-green uppercase leading-tight mb-4">
            Free Bali activity planners
          </h1>
          <p className="planner-hub-answer text-sm md:text-base text-brand-green-light leading-relaxed">
            These are working IDR calculators for Sekar Bali Activity days near Ubud — ATV, scooter,
            Mount Batur jeep, Tumang cooking, and hotel pickup. Each planner has its own URL.
            The catalog of bookable tours stays on{" "}
            <Link href="/experiences" className="font-semibold text-brand-green underline underline-offset-2">
              /experiences
            </Link>
            . Staff invoices stay on the blocked /tools/ path.
          </p>
        </header>

        <PlannersCatalogClient />

        <section className="mt-12 max-w-3xl space-y-4 text-sm leading-relaxed text-brand-green-light">
          <h2 className="font-display text-2xl font-bold uppercase text-brand-green">
            Why planners, not a cloned AI-tool directory
          </h2>
          <p>
            Letaido’s /ai-tools/ hub works because each page is a usable SEO or writing utility that
            upsells a workspace. Copying fifty AI checkers onto a Bali tour site would target the
            wrong intent. The transferable method is the hub, unique URLs, category pills, and a
            one-line job plus try CTA — filled with calculators guests already ask on WhatsApp.
          </p>
        </section>
      </div>
    </main>
  )
}
