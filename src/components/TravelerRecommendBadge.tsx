export const TRAVELER_RECOMMEND_PERCENT = 96

type BadgeVariant = "hero" | "card" | "inline"

type TravelerRecommendBadgeProps = {
  percent?: number
  variant?: BadgeVariant
  className?: string
}

/** Gold "Most picked" label on ATV, UTV, and the Kintamani dirt bike. */
export default function TravelerRecommendBadge({
  variant = "inline",
  className = "",
}: TravelerRecommendBadgeProps) {
  const label = "Most picked"

  if (variant === "hero" || variant === "card") {
    return (
      <span
        className={`absolute left-3 top-3 z-10 bg-accent-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md ${className}`}
        role="status"
      >
        {label}
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center rounded-full bg-accent-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${className}`}
      role="status"
    >
      {label}
    </span>
  )
}
