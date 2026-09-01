"use client";
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FAQSection } from '@/components/FAQSection'
import GeoAnswerBlock from '@/components/GeoAnswerBlock'
import { BookingPopup, type TourConfig } from '@/components/BookingPopup'
import {
  ArrowRight, MapPin, Users, Check, Clock3, Shield,
  Star, ChevronLeft, ChevronRight, Waves,
  Bike, Compass, Zap
} from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/contact'

/** Tiny LQIP for the hero — keeps LCP fast while the optimized image loads */
const HERO_BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBAv/EACIQAAICAgEEAwEAAAAAAAAAAAECAxEAEiEEMUFhBRMigf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwCL42dFV2mNDlmPm/H9yfqXjmEv12Qw2J93mdK0UV7saq+11iYpM7aPuzc2V1v1mRjjp5qDLNsEZOPzyQTxkpmdWYRjZQoJOvYducYyi//Z'

const DEFAULT_TIMES = ["08:00", "09:00", "10:00", "13:00", "14:00"]

/* ─── Adventure Data ─── */
const adventures = [
  {
    id: "single-atv",
    name: "Single ATV Ride",
    tagline: "Solo jungle thrill",
    pax: "1 Pax",
    price: 650000,
    childPrice: 550000,
    image: "/images/adventures/atv-adventure.jpg",
    description: "Private Bali ATV tour through jungle trails, muddy tracks, and river crossings — beginner friendly with expert guides. Add optional Wos River tubing for the best ATV + tubing combo near Ubud.",
    highlights: ["Solo ride freedom", "Boot shoes & helmet", "Simple lunch included", "Insurance included"],
    duration: "2 hours",
    icon: Zap,
    minPax: 1,
    times: DEFAULT_TIMES,
  },
  {
    id: "tandem-atv",
    name: "Tandem ATV Ride",
    tagline: "Share the adventure",
    pax: "2 Pax",
    price: 859000,
    childPrice: null as number | null,
    image: "/images/adventures/atv-adventure.jpg",
    description: "Private tandem ATV tour Bali — share a quad bike adventure with a partner through jungle trails. All-inclusive with lunch, safety gear, and optional Wos River tubing combo.",
    highlights: ["Ride together", "Boot shoes & helmet", "Simple lunch included", "Insurance included"],
    duration: "2 hours",
    icon: Users,
    minPax: 2,
    times: DEFAULT_TIMES,
  },
  {
    id: "rafting",
    name: "Whitewater Rafting",
    tagline: "Ride the rapids",
    pax: "Per Person",
    price: 400000,
    childPrice: 350000,
    image: "/images/adventures/rafting.jpg",
    description: "Navigate Class II-III rapids through a stunning river canyon surrounded by towering jungle cliffs, waterfalls, and ancient stone carvings.",
    highlights: ["Class II-III rapids", "Canyon scenery", "Lunch included", "Professional crew"],
    duration: "3 hours",
    icon: Waves,
    minPax: 2,
    times: ["08:30", "11:00", "14:00"],
  },
  {
    id: "canyon-tubing",
    name: "Canyon Tubing",
    tagline: "Float through paradise",
    pax: "Per Person",
    price: 359000,
    childPrice: 300000,
    image: "/images/adventures/canyon-tubing.jpg",
    description: "Drift through hidden canyons on an inflatable tube. Crystal-clear waters, moss-covered walls, and shafts of sunlight create a magical underground world. Pair it with an ATV ride for the ultimate combo.",
    highlights: ["Hidden canyons", "Crystal-clear water", "Life jacket provided", "Nature guide"],
    duration: "2.5 hours",
    icon: Compass,
    minPax: 1,
    times: DEFAULT_TIMES,
  },
  {
    id: "cycling",
    name: "Village Cycling Tour",
    tagline: "Rice terraces & villages",
    pax: "Per Person",
    price: 650000,
    childPrice: 550000,
    originalPrice: 888000,
    image: "/images/adventures/cycling.jpg",
    description: "Small-group Pejeng village cycling tour — downhill routes through morning markets, ancient temples, and UNESCO Subak rice terraces. Hotel pickup and lunch or breakfast included.",
    highlights: ["Lunch or breakfast included", "Rice terrace trails", "Local village guide", "Hotel pickup"],
    duration: "4 hours",
    icon: Bike,
    minPax: 1,
    times: ["08:30", "13:30"],
  },
] as const

