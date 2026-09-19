"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FAQSection } from "@/components/FAQSection"
import GeoAnswerBlock from "@/components/GeoAnswerBlock"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"
import HomeActivitySearch from "@/components/HomeActivitySearch"
import PromoPrice from "@/components/PromoPrice"
import {
  ArrowRight,
  MapPin,
  Check,
  Clock3,
  Shield,
  Star,
  MessageCircle,
  Bike,
  Compass,
  Zap,
  Users,
  Waves,
  Utensils,
  type LucideIcon,
} from "lucide-react"
import { KnowBeforeCards } from "@/components/KnowBeforeCards"
import {
  atvWhatYouGetItems,
  atvWhatToBringItems,
  atvWhatYouGetFooter,
  atvWhatToBringFooter,
} from "@/data/atvKnowBefore"
import { ADVENTURES, getAdventureChildPrice, type AdventureCatalogItem } from "@/data/adventures"
import { getListPrice, getPromoListPrice, formatTierPriceTable } from "@/lib/pricing"
import {
  DISCOVERY_CATEGORIES,
  getCatalogSection,
  getCatalogTopPicks,
  getFeaturedPackages,
  WHY_SEKAR,
  GUEST_STORIES,
} from "@/data/activityCatalog"
import {
  getTourCategoryLabel,
  type Tour,
  type TourCategoryId,
} from "@/data/tours"
import {
  buildCyclingCookingComboWhatsAppUrl,
  getCyclingCookingCombo,
} from "@/data/cultureSales"
import { FEATURED_COMBOS, getComboListPrice, getComboCompareAtPrice } from "@/lib/combos"

const HERO_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBAv/EACIQAAICAgEEAwEAAAAAAAAAAAECAxEAEiEEMUFhBRMigf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwCL42dFV2mNDlmPm/H9yfqXjmEv12Qw2J93mdK0UV7saq+11iYpM7aPuzc2V1v1mRjjp5qDLNsEZOPzyQTxkpmdWYRjZQoJOvYducYyi//Z"

const ADVENTURE_ICONS: Record<string, LucideIcon> = {
  "single-atv": Zap,
  "tandem-atv": Users,
  rafting: Waves,
  "canyon-tubing": Compass,
  cycling: Bike,
}

const CATEGORY_SECTION_META: {
  id: TourCategoryId
  anchor: string
  eyebrow: string
  title: string
  subtitle: string
}[] = [
  {
    id: "adventure",
    anchor: "adventure",
    eyebrow: "Thrill days",
    title: "Adventure",
    subtitle: "Jungle ATV, river rafting, and canyon tubing — clear gear and insurance notes before you book.",
  },
  {
    id: "food",
    anchor: "food",
    eyebrow: "Taste Bali",
    title: "Food & workshops",
    subtitle: "Tumang Bali Cooking Class (market tour, 10+ dishes) and a calm coffee plantation tasting.",
  },
  {
    id: "village",
    anchor: "village",
    eyebrow: "Slow travel",
    title: "Village & nature",
    subtitle: "Quiet Pejeng ricefield cycling with lunch and free Ubud hotel pickup.",
  },
  {
    id: "day-tour",
    anchor: "day-tours",
    eyebrow: "See more in a day",
    title: "Day tours",
    subtitle: "Private Ubud highlights and Tanah Lot sunset runs with driver included.",
  },
]

type PricingRow = {
  activity: string
  adventureId: string
  pax: string
  price: number
  originalPrice?: number
  highlight: boolean
}

const pricingData: PricingRow[] = [
  {
    activity: "Single ATV",
    adventureId: "single-atv",
    pax: formatTierPriceTable("single-atv"),
    price: getPromoListPrice("single-atv"),
    originalPrice: getListPrice("single-atv"),
    highlight: false,
  },
  {
    activity: "Tandem ATV",
    adventureId: "tandem-atv",
    pax: formatTierPriceTable("tandem-atv"),
    price: getPromoListPrice("tandem-atv"),
    originalPrice: getListPrice("tandem-atv"),
    highlight: true,
  },
  {
    activity: "Whitewater Rafting",
    adventureId: "rafting",
    pax: formatTierPriceTable("rafting"),
    price: getPromoListPrice("rafting"),
    originalPrice: getListPrice("rafting"),
    highlight: false,
  },
  {
    activity: "Canyon Tubing",
    adventureId: "canyon-tubing",
    pax: formatTierPriceTable("canyon-tubing"),
    price: getPromoListPrice("canyon-tubing"),
    originalPrice: getListPrice("canyon-tubing"),
    highlight: false,
  },
  {
    activity: "Ubud Ricefield Cycling Tour",
    adventureId: "cycling",
    pax: `${formatTierPriceTable("cycling")} · Free Ubud pickup · Lunch included`,
    price: getPromoListPrice("cycling"),
    originalPrice: getListPrice("cycling"),
    highlight: false,
  },
]

