import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from '@/lib/contact'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Sekar Bali Activity collects, uses, and protects your personal information when you book ATV, rafting, canyon tubing, or village cycling tours in Ubud, Bali.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      'Learn how we handle booking details, contact information, and WhatsApp inquiries for Bali adventure tours.',
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    type: 'website',
  },
}

const LAST_UPDATED = '3 September 2026'

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12">
      <article className="max-w-3xl mx-auto w-full">
        <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">
          Legal
        </p>
        <h1 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-brand-green-light mb-12">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-10 text-brand-green-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              1. Who we are
            </h2>
            <p>
              {SITE_NAME} (“we”, “us”, or “our”) operates{' '}
              <a href={SITE_URL} className="text-brand-green underline underline-offset-2 hover:opacity-80">
                sekarbaliactivity.com
              </a>
              . We offer adventure experiences based in Pejeng, Ubud, Bali — including ATV rides,
              whitewater rafting, canyon tubing, village cycling, and private transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              2. Information we collect
            </h2>
            <p className="mb-3">
              We only collect information needed to respond to inquiries and fulfill bookings. This
              may include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name and preferred contact details (phone, WhatsApp, or email)</li>
              <li>Booking details (activity, date, guest counts, ages, hotel or pickup location)</li>
              <li>Messages you send via our website forms, WhatsApp, email, or social media</li>
              <li>
                Basic technical data such as browser type, device, and pages visited (via standard
                server or analytics logs, if enabled)
              </li>
            </ul>
            <p className="mt-3">
              We do not require payment card details through the website. Booking confirmation and
              payment arrangements are handled directly with our team (typically via WhatsApp).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              3. How we use your information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Confirm availability and complete your booking</li>
              <li>Arrange hotel pickup, meeting points, and itinerary details</li>
              <li>Send confirmations, reminders, and practical trip information</li>
              <li>Respond to questions and provide customer support</li>
              <li>Improve our website, services, and safety practices</li>
              <li>Comply with applicable Indonesian laws and safety requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              4. Sharing of information
            </h2>
            <p className="mb-3">
              We do not sell your personal information. We may share limited details only when
              necessary to deliver your experience, for example with:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Trusted local activity partners or venues (e.g. ATV arena operators)</li>
              <li>Drivers or transfer providers arranging pickup</li>
              <li>Service providers who help us operate the website or communications tools</li>
              <li>Authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              5. WhatsApp and messaging apps
            </h2>
            <p>
              When you book or inquire via WhatsApp, your messages are also processed under
              WhatsApp’s own privacy terms (Meta Platforms). We use those conversations only to
              confirm and manage your booking or answer your questions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              6. Cookies and analytics
            </h2>
            <p>
              Our site may use essential cookies for basic functionality and, if configured,
              analytics tools to understand how visitors use the site. You can control cookies
              through your browser settings. Disabling cookies may affect some site features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              7. Data retention and security
            </h2>
            <p>
              We keep booking-related information only as long as needed for operations, customer
              support, safety records, and legal obligations. We take reasonable technical and
              organizational steps to protect your data, but no online transmission is completely
              risk-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              8. Your choices
            </h2>
            <p className="mb-3">You may contact us to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Request access to personal information we hold about you</li>
              <li>Ask us to correct inaccurate details</li>
              <li>Request deletion of information that is no longer needed for a booking</li>
              <li>Opt out of non-essential marketing messages (if any are sent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              9. Children
            </h2>
            <p>
              Our services may include family-friendly activities. Bookings involving children
              should be made by a parent or guardian. We do not knowingly collect personal
              information from children for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              10. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The “Last updated” date at the
              top of this page will change when we do. Continued use of our website after updates
              means you accept the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              11. Contact
            </h2>
            <p className="mb-4">
              For privacy questions or requests, contact {SITE_NAME}:
            </p>
            <ul className="space-y-2">
              <li>
                Email:{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brand-green underline underline-offset-2 hover:opacity-80"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
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
              <li>Location: Pejeng, Ubud, Bali, Indonesia</li>
            </ul>
          </section>

          <p className="pt-4 border-t border-brand-green/10">
            See also our{' '}
            <Link
              href="/cancellation-policy"
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Cancellation Policy
            </Link>
            .
          </p>
        </div>
      </article>
    </main>
  )
}
