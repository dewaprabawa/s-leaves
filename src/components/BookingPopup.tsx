"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { X, ExternalLink } from 'lucide-react';

const MapPicker = dynamic(() => import('./MapPicker'), { ssr: false, loading: () => <div className="w-full h-full bg-sand-dark animate-pulse flex items-center justify-center text-brand-green">Loading map...</div> });

const UBUD_CENTER = { lat: -8.5069, lng: 115.2625 };

export interface TourConfig {
  id: string;
  title: string;
  times: string[];
  adultPrice: number;
  kidPrice?: number | null; // null if kids are not supported/have same price
  minPax: number;
  getYourGuideUrl?: string;
}

export function BookingPopup({ isOpen, onClose, tour }: { isOpen: boolean, onClose: () => void, tour: TourConfig | null }) {
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [time, setTime] = useState("");
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(UBUD_CENTER);
  const [isOutUbud, setIsOutUbud] = useState(false);
  const [locationDetails, setLocationDetails] = useState("");
  const [notes, setNotes] = useState("");

  // Initialize defaults when tour opens
  useEffect(() => {
    if (isOpen && tour) {
      setAdults(tour.minPax);
      setKids(0);
      setTime(tour.times[0] || "");
      setLocation(UBUD_CENTER);
      setIsOutUbud(false);
      setLocationDetails("");
      setNotes("");
    }
  }, [isOpen, tour]);

  if (!isOpen || !tour) return null;

  const hasKidPricing = tour.kidPrice !== null && tour.kidPrice !== undefined;
  
  const totalPax = adults + kids;
  const isInvalidPax = totalPax < tour.minPax;
  
  const adultPrice = tour.adultPrice;
  const kidPrice = tour.kidPrice || 0;
  const outOfUbudFee = 120000;

  const totalCost = (adults * adultPrice) + (kids * kidPrice) + (isOutUbud && location ? outOfUbudFee : 0);

  const formatIDR = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const handleBook = () => {
    if (isInvalidPax) return alert(`Minimum ${tour.minPax} persons required.`);
    if (!location) return alert("Please select a pickup location on the map.");

    const paxText = hasKidPricing ? `- Adults: ${adults}\n- Kids: ${kids}` : `- People: ${adults}`;

    const msg = `Hello Sekar Bali Activity! I'd like to book the ${tour.title}.
- Time: ${time}
${paxText}
- Pickup Location: https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}
- Location Details: ${locationDetails || "None provided"}
- Special Notes: ${notes || "None provided"}
- Out of Ubud Fee: ${isOutUbud ? "Yes (+120,000 IDR)" : "No (Free)"}
- Total Price: ${formatIDR(totalCost)}

Please confirm my booking!`;

    const waUrl = `https://wa.me/6281775723663?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6">
      <div className="bg-sand w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col md:flex-row">
        <button onClick={onClose} className="fixed top-4 right-4 md:absolute md:top-4 md:right-4 z-[2000] p-2.5 bg-white hover:bg-gray-100 rounded-full text-brand-green transition-colors shadow-xl border border-brand-green/10">
          <X className="w-6 h-6 md:w-5 md:h-5" />
        </button>
        
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[350px] relative rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden border-r border-brand-green/10">
          <MapPicker initialPosition={UBUD_CENTER} onLocationSelect={(lat, lng, isOut) => {
            setLocation({lat, lng});
            setIsOutUbud(isOut);
          }} />
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur text-brand-green p-3.5 rounded-xl text-sm font-medium shadow-lg z-[1000] border border-brand-green/10">
            <strong className="block mb-1">Pickup Location</strong>
            {location ? (
               isOutUbud ? <span className="text-red-600 font-bold block">Out of Ubud: +120,000 IDR charge</span> : <span className="text-brand-green font-bold block flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-green"></span> Within Ubud: Free Pickup</span>
            ) : <span className="opacity-70">Tap on the map to set your pickup pin.</span>}
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <h2 className="text-3xl font-serif text-brand-green font-bold mb-2">Book Experience</h2>
          <p className="text-brand-green-light text-sm mb-6 pb-4 border-b border-brand-green/10 font-bold">{tour.title}</p>
          
          {tour.getYourGuideUrl && (
            <div className="mb-6">
              <a 
                href={tour.getYourGuideUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#FF5533] hover:bg-[#e64a2c] text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-sm shadow-[#FF5533]/20"
              >
                Book via GetYourGuide <ExternalLink className="w-4 h-4" />
              </a>
              <div className="mt-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-brand-green/10"></div>
                <span className="text-[10px] text-brand-green/60 font-bold uppercase tracking-wider">or book directly via whatsapp</span>
                <div className="h-px flex-1 bg-brand-green/10"></div>
              </div>
            </div>
          )}

          <div className="space-y-6 flex-1">
            {/* Time */}
            <div>
              <label className="block text-brand-green font-bold text-sm mb-2">Pickup Time</label>
              <select value={time} onChange={e => setTime(e.target.value)} className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3.5 text-brand-green font-medium focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm appearance-none cursor-pointer">
                {tour.times.map((t, idx) => (
                  <option key={idx} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Pax */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-brand-green font-bold text-sm mb-2">{hasKidPricing ? "Adults" : "People"} ({tour.adultPrice / 1000}k)</label>
                <div className="flex items-center bg-white border border-brand-green/20 rounded-xl overflow-hidden shadow-sm">
                  <button onClick={() => setAdults(Math.max(0, adults - 1))} className="px-4 py-3.5 hover:bg-gray-50 text-brand-green font-bold text-lg active:bg-gray-100 transition-colors">-</button>
                  <span className="flex-1 text-center font-bold text-brand-green text-lg">{adults}</span>
                  <button onClick={() => setAdults(adults + 1)} className="px-4 py-3.5 hover:bg-gray-50 text-brand-green font-bold text-lg active:bg-gray-100 transition-colors">+</button>
                </div>
              </div>
              {hasKidPricing && (
                <div className="flex-1">
                  <label className="block text-brand-green font-bold text-sm mb-2">Kids ({(tour.kidPrice || 0) / 1000}k)</label>
                  <div className="flex items-center bg-white border border-brand-green/20 rounded-xl overflow-hidden shadow-sm">
                    <button onClick={() => setKids(Math.max(0, kids - 1))} className="px-4 py-3.5 hover:bg-gray-50 text-brand-green font-bold text-lg active:bg-gray-100 transition-colors">-</button>
                    <span className="flex-1 text-center font-bold text-brand-green text-lg">{kids}</span>
                    <button onClick={() => setKids(kids + 1)} className="px-4 py-3.5 hover:bg-gray-50 text-brand-green font-bold text-lg active:bg-gray-100 transition-colors">+</button>
                  </div>
                </div>
              )}
            </div>
            {isInvalidPax && <p className="text-red-500 text-sm font-bold mt-2 bg-red-50 p-2 rounded-lg border border-red-100">⚠️ Minimum {tour.minPax} persons required.</p>}

            {/* Additional Info */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-brand-green font-bold text-sm mb-2">Location Details (Optional)</label>
                <input 
                  type="text" 
                  value={locationDetails} 
                  onChange={(e) => setLocationDetails(e.target.value)}
                  placeholder="e.g. Maya Resort, Room 102" 
                  className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3 text-sm text-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
                />
              </div>
              <div>
                <label className="block text-brand-green font-bold text-sm mb-2">Special Notes (Optional)</label>
                <textarea 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Dietary requirements, specific requests..." 
                  rows={2}
                  className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3 text-sm text-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm resize-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-brand-green/10">
            <div className="flex justify-between items-end mb-5">
              <span className="text-brand-green-light font-bold">Total Estimate</span>
              <span className="text-3xl font-bold text-brand-green">{formatIDR(totalCost)}</span>
            </div>
            
            <button 
              onClick={handleBook}
              disabled={isInvalidPax || !location}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${isInvalidPax || !location ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-brand-green text-sand hover:bg-brand-green-light shadow-lg hover:shadow-xl hover:-translate-y-0.5'}`}
            >
              Continue to WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
