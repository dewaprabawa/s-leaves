import type { Metadata } from "next"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import AntiScamSection from "@/components/AntiScamSection"
import BookSalesCheckout from "@/components/BookSalesCheckout"
import { ADVENTURES, getAdventureListPrice } from "@/data/adventures"
import {
  COOKING_CLASS_SALES,
  MELUKAT_SALES,
  getCyclingCookingCombo,
  getSwingCookingCombo,
} from "@/data/cultureSales"
import { GRIYA_BEJI_SALES } from "@/data/griyaBeji"
import { CONTACT_WHATSAPP_URL } from "@/lib/contact"
import { SITE_NAME, SITE_URL } from "@/lib/seo"
import { BOOK_PAGE_KEYWORDS } from "@/data/activityKeywords"
import { formatIdr } from "@/lib/whatsapp"

type Props = {
  searchParams: Promise<{ activity?: string }>
}

const cultureCombo = getCyclingCookingCombo()
const swingCookingCombo = getSwingCookingCombo()
const minAdventurePrice = Math.min(
  ...ADVENTURES.map((a) => getAdventureListPrice(a.id)),
  COOKING_CLASS_SALES.priceIdr,
)

export const metadata: Metadata = {
  title: "Book Jeep, Cooking & ATV",
  description:
    "WhatsApp checkout for private Mount Batur jeep, Tumang cooking, Pejeng cycling, ATV, rafting, Swing Heaven + cooking, and Griya Beji near Ubud. Clear IDR from " +
    formatIdr(minAdventurePrice) +
    " — no payment to inquire.",
  keywords: BOOK_PAGE_KEYWORDS,
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book Jeep, Cooking & ATV | Sekar Bali Activity",
    description:
      "Choose a private Batur jeep, Tumang cooking class, Pejeng cycling, ATV, rafting, Swing Heaven + cooking, or Griya Beji. WhatsApp booking with the IDR total included.",
    url: `${SITE_URL}/book`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/images/adventures/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Jeep, Cooking & ATV | Sekar Bali Activity",
    description:
      "WhatsApp checkout for jeep, cooking, cycling, ATV, rafting & Swing Heaven near Ubud. Clear IDR — no payment to inquire.",
    images: ["/images/adventures/og-cover.jpg"],
  },
}

export default async function BookPage({ searchParams }: Props) {
  const { activity } = await searchParams
  const initialActivityId =
    activity && ADVENTURES.some((a) => a.id === activity) ? activity : undefined
  const highlightCooking = activity === COOKING_CLASS_SALES.id
  const highlightCultureCombo = activity === cultureCombo.id
  const highlightSwingCookingCombo = activity === swingCookingCombo.id
  const highlightMelukat = activity === MELUKAT_SALES.id
  const highlightGriya = activity === GRIYA_BEJI_SALES.id

  const jumpLinks = [
    { id: "combos", label: "Adventure combos" },
    { id: cultureCombo.id, label: "Cycling + cooking" },
    { id: swingCookingCombo.id, label: "Swing + cooking" },
    ...ADVENTURES.map((adv) => ({
      id: adv.id,
      label: adv.name.replace(" Tour", ""),
    })),
    { id: COOKING_CLASS_SALES.id, label: COOKING_CLASS_SALES.shortName },
    { id: MELUKAT_SALES.id, label: MELUKAT_SALES.shortName },
    { id: GRIYA_BEJI_SALES.id, label: GRIYA_BEJI_SALES.shortName },
  ]

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Book Bali Adventures — Sekar Bali Activity",
    description:
      "Bookable adventure and culture activities near Ubud with WhatsApp checkout — private Mount Batur jeep, ATV, rafting, tubing, Swing Heaven, ricefield cycling, Tumang cooking class, Tirta Empu melukat, Griya Beji Waterfall, and combos.",
    numberOfItems: ADVENTURES.length + 5,
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
      {
        "@type": "ListItem",
        position: 2,
        name: swingCookingCombo.name,
        url: `${SITE_URL}/book?activity=${swingCookingCombo.id}`,
        item: {
          "@type": "TouristTrip",
          name: swingCookingCombo.name,
          description: swingCookingCombo.description,
          offers: {
            "@type": "Offer",
            price: swingCookingCombo.totalFromIdr,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/book?activity=${swingCookingCombo.id}`,
          },
        },
      },
      ...ADVENTURES.map((adv, index) => ({
        "@type": "ListItem",
        position: index + 3,
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
        position: ADVENTURES.length + 3,
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
      {
        "@type": "ListItem",
        position: ADVENTURES.length + 4,
        name: MELUKAT_SALES.name,
        url: `${SITE_URL}/book?activity=${MELUKAT_SALES.id}`,
        item: {
          "@type": "TouristTrip",
          name: MELUKAT_SALES.name,
          description: MELUKAT_SALES.description,
          image: `${SITE_URL}${MELUKAT_SALES.image}`,
          offers: {
            "@type": "Offer",
            price: MELUKAT_SALES.priceIdr,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/book?activity=${MELUKAT_SALES.id}`,
          },
        },
      },
      {
        "@type": "ListItem",
        position: ADVENTURES.length + 5,
        name: GRIYA_BEJI_SALES.name,
        url: `${SITE_URL}/book?activity=${GRIYA_BEJI_SALES.id}`,
        item: {
          "@type": "TouristTrip",
          name: GRIYA_BEJI_SALES.name,
          description: GRIYA_BEJI_SALES.description,
          image: `${SITE_URL}${GRIYA_BEJI_SALES.image}`,
          offers: {
            "@type": "Offer",
            price: GRIYA_BEJI_SALES.priceIdr,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/book?activity=${GRIYA_BEJI_SALES.id}`,
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
            Book jeep, cooking, ATV &amp; cycling near Ubud
          </h1>
          <p className="text-base md:text-lg text-brand-green-light leading-relaxed">
            Private Mount Batur jeep, Tumang cooking class, Pejeng cycling, ATV, rafting,
            canyon tubing, Swing Heaven, or Griya Beji waterfall — then send guests, date,
            pickup, and price to WhatsApp. Combos include ATV + tubing, cycling + cooking, and
            swing + cooking. Starting from {formatIdr(minAdventurePrice)}.
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
              (link.id === cultureCombo.id && highlightCultureCombo) ||
              (link.id === swingCookingCombo.id && highlightSwingCookingCombo) ||
              (link.id === MELUKAT_SALES.id && highlightMelukat) ||
              (link.id === GRIYA_BEJI_SALES.id && highlightGriya)
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
          highlightSwingCookingCombo={highlightSwingCookingCombo}
          highlightMelukat={highlightMelukat}
          highlightGriya={highlightGriya}
        />

        <AntiScamSection compact />

        <section className="mt-16 md:mt-20 rounded-3xl bg-brand-green text-sand p-8 md:p-12 text-center space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Not sure which activity?</h2>
          <p className="text-sand/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Message us with your dates, hotel, and group size — we&apos;ll recommend ATV, rafting,
            tubing, cycling, cooking, Tirta Empu melukat, Griya Beji waterfall, or a combo that fits
            your day.
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
