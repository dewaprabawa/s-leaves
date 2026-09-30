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
        className={`absolute left-3 top-3 z-10 max-w-[min(100%,18rem)] rounded-2xl bg-accent-gold px-3 py-2 text-white shadow-lg ring-2 ring-white/80 ${className}`}
        role="status"
      >
        <StarRow size="h-3.5 w-3.5" />
        <p className="mt-1 text-[11px] font-black uppercase leading-tight tracking-wide">
          {label}
        </p>
      </div>
    )
  }

  if (variant === "card") {
    return (
      <div
        className={`absolute left-2.5 top-2.5 z-10 max-w-[11.5rem] rounded-xl bg-accent-gold px-2 py-1.5 text-white shadow-md ${className}`}
        role="status"
      >
        <StarRow size="h-3 w-3" />
        <p className="mt-0.5 text-[9px] font-black uppercase leading-tight tracking-wide">
          {label}
        </p>
      </div>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-accent-gold px-3 py-1 text-[11px] font-black uppercase tracking-wide text-white shadow-sm ${className}`}
      role="status"
    >
      <StarRow size="h-3 w-3" />
      {label}
    </span>
  )
}
