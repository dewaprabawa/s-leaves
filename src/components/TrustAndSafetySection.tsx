import Link from 'next/link'
import { BadgeCheck, Building2, MessageCircle, ShieldCheck } from 'lucide-react'
import { TRUST_AND_SAFETY, TRUST_POLICY_LINKS } from '@/data/trustPolicies'

const POINT_ICONS = [BadgeCheck, Building2, MessageCircle, ShieldCheck] as const

type TrustAndSafetySectionProps = {
  compact?: boolean
  id?: string
}

export default function TrustAndSafetySection({
  compact = false,
  id = 'trust-and-safety',
}: TrustAndSafetySectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={compact ? 'py-12 md:py-16' : 'py-20 md:py-24 px-6 lg:px-12 bg-sand'}
    >
      <div className={compact ? '' : 'max-w-7xl mx-auto'}>
        <div className={compact ? 'mb-8' : 'text-center max-w-3xl mx-auto mb-12'}>
          <p className="text-accent-gold-dark font-semibold tracking-[0.18em] uppercase text-xs mb-3">
            {TRUST_AND_SAFETY.eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className={`font-display font-bold text-brand-green uppercase leading-tight ${
              compact ? 'text-2xl md:text-3xl mb-3' : 'text-3xl md:text-4xl mb-4'
            }`}
          >
            {TRUST_AND_SAFETY.title}
          </h2>
          <p className="text-brand-green-light leading-relaxed">{TRUST_AND_SAFETY.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8">
          {TRUST_AND_SAFETY.points.map((point, index) => {
            const Icon = POINT_ICONS[index] ?? ShieldCheck
            return (
              <div
                key={point.title}
                className="rounded-2xl border border-brand-green/10 bg-white p-6"
              >
                <div className="flex items-center gap-2 text-brand-green mb-3">
                  <Icon className="h-5 w-5 shrink-0 text-accent-gold-dark" />
                  <h3 className="font-display font-bold uppercase text-sm tracking-wider">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm text-brand-green-light leading-relaxed">{point.text}</p>
              </div>
            )
          })}
        </div>

        <p className="text-sm text-brand-green-light leading-relaxed">
          <Link
            href={TRUST_POLICY_LINKS.antiScam}
            className="font-semibold text-brand-green underline underline-offset-2 hover:text-accent-gold-dark"
          >
            Anti-scam guide
          </Link>
          {' · '}
          <Link
            href={TRUST_POLICY_LINKS.payment}
            className="font-semibold text-brand-green underline underline-offset-2 hover:text-accent-gold-dark"
          >
            Payment policy
          </Link>
          {' · '}
          <Link
            href="/about"
            className="font-semibold text-brand-green underline underline-offset-2 hover:text-accent-gold-dark"
          >
            About us
          </Link>
        </p>
      </div>
    </section>
  )
}
