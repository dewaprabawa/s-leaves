import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Building2, Navigation, Mountain, MessageCircle, ArrowRight } from "lucide-react"
import ContactFormClient from "./ContactFormClient"
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from "@/lib/contact"
import {
  ACTIVITY_BASE,
  CORPORATE_OFFICE,
  GUEST_MEETING_POINT,
} from "@/lib/locations"
import { MEETING_POINT } from "@/lib/meetingPoint"
import { SITE_NAME, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sekar Bali Activity — corporate office in Banjar Kenderan (Google Business Profile), central Ubud meeting point, and Pejeng activity base. WhatsApp +62 817 7572 3663.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      "WhatsApp or email our team. Corporate office matches Google Maps; Pejeng is the activity base for ATV and village tours.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/images/adventures/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${SITE_NAME}`,
    description: "Book Bali adventures via WhatsApp or email. Free to inquire.",
    images: ["/images/adventures/og-cover.jpg"],
  },
}

const locationCards = [
  {
    loc: CORPORATE_OFFICE,
    icon: Building2,
    badge: "Google Business Profile",
  },
  {
    loc: GUEST_MEETING_POINT,
    icon: Navigation,
    badge: "Central Ubud",
  },
  {
    loc: ACTIVITY_BASE,
    icon: Mountain,
    badge: "Tours & self-drive ATV",
  },
] as const

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12 flex-1">
      <div className="max-w-7xl mx-auto w-full">
        <header className="max-w-3xl mb-12 md:mb-16 space-y-4">
          <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm">
            Get in touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-green tracking-tight uppercase leading-tight">
            Book or ask on{" "}
            <span className="text-accent-gold-dark">WhatsApp.</span>
          </h1>
          <p className="text-base md:text-lg text-brand-green-light leading-relaxed max-w-2xl">
            Tell us your date, guest count, and activity — we confirm availability and the IDR
            total with no payment to inquire. Addresses below separate corporate office, central
            Ubud meeting point, and Pejeng activity base.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full btn-gold-shimmer font-bold text-sm uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-brand-green/20 text-brand-green font-semibold text-sm hover:bg-brand-green/5 transition-colors"
            >
              Open sales &amp; checkout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="block bg-white border border-brand-green/10 p-6 hover:border-accent-gold/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-gold/12 text-accent-gold-dark flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-lg font-bold uppercase text-brand-green">
                    Email us
                  </p>
                  <p className="text-sm text-brand-green-light mt-1 mb-2">
                    General inquiries and custom quotes.
                  </p>
                  <span className="text-sm font-semibold text-brand-green break-all">
                    {CONTACT_EMAIL}
                  </span>
                </div>
              </div>
            </a>

            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-brand-green/10 p-6 hover:border-accent-gold/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-gold/12 text-accent-gold-dark flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold uppercase text-brand-green">
                    Call or WhatsApp
                  </p>
                  <p className="text-sm text-brand-green-light mt-1 mb-2">
                    Fastest way to book — usually reply within minutes during hours.
                  </p>
                  <span className="text-sm font-semibold text-brand-green">
                    {CONTACT_PHONE_DISPLAY}
                  </span>
                </div>
              </div>
            </a>

            <div className="bg-white border border-brand-green/10 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/8 text-brand-green flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold uppercase text-brand-green">
                    Operating hours
                  </p>
                  <p className="text-sm text-brand-green-light mt-1 leading-relaxed">
                    Monday – Sunday: 08:00 – 20:00
                    <br />
                    WhatsApp inquiries: often answered outside hours too
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>
        </div>

        <section className="mt-16 md:mt-24" aria-labelledby="locations-heading">
          <div className="mb-10 max-w-3xl">
            <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              Where to find us
            </p>
            <h2
              id="locations-heading"
              className="font-display text-3xl md:text-4xl font-bold uppercase text-brand-green tracking-tight mb-4"
            >
              Corporate office, meeting point &amp; activity base
            </h2>
            <p className="text-brand-green-light leading-relaxed">
              Three addresses, three jobs. Matching our Google Business Profile pin to the corporate
              office protects local search authority; use the meeting point or activity base when you
              self-drive or arrange a handoff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {locationCards.map(({ loc, icon: Icon, badge }) => (
              <article
                key={loc.role}
                className="bg-white border border-brand-green/10 p-6 md:p-7 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-gold/12 text-accent-gold-dark flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent-gold-dark">
                    {badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-brand-green mb-2">
                    {loc.label}
                  </h3>
                  <p className="text-sm text-brand-green-light mb-4 leading-relaxed">
                    {loc.purpose}
                  </p>
                  <p className="text-sm font-medium text-brand-green leading-relaxed">
                    {loc.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-accent-gold-dark transition-colors"
                >
                  <MapPin className="w-4 h-4 text-accent-gold-dark" />
                  Open in Google Maps
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-brand-green-light max-w-3xl leading-relaxed">
            Booking without hotel pickup? Meet at{" "}
            <a
              href={MEETING_POINT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-green underline underline-offset-2 hover:text-accent-gold-dark"
            >
              {MEETING_POINT.name}
            </a>{" "}
            at our Pejeng activity base — not at the corporate office pin.
          </p>
        </section>

        <section className="mt-16 md:mt-20 bg-ink-soft text-sand p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4">
            Prefer to pick an activity first?
          </h2>
          <p className="text-sand/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8">
            Browse ATV, rafting, tubing, cycling, and cooking — then send guests and date on
            WhatsApp with the price included.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full btn-gold-shimmer font-bold text-sm uppercase tracking-wider"
          >
            Go to book page <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  )
}
