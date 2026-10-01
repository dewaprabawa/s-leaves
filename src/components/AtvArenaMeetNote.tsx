import { MapPin } from "lucide-react"
import { ACTIVITY_BASE, CORPORATE_OFFICE } from "@/lib/locations"

export const ATV_ARENA_TOUR_SLUGS = new Set([
  "bali-atv-adventure",
  "atv-rafting-combo",
])

export function isAtvArenaTour(slug: string) {
  return ATV_ARENA_TOUR_SLUGS.has(slug)
}

type AtvArenaMeetNoteProps = {
  compact?: boolean
  className?: string
}

/**
 * Guest-facing warning: ATV starts at All New Bali Adventure, not the office.
 */
export default function AtvArenaMeetNote({
  compact = false,
  className = "",
}: AtvArenaMeetNoteProps) {
  return (
    <aside
      className={`rounded-2xl border-2 border-accent-gold bg-accent-gold/10 ${compact ? "p-3" : "p-4 md:p-5"} ${className}`}
      role="note"
      aria-label="ATV meet point is All New Bali Adventure, not the office"
    >
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-accent-gold-dark">
        Meet here — not the office
      </p>
      <p className={`font-bold text-brand-green leading-snug ${compact ? "mt-1 text-sm" : "mt-1.5 text-base"}`}>
        The ATV arena is All New Bali Adventure in Sedang.
      </p>
      <p className={`text-brand-green-light leading-relaxed ${compact ? "mt-1 text-xs" : "mt-2 text-sm"}`}>
        Self-meet at <strong className="text-brand-green">{ACTIVITY_BASE.formatted}</strong>. Do{" "}
        <strong className="text-brand-green">not</strong> go to the office at{" "}
        {CORPORATE_OFFICE.formatted} — that pin is Google Business / admin only. There is no ATV
        track there. Hotel pickup is IDR 400,000, or open the arena map.
      </p>
      <a
        href={ACTIVITY_BASE.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 font-bold text-brand-green underline-offset-2 hover:underline ${compact ? "mt-2 text-xs" : "mt-3 text-sm"}`}
      >
        <MapPin className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        Open All New Bali Adventure pin
      </a>
    </aside>
  )
}
