"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Currency = "USD" | "IDR" | "EUR"

type CurrencyContextType = {
  currency: Currency
  setCurrency: (c: Currency) => void
  formatPrice: (amountIDR: number) => string
  convertPrice: (amountIDR: number) => number
  currencySymbol: string
}

const RATES: Record<Currency, number> = {
  USD: 1 / 16000,
  IDR: 1.0,
  EUR: 1 / 17300,
}

const SYMBOLS: Record<Currency, string> = {
  USD: "$",
  IDR: "Rp",
  EUR: "€",
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>("IDR")

  useEffect(() => {
    const saved = localStorage.getItem("preferred_currency") as Currency
    if (saved && ["USD", "IDR", "EUR"].includes(saved)) {
      setCurrencyState(saved)
    }
  }, [])

  const setCurrency = (c: Currency) => {
    setCurrencyState(c)
    localStorage.setItem("preferred_currency", c)
  }

  const convertPrice = (amountIDR: number) => {
    return amountIDR * RATES[currency]
  }

  const formatPrice = (amountIDR: number) => {
    const converted = convertPrice(amountIDR)
    const symbol = SYMBOLS[currency]
    if (currency === "IDR") {
      return `${symbol} ${Math.round(converted).toLocaleString("id-ID")}`
    }
    return `${symbol}${converted.toFixed(2)}`
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice, currencySymbol: SYMBOLS[currency] }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
