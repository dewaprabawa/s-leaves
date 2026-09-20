import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import {
  ANTI_SCAM_RULES,
  OFFICIAL_PAYMENT,
  TRUST_POLICY_CARDS,
  TRUST_POLICY_LINKS,
} from '@/data/trustPolicies'

type AntiScamSectionProps = {
  /** Compact layout for /book and policy pages */
  compact?: boolean
  id?: string
}

export default function AntiScamSection({
  compact = false,
  id = 'anti-scam',
}: AntiScamSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={compact ? 'py-12 md:py-16' : 'py-20 md:py-24 px-6 lg:px-12 bg-white'}
    >
      <div className={compact ? '' : 'max-w-7xl mx-auto'}>
        <div className={compact ? 'mb-8' : 'text-center max-w-3xl mx-auto mb-12'}>
          <p className="text-accent-gold-dark font-semibold tracking-[0.18em] uppercase text-xs mb-3">
            Anti-scam
          </p>
          <h2
            id={`${id}-heading`}
            className={`font-display font-bold text-brand-green uppercase leading-tight ${
              compact ? 'text-2xl md:text-3xl mb-3' : 'text-3xl md:text-4xl mb-4'
            }`}
          >
            Book safe with Sekar Bali Activity
          </h2>
          <p className="text-brand-green-light leading-relaxed">
            We are a Pejeng / Ubud operator with a Google Business Profile that matches our
            registered office. Inquire on WhatsApp for free. Pay only the bank printed on our
            invoice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
          {TRUST_POLICY_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-brand-green/10 bg-sand/50 p-6 hover:border-accent-gold/60 hover:bg-white transition-colors"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-gold-dark mb-2">
                {card.label}
              </p>
              <h3 className="font-display text-lg font-bold text-brand-green mb-2 group-hover:text-accent-gold-dark transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-brand-green-light leading-relaxed">{card.summary}</p>
            </Link>
          ))}
        </div>

        <div className="rounded-3xl border border-brand-green/10 bg-sand p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 text-brand-green mb-3">
              <ShieldCheck className="w-5 h-5 text-accent-gold-dark shrink-0" />
              <h3 className="font-display font-bold uppercase text-sm tracking-wider">
                Official payment only
              </h3>
            </div>
            <dl className="space-y-2 text-sm text-brand-green">
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-brand-green-light">Bank</dt>
                <dd className="font-semibold">{OFFICIAL_PAYMENT.bankName}</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-brand-green-light">Account</dt>
                <dd className="font-semibold tabular-nums">{OFFICIAL_PAYMENT.accountNumber}</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-brand-green-light">Name</dt>
                <dd className="font-semibold">{OFFICIAL_PAYMENT.accountName}</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-brand-green-light">WhatsApp</dt>
                <dd>
                  <a
                    href={OFFICIAL_PAYMENT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 hover:text-accent-gold-dark"
                  >
                    {OFFICIAL_PAYMENT.whatsappDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-wider text-brand-green mb-3">
              If someone asks you to pay elsewhere
            </h3>
            <ul className="space-y-2 text-sm text-brand-green-light leading-relaxed">
              {ANTI_SCAM_RULES.map((rule) => (
                <li key={rule} className="flex gap-2">
                  <span className="text-accent-gold-dark mt-0.5">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link
                href={TRUST_POLICY_LINKS.antiScam}
                className="font-semibold text-brand-green underline underline-offset-2 hover:text-accent-gold-dark"
              >
                Full anti-scam guide
              </Link>
              {' · '}
              <Link
                href={TRUST_POLICY_LINKS.payment}
                className="font-semibold text-brand-green underline underline-offset-2 hover:text-accent-gold-dark"
              >
                Payment policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
