import { Car } from "lucide-react"
import {
  SWING_HEAVEN_SHUTTLE_FEE_IDR,
  SWING_HEAVEN_SHUTTLE_MUST_LABEL,
  SWING_HEAVEN_SHUTTLE_MUST_SUBLINE,
  SWING_HEAVEN_SHUTTLE_SOUTH_FEE_IDR,
} from "@/data/swingHeaven"
import {
  ALOHA_SHUTTLE_FEE_IDR,
  ALOHA_SHUTTLE_MUST_LABEL,
  ALOHA_SHUTTLE_MUST_SUBLINE,
  ALOHA_SHUTTLE_SOUTH_FEE_IDR,
  ALOHA_UBUD_SWING_VENUE,
} from "@/data/alohaUbudSwing"

type RequiredShuttleMustLabelProps = {
  compact?: boolean
  className?: string
  /** Defaults to Swing Heaven Bongkasa copy. */
  variant?: "swing-heaven" | "aloha-ubud-swing"
}

/**
 * Big guest-facing banner: required shuttle must be included.
 */
export default function SwingHeavenShuttleMustLabel({
  compact = false,
  className = "",
  variant = "swing-heaven",
}: RequiredShuttleMustLabelProps) {
  const isAloha = variant === "aloha-ubud-swing"
  const ubudFee = isAloha ? ALOHA_SHUTTLE_FEE_IDR : SWING_HEAVEN_SHUTTLE_FEE_IDR
  const southFee = isAloha ? ALOHA_SHUTTLE_SOUTH_FEE_IDR : SWING_HEAVEN_SHUTTLE_SOUTH_FEE_IDR
  const ubudK = Math.round(ubudFee / 1000)
  const southK = Math.round(southFee / 1000)
  const mustLabel = isAloha ? ALOHA_SHUTTLE_MUST_LABEL : SWING_HEAVEN_SHUTTLE_MUST_LABEL
  const mustSubline = isAloha ? ALOHA_SHUTTLE_MUST_SUBLINE : SWING_HEAVEN_SHUTTLE_MUST_SUBLINE
  const selfMeetPlace = isAloha ? ALOHA_UBUD_SWING_VENUE.area.split(" / ")[0] : "Bongkasa"
  const ariaName = isAloha ? "Aloha Ubud Swing" : "Swing Heaven"

  return (
    <aside
      className={`rounded-2xl border-2 border-accent-gold bg-accent-gold/15 ${compact ? "p-3" : "p-4 md:p-5"} ${className}`}
      role="note"
      aria-label={`${ariaName} required shuttle must be included`}
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
        {mustLabel}
      </p>
      <p
        className={`font-semibold text-brand-green leading-snug ${
          compact ? "mt-1 text-sm" : "mt-2 text-base"
        }`}
      >
        {mustSubline}
      </p>
      <p
        className={`text-brand-green-light leading-relaxed ${
          compact ? "mt-1 text-xs" : "mt-2 text-sm"
        }`}
      >
        IDR {ubudK},000 from Ubud, or IDR {southK},000 from the south coast (Canggu, Kuta, Seminyak,
        Sanur, Nusa Dua, and nearby). Self-meet at {selfMeetPlace} is not offered.
      </p>
    </aside>
  )
}