function toTourConfig(adv: (typeof adventures)[number]): TourConfig {
  return {
    id: adv.id,
    title: adv.name,
    times: [...adv.times],
    adultPrice: adv.price,
    kidPrice: "childPrice" in adv ? adv.childPrice : null,
    minPax: adv.minPax,
  }
}

const stats = [
  { value: "5", label: "Epic Activities" },
  { value: "2,500+", label: "Happy Guests" },
  { value: "5★", label: "Rated Experience" },
  { value: "24/7", label: "WhatsApp Support" },
]

const heroCarouselImages = [
  { src: "/images/adventures/atv-adventure.jpg", alt: "ATV Jungle Adventure", label: "ATV Adventure" },
  { src: "/images/adventures/rafting.jpg", alt: "Whitewater Rafting", label: "Rafting" },
  { src: "/images/adventures/canyon-tubing.jpg", alt: "Canyon Tubing", label: "Canyon Tubing" },
  { src: "/images/adventures/cycling.jpg", alt: "Village Cycling Tour", label: "Cycling" },
]

const travelGuides = [
  {
    title: "Bali ATV Tour Ubud Guide",
    excerpt: "Trails, prices, and what is included for quad bike rides near Ubud.",
    href: "/blog/bali-atv-tour-ubud-guide",
  },
  {
    title: "ATV + River Tubing on the Wos River",
    excerpt: "Combine jungle ATV with a float down Bali's Wos River.",
    href: "/blog/atv-river-tubing-wos-river-bali",
  },
  {
    title: "How to Book on WhatsApp",
    excerpt: "Send your name, age, location, activity, and price in one message.",
    href: "/blog/how-to-book-bali-adventure-whatsapp",
  },
] as const

function formatIDR(amount: number) {
  return `IDR ${amount.toLocaleString("id-ID")}`
}

