"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Currency = "USD" | "IDR" | "EUR"

type CurrencyContextType = {
  currency: Currency
  setCurrency: (c: Currency) => void
  formatPrice: (amountUSD: number) => string
  convertPrice: (amountUSD: number) => number
  currencySymbol: string
}

const RATES: Record<Currency, number> = {
  USD: 1.0,
  IDR: 16000,
  EUR: 0.92,
}

const SYMBOLS: Record<Currency, string> = {
  USD: "$",
  IDR: "Rp",
  EUR: "€",
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>("USD")

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

  const convertPrice = (amountUSD: number) => {
    return amountUSD * RATES[currency]
  }

  const formatPrice = (amountUSD: number) => {
    const converted = convertPrice(amountUSD)
    const symbol = SYMBOLS[currency]
    if (currency === "IDR") {
      return `${symbol} ${Math.round(converted).toLocaleString("id-ID")}`
    }
    if (currency === "EUR") {
      return `${symbol}${converted.toFixed(2)}`
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
