import type { Metadata } from "next"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import BookSalesCheckout from "@/components/BookSalesCheckout"
import { ADVENTURES, getAdventureListPrice } from "@/data/adventures"
import { CONTACT_WHATSAPP_URL } from "@/lib/contact"
import { SITE_NAME, SITE_URL } from "@/lib/seo"
import { formatIdr } from "@/lib/whatsapp"

type Props = {
  searchParams: Promise<{ activity?: string }>
}

export const metadata: Metadata = {
  title: "Book Bali Adventures",
  description:
    "Book all Sekar Bali Activity adventures in one place — Single & Tandem ATV, whitewater rafting, canyon tubing, and Ubud ricefield cycling. Transparent IDR prices, WhatsApp checkout, free to inquire.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book Bali Adventures | Sekar Bali Activity",
    description:
      "Choose ATV, rafting, canyon tubing, or ricefield cycling — then book via WhatsApp with your price included.",
    url: `${SITE_URL}/book`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/images/adventures/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Bali Adventures | Sekar Bali Activity",
    description: "Checkout for ATV, rafting, tubing & cycling near Ubud. WhatsApp booking.",
    images: ["/images/adventures/og-cover.jpg"],
  },
}

export default async function BookPage({ searchParams }: Props) {
  const { activity } = await searchParams
  const initialActivityId =
    activity && ADVENTURES.some((a) => a.id === activity) ? activity : undefined

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Book Bali Adventures — Sekar Bali Activity",
    description: "All bookable adventure activities near Ubud with WhatsApp checkout.",
    numberOfItems: ADVENTURES.length,
    itemListElement: ADVENTURES.map((adv, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: adv.name,
      url: `${SITE_URL}/book?activity=${adv.id}`,
      item: {
        "@type": "TouristTrip",
        name: adv.name,
        description: adv.description,
        image: `${SITE_URL}${adv.image}`,
        offers: {
          "@type": "Offer",
          price: getAdventureListPrice(adv.id),
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/book?activity=${adv.id}`,
        },
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Book", item: `${SITE_URL}/book` },
    ],
  }

  return (
    <main className="w-full bg-sand pt-32 pb-24 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="max-w-3xl mb-12 md:mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold-dark">
            Sales &amp; checkout
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-green tracking-tight">
            Book your Bali adventure
          </h1>
          <p className="text-base md:text-lg text-brand-green-light leading-relaxed">
            Choose any activity below — ATV, rafting, canyon tubing, or ricefield cycling — then
            send your booking to WhatsApp with guests, date, pickup, and price included. Starting
            from {formatIdr(Math.min(...ADVENTURES.map((a) => getAdventureListPrice(a.id))))}.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-brand-green/20 text-brand-green font-semibold text-sm hover:bg-brand-green/5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="/#pricing"
              className="inline-flex items-center h-11 px-5 rounded-full text-brand-green-light font-medium text-sm hover:text-brand-green transition-colors"
            >
              View full price table
            </Link>
          </div>
        </header>

        {/* Quick jump chips — interaction container, not hero clutter */}
        <nav
          aria-label="Jump to activity"
          className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-brand-green/10"
        >
          {ADVENTURES.map((adv) => (
            <a
              key={adv.id}
              href={`#${adv.id}`}
              className={`text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-full transition-colors ${
                adv.id === initialActivityId
                  ? "bg-brand-green text-sand"
                  : "bg-brand-green/8 text-brand-green hover:bg-brand-green/15"
              }`}
            >
              {adv.name.replace(" Tour", "")}
            </a>
          ))}
        </nav>

        <BookSalesCheckout initialActivityId={initialActivityId} />

        <section className="mt-16 md:mt-20 rounded-3xl bg-brand-green text-sand p-8 md:p-12 text-center space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Not sure which activity?</h2>
          <p className="text-sand/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Message us with your dates, hotel, and group size — we&apos;ll recommend ATV, rafting,
            tubing, cycling, or a combo that fits your day.
          </p>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full btn-gold-shimmer text-brand-green font-bold text-sm uppercase tracking-wider"
          >
            Get a free recommendation
          </a>
        </section>
      </div>
    </main>
  )
}
