import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import SafetyTrustSection from '@/components/SafetyTrustSection'
import {
  SAFETY_TRUST_POINTS,
  TRUST_POLICIES_UPDATED,
  TRUST_POLICY_LINKS,
} from '@/data/trustPolicies'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Safety & Trust | Inspected Cars, Licensed Drivers',
  description:
    'Sekar Bali Activity safety: inspected private cars, drivers with valid Indonesian licences (SIM), English-speaking professionals, plus gear and insurance on adventure days.',
  alternates: { canonical: '/safety' },
  openGraph: {
    title: `Safety & Trust | ${SITE_NAME}`,
    description:
      'Inspected cars, legally licensed drivers, and adventure insurance for Ubud tours and transfers.',
    url: `${SITE_URL}/safety`,
    siteName: SITE_NAME,
    type: 'website',
  },
}

export default function SafetyPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12">
      <article className="max-w-3xl mx-auto w-full">
        <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">
          Trust
        </p>
        <h1 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-4">
          Safety &amp; trust: inspected cars, licensed drivers
        </h1>
        <p className="text-brand-green-light mb-8">Last updated: {TRUST_POLICIES_UPDATED}</p>
        <p className="text-brand-green-light leading-relaxed mb-10">
          Hotel pickup, private day tours, airport transfers, and the Mount Batur sunrise jeep are
          driven — not self-drive rentals. We use inspected cars and drivers who hold a legal
          Indonesian driving licence.
        </p>

        <div className="space-y-10 text-brand-green-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              Car inspection
            </h2>
            <p>
              Before a guest trip we check the car used for your booking: lights, brakes, tyres,
              seatbelts, and air-conditioning. That covers private Ubud / Tanah Lot cars, airport
              transfer MPVs and SUVs, hotel pickup vehicles, and the Batur 4×4. If a car is not
              ready, we swap it — we do not send an uninspected vehicle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              Legal driver licences
            </h2>
            <p className="mb-3">
              Drivers hold a valid Indonesian driving licence (SIM) for passenger cars. Day-tour and
              transfer drivers speak English and stay with you for the hours you booked.
            </p>
            <p>
              At hotel pickup you may ask the driver to show their licence. If anything feels off,
              stay at the hotel and message our published WhatsApp before you get in the car.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              What this applies to
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {SAFETY_TRUST_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-green font-bold mb-3">
              Adventure days (ATV, river, cycling)
            </h2>
            <p>
              Those trips use arena guides and safety gear, not a highway driver. Packages include a
              briefing, helmet (and boots on ATV), and insurance for ages 6–65. Pickup to the arena,
              when you book it, still uses an inspected car and a licensed driver.
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
              href="/transfers"
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Airport transfers
            </Link>
            {' · '}
            <Link
              href="/tours/full-day-ubud-tour"
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Full day Ubud tour
            </Link>
            {' · '}
            <Link
              href={TRUST_POLICY_LINKS.payment}
              className="text-brand-green underline underline-offset-2 hover:opacity-80"
            >
              Payment policy
            </Link>
          </p>
        </div>
      </article>

      <div className="max-w-3xl mx-auto w-full mt-16">
        <SafetyTrustSection compact id="safety-standards" />
      </div>
    </main>
  )
}
