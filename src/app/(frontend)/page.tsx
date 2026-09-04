"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FAQSection } from '@/components/FAQSection'
import GeoAnswerBlock from '@/components/GeoAnswerBlock'
import { BookingPopup, type TourConfig } from '@/components/BookingPopup'
import PromoPrice from '@/components/PromoPrice'
import { getListPrice, getPromoListPrice, formatTierPriceTable } from '@/lib/pricing'
import {
  ArrowRight, MapPin, Users, Check, Clock3, Shield,
  Star, Waves,
  Bike, Compass, Zap, type LucideIcon
} from 'lucide-react'
import { KnowBeforeCards } from '@/components/KnowBeforeCards'
import {
  atvWhatYouGetItems,
  atvWhatToBringItems,
  atvWhatYouGetFooter,
  atvWhatToBringFooter,
} from '@/data/atvKnowBefore'

/** Tiny LQIP for the hero — keeps LCP fast while the optimized image loads */
const HERO_BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBAv/EACIQAAICAgEEAwEAAAAAAAAAAAECAxEAEiEEMUFhBRMigf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwCL42dFV2mNDlmPm/H9yfqXjmEv12Qw2J93mdK0UV7saq+11iYpM7aPuzc2V1v1mRjjp5qDLNsEZOPzyQTxkpmdWYRjZQoJOvYducYyi//Z'

const DEFAULT_TIMES = ["08:00", "09:00", "10:00", "13:00", "14:00"]

type Adventure = {
  id: string
  name: string
  tagline: string
  pax: string
  price: number
  originalPrice?: number
  childPrice?: number | null
  image: string
  description: string
  highlights: string[]
  duration: string
  icon: LucideIcon
  minPax: number
  times: string[]
  tourSlug?: string
}

type PricingRow = {
  activity: string
  adventureId: string
  pax: string
  price: number
  originalPrice?: number
  highlight: boolean
}

/* ─── Adventure Data ─── */
const adventures: Adventure[] = [
  {
    id: "single-atv",
    name: "Single ATV Ride",
    tagline: "Solo jungle thrill",
    pax: "1 Pax",
    price: getPromoListPrice("single-atv"),
    originalPrice: getListPrice("single-atv"),
    childPrice: 550000,
    image: "/images/adventures/atv-adventure.jpg",
    description: "Beginner-friendly jungle quad ride at All New Bali Adventure — muddy tracks, river crossings, lunch, helmet & insurance included. Optional Wos River tubing or rafting combo after the track.",
    highlights: ["Solo ride freedom", "Boot shoes & helmet", "Simple lunch included", "Insurance included"],
    duration: "2 hours",
    icon: Zap,
    minPax: 1,
    times: DEFAULT_TIMES,
    tourSlug: "bali-atv-adventure",
  },
  {
    id: "tandem-atv",
    name: "Tandem ATV Ride",
    tagline: "Share the adventure",
    pax: "2 Pax",
    price: getPromoListPrice("tandem-atv"),
    originalPrice: getListPrice("tandem-atv"),
    childPrice: null as number | null,
    image: "/images/adventures/atv-adventure.jpg",
    description: "Share a tandem quad bike with a partner through jungle trails at All New Bali Adventure. Lunch, safety gear, and optional Wos River tubing included.",
    highlights: ["Ride together", "Boot shoes & helmet", "Simple lunch included", "Insurance included"],
    duration: "2 hours",
    icon: Users,
    minPax: 2,
    times: DEFAULT_TIMES,
    tourSlug: "bali-atv-adventure",
  },
  {
    id: "rafting",
    name: "Whitewater Rafting",
    tagline: "Ride the rapids",
    pax: "Per Person",
    price: getPromoListPrice("rafting"),
    originalPrice: getListPrice("rafting"),
    childPrice: 350000,
    image: "/images/adventures/rafting.jpg",
    description: "Navigate Class II-III rapids through a stunning river canyon surrounded by towering jungle cliffs, waterfalls, and ancient stone carvings.",
    highlights: ["Class II-III rapids", "Canyon scenery", "Lunch included", "Professional crew"],
    duration: "3 hours",
    icon: Waves,
    minPax: 2,
    times: ["08:30", "11:00", "14:00"],
    tourSlug: "whitewater-rafting",
  },
  {
    id: "canyon-tubing",
    name: "Canyon Tubing",
    tagline: "Float through paradise",
    pax: "Per Person",
    price: getPromoListPrice("canyon-tubing"),
    originalPrice: getListPrice("canyon-tubing"),
    childPrice: 300000,
    image: "/images/adventures/canyon-tubing.jpg",
    description: "Drift through hidden canyons on an inflatable tube. Crystal-clear waters, moss-covered walls, and shafts of sunlight create a magical underground world. Pair it with an ATV ride for the ultimate combo.",
    highlights: ["Hidden canyons", "Crystal-clear water", "Life jacket provided", "Nature guide"],
    duration: "2.5 hours",
    icon: Compass,
    minPax: 1,
    times: DEFAULT_TIMES,
    tourSlug: "canyon-tubing",
  },
  {
    id: "cycling",
    name: "Ubud Ricefield & Village Cycling Tour",
    tagline: "Rice paddies & village life",
    pax: "Per Person",
    price: getPromoListPrice("cycling"),
    originalPrice: getListPrice("cycling"),
    childPrice: null as number | null,
    image: "/images/adventures/cycling.jpg",
    description: "Quiet Pejeng rice-paddy paths with rice harvesting, a Balinese home visit, wood carving studio, and lunch included.",
    highlights: ["Rice paddy & countryside cycling", "Lunch included", "Balinese house & carving studio", "Free Ubud hotel pickup & insurance"],
    duration: "Full day",
    icon: Bike,
    minPax: 1,
    times: ["13:30"],
    tourSlug: "ubud-ricefield-cycling-tour",
  },
]