/* ─── Hero Carousel ─── */
function HeroCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -280 : 280, behavior: "smooth" })
    }
  }
  return (
    <div className="relative">
      <button onClick={() => scroll("left")} className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-sand/90 text-brand-green shadow-lg hidden md:flex items-center justify-center hover:bg-sand transition-colors" aria-label="Scroll left">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => scroll("right")} className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-sand/90 text-brand-green shadow-lg hidden md:flex items-center justify-center hover:bg-sand transition-colors" aria-label="Scroll right">
        <ChevronRight className="w-5 h-5" />
      </button>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {heroCarouselImages.map((img, i) => (
          <div key={i} className="shrink-0 w-44 md:w-52 snap-start">
            <div className="relative aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden group cursor-pointer">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow-md">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Pricing Data ─── */
const pricingData = [
  { activity: "Single ATV", adventureId: "single-atv", pax: "1 Pax", price: 650000, highlight: false },
  { activity: "Tandem ATV", adventureId: "tandem-atv", pax: "2 Pax", price: 859000, highlight: true },
  { activity: "Whitewater Rafting", adventureId: "rafting", pax: "Per Person", price: 400000, highlight: false },
  { activity: "Canyon Tubing", adventureId: "canyon-tubing", pax: "Per Person", price: 359000, highlight: false },
  {
    activity: "Village Cycling Tour",
    adventureId: "cycling",
    pax: "Per Person · Lunch or breakfast included",
    price: 650000,
    originalPrice: 888000,
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
      <section id="top" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/adventures/hero-banner.jpg"
            alt="ATV jungle adventure ride through tropical rainforest trails"
            fill
            preload
            sizes="100vw"
            quality={70}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
            className="object-cover object-[center_35%]"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-8 flex-1">
          <p className="hero-eyebrow text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
            Premium Adventure Experiences · Bali
          </p>
          <h1 className="hero-headline font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase leading-[0.9] tracking-tight mb-6 animate-fade-in-up-delay-1">
            <span className="block">Private Bali ATV</span>
            <span className="hero-headline-accent block">& Ubud Adventures</span>
          </h1>
          <p className="hero-subcopy text-base md:text-lg max-w-xl mb-10 animate-fade-in-up-delay-2">
            Book all-inclusive quad bike tours, ATV + Wos River tubing combos, whitewater rafting, or small-group Pejeng village cycling — with hotel pickup across Ubud.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up-delay-3">
            <button
              type="button"
              onClick={() => openBooking("single-atv")}
              className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full btn-gold-shimmer text-brand-green font-bold text-sm md:text-base uppercase tracking-wider border border-accent-gold-dark/20"
            >
              Book Now
            </button>
            <Link href="#adventures" className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full bg-white/70 border-2 border-brand-green/25 text-brand-green font-bold text-sm md:text-base uppercase tracking-wider hover:bg-white transition-colors shadow-sm">
              Explore Activities
            </Link>
          </div>
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-8">
          <HeroCarousel />
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section id="stats-strip" data-animate className="bg-brand-green text-sand py-10 md:py-14 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${isVisible("stats-strip") ? "animate-count-up" : ""}`} style={{ animationDelay: `${i * 0.12}s` }}>
              <span className="text-4xl md:text-5xl font-display font-bold text-accent-gold mb-1">{stat.value}</span>
              <span className="text-sm font-medium opacity-70 tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ADVENTURE CARDS ═══ */}
      <section id="adventures" data-animate className="py-20 md:py-28 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className={`text-center mb-16 ${isVisible("adventures") ? "animate-fade-in-up" : ""}`}>
          <p className="text-brand-green-light font-semibold tracking-[0.15em] uppercase text-sm mb-4">Choose your thrill</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green uppercase leading-tight mb-4">Adventure Packages</h2>
          <p className="text-lg text-brand-green-light max-w-2xl mx-auto">From heart-pumping ATV rides to serene village cycling — we have the perfect adventure for every traveler.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {adventures.map((adv, i) => {
            const IconComponent = adv.icon
            return (
              <article key={adv.id} className={`adventure-card bg-white rounded-3xl overflow-hidden shadow-lg shadow-brand-green/5 relative group ${isVisible("adventures") ? "animate-fade-in-up" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img src={adv.image} alt={adv.name} className="adventure-card-image w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
                    {"originalPrice" in adv && adv.originalPrice ? (
                      <>
                        <span className="bg-brand-green text-sand text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wide">
                          Save {formatIDR(adv.originalPrice - adv.price)}
                        </span>
                        <div className="bg-accent-gold text-brand-green text-xs font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-wide text-right">
                          <span className="block text-[10px] line-through opacity-70 font-semibold normal-case tracking-normal">
                            {formatIDR(adv.originalPrice)}
                          </span>
                          <span>From {formatIDR(adv.price)}</span>
                        </div>
                      </>
                    ) : (
                      <div className="bg-accent-gold text-brand-green text-xs font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-wide">
                        From {formatIDR(adv.price)}
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sand text-sm font-medium">
                    <Clock3 className="w-4 h-4" /><span>{adv.duration}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-brand-green/90 text-sand flex items-center justify-center shadow-lg backdrop-blur-sm">
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {adv.highlights.map((h, j) => (
                      <span key={j} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green bg-sand rounded-full px-3 py-1.5">
                        <Check className="w-3.5 h-3.5 text-accent-gold-dark" />{h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => openBooking(adv.id)}
                      className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-brand-green text-sand font-bold text-sm uppercase tracking-wider hover:bg-brand-green-light transition-colors"
                    >
                      Book This Adventure <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ═══ KNOW BEFORE YOU GO ═══ */}
      <section id="know-before-you-go" className="py-20 md:py-28 px-6 lg:px-12 bg-brand-green w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent-gold font-semibold tracking-[0.15em] uppercase text-sm mb-4">ATV &amp; river adventures</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold !text-sand uppercase leading-tight mb-4">
              Know Before You Go
            </h2>
            <p className="text-lg text-sand/90 max-w-2xl mx-auto">
              Complete Bali quad bike trips packed with sensation, excitement, and joy — with optional river tubing on the Wos River after you race the ATV track.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-3xl bg-sand p-8 md:p-10 shadow-xl border border-sand-dark/40">
              <h3 className="font-display text-2xl font-bold text-brand-green uppercase mb-6">What To Bring</h3>
              <ul className="space-y-4">
                {[
                  "Changing clothes / dry cloth",
                  "Sunscreen (recommended)",
                  "Cash for personal expenses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-green">
                    <Check className="w-5 h-5 text-accent-gold-dark shrink-0 mt-0.5" />
                    <span className="text-base leading-relaxed text-brand-green-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-sand p-8 md:p-10 shadow-xl border border-sand-dark/40">
              <h3 className="font-display text-2xl font-bold text-brand-green uppercase mb-6">What You Get</h3>
              <ul className="space-y-4">
                {[
                  "Simple menu lunch",
                  "Boot shoes & helmet",
                  "Insurance coverage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-green">
                    <Shield className="w-5 h-5 text-accent-gold-dark shrink-0 mt-0.5" />
                    <span className="text-base leading-relaxed text-brand-green-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING TABLE ═══ */}
      <section id="pricing" data-animate className="py-20 md:py-28 px-6 lg:px-12 bg-white w-full">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${isVisible("pricing") ? "animate-fade-in-up" : ""}`}>
            <p className="text-brand-green-light font-semibold tracking-[0.15em] uppercase text-sm mb-4">Transparent pricing</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green uppercase leading-tight mb-4">Adventure Pricing</h2>
            <p className="text-lg text-brand-green-light max-w-xl mx-auto">All-inclusive packages with gear, guides, insurance, and hotel pickup.</p>
          </div>
          <div className={`space-y-4 ${isVisible("pricing") ? "animate-fade-in-up-delay-1" : ""}`}>
            {pricingData.map((item, i) => (
              <div key={i} className={`pricing-row relative flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 rounded-2xl border-2 ${item.highlight ? "border-accent-gold bg-accent-gold/5 shadow-md" : "border-brand-green/10 bg-sand/50"}`}>
                {item.highlight && <span className="absolute -top-3 left-6 bg-accent-gold text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>}
                {"originalPrice" in item && item.originalPrice && (
                  <span className="absolute -top-3 right-6 bg-brand-green text-sand text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Promo
                  </span>
                )}
                <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-brand-green/8 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-brand-green">{item.activity}</h3>
                    <span className="text-sm text-brand-green-light">{item.pax}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center sm:text-right">
                    {"originalPrice" in item && item.originalPrice ? (
                      <>
                        <span className="block text-sm text-brand-green-light line-through opacity-70">
                          {formatIDR(item.originalPrice)}
                        </span>
                        <span className="text-2xl md:text-3xl font-display font-bold text-brand-green">
                          {formatIDR(item.price)}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl md:text-3xl font-display font-bold text-brand-green">
                        {formatIDR(item.price)}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => openBooking(item.adventureId)}
                    className="hidden sm:inline-flex items-center h-10 px-6 rounded-full bg-brand-green text-sand text-sm font-bold uppercase tracking-wider hover:bg-brand-green-light transition-colors"
                  >
                    Book
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => openBooking(item.adventureId)}
                  className="sm:hidden w-full flex items-center justify-center h-11 rounded-xl bg-brand-green text-sand text-sm font-bold uppercase tracking-wider"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-brand-green-light mt-8 opacity-70">Prices include all equipment, guide, insurance & hotel pickup. Group discounts available.</p>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section id="why-us" data-animate className="py-20 md:py-28 px-6 lg:px-12 max-w-6xl mx-auto w-full">
        <div className={`text-center mb-16 ${isVisible("why-us") ? "animate-fade-in-up" : ""}`}>
          <p className="text-brand-green-light font-semibold tracking-[0.15em] uppercase text-sm mb-4">Why adventure with us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green uppercase leading-tight">
            Built for Thrills.<br /><span className="text-accent-gold-dark">Backed by Safety.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Safety First", desc: "International-standard safety gear, certified guides, and comprehensive insurance on every adventure. Your safety is non-negotiable." },
            { icon: Star, title: "5-Star Rated", desc: "Over 2,500 guests and counting. Consistently rated 5 stars on GetYourGuide, Google, and TripAdvisor by adventurers worldwide." },
            { icon: MapPin, title: "Local Experts", desc: "Our Balinese guides know every hidden trail, secret waterfall, and canyon passage. Experience the real Bali most tourists never see." },
          ].map((item, i) => {
            const IconComp = item.icon
            return (
              <div key={i} className={`bg-white rounded-3xl p-8 md:p-10 text-center shadow-sm shadow-brand-green/5 border border-brand-green/5 ${isVisible("why-us") ? "animate-fade-in-up" : ""}`} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="w-16 h-16 rounded-2xl bg-accent-gold/15 flex items-center justify-center mx-auto mb-6">
                  <IconComp className="w-7 h-7 text-accent-gold-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-3 font-display uppercase">{item.title}</h3>
                <p className="text-brand-green-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="bg-brand-green py-20 md:py-24 px-6 lg:px-12 w-full">
        <div className="max-w-4xl mx-auto text-center text-sand">
          <span className="text-6xl font-display leading-none block mb-4 opacity-30 text-accent-gold">&ldquo;</span>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display leading-relaxed mb-6">
            The ATV ride through the jungle was the best thing we did in Bali. Absolutely incredible guides and views.
          </blockquote>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-70">— Sarah M. · GetYourGuide Review</p>
        </div>
      </section>

      {/* ═══ TRAVEL GUIDES ═══ */}
      <section id="guides" className="py-16 md:py-20 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <p className="text-brand-green-light font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Plan your trip
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-green uppercase leading-tight mb-4">
            Bali Adventure Guides
          </h2>
          <p className="text-brand-green-light max-w-2xl mx-auto">
            Detailed guides on ATV near Ubud, Wos River tubing combos, and WhatsApp booking.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {travelGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group bg-white rounded-2xl border border-brand-green/10 p-6 shadow-sm hover:shadow-md hover:border-brand-green/20 transition-all"
            >
              <h3 className="font-bold text-brand-green mb-2 leading-snug group-hover:text-brand-green-light transition-colors">
                {guide.title}
              </h3>
              <p className="text-sm text-brand-green-light leading-relaxed mb-4">{guide.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green uppercase tracking-wider">
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
          <img src="/images/adventures/rafting.jpg" alt="Adventure background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-green/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-sand">
          <p className="text-accent-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4">Ready for your adventure?</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-6">
            Book Your<br /><span className="text-accent-gold">Bali Adventure</span><br />Today
          </h2>
          <p className="text-lg opacity-80 max-w-xl mx-auto mb-10">
            Message us directly on WhatsApp. Tell us your preferred date, group size, and activity — we&apos;ll confirm availability immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openBooking("single-atv")}
              className="inline-flex items-center justify-center gap-3 h-14 md:h-16 px-10 rounded-full btn-gold-shimmer text-brand-green font-bold text-lg uppercase tracking-wider border border-accent-gold-dark/20 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Book via WhatsApp
            </button>
            <Link href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center gap-2 h-14 md:h-16 px-10 rounded-full border-2 border-sand/30 text-sand font-bold text-lg uppercase tracking-wider hover:bg-sand/10 transition-colors w-full sm:w-auto">
              Send an Email
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-sand/70 font-medium">
            <Check className="w-4 h-4" />No payment required to inquire · Instant response
          </div>
        </div>
      </section>
    </main>
  )
}
