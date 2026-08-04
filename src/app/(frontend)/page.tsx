"use client";
import React from 'react'
import Link from 'next/link'
import { FAQSection } from '@/components/FAQSection'
import { ArrowRight, MapPin, Users, Check, Clock3, Mountain } from 'lucide-react'

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-sand">
      {/* Hero Section */}
      <section id="top" className="relative w-full min-h-[85vh] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 py-12 lg:py-0 overflow-hidden">
        <div className="lg:w-1/2 flex flex-col justify-center max-w-2xl z-10 pr-0 lg:pr-12">
          <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">
            Premium Dirt Bike Experience · Bali
          </p>
          <h1 className="text-5xl lg:text-7xl font-serif text-brand-green font-bold leading-tight mb-6">
            Conquer Bali,<br />
            <span className="italic font-light">off the beaten path.</span>
          </h1>
          <h2 className="text-lg lg:text-xl text-brand-green-light mb-10 max-w-lg leading-relaxed">
            Explore Bali's volcanic landscapes, forests, and black sand beaches on two wheels. Choose your own pace and adventure level with our premium dirt bike tours.
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <Link 
              href="/tours/bali-dirt-bike-adventure" 
              className="inline-flex items-center gap-2 bg-brand-green text-sand px-7 py-4 rounded-full font-semibold hover:bg-brand-green-light transition-colors cursor-pointer"
            >
              View & Book Tour <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-brand-green-light">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Base Kintamani
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Min 2 Riders
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" /> Gear Included
            </span>
          </div>
        </div>

        <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative aspect-[4/3] lg:aspect-auto lg:h-[80vh] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/images/dirt-bike.jpg" 
            alt="Bali Dirt Bike Adventure"
            className="object-cover w-full h-full bg-gray-200"
          />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-sand drop-shadow-md">
            <div className="flex flex-col text-sm font-medium tracking-wide">
              <span>Mount Batur</span>
              <span>Kintamani, Bali</span>
            </div>
          </div>
          {/* Sun Stamp Element */}
          <div className="absolute top-8 right-8 w-28 h-28 bg-sand rounded-full flex flex-col items-center justify-center text-brand-green rotate-12 shadow-lg hidden md:flex">
            <span className="text-[10px] tracking-widest font-semibold uppercase">Ride</span>
            <strong className="text-xl font-bold tracking-wider uppercase">Bali</strong>
            <span className="text-[10px] tracking-widest font-semibold uppercase">Wildly</span>
          </div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="bg-brand-green text-sand py-16 px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-12">
        <p className="text-2xl lg:text-3xl font-light leading-snug max-w-xl text-center lg:text-left">
          Not a checklist.<br />
          <span className="font-medium">A real adventure, tailored to your skill.</span>
        </p>
        <div className="flex flex-wrap justify-center lg:justify-end gap-12 lg:gap-20">
          <div className="flex items-center gap-4">
            <strong className="text-5xl font-serif">7</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">epic<br/>trails</span>
          </div>
          <div className="flex items-center gap-4">
            <strong className="text-5xl font-serif">8h</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">maximum<br/>ride length</span>
          </div>
          <div className="flex items-center gap-4">
            <strong className="text-5xl font-serif">1.2m</strong>
            <span className="text-sm font-medium opacity-80 leading-tight">IDR starting<br/>price</span>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="mb-16 text-center">
          <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">Choose your pace</p>
          <h2 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-6">
            The Ultimate Dirt Bike Experience.
          </h2>
          <p className="text-lg text-brand-green-light max-w-2xl mx-auto">
            From beginners to pros, we have the perfect trail and bike for you.
          </p>
        </div>

        <article className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-green/5 flex flex-col md:flex-row group relative">
          <div className="absolute top-4 right-4 bg-brand-green text-sand text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
            Our signature experience
          </div>
          <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden">
            <img src="/images/dirt-bike.jpg" alt="Bali Dirt Bike Adventure" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 bg-gray-200" />
            <div className="absolute bottom-0 right-4 md:-right-4 translate-y-1/2 md:translate-y-0 md:top-1/2 md:-translate-y-1/2 w-14 h-14 bg-brand-green text-sand rounded-full flex items-center justify-center shadow-lg z-10">
              <Mountain className="w-6 h-6" />
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col flex-1">
            <h3 className="text-3xl font-bold text-brand-green mb-4">Bali Dirt Bike & Adventure Tour</h3>
            <p className="text-brand-green-light text-base mb-8 flex-1">
              Explore Bali's volcanic landscapes, forests, and black sand beaches on two wheels. Choose your own pace and adventure level. We provide all the gear and expert guides.
            </p>
            
            <ul className="space-y-4 mb-8 border-t border-b border-brand-green/10 py-6">
              <li className="flex items-start gap-3 text-base font-medium text-brand-green">
                <Check className="w-6 h-6 text-brand-green shrink-0" /> Volcanic trails, forests, & black sand beaches
              </li>
              <li className="flex items-start gap-3 text-base font-medium text-brand-green">
                <Check className="w-6 h-6 text-brand-green shrink-0" /> Full riding gear & boots provided
              </li>
              <li className="flex items-start gap-3 text-base font-medium text-brand-green">
                <Check className="w-6 h-6 text-brand-green shrink-0" /> All skill levels welcome (Beginner to Pro)
              </li>
            </ul>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-brand-green-light mb-8">
              <div className="flex items-center gap-3">
                <Clock3 className="w-6 h-6 opacity-70" />
                <span className="text-base">Half Day (3-4h)<br/>Full Day (6-8h)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 font-semibold text-brand-green text-lg">Rp</div>
                <div className="flex flex-col">
                  <span className="font-bold text-brand-green text-xl">IDR 1,200,000 <span className="font-normal text-sm text-brand-green-light">starting</span></span>
                  <span className="text-sm">Based on bike & track selection</span>
                </div>
              </div>
            </div>

            <Link href="/tours/bali-dirt-bike-adventure" className="mt-auto w-full flex items-center justify-center gap-2 bg-sand text-brand-green font-bold py-4 rounded-xl border border-brand-green/20 hover:bg-brand-green hover:text-sand transition-colors cursor-pointer text-lg">
              View Trail Options & Book <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </article>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-24 px-6 lg:px-12 bg-white w-full">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 animate-in fade-in duration-500">
            <div className="md:w-1/3">
              <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">Unleash the adventure</p>
              <h2 className="text-4xl font-serif text-brand-green font-bold leading-tight mb-6">
                Conquer the<br/>
                <span className="italic font-light">volcanic trails.</span>
              </h2>
              <p className="text-lg text-brand-green-light">
                A thrilling ride through Bali's untouched nature, forests, and black sand beaches.
              </p>
              
              <div className="mt-12 p-6 bg-sand rounded-2xl flex items-start gap-4">
                <Mountain className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                <p className="text-brand-green font-medium text-sm leading-relaxed">
                  Designed for all levels,<br/>from beginners to seasoned pros.
                </p>
              </div>
            </div>

            <div className="md:w-2/3 relative py-4">
              <div className="space-y-12">
                {[
                  { time: "08:00 AM", title: "Hotel Pickup", desc: "Our driver will pick you up from your hotel in Bali and take you to our base camp in Kintamani." },
                  { time: "09:30 AM", title: "Gear & Briefing", desc: "Arrive at the base. Get fitted with top-tier safety gear, choose your bike, and receive a comprehensive safety briefing." },
                  { time: "10:00 AM", title: "Start Riding", desc: "Hit the trails! Ride through pine forests, tackle the volcanic black sand, and navigate exciting terrain tailored to your skill level." },
                  { time: "12:00 PM", title: "Lunch Break", desc: "Stop for a delicious, hearty lunch in the middle of nature to recharge your energy." },
                  { time: "01:00 PM", title: "Afternoon Ride", desc: "Continue your adventure, conquering new paths and enjoying the spectacular views of Mount Batur." },
                  { time: "03:00 PM", title: "Return & Drop-off", desc: "Return to base camp, return your gear, review your photos, and relax on the drive back to your hotel." },
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="text-center mb-20">
          <span className="text-6xl text-brand-green font-serif leading-none block mb-4 opacity-40">"</span>
          <blockquote className="text-2xl lg:text-3xl font-serif text-brand-green leading-relaxed mb-6">
            We show you the trails we ride, the mountains we climb, and the real Bali we love.
          </blockquote>
          <p className="text-brand-green-light font-medium uppercase tracking-wide text-sm">
            — Your Selaras Adventure Team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-brand-green opacity-50 font-bold text-xl mb-4 block">01</span>
            <h3 className="text-xl font-bold text-brand-green mb-3">Expert Guides</h3>
            <p className="text-brand-green-light leading-relaxed">
              Our guides are seasoned riders who know every hidden track and viewpoint in Kintamani.
            </p>
          </div>
          <div>
            <span className="text-brand-green opacity-50 font-bold text-xl mb-4 block">02</span>
            <h3 className="text-xl font-bold text-brand-green mb-3">Top-Tier Safety</h3>
            <p className="text-brand-green-light leading-relaxed">
              We provide full, well-maintained safety gear and match trails to your exact skill level for a safe ride.
            </p>
          </div>
          <div>
            <span className="text-brand-green opacity-50 font-bold text-xl mb-4 block">03</span>
            <h3 className="text-xl font-bold text-brand-green mb-3">Ready for you</h3>
            <p className="text-brand-green-light leading-relaxed">
              Bikes, helmets, boots, fuel, and hotel pickup are all arranged in advance. Just arrive ready to ride.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact & Booking Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-brand-green text-sand w-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4 opacity-80">Start your adventure</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8">
            Book your ride<br/>today.
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-12">
            Click the button below to reach out directly to our local team on WhatsApp. Let us know your preferred date, skill level, and group size, and we'll confirm availability immediately.
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
