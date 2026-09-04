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
              className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 p-6 md:p-8 space-y-6"
            >
              {/* Header / Route info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                  <Shield className="w-4 h-4" /> Private Transfer Service
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {transfer.title}
                </h3>
                
                {/* Route Path Graphic */}
                <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-950 p-4 rounded-xl text-sm border border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs text-gray-400">Pickup</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-500" /> {transfer.route?.from}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs text-gray-400">Drop-off</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-500" /> {transfer.route?.to}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="grid grid-cols-2 gap-4 text-sm py-2 border-t border-b border-gray-100 dark:border-gray-800">
                <div>
                  <span className="block text-xs text-gray-400">Vehicle Types</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{vehicleClassesCount} Tiers Available</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-400 flex items-center gap-1">
                    <Users className="w-3 h-3" /> Max Capacity
                  </span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Up to {maxCapacity} Passengers</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="block text-xs text-gray-400">Rates From</span>
                  <span className="text-2xl font-extrabold text-sky-600 dark:text-sky-400">
                    {formatPrice(startingPrice)}
                  </span>
                </div>
                
                <button 
                  onClick={() => setSelectedTransfer(transfer)}
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 hover:bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors"
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
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 p-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Book {selectedTransfer.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Private one-way flat-rate transfer
                </p>
              </div>
              <button 
                onClick={() => setSelectedTransfer(null)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
