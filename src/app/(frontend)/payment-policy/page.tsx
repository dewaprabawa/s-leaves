import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import AntiScamSection from '@/components/AntiScamSection'
import { OFFICIAL_PAYMENT, TRUST_POLICIES_UPDATED, TRUST_POLICY_LINKS } from '@/data/trustPolicies'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Payment Policy',
  description:
    'How to pay Sekar Bali Activity safely: no payment to inquire, official Seabank account only, PDF invoice, and WhatsApp confirmation. Never pay a different bank or agent.',
  alternates: { canonical: '/payment-policy' },
  openGraph: {
    title: `Payment Policy | ${SITE_NAME}`,
    description:
      'Official Seabank account, no cards on the website, and how to spot a fake payment request.',
    url: `${SITE_URL}/payment-policy`,
    siteName: SITE_NAME,
    type: 'website',
  },
}

export default function PaymentPolicyPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12">
      <article className="max-w-3xl mx-auto w-full">
        <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">
          Anti-scam
        </p>
        <h1 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-4">
          Payment Policy
        </h1>
        <p className="text-brand-green-light mb-12">Last updated: {TRUST_POLICIES_UPDATED}</p>

        <div className="space-y-10 text-brand-green-light leading-relaxed">
          <section className="bg-white/70 rounded-2xl p-6 lg:p-8 border border-brand-green/10">
            <h2 className="text-xl font-serif text-brand-green font-bold mb-2">Quick summary</h2>
            <p>
              Asking about a date is free. After you agree, pay only the Seabank account on your
              invoice, then confirm on our official WhatsApp. We never ask for card numbers on this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              1. No payment to inquire
            </h2>
            <p>
              Sending a booking form or WhatsApp message does not create a paid obligation. You pay
              only after our team confirms availability and you accept the IDR total.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              2. Official bank account
            </h2>
            <p className="mb-3">
              The only bank we publish for guest transfers is:
            </p>
            <ul className="list-none space-y-1 text-brand-green font-semibold bg-white/70 border border-brand-green/10 rounded-xl p-5">
              <li>Bank: {OFFICIAL_PAYMENT.bankName}</li>
              <li>Account number: {OFFICIAL_PAYMENT.accountNumber}</li>
              <li>Account name: {OFFICIAL_PAYMENT.accountName}</li>
            </ul>
            <p className="mt-3">
              If a message, QR code, or “helper” asks you to pay a different account, e-wallet, or
              cash-to-a-driver arrangement that is not on your invoice, stop and write us on the
              WhatsApp number published on this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              3. Invoice and confirmation
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Download the PDF invoice that shows our logo and invoice number.</li>
              <li>Transfer the amount due (deposit or full, as written on the invoice).</li>
              <li>Keep the transfer receipt.</li>
              <li>
                Tap “Confirm payment” on WhatsApp and send the receipt plus invoice number so we
                can verify and lock the slot.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              4. What we never collect on the website
            </h2>
            <p>
              We do not take credit-card numbers, CVV codes, or one-time passwords through
              sekarbaliactivity.com. Payment is arranged after confirmation, typically by bank
              transfer, then verified in the same WhatsApp thread.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              5. Official WhatsApp and office
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                WhatsApp:{' '}
                <a
                  href={OFFICIAL_PAYMENT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green underline underline-offset-2 hover:opacity-80"
                >
                  {OFFICIAL_PAYMENT.whatsappDisplay}
                </a>
              </li>
              <li>
                Email:{' '}
                <a
                  href={`mailto:${OFFICIAL_PAYMENT.email}`}
                  className="text-brand-green underline underline-offset-2 hover:opacity-80"
                >
                  {OFFICIAL_PAYMENT.email}
                </a>
              </li>
              <li>Registered office (Google Business Profile): {OFFICIAL_PAYMENT.office}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              6. Refunds of payments
            </h2>
            <p>
              Amounts we have already collected follow the{' '}
              <Link
                href={TRUST_POLICY_LINKS.refund}
                className="text-brand-green underline underline-offset-2 hover:opacity-80"
              >
                Refund Policy
              </Link>
              . Refunds go back through the same payment channel when the bank allows it. Timing
              depends on your bank.
            </p>
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
              href={TRUST_POLICY_LINKS.refund}
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Refund Policy
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
        <AntiScamSection compact id="payment-anti-scam" />
      </div>
    </main>
  )
}
