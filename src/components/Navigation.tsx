'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sacred Navigation Structure - Consciousness-Serving Information Architecture
  const navLinks = [
    { href: '/how-it-works', label: 'How 3DO Works', sacredOrder: 1 },
    { href: '/preparing', label: 'Preparing for 3DO', sacredOrder: 2 },
    { href: '/venues', label: '3DO Venues', sacredOrder: 3 },
    { href: '/global-calendar', label: 'Global Calendar', sacredOrder: 4 },
    { href: '/blog', label: 'Field Notes', sacredOrder: 5 },
    { href: '/three-days-on', label: 'Three Days On', sacredOrder: 6 },
    { href: '/press', label: 'Press', sacredOrder: 7 }
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-warm-cream/95 backdrop-blur-sm shadow-gentle border-b-2 border-ocean-teal/30' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-contemplative">
        <div className="flex items-center justify-between py-6">
          {/* Sacred Logo - Consciousness-Serving Brand Identity */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            aria-label="Three Days Off home"
          >
            <div className="w-10 h-10 rounded-full bg-sage-green flex items-center justify-center sacred-triangle-logo relative overflow-hidden">
              <span className="text-warm-cream font-bold text-sm relative z-10">3DO</span>
              <div className="absolute inset-0 bg-deep-brown transform scale-0 group-hover:scale-100 transition-transform duration-618"></div>
            </div>
            <span className="font-display font-bold text-xl text-deep-brown group-hover:text-sage-green transition-all duration-618">
              Three Days Off
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-soft-gray/50 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-deep-brown" />
            ) : (
              <Menu className="w-6 h-6 text-deep-brown" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden border-t border-soft-gray bg-warm-cream/95 backdrop-blur-sm"
          >
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block nav-link text-base font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