function toTourConfig(adv: Adventure): TourConfig {
  return {
    id: adv.id,
    title: adv.name,
    times: [...adv.times],
    adultPrice: getListPrice(adv.id),
    kidPrice: "childPrice" in adv ? adv.childPrice : null,
    minPax: adv.minPax,
    freeUbudPickup: adv.id === "cycling",
  }
}

const stats = [
  { value: "5", label: "Sport Activities" },
  { value: "100+", label: "Happy Travelers" },
  { value: "5★", label: "Rated Experience" },
  { value: "24/7", label: "WhatsApp Support" },
]

const travelGuides = [
  {
    title: "How Much Does an ATV Cost in Bali?",
    excerpt: "2026 Single & Tandem IDR prices near Ubud — lunch, gear, insurance, and pickup fees explained.",
    href: "/blog/how-much-does-atv-cost-bali-ubud-2026",
  },
  {
    title: "Is an Ubud Cycling Tour Worth It?",
    excerpt: "Honest pros and cons of Pejeng ricefield cycling vs Tegallalang crowds — IDR 450K with free pickup.",
    href: "/blog/is-ubud-cycling-tour-worth-it",
  },
  {
    title: "Private ATV vs Mass-Market Tours",
    excerpt: "What changes when you book small-group ATV at All New Bali Adventure with WhatsApp clarity.",
    href: "/blog/private-atv-vs-mass-market-ubud",
  },
  {
    title: "Cycling & Cooking Class in Ubud",
    excerpt: "Full-day rice paddy cycling plus evening Balinese cooking class — prices and itinerary.",
    href: "/blog/cycling-cooking-class-ubud-full-day-itinerary",
  },
  {
    title: "Rafting vs Tubing vs ATV Near Ubud",
    excerpt: "Compare intensity, prices, and which adventure fits your style.",
    href: "/blog/rafting-vs-tubing-vs-atv-near-ubud",
  },
  {
    title: "Ubud Hotel Pickup Explained",
    excerpt: "Which tours include free Ubud pickup and when the IDR 50K pickup fee applies.",
    href: "/blog/ubud-hotel-pickup-bali-adventures-explained",
  },
] as const

