/** Guided Bali motorbike / scooter traveling trip — operated, not an imported ticket. */
export const MOTORBIKE_TRIP_SLUG = "bali-motorbike-traveling-trip"

export const MOTORBIKE_UBUD_IDR = 450_000
export const MOTORBIKE_WATERFALL_IDR = 500_000
export const MOTORBIKE_KINTAMANI_IDR = 600_000
export const MOTORBIKE_SOUTH_IDR = 650_000
export const MOTORBIKE_NORTH_IDR = 750_000
export const MOTORBIKE_EAST_IDR = 800_000

export const MOTORBIKE_ENGINE = "125–160cc automatic"
export const MOTORBIKE_DURATION = "Full Day (approx. 8–10 Hours)"
export const MOTORBIKE_PICKUP = "Pickup at your chosen area"
export const MOTORBIKE_AREA = "Ubud · Kintamani · North · South · East Bali"

export const MOTORBIKE_DESTINATIONS = [
  {
    name: "Ubud Traveling Trip",
    priceIdr: MOTORBIKE_UBUD_IDR,
    stops: "Rice terrace, Ulun Petanu waterfall, Gunung Kawi Tampaksiring, Bali Umah Kuno, Monkey Forest / Monkey River",
    blurb: "The entry Bali scooter tour from Ubud — temples, a rice terrace, and Monkey Forest on public roads.",
  },
  {
    name: "Ubud Waterfall Trip",
    priceIdr: MOTORBIKE_WATERFALL_IDR,
    stops: "Kanto Lampo, Tibumana, Suwat, Tukad Cepung, Tegenungan",
    blurb: "A waterfall scooter day from Ubud — five falls, tickets paid on site, not a private-car circuit.",
  },
  {
    name: "Kintamani Traveling Trip",
    priceIdr: MOTORBIKE_KINTAMANI_IDR,
    stops: "Sunrise peak view, Pura Jati Segara, optional hot spring, Penglipuran Village, Tukad Cepung",
    blurb: "A public-road Kintamani scooter day — crater views, not the private Batur jeep and not a dirt-bike enduro.",
  },
  {
    name: "South Bali Traveling Trip",
    priceIdr: MOTORBIKE_SOUTH_IDR,
    stops: "Tanah Lot, Uluwatu, GWK, Melasti Beach, optional Kedonganan seafood sunset dinner",
    blurb: "A South Bali scooter day — cliff temples and Melasti, dinner optional and paid separately.",
  },
  {
    name: "North Bali Traveling Trip",
    priceIdr: MOTORBIKE_NORTH_IDR,
    stops: "Sangeh Monkey Sanctuary, Leke-Leke Waterfall, Beratan Lake & Temple, Jatiluwih",
    blurb: "A North Bali scooter day — Beratan lake temple and Jatiluwih, the longest western loop.",
  },
  {
    name: "East Bali Traveling Trip",
    priceIdr: MOTORBIKE_EAST_IDR,
    stops: "Tukad Cepung Waterfall, Besakih, Tirta Gangga, Taman Ujung, Virgin Beach",
    blurb: "The East Bali scooter day — Besakih, water palaces, and Virgin Beach. Highest published rate.",
  },
] as const
