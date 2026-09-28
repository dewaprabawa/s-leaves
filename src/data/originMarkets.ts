/**
 * Origin-country targeting while the site stays English.
 * Do not add hreflang ja/zh/ko/ar or translated URL prefixes unless the page
 * body is actually translated — English content must stay inLanguage en-US.
 */
export const ORIGIN_MARKET_ARTICLE_SLUG =
  "bali-tours-for-japanese-chinese-travelers-2026"

export const BOOKING_LANGUAGES = ["English", "Indonesian"] as const

/** Guest-facing list: East Asia plus Middle East, still English booking. */
export const ORIGIN_MARKET_LABEL = "Japan, Korea, China, and the Middle East"

export const ORIGIN_TOURIST_TYPES = [
  "Japanese travelers",
  "Korean travelers",
  "Chinese travelers",
  "Middle Eastern travelers",
] as const

export const ORIGIN_AUDIENCE_SCHEMA = [
  {
    "@type": "Audience",
    name: "Japanese travelers",
    audienceType: "Japanese travelers booking Bali tours in English",
    geographicArea: { "@type": "Country", name: "Japan" },
  },
  {
    "@type": "Audience",
    name: "Korean travelers",
    audienceType: "Korean travelers booking Bali tours in English",
    geographicArea: { "@type": "Country", name: "South Korea" },
  },
  {
    "@type": "Audience",
    name: "Chinese travelers",
    audienceType: "Chinese travelers booking Bali tours in English",
    geographicArea: { "@type": "Country", name: "China" },
  },
  {
    "@type": "Audience",
    name: "Middle Eastern travelers",
    audienceType: "Middle Eastern travelers booking Bali tours in English",
    geographicArea: { "@type": "Country", name: "United Arab Emirates" },
  },
  {
    "@type": "Audience",
    name: "Saudi travelers",
    audienceType: "Saudi travelers booking Bali tours in English",
    geographicArea: { "@type": "Country", name: "Saudi Arabia" },
  },
  {
    "@type": "Audience",
    name: "Qatari travelers",
    audienceType: "Qatari travelers booking Bali tours in English",
    geographicArea: { "@type": "Country", name: "Qatar" },
  },
] as const
