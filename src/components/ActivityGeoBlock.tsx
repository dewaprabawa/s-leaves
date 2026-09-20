import Link from 'next/link'
import {
  ACTIVITY_GEO_UPDATED,
  getActivityGeo,
} from '@/data/activityGeo'

type Props = {
  slug: string
}

/** Answer-first SSR block for activity GEO / AI citability + booking CTA */
export default function ActivityGeoBlock({ slug }: Props) {
  const geo = getActivityGeo(slug)
  if (!geo) return null

  return (
    <section
      id={`${slug}-geo`}
      aria-labelledby={`${slug}-geo-heading`}
      className="rounded-3xl border border-brand-green/10 bg-white p-6 md:p-8 shadow-sm space-y-8"
    >
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-gold-dark mb-2">
          Quick answer · Updated {ACTIVITY_GEO_UPDATED}
        </p>
        <h2
          id={`${slug}-geo-heading`}
          className="font-display text-2xl md:text-3xl font-bold text-brand-green uppercase leading-tight mb-3"
        >
          {geo.heading}
        </h2>
        <p className="geo-tldr activity-geo-tldr text-brand-green-light leading-relaxed">
          {geo.tldr}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-brand-green/10">
        <div className="px-4 py-3 bg-brand-green/5 border-b border-brand-green/10">
          <h3 className="font-display text-sm font-bold text-brand-green uppercase tracking-wider">
            2026 prices (IDR)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-brand-green/10 text-brand-green-light">
                <th className="px-4 py-2.5 font-semibold">Option</th>
                <th className="px-4 py-2.5 font-semibold">Price</th>
                <th className="px-4 py-2.5 font-semibold hidden sm:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {geo.priceRows.map((row) => (
                <tr key={row.option} className="border-b border-brand-green/5 last:border-0">
                  <td className="px-4 py-2.5 font-semibold text-brand-green">{row.option}</td>
                  <td className="px-4 py-2.5 text-brand-green whitespace-nowrap">{row.price}</td>
                  <td className="px-4 py-2.5 text-brand-green-light hidden sm:table-cell">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {geo.faqs.map((item) => (
          <article
            key={item.q}
            className="geo-answer-block activity-geo-answer rounded-2xl border border-brand-green/10 bg-sand/40 p-5"
          >
            <h3 className="font-bold text-brand-green mb-2 text-base leading-snug">{item.q}</h3>
            <p className="text-sm text-brand-green-light leading-relaxed">{item.a}</p>
          </article>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <Link
          href={geo.bookHref}
          className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-green-light transition-colors"
        >
          {geo.bookLabel}
        </Link>
        {geo.pairHref && geo.pairLabel ? (
          <Link
            href={geo.pairHref}
            className="inline-flex items-center justify-center rounded-full border border-brand-green/20 px-5 py-2.5 text-sm font-semibold text-brand-green hover:bg-brand-green/5 transition-colors"
          >
            {geo.pairLabel}
          </Link>
        ) : null}
      </div>

      {geo.extraNote ? (
        <p className="text-sm text-brand-green-light">{geo.extraNote}</p>
      ) : null}
    </section>
  )
}
