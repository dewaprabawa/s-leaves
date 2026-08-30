import React from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Users, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Meet the local Pejeng, Ubud team behind Sekar Bali Activity. Authentic Bali ATV, rafting, canyon tubing, and village cycling adventures with hotel pickup.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col bg-sand pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">Our Story</p>
          <h1 className="text-5xl lg:text-7xl font-serif text-brand-green font-bold leading-tight mb-6">
            Born and raised in <br />
            <span className="italic font-light">Pejeng Village.</span>
          </h1>
          <p className="text-xl text-brand-green-light max-w-2xl mx-auto leading-relaxed">
            We are a local family dedicated to sharing the authentic beauty of Bali, far away from the commercial crowds. 
          </p>
        </div>

        {/* E-E-A-T Content Block */}
        <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-xl shadow-brand-green/5 mb-16">
          <h2 className="text-3xl font-serif text-brand-green font-bold mb-6">Why We Started Sekar Bali Activity</h2>
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
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-green mb-3">Deeply Local</h3>
            <p className="text-brand-green-light leading-relaxed">
              We don't just work here; we live here. Every route and recipe is part of our daily life in Pejeng.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-green mb-3">Small Groups</h3>
            <p className="text-brand-green-light leading-relaxed">
              We cap our groups to ensure safety, allow for real conversations, and respect the village paths.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-green mb-3">Sustainable</h3>
            <p className="text-brand-green-light leading-relaxed">
              Your visit brings direct economic benefit to our local farmers, market vendors, and community members.
            </p>
          </div>
        </div>

        {/* Linking to Contact (Fixing the Orphan Page issue) */}
        <div className="bg-brand-green text-sand rounded-3xl p-12 text-center flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to meet the real Bali?</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
            Have questions about our tours or need help planning your day in Ubud? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link 
              href="/#experiences" 
              className="inline-flex items-center gap-2 bg-sand text-brand-green px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              View Experiences <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 border border-sand text-sand px-8 py-4 rounded-full font-bold hover:bg-sand/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
