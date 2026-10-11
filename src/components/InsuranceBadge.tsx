import { ShieldCheck } from "lucide-react"

/** Tours whose published inclusions list insurance → covered ages, or null when the inclusion gives no age range. */
const INSURED_TOURS: Record<string, string | null> = {
  "bali-atv-adventure": "6–65",
  "atv-rafting-combo": "6–65",
  "whitewater-rafting": "6–65",
  "batur-sunrise-jeep-tour": "6–65",
  "canyon-tubing": "6–65",
  "utv-buggy-bali-adventure": null,
  "dirt-bike-kintamani-black-lava": null,
}

export function isInsuredTour(slug: string) {
  return slug in INSURED_TOURS
}

type InsuranceBadgeVariant = "hero" | "card" | "inline"

type InsuranceBadgeProps = {
  slug: string
  variant?: InsuranceBadgeVariant
  className?: string
}

/** "Insurance included" label for tours whose inclusions list insurance. */
export default function InsuranceBadge({ slug, variant = "inline", className = "" }: InsuranceBadgeProps) {
  const ages = INSURED_TOURS[slug]
  const label = ages ? `Insurance included · ages ${ages}` : "Insurance included"

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
        {ages ? `Insured ${ages}` : "Insured"}
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
