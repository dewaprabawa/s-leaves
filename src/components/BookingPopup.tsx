"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import { X, ExternalLink, Info } from 'lucide-react';
import { formatIdr } from '@/lib/whatsapp';
import {
  createInvoiceNumber,
  type InvoiceDraft,
} from '@/lib/invoice';
import InvoicePaymentPanel from '@/components/InvoicePaymentPanel';
import { getTourSlugForActivity } from '@/lib/bookingTourDetails';
import { MEETING_POINT } from '@/lib/meetingPoint';
import {
  DROP_SAME_HOTEL_FEE_IDR,
  OUT_OF_UBUD_EXTRA_IDR,
  PICKUP_FEE_IDR,
  getCompareAtSubtotal,
  hasTierPromo,
  quoteActivity,
  quotePickup,
} from '@/lib/pricing';
import BookingTourDetailPanel from '@/components/BookingTourDetailPanel';
import PromoPrice from '@/components/PromoPrice';

const MapPicker = dynamic(() => import('./MapPicker'), { ssr: false, loading: () => <div className="w-full h-full bg-sand-dark animate-pulse flex items-center justify-center text-brand-green">Loading map...</div> });

const UBUD_CENTER = { lat: -8.5069, lng: 115.2625 };

export interface TourConfig {
  id: string
  title: string
  times: string[]
  adultPrice: number
  kidPrice?: number | null
  minPax: number
  getYourGuideUrl?: string
  freeUbudPickup?: boolean
}

