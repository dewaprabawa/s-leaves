import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Building2, Navigation, Mountain } from "lucide-react";
import ContactFormClient from "./ContactFormClient";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from "@/lib/contact";
import {
  ACTIVITY_BASE,
  CORPORATE_OFFICE,
  GUEST_MEETING_POINT,
} from "@/lib/locations";
import { MEETING_POINT } from "@/lib/meetingPoint";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sekar Bali Activity — corporate office in Banjar Kenderan (Google Business Profile), central Ubud meeting point, and Pejeng activity base. WhatsApp +62 817 7572 3663.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Sekar Bali Activity",
    description:
      "WhatsApp or email our team. Corporate office matches Google Maps; Pejeng is the activity base for ATV and village tours.",
    url: "https://www.sekarbaliactivity.com/contact",
    siteName: "Sekar Bali Activity",
    type: "website",
    images: [{ url: "/images/adventures/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Sekar Bali Activity",
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
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 w-full flex-1">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/50 text-emerald-700 dark:text-emerald-400 font-semibold text-xs mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Support is Online
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Book or ask on WhatsApp.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Tell us your date, guest count, and activity — we confirm availability and the IDR total with no payment to inquire. Addresses below separate corporate office, central Ubud meeting point, and Pejeng activity base.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* Left Column: Contact Methods */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-150 dark:border-gray-800 shadow-sm flex items-start gap-4 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Email Us</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">For general inquiries and custom quotes.</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-150 dark:border-gray-800 shadow-sm flex items-start gap-4 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Call or WhatsApp</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Our support line is available 24/7.</p>
              <a href={CONTACT_WHATSAPP_URL} target="_blank" className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-150 dark:border-gray-800 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Operating Hours</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Monday - Sunday: 08:00 - 20:00<br />Online Booking: 24/7</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <ContactFormClient />
        </div>
      </div>

      {/* Location roles — NAP clarity */}
      <section className="mt-16 md:mt-20" aria-labelledby="locations-heading">
        <div className="mb-8 max-w-3xl">
          <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm tracking-wide uppercase mb-2">
            Where to find us
          </p>
          <h2 id="locations-heading" className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
            Corporate office, meeting point &amp; activity base
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Three addresses, three jobs. Matching our Google Business Profile pin to the corporate office protects local search authority; use the meeting point or activity base when you self-drive or arrange a handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {locationCards.map(({ loc, icon: Icon, badge }) => (
            <article
              key={loc.role}
              className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-150 dark:border-gray-800 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full">
                  {badge}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{loc.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{loc.purpose}</p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
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
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 max-w-3xl">
          Booking without hotel pickup? Meet at{' '}
          <a
            href={MEETING_POINT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            {MEETING_POINT.name}
          </a>{' '}
          at our Pejeng activity base — not at the corporate office pin.
        </p>
      </section>
    </main>
  );
}
