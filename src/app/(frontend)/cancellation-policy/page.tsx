import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from '@/lib/contact'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cancellation Policy',
  description:
    'Free cancellation up to 24 hours before your Sekar Bali Activity tour. Learn refund rules, weather changes, no-shows, and how to modify ATV, rafting, tubing, or cycling bookings in Ubud.',
  alternates: { canonical: '/cancellation-policy' },
  openGraph: {
    title: `Cancellation Policy | ${SITE_NAME}`,
    description:
      'Free cancellation up to 24 hours before your activity. Clear rules for weather, rescheduling, and no-shows.',
    url: `${SITE_URL}/cancellation-policy`,
    siteName: SITE_NAME,
    type: 'website',
  },
}

const LAST_UPDATED = '3 September 2026'

export default function CancellationPolicyPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12">
      <article className="max-w-3xl mx-auto w-full">
        <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">
          Bookings
        </p>
        <h1 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-4">
          Cancellation Policy
        </h1>
        <p className="text-brand-green-light mb-12">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-10 text-brand-green-light leading-relaxed">
          <section className="bg-white/70 rounded-2xl p-6 lg:p-8 border border-brand-green/10">
            <h2 className="text-xl font-serif text-brand-green font-bold mb-2">
              Quick summary
            </h2>
            <p>
              Free cancellation up to <strong className="text-brand-green">24 hours</strong> before
              your scheduled activity start time. Cancel or reschedule by WhatsApp or email so we
              can confirm your change in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              1. Free cancellation (24 hours)
            </h2>
            <p className="mb-3">
              You may cancel a confirmed booking free of charge if you notify us at least{' '}
              <strong className="text-brand-green">24 hours</strong> before the activity start time
              shown in your confirmation.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                If no deposit or payment has been taken yet, we simply release your reservation.
              </li>
              <li>
                If a deposit or full payment was already collected, we will refund it according to
                the payment method used (timing depends on your bank or payment channel).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              2. Cancellations within 24 hours
            </h2>
            <p>
              Cancellations made less than 24 hours before the start time are generally
              non-refundable, because guides, vehicles, and partner venues are already reserved.
              We will still try to help where possible — message us and we will review your case.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              3. No-shows
            </h2>
            <p>
              If you do not arrive at the agreed meeting point or pickup time without prior notice,
              the booking is treated as a no-show and is non-refundable. Please allow buffer time
              for Bali traffic, especially for morning pickups.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              4. Rescheduling
            </h2>
            <p className="mb-3">
              You may request a new date or time at no extra charge if you contact us at least 24
              hours before the original start time and the new slot is available.
            </p>
            <p>
              Reschedule requests inside 24 hours are subject to availability and partner
              schedules. Private or group bookings may have different notice requirements — we
              will confirm these when you book.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              5. Weather and safety changes
            </h2>
            <p className="mb-3">
              Outdoor adventures in Bali can be affected by heavy rain, river conditions, or
              safety concerns. If we must cancel or significantly change your activity for weather
              or safety reasons:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We will offer a free reschedule to another available date, or</li>
              <li>A full refund of amounts paid for the affected activity</li>
            </ul>
            <p className="mt-3">
              Light tropical rain alone does not always mean cancellation. Our team will advise
              you if conditions are unsafe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              6. Operator cancellations
            </h2>
            <p>
              If {SITE_NAME} cancels for reasons within our control (for example, guide illness
              or venue closure) and we cannot offer a suitable alternative, you will receive a
              full refund of amounts paid for that booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              7. Partial bookings and add-ons
            </h2>
            <p>
              Combo packages (such as ATV + river tubing), optional hotel pickup, and transfers
              follow the same 24-hour free cancellation window unless we state otherwise in your
              confirmation message. Partner-operated segments may follow the partner’s operational
              rules; we will note any exception when confirming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              8. How to cancel or change a booking
            </h2>
            <p className="mb-3">
              Please cancel or reschedule in writing so we have a clear record:
            </p>
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
            <p className="mt-3">
              Include your full name, activity, and booked date. The cancellation time is based on
              when we receive your message (Bali / WITA timezone).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              9. Inquiries vs confirmed bookings
            </h2>
            <p>
              Sending details through our website form or WhatsApp to check availability does not
              create a paid obligation. Free cancellation terms apply once your booking is
              confirmed by our team.
            </p>
          </section>

          <p className="pt-4 border-t border-brand-green/10">
            Related:{' '}
            <Link
              href="/privacy-policy"
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Privacy Policy
            </Link>
            {' · '}
            <Link
              href="/book"
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Book an activity
            </Link>
            {' · '}
            <Link
              href="/contact"
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Contact us
            </Link>
          </p>
        </div>
      </article>
    </main>
  )
}
