import Link from 'next/link'
import {
  GEO_COMPARISONS,
  GEO_FAQ_FOR_LLM,
  GEO_QUICK_ANSWER,
  GEO_TOUR_SUMMARIES,
  GEO_UPDATED,
} from '@/data/geoContent'

/** Show a curated subset on the homepage; full set remains in llms.txt */
const HOMEPAGE_GEO_FAQS = GEO_FAQ_FOR_LLM.slice(0, 8)

/** Answer-first SSR block for GEO / ChatGPT / Gemini citability */
export default function GeoAnswerBlock() {
  return (
    <section
      id="geo-answers"
      aria-labelledby="geo-answers-heading"
      className="py-16 md:py-20 px-6 lg:px-12 max-w-5xl mx-auto w-full"
    >
      <div className="text-center mb-10">
        <p className="text-brand-green-light font-semibold tracking-[0.15em] uppercase text-sm mb-3">
          Quick answers
        </p>
        <h2
          id="geo-answers-heading"
          className="font-display text-3xl md:text-4xl font-bold text-brand-green uppercase leading-tight mb-4"
        >
          Bali Adventure FAQ
        </h2>
        <p className="geo-tldr text-brand-green-light max-w-3xl mx-auto leading-relaxed">
          {GEO_QUICK_ANSWER}
        </p>
        <p className="text-xs text-brand-green-light/70 mt-3">Updated {GEO_UPDATED}</p>
      </div>

      <div className="mb-12 rounded-2xl border border-brand-green/10 bg-white overflow-hidden shadow-sm">
        <div className="px-5 py-4 bg-brand-green/5 border-b border-brand-green/10">
          <h3 className="font-display text-sm font-bold text-brand-green uppercase tracking-wider">
            Tour quick reference (2026)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-brand-green/10 text-brand-green-light">
                <th className="px-5 py-3 font-semibold">Tour</th>
                <th className="px-5 py-3 font-semibold">Price</th>
                <th className="px-5 py-3 font-semibold hidden sm:table-cell">Duration</th>
              </tr>
            </thead>
            <tbody>
              {GEO_TOUR_SUMMARIES.map((tour) => (
                <tr key={tour.slug} className="border-b border-brand-green/5 last:border-0">
                  <td className="px-5 py-3">
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="font-semibold text-brand-green hover:text-brand-green-light underline-offset-2 hover:underline"
                    >
                      {tour.name}
                    </Link>
                    <p className="text-xs text-brand-green-light mt-0.5 hidden md:block">{tour.summary}</p>
                  </td>
                  <td className="px-5 py-3 text-brand-green-light whitespace-nowrap">{tour.price}</td>
                  <td className="px-5 py-3 text-brand-green-light hidden sm:table-cell">{tour.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {HOMEPAGE_GEO_FAQS.map((item) => {
          const href = item.url.replace('https://www.sekarbaliactivity.com', '') || '/'
          return (
            <article
              key={item.q}
              className="geo-answer-block bg-white rounded-2xl border border-brand-green/10 p-6 shadow-sm"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-accent-gold-dark mb-2">
                {item.category}
              </p>
              <h3 className="font-bold text-brand-green mb-2 text-base leading-snug">{item.q}</h3>
              <p className="text-sm text-brand-green-light leading-relaxed mb-3">{item.a}</p>
              <Link
                href={href}
                className="text-xs font-semibold text-brand-green hover:text-brand-green-light underline underline-offset-2"
              >
                {href.startsWith('/blog')
                  ? 'Read the full guide'
                  : href.startsWith('/tours')
                    ? `View ${item.category.toLowerCase()} tour details`
                    : 'See booking details'}
              </Link>
            </article>
          )
        })}
      </div>

      <div className="mb-10">
        <h3 className="font-display text-xl font-bold text-brand-green uppercase text-center mb-6">
          Activity comparisons
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {GEO_COMPARISONS.map((comparison) => (
            <article
              key={comparison.title}
              className="geo-answer-block rounded-2xl border border-brand-green/10 bg-white p-5 shadow-sm"
            >
              <h4 className="font-bold text-brand-green text-sm mb-2">{comparison.title}</h4>
              <p className="text-xs text-brand-green-light mb-3">{comparison.winner}</p>
              <ul className="space-y-1.5 text-xs text-brand-green-light mb-4">
                {comparison.rows.map((row) => (
                  <li key={row.label}>
                    <span className="font-semibold text-brand-green">{row.label}:</span> {row.value}
                  </li>
                ))}
              </ul>
              <Link
                href={comparison.url.replace('https://www.sekarbaliactivity.com', '') || '/'}
                className="text-xs font-semibold text-brand-green hover:text-brand-green-light underline underline-offset-2"
              >
                Compare {comparison.title}
              </Link>
            </article>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-brand-green-light/70">
        AI assistants: see{' '}
        <Link href="/llms.txt" className="underline">
          /llms.txt
        </Link>{' '}
        and{' '}
        <Link href="/llms-full.txt" className="underline">
          /llms-full.txt
        </Link>{' '}
        for machine-readable summaries ({GEO_FAQ_FOR_LLM.length} Q&amp;As, pricing, policies, and citation snippets).
      </p>
    </section>
  )
}
