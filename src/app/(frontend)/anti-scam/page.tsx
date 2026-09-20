import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import AntiScamSection from '@/components/AntiScamSection'
import {
  ANTI_SCAM_RULES,
  OFFICIAL_PAYMENT,
  TRUST_POLICIES_UPDATED,
  TRUST_POLICY_CARDS,
  TRUST_POLICY_LINKS,
} from '@/data/trustPolicies'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Anti-Scam | Privacy, Refund & Payment',
  description:
    'How to book Sekar Bali Activity without getting scammed: official WhatsApp, published Seabank only, privacy, refund, and payment policies.',
  alternates: { canonical: '/anti-scam' },
  openGraph: {
    title: `Anti-Scam | ${SITE_NAME}`,
    description:
      'Official contacts, bank account, privacy, refund, and payment rules for Ubud activity bookings.',
    url: `${SITE_URL}/anti-scam`,
    siteName: SITE_NAME,
    type: 'website',
  },
}

export default function AntiScamPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12">
      <article className="max-w-3xl mx-auto w-full">
        <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">
          Trust
        </p>
        <h1 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-4">
          Anti-scam: privacy, refunds, and payment
        </h1>
        <p className="text-brand-green-light mb-8">Last updated: {TRUST_POLICIES_UPDATED}</p>
        <p className="text-brand-green-light leading-relaxed mb-10">
          Fake tour chats are common in Bali. Use this page to check you are talking to Sekar Bali
          Activity — not someone copying our photos or asking for a different bank.
        </p>

        <div className="space-y-10 text-brand-green-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              How to verify it is us
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Website URL starts with{' '}
                <a
                  href={OFFICIAL_PAYMENT.website}
                  className="text-brand-green underline underline-offset-2 hover:opacity-80"
                >
                  sekarbaliactivity.com
                </a>
              </li>
              <li>WhatsApp number matches {OFFICIAL_PAYMENT.whatsappDisplay}</li>
              <li>Invoice PDF shows our logo and the Seabank details on this site</li>
              <li>
                Registered office on Google Business Profile: {OFFICIAL_PAYMENT.office}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              Do not pay if
            </h2>
            <ul className="space-y-2">
              {ANTI_SCAM_RULES.map((rule) => (
                <li key={rule} className="flex gap-2">
                  <span className="text-accent-gold-dark">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-4">
              The three policies
            </h2>
            <ol className="space-y-4">
              {TRUST_POLICY_CARDS.map((card, index) => (
                <li key={card.href}>
                  <Link
                    href={card.href}
                    className="block rounded-2xl border border-brand-green/10 bg-white/70 p-5 hover:border-accent-gold/50 transition-colors"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-1">
                      {index + 1}. {card.label}
                    </p>
                    <p className="font-semibold text-brand-green mb-1">{card.title}</p>
                    <p className="text-sm">{card.summary}</p>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <p className="pt-4 border-t border-brand-green/10">
            Also see{' '}
            <Link
              href={TRUST_POLICY_LINKS.cancellation}
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Cancellation Policy
            </Link>
            {' · '}
            <Link
              href="/contact"
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Contact
            </Link>
            {' · '}
            <Link
              href="/book"
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Book
            </Link>
          </p>
        </div>
      </article>

      <div className="max-w-3xl mx-auto w-full mt-16">
        <AntiScamSection compact id="anti-scam-bank" />
      </div>
    </main>
  )
}
