import Link from "next/link"
import { Car, Check } from "lucide-react"
import {
  PRIVATE_SHUTTLE_ADDONS,
  PRIVATE_SHUTTLE_ARTICLE_SLUG,
  PRIVATE_SHUTTLE_OWN_DRIVER,
  PRIVATE_SHUTTLE_POINTS,
  privateShuttlePriceLine,
  type PrivateShuttleMode,
} from "@/data/privateShuttle"

type PrivateShuttleNoteProps = {
  mode: PrivateShuttleMode
  compact?: boolean
  className?: string
}

/** Explains the private shuttle: driver waits during the activity, so guests skip Grab / Gojek both ways. */
export default function PrivateShuttleNote({ mode, compact = false, className = "" }: PrivateShuttleNoteProps) {
  const showAddons = mode !== "included"

  return (
    <aside
      className={`rounded-2xl border border-brand-green/15 bg-white ${compact ? "p-3" : "p-4 md:p-5"} ${className}`}
      role="note"
      aria-label="Private shuttle — your driver waits for you"
    >
      <p className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-brand-green">
        <Car className="h-3.5 w-3.5" aria-hidden />
        Private shuttle
      </p>
      <p className={`font-bold text-brand-green leading-snug ${compact ? "mt-1 text-sm" : "mt-1.5 text-base"}`}>
        Your driver waits for you — no Grab needed.
      </p>
      <ul className={`space-y-1 text-brand-green-light ${compact ? "mt-2 text-xs" : "mt-2 text-sm"}`}>
        {PRIVATE_SHUTTLE_POINTS.map((point) => (
          <li key={point} className="flex items-start gap-1.5">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-gold-dark" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {showAddons ? (
        <ul className={`space-y-2 ${compact ? "mt-2" : "mt-3"}`} aria-label="Private shuttle options">
          {PRIVATE_SHUTTLE_ADDONS.map((addon) => (
            <li
              key={addon.key}
              className="rounded-xl border border-brand-green/10 bg-sand/50 px-3 py-2.5"
            >
              <p className={`font-bold text-brand-green leading-snug ${compact ? "text-xs" : "text-sm"}`}>
                {addon.title} · {addon.priceLabel}
              </p>
              <p className={`mt-0.5 text-brand-green-light leading-relaxed ${compact ? "text-[11px]" : "text-xs"}`}>
                {addon.body}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={`font-semibold text-brand-green ${compact ? "mt-2 text-xs" : "mt-3 text-sm"}`}>
          {privateShuttlePriceLine(mode)}
        </p>
      )}

      {mode === "required" ? (
        <p className={`font-semibold text-brand-green ${compact ? "mt-2 text-xs" : "mt-2 text-sm"}`}>
          Required for this activity — no self-meet.
        </p>
      ) : null}

      {mode === "optional" ? (
        <p className={`text-brand-green-light ${compact ? "mt-2 text-xs" : "mt-2 text-sm"}`}>
          {PRIVATE_SHUTTLE_OWN_DRIVER}
        </p>
      ) : null}
      <Link
        href={`/blog/${PRIVATE_SHUTTLE_ARTICLE_SLUG}`}
        className={`mt-2 inline-block font-bold text-brand-green underline-offset-2 hover:underline ${compact ? "text-xs" : "text-sm"}`}
      >
        Private shuttle vs Grab — how it works
      </Link>
    </aside>
  )
}
