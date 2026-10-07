import { Car } from "lucide-react"
import {
  SWING_HEAVEN_SHUTTLE_FEE_IDR,
  SWING_HEAVEN_SHUTTLE_MUST_LABEL,
  SWING_HEAVEN_SHUTTLE_MUST_SUBLINE,
} from "@/data/swingHeaven"

type SwingHeavenShuttleMustLabelProps = {
  compact?: boolean
  className?: string
}

/**
 * Big guest-facing banner: Swing Heaven shuttle is mandatory (must include).
 */
export default function SwingHeavenShuttleMustLabel({
  compact = false,
  className = "",
}: SwingHeavenShuttleMustLabelProps) {
  const feeK = Math.round(SWING_HEAVEN_SHUTTLE_FEE_IDR / 1000)
  return (
    <aside
      className={`rounded-2xl border-2 border-accent-gold bg-accent-gold/15 ${compact ? "p-3" : "p-4 md:p-5"} ${className}`}
      role="note"
      aria-label="Swing Heaven required shuttle must be included"
    >
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-accent-gold-dark">
        Must include
      </p>
      <p
        className={`flex items-center gap-2 font-black uppercase tracking-wide text-brand-green leading-tight ${
          compact ? "mt-1 text-lg" : "mt-1.5 text-2xl md:text-3xl"
        }`}
      >
        <Car className={compact ? "h-5 w-5 shrink-0" : "h-7 w-7 shrink-0"} aria-hidden />
        {SWING_HEAVEN_SHUTTLE_MUST_LABEL}
      </p>
      <p
        className={`font-semibold text-brand-green leading-snug ${
          compact ? "mt-1 text-sm" : "mt-2 text-base"
        }`}
      >
        {SWING_HEAVEN_SHUTTLE_MUST_SUBLINE}
      </p>
      <p
        className={`text-brand-green-light leading-relaxed ${
          compact ? "mt-1 text-xs" : "mt-2 text-sm"
        }`}
      >
        Flat IDR {feeK},000 once per booking (Ubud and outside). Self-meet at Bongkasa is not
        offered.
      </p>
    </aside>
  )
}
