"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bookingSchema, type BookingFormData } from "@/lib/validations/booking"
import { submitBooking } from "@/app/actions/bookTour"
import { Calendar, Users, User, Mail, Phone, MessageSquare, CheckCircle2, ChevronRight, ChevronLeft, Loader2 } from "lucide-react"

type Props = {
  tourId: string
  tourTitle: string
  tourSlug: string
  basePrice: number
  childPrice: number
}

export default function BookingForm({ tourId, tourTitle, tourSlug, basePrice, childPrice }: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverResult, setServerResult] = useState<{ success?: boolean; message?: string; error?: string } | null>(null)

  const { register, handleSubmit, watch, formState: { errors, isValid }, trigger, setValue } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
    defaultValues: {
      tourId,
      tourTitle,
      tourSlug,
      adults: 1,
      children: 0,
      totalPrice: basePrice
    }
  })

  const adults = watch("adults")
  const children = watch("children")
  
  // Calculate total price dynamically
  const currentTotal = (adults * basePrice) + (children * childPrice)

  // Update hidden total price field when participants change
  if (watch("totalPrice") !== currentTotal) {
    setValue("totalPrice", currentTotal)
  }

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof BookingFormData)[] = []
    if (step === 1) fieldsToValidate = ["date", "adults", "children"]
    if (step === 2) fieldsToValidate = ["guestName", "email", "phone"]

    const isStepValid = await trigger(fieldsToValidate)
    if (isStepValid) setStep((s) => (s + 1) as 1 | 2 | 3)
  }

  const handlePrevStep = () => {
    setStep((s) => (s - 1) as 1 | 2 | 3)
  }

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setServerResult(null)
    
    try {
      const result = await submitBooking(data)
      setServerResult(result)
    } catch (e) {
      setServerResult({ success: false, error: "Network error. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (serverResult?.success) {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Booking Confirmed!</h3>
        <p className="text-emerald-800 dark:text-emerald-200">
          {serverResult.message}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Our team will contact you shortly with the next steps.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl ring-1 ring-gray-900/5 p-6 md:p-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full z-0"></div>
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-500 rounded-full z-0 transition-all duration-300"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        ></div>
        
        {[1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 transition-colors duration-300 ${
              step >= s 
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                : 'bg-white dark:bg-gray-900 text-gray-400 border-2 border-gray-200 dark:border-gray-700'
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Step 1: Participants & Date */}
        <div className={`space-y-6 transition-opacity duration-300 ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Select Date & Guests</h3>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <Calendar className="w-4 h-4 text-emerald-500" /> Tour Date
              </label>
              <input 
                type="date" 
                {...register("date")}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  <Users className="w-4 h-4 text-emerald-500" /> Adults
                </label>
                <input 
                  type="number" 
                  min="1" max="10"
                  {...register("adults", { valueAsNumber: true })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
                />
                {errors.adults && <p className="text-red-500 text-xs mt-1">{errors.adults.message}</p>}
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  <Users className="w-4 h-4 text-emerald-500" /> Children
                </label>
                <input 
                  type="number" 
                  min="0" max="10"
                  {...register("children", { valueAsNumber: true })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
                />
                {errors.children && <p className="text-red-500 text-xs mt-1">{errors.children.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Guest Details */}
        <div className={`space-y-6 transition-opacity duration-300 ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lead Guest Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <User className="w-4 h-4 text-emerald-500" /> Full Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe"
                {...register("guestName")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
              />
              {errors.guestName && <p className="text-red-500 text-xs mt-1">{errors.guestName.message}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <Mail className="w-4 h-4 text-emerald-500" /> Email Address
              </label>
              <input 
                type="email" 
                placeholder="john@example.com"
                {...register("email")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <Phone className="w-4 h-4 text-emerald-500" /> Phone Number
              </label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                {...register("phone")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-500" /> Special Requests (Optional)
              </label>
              <textarea 
                rows={3}
                placeholder="Dietary requirements, celebrations, etc."
                {...register("specialRequests")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white resize-none"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Review */}
        <div className={`space-y-6 transition-opacity duration-300 ${step === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Review Booking</h3>
          
          <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800 space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <span className="text-gray-500">Tour</span>
              <span className="font-semibold text-gray-900 dark:text-white text-right max-w-[200px] truncate">{tourTitle}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <span className="text-gray-500">Date</span>
              <span className="font-semibold text-gray-900 dark:text-white">{watch("date") || "Not selected"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <span className="text-gray-500">Guests</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {adults} Adult{adults > 1 ? 's' : ''} {children > 0 && `, ${children} Child${children > 1 ? 'ren' : ''}`}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <span className="text-gray-500">Guest Name</span>
              <span className="font-semibold text-gray-900 dark:text-white">{watch("guestName")}</span>
            </div>
            
            <div className="pt-2 flex justify-between items-center text-lg">
              <span className="font-bold text-gray-900 dark:text-white">Total Amount</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                ${currentTotal}
              </span>
            </div>
          </div>

          {serverResult?.error && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm border border-red-200 dark:border-red-800">
              {serverResult.error}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 flex gap-3">
          {step > 1 && (
            <button 
              type="button" 
              onClick={handlePrevStep}
              className="px-6 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              disabled={isSubmitting}
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Back
            </button>
          )}

          {step < 3 ? (
            <button 
              type="button" 
              onClick={handleNextStep}
              className="flex-1 py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-colors flex items-center justify-center shadow-lg shadow-emerald-600/20"
            >
              Next Step <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          ) : (
            <button 
              type="submit" 
              disabled={isSubmitting || !isValid}
              className="flex-1 py-3 px-6 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-600/50 text-white rounded-xl font-semibold transition-colors flex items-center justify-center shadow-lg shadow-emerald-600/20"
            >
              {isSubmitting ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
              ) : (
                'Confirm Booking'
              )}
            </button>
          )}
        </div>

      </form>
    </div>
  )
}
