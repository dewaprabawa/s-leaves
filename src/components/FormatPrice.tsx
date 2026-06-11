"use client"

import { useCurrency } from "@/context/CurrencyContext"

export default function FormatPrice({ amount }: { amount: number }) {
  const { formatPrice } = useCurrency()
  return <>{formatPrice(amount)}</>
}
