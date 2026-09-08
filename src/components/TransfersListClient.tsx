"use client"

import { useState } from "react"
import { Users, Shield, MapPin, X, ArrowRight } from "lucide-react"
import TransferBookingForm from "./TransferBookingForm"
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

type Transfer = {
  id: string
  title: string
  slug: string
  transferType?: 'airport' | 'custom'
  route: {
    from: string
    to: string
  }
  vehicles: Vehicle[]
  dropPoints?: DropPoint[]
}

type Props = {
  initialTransfers: Transfer[]
}

export default function TransfersListClient({ initialTransfers }: Props) {
  const { formatPrice } = useCurrency()
  const [selectedTransfer, setSelectedTransfer] = useState<Transfer | null>(null)

  return (
    <div className="space-y-12">
      {/* Transfers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {initialTransfers.map((transfer) => {
          const prices = transfer.vehicles?.map(v => v.basePrice) || [0]
          const startingPrice = Math.min(...prices)
          
          const capacities = transfer.vehicles?.map(v => v.capacity) || [0]
          const maxCapacity = Math.max(...capacities)
          const vehicleClassesCount = transfer.vehicles?.length || 0

          return (
            <div 
              key={transfer.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-brand-green/10 transition-all duration-300 p-6 md:p-8 space-y-6"
            >
              {/* Header / Route info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent-gold-dark uppercase tracking-wide">
                  <Shield className="w-4 h-4" /> Private Transfer Service
                </div>
                <h3 className="text-2xl font-bold text-brand-green">
                  {transfer.title}
                </h3>
                
                {/* Route Path Graphic */}
                <div className="flex items-center gap-4 bg-sand p-4 rounded-xl text-sm border border-brand-green/10">
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs text-brand-green-light">Pickup</span>
                    <span className="font-semibold text-brand-green flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-500" /> {transfer.route?.from}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-green-light flex-shrink-0" />
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs text-brand-green-light">Drop-off</span>
                    <span className="font-semibold text-brand-green flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-gold" /> {transfer.route?.to}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="grid grid-cols-2 gap-4 text-sm py-2 border-t border-b border-brand-green/10">
                <div>
                  <span className="block text-xs text-brand-green-light">Vehicle Types</span>
                  <span className="font-medium text-brand-green">{vehicleClassesCount} Tiers Available</span>
                </div>
                <div>
                  <span className="block text-xs text-brand-green-light flex items-center gap-1">
                    <Users className="w-3 h-3" /> Max Capacity
                  </span>
                  <span className="font-medium text-brand-green">Up to {maxCapacity} Passengers</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="block text-xs text-brand-green-light">Rates From</span>
                  <span className="text-2xl font-extrabold text-accent-gold-dark">
                    {formatPrice(startingPrice)}
                  </span>
                </div>
                
                <button 
                  onClick={() => setSelectedTransfer(transfer)}
                  className="inline-flex items-center justify-center rounded-xl bg-accent-gold hover:bg-accent-gold-dark px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors"
                >
                  Book Transfer
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Booking Modal Overlay */}
      {selectedTransfer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-brand-green/10 p-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-green">
                  Book {selectedTransfer.title}
                </h2>
                <p className="text-sm text-brand-green-light mt-1">
                  Private one-way flat-rate transfer
                </p>
              </div>
              <button 
                onClick={() => setSelectedTransfer(null)}
                className="p-2 text-brand-green-light hover:text-brand-green-light dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
              <TransferBookingForm
                transferId={selectedTransfer.id}
                transferTitle={selectedTransfer.title}
                transferSlug={selectedTransfer.slug}
                vehicles={selectedTransfer.vehicles}
                dropPoints={selectedTransfer.dropPoints}
                transferType={selectedTransfer.transferType || 'airport'}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
