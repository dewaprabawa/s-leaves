import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PlannerWidget } from "@/components/planners/PlannerWidgets"
import {
  getPlannerBySlug,
  getPlannerSlugs,
  PLANNER_CATEGORY_LABELS,
  PLANNER_UPDATED,
  PLANNERS,
} from "@/data/planners"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getPlannerSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const planner = getPlannerBySlug(slug)
  if (!planner) {
    return { title: "Planner not found" }
  }

  return {
    title: planner.seoTitle,
    description: planner.description,
    keywords: planner.keywords,
    alternates: {
      canonical: `/planners/${planner.slug}`,
    },
    openGraph: {
      title: `${planner.seoTitle} | ${SITE_NAME}`,
      description: planner.description,
      url: `${SITE_URL}/planners/${planner.slug}`,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${planner.seoTitle} | ${SITE_NAME}`,
      description: planner.description,
      images: [OG_IMAGE.url],
    },
  }
}

export default async function PlannerPage({ params }: Props) {
  const { slug } = await params
  const planner = getPlannerBySlug(slug)
  if (!planner) notFound()

  const related = PLANNERS.filter((item) => item.slug !== planner.slug).slice(0, 3)
  const pageUrl = `${SITE_URL}/planners/${planner.slug}`

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: planner.h1,
    description: planner.description,
    url: pageUrl,
    dateModified: PLANNER_UPDATED,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".planner-definition", ".planner-qa", ".planner-answer"],
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Planners", item: `${SITE_URL}/planners` },
      { "@type": "ListItem", position: 3, name: planner.h1, item: pageUrl },
    ],
  }

  return (
    <main className="w-full bg-sand pt-28 md:pt-32 pb-16 lg:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="mb-6 text-xs font-semibold text-brand-green-light">
          <Link href="/" className="hover:text-accent-gold-dark">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/planners" className="hover:text-accent-gold-dark">Planners</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-green">{planner.h1}</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold-dark mb-3">
            {PLANNER_CATEGORY_LABELS[planner.category]} · free · no signup
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-brand-green uppercase leading-tight mb-4">
            {planner.h1}
          </h1>
          <p className="planner-definition text-sm md:text-base text-brand-green-light leading-relaxed">
            {planner.definition}
          </p>
        </header>

        <section className="mb-12" aria-label="Calculator">
          <PlannerWidget slug={planner.slug} />
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold uppercase text-brand-green mb-4">
            How it works
          </h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-brand-green-light">
            {planner.howItWorks.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="planner-qa mb-12 space-y-5">
          <h2 className="font-display text-2xl font-bold uppercase text-brand-green">
            Before you WhatsApp
          </h2>
          {planner.qa.map((item) => (
            <div key={item.question}>
              <h3 className="font-bold text-brand-green">{item.question}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-green-light">{item.answer}</p>
            </div>
          ))}
        </section>

        <section className="mb-12 rounded-2xl border border-brand-green/10 bg-white p-5">
          <p className="text-sm text-brand-green-light leading-relaxed">
            Next step: open the{" "}
            <Link href={planner.tourHref} className="font-semibold text-brand-green underline underline-offset-2">
              {planner.tourLabel}
            </Link>{" "}
            or read{" "}
            <Link href={planner.blogHref} className="font-semibold text-brand-green underline underline-offset-2">
              {planner.blogLabel}
            </Link>
            . This page estimates published 2026 IDR. Confirm date, guest count, and the hotel pin on WhatsApp — no payment to inquire.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold uppercase text-brand-green mb-4">
            More planners
          </h2>
          <ul className="space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/planners/${item.slug}`}
                  className="font-semibold text-brand-green hover:text-accent-gold-dark"
                >
                  {item.h1}
                </Link>
                <p className="text-sm text-brand-green-light">{item.job}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/planners" className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark hover:underline">
              All planners
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}
