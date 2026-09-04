"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bookingSchema, type BookingFormData } from "@/lib/validations/booking"
import { submitBooking, checkAvailability } from "@/app/actions/bookTour"
import { calculateTourPrice } from "@/lib/pricing"
import { formatIdr, openWhatsAppBooking } from "@/lib/whatsapp"
import { Calendar, Users, User, Mail, Phone, MessageSquare, CheckCircle2, ChevronRight, ChevronLeft, Loader2, Sparkles, AlertCircle, ShoppingBag, ExternalLink, MapPin } from "lucide-react"
import { useCurrency } from "@/context/CurrencyContext"

type Props = {
  tour: any
}

export default function BookingForm({ tour }: Props) {
  const { formatPrice } = useCurrency()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverResult, setServerResult] = useState<{ success?: boolean; message?: string; error?: string } | null>(null)
  
  // Availability states
  const [availability, setAvailability] = useState<{ remainingSpots: number | null; isSoldOut: boolean; maxCapacity: number } | null>(null)
  const [checkingAvailability, setCheckingAvailability] = useState(false)

  const { register, handleSubmit, watch, formState: { errors, isValid }, trigger, setValue } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
    defaultValues: {
      tourId: tour.id,
      tourTitle: tour.title,
      tourSlug: tour.slug,
      adults: 1,
      children: 0,
      infants: 0,
      guestType: "Adult",
      selectedAddons: [],
      selectedActivityOption: tour.activityOptions && tour.activityOptions.length > 0 ? tour.activityOptions[0].name : undefined,
      totalPrice: tour.pricing?.basePrice || tour.basePrice || 0
    }
  })

  const date = watch("date")
  const adults = watch("adults") || 1
  const children = watch("children") || 0
  const infants = watch("infants") || 0
  const selectedAddons = watch("selectedAddons") || []
  const selectedActivityOption = watch("selectedActivityOption")

  // Check availability dynamically when date changes
  useEffect(() => {
    if (!date) {
      setAvailability(null)
      return
    }

    let active = true
    setCheckingAvailability(true)

    checkAvailability(tour.id, date).then((res) => {
      if (!active) return
      setCheckingAvailability(false)
      if (res) {
        setAvailability({
          remainingSpots: res.remainingSpots ?? null,
          isSoldOut: res.isSoldOut ?? false,
          maxCapacity: res.maxCapacity ?? 20,
        })
      } else {
        setAvailability(null)
      }
    })

    return () => {
      active = false
    }
  }, [date, tour.id])

  // Calculate dynamic pricing breakdown
  const pricingResult = calculateTourPrice(tour, {
    date,
    adults,
    children,
    infants,
    selectedAddonIds: selectedAddons,
    selectedActivityOption,
  })

  // Synchronize totalPrice field with form validation state
  useEffect(() => {
    setValue("totalPrice", pricingResult.grandTotal, { shouldValidate: true })
  }, [pricingResult.grandTotal, setValue])

  const handleAddonToggle = (addonId: string) => {
    const current = selectedAddons
    if (current.includes(addonId)) {
      setValue("selectedAddons", current.filter((id) => id !== addonId), { shouldValidate: true })
    } else {
      setValue("selectedAddons", [...current, addonId], { shouldValidate: true })
    }
  }

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof BookingFormData)[] = []
    if (step === 1) fieldsToValidate = ["date", "adults", "children", "infants"]
    if (step === 2) fieldsToValidate = ["guestName", "guestAge", "guestType", "pickupLocation", "email", "phone"]

    const isStepValid = await trigger(fieldsToValidate)
    if (!isStepValid) return

    // Enforce availability validation on Next Step
    if (step === 1 && availability) {
      const totalGuests = adults + children + infants
      if (availability.remainingSpots !== null && totalGuests > availability.remainingSpots) {
        return // Block stepping forward
      }
    }

    setStep((s) => (s + 1) as 1 | 2 | 3)
  }

  const handlePrevStep = () => {
    setStep((s) => (s - 1) as 1 | 2 | 3)
  }

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setServerResult(null)
    
    try {
      // Persist booking attempt, then open WhatsApp with full details
      await submitBooking(data)

      openWhatsAppBooking({
        guestName: data.guestName,
        guestAge: data.guestAge,
        guestType: data.guestType,
        adults: data.adults,
        children: data.children,
        childrenAges: data.childrenAges,
        activity: data.tourTitle,
        activityOption: data.selectedActivityOption,
        date: data.date,
        location: data.pickupLocation,
        price: data.totalPrice,
        notes: [
          data.specialRequests,
          data.email ? `Email: ${data.email}` : null,
          data.phone ? `Phone: ${data.phone}` : null,
          data.infants > 0 ? `Infants: ${data.infants}` : null,
        ].filter(Boolean).join(" · ") || undefined,
      })

      setServerResult({
        success: true,
        message: `Thanks ${data.guestName}! WhatsApp should open with your booking for ${data.tourTitle} (${formatIdr(data.totalPrice)}). If it did not open, message us on WhatsApp manually.`,
      })
    } catch (e) {
      setServerResult({ success: false, error: "Network error. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (serverResult?.success) {
    return (
      <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-3xl p-8 text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 bg-sky-100 dark:bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-sky-600 dark:text-sky-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Booking Confirmed!</h3>
        <p className="text-sky-800 dark:text-sky-200">
          {serverResult.message}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Our team will contact you shortly with the next steps.
        </p>
      </div>
    )
  }

  // Calculate spots validation message
  const totalGuests = adults + children + infants
  const hasCapacityError = availability?.remainingSpots !== null && 
    availability?.remainingSpots !== undefined && 
    totalGuests > availability.remainingSpots

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-150 dark:border-gray-800 p-6 md:p-8">
      
      {tour.getYourGuideUrl && (
        <div className="mb-8">
          <a 
            href={tour.getYourGuideUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-[#FF5533] hover:bg-[#e64a2c] text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm shadow-[#FF5533]/20"
          >
            Book via GetYourGuide <ExternalLink className="w-4 h-4" />
          </a>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">or book directly</span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-100 dark:bg-gray-800 rounded-full z-0"></div>
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-sky-500 rounded-full z-0 transition-all duration-300"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        ></div>
        
        {[1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-colors duration-300 ${
              step >= s 
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' 
                : 'bg-white dark:bg-gray-900 text-gray-400 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Step 1: Date, Participants & Add-ons */}
        <div className={`space-y-6 ${step === 1 ? 'block' : 'hidden'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Select Date & Guests</h3>
          
          <div className="space-y-4">
            {/* Tour Date Selection */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <Calendar className="w-4 h-4 text-sky-500" /> Tour Date
              </label>
              <input 
                type="date" 
                {...register("date")}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}

              {/* Activity Option Selector */}
              {tour.activityOptions && tour.activityOptions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                    Select Activity Option
                  </label>
                  <div className="space-y-2">
                    {tour.activityOptions.map((opt: any) => {
                      const isSelected = selectedActivityOption === opt.name
                      return (
                        <div
                          key={opt.name}
                          onClick={() => setValue("selectedActivityOption", opt.name, { shouldValidate: true })}
                          className={`p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 flex items-start gap-3 select-none hover:-translate-y-0.5 hover:shadow-sm ${
                            isSelected
                              ? 'border-sky-500 bg-sky-500/[0.03] dark:bg-sky-950/[0.08] ring-1 ring-sky-500/25'
                              : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-sky-300 dark:hover:border-sky-800'
                          }`}
                        >
                          {/* Radio circle */}
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all mt-0.5 shrink-0 ${
                            isSelected
                              ? 'border-sky-500 text-sky-500'
                              : 'border-gray-300 dark:border-gray-700'
                          }`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-sky-500" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline gap-2">
                              <span className="font-semibold text-xs text-gray-900 dark:text-white truncate">{opt.name}</span>
                              {opt.priceDiff !== 0 && (
                                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 shrink-0">
                                  {opt.priceDiff > 0 ? `+${formatPrice(opt.priceDiff)}` : `-${formatPrice(Math.abs(opt.priceDiff))}`}
                                </span>
                              )}
                            </div>
                            {opt.description && (
                              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-normal">
                                {opt.description}
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Dynamic Availability Indicator */}
              {date && (
                <div className="mt-2 text-xs flex items-center gap-1.5">
                  {checkingAvailability ? (
                    <span className="text-gray-400 flex items-center gap-1">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> Checking spots availability...
                    </span>
                  ) : availability?.isSoldOut ? (
                    <span className="text-red-500 font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Fully booked / Sold out on this day
                    </span>
                  ) : (availability && availability.remainingSpots !== null) ? (
                    <span className={`font-semibold flex items-center gap-1 ${
                      availability.remainingSpots <= 5 ? 'text-amber-600 dark:text-amber-400' : 'text-sky-600 dark:text-sky-400'
                    }`}>
                      ✓ {availability.remainingSpots} spot{availability.remainingSpots !== 1 ? 's' : ''} left for this day!
                    </span>
                  ) : null}
                </div>
              )}
            </div>

            {/* Participants Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  Adults
                </label>
                <input 
                  type="number" 
                  min="1" max="10"
                  {...register("adults", { valueAsNumber: true })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
                />
                {errors.adults && <p className="text-red-500 text-[10px] mt-1">{errors.adults.message}</p>}
              </div>
              
              <div>
                <label className="flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  Children
                </label>
                <input 
                  type="number" 
                  min="0" max="10"
                  {...register("children", { valueAsNumber: true })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
                />
                {errors.children && <p className="text-red-500 text-[10px] mt-1">{errors.children.message}</p>}
              </div>

              <div>
                <label className="flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  Infants
                </label>
                <input 
                  type="number" 
                  min="0" max="10"
                  {...register("infants", { valueAsNumber: true })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
                />
                {errors.infants && <p className="text-red-500 text-[10px] mt-1">{errors.infants.message}</p>}
              </div>
            </div>

            {/* Capacity Limit Error Banner */}
            {hasCapacityError && (
              <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50 rounded-xl text-red-600 dark:text-red-400 text-xs flex gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <strong>Guest limit exceeded!</strong> You have requested booking for {totalGuests} guests, but only {availability?.remainingSpots} spots remain.
                </div>
              </div>
            )}

            {/* Reusable Tour Add-ons List */}
            {tour.addons && tour.addons.length > 0 && (
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  <ShoppingBag className="w-4 h-4 text-sky-500" /> Optional Add-ons
                </label>
                
                <div className="space-y-3">
                  {tour.addons.map((addon: any) => {
                    const addonId = typeof addon === 'string' ? addon : addon.id
                    const isChecked = selectedAddons.includes(addonId)
                    return (
                      <div 
                        key={addonId}
                        onClick={() => handleAddonToggle(addonId)}
                        className={`p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 flex items-start gap-3.5 select-none hover:-translate-y-0.5 hover:shadow-sm ${
                          isChecked 
                            ? 'border-sky-500 bg-sky-500/[0.03] dark:bg-sky-950/[0.08] ring-1 ring-sky-500/25' 
                            : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-sky-300 dark:hover:border-sky-800'
                        }`}
                      >
                        {/* Custom Circular Checkbox */}
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 mt-0.5 shrink-0 ${
                          isChecked 
                            ? 'bg-sky-500 border-sky-500 text-white scale-105' 
                            : 'border-gray-300 dark:border-gray-700 text-transparent bg-white dark:bg-gray-950'
                        }`}>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline gap-2">
                            <span className="font-semibold text-sm text-gray-900 dark:text-white truncate">{addon.name}</span>
                            <span className="text-sm font-bold text-sky-600 dark:text-sky-400 shrink-0">+{formatPrice(addon.price)}</span>
                          </div>
                          {addon.description && (
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                              {addon.description}
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Step 2: Guest Details */}
        <div className={`space-y-6 ${step === 2 ? 'block' : 'hidden'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lead Guest Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <User className="w-4 h-4 text-sky-500" /> Full Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe"
                {...register("guestName")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
              />
              {errors.guestName && <p className="text-red-500 text-xs mt-1">{errors.guestName.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Age
                </label>
                <input 
                  type="number"
                  min={1}
                  max={120}
                  placeholder="28"
                  {...register("guestAge", { valueAsNumber: true })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
                />
                {errors.guestAge && <p className="text-red-500 text-xs mt-1">{errors.guestAge.message}</p>}
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Adult or Child
                </label>
                <select
                  {...register("guestType")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
                >
                  <option value="Adult">Adult</option>
                  <option value="Child">Child</option>
                </select>
                {errors.guestType && <p className="text-red-500 text-xs mt-1">{errors.guestType.message}</p>}
              </div>
            </div>

            {children > 0 && (
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Children ages
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 8, 10"
                  {...register("childrenAges")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
                />
              </div>
            )}

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <MapPin className="w-4 h-4 text-sky-500" /> Hotel / Pickup Location
              </label>
              <input 
                type="text" 
                placeholder="e.g. Maya Ubud Resort"
                {...register("pickupLocation")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
              />
              {errors.pickupLocation && <p className="text-red-500 text-xs mt-1">{errors.pickupLocation.message}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <Mail className="w-4 h-4 text-sky-500" /> Email Address
              </label>
              <input 
                type="email" 
                placeholder="john@example.com"
                {...register("email")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <Phone className="w-4 h-4 text-sky-500" /> Phone Number
              </label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                {...register("phone")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <MessageSquare className="w-4 h-4 text-sky-500" /> Special Requests (Optional)
              </label>
              <textarea 
                rows={3}
                placeholder="Dietary requirements, hotel pickup details, etc."
                {...register("specialRequests")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all dark:text-white resize-none"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Review */}
        <div className={`space-y-6 ${step === 3 ? 'block' : 'hidden'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Review Booking</h3>
          
          <div className="bg-gray-50 dark:bg-gray-950 rounded-2xl p-5 border border-gray-150 dark:border-gray-800 space-y-4 text-sm">
            {/* Tour Title */}
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <span className="text-gray-500">Tour</span>
              <span className="font-semibold text-gray-900 dark:text-white text-right max-w-[200px] truncate">{tour.title}</span>
            </div>
            {/* Selected Option (Activity Option) */}
            {selectedActivityOption && (
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                <span className="text-gray-500">Option</span>
                <span className="font-semibold text-gray-900 dark:text-white">{selectedActivityOption}</span>
              </div>
            )}
            {/* Selected Date */}
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <span className="text-gray-500">Date</span>
              <span className="font-semibold text-gray-900 dark:text-white">{date || "Not selected"}</span>
            </div>
                       {/* Pricing Badges for overrides */}
            {pricingResult.appliedOverride && (
              <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 px-3 py-1.5 rounded-lg border border-amber-200/50">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Peak Season Overrides applied: <strong>{pricingResult.appliedOverride}</strong> ({formatPrice(pricingResult.baseAdultPrice)}/adult)</span>
              </div>
            )}
            {!pricingResult.appliedOverride && pricingResult.appliedBracket && (
              <div className="flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 bg-sky-50/50 dark:bg-sky-950/10 px-3 py-1.5 rounded-lg border border-sky-200/30">
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span>Multi-tier Group Rate applied: <strong>{adults} adults bracket</strong> ({formatPrice(pricingResult.baseAdultPrice)}/adult)</span>
              </div>
            )}

            {/* Breakdowns */}
            <div className="space-y-2.5 pt-1 text-xs border-b border-gray-200 dark:border-gray-800 pb-3 text-gray-600 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Adults: {adults} x {formatPrice(pricingResult.baseAdultPrice)}</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatPrice(pricingResult.adultTotal)}</span>
              </div>
              
              {children > 0 && (
                <div className="flex justify-between">
                  <span>Children: {children} x {formatPrice(tour.pricing?.childPrice || 0)}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatPrice(pricingResult.childTotal)}</span>
                </div>
              )}

              {infants > 0 && (
                <div className="flex justify-between">
                  <span>Infants: {infants} x {formatPrice(tour.pricing?.infantPrice || 0)}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatPrice(pricingResult.infantTotal)}</span>
                </div>
              )}

              {selectedAddons.length > 0 && (
                <div className="space-y-1.5 pt-1 border-t border-gray-200 dark:border-gray-800">
                  <span className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider block">Selected Add-ons</span>
                  {selectedAddons.map((addonId: string) => {
                    const addonObj = tour.addons?.find((a: any) => (typeof a === 'string' ? a === addonId : a.id === addonId))
                    if (!addonObj) return null
                    return (
                      <div key={addonId} className="flex justify-between text-xs pl-2 border-l border-sky-500 text-gray-650 dark:text-gray-350">
                        <span>{addonObj.name}</span>
                        <span className="font-semibold text-gray-900 dark:text-white">+{formatPrice(addonObj.price)}</span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Lead Guest */}
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3 text-xs">
              <span className="text-gray-500">Lead Guest</span>
              <span className="font-semibold text-gray-900 dark:text-white text-right">
                {watch("guestName")} · {watch("guestType")} · Age {watch("guestAge")}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3 text-xs">
              <span className="text-gray-500">Pickup Location</span>
              <span className="font-semibold text-gray-900 dark:text-white text-right max-w-[200px]">{watch("pickupLocation")}</span>
            </div>
            
            {/* Grand Total */}
            <div className="pt-2 flex justify-between items-center text-lg">
              <span className="font-bold text-gray-900 dark:text-white">Total Amount</span>
              <span className="font-black text-sky-600 dark:text-sky-400">
                {formatPrice(pricingResult.grandTotal)}
              </span>
            </div>
          </div>

          {serverResult?.error && (
            <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm border border-red-200 dark:border-red-800">
              {serverResult.error}
            </div>
          )}
        </div>

        {/* Live Total Sticky Overlay (visible at Step 1 & 2) */}
        {step < 3 && (
          <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
            <div>
              <span className="text-gray-500 block text-xs">Estimated Price</span>
              <span className="text-xl font-black text-gray-950 dark:text-white">
                {formatPrice(pricingResult.grandTotal)}
              </span>
            </div>
            
            {pricingResult.appliedOverride && (
              <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 dark:bg-amber-950/20 dark:text-amber-300 border border-amber-200/50 px-2 py-1 rounded-full">
                ✨ Peak Season Rate
              </span>
            )}
            {!pricingResult.appliedOverride && pricingResult.appliedBracket && (
              <span className="text-[10px] font-semibold text-sky-700 bg-sky-50 dark:bg-sky-950/20 dark:text-sky-300 border border-sky-200/50 px-2 py-1 rounded-full">
                👥 Group Discount
              </span>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="pt-4 flex gap-3">
          {step > 1 && (
            <button 
              type="button" 
              onClick={handlePrevStep}
              className="px-6 py-3 rounded-xl font-medium text-gray-750 dark:text-gray-350 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              disabled={isSubmitting}
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Back
            </button>
          )}

          {step < 3 ? (
            <button 
              type="button" 
              onClick={handleNextStep}
              disabled={hasCapacityError || availability?.isSoldOut}
              className="flex-1 py-3 px-6 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-colors flex items-center justify-center shadow-lg shadow-sky-600/20"
            >
              Next Step <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          ) : (
            <button 
              type="submit" 
              disabled={isSubmitting || !isValid || hasCapacityError || availability?.isSoldOut}
              className="flex-1 py-3 px-6 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-colors flex items-center justify-center shadow-lg shadow-sky-600/20"
            >
              {isSubmitting ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Opening WhatsApp...</>
              ) : (
                'Send to WhatsApp'
              )}
            </button>
          )}
        </div>

      </form>
    </div>
  )
}
