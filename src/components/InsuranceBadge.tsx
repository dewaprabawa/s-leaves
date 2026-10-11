import { ShieldCheck } from "lucide-react"

/** Tours whose published inclusions list activity insurance for ages 6–65. */
const INSURED_TOUR_SLUGS = new Set([
  "bali-atv-adventure",
  "atv-rafting-combo",
  "whitewater-rafting",
  "batur-sunrise-jeep-tour",
])

export const INSURANCE_AGES = "6–65"

export function isInsuredTour(slug: string) {
  return INSURED_TOUR_SLUGS.has(slug)
}

type InsuranceBadgeVariant = "hero" | "card" | "inline"

type InsuranceBadgeProps = {
  variant?: InsuranceBadgeVariant
  className?: string
}

/** "Insurance included" label for ATV, rafting, and private Batur jeep pages and cards. */
export default function InsuranceBadge({ variant = "inline", className = "" }: InsuranceBadgeProps) {
  const label = `Insurance included · ages ${INSURANCE_AGES}`

  if (variant === "hero") {
    return (
      <div
        className={`absolute bottom-2 left-2 z-10 inline-flex items-center gap-1 rounded-md bg-brand-green/95 px-2 py-1 text-[9px] font-black uppercase tracking-wide text-sand shadow-md ring-1 ring-white/60 ${className}`}
      >
        <ShieldCheck className="h-3 w-3" aria-hidden />
        {label}
      </div>
    )
  }

  if (variant === "card") {
    return (
      <div
        className={`absolute bottom-2 left-2 z-10 inline-flex items-center gap-1 rounded-md bg-brand-green/95 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wide text-sand shadow-sm ${className}`}
      >
        <ShieldCheck className="h-2.5 w-2.5" aria-hidden />
        Insured {INSURANCE_AGES}
      </div>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-brand-green px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-sand shadow-sm ${className}`}
    >
      <ShieldCheck className="h-3 w-3" aria-hidden />
      {label}
    </span>
  )
}
