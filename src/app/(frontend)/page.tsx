"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { BookingPopup, TourConfig } from '@/components/BookingPopup'
import { FAQSection } from '@/components/FAQSection'
import { ArrowRight, MapPin, Users, Leaf, Check, Clock3, Bike, Coffee, CookingPot, Mountain } from 'lucide-react'

export default function Home() {
  const [activeTour, setActiveTour] = useState<TourConfig | null>(null);
  const [activeItinerary, setActiveItinerary] = useState<"cycling" | "coffee" | "cooking">("cycling");

  const cyclingConfig: TourConfig = {
    id: "cycling",
    title: "Pejeng Village & Terrace Cycling Tour",
    times: ["08:30 AM (Morning Ride)", "01:30 PM (Afternoon Ride)"],
    adultPrice: 400000,
    kidPrice: 350000,
    minPax: 2,
    getYourGuideUrl: "https://gyg.me/2pBDrw5s"
  };

  const coffeeConfig: TourConfig = {
    id: "coffee",
    title: "Luwak Coffee Plantation Experience",
    times: ["10:00 AM", "02:00 PM"],
    adultPrice: 400000,
    kidPrice: null,
    minPax: 3
  };

  const cookingConfig: TourConfig = {
    id: "cooking",
    title: "Traditional Balinese Dinner Cooking Class",
    times: ["08:30 AM", "02:30 PM", "05:30 PM"],
    adultPrice: 400000,
    kidPrice: 350000,
    minPax: 2,
    getYourGuideUrl: "https://gyg.me/rqpV6ZI5"
  };

  return (
    <main className="w-full flex flex-col bg-sand">
      <BookingPopup isOpen={activeTour !== null} onClose={() => setActiveTour(null)} tour={activeTour} />
      {/* Hero Section */}
      <section id="top" className="relative w-full min-h-[85vh] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 py-12 lg:py-0 overflow-hidden">
        <div className="lg:w-1/2 flex flex-col justify-center max-w-2xl z-10 pr-0 lg:pr-12">
          <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">
            Village-led experiences · Pejeng, Bali
          </p>
          <h1 className="text-5xl lg:text-7xl font-serif text-brand-green font-bold leading-tight mb-6">
            Bali,<br />
            <span className="italic font-light">at village pace.</span>
          </h1>
          <h2 className="text-lg lg:text-xl text-brand-green-light mb-10 max-w-lg leading-relaxed">
            Authentic Bali Tours & Village Cycling in Pejeng. Three intimate ways to meet the island beyond the postcard—by bicycle, by coffee cup, and around the family table.
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <Link 
              href="#experiences" 
              className="inline-flex items-center gap-2 bg-brand-green text-sand px-7 py-4 rounded-full font-semibold hover:bg-brand-green-light transition-colors"
            >
              Find your experience <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-brand-green-light">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Pickup in Ubud
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Small groups
            </span>
            <span className="flex items-center gap-2">
              <Leaf className="w-4 h-4" /> Local hosts
            </span>
          </div>
        </div>

        <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative aspect-[4/3] lg:aspect-auto lg:h-[80vh] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80" 
            alt="Ancient Balinese temple surrounded by lush tropical greenery"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-sand drop-shadow-md">
            <div className="flex flex-col text-sm font-medium tracking-wide">
              <span>08°30' S</span>
              <span>Pejeng, Gianyar</span>
            </div>
          </div>
          {/* Sun Stamp Element */}
          <div className="absolute top-8 right-8 w-28 h-28 bg-sand rounded-full flex flex-col items-center justify-center text-brand-green rotate-12 shadow-lg hidden md:flex">
            <span className="text-[10px] tracking-widest font-semibold uppercase">Meet</span>
            <strong className="text-xl font-bold tracking-wider uppercase">Bali</strong>
            <span className="text-[10px] tracking-widest font-semibold uppercase">Slowly</span>
          </div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="bg-brand-green text-sand py-16 px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-12">
        <p className="text-2xl lg:text-3xl font-light leading-snug max-w-xl text-center lg:text-left">
          Not a checklist.<br />
          <span className="font-medium">A real morning, afternoon, or evening.</span>
        </p>
        <div className="flex flex-wrap justify-center lg:justify-end gap-12 lg:gap-20">
          <div className="flex items-center gap-4">
            <strong className="text-5xl font-serif">3</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">thoughtful<br/>experiences</span>
          </div>
          <div className="flex items-center gap-4">
            <strong className="text-5xl font-serif">4h</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">maximum<br/>tour length</span>
          </div>
          <div className="flex items-center gap-4">
            <strong className="text-5xl font-serif">400k</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">IDR starting<br/>price</span>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">Choose your pace</p>
          <h2 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-6">
            Three windows<br/>into everyday Bali.
          </h2>
          <p className="text-lg text-brand-green-light max-w-2xl">
            Each experience stands beautifully on its own. Pair two across a day for a deeper Pejeng story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tour 1: Cycling */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-green/5 flex flex-col group relative">
            <div className="absolute top-4 right-4 bg-brand-green text-sand text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
              Our signature experience
            </div>
            <div className="relative h-64 overflow-hidden">
              <img src="/images/cycling/rice-field-bikes.jpg" alt="Cycling Tour" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 w-10 h-10 bg-sand rounded-full flex items-center justify-center text-brand-green font-bold shadow-md">01</div>
              <div className="absolute bottom-0 right-4 translate-y-1/2 w-14 h-14 bg-brand-green text-sand rounded-full flex items-center justify-center shadow-lg">
                <Bike className="w-6 h-6" />
              </div>
            </div>
            <div className="p-8 pt-12 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-brand-green mb-3">Pejeng Village & Terrace Cycling</h3>
              <p className="text-brand-green-light text-sm mb-6 flex-1">
                <strong className="block text-brand-green mb-1 font-semibold">Explore the real Bali.</strong>
                This dedicated cycling tour takes you away from the crowds and deep into the historic Pejeng district. Ride through local morning markets, ancient village pathways, and expansive rice terraces.
              </p>
              
              <ul className="space-y-3 mb-8 border-t border-b border-brand-green/10 py-6">
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-green shrink-0" /> Traditional market walk
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-green shrink-0" /> Subak terrace riding
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-green shrink-0" /> Fresh coconut finish
                </li>
              </ul>

              <div className="flex flex-col gap-3 text-sm text-brand-green-light mb-8">
                <div className="flex items-center gap-3">
                  <Clock3 className="w-5 h-5 opacity-70" />
                  <span>8:30 AM – 12:30 PM <span className="opacity-50">or</span> 1:30 PM – 5:30 PM</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex items-center justify-center w-5 font-semibold text-brand-green">Rp</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-green text-base">IDR 400,000 <span className="font-normal text-sm text-brand-green-light">Adult</span></span>
                    <span className="text-xs">Children IDR 350,000</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setActiveTour(cyclingConfig)} className="mt-auto w-full flex items-center justify-center gap-2 bg-sand text-brand-green font-bold py-3.5 rounded-xl border border-brand-green/20 hover:bg-brand-green hover:text-sand transition-colors cursor-pointer">
                Book this experience <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* Tour 2: Coffee */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-green/5 flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <img src="/coffee.jpg" alt="Luwak Coffee Plantation Umah Kuno" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 w-10 h-10 bg-sand rounded-full flex items-center justify-center text-brand-green font-bold shadow-md">02</div>
              <div className="absolute bottom-0 right-4 translate-y-1/2 w-14 h-14 bg-brand-green text-sand rounded-full flex items-center justify-center shadow-lg">
                <Coffee className="w-6 h-6" />
              </div>
            </div>
            <div className="p-8 pt-12 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-brand-green mb-3">Luwak Coffee Plantation Experience (Umah Kuno)</h3>
              <p className="text-brand-green-light text-sm mb-4 flex-1">
                Discover the secrets behind Bali's world-famous coffee at Umah Kuno. This standalone visit is perfect for a relaxing morning or a slow afternoon in the jungle.
              </p>
              <a 
                href="https://share.google/VOs6vwV16r2bVERjV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline mb-6"
              >
                📍 View Umah Kuno on Google Maps →
              </a>
              
              <ul className="space-y-3 mb-8 border-t border-b border-brand-green/10 py-6">
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-green shrink-0" /> Cocoa, vanilla & coffee jungle walk
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-green shrink-0" /> Traditional fire roasting
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-green shrink-0" /> 10-tea-and-coffee tasting flight
                </li>
              </ul>

              <div className="flex flex-col gap-3 text-sm text-brand-green-light mb-8">
                <div className="flex items-center gap-3">
                  <Clock3 className="w-5 h-5 opacity-70" />
                  <span>10:00 AM – 11:30 AM <span className="opacity-50">or</span> 2:00 PM – 3:30 PM</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex items-center justify-center w-5 font-semibold text-brand-green">Rp</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-green text-base">IDR 400,000 <span className="font-normal text-sm text-brand-green-light">Per Person</span></span>
                    <span className="text-xs">Minimum booking of 3 people</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setActiveTour(coffeeConfig)} className="mt-auto w-full flex items-center justify-center gap-2 bg-sand text-brand-green font-bold py-3.5 rounded-xl border border-brand-green/20 hover:bg-brand-green hover:text-sand transition-colors cursor-pointer">
                Book this experience <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* Tour 3: Cooking */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-green/5 flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <img src="/images/cooking/pancake-toss.jpg" alt="Cooking Class" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 w-10 h-10 bg-sand rounded-full flex items-center justify-center text-brand-green font-bold shadow-md">03</div>
              <div className="absolute bottom-0 right-4 translate-y-1/2 w-14 h-14 bg-brand-green text-sand rounded-full flex items-center justify-center shadow-lg">
                <CookingPot className="w-6 h-6" />
              </div>
            </div>
            <div className="p-8 pt-12 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-brand-green mb-3">Traditional Balinese Dinner Cooking Class</h3>
              <p className="text-brand-green-light text-sm mb-6 flex-1">
                Immerse yourself in the flavors of Indonesia. Set in a beautiful traditional kitchen, this hands-on class teaches you the secrets of Balinese spices.
              </p>
              
              <ul className="space-y-3 mb-8 border-t border-b border-brand-green/10 py-6">
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-green shrink-0" /> Balinese spice introduction
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-green shrink-0" /> Five hands-on dishes & pounding
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-green shrink-0" /> Digital recipe book to take home
                </li>
              </ul>

              <div className="flex flex-col gap-3 text-sm text-brand-green-light mb-8">
                <div className="flex items-center gap-3">
                  <Clock3 className="w-5 h-5 opacity-70" />
                  <span>5:30 PM (17:30) – 8:30 PM</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex items-center justify-center w-5 font-semibold text-brand-green">Rp</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-green text-base">IDR 400,000 <span className="font-normal text-sm text-brand-green-light">Adult</span></span>
                    <span className="text-xs">Children IDR 350,000</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setActiveTour(cookingConfig)} className="mt-auto w-full flex items-center justify-center gap-2 bg-sand text-brand-green font-bold py-3.5 rounded-xl border border-brand-green/20 hover:bg-brand-green hover:text-sand transition-colors cursor-pointer">
                Book this experience <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-24 px-6 lg:px-12 bg-white w-full">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            <button 
              onClick={() => setActiveItinerary('cycling')}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeItinerary === 'cycling' ? 'bg-brand-green text-sand' : 'bg-sand text-brand-green hover:bg-brand-green/10'}`}
            >
              Cycling Tour
            </button>
            <button 
              onClick={() => setActiveItinerary('coffee')}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeItinerary === 'coffee' ? 'bg-brand-green text-sand' : 'bg-sand text-brand-green hover:bg-brand-green/10'}`}
            >
              Coffee Plantation
            </button>
            <button 
              onClick={() => setActiveItinerary('cooking')}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeItinerary === 'cooking' ? 'bg-brand-green text-sand' : 'bg-sand text-brand-green hover:bg-brand-green/10'}`}
            >
              Cooking Class
            </button>
          </div>

          {activeItinerary === 'cycling' && (
            <div className="flex flex-col md:flex-row gap-16 animate-in fade-in duration-500">
              <div className="md:w-1/3">
                <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">A morning on two wheels</p>
                <h2 className="text-4xl font-serif text-brand-green font-bold leading-tight mb-6">
                  Follow the<br/>
                  <span className="italic font-light">Pejeng route.</span>
                </h2>
                <p className="text-lg text-brand-green-light">
                  The morning cycling itinerary, from Ubud pickup to the last sip of coconut water.
                </p>
                
                <div className="mt-12 p-6 bg-sand rounded-2xl flex items-start gap-4">
                  <Mountain className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                  <p className="text-brand-green font-medium text-sm leading-relaxed">
                    Mostly gentle riding<br/>with frequent stops for stories and photos.
                  </p>
                </div>
              </div>

              <div className="md:w-2/3 relative py-4">
                <div className="space-y-12">
                  {[
                    { time: "08:30 AM", title: "Pickup & Briefing", desc: "Driver picks you up from your Ubud hotel. Arrive at our Pejeng starting base for bike fitting and a safety briefing." },
                    { time: "09:00 AM", title: "Pejeng Local Market", desc: "Walk your bikes through the bustling traditional market. Learn about local spices, exotic fruits, and daily Balinese life." },
                    { time: "09:45 AM", title: "Village & Temple Cruising", desc: "Cycle through quiet neighborhood paths. Pass ancient temples and stop briefly at a traditional family compound to understand Balinese architecture." },
                    { time: "10:45 AM", title: "Subak Rice Terraces", desc: "The trail opens up to stunning, endless rice paddies. Cycle right on the field edges while learning about the traditional Subak irrigation system." },
                    { time: "12:00 PM", title: "Fresh Coconut & Wind Down", desc: "Finish the ride and celebrate with a freshly opened young coconut before heading back." },
                    { time: "12:30 PM", title: "Hotel Drop-off", desc: "Arrive back at your accommodation in Ubud." },
                  ].map((step, idx) => (
                    <div key={idx} className="relative pl-10 timeline-row">
                      <div className="timeline-dot"></div>
                      <div className="timeline-line"></div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                        <span className="text-brand-green-light font-semibold text-sm w-20 shrink-0">{step.time}</span>
                        <h3 className="text-xl font-bold text-brand-green">{step.title}</h3>
                      </div>
                      <p className="text-brand-green-light sm:pl-26 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeItinerary === 'coffee' && (
            <div className="flex flex-col md:flex-row gap-16 animate-in fade-in duration-500">
              <div className="md:w-1/3">
                <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">A sip of tradition</p>
                <h2 className="text-4xl font-serif text-brand-green font-bold leading-tight mb-6">
                  Taste the<br/>
                  <span className="italic font-light">Luwak magic.</span>
                </h2>
                <p className="text-lg text-brand-green-light">
                  A relaxing stroll through lush plantations followed by authentic roasting and tasting.
                </p>
                
                <div className="mt-12 p-6 bg-sand rounded-2xl flex items-start gap-4">
                  <Coffee className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                  <p className="text-brand-green font-medium text-sm leading-relaxed">
                    Learn the intricate process<br/>of world-famous Luwak Coffee.
                  </p>
                </div>
              </div>

              <div className="md:w-2/3 relative py-4">
                <div className="space-y-12">
                  {[
                    { time: "10:00 AM", title: "Arrival & Welcome", desc: "Arrive at the beautiful coffee plantation. Enjoy the fresh air and a quick introduction to the estate." },
                    { time: "10:15 AM", title: "Spice & Coffee Walk", desc: "Take a guided walk through the gardens. See raw coffee beans, cacao, vanilla, and other local spices growing." },
                    { time: "10:45 AM", title: "Traditional Roasting", desc: "Witness the traditional Balinese method of roasting coffee beans over a wood fire and try grinding them yourself." },
                    { time: "11:15 AM", title: "Coffee & Tea Tasting", desc: "Sit back and enjoy a flight of various local coffees and herbal teas overlooking the jungle valley." },
                    { time: "12:00 PM", title: "Luwak Coffee Experience", desc: "Sip on a cup of authentic Luwak coffee (optional) and explore the plantation shop before heading back." },
                  ].map((step, idx) => (
                    <div key={idx} className="relative pl-10 timeline-row">
                      <div className="timeline-dot"></div>
                      <div className="timeline-line"></div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                        <span className="text-brand-green-light font-semibold text-sm w-20 shrink-0">{step.time}</span>
                        <h3 className="text-xl font-bold text-brand-green">{step.title}</h3>
                      </div>
                      <p className="text-brand-green-light sm:pl-26 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeItinerary === 'cooking' && (
            <div className="flex flex-col md:flex-row gap-16 animate-in fade-in duration-500">
              <div className="md:w-1/3">
                <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">Hands-on culinary</p>
                <h2 className="text-4xl font-serif text-brand-green font-bold leading-tight mb-6">
                  Cook like<br/>
                  <span className="italic font-light">a Balinese.</span>
                </h2>
                <p className="text-lg text-brand-green-light">
                  From preparing fresh spices to feasting on your own traditional dinner.
                </p>
                
                <div className="mt-12 p-6 bg-sand rounded-2xl flex items-start gap-4">
                  <CookingPot className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                  <p className="text-brand-green font-medium text-sm leading-relaxed">
                    Take the secret recipes<br/>home to your own kitchen.
                  </p>
                </div>
              </div>

              <div className="md:w-2/3 relative py-4">
                <div className="space-y-12">
                  {[
                    { time: "05:30 PM", title: "Welcome Drink & Setup", desc: "Arrive at our traditional outdoor kitchen. Enjoy a welcome drink while putting on your apron." },
                    { time: "05:45 PM", title: "Spice Paste Prep", desc: "Learn about the essential Balinese ingredients. Chop, grind, and blend the famous 'Base Genep' spice paste." },
                    { time: "06:30 PM", title: "Cooking Session", desc: "Get hands-on preparing traditional dishes like Sate Lilit, Chicken Curry, and Lawar under expert guidance." },
                    { time: "07:30 PM", title: "Balinese Dessert", desc: "Prepare a sweet traditional dessert, like Dadar Gulung (pandan crepes with palm sugar)." },
                    { time: "08:00 PM", title: "Feast Together", desc: "Sit down with your host and enjoy the delicious dinner you just cooked in a beautiful setting." },
                    { time: "08:30 PM", title: "End of Experience", desc: "Receive your digital recipe book before heading back to your hotel." },
                  ].map((step, idx) => (
                    <div key={idx} className="relative pl-10 timeline-row">
                      <div className="timeline-dot"></div>
                      <div className="timeline-line"></div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                        <span className="text-brand-green-light font-semibold text-sm w-20 shrink-0">{step.time}</span>
                        <h3 className="text-xl font-bold text-brand-green">{step.title}</h3>
                      </div>
                      <p className="text-brand-green-light sm:pl-26 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="text-center mb-20">
          <span className="text-6xl text-brand-green font-serif leading-none block mb-4 opacity-40">"</span>
          <blockquote className="text-2xl lg:text-3xl font-serif text-brand-green leading-relaxed mb-6">
            We show you the lanes we use, the market we shop, and the food we cook at home.
          </blockquote>
          <p className="text-brand-green-light font-medium uppercase tracking-wide text-sm">
            — Your Sekar Bali Activity team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-brand-green opacity-50 font-bold text-xl mb-4 block">01</span>
            <h3 className="text-xl font-bold text-brand-green mb-3">Local by design</h3>
            <p className="text-brand-green-light leading-relaxed">
              Your visit directly supports village hosts, drivers, farmers, and family-run spaces in our community.
            </p>
          </div>
          <div>
            <span className="text-brand-green opacity-50 font-bold text-xl mb-4 block">02</span>
            <h3 className="text-xl font-bold text-brand-green mb-3">Comfortably small</h3>
            <p className="text-brand-green-light leading-relaxed">
              Unhurried groups mean more conversation, safer riding, and room to notice the beautiful details.
            </p>
          </div>
          <div>
            <span className="text-brand-green opacity-50 font-bold text-xl mb-4 block">03</span>
            <h3 className="text-xl font-bold text-brand-green mb-3">Ready for you</h3>
            <p className="text-brand-green-light leading-relaxed">
              Bikes, helmets, tastings, ingredients, and Ubud-area pickup are all arranged in advance. Just arrive ready.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center flex justify-center">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 border-2 border-brand-green text-brand-green px-8 py-4 rounded-full font-bold hover:bg-brand-green hover:text-sand transition-colors shadow-sm"
          >
            Read our family story <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact & Booking Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-brand-green text-sand w-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4 opacity-80">Start the conversation</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8">
            Save your place<br/>in Pejeng.
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-12">
            Click the button below to reach out directly to our local team on WhatsApp. Let us know your preferred date and group details, and we'll confirm availability immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://wa.me/6281775723663" 
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-sand text-brand-green px-10 py-5 rounded-full text-xl font-bold hover:scale-105 hover:bg-white transition-all shadow-xl w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Book via WhatsApp
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 border-2 border-sand/30 text-sand px-10 py-5 rounded-full text-xl font-bold hover:bg-sand/10 transition-colors w-full sm:w-auto"
            >
              Or send an email
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-brand-green-light font-medium">
            <Check className="w-5 h-5" /> No payment required to inquire
          </div>
        </div>
      </section>
    </main>
  )
}