export function BookingPopup({
  isOpen,
  onClose,
  tour,
  tourOptions,
}: {
  isOpen: boolean
  onClose: () => void
  tour: TourConfig | null
  tourOptions?: TourConfig[]
}) {
  const [mounted, setMounted] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestAge, setGuestAge] = useState("");
  const [guestType, setGuestType] = useState<"Adult" | "Child">("Adult");
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [childrenAges, setChildrenAges] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(UBUD_CENTER);
  const [isOutUbud, setIsOutUbud] = useState(false);
  const [locationDetails, setLocationDetails] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedTourId, setSelectedTourId] = useState(tour?.id || "");
  const [showDetails, setShowDetails] = useState(false);
  const [wantsPickup, setWantsPickup] = useState(false);
  const [sameDropOff, setSameDropOff] = useState(false);
  const [step, setStep] = useState<'form' | 'invoice'>('form');
  const [invoice, setInvoice] = useState<InvoiceDraft | null>(null);

  const activeTour =
    (tourOptions && tourOptions.find((t) => t.id === selectedTourId)) ||
    tour

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && tour) {
      setSelectedTourId(tour.id);
      setGuestName("");
      setGuestAge("");
      setGuestType("Adult");
      setAdults(Math.max(tour.minPax, 1));
      setKids(0);
      setChildrenAges("");
      setTime(tour.times[0] || "");
      setDate(new Date().toISOString().split('T')[0]);
      setLocation(UBUD_CENTER);
      setIsOutUbud(false);
      setLocationDetails("");
      setNotes("");
      setShowDetails(false);
      setWantsPickup(false);
      setSameDropOff(false);
      setStep('form');
      setInvoice(null);
    }
  }, [isOpen, tour]);

  useEffect(() => {
    if (!activeTour) return
    setAdults((prev) => Math.max(activeTour.minPax, prev || activeTour.minPax))
    setTime(activeTour.times[0] || "")
    setShowDetails(false)
  }, [activeTour?.id])

  // Keep dialog above the fixed navbar and lock page scroll while open
  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!mounted || !isOpen || !activeTour) return null;

  const hasKidPricing = activeTour.kidPrice !== null && activeTour.kidPrice !== undefined;
  const totalPax = adults + kids;
  const isTandem = activeTour.id === 'tandem-atv';
  const isInvalidPax =
    totalPax < activeTour.minPax || (isTandem && (adults < 2 || adults % 2 !== 0));

  const activityQuote = quoteActivity({
    activityId: activeTour.id,
    adults,
    children: kids,
  });
  const hasFreeUbudPickup = activeTour.freeUbudPickup === true;
  const pickupQuote = quotePickup({
    wantsPickup,
    freeUbudPickup: hasFreeUbudPickup,
    isOutUbud,
    sameDropOff,
  });

  const activityTotal =
    (activityQuote?.activitySubtotal ?? 0) + (activityQuote?.childSubtotal ?? 0);
  const pickupFee = pickupQuote.total;
  const totalCost = activityTotal + pickupFee;
  const compareAtActivityTotal = activityQuote ? getCompareAtSubtotal(activityQuote) : 0;
  const compareAtTotal = compareAtActivityTotal + (activityQuote?.childSubtotal ?? 0) + pickupFee;
  const tierPromoActive = activityQuote ? hasTierPromo(activityQuote) : false;
  const nameOk = guestName.trim().length >= 2;
  const ageOk = guestAge.trim().length > 0 && Number(guestAge) > 0;
  const locationOk = wantsPickup
    ? Boolean(location) && locationDetails.trim().length >= 2
    : true;
  const canSubmit = nameOk && ageOk && locationOk && !isInvalidPax;
  const detailTourSlug = getTourSlugForActivity(activeTour.id);

  const handleBook = () => {
    if (!nameOk) return alert("Please enter your name.");
    if (!ageOk) return alert("Please enter your age.");
    if (isTandem && (adults < 2 || adults % 2 !== 0)) {
      return alert('Tandem ATV requires an even number of riders (2, 4, 6…).');
    }
    if (!wantsPickup) {
      // meet at arena — no address needed
    } else if (!location) {
      return alert("Please select a pickup location on the map.");
    } else if (!locationOk) {
      return alert("Please enter your hotel / pickup address.");
    }

    const bookingLocation = wantsPickup
      ? locationDetails.trim()
      : `Meet at ${MEETING_POINT.label}`;
    const bookingMapUrl = wantsPickup
      ? location
        ? `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`
        : undefined
      : MEETING_POINT.mapUrl;

    if (isInvalidPax) return alert(`Minimum ${activeTour.minPax} persons required.`);

    const pickupNoteParts: string[] = [];
    if (!wantsPickup) {
      pickupNoteParts.push('Self meet at All New Bali Adventure — no pickup fee');
    } else if (hasFreeUbudPickup && !isOutUbud) {
      pickupNoteParts.push('Free Ubud pickup (cycling tour)');
    } else {
      if (pickupQuote.pickupFee) pickupNoteParts.push(`Pickup +IDR ${pickupQuote.pickupFee.toLocaleString('id-ID')}`);
      if (pickupQuote.dropFee) pickupNoteParts.push(`Return drop same hotel +IDR ${pickupQuote.dropFee.toLocaleString('id-ID')}`);
      if (pickupQuote.outOfUbudFee) pickupNoteParts.push(`Out of Ubud +IDR ${pickupQuote.outOfUbudFee.toLocaleString('id-ID')}`);
    }
    if (activityQuote) {
      pickupNoteParts.unshift(`${activityQuote.tierLabel}: ${formatIdr(activityQuote.unitPrice)} × ${activityQuote.units} ${activityQuote.unitLabel}`);
    }

    const lineItems = [
      {
        label: activityQuote
          ? `${activeTour.title} (${activityQuote.tierLabel} · ${activityQuote.units} ${activityQuote.unitLabel})`
          : activeTour.title,
        amount: activityTotal,
      },
    ];
    if (pickupFee > 0) {
      lineItems.push({
        label: sameDropOff ? 'Hotel pickup & return transfer' : 'Hotel pickup transfer',
        amount: pickupFee,
      });
    }

    const draft: InvoiceDraft = {
      invoiceNumber: createInvoiceNumber(),
      issuedAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      guestName: guestName.trim(),
      guestAge: guestAge.trim() || undefined,
      guestType,
      adults,
      children: kids,
      childrenAges: kids > 0 ? childrenAges.trim() || undefined : undefined,
      activity: activeTour.title,
      date,
      time,
      location: bookingLocation,
      notes: [notes.trim() || null, pickupNoteParts.join(' · ')].filter(Boolean).join(' · ') || undefined,
      lineItems,
      total: totalCost,
    };

    setInvoice(draft);
    setStep('invoice');
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Book experience"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="hidden md:inline-flex absolute top-4 right-4 z-[250] p-2.5 bg-white hover:bg-gray-100 rounded-full text-brand-green transition-colors shadow-xl border border-brand-green/10"
          aria-label="Close booking"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-sand w-full max-h-[95vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col md:flex-row">
        {showDetails && detailTourSlug ? (
          <BookingTourDetailPanel
            tourSlug={detailTourSlug}
            onClose={() => setShowDetails(false)}
          />
        ) : null}
        <div className="md:hidden sticky top-0 z-[300] flex items-center justify-between gap-3 px-4 py-3 bg-sand/95 backdrop-blur border-b border-brand-green/10 rounded-t-3xl">
          <h2 className="text-xl font-serif text-brand-green font-bold truncate">Book Experience</h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 p-2.5 bg-white hover:bg-gray-100 rounded-full text-brand-green transition-colors shadow-lg border border-brand-green/10"
            aria-label="Close booking"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[350px] relative md:rounded-l-3xl md:rounded-tr-none overflow-hidden border-r border-brand-green/10">
          {!wantsPickup ? (
            <div className="flex h-full min-h-[350px] flex-col justify-center bg-brand-green/5 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-green-light mb-2">
                Meeting point
              </p>
              <h3 className="font-display text-2xl font-bold text-brand-green uppercase leading-tight mb-3">
                {MEETING_POINT.name}
              </h3>
              <p className="text-sm text-brand-green-light leading-relaxed mb-4">
                No hotel pickup — meet us directly at the arena. Arrive at your selected time; no pickup surcharge applies.
              </p>
              <p className="text-sm text-brand-green-light mb-6">{MEETING_POINT.address}</p>
              <a
                href={MEETING_POINT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-bold text-sand hover:bg-brand-green-light transition-colors"
              >
                Open in Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <MapPicker initialPosition={UBUD_CENTER} onLocationSelect={(lat, lng, isOut) => {
              setLocation({lat, lng});
              setIsOutUbud(isOut);
            }} />
          )}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur text-brand-green p-3.5 rounded-xl text-sm font-medium shadow-lg z-[1000] border border-brand-green/10">
            <strong className="block mb-1">{wantsPickup ? "Pickup Location" : "Meeting Point"}</strong>
            {!wantsPickup ? (
              <span className="text-brand-green font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                {MEETING_POINT.name} — no pickup fee
              </span>
            ) : location ? (
               hasFreeUbudPickup ? (
                 isOutUbud ? (
                   <span className="text-red-600 font-bold block">Out of Ubud: +{PICKUP_FEE_IDR / 1000}k pickup +{DROP_SAME_HOTEL_FEE_IDR / 1000}k drop if same hotel</span>
                 ) : (
                   <span className="text-brand-green font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-green"></span> Within Ubud: Free Pickup (cycling)</span>
                 )
               ) : (
                 <span className="text-red-600 font-bold block">Pickup from IDR {PICKUP_FEE_IDR / 1000}k · +{DROP_SAME_HOTEL_FEE_IDR / 1000}k return to same hotel</span>
               )
            ) : <span className="opacity-70">Tap on the map to set your pickup pin.</span>}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col min-h-0">
          {step === 'invoice' && invoice ? (
            <InvoicePaymentPanel
              invoice={invoice}
              onBack={() => setStep('form')}
              onClose={onClose}
            />
          ) : (
          <div className="p-6 md:p-8 flex flex-col">
          <h2 className="hidden md:block text-3xl font-serif text-brand-green font-bold mb-2">Book Experience</h2>
          {tourOptions && tourOptions.length > 1 ? (
            <div className="mb-6 pb-4 border-b border-brand-green/10">
              <div className="flex items-center justify-between gap-3 mb-2">
                <label className="block text-brand-green font-bold text-sm">Activity *</label>
                {detailTourSlug ? (
                  <button
                    type="button"
                    onClick={() => setShowDetails(true)}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-brand-green/20 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-green hover:bg-sand transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Details
                  </button>
                ) : null}
              </div>
              <select
                value={activeTour.id}
                onChange={(e) => setSelectedTourId(e.target.value)}
                className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3 text-brand-green font-bold focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
              >
                {tourOptions.map((t) => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            </div>
          ) : (
            <div className="mb-6 pb-4 border-b border-brand-green/10 flex items-start justify-between gap-3">
              <p className="text-brand-green-light text-sm font-bold">{activeTour.title}</p>
              {detailTourSlug ? (
                <button
                  type="button"
                  onClick={() => setShowDetails(true)}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-brand-green/20 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-green hover:bg-sand transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  Details
                </button>
              ) : null}
            </div>
          )}
          
          {activeTour.getYourGuideUrl && (
            <div className="mb-6">
              <a 
                href={activeTour.getYourGuideUrl} 
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

          <div className="space-y-5 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-brand-green font-bold text-sm mb-2">Your Name *</label>
                <input 
                  type="text" 
                  value={guestName} 
                  onChange={e => setGuestName(e.target.value)} 
                  placeholder="Full name"
                  className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3 text-brand-green font-medium focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
                />
              </div>
              <div>
                <label className="block text-brand-green font-bold text-sm mb-2">Age *</label>
                <input 
                  type="number" 
                  min={1}
                  max={120}
                  value={guestAge} 
                  onChange={e => setGuestAge(e.target.value)} 
                  placeholder="e.g. 28"
                  className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3 text-brand-green font-medium focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
                />
              </div>
              <div>
                <label className="block text-brand-green font-bold text-sm mb-2">You are *</label>
                <div className="flex gap-2">
                  {(["Adult", "Child"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setGuestType(type)}
                      className={`flex-1 py-3 rounded-xl font-bold text-sm border transition-colors ${
                        guestType === type
                          ? "bg-brand-green text-sand border-brand-green"
                          : "bg-white text-brand-green border-brand-green/20 hover:bg-sand"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer rounded-xl border border-brand-green/15 bg-white px-4 py-3.5 shadow-sm">
              <input
                type="checkbox"
                checked={wantsPickup}
                onChange={(e) => setWantsPickup(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-green/30 text-brand-green focus:ring-brand-green"
              />
              <span className="text-sm leading-relaxed">
                <span className="font-bold text-brand-green block mb-0.5">I need hotel pickup</span>
                <span className="text-brand-green-light">
                  Optional. If unchecked, meet us at {MEETING_POINT.name}. Check this to add your hotel address on the map.
                </span>
              </span>
            </label>

            {wantsPickup ? (
            <>
            <div>
              <label className="block text-brand-green font-bold text-sm mb-2">Hotel / Pickup Address *</label>
              <input 
                type="text" 
                value={locationDetails} 
                onChange={(e) => setLocationDetails(e.target.value)}
                placeholder="e.g. Maya Ubud, Room 102" 
                className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3 text-sm text-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
              />
            </div>
            {(!hasFreeUbudPickup || isOutUbud) ? (
              <label className="flex items-start gap-3 cursor-pointer rounded-xl border border-brand-green/15 bg-white px-4 py-3 shadow-sm">
                <input
                  type="checkbox"
                  checked={sameDropOff}
                  onChange={(e) => setSameDropOff(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-green/30 text-brand-green focus:ring-brand-green"
                />
                <span className="text-sm leading-relaxed text-brand-green-light">
                  <span className="font-bold text-brand-green block mb-0.5">Return drop-off to same hotel (+IDR {DROP_SAME_HOTEL_FEE_IDR.toLocaleString('id-ID')})</span>
                  Pickup IDR {PICKUP_FEE_IDR.toLocaleString('id-ID')}
                  {sameDropOff ? ` + drop IDR ${DROP_SAME_HOTEL_FEE_IDR.toLocaleString('id-ID')} = IDR ${(PICKUP_FEE_IDR + DROP_SAME_HOTEL_FEE_IDR).toLocaleString('id-ID')} round trip` : ' one-way'}
                  {isOutUbud ? ` · Out of Ubud +IDR ${OUT_OF_UBUD_EXTRA_IDR.toLocaleString('id-ID')}` : ''}
                </span>
              </label>
            ) : null}
            <div className="rounded-xl border border-brand-green/10 bg-brand-green/5 px-4 py-3 text-xs text-brand-green-light space-y-1.5">
              <p className="font-bold text-brand-green text-sm">Grab / GoCar vs our pickup</p>
              <p>Typical Grab or GoCar one-way Ubud ↔ arena: ~IDR {pickupQuote.grabOneWayTypical.toLocaleString('id-ID')} (est.)</p>
              <p>
                Our pickup: <strong className="text-brand-green">{pickupQuote.total > 0 ? formatIdr(pickupQuote.total) : 'Free (cycling in Ubud)'}</strong>
                {pickupQuote.total > 0 && pickupQuote.savingsVsGrabRoundTrip > 0 && sameDropOff
                  ? ` · saves ~${formatIdr(pickupQuote.savingsVsGrabRoundTrip)} vs Grab round trip`
                  : pickupQuote.total > 0 && pickupQuote.savingsVsGrabOneWay > 0 && !sameDropOff
                    ? ` · saves ~${formatIdr(pickupQuote.savingsVsGrabOneWay)} vs Grab one-way`
                    : ''}
              </p>
              <p className="opacity-80">Or meet at {MEETING_POINT.name} with no transport fee — <a href={MEETING_POINT.mapUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold text-brand-green">open map</a></p>
            </div>
            </>
            ) : (
            <>
            <div className="rounded-xl border border-brand-green/15 bg-white px-4 py-3 text-sm text-brand-green-light">
              <span className="font-bold text-brand-green">Meeting at:</span> {MEETING_POINT.label}, {MEETING_POINT.address}
            </div>
            <div className="rounded-xl border border-brand-green/10 bg-brand-green/5 px-4 py-3 text-xs text-brand-green-light space-y-1.5">
              <p className="font-bold text-brand-green text-sm">Grab / GoCar vs meet at arena</p>
              <p>Typical Grab or GoCar one-way Ubud ↔ arena: ~IDR {pickupQuote.grabOneWayTypical.toLocaleString('id-ID')} (est.)</p>
              <p>
                Meet at {MEETING_POINT.name}: <strong className="text-brand-green">IDR 0 transport fee</strong>
                {' '}· saves ~{formatIdr(pickupQuote.grabOneWayTypical)} vs Grab one-way
              </p>
              <p className="opacity-80">Need pickup? Check &quot;I need hotel pickup&quot; above — IDR {PICKUP_FEE_IDR.toLocaleString('id-ID')} one-way or IDR {(PICKUP_FEE_IDR + DROP_SAME_HOTEL_FEE_IDR).toLocaleString('id-ID')} round trip to same hotel.</p>
            </div>
            </>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-brand-green font-bold text-sm mb-2">Date</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={e => setDate(e.target.value)} 
                  min={new Date().toISOString().split('T')[0]} 
                  className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3.5 text-brand-green font-medium focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <label className="block text-brand-green font-bold text-sm mb-2">{wantsPickup ? "Pickup Time" : "Meeting Time"}</label>
                <select value={time} onChange={e => setTime(e.target.value)} className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3.5 text-brand-green font-medium focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm appearance-none cursor-pointer">
                  {activeTour.times.map((t, idx) => (
                    <option key={idx} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-brand-green font-bold text-sm mb-2">
                  {hasKidPricing ? 'Adults' : isTandem ? 'Riders' : 'People'}
                  {activityQuote ? ` (${activityQuote.unitPrice / 1000}k · ${activityQuote.tierLabel})` : ''}
                </label>
                <div className="flex items-center bg-white border border-brand-green/20 rounded-xl overflow-hidden shadow-sm">
                  <button type="button" onClick={() => setAdults(Math.max(0, adults - 1))} className="px-4 py-3.5 hover:bg-gray-50 text-brand-green font-bold text-lg active:bg-gray-100 transition-colors">-</button>
                  <span className="flex-1 text-center font-bold text-brand-green text-lg">{adults}</span>
                  <button type="button" onClick={() => setAdults(adults + 1)} className="px-4 py-3.5 hover:bg-gray-50 text-brand-green font-bold text-lg active:bg-gray-100 transition-colors">+</button>
                </div>
              </div>
              {hasKidPricing && (
                <div className="flex-1">
                  <label className="block text-brand-green font-bold text-sm mb-2">Children ({(activeTour.kidPrice || 0) / 1000}k)</label>
                  <div className="flex items-center bg-white border border-brand-green/20 rounded-xl overflow-hidden shadow-sm">
                    <button type="button" onClick={() => setKids(Math.max(0, kids - 1))} className="px-4 py-3.5 hover:bg-gray-50 text-brand-green font-bold text-lg active:bg-gray-100 transition-colors">-</button>
                    <span className="flex-1 text-center font-bold text-brand-green text-lg">{kids}</span>
                    <button type="button" onClick={() => setKids(kids + 1)} className="px-4 py-3.5 hover:bg-gray-50 text-brand-green font-bold text-lg active:bg-gray-100 transition-colors">+</button>
                  </div>
                </div>
              )}
            </div>

            {hasKidPricing && kids > 0 && (
              <div>
                <label className="block text-brand-green font-bold text-sm mb-2">Children ages</label>
                <input 
                  type="text" 
                  value={childrenAges} 
                  onChange={(e) => setChildrenAges(e.target.value)}
                  placeholder="e.g. 8, 10" 
                  className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3 text-sm text-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
                />
              </div>
            )}

            {isTandem && adults % 2 !== 0 && adults >= 2 && (
              <p className="text-amber-700 text-sm font-bold bg-amber-50 p-2 rounded-lg border border-amber-100">Tandem ATV needs an even number of riders (2, 4, 6…).</p>
            )}
            {isInvalidPax && <p className="text-red-500 text-sm font-bold bg-red-50 p-2 rounded-lg border border-red-100">Minimum {activeTour.minPax} persons required{isTandem ? ' (even count for tandem)' : ''}.</p>}

            <div>
              <label className="block text-brand-green font-bold text-sm mb-2">Special Notes (Optional)</label>
              <textarea 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Dietary requirements, special requests..." 
                rows={2}
                className="w-full bg-white border border-brand-green/20 rounded-xl px-4 py-3 text-sm text-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm resize-none"
              />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-brand-green/10">
            {activityQuote && (
              <div className="flex justify-between items-center mb-2 text-sm text-brand-green-light">
                <span>{activityQuote.tierLabel} · {formatIdr(activityQuote.unitPrice)} × {activityQuote.units} {activityQuote.unitLabel}</span>
                {tierPromoActive ? (
                  <div className="text-right">
                    <span className="block text-xs line-through opacity-70">{formatIdr(compareAtActivityTotal)}</span>
                    <span className="font-semibold text-brand-green">{formatIdr(activityQuote.activitySubtotal)}</span>
                  </div>
                ) : (
                  <span className="font-semibold text-brand-green">{formatIdr(activityQuote.activitySubtotal)}</span>
                )}
              </div>
            )}
            {activityQuote && activityQuote.childSubtotal > 0 && (
              <div className="flex justify-between items-center mb-2 text-sm text-brand-green-light">
                <span>Children</span>
                <span className="font-semibold text-brand-green">{formatIdr(activityQuote.childSubtotal)}</span>
              </div>
            )}
            {pickupFee > 0 && (
              <div className="flex justify-between items-center mb-3 text-sm text-brand-green-light">
                <span>Pickup &amp; transfer{sameDropOff ? ' (round trip)' : ''}</span>
                <span className="font-semibold text-brand-green">{formatIdr(pickupFee)}</span>
              </div>
            )}
            <div className="flex justify-between items-end mb-5">
              <span className="text-brand-green-light font-bold">Total Estimate</span>
              {tierPromoActive ? (
                <PromoPrice
                  price={totalCost}
                  originalPrice={compareAtTotal}
                  variant="total"
                  tierLabel={activityQuote?.tierLabel}
                />
              ) : (
                <span className="text-3xl font-bold text-brand-green">{formatIdr(totalCost)}</span>
              )}
            </div>
            
            <button 
              type="button"
              onClick={handleBook}
              disabled={!canSubmit}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${!canSubmit ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-brand-green text-sand hover:bg-brand-green-light shadow-lg hover:shadow-xl hover:-translate-y-0.5'}`}
            >
              Agree &amp; get invoice
            </button>
            <p className="text-xs text-brand-green-light text-center mt-3">
              Next: download PDF invoice with our logo, send it on WhatsApp, then pay via Seabank and confirm.
            </p>
          </div>
          </div>
          )}
        </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
