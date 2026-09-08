/**
 * Discovery catalog for the homepage — travel & activities across moods,
 * not sports-only. Curated for Sekar Bali (local operator), distinct from
 * marketplace-style aggregators.
 */

import { FEATURED_COMBOS, getComboListPrice } from "@/lib/combos"
import { getCyclingCookingCombo } from "@/data/cultureSales"
import {
  TOURS,
  TOUR_CATEGORY_LABELS,
  type Tour,
  type TourCategoryId,
  getTopPickTours,
  getToursByCategory,
} from "@/data/tours"

export type DiscoveryCategory = {
  id: TourCategoryId
  label: string
  blurb: string
  href: string
}

export const DISCOVERY_CATEGORIES: DiscoveryCategory[] = [
  {
    id: "adventure",
    label: TOUR_CATEGORY_LABELS.adventure,
    blurb: "ATV, rafting, tubing & dirt bike",
    href: "/#adventure",
  },
  {
    id: "food",
    label: TOUR_CATEGORY_LABELS.food,
    blurb: "Cooking class & coffee tasting",
    href: "/#food",
  },
  {
    id: "village",
    label: TOUR_CATEGORY_LABELS.village,
    blurb: "Ricefield cycling in Pejeng",
    href: "/#village",
  },
  {
    id: "day-tour",
    label: TOUR_CATEGORY_LABELS["day-tour"],
    blurb: "Private Ubud & temple days",
    href: "/#day-tours",
  },
]

export type PackageCard = {
  id: string
  name: string
  tagline: string
  description: string
  duration: string
  priceFrom: number
  href: string
  kind: "combo" | "culture" | "tour"
}

export function getFeaturedPackages(): PackageCard[] {
  const comboCards: PackageCard[] = FEATURED_COMBOS.slice(0, 3).map((combo) => ({
    id: combo.id,
    name: combo.name,
    tagline: combo.tagline,
    description: combo.description,
    duration: combo.duration,
    priceFrom: getComboListPrice(combo),
    href: `/book?combo=${combo.id}`,
    kind: "combo" as const,
  }))

  const culture = getCyclingCookingCombo()
  const cultureCard: PackageCard = {
    id: culture.id,
    name: culture.name,
    tagline: culture.tagline,
    description: culture.description,
    duration: culture.duration,
    priceFrom: culture.totalFromIdr,
    href: "/book?activity=combo-cycling-cooking",
    kind: "culture",
  }

  const dayTours = getToursByCategory("day-tour").map((tour) => ({
    id: tour.id,
    name: tour.title,
    tagline: TOUR_CATEGORY_LABELS[tour.category],
    description: tour.shortDescription,
    duration: tour.duration,
    priceFrom: tour.basePrice,
    href: `/tours/${tour.slug}`,
    kind: "tour" as const,
  }))

  return [...comboCards, cultureCard, ...dayTours]
}

export function getCatalogTopPicks(): Tour[] {
  const picks = getTopPickTours()
  if (picks.length > 0) return picks
  return TOURS.slice(0, 6)
}

export function getCatalogSection(category: TourCategoryId): Tour[] {
  return getToursByCategory(category)
}

export const WHY_SEKAR = [
  {
    title: "Activities for every kind of day",
    desc: "Adventure trails, village cycling, cooking class, coffee, and private day tours — pick the mood that fits your trip, not a sports-only menu.",
  },
  {
    title: "Clear IDR before you message",
    desc: "Tier pricing, inclusions, and pickup rules are shown up front. Compare the real total before you open WhatsApp.",
  },
  {
    title: "Local Pejeng team on the details",
    desc: "We help with schedule changes, hotel pickup, and provider coordination from our Ubud-area base — not a faceless marketplace inbox.",
  },
] as const

export const GUEST_STORIES = [
  {
    quote:
      "The ATV ride through the jungle was the best thing we did in Bali. Absolutely incredible guides and views.",
    name: "Sarah M.",
    source: "GetYourGuide · ATV Adventure",
  },
  {
    quote:
      "Pejeng ricefield cycling felt quiet and real — lunch included, free Ubud pickup, and none of the Tegallalang crowds.",
    name: "James & Priya",
    source: "WhatsApp guest · Cycling",
  },
  {
    quote:
      "Evening cooking class after cycling made the perfect culture day. Clear pricing and fast WhatsApp replies.",
    name: "Chloe M.",
    source: "Guest review · Cycling + Cooking",
  },
] as const
