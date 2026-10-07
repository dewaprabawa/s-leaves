import { Star } from "lucide-react"

export const TRAVELER_RECOMMEND_PERCENT = 96

type BadgeVariant = "hero" | "card" | "inline"

type TravelerRecommendBadgeProps = {
  percent?: number
  variant?: BadgeVariant
  className?: string
}

function StarRow({ size }: { size: string }) {
  return (
    <span className="inline-flex items-center" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`${size} fill-current`} />
      ))}
    </span>
  )
}

/**
 * Star social-proof badge for ATV and UTV buggy money pages / cards.
 * Hero/card overlays stay compact so they do not block the photo.
 */
export default function TravelerRecommendBadge({
  percent = TRAVELER_RECOMMEND_PERCENT,
  variant = "inline",
  className = "",
}: TravelerRecommendBadgeProps) {
  const label = `Recommended by ${percent}% of travelers`

  if (variant === "hero") {
    return (
      <div
        className={`absolute left-2 top-2 z-10 max-w-[9.5rem] rounded-md bg-accent-gold/95 px-1.5 py-1 text-white shadow-md ring-1 ring-white/70 ${className}`}
        role="status"
      >
        <StarRow size="h-2.5 w-2.5" />
        <p className="mt-0.5 text-[8px] font-black uppercase leading-snug tracking-wide">
          {label}
        </p>
      </div>
    )
  }

  if (variant === "card") {
    return (
      <div
        className={`absolute left-2 top-2 z-10 max-w-[8rem] rounded-md bg-accent-gold/95 px-1.5 py-1 text-white shadow-sm ${className}`}
        role="status"
      >
        <StarRow size="h-2 w-2" />
        <p className="mt-0.5 text-[7px] font-black uppercase leading-snug tracking-wide">
          {label}
        </p>
      </div>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-accent-gold px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white shadow-sm ${className}`}
      role="status"
    >
      <StarRow size="h-2.5 w-2.5" />
      {label}
    </span>
  )
}
