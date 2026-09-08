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
    subtitle: "Jungle ATV, river rafting, canyon tubing, and dirt bike — clear gear and insurance notes before you book.",
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
    excerpt: "Full-day rice paddy cycling plus evening Balinese cooking class — prices and itinerary.",
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
    title: "Bali Temple Dress Code Guide",
    excerpt: "Sarong, sash, covered shoulders — what temples require on guided stops.",
    href: "/blog/bali-temple-dress-code",
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

  return (
    <main className="w-full flex flex-col bg-sand">
      <BookingPopup
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false)
          setBookingMixIds([])
        }}
        tour={bookingTour}
        initialMixIds={bookingMixIds}
      />

      {/* ═══ HERO ═══ */}
      <section id="top" className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/adventures/hero-banner.jpg"
            alt="Bali travel activities — jungle trails, village paths, and Ubud day experiences"
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            quality={70}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
            className="object-cover object-[center_35%] hero-kenburns"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 flex flex-col items-start justify-end text-left px-6 md:px-12 lg:px-16 pt-36 pb-14 md:pb-20 max-w-5xl">
          <p className="hero-brand text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-5 animate-fade-in-up">
            Sekar Bali Activity
          </p>
          <h1 className="hero-headline font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.92] tracking-tight mb-5 animate-fade-in-up-delay-1">
            Your Bali day,<br />
            <span className="hero-headline-accent">booked clear</span>
          </h1>
          <p className="hero-subcopy text-base md:text-lg max-w-lg mb-7 animate-fade-in-up-delay-2">
            Adventure, village cycling, cooking class, coffee, and private day tours near Ubud — transparent IDR and WhatsApp booking.
          </p>
          <div className="w-full animate-fade-in-up-delay-3 mb-6">
            <HomeActivitySearch />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up-delay-3">
            <Link
              href="#experiences"
              className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full btn-gold-shimmer font-bold text-sm md:text-base uppercase tracking-wider"
            >
              Browse experiences
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full bg-white/12 border border-white/35 text-white font-bold text-sm md:text-base uppercase tracking-wider hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Open booking
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CATEGORY DISCOVERY ═══ */}
      <section id="experiences" data-animate className="bg-ink-soft text-sand py-12 md:py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-8 md:mb-10 ${isVisible("experiences") ? "animate-fade-in-up" : ""}`}>
            <p className="text-accent-amber font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              Travel & activities
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight !text-sand">
              Pick a mood for your Ubud day
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {DISCOVERY_CATEGORIES.map((cat, i) => (
              <Link
                key={cat.id}
                href={cat.href}
                className={`group border border-sand/15 px-5 py-6 hover:border-accent-amber/60 hover:bg-white/5 transition-all ${isVisible("experiences") ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <p className="font-display text-xl uppercase font-bold mb-2 group-hover:text-accent-amber transition-colors">
                  {cat.label}
                </p>
                <p className="text-sm text-sand/70 leading-relaxed mb-4">{cat.blurb}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-amber">
                  Explore <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOP PICKS ═══ */}
      <section id="top-picks" data-animate className="section-atmosphere py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 md:mb-14 max-w-2xl ${isVisible("top-picks") ? "animate-fade-in-up" : ""}`}>
            <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-4">
              Handpicked
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green uppercase leading-tight mb-4">
              Top picks near Ubud
            </h2>
            <p className="text-lg text-brand-green-light">
              A mix of thrills, food, village paths, and private day tours — not a sports-only list.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
            {topPicks.map((tour) => (
              <ExperienceCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DAY PACKAGES ═══ */}
      <section id="packages" data-animate className="bg-white py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-12 ${isVisible("packages") ? "animate-fade-in-up" : ""}`}>
            <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-4">
              Stack your day
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green uppercase leading-tight mb-4">
              Tour packages
            </h2>
            <p className="text-brand-green-light max-w-2xl">
              Same-day combos and private circuits with inclusions spelled out before WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <article
                key={pkg.id}
                className={`border border-brand-green/10 p-6 md:p-8 flex flex-col ${isVisible("packages") ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-2">
                  {pkg.tagline}
                </p>
                <h3 className="font-display text-2xl font-bold uppercase text-brand-green mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-brand-green-light leading-relaxed mb-4 flex-1">
                  {pkg.description}
                </p>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-green-light mb-1">
                      {pkg.duration} · from
                    </p>
                    <p className="text-2xl font-bold text-brand-green">
                      IDR {pkg.priceFrom.toLocaleString("id-ID")}
                    </p>
                  </div>
                  {pkg.kind === "combo" ? (
                    <button
                      type="button"
                      onClick={() => openComboBooking(pkg.id)}
                      className="shrink-0 h-11 px-5 bg-brand-green text-sand text-sm font-bold uppercase tracking-wider hover:bg-ink-soft transition-colors"
                    >
                      Book package
                    </button>
                  ) : (
                    <Link
                      href={pkg.href}
                      className="shrink-0 inline-flex items-center h-11 px-5 bg-brand-green text-sand text-sm font-bold uppercase tracking-wider hover:bg-ink-soft transition-colors"
                    >
                      View details
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CATEGORY SECTIONS ═══ */}
      {CATEGORY_SECTION_META.map((section) => {
        const items = getCatalogSection(section.id)
        if (items.length === 0) return null
        return (
          <section
            key={section.id}
            id={section.anchor}
            data-animate
            className="py-16 md:py-24 px-6 lg:px-12 border-t border-brand-green/8"
          >
            <div className="max-w-7xl mx-auto">
              <div className={`mb-10 max-w-2xl ${isVisible(section.anchor) ? "animate-fade-in-up" : ""}`}>
                <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-3">
                  {section.eyebrow}
                </p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-green uppercase leading-tight mb-3">
                  {section.title}
                </h2>
                <p className="text-brand-green-light">{section.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {items.map((tour) => (
                  <ExperienceCard key={tour.id} tour={tour} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ═══ QUICK BOOK ADVENTURES (WhatsApp-ready SKUs) ═══ */}
      <section id="adventures" data-animate className="section-atmosphere py-20 md:py-28 px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 ${isVisible("adventures") ? "animate-fade-in-up" : ""}`}>
            <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-4">
              Instant WhatsApp booking
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green uppercase leading-tight mb-4">
              Core activity packages
            </h2>
            <p className="text-lg text-brand-green-light max-w-2xl mx-auto">
              ATV, river days, and ricefield cycling with tier pricing — book in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ADVENTURES.map((adv, i) => {
              const IconComponent = ADVENTURE_ICONS[adv.id] ?? Compass
              const price = getPromoListPrice(adv.id)
              const original = getListPrice(adv.id)
              return (
                <article
                  key={adv.id}
                  className={`adventure-card bg-white overflow-hidden relative group border border-brand-green/8 ${isVisible("adventures") ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <Image
                      src={adv.image}
                      alt={adv.imageAlt}
                      width={800}
                      height={512}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="adventure-card-image w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <PromoPrice price={price} originalPrice={original} variant="badge" from />
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sand text-sm font-medium">
                      <Clock3 className="w-4 h-4" />
                      <span>{adv.duration}</span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-accent-gold text-white flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-brand-green font-display uppercase mb-1">
                      {adv.name}
                    </h3>
                    <span className="text-sm text-brand-green-light font-medium">
                      {adv.tagline} · {adv.paxLabel}
                    </span>
                    <p className="text-brand-green-light text-sm leading-relaxed mt-4 mb-6">
                      {adv.description}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                      {adv.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green">
                          <Check className="w-3.5 h-3.5 text-accent-gold" />
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/tours/${adv.tourSlug}`}
                        className="w-full flex items-center justify-center gap-2 h-12 border-2 border-brand-green/15 text-brand-green font-bold text-sm uppercase tracking-wider hover:border-brand-green/30 hover:bg-sand transition-colors"
                      >
                        View Details
                      </Link>
                      <button
                        type="button"
                        onClick={() => openBooking(adv.id)}
                        className="w-full flex items-center justify-center gap-2 h-12 bg-brand-green text-sand font-bold text-sm uppercase tracking-wider hover:bg-ink-soft transition-colors"
                      >
                        Book now <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <article className="mt-8 border border-accent-gold/30 bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark inline-flex items-center gap-2">
                <Utensils className="w-3.5 h-3.5" />
                {cultureCombo.tagline}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-green uppercase">
                {cultureCombo.name}
              </h3>
              <p className="text-sm text-brand-green-light leading-relaxed max-w-2xl">
                {cultureCombo.description}
              </p>
            </div>
            <div className="shrink-0 space-y-3 md:text-right">
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-green-light mb-1">From (both)</p>
                <p className="text-2xl font-bold text-brand-green">
                  IDR {cultureCombo.totalFromIdr.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="flex flex-wrap md:justify-end gap-2">
                <a
                  href={buildCyclingCookingComboWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-green text-sand px-5 py-3 text-sm font-bold uppercase tracking-wider hover:bg-brand-green-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book culture day
                </a>
                <Link
                  href="/book?activity=combo-cycling-cooking"
                  className="inline-flex items-center gap-1 border border-brand-green/20 px-5 py-3 text-sm font-semibold text-brand-green hover:bg-brand-green/5 transition-colors"
                >
                  Sales page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ═══ KNOW BEFORE YOU GO ═══ */}
      <section id="know-before-you-go" className="py-20 md:py-28 px-6 lg:px-12 bg-ink-soft w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent-amber font-semibold tracking-[0.15em] uppercase text-sm mb-4">
              ATV &amp; river days
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold !text-sand uppercase leading-tight mb-4">
              Know Before You Go
            </h2>
            <p className="text-lg text-sand/90 max-w-2xl mx-auto">
              Complete quad bike trips at All New Bali Adventure — with optional tubing on the Wos River after the track.
            </p>
          </div>
          <KnowBeforeCards
            whatYouGet={atvWhatYouGetItems}
            whatToBring={atvWhatToBringItems}
            whatYouGetFooter={atvWhatYouGetFooter}
            whatToBringFooter={atvWhatToBringFooter}
            variant="dark"
          />
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" data-animate className="py-20 md:py-28 px-6 lg:px-12 bg-white w-full">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${isVisible("pricing") ? "animate-fade-in-up" : ""}`}>
            <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-4">
              Transparent pricing
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green uppercase leading-tight mb-4">
              Activity pricing
            </h2>
            <p className="text-lg text-brand-green-light max-w-xl mx-auto">
              Tier pricing for 2+ and 3+ guests. Optional pickup IDR 400K. Free Ubud pickup on cycling only.
            </p>
          </div>
          <div className={`space-y-3 ${isVisible("pricing") ? "animate-fade-in-up-delay-1" : ""}`}>
            {pricingData.map((item) => (
              <div
                key={item.adventureId}
                className={`pricing-row relative flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 border ${item.highlight ? "border-accent-gold bg-accent-gold/5" : "border-brand-green/10 bg-sand/40"}`}
              >
                {item.highlight && (
                  <span className="absolute -top-3 left-6 bg-accent-gold text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-brand-green font-display uppercase">
                      {item.activity}
                    </h3>
                    <span className="text-sm text-brand-green-light block mt-1">{item.pax}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <PromoPrice
                    price={item.price}
                    originalPrice={item.originalPrice ?? item.price}
                    variant="inline"
                    from
                  />
                  <button
                    type="button"
                    onClick={() => openBooking(item.adventureId)}
                    className="hidden sm:inline-flex items-center h-10 px-6 bg-brand-green text-sand text-sm font-bold uppercase tracking-wider hover:bg-ink-soft transition-colors"
                  >
                    Book
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => openBooking(item.adventureId)}
                  className="sm:hidden w-full flex items-center justify-center h-11 bg-brand-green text-sand text-sm font-bold uppercase tracking-wider"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 h-12 px-8 border-2 border-brand-green/20 text-brand-green font-bold text-sm uppercase tracking-wider hover:bg-brand-green hover:text-sand transition-colors"
            >
              Open full sales &amp; checkout page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ MIX COMBOS ═══ */}
      <section id="combos" data-animate className="bg-sand py-20 md:py-28 px-6 lg:px-12 w-full">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-14 ${isVisible("combos") ? "animate-fade-in-up" : ""}`}>
            <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-4">
              Mix &amp; match
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green uppercase leading-tight">
              Combine land &amp; water
            </h2>
            <p className="mt-4 text-brand-green-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Same-day ATV + tubing or tubing + rafting saves 10–12% versus booking separately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {FEATURED_COMBOS.map((combo, i) => {
              const price = getComboListPrice(combo)
              const compareAt = getComboCompareAtPrice(combo)
              return (
                <article
                  key={combo.id}
                  className={`bg-white border border-brand-green/10 overflow-hidden ${isVisible("combos") ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-2">
                      {combo.tagline}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-brand-green uppercase mb-2">
                      {combo.name}
                    </h3>
                    <p className="text-sm text-brand-green-light leading-relaxed mb-4 flex-1">
                      {combo.description}
                    </p>
                    <div className="flex items-end justify-between gap-4 mt-auto">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-brand-green-light mb-1">From</p>
                        {compareAt > price ? (
                          <div>
                            <span className="text-sm line-through text-brand-green-light/70 mr-2">
                              IDR {compareAt.toLocaleString("id-ID")}
                            </span>
                            <span className="text-2xl font-bold text-brand-green">
                              IDR {price.toLocaleString("id-ID")}
                            </span>
                          </div>
                        ) : (
                          <span className="text-2xl font-bold text-brand-green">
                            IDR {price.toLocaleString("id-ID")}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => openComboBooking(combo.id)}
                        className="shrink-0 bg-brand-green text-sand px-5 py-3 text-sm font-bold uppercase tracking-wider hover:bg-brand-green-light transition-colors"
                      >
                        Book combo
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section id="why-us" data-animate className="section-atmosphere py-20 md:py-28 px-6 lg:px-12 w-full">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible("why-us") ? "animate-fade-in-up" : ""}`}>
            <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-4">
              Why book with Sekar
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green uppercase leading-tight">
              Book the fun part.<br />
              <span className="text-accent-gold-dark">We keep the details clear.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {WHY_SEKAR.map((item, i) => (
              <div
                key={item.title}
                className={isVisible("why-us") ? "animate-fade-in-up" : ""}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent-gold/12 flex items-center justify-center mb-5">
                  {i === 0 ? (
                    <Compass className="w-6 h-6 text-accent-gold-dark" />
                  ) : i === 1 ? (
                    <Shield className="w-6 h-6 text-accent-gold-dark" />
                  ) : (
                    <MapPin className="w-6 h-6 text-accent-gold-dark" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-3 font-display uppercase">
                  {item.title}
                </h3>
                <p className="text-brand-green-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STORIES ═══ */}
      <section className="bg-ink-soft py-20 md:py-24 px-6 lg:px-12 w-full">
        <div className="max-w-4xl mx-auto text-center text-sand">
          <p className="text-accent-amber font-semibold tracking-[0.15em] uppercase text-sm mb-6">
            Guest stories
          </p>
          <span className="text-6xl font-display leading-none block mb-4 opacity-30 text-accent-amber">
            &ldquo;
          </span>
          <blockquote
            key={story.name}
            className="text-2xl md:text-3xl lg:text-4xl font-display leading-relaxed mb-6 animate-fade-in-up"
          >
            {story.quote}
          </blockquote>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent-amber fill-accent-amber" />
            ))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-70">
            — {story.name} · {story.source}
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            {GUEST_STORIES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show review ${i + 1}`}
                onClick={() => setStoryIndex(i)}
                className={`h-2 rounded-full transition-all ${i === storyIndex ? "w-8 bg-accent-amber" : "w-2 bg-sand/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GUIDES ═══ */}
      <section id="guides" className="py-16 md:py-20 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Plan your trip
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-green uppercase leading-tight mb-4">
            Bali travel guides
          </h2>
          <p className="text-brand-green-light max-w-2xl mx-auto">
            Practical guides on pricing, pickup rules, and which experience fits your day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {travelGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group border-b border-brand-green/15 pb-5 hover:border-accent-gold transition-colors"
            >
              <h3 className="font-bold text-brand-green mb-2 leading-snug group-hover:text-accent-gold-dark transition-colors font-display uppercase text-lg">
                {guide.title}
              </h3>
              <p className="text-sm text-brand-green-light leading-relaxed mb-4">{guide.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky uppercase tracking-wider">
                Read guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <GeoAnswerBlock />
      <FAQSection />

      {/* ═══ CONTACT CTA ═══ */}
      <section id="contact" data-animate className="relative py-24 md:py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cooking/stovetop-class.jpg"
            alt="Guests cooking Balinese dishes in a hands-on class"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink-soft/88" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-sand">
          <p className="text-accent-amber font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            No payment to inquire
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-6 !text-white">
            Message WhatsApp.<br />
            <span className="text-accent-amber">Confirm your date</span>
            <br />
            in minutes.
          </h2>
          <p className="text-lg opacity-80 max-w-xl mx-auto mb-10">
            Send your date, guest count, and activity. We reply with availability and the exact IDR total — including pickup if you need it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-3 h-14 md:h-16 px-10 rounded-full btn-gold-shimmer font-bold text-lg uppercase tracking-wider w-full sm:w-auto"
            >
              Start booking
            </Link>
            <button
              type="button"
              onClick={() => openBooking("single-atv")}
              className="inline-flex items-center justify-center gap-3 h-14 md:h-16 px-10 rounded-full border-2 border-sand/30 text-sand font-bold text-lg uppercase tracking-wider hover:bg-sand/10 transition-colors w-full sm:w-auto"
            >
              WhatsApp ATV from IDR 750K
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-sand/70 font-medium">
            <Check className="w-4 h-4" />
            Free cancellation up to 24 hours · No payment to inquire
          </div>
        </div>
      </section>
    </main>
  )
}
