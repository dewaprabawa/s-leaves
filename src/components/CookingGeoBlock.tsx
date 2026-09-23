import Link from 'next/link'
import {
  COOKING_GEO_FAQS,
  COOKING_GEO_TLDR,
  COOKING_GEO_UPDATED,
  COOKING_PRICE_ROWS,
} from '@/data/cookingGeo'
import { getQueryAliasLine } from '@/data/activityKeywords'

/** Answer-first SSR block for cooking-class GEO / AI citability */
export default function CookingGeoBlock() {
  return (
    <section
      id="cooking-geo"
      aria-labelledby="cooking-geo-heading"
      className="rounded-3xl border border-brand-green/10 bg-white p-6 md:p-8 shadow-sm space-y-8"
    >
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-gold-dark mb-2">
          Quick answer · Updated {COOKING_GEO_UPDATED}
        </p>
        <h2
          id="cooking-geo-heading"
          className="font-display text-2xl md:text-3xl font-bold text-brand-green uppercase leading-tight mb-3"
        >
          Cooking class Ubud — facts AI can cite
        </h2>
        <p className="geo-tldr cooking-geo-tldr text-brand-green-light leading-relaxed">
          {COOKING_GEO_TLDR}
        </p>
        <p className="mt-3 text-xs text-brand-green-light/80 leading-relaxed">
          <span className="font-semibold text-brand-green">Travelers also search: </span>
          {getQueryAliasLine('balinese-cooking-class')}
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
              {COOKING_PRICE_ROWS.map((row) => (
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
        {COOKING_GEO_FAQS.map((item) => (
          <article
            key={item.q}
            className="geo-answer-block cooking-geo-answer rounded-2xl border border-brand-green/10 bg-sand/40 p-5"
          >
            <h3 className="font-bold text-brand-green mb-2 text-base leading-snug">{item.q}</h3>
            <p className="text-sm text-brand-green-light leading-relaxed">{item.a}</p>
          </article>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <Link
          href="/book?activity=balinese-cooking-class"
          className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-green-light transition-colors"
        >
          Book Tumang cooking
        </Link>
        <Link
          href="/tours/ubud-ricefield-cycling-tour"
          className="inline-flex items-center justify-center rounded-full border border-brand-green/20 px-5 py-2.5 text-sm font-semibold text-brand-green hover:bg-brand-green/5 transition-colors"
        >
          Pair with Pejeng cycling
        </Link>
      </div>

      <p className="text-sm text-brand-green-light">
        Same-day culture combo:{' '}
        <Link
          href="/book?activity=combo-cycling-cooking"
          className="font-semibold text-brand-green underline underline-offset-2 hover:text-brand-green-light"
        >
          cycling + cooking
        </Link>
        . Operator site:{' '}
        <a
          href="https://tumangbaliclass.com/balinese-cooking-class-ubud"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-green underline underline-offset-2 hover:text-brand-green-light"
        >
          tumangbaliclass.com
        </a>
        . Reviews:{' '}
        <a
          href="https://www.tripadvisor.com/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-green underline underline-offset-2 hover:text-brand-green-light"
        >
          TripAdvisor Traveler’s Choice 2026
        </a>
        .
      </p>
    </section>
  )
}
