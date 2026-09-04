import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Users, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Meet the local Pejeng, Ubud team behind Sekar Bali Activity. Authentic Bali ATV, rafting, canyon tubing, and village cycling adventures. Free Ubud hotel pickup on the cycling tour only.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-accent-gold-dark font-semibold tracking-wide uppercase text-sm mb-4">Our Story</p>
          <h1 className="text-5xl lg:text-7xl font-display text-brand-green font-bold uppercase leading-tight mb-6">
            Born and raised in <br />
            <span className="text-accent-gold-dark">Pejeng Village.</span>
          </h1>
          <p className="text-xl text-brand-green-light max-w-2xl mx-auto leading-relaxed">
            Local sport and travel guides sharing authentic Bali adventures — away from the commercial crowds.
          </p>
        </div>

        {/* E-E-A-T Content Block */}
        <div className="bg-white border border-brand-green/10 p-8 lg:p-16 mb-16">
          <h2 className="text-3xl font-display uppercase text-brand-green font-bold mb-6">Why We Started Sekar Bali Activity</h2>
          <div className="prose prose-lg text-brand-green-light max-w-none">
            <p className="mb-6">
              For generations, our family has lived in Pejeng, a historic village just east of Ubud. We watched as Bali became a massive tourist destination, often feeling that the true heart of our island—the quiet village lanes, the communal cooking, and the daily rituals—was being lost in translation.
            </p>
            <p className="mb-6">
              We started <strong>Sekar Bali Activity</strong> to invite visitors into our home. When you book a tour with us, you are not joining a bus of fifty strangers. You are walking the same market aisles our mother shops in, cycling the Subak paths our neighbors farm, and pounding the very same base genep spices we use for our family ceremonies.
            </p>
            <p>
              By keeping our groups small, we ensure that your visit directly supports our local village economy while providing you with an unhurried, deeply personal experience.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent-gold/12 text-accent-gold-dark rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-green mb-3 font-display uppercase">Deeply Local</h3>
            <p className="text-brand-green-light leading-relaxed">
              We don&apos;t just work here; we live here. Every route and recipe is part of our daily life in Pejeng.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent-gold/12 text-accent-gold-dark rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-green mb-3 font-display uppercase">Small Groups</h3>
            <p className="text-brand-green-light leading-relaxed">
              We cap our groups to ensure safety, allow for real conversations, and respect the village paths.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent-gold/12 text-accent-gold-dark rounded-full flex items-center justify-center mb-6">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-green mb-3 font-display uppercase">Adventure Ready</h3>
            <p className="text-brand-green-light leading-relaxed">
              From ATV trails to river sports, every package is built for travelers who want real Bali thrills.
            </p>
          </div>
        </div>

        {/* Linking to Contact (Fixing the Orphan Page issue) */}
        <div className="bg-ink-soft text-sand p-12 text-center flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl font-display uppercase font-bold mb-6">Ready to meet the real Bali?</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
            Have questions about our tours or need help planning your day in Ubud? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-gold-shimmer font-bold uppercase tracking-wider"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#adventures"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-sand/30 text-sand font-bold uppercase tracking-wider hover:bg-sand/10 transition-colors"
            >
              See Adventures
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
