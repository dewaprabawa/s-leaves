export const ACTIVITY_TO_TOUR_SLUG: Record<string, string> = {
  "single-atv": "bali-atv-adventure",
  "tandem-atv": "bali-atv-adventure",
  rafting: "whitewater-rafting",
  "canyon-tubing": "canyon-tubing",
  cycling: "ubud-ricefield-cycling-tour",
}

export function getTourSlugForActivity(activityId: string): string | undefined {
  return ACTIVITY_TO_TOUR_SLUG[activityId]
}
