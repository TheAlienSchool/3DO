import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-soft-gray py-12">
      <div className="container-contemplative">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-sage-green flex items-center justify-center">
              <span className="text-warm-cream font-bold text-xs">3DO</span>
            </div>
            <span className="font-display font-bold text-lg text-deep-brown">
              Three Days Off
            </span>
          </div>
          <p className="text-deep-brown/70 mb-6">
            A practice from <strong><a href="https://thealienschool.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage-green transition-colors">TheAlienSchool.com</a></strong> • Created by <strong>Kamau Zuberi Akabueze</strong>
          </p>

          {/* Complementary Practice */}
          <div className="mb-8 pb-6 border-b border-deep-brown/10">
            <p className="text-sm text-deep-brown/60 mb-2">COMPLEMENTARY PRACTICE</p>
            <a
              href="http://wayof.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sage-green hover:text-contemplative-gold transition-colors"
            >
              <span className="text-lg">🪨</span>
              <span className="font-medium">The Stone Forger's Way</span>
            </a>
            <p className="text-xs text-deep-brown/50 mt-1">Conscious creation, one stone at a time</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/press" className="nav-link">Press</Link>
            <Link href="/volunteer" className="nav-link">Volunteer</Link>
            <Link href="/privacy" className="nav-link">Privacy</Link>
            <Link href="/accessibility" className="nav-link">Accessibility</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
