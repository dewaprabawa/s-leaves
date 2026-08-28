"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { BookingPopup, TourConfig } from '@/components/BookingPopup'
import { FAQSection } from '@/components/FAQSection'
import { 
  ArrowRight, MapPin, Users, Shield, Check, Clock3, 
  Mountain, Zap, Star, ChevronRight, Bike, Coffee, 
  CookingPot, TreePine, Droplets, Eye, Flame, Heart
} from 'lucide-react'

export default function Home() {
  const [activeTour, setActiveTour] = useState<TourConfig | null>(null);

  const jungleTrailConfig: TourConfig = {
    id: "atv-jungle",
    title: "ATV Jungle Trail Adventure",
    times: ["08:00 AM", "10:30 AM", "01:00 PM"],
    adultPrice: 850000,
    kidPrice: 650000,
    minPax: 1,
  };

  const volcanoRouteConfig: TourConfig = {
    id: "atv-volcano",
    title: "ATV Volcano Route",
    times: ["08:00 AM", "10:00 AM"],
    adultPrice: 1200000,
    kidPrice: 900000,
    minPax: 1,
  };

  const riceTerraceConfig: TourConfig = {
    id: "atv-rice-terrace",
    title: "ATV Rice Terrace Signature Trail",
    times: ["08:00 AM"],
    adultPrice: 1500000,
    kidPrice: 1100000,
    minPax: 1,
  };

  return (
    <main className="w-full flex flex-col bg-sand">
      <BookingPopup isOpen={activeTour !== null} onClose={() => setActiveTour(null)} tour={activeTour} />
      
      {/* ============================================================= */}
      {/* HERO SECTION — Full-width immersive ATV */}
      {/* ============================================================= */}
      <section id="top" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80" 
            alt="ATV quad bike adventure through Bali jungle trails"
            className="object-cover w-full h-full"
          />
          <div className="atv-hero-overlay absolute inset-0" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-accent/90 text-white px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Zap className="w-4 h-4" />
            #1 ATV Adventure in Bali
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold leading-tight mb-6 text-white drop-shadow-lg">
            Conquer Bali&apos;s<br/>
            <span className="italic font-light text-brand-accent-light">Wild Trails.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed mb-10">
            Ride powerful ATVs through jungles, volcanic landscapes, and iconic rice terraces. 
            An unforgettable adventure for all skill levels — from first-timers to pros.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a 
              href="#atv-packages" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('atv-packages')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent-light hover:scale-105 transition-all shadow-xl cursor-pointer"
            >
              Explore ATV Tours <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/6281775723663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Book via WhatsApp
            </a>
          </div>

          {/* Hero Stats */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-white/80">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Shield className="w-5 h-5 text-brand-accent-light" /> Full safety gear included
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Users className="w-5 h-5 text-brand-accent-light" /> All skill levels
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Star className="w-5 h-5 text-brand-accent-light" /> Expert local guides
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="w-5 h-5 text-brand-accent-light" /> Hotel pickup included
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </div>
      </section>

      {/* ============================================================= */}
      {/* STATS STRIP — Key numbers */}
      {/* ============================================================= */}
      <section className="bg-brand-green text-sand py-16 px-6 lg:px-12 section-divider-wave">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center lg:justify-between gap-12 lg:gap-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <strong className="text-5xl font-serif text-brand-accent-light">3</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">epic trail<br/>routes</span>
          </div>
          <div className="flex items-center gap-4 text-center sm:text-left">
            <strong className="text-5xl font-serif text-brand-accent-light">4h</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">maximum<br/>adventure</span>
          </div>
          <div className="flex items-center gap-4 text-center sm:text-left">
            <strong className="text-5xl font-serif text-brand-accent-light">850k</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">IDR starting<br/>price</span>
          </div>
          <div className="flex items-center gap-4 text-center sm:text-left">
            <strong className="text-5xl font-serif text-brand-accent-light">500+</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">happy<br/>riders</span>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* ATV PACKAGES — Main product cards */}
      {/* ============================================================= */}
      <section id="atv-packages" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-16 text-center">
          <p className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-4">Choose your trail</p>
          <h2 className="text-4xl lg:text-6xl font-serif text-brand-green font-bold leading-tight mb-6">
            Three legendary<br/>ATV adventures.
          </h2>
          <p className="text-lg text-brand-green-light max-w-2xl mx-auto">
            Every route is guided by local experts who know every turn, river crossing, and hidden viewpoint. 
            Pick your level and let&apos;s ride.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ATV Package 1: Jungle Trail */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-green/5 flex flex-col group relative">
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
              Beginner Friendly
            </div>
            <div className="relative h-72 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80" 
                alt="ATV Jungle Trail through Bali tropical forest" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Clock3 className="w-4 h-4" />
                <span className="text-sm font-bold">2 Hours</span>
              </div>
              <div className="absolute bottom-0 right-4 translate-y-1/2 w-14 h-14 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-lg">
                <TreePine className="w-6 h-6" />
              </div>
            </div>
            <div className="p-8 pt-12 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-brand-green mb-3">Jungle Trail Adventure</h3>
              <p className="text-brand-green-light text-sm mb-6 flex-1">
                <strong className="block text-brand-green mb-1 font-semibold">The perfect introduction to ATV riding.</strong>
                Navigate through lush tropical forests, splash across shallow rivers, and discover hidden waterfalls on this beginner-friendly trail.
              </p>
              
              <ul className="space-y-3 mb-8 border-t border-b border-brand-green/10 py-6">
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" /> Tropical jungle trails
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" /> River crossings & waterfall stop
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" /> Full safety gear & guide
                </li>
              </ul>

              <div className="flex flex-col gap-3 text-sm text-brand-green-light mb-8">
                <div className="flex items-center gap-3">
                  <Clock3 className="w-5 h-5 opacity-70" />
                  <span>8:00 AM · 10:30 AM · 1:00 PM</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex items-center justify-center w-5 font-semibold text-brand-green">Rp</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-green text-lg">IDR 850,000 <span className="font-normal text-sm text-brand-green-light">/ person</span></span>
                    <span className="text-xs">Children (7-12) IDR 650,000</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setActiveTour(jungleTrailConfig)} className="mt-auto w-full flex items-center justify-center gap-2 bg-brand-accent text-white font-bold py-4 rounded-xl hover:bg-brand-accent-light transition-colors cursor-pointer shadow-md">
                Book Jungle Trail <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* ATV Package 2: Volcano Route */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-green/5 flex flex-col group relative ring-2 ring-brand-accent/30">
            <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm flex items-center gap-1">
              <Flame className="w-3 h-3" /> Most Popular
            </div>
            <div className="relative h-72 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=800&q=80" 
                alt="ATV Volcano Route with Mount Batur views" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Clock3 className="w-4 h-4" />
                <span className="text-sm font-bold">3 Hours</span>
              </div>
              <div className="absolute bottom-0 right-4 translate-y-1/2 w-14 h-14 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-lg">
                <Mountain className="w-6 h-6" />
              </div>
            </div>
            <div className="p-8 pt-12 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-brand-green mb-3">Volcano Route</h3>
              <p className="text-brand-green-light text-sm mb-6 flex-1">
                <strong className="block text-brand-green mb-1 font-semibold">Our most thrilling route.</strong>
                Tear through volcanic black sand, tackle rugged pine forest trails, and ride with jaw-dropping views of Mount Batur as your backdrop.
              </p>
              
              <ul className="space-y-3 mb-8 border-t border-b border-brand-green/10 py-6">
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" /> Volcanic black sand terrain
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" /> Pine forest & Mount Batur views
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" /> Lunch stop included
                </li>
              </ul>

              <div className="flex flex-col gap-3 text-sm text-brand-green-light mb-8">
                <div className="flex items-center gap-3">
                  <Clock3 className="w-5 h-5 opacity-70" />
                  <span>8:00 AM · 10:00 AM</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex items-center justify-center w-5 font-semibold text-brand-green">Rp</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-green text-lg">IDR 1,200,000 <span className="font-normal text-sm text-brand-green-light">/ person</span></span>
                    <span className="text-xs">Children (7-12) IDR 900,000</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setActiveTour(volcanoRouteConfig)} className="mt-auto w-full flex items-center justify-center gap-2 bg-brand-accent text-white font-bold py-4 rounded-xl hover:bg-brand-accent-light transition-colors cursor-pointer shadow-md">
                Book Volcano Route <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* ATV Package 3: Rice Terrace Signature */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-green/5 flex flex-col group relative">
            <div className="absolute top-4 left-4 bg-brand-green text-sand text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm flex items-center gap-1">
              <Star className="w-3 h-3" /> Signature Experience
            </div>
            <div className="relative h-72 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80" 
                alt="ATV Rice Terrace Trail through Bali's iconic paddy fields" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Clock3 className="w-4 h-4" />
                <span className="text-sm font-bold">4 Hours</span>
              </div>
              <div className="absolute bottom-0 right-4 translate-y-1/2 w-14 h-14 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <div className="p-8 pt-12 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-brand-green mb-3">Rice Terrace Signature Trail</h3>
              <p className="text-brand-green-light text-sm mb-6 flex-1">
                <strong className="block text-brand-green mb-1 font-semibold">The ultimate Bali ATV experience.</strong>
                Our full-length signature ride takes you through rice terraces, traditional villages, jungle canopies, rivers, and finishes with a feast.
              </p>
              
              <ul className="space-y-3 mb-8 border-t border-b border-brand-green/10 py-6">
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" /> Rice terraces & village trails
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" /> Jungle, rivers & waterfall swim
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-green">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" /> Traditional lunch included
                </li>
              </ul>

              <div className="flex flex-col gap-3 text-sm text-brand-green-light mb-8">
                <div className="flex items-center gap-3">
                  <Clock3 className="w-5 h-5 opacity-70" />
                  <span>8:00 AM (Morning only)</span>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex items-center justify-center w-5 font-semibold text-brand-green">Rp</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-green text-lg">IDR 1,500,000 <span className="font-normal text-sm text-brand-green-light">/ person</span></span>
                    <span className="text-xs">Children (7-12) IDR 1,100,000</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setActiveTour(riceTerraceConfig)} className="mt-auto w-full flex items-center justify-center gap-2 bg-brand-green text-sand font-bold py-4 rounded-xl hover:bg-brand-green-light transition-colors cursor-pointer shadow-md">
                Book Signature Trail <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

        </div>
      </section>

      {/* ============================================================= */}
      {/* HOW IT WORKS — 4-step process */}
      {/* ============================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-white w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-4">Simple & easy</p>
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-6">
              How your ATV<br/>adventure works.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>, title: "Book via WhatsApp", desc: "Message our team with your date, group size, and chosen trail. We'll confirm instantly." },
              { step: "02", icon: <MapPin className="w-7 h-7" />, title: "Hotel Pickup", desc: "Our driver picks you up from your hotel in Ubud/Bali area and takes you to the ATV base camp." },
              { step: "03", icon: <Shield className="w-7 h-7" />, title: "Gear Up & Ride", desc: "Get fitted with full safety gear, choose your ATV, receive a briefing, and hit the trails!" },
              { step: "04", icon: <Star className="w-7 h-7" />, title: "Celebrate", desc: "Return to base, enjoy refreshments, review your photos, and head back with epic memories." },
            ].map((item) => (
              <div key={item.step} className="bg-sand rounded-2xl p-8 flex flex-col items-center text-center group hover:shadow-lg transition-shadow">
                <span className="text-brand-accent font-bold text-sm mb-4">{item.step}</span>
                <div className="w-16 h-16 bg-brand-green text-sand rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-green mb-3">{item.title}</h3>
                <p className="text-brand-green-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* GALLERY — ATV Action Mosaic */}
      {/* ============================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-sand w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-4">The experience</p>
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-6">
              Your ride awaits.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1000&q=80" alt="ATV riding through jungle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-brand-green px-4 py-2 rounded-full text-sm font-bold shadow-md">
                🌿 Jungle Trail
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=600&q=80" alt="Volcanic landscape ATV" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80" alt="Bali temple" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80" alt="Rice terrace views" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-brand-green px-4 py-2 rounded-full text-sm font-bold shadow-md">
                🌾 Rice Terraces
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80" alt="Adventure celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-brand-green px-4 py-2 rounded-full text-sm font-bold shadow-md">
                🌋 Volcano Route
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SAFETY & EQUIPMENT */}
      {/* ============================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-brand-green text-sand w-full section-divider-wave">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-accent-light font-semibold tracking-wide uppercase text-sm mb-4">Your safety first</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
              Ride with<br/>
              <span className="italic font-light text-brand-accent-light">total confidence.</span>
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Every ATV is inspected daily. Every rider gets top-tier safety gear. Every tour has an expert guide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Full Safety Gear", desc: "Helmets, goggles, gloves, and boots included with every ride — all sanitized and maintained." },
              { icon: <Zap className="w-8 h-8" />, title: "Maintained ATVs", desc: "Our fleet is serviced daily and replaced regularly. Automatic and manual options available." },
              { icon: <Users className="w-8 h-8" />, title: "Expert Guides", desc: "Every group has a dedicated local guide who knows every turn, river, and the best photo spots." },
              { icon: <Droplets className="w-8 h-8" />, title: "Shower & Change", desc: "Clean up at our base camp after the ride. Towels, showers, and changing rooms provided." },
              { icon: <Heart className="w-8 h-8" />, title: "Insurance Included", desc: "All riders are covered by our comprehensive adventure insurance for total peace of mind." },
              { icon: <Star className="w-8 h-8" />, title: "Photo Package", desc: "Professional action shots along the trail captured by our photographer. Available digitally." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <div className="text-brand-accent-light mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* OTHER EXPERIENCES — Secondary tours */}
      {/* ============================================================= */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-16 text-center">
          <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">Beyond the ATV</p>
          <h2 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-6">
            More ways to<br/>experience Bali.
          </h2>
          <p className="text-lg text-brand-green-light max-w-2xl mx-auto">
            Combine your ATV adventure with our other village-led experiences for the ultimate Bali day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cycling */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-md group">
            <div className="relative h-48 overflow-hidden">
              <img src="/images/cycling/rice-field-bikes.jpg" alt="Village Cycling Tour" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 right-4 translate-y-1/2 w-10 h-10 bg-brand-green text-sand rounded-full flex items-center justify-center shadow-md">
                <Bike className="w-5 h-5" />
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="text-lg font-bold text-brand-green mb-2">Village Cycling Tour</h3>
              <p className="text-brand-green-light text-sm mb-4">Ride through rice terraces and ancient temples at village pace.</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-green">IDR 400,000</span>
                <Link href="/tours" className="text-brand-accent font-bold text-sm hover:underline flex items-center gap-1">
                  View <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Coffee */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-md group">
            <div className="relative h-48 overflow-hidden">
              <img src="/coffee.jpg" alt="Luwak Coffee Plantation" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 right-4 translate-y-1/2 w-10 h-10 bg-brand-green text-sand rounded-full flex items-center justify-center shadow-md">
                <Coffee className="w-5 h-5" />
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="text-lg font-bold text-brand-green mb-2">Coffee Plantation Experience</h3>
              <p className="text-brand-green-light text-sm mb-4">Discover the world-famous Luwak coffee process and taste.</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-green">IDR 400,000</span>
                <Link href="/tours" className="text-brand-accent font-bold text-sm hover:underline flex items-center gap-1">
                  View <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Cooking */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-md group">
            <div className="relative h-48 overflow-hidden">
              <img src="/images/cooking/pancake-toss.jpg" alt="Cooking Class" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 right-4 translate-y-1/2 w-10 h-10 bg-brand-green text-sand rounded-full flex items-center justify-center shadow-md">
                <CookingPot className="w-5 h-5" />
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="text-lg font-bold text-brand-green mb-2">Balinese Cooking Class</h3>
              <p className="text-brand-green-light text-sm mb-4">Hands-on traditional dinner cooking with local family hosts.</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-green">IDR 400,000</span>
                <Link href="/tours" className="text-brand-accent font-bold text-sm hover:underline flex items-center gap-1">
                  View <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ============================================================= */}
      {/* FAQ Section */}
      {/* ============================================================= */}
      <FAQSection />

      {/* ============================================================= */}
      {/* CTA / CONTACT — Bold booking section */}
      {/* ============================================================= */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-brand-green text-sand w-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-accent-light font-semibold tracking-wide uppercase text-sm mb-4 opacity-80">Ready to ride?</p>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Book your<br/>ATV adventure.
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-12">
            Click below to reach our team on WhatsApp. Tell us your date, group size, and chosen trail — we&apos;ll confirm your spot immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://wa.me/6281775723663" 
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-brand-accent text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 hover:bg-brand-accent-light transition-all shadow-xl w-full sm:w-auto"
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
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-brand-green-light font-medium text-sm">
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-accent-light" /> No payment to inquire</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-accent-light" /> Free cancellation</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-accent-light" /> Hotel pickup included</span>
          </div>
        </div>
      </section>
    </main>
  )
}
