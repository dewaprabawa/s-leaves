"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

type HeaderNavProps = {
  siteName: string
}

export default function HeaderNav({ siteName }: HeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-sand/95 border-b border-brand-green/10 h-20 flex items-center justify-between px-6 lg:px-12">
      {/* Brand Logo */}
      <Link href="/#top" onClick={closeMenu} className="flex items-center gap-2 font-bold text-xl text-brand-green hover:opacity-80 transition-opacity">
        <img src="/logo.png" alt={siteName} className="h-14 w-auto object-contain" />
      </Link>
      
      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-green-light">
        <Link href="/#experiences" className="hover:text-brand-green transition-colors">Experiences</Link>
        <Link href="/#itinerary" className="hover:text-brand-green transition-colors">The route</Link>
        <Link href="/#about" className="hover:text-brand-green transition-colors">Our way</Link>
        <Link href="/#contact" className="hover:text-brand-green transition-colors">Contact</Link>
        <Link href="/blog" className="hover:text-brand-green transition-colors text-brand-green font-semibold">Blog</Link>
        <Link 
          href="https://www.sekarbaliactivity.com/#experiences" 
          className="ml-4 px-5 py-2.5 rounded-full bg-brand-green text-sand hover:bg-brand-green-light transition-colors shadow-sm font-semibold"
        >
          Book a place
        </Link>
      </nav>
      
      {/* Mobile Burger Toggle Button */}
      <button 
        onClick={toggleMenu} 
        className="md:hidden p-2 text-brand-green focus:outline-none rounded-lg hover:bg-brand-green/10 transition-colors" 
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-sand/98 border-b border-brand-green/15 shadow-2xl md:hidden flex flex-col p-6 space-y-4 animate-in slide-in-from-top duration-200 z-50">
          <Link 
            href="/#experiences" 
            onClick={closeMenu}
            className="text-lg font-semibold text-brand-green hover:text-brand-green-light py-2 border-b border-brand-green/10"
          >
            Experiences
          </Link>
          <Link 
            href="/#itinerary" 
            onClick={closeMenu}
            className="text-lg font-semibold text-brand-green hover:text-brand-green-light py-2 border-b border-brand-green/10"
          >
            The route
          </Link>
          <Link 
            href="/#about" 
            onClick={closeMenu}
            className="text-lg font-semibold text-brand-green hover:text-brand-green-light py-2 border-b border-brand-green/10"
          >
            Our way
          </Link>
          <Link 
            href="/#contact" 
            onClick={closeMenu}
            className="text-lg font-semibold text-brand-green hover:text-brand-green-light py-2 border-b border-brand-green/10"
          >
            Contact
          </Link>
          <Link 
            href="/blog" 
            onClick={closeMenu}
            className="text-lg font-bold text-brand-green py-2 border-b border-brand-green/10"
          >
            Blog
          </Link>
          <Link 
            href="https://www.sekarbaliactivity.com/#experiences" 
            onClick={closeMenu}
            className="w-full text-center py-3.5 mt-2 rounded-full bg-brand-green text-sand font-bold hover:bg-brand-green-light transition-colors shadow-md text-base"
          >
            Book a place
          </Link>
        </div>
      )}
    </header>
  )
}
