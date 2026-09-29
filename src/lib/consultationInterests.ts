export type ConsultationInterest = {
  slug: string
  title: string
}

export const CONSULTATION_INTERESTS_KEY = "sekar_consultation_interests"
export const CONSULTATION_INTERESTS_EVENT = "consultation_interests_updated"
export const MAX_CONSULTATION_INTERESTS = 8

function isInterest(value: unknown): value is ConsultationInterest {
  if (!value || typeof value !== "object") return false
  const item = value as ConsultationInterest
  return typeof item.slug === "string" && item.slug.length > 0 && typeof item.title === "string"
}

export function parseConsultationInterests(raw: string | null): ConsultationInterest[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    const seen = new Set<string>()
    const items: ConsultationInterest[] = []
    for (const entry of parsed) {
      if (!isInterest(entry) || seen.has(entry.slug)) continue
      seen.add(entry.slug)
      items.push({ slug: entry.slug, title: entry.title.trim() || entry.slug })
      if (items.length >= MAX_CONSULTATION_INTERESTS) break
    }
    return items
  } catch {
    return []
  }
}

export function toggleConsultationInterestInList(
  items: ConsultationInterest[],
  next: ConsultationInterest,
): ConsultationInterest[] {
  const exists = items.some((item) => item.slug === next.slug)
  if (exists) {
    return items.filter((item) => item.slug !== next.slug)
  }
  if (items.length >= MAX_CONSULTATION_INTERESTS) {
    return items
  }
  return [...items, { slug: next.slug, title: next.title.trim() || next.slug }]
}
