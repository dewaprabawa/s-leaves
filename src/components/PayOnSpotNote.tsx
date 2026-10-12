import { CreditCard } from "lucide-react"
import {
  PAY_ON_SPOT_CARD_SURCHARGE_PERCENT,
  PAY_ON_SPOT_METHODS,
} from "@/data/payOnSpot"

type PayOnSpotNoteProps = {
  variant?: "inline" | "note"
  compact?: boolean
  className?: string
}

/** "Pay on the spot" label for activities guests can settle at the venue (cash, QRIS, or card). */
export default function PayOnSpotNote({
  variant = "note",
  compact = false,
  className = "",
}: PayOnSpotNoteProps) {
  if (variant === "inline") {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full bg-accent-gold px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-white shadow-sm ${className}`}
      >
        <CreditCard className="h-3 w-3" aria-hidden />
        Pay on the spot · cards OK
      </span>
    )
  }

  return (
    <aside
      className={`rounded-2xl border border-brand-green/15 bg-sand/60 ${compact ? "p-3" : "p-4 md:p-5"} ${className}`}
      role="note"
      aria-label="Pay on the spot at the venue"
    >
      <p className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-brand-green">
        <CreditCard className="h-3.5 w-3.5" aria-hidden />
        Pay on the spot
      </p>
      <p className={`font-bold text-brand-green leading-snug ${compact ? "mt-1 text-sm" : "mt-1.5 text-base"}`}>
        Pay at the venue when you arrive.
      </p>
      <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Accepted payment methods">
        {PAY_ON_SPOT_METHODS.map((method) => (
          <li
            key={method}
            className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-brand-green ring-1 ring-brand-green/15"
          >
            {method}
          </li>
        ))}
      </ul>
      <p className={`text-brand-green-light leading-relaxed ${compact ? "mt-2 text-xs" : "mt-2 text-sm"}`}>
        Card payments add a {PAY_ON_SPOT_CARD_SURCHARGE_PERCENT}% surcharge. We never ask for card
        numbers on the website or WhatsApp.
      </p>
    </aside>
  )
}
