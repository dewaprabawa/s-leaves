"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Clock, MapPin } from "lucide-react"

type HeaderNavProps = {
  siteName: string
}

export default function HeaderNav({ siteName }: HeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const navLinks = [
    { href: "/#adventures", label: "Adventures" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/tours", label: "Tours" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-brand-green text-sand h-10 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-center md:justify-between">
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span className="font-semibold tracking-wide hidden md:inline">Bali Adventure Specialists</span>
            <div className="flex items-center gap-1.5 opacity-90">
              <Clock className="w-3.5 h-3.5" />
              <span>Open Daily · Pickup from 7 AM</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs opacity-80">
            <MapPin className="w-3.5 h-3.5" />
            <span>Ubud · Kintamani · Bali, Indonesia</span>
          </div>
        </div>
      </div>

      {/* Floating Pill Header */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? "top-0 pt-2 px-3 md:px-6" : "top-10 pt-3 px-4 md:px-8"}`}>
        <div className={`max-w-7xl mx-auto rounded-full flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${scrolled ? "floating-header-scrolled h-14 md:h-16" : "floating-header h-14 md:h-16"}`}>
          <Link href="/#top" onClick={closeMenu} className="flex items-center gap-2 font-bold text-lg text-brand-green hover:opacity-80 transition-opacity shrink-0">
            <img src="/logo.png" alt={siteName} className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-3 xl:px-4 py-2 text-sm font-medium text-brand-green rounded-lg hover:bg-brand-green/8 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="https://wa.me/6281775723663" target="_blank" className="hidden sm:inline-flex items-center h-10 md:h-11 px-6 md:px-8 rounded-full btn-gold-shimmer text-brand-green font-bold text-sm uppercase tracking-wider border border-accent-gold-dark/20">
              Book Now
            </Link>
            <button onClick={toggleMenu} className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-brand-green/8 text-brand-green transition-colors hover:bg-brand-green/15" aria-label="Toggle navigation menu" aria-expanded={isOpen}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[55] bg-sand flex flex-col animate-fade-in-up">
          <div className="flex items-center justify-between px-6 pt-4 pb-4">
            <Link href="/#top" onClick={closeMenu} className="flex items-center gap-2">
              <img src="/logo.png" alt={siteName} className="h-12 w-auto object-contain" />
            </Link>
            <button onClick={closeMenu} className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-green/8 text-brand-green" aria-label="Close navigation">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navLinks.map((link, idx) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="text-3xl font-bold text-brand-green py-3 border-b border-brand-green/10 hover:text-brand-green-light transition-colors" style={{ animationDelay: `${idx * 0.06}s` }}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-8 pb-10 flex flex-col gap-3">
            <Link href="https://wa.me/6281775723663" target="_blank" onClick={closeMenu} className="w-full flex items-center justify-center h-14 rounded-full btn-gold-shimmer text-brand-green font-bold text-lg uppercase tracking-wider">
              Book Now
            </Link>
            <p className="text-center text-xs text-brand-green-light opacity-60">Or call +62 817 7572 3663</p>
          </div>
        </div>
      )}
    </>
  )
}
