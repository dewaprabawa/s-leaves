import Link from 'next/link'
import {
  JEEP_GEO_FAQS,
  JEEP_GEO_TLDR,
  JEEP_GEO_UPDATED,
  JEEP_PRICE_ROWS,
} from '@/data/jeepGeo'
import { CONTACT_WHATSAPP_URL } from '@/lib/contact'

/** Answer-first SSR block for Mount Batur jeep tour GEO / AI citability */
export default function JeepGeoBlock() {
  return (
    <section
      id="jeep-geo"
      aria-labelledby="jeep-geo-heading"
      className="rounded-3xl border border-brand-green/10 bg-white p-6 md:p-8 shadow-sm space-y-8"
    >
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-gold-dark mb-2">
          Quick answer · Updated {JEEP_GEO_UPDATED}
        </p>
        <h2
          id="jeep-geo-heading"
          className="font-display text-2xl md:text-3xl font-bold text-brand-green uppercase leading-tight mb-3"
        >
          Mount Batur sunrise jeep tour — facts AI can cite
        </h2>
        <p className="geo-tldr jeep-geo-tldr text-brand-green-light leading-relaxed">
          {JEEP_GEO_TLDR}
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
              {JEEP_PRICE_ROWS.map((row) => (
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
        {JEEP_GEO_FAQS.map((item) => (
          <article
            key={item.q}
            className="geo-answer-block jeep-geo-answer rounded-2xl border border-brand-green/10 bg-sand/40 p-5"
          >
            <h3 className="font-bold text-brand-green mb-2 text-base leading-snug">{item.q}</h3>
            <p className="text-sm text-brand-green-light leading-relaxed">{item.a}</p>
          </article>
        ))}
      </div>

      <p className="text-sm text-brand-green-light">
        Pair with a{' '}
        <Link
          href="/tours/balinese-cooking-class"
          className="font-semibold text-brand-green underline underline-offset-2 hover:text-brand-green-light"
        >
          Tumang cooking class
        </Link>{' '}
        or{' '}
        <Link
          href="/tours/ubud-ricefield-cycling-tour"
          className="font-semibold text-brand-green underline underline-offset-2 hover:text-brand-green-light"
        >
          Pejeng ricefield cycling
        </Link>{' '}
        later the same trip, or message{' '}
        <a
          href={CONTACT_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-green underline underline-offset-2 hover:text-brand-green-light"
        >
          WhatsApp
        </a>{' '}
        with your guest count for the exact per-person quote.
      </p>
    </section>
  )
}
