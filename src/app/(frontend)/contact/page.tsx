import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact Us | S-Leaves Travel",
  description: "Get in touch with our travel specialists to plan your next adventure.",
};

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
          Get in touch.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Whether you have a question about our bespoke tours, need a customized itinerary, or want to arrange a luxury transfer, our travel specialists are ready to help.
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
              <a href="mailto:sekarprivatebaliactivity@gmail.com" className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline">
                sekarprivatebaliactivity@gmail.com
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
              <a href="https://wa.me/6281775723663" target="_blank" className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline">
                +62 817-7572-3663
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-150 dark:border-gray-800 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Head Office</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jalan Raya Ubud No. 12<br />Ubud, Bali, Indonesia</p>
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
    </main>
  );
}
