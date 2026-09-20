import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import AntiScamSection from '@/components/AntiScamSection'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from '@/lib/contact'
import { TRUST_POLICIES_UPDATED, TRUST_POLICY_LINKS } from '@/data/trustPolicies'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'Sekar Bali Activity refunds: free cancellation up to 24 hours, full refund if we cancel for weather or operations, no-shows are non-refundable. How to request a refund on WhatsApp.',
  alternates: { canonical: '/refund-policy' },
  openGraph: {
    title: `Refund Policy | ${SITE_NAME}`,
    description:
      'When you get your money back, when you do not, and how refunds are paid after a Bali activity booking.',
    url: `${SITE_URL}/refund-policy`,
    siteName: SITE_NAME,
    type: 'website',
  },
}

export default function RefundPolicyPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12">
      <article className="max-w-3xl mx-auto w-full">
        <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">
          Anti-scam
        </p>
        <h1 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-4">
          Refund Policy
        </h1>
        <p className="text-brand-green-light mb-12">Last updated: {TRUST_POLICIES_UPDATED}</p>

        <div className="space-y-10 text-brand-green-light leading-relaxed">
          <section className="bg-white/70 rounded-2xl p-6 lg:p-8 border border-brand-green/10">
            <h2 className="text-xl font-serif text-brand-green font-bold mb-2">Quick summary</h2>
            <p>
              Free cancellation up to <strong className="text-brand-green">24 hours</strong> before
              start time — if you already paid, we refund that amount. Weather or operator
              cancellations are a full refund or a free reschedule. No-shows are not refunded.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              1. When we refund
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                You cancel in writing at least 24 hours before the confirmed start time (Bali /
                WITA).
              </li>
              <li>
                We cancel or significantly change the activity for weather, river safety, guide
                illness, or venue closure and you do not want a new date.
              </li>
              <li>
                You inquired only — if no deposit or payment was taken, there is nothing to refund.
                We release the hold.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              2. When we do not refund
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cancellations inside 24 hours, unless we agree a goodwill exception.</li>
              <li>
                No-shows — not arriving at the agreed pickup or meeting point without prior notice.
              </li>
            </ul>
            <p className="mt-3">
              Full booking-change rules (reschedule windows, combos, partner segments) live on the{' '}
              <Link
                href={TRUST_POLICY_LINKS.cancellation}
                className="text-brand-green underline underline-offset-2 hover:opacity-80"
              >
                Cancellation Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              3. How the money comes back
            </h2>
            <p>
              Refunds go through the same channel you used (typically the Seabank transfer on your
              invoice). Bank processing time is outside our control. We confirm the refund in the
              same WhatsApp or email thread.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              4. How to request a refund
            </h2>
            <p className="mb-3">Write us with your name, activity, date, and invoice number:</p>
            <ul className="space-y-2">
              <li>
                WhatsApp:{' '}
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green underline underline-offset-2 hover:opacity-80"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                Email:{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brand-green underline underline-offset-2 hover:opacity-80"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </section>

          <p className="pt-4 border-t border-brand-green/10">
            Related:{' '}
            <Link
              href={TRUST_POLICY_LINKS.antiScam}
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Anti-scam
            </Link>
            {' · '}
            <Link
              href={TRUST_POLICY_LINKS.payment}
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Payment Policy
            </Link>
            {' · '}
            <Link
              href={TRUST_POLICY_LINKS.privacy}
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </article>

      <div className="max-w-3xl mx-auto w-full mt-16">
        <AntiScamSection compact id="refund-anti-scam" />
      </div>
    </main>
  )
}