/* ─── Pricing Data ─── */
const pricingData: PricingRow[] = [
  { activity: "Single ATV", adventureId: "single-atv", pax: formatTierPriceTable('single-atv'), price: getPromoListPrice('single-atv'), originalPrice: getListPrice('single-atv'), highlight: false },
  { activity: "Tandem ATV", adventureId: "tandem-atv", pax: formatTierPriceTable('tandem-atv'), price: getPromoListPrice('tandem-atv'), originalPrice: getListPrice('tandem-atv'), highlight: true },
  { activity: "Whitewater Rafting", adventureId: "rafting", pax: formatTierPriceTable('rafting'), price: getPromoListPrice('rafting'), originalPrice: getListPrice('rafting'), highlight: false },
  { activity: "Canyon Tubing", adventureId: "canyon-tubing", pax: formatTierPriceTable('canyon-tubing'), price: getPromoListPrice('canyon-tubing'), originalPrice: getListPrice('canyon-tubing'), highlight: false },
  {
    activity: "Ubud Ricefield Cycling Tour",
    adventureId: "cycling",
    pax: `${formatTierPriceTable('cycling')} · Free Ubud pickup · Lunch included`,
    price: getPromoListPrice('cycling'),
    originalPrice: getListPrice('cycling'),
    highlight: false,
  },
]

