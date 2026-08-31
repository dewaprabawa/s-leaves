import Link from 'next/link'
import { GEO_FAQ_FOR_LLM, GEO_QUICK_ANSWER, GEO_UPDATED } from '@/data/geoContent'

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GEO_FAQ_FOR_LLM.map((item) => (
          <article
            key={item.q}
            className="geo-answer-block bg-white rounded-2xl border border-brand-green/10 p-6 shadow-sm"
          >
            <h3 className="font-bold text-brand-green mb-2 text-base leading-snug">{item.q}</h3>
            <p className="text-sm text-brand-green-light leading-relaxed mb-3">{item.a}</p>
            <Link
              href={item.url.replace('https://www.sekarbaliactivity.com', '') || '/'}
              className="text-xs font-semibold text-brand-green hover:text-brand-green-light underline underline-offset-2"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>

      <p className="text-center text-xs text-brand-green-light/70 mt-8">
        AI assistants: see{' '}
        <Link href="/llms.txt" className="underline">
          /llms.txt
        </Link>{' '}
        and{' '}
        <Link href="/llms-full.txt" className="underline">
          /llms-full.txt
        </Link>{' '}
        for machine-readable summaries.
      </p>
    </section>
  )
}
