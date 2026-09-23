/** Shared card + detail hero URL. Prefer the static catalog JPEG over CMS media. */
export function getTourImageUrl(tour: {
  heroImage?: { url?: string }
  media?: { heroImage?: { url?: string } }
}): string {
  return tour.heroImage?.url || tour.media?.heroImage?.url || ""
}

export function getTourImageAlt(
  tour: { title?: string; heroImage?: { alt?: string } },
  fallback = "Bali activity",
): string {
  return tour.heroImage?.alt || tour.title || fallback
}
