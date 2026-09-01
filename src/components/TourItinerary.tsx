import { Check } from "lucide-react"
import type { TourItineraryItem } from "@/data/tours"

type Props = {
  items: TourItineraryItem[]
}

export default function TourItinerary({ items }: Props) {
  if (!items.length) return null

  return (
    <section className="space-y-8">
      <div>
        <p className="text-brand-green-light font-semibold tracking-[0.15em] uppercase text-sm mb-2">
          Day plan
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-green uppercase">
          Tour Itinerary
        </h2>
      </div>

      <ol className="space-y-0">
        {items.map((item, index) => (
          <li key={item.id} className="relative flex gap-5 md:gap-6 pb-8 last:pb-0">
            {index < items.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-brand-green/15"
              />
            )}

            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-sand text-sm font-bold shadow-sm">
              {index + 1}
            </div>

            <div className="min-w-0 flex-1 rounded-2xl border border-brand-green/10 bg-white p-5 md:p-6 shadow-sm">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-sand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-green">
                  {item.time}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-brand-green font-display uppercase leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-brand-green-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="text-sm text-brand-green-light leading-relaxed rounded-2xl border border-brand-green/10 bg-white/70 px-5 py-4">
        The itinerary may sometimes change due to field conditions, weather, or village activities. We always adjust to make sure you still have the best and safest experience.
      </p>
    </section>
  )
}

export function TourIncludedLists({
  included,
  notIncluded,
}: {
  included: string[]
  notIncluded: string[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-brand-green/10 bg-white p-6 shadow-sm">
        <h3 className="font-display text-xl font-bold text-brand-green uppercase mb-4">Included</h3>
        <ul className="space-y-3">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-brand-green-light">
              <Check className="w-4 h-4 text-accent-gold-dark shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {notIncluded.length > 0 && (
        <div className="rounded-2xl border border-brand-green/10 bg-white p-6 shadow-sm">
          <h3 className="font-display text-xl font-bold text-brand-green uppercase mb-4">Not Included</h3>
          <ul className="space-y-3">
            {notIncluded.map((item) => (
              <li key={item} className="text-sm text-brand-green-light leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
