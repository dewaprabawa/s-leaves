import type { Metadata } from "next"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import BookSalesCheckout from "@/components/BookSalesCheckout"
import { ADVENTURES, getAdventureListPrice } from "@/data/adventures"
import {
  COOKING_CLASS_SALES,
  getCyclingCookingCombo,
} from "@/data/cultureSales"
import { CONTACT_WHATSAPP_URL } from "@/lib/contact"
import { SITE_NAME, SITE_URL } from "@/lib/seo"
import { formatIdr } from "@/lib/whatsapp"

type Props = {
  searchParams: Promise<{ activity?: string }>
}

const cultureCombo = getCyclingCookingCombo()
const minAdventurePrice = Math.min(
  ...ADVENTURES.map((a) => getAdventureListPrice(a.id)),
  COOKING_CLASS_SALES.priceIdr,
)

export const metadata: Metadata = {
  title: "Book ATV, Cycling & Tumang Cooking",
  description:
    "Book private ATV, rafting, tubing, ricefield cycling & Tumang Bali Cooking Class near Ubud. Clear IDR prices from " +
    formatIdr(minAdventurePrice) +
    ". WhatsApp checkout — free to inquire.",
  keywords: [
    "book ATV Ubud",
    "private ATV tour Bali",
    "ATV river tubing combo",
    "cycling cooking class Ubud",
    "Tumang Bali Cooking Class",
    "Balinese cooking class Ubud",
    "Ubud ricefield cycling tour",
    "book Bali adventure WhatsApp",
    "all-inclusive ATV Bali",
  ],
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book ATV, Cycling & Tumang Cooking | Sekar Bali Activity",
    description:
      "Choose ATV, rafting, canyon tubing, ricefield cycling, or Tumang Bali Cooking Class — plus cycling + cooking culture day. WhatsApp booking with price included.",
    url: `${SITE_URL}/book`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/images/adventures/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book ATV, Cycling & Tumang Cooking | Sekar Bali Activity",
    description:
      "Sales checkout for ATV, rafting, tubing, cycling & Tumang cooking near Ubud. Clear IDR · WhatsApp.",
    images: ["/images/adventures/og-cover.jpg"],
  },
}

export default async function BookPage({ searchParams }: Props) {
  const { activity } = await searchParams
  const initialActivityId =
    activity && ADVENTURES.some((a) => a.id === activity) ? activity : undefined
  const highlightCooking = activity === COOKING_CLASS_SALES.id
  const highlightCultureCombo = activity === cultureCombo.id

  const jumpLinks = [
    { id: "combos", label: "Adventure combos" },
    { id: cultureCombo.id, label: "Cycling + cooking" },
    ...ADVENTURES.map((adv) => ({
      id: adv.id,
      label: adv.name.replace(" Tour", ""),
    })),
    { id: COOKING_CLASS_SALES.id, label: COOKING_CLASS_SALES.shortName },
  ]

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Book Bali Adventures — Sekar Bali Activity",
    description:
      "Bookable adventure and culture activities near Ubud with WhatsApp checkout — ATV, rafting, tubing, ricefield cycling, Balinese cooking class, and combos.",
    numberOfItems: ADVENTURES.length + 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: cultureCombo.name,
        url: `${SITE_URL}/book?activity=${cultureCombo.id}`,
        item: {
          "@type": "TouristTrip",
          name: cultureCombo.name,
          description: cultureCombo.description,
          offers: {
            "@type": "Offer",
            price: cultureCombo.totalFromIdr,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/book?activity=${cultureCombo.id}`,
          },
        },
      },
      ...ADVENTURES.map((adv, index) => ({
        "@type": "ListItem",
        position: index + 2,
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
      {
        "@type": "ListItem",
        position: ADVENTURES.length + 2,
        name: COOKING_CLASS_SALES.name,
        url: `${SITE_URL}/book?activity=${COOKING_CLASS_SALES.id}`,
        item: {
          "@type": "TouristTrip",
          name: COOKING_CLASS_SALES.name,
          description: COOKING_CLASS_SALES.description,
          image: `${SITE_URL}${COOKING_CLASS_SALES.image}`,
          offers: {
            "@type": "Offer",
            price: COOKING_CLASS_SALES.priceIdr,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/book?activity=${COOKING_CLASS_SALES.id}`,
          },
        },
      },
    ],
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
            Book ATV, cycling &amp; cooking near Ubud
          </h1>
          <p className="text-base md:text-lg text-brand-green-light leading-relaxed">
            Private / small-group ATV, rafting, canyon tubing, Pejeng ricefield cycling, or a
            Balinese cooking class — then send guests, date, pickup, and price to WhatsApp. Combos
            include ATV + tubing and cycling + cooking. Starting from {formatIdr(minAdventurePrice)}.
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

        <nav
          aria-label="Jump to activity"
          className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-brand-green/10"
        >
          {jumpLinks.map((link) => {
            const isActive =
              link.id === initialActivityId ||
              (link.id === COOKING_CLASS_SALES.id && highlightCooking) ||
              (link.id === cultureCombo.id && highlightCultureCombo)
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-full transition-colors ${
                  isActive
                    ? "bg-brand-green text-sand"
                    : "bg-brand-green/8 text-brand-green hover:bg-brand-green/15"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <BookSalesCheckout
          initialActivityId={initialActivityId}
          highlightCooking={highlightCooking}
          highlightCultureCombo={highlightCultureCombo}
        />

        <section className="mt-16 md:mt-20 rounded-3xl bg-brand-green text-sand p-8 md:p-12 text-center space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Not sure which activity?</h2>
          <p className="text-sand/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Message us with your dates, hotel, and group size — we&apos;ll recommend ATV, rafting,
            tubing, cycling, cooking, or a combo that fits your day.
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