/* ─── Main Page ─── */
export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [bookingTour, setBookingTour] = useState<TourConfig | null>(null)
  const [bookingOpen, setBookingOpen] = useState(false)

  const openBooking = (adventureId: string) => {
    const adv = adventures.find((a) => a.id === adventureId)
    if (!adv) return
    setBookingTour(toTourConfig(adv))
    setBookingOpen(true)
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
      { threshold: 0.08, rootMargin: '80px 0px' }
    )
    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visibleSections.has(id)

  return (
    <main className="w-full flex flex-col bg-sand">
      <BookingPopup
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        tour={bookingTour}
      />

      {/* ═══ HERO ═══ */}
      <section id="top" className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/adventures/hero-banner.jpg"
            alt="ATV jungle adventure ride through tropical rainforest trails"
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            quality={70}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
            className="object-cover object-[center_35%]"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 flex flex-col items-start justify-end text-left px-6 md:px-12 lg:px-16 pt-36 pb-16 md:pb-20 max-w-5xl">
          <p className="hero-brand text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-5 animate-fade-in-up">
            Sekar Bali Activity
          </p>
          <h1 className="hero-headline font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.92] tracking-tight mb-5 animate-fade-in-up-delay-1">
            Sport &amp; travel<br />
            <span className="hero-headline-accent">adventures in Ubud</span>
          </h1>
          <p className="hero-subcopy text-base md:text-lg max-w-lg mb-9 animate-fade-in-up-delay-2">
            Private ATV, rafting, canyon tubing, and ricefield cycling — all-inclusive packages with WhatsApp booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up-delay-3">
            <button
              type="button"
              onClick={() => openBooking("single-atv")}
              className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full btn-gold-shimmer font-bold text-sm md:text-base uppercase tracking-wider"
            >
              Book ATV Adventure
            </button>
            <Link href="#adventures" className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full bg-white/12 border border-white/35 text-white font-bold text-sm md:text-base uppercase tracking-wider hover:bg-white/20 transition-colors backdrop-blur-sm">
              Explore packages
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section id="stats-strip" data-animate className="bg-ink-soft text-sand py-10 md:py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${isVisible("stats-strip") ? "animate-count-up" : ""}`} style={{ animationDelay: `${i * 0.12}s` }}>
              <span className="text-4xl md:text-5xl font-display font-bold text-accent-amber mb-1">{stat.value}</span>
              <span className="text-sm font-medium opacity-70 tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ADVENTURE CARDS ═══ */}
      <section id="adventures" data-animate className="section-atmosphere py-20 md:py-28 px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible("adventures") ? "animate-fade-in-up" : ""}`}>
          <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-4">Choose your sport</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green uppercase leading-tight mb-4">Adventure Packages</h2>
          <p className="text-lg text-brand-green-light max-w-2xl mx-auto">ATV trails, river sports, and village cycling near Ubud — clear inclusions before you message WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {adventures.map((adv, i) => {
            const IconComponent = adv.icon
            return (
              <article key={adv.id} className={`adventure-card bg-white overflow-hidden relative group border border-brand-green/8 ${isVisible("adventures") ? "animate-fade-in-up" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={adv.image}
                    alt={adv.name}
                    width={800}
                    height={512}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="adventure-card-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green/50 to-transparent" />
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
                    <PromoPrice
                      price={adv.price}
                      originalPrice={adv.originalPrice ?? adv.price}
                      variant="badge"
                      from
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sand text-sm font-medium">
                    <Clock3 className="w-4 h-4" /><span>{adv.duration}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-accent-gold text-white flex items-center justify-center shadow-lg">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-green font-display uppercase">{adv.name}</h3>
                      <span className="text-sm text-brand-green-light font-medium">{adv.tagline} · {adv.pax}</span>
                    </div>
                  </div>
                  <p className="text-brand-green-light text-sm leading-relaxed mb-6">{adv.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                    {adv.highlights.map((h, j) => (
                      <span key={j} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green">
                        <Check className="w-3.5 h-3.5 text-accent-gold" />{h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {adv.tourSlug ? (
                      <Link
                        href={`/tours/${adv.tourSlug}`}
                        className="w-full flex items-center justify-center gap-2 h-12 border-2 border-brand-green/15 text-brand-green font-bold text-sm uppercase tracking-wider hover:border-brand-green/30 hover:bg-sand transition-colors"
                      >
                        View Details
                      </Link>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => openBooking(adv.id)}
                      className="w-full flex items-center justify-center gap-2 h-12 bg-brand-green text-sand font-bold text-sm uppercase tracking-wider hover:bg-ink-soft transition-colors"
                    >
                      Book This Adventure <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        </div>
      </section>

      {/* ═══ KNOW BEFORE YOU GO ═══ */}
      <section id="know-before-you-go" className="py-20 md:py-28 px-6 lg:px-12 bg-ink-soft w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent-amber font-semibold tracking-[0.15em] uppercase text-sm mb-4">ATV &amp; river sports</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold !text-sand uppercase leading-tight mb-4">
              Know Before You Go
            </h2>
            <p className="text-lg text-sand/90 max-w-2xl mx-auto">
              Complete quad bike trips at All New Bali Adventure — packed with sensation and joy, with optional tubing on the Wos River after you race the track.
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

      {/* ═══ PRICING TABLE ═══ */}
      <section id="pricing" data-animate className="py-20 md:py-28 px-6 lg:px-12 bg-white w-full">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${isVisible("pricing") ? "animate-fade-in-up" : ""}`}>
            <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-4">Transparent pricing</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green uppercase leading-tight mb-4">Adventure Pricing</h2>
            <p className="text-lg text-brand-green-light max-w-xl mx-auto">Tier pricing: better rates for 2+ and 3+ guests. Optional pickup IDR 50k (+ IDR 50k return to same hotel). Compare Grab/GoCar in the booking form.</p>
          </div>
          <div className={`space-y-3 ${isVisible("pricing") ? "animate-fade-in-up-delay-1" : ""}`}>
            {pricingData.map((item, i) => (
              <div key={i} className={`pricing-row relative flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 border ${item.highlight ? "border-accent-gold bg-accent-gold/5" : "border-brand-green/10 bg-sand/40"}`}>
                {item.highlight && <span className="absolute -top-3 left-6 bg-accent-gold text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Most Popular</span>}
                {item.originalPrice && item.originalPrice > item.price && (
                  <span className="absolute -top-3 right-6 bg-brand-green text-sand text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Promo
                  </span>
                )}
                <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-brand-green font-display uppercase">{item.activity}</h3>
                    <span className="text-sm text-brand-green-light block mt-1">{item.pax}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center sm:text-right">
                    <PromoPrice
                      price={item.price}
                      originalPrice={item.originalPrice ?? item.price}
                      variant="inline"
                      from
                    />
                  </div>
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
          <p className="text-center text-sm text-brand-green-light mt-8 opacity-70">From prices shown for 1 guest. Group tiers: 2+ and 3+ discounts in booking. Pickup IDR 50,000 (+ IDR 50,000 drop same hotel). Free Ubud pickup on cycling only. Meet at All New Bali Adventure with no transport fee.</p>
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

      {/* ═══ WHY CHOOSE US ═══ */}
      <section id="why-us" data-animate className="section-atmosphere py-20 md:py-28 px-6 lg:px-12 w-full">
        <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible("why-us") ? "animate-fade-in-up" : ""}`}>
          <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-4">Why travel with us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green uppercase leading-tight">
            Built for thrills.<br /><span className="text-accent-gold-dark">Backed by safety.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            { icon: Shield, title: "Safety First", desc: "International-standard safety gear, certified guides, and comprehensive insurance on every adventure. Your safety is non-negotiable." },
            { icon: Star, title: "5-Star Rated", desc: "Over 100 guests and counting. Consistently rated 5 stars on GetYourGuide, Google, and TripAdvisor by adventurers worldwide." },
            { icon: MapPin, title: "Local Experts", desc: "Our Balinese guides know every hidden trail, secret waterfall, and canyon passage. Experience the real Bali most tourists never see." },
          ].map((item, i) => {
            const IconComp = item.icon
            return (
              <div key={i} className={`${isVisible("why-us") ? "animate-fade-in-up" : ""}`} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="w-14 h-14 rounded-full bg-accent-gold/12 flex items-center justify-center mb-5">
                  <IconComp className="w-6 h-6 text-accent-gold-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-3 font-display uppercase">{item.title}</h3>
                <p className="text-brand-green-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            )
          })}
        </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="bg-ink-soft py-20 md:py-24 px-6 lg:px-12 w-full">
        <div className="max-w-4xl mx-auto text-center text-sand">
          <span className="text-6xl font-display leading-none block mb-4 opacity-30 text-accent-amber">&ldquo;</span>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display leading-relaxed mb-6">
            The ATV ride through the jungle was the best thing we did in Bali. Absolutely incredible guides and views.
          </blockquote>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-accent-amber fill-accent-amber" />))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-70">— Sarah M. · GetYourGuide Review</p>
          <p className="mt-4 text-xs uppercase tracking-wider text-sand/60">
            Trusted by guests on GetYourGuide, Google, and TripAdvisor
          </p>
        </div>
      </section>

      {/* ═══ TRAVEL GUIDES ═══ */}
      <section id="guides" className="py-16 md:py-20 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Plan your trip
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-green uppercase leading-tight mb-4">
            Bali Adventure Guides
          </h2>
          <p className="text-brand-green-light max-w-2xl mx-auto">
            Practical guides on pricing, pickup rules, and which package fits your trip.
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

      {/* ═══ GEO / AI citability ═══ */}
      <GeoAnswerBlock />

      {/* ═══ FAQ ═══ */}
      <FAQSection />

      {/* ═══ CONTACT CTA ═══ */}
      <section id="contact" data-animate className="relative py-24 md:py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/adventures/rafting.jpg"
            alt="Guests rafting through a jungle river canyon"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink-soft/88" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-sand">
          <p className="text-accent-amber font-semibold tracking-[0.2em] uppercase text-sm mb-4">No payment to inquire</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-6">
            Message WhatsApp.<br /><span className="text-accent-amber">Confirm your date</span><br />in minutes.
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp ATV from IDR 600K
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-sand/70 font-medium">
            <Check className="w-4 h-4" />Free cancellation up to 24 hours · No payment to inquire
          </div>
        </div>
      </section>
    </main>
  )
}
