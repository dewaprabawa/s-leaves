"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { transferBookingSchema, type TransferBookingFormData } from "@/lib/validations/transferBooking"
import { submitTransferBooking } from "@/app/actions/bookTransfer"
import { Calendar, Users, User, Mail, Phone, MessageSquare, CheckCircle2, ChevronRight, ChevronLeft, Loader2, Plane, MapPin, Clock } from "lucide-react"
import { useCurrency } from "@/context/CurrencyContext"

type Vehicle = {
  name: string
  capacity: number
  basePrice: number
  media?: any
  description?: string
}

type DropPoint = {
  name: string
  additionalPrice: number
  description?: string
}

type Props = {
  transferId: string
  transferTitle: string
  transferSlug: string
  vehicles: Vehicle[]
  dropPoints?: DropPoint[]
  transferType?: 'airport' | 'custom'
}

export default function TransferBookingForm({ transferId, transferTitle, transferSlug, vehicles = [], dropPoints = [], transferType = 'airport' }: Props) {
  const { formatPrice } = useCurrency()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverResult, setServerResult] = useState<{ success?: boolean; message?: string; error?: string } | null>(null)

  const defaultVehicle = vehicles[0]?.name || ""
  const defaultPrice = vehicles[0]?.basePrice || 0

  const { register, handleSubmit, watch, formState: { errors, isValid }, trigger, setValue } = useForm<TransferBookingFormData>({
    resolver: zodResolver(transferBookingSchema),
    mode: "onChange",
    defaultValues: {
      transferId,
      transferTitle,
      transferSlug,
      date: "",
      adults: 1,
      children: 0,
      guestName: "",
      email: "",
      phone: "",
      flightNumber: "",
      arrivalTime: "",
      hotelZone: "",
      selectedVehicle: defaultVehicle,
      selectedDropPoints: [],
      transferNotes: "",
      specialRequests: "",
      totalPrice: defaultPrice
    }
  })

  // Watch form fields for live price calculation
  const selectedVehicle = watch("selectedVehicle")
  const selectedDropPoints = watch("selectedDropPoints") || []

  // Register fields with React Hook Form
  useEffect(() => {
    register("selectedVehicle")
    register("selectedDropPoints")
  }, [register])

  // Resolve prices dynamically
  const vehicleConfig = vehicles.find(v => v.name === selectedVehicle)
  const vehiclePrice = vehicleConfig ? vehicleConfig.basePrice : 0
  
  let dropPointsSurcharge = 0
  if (selectedDropPoints && selectedDropPoints.length > 0) {
    selectedDropPoints.forEach((dpName: string) => {
      const dp = dropPoints.find(d => d.name === dpName)
      if (dp) {
        dropPointsSurcharge += dp.additionalPrice
      }
    })
  }
  
  const totalPrice = vehiclePrice + dropPointsSurcharge

  // Sync totalPrice to form values
  useEffect(() => {
    setValue("totalPrice", totalPrice, { shouldValidate: true })
  }, [totalPrice, setValue])

  const handleVehicleSelect = (vName: string) => {
    setValue("selectedVehicle", vName, { shouldValidate: true })
  }

  const handleDropPointToggle = (dpName: string) => {
    const current = watch("selectedDropPoints") || []
    if (current.includes(dpName)) {
      setValue("selectedDropPoints", current.filter(name => name !== dpName), { shouldValidate: true })
    } else {
      setValue("selectedDropPoints", [...current, dpName], { shouldValidate: true })
    }
  }

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof TransferBookingFormData)[] = []
    if (step === 1) fieldsToValidate = ["date", "adults", "children", "selectedVehicle"]
    if (step === 2) fieldsToValidate = ["flightNumber", "arrivalTime", "hotelZone"]

    const isStepValid = await trigger(fieldsToValidate)
    if (isStepValid) setStep((s) => (s + 1) as 1 | 2 | 3)
  }

  const handlePrevStep = () => {
    setStep((s) => (s - 1) as 1 | 2 | 3)
  }

  const onSubmit = async (data: TransferBookingFormData) => {
    setIsSubmitting(true)
    setServerResult(null)
    
    try {
      const result = await submitTransferBooking(data)
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
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Transfer Booked!</h3>
        <p className="text-emerald-800 dark:text-emerald-200">
          {serverResult.message}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Our private driver will monitor your flight. We will contact you via WhatsApp/Email shortly.
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
        
        {/* Step 1: Date & Passengers */}
        <div className={`space-y-6 transition-opacity duration-300 ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Select Date & Vehicle</h3>
          
          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <Calendar className="w-4 h-4 text-emerald-500" /> Transfer Date
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

            {/* Vehicle Selection Grid */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                Select Vehicle Class
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicles.map((vehicle) => {
                  const isSelected = selectedVehicle === vehicle.name
                  return (
                    <div
                      key={vehicle.name}
                      onClick={() => handleVehicleSelect(vehicle.name)}
                      className={`flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 select-none ${
                        isSelected
                          ? "border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/15 ring-1 ring-emerald-600"
                          : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-white dark:bg-gray-950"
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{vehicle.name}</h4>
                          {vehicle.description && (
                            <p className="text-xs text-gray-550 dark:text-gray-400 mt-1 leading-normal">{vehicle.description}</p>
                          )}
                        </div>
                        <span className="text-base font-black text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                          {formatPrice(vehicle.basePrice)}
                        </span>
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>Fits up to {vehicle.capacity} Passengers</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              {errors.selectedVehicle && <p className="text-red-500 text-xs mt-1">{errors.selectedVehicle.message}</p>}
            </div>

            {/* Drop Points stops */}
            {dropPoints && dropPoints.length > 0 && (
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Additional Drop-off Locations / Stops (Optional)
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {dropPoints.map((dp) => {
                    const isChecked = selectedDropPoints.includes(dp.name)
                    return (
                      <div
                        key={dp.name}
                        onClick={() => handleDropPointToggle(dp.name)}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all duration-200 select-none ${
                          isChecked
                            ? "border-emerald-500/50 bg-emerald-50/10 dark:bg-emerald-950/5"
                            : "border-gray-150 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-950/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}} // handled by parent div onClick
                            className="w-4.5 h-4.5 rounded text-emerald-600 border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:ring-emerald-500 focus:ring-opacity-25"
                          />
                          <div>
                            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{dp.name}</span>
                            {dp.description && (
                              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{dp.description}</p>
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          +{formatPrice(dp.additionalPrice)}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Step 2: Flight & Drop-off Info */}
        <div className={`space-y-6 transition-opacity duration-300 ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {transferType === 'airport' ? 'Flight & Drop-off Info' : 'Pickup & Drop-off Info'}
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {transferType === 'airport' && (
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    <Plane className="w-4 h-4 text-emerald-500" /> Flight Number
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. SQ938"
                    {...register("flightNumber")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
                  />
                  {errors.flightNumber && <p className="text-red-500 text-xs mt-1">{errors.flightNumber.message}</p>}
                </div>
              )}
              
              <div className={transferType === 'airport' ? "" : "col-span-1 sm:col-span-2"}>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  <Clock className="w-4 h-4 text-emerald-500" /> {transferType === 'airport' ? 'Arrival Time' : 'Pickup Time'}
                </label>
                <input 
                  type="text" 
                  placeholder={transferType === 'airport' ? "e.g. 14:35" : "e.g. 09:00 AM"}
                  {...register("arrivalTime")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
                />
                {errors.arrivalTime && <p className="text-red-500 text-xs mt-1">{errors.arrivalTime.message}</p>}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" /> {transferType === 'airport' ? 'Drop-off Hotel & Zone' : 'Drop-off Address / Hotel'}
              </label>
              <input 
                type="text" 
                placeholder={transferType === 'airport' ? "e.g. W Bali Seminyak Hotel" : "e.g. Maya Ubud Hotel or Canggu bypass address"}
                {...register("hotelZone")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
              />
              {errors.hotelZone && <p className="text-red-500 text-xs mt-1">{errors.hotelZone.message}</p>}
            </div>
          </div>
        </div>

        {/* Step 3: Lead Guest & Review */}
        <div className={`space-y-6 transition-opacity duration-300 ${step === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lead Passenger & Review</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <Mail className="w-4 h-4 text-emerald-500" /> Email
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
                  <Phone className="w-4 h-4 text-emerald-500" /> Phone (WhatsApp)
                </label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-500" /> Transfer Notes / Instructions (Optional)
              </label>
              <textarea 
                rows={2}
                placeholder="Flight details, driver instructions, child seat requests, etc."
                {...register("transferNotes")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white resize-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-500" /> Special Requests (Optional)
              </label>
              <textarea 
                rows={2}
                placeholder="Extra luggage requests, medical requests, etc."
                {...register("specialRequests")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white resize-none"
              />
            </div>

            {/* Summary Box */}
            <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-5 border border-gray-100 dark:border-gray-800 space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-500">Route</span>
                <span className="font-semibold text-gray-900 dark:text-white">{transferTitle}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-500">Date & Time</span>
                <span className="font-semibold text-gray-900 dark:text-white">{watch("date")} @ {watch("arrivalTime")}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-500">Vehicle Class</span>
                <span className="font-semibold text-gray-900 dark:text-white">{selectedVehicle} ({formatPrice(vehiclePrice)})</span>
              </div>
              {selectedDropPoints.length > 0 && (
                <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500">Drop Stops ({selectedDropPoints.length})</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">+{formatPrice(dropPointsSurcharge)}</span>
                </div>
              )}
              <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-500">Drop-off Destination</span>
                <span className="font-semibold text-gray-900 dark:text-white truncate max-w-[200px]">{watch("hotelZone")}</span>
              </div>
              <div className="flex justify-between items-center text-base font-bold pt-1">
                <span>Total Price</span>
                <span className="text-emerald-600 dark:text-emerald-400 text-lg font-black">{formatPrice(totalPrice)}</span>
              </div>
            </div>
          </div>

          {serverResult?.error && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm border border-red-200 dark:border-red-800">
              {serverResult.error}
            </div>
          )}
        </div>

        {/* Navigation */}
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
                'Book Private Transfer'
              )}
            </button>
          )}
        </div>

      </form>
    </div>
  )
}
