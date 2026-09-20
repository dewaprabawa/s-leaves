import Link from 'next/link'
import { CarFront, IdCard, Shield } from 'lucide-react'
import { SAFETY_TRUST_CARDS, TRUST_POLICY_LINKS } from '@/data/trustPolicies'

const ICONS = [CarFront, IdCard, Shield] as const

type SafetyTrustSectionProps = {
  compact?: boolean
  id?: string
}

export default function SafetyTrustSection({
  compact = false,
  id = 'safety-trust',
}: SafetyTrustSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={compact ? 'py-12 md:py-16' : 'py-20 md:py-24 px-6 lg:px-12 bg-sand'}
    >
      <div className={compact ? '' : 'max-w-7xl mx-auto'}>
        <div className={compact ? 'mb-8' : 'text-center max-w-3xl mx-auto mb-12'}>
          <p className="text-accent-gold-dark font-semibold tracking-[0.18em] uppercase text-xs mb-3">
            Safety &amp; trust
          </p>
          <h2
            id={`${id}-heading`}
            className={`font-display font-bold text-brand-green uppercase leading-tight ${
              compact ? 'text-2xl md:text-3xl mb-3' : 'text-3xl md:text-4xl mb-4'
            }`}
          >
            Inspected cars. Licensed drivers.
          </h2>
          <p className="text-brand-green-light leading-relaxed">
            Private day tours, airport transfers, hotel pickup, and the Mount Batur jeep use cars we
            inspect and drivers who hold a legal Indonesian licence — not an unregistered roadside
            hire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SAFETY_TRUST_CARDS.map((card, index) => {
            const Icon = ICONS[index] ?? Shield
            return (
              <article
                key={card.title}
                className="rounded-2xl border border-brand-green/10 bg-white p-6"
              >
                <div className="w-11 h-11 rounded-full bg-accent-gold/12 text-accent-gold-dark flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-green mb-2">{card.title}</h3>
                <p className="text-sm text-brand-green-light leading-relaxed">{card.summary}</p>
              </article>
            )
          })}
        </div>

        <p className={`text-sm text-brand-green-light ${compact ? 'mt-6' : 'mt-8 text-center'}`}>
          Full standards on our{' '}
          <Link
            href={TRUST_POLICY_LINKS.safety}
            className="font-semibold text-brand-green underline underline-offset-2 hover:text-accent-gold-dark"
          >
            Safety &amp; trust
          </Link>{' '}
          page ·{' '}
          <Link
            href={TRUST_POLICY_LINKS.antiScam}
            className="font-semibold text-brand-green underline underline-offset-2 hover:text-accent-gold-dark"
          >
            Anti-scam
          </Link>
        </p>
      </div>
    </section>
  )
}
