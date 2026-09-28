/** Guided Bali motorbike / scooter traveling trip — operated, not an imported ticket. */
export const MOTORBIKE_TRIP_SLUG = "bali-motorbike-traveling-trip"

/** Bookable promo rates — do not raise these when showing a compare-at list. */
export const MOTORBIKE_UBUD_IDR = 450_000
export const MOTORBIKE_WATERFALL_IDR = 500_000
export const MOTORBIKE_KINTAMANI_IDR = 600_000
export const MOTORBIKE_SOUTH_IDR = 650_000
export const MOTORBIKE_NORTH_IDR = 750_000
export const MOTORBIKE_EAST_IDR = 800_000

/** Compare-at list markup on every destination. Promo charge stays the constants above. */
export const MOTORBIKE_LIST_MARKUP_IDR = 100_000

export const MOTORBIKE_UBUD_LIST_IDR = MOTORBIKE_UBUD_IDR + MOTORBIKE_LIST_MARKUP_IDR
export const MOTORBIKE_WATERFALL_LIST_IDR = MOTORBIKE_WATERFALL_IDR + MOTORBIKE_LIST_MARKUP_IDR
export const MOTORBIKE_KINTAMANI_LIST_IDR = MOTORBIKE_KINTAMANI_IDR + MOTORBIKE_LIST_MARKUP_IDR
export const MOTORBIKE_SOUTH_LIST_IDR = MOTORBIKE_SOUTH_IDR + MOTORBIKE_LIST_MARKUP_IDR
export const MOTORBIKE_NORTH_LIST_IDR = MOTORBIKE_NORTH_IDR + MOTORBIKE_LIST_MARKUP_IDR
export const MOTORBIKE_EAST_LIST_IDR = MOTORBIKE_EAST_IDR + MOTORBIKE_LIST_MARKUP_IDR

export const MOTORBIKE_ENGINE = "125–160cc automatic"
export const MOTORBIKE_DURATION = "Full Day (approx. 8–10 Hours)"
export const MOTORBIKE_PICKUP = "Pickup at your chosen area"
export const MOTORBIKE_AREA = "Ubud · Kintamani · North · South · East Bali"
export const MOTORBIKE_PRICE_ARTICLE_SLUG = "bali-motorbike-tour-price-2026"
export const MOTORBIKE_VS_ATV_ARTICLE_SLUG = "bali-scooter-tour-vs-atv-2026"
export const MOTORBIKE_VS_DIRT_ARTICLE_SLUG = "bali-motorbike-tour-vs-dirt-bike-2026"
export const MOTORBIKE_WATERFALL_ARTICLE_SLUG = "ubud-waterfall-scooter-tour-2026"
export const MOTORBIKE_IDP_ARTICLE_SLUG = "bali-motorbike-tour-idp-license-2026"
export const MOTORBIKE_COAST_ARTICLE_SLUG = "east-south-bali-motorbike-tour-2026"
export const MOTORBIKE_VS_JEEP_ARTICLE_SLUG = "kintamani-scooter-vs-batur-jeep-2026"
export const ATV_VS_KUBER_ARTICLE_SLUG = "bali-atv-vs-kuber-cave-2026"
export const WHEELS_CHOOSER_ARTICLE_SLUG = "which-bali-wheels-2026"

/** Flat shuttle upsell — Canggu, Jimbaran, or Nusa Dua only. Not the IDR 400K adventure surcharge. */
export const MOTORBIKE_SOUTH_SHUTTLE_IDR = 550_000
export const MOTORBIKE_SOUTH_SHUTTLE_AREAS = "Canggu, Jimbaran, and Nusa Dua"
export const MOTORBIKE_SOUTH_SHUTTLE_BLURB =
  `IDR ${(MOTORBIKE_SOUTH_SHUTTLE_IDR / 1000).toFixed(0)},000 once per booking when we collect you from Canggu, Jimbaran, or Nusa Dua. Not the IDR 400,000 ATV/rafting surcharge. Skip this if your pin is already in the ride area.`

export const MOTORBIKE_SOUTH_SHUTTLE_ADDON = {
  id: "motorbike-south-shuttle",
  label: "Canggu / Jimbaran / Nusa Dua shuttle",
  blurb: MOTORBIKE_SOUTH_SHUTTLE_BLURB,
  perPerson: MOTORBIKE_SOUTH_SHUTTLE_IDR,
  flat: true as const,
}

export const MOTORBIKE_DESTINATIONS = [
  {
    name: "Ubud Traveling Trip",
    priceIdr: MOTORBIKE_UBUD_IDR,
    listPriceIdr: MOTORBIKE_UBUD_LIST_IDR,
    stops: "Rice terrace, Ulun Petanu waterfall, Gunung Kawi Tampaksiring, Bali Umah Kuno, Monkey Forest / Monkey River",
    blurb: "The entry Bali scooter tour from Ubud — temples, a rice terrace, and Monkey Forest on public roads.",
  },
  {
    name: "Ubud Waterfall Trip",
    priceIdr: MOTORBIKE_WATERFALL_IDR,
    listPriceIdr: MOTORBIKE_WATERFALL_LIST_IDR,
    stops: "Kanto Lampo, Tibumana, Suwat, Tukad Cepung, Tegenungan",
    blurb: "A waterfall scooter day from Ubud — five falls, tickets paid on site, not a private-car circuit.",
  },
  {
    name: "Kintamani Traveling Trip",
    priceIdr: MOTORBIKE_KINTAMANI_IDR,
    listPriceIdr: MOTORBIKE_KINTAMANI_LIST_IDR,
    stops: "Sunrise peak view, Pura Jati Segara, optional hot spring, Penglipuran Village, Tukad Cepung",
    blurb: "A public-road Kintamani scooter day — crater views, not the private Batur jeep and not a dirt-bike enduro.",
  },
  {
    name: "South Bali Traveling Trip",
    priceIdr: MOTORBIKE_SOUTH_IDR,
    listPriceIdr: MOTORBIKE_SOUTH_LIST_IDR,
    stops: "Tanah Lot, Uluwatu, GWK, Melasti Beach, optional Kedonganan seafood sunset dinner",
    blurb: "A South Bali scooter day — cliff temples and Melasti, dinner optional and paid separately.",
  },
  {
    name: "North Bali Traveling Trip",
    priceIdr: MOTORBIKE_NORTH_IDR,
    listPriceIdr: MOTORBIKE_NORTH_LIST_IDR,
    stops: "Sangeh Monkey Sanctuary, Leke-Leke Waterfall, Beratan Lake & Temple, Jatiluwih",
    blurb: "A North Bali scooter day — Beratan lake temple and Jatiluwih, the longest western loop.",
  },
  {
    name: "East Bali Traveling Trip",
    priceIdr: MOTORBIKE_EAST_IDR,
    listPriceIdr: MOTORBIKE_EAST_LIST_IDR,
    stops: "Tukad Cepung Waterfall, Besakih, Tirta Gangga, Taman Ujung, Virgin Beach",
    blurb: "The East Bali scooter day — Besakih, water palaces, and Virgin Beach. Highest published rate.",
  },
] as const