const travelGuides = [
  {
    title: "Bali ATV Tour Near Ubud (2026)",
    excerpt: "Trails, IDR price table, inclusions, and WhatsApp booking for Single & Tandem ATV.",
    href: "/blog/bali-atv-tour-ubud-guide",
  },
  {
    title: "Cycling & Cooking Class in Ubud",
    excerpt: "Pejeng ricefield cycling plus afternoon Tumang cooking class — prices and itinerary.",
    href: "/blog/cycling-cooking-class-ubud-full-day-itinerary",
  },
  {
    title: "Pejeng vs Tegallalang Cycling",
    excerpt: "Quiet Pejeng Subak lanes vs busy Tegallalang photo terraces.",
    href: "/blog/pejeng-rice-terrace-cycling-vs-tegallalang",
  },
  {
    title: "Ubud Hotel Pickup Explained",
    excerpt: "Which tours include free Ubud pickup and when the hotel pickup charge applies.",
    href: "/blog/ubud-hotel-pickup-bali-adventures-explained",
  },
  {
    title: "Bali ATV for Beginners (2026)",
    excerpt: "First-time ATV at All New Bali Adventure from IDR 750K — briefing, gear, lunch, optional pickup.",
    href: "/blog/bali-atv-for-beginners-first-time-guide",
  },
  {
    title: "How Much Does an ATV Cost in Bali?",
    excerpt: "2026 Single & Tandem IDR prices near Ubud — lunch, gear, insurance, and pickup.",
    href: "/blog/how-much-does-atv-cost-bali-ubud-2026",
  },
] as const

function toTourConfig(adv: AdventureCatalogItem): TourConfig {
  return {
    id: adv.id,
    title: adv.name,
    times: [...adv.times],
    adultPrice: getListPrice(adv.id),
    kidPrice: getAdventureChildPrice(adv.id),
    minPax: adv.minPax,
    freeUbudPickup: adv.freeUbudPickup ?? false,
  }
}

function ExperienceCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group block border-b border-brand-green/12 pb-6 hover:border-accent-gold transition-colors"
    >
      <div className="relative mb-4 aspect-[16/10] overflow-hidden">
        <Image
          src={tour.heroImage.url}
          alt={tour.heroImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-gold-dark mb-2">
        {getTourCategoryLabel(tour.category)}
        {tour.area ? ` · ${tour.area}` : ""}
      </p>
      <h3 className="font-display text-xl md:text-2xl font-bold uppercase text-brand-green leading-tight mb-2 group-hover:text-accent-gold-dark transition-colors">
        {tour.title}
      </h3>
      <p className="text-sm text-brand-green-light leading-relaxed mb-3 line-clamp-2">
        {tour.shortDescription}
      </p>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="inline-flex items-center gap-1.5 text-brand-green-light">
          <Clock3 className="w-3.5 h-3.5" />
          {tour.duration}
        </span>
        <span className="font-bold text-brand-green">
          from IDR {tour.basePrice.toLocaleString("id-ID")}
        </span>
      </div>
    </Link>
  )
}

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [bookingTour, setBookingTour] = useState<TourConfig | null>(null)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [bookingMixIds, setBookingMixIds] = useState<string[]>([])
  const [storyIndex, setStoryIndex] = useState(0)

  const topPicks = getCatalogTopPicks()
  const packages = getFeaturedPackages()
  const cultureCombo = getCyclingCookingCombo()

  const openBooking = (adventureId: string, mixIds: string[] = []) => {
    const adv = ADVENTURES.find((a) => a.id === adventureId)
    if (!adv) return
    setBookingTour(toTourConfig(adv))
    setBookingMixIds(mixIds)
    setBookingOpen(true)
  }

  const openComboBooking = (comboId: string) => {
    const combo = FEATURED_COMBOS.find((c) => c.id === comboId)
    if (!combo) return
    openBooking(combo.primaryId, combo.mixIds)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.08, rootMargin: "80px 0px" }
    )
    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStoryIndex((i) => (i + 1) % GUEST_STORIES.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  const isVisible = (id: string) => visibleSections.has(id)
  const story = GUEST_STORIES[storyIndex]

export default function HomePage() {
  return (
    <>
      <HomepageJsonLd />
      <HomePageClient />
    </>
  )
}
