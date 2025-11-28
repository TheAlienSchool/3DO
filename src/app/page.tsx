'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import BreathingNetwork, { ContemplativeCommitButton } from '@/components/BreathingNetwork'
import ContemplativeVideoPlayer from '@/components/ContemplativeVideoPlayer'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [currentPledges, setCurrentPledges] = useState(1247)
  const [currentVenues, setCurrentVenues] = useState(89)

  useEffect(() => {
    setMounted(true)
    
    // Simulate real-time counter updates
    const interval = setInterval(() => {
      setCurrentPledges(prev => prev + Math.floor(Math.random() * 3))
      if (Math.random() > 0.7) {
        setCurrentVenues(prev => prev + 1)
      }
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-contemplative">
      <Navigation />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Dragonfly rings background effect */}
          <div className="absolute inset-0 dragonfly-rings opacity-30" />
          
          <div className="container-contemplative relative z-10">
            <div className="flex flex-col items-center text-center breathing-space">
              
              {/* Main Hero Message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-4xl"
              >
                <h1 className="text-hero mb-8">
                  THREE DAYS OFF<br />
                  PREPARES YOU<br />
                  FOR WHAT MATTERS
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 leading-relaxed"
                >
                  A threesome with mind, body, and spirit<br />
                  <span className="text-sage-green font-medium">September 5 - September 7, 2026</span>
                </motion.p>
              </motion.div>

              {/* Live Practice Network */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-16"
              >
                <BreathingNetwork />

                {/* Live Community Stats */}
                <div className="mt-6 text-center">
                  <p className="text-lg md:text-xl font-medium text-deep-brown mb-2">
                    <span className="font-bold text-2xl md:text-3xl text-sage-green">{currentPledges.toLocaleString()}</span> People Preparing
                  </p>
                  <p className="text-lg md:text-xl font-medium text-deep-brown">
                    <span className="font-bold text-2xl md:text-3xl text-sage-green">{currentVenues.toLocaleString()}</span> Practice Spaces
                  </p>
                  <p className="text-sm text-deep-brown/70 mt-4">
                    From solo parents to remote workers • Preparing for presence in real life
                  </p>
                </div>
              </motion.div>

              {/* Practice Entry Points */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-8 justify-center items-stretch mb-16"
              >
                <ContemplativeCommitButton
                  type="individual"
                  onCommit={() => {
                    window.location.href = '/pledge'
                  }}
                  className="flex-1 max-w-sm"
                >
                  Begin Your Practice
                </ContemplativeCommitButton>

                <ContemplativeCommitButton
                  type="venue"
                  onCommit={() => {
                    window.location.href = '/venues/register'
                  }}
                  className="flex-1 max-w-sm"
                >
                  Offer a Practice Space
                </ContemplativeCommitButton>
              </motion.div>

              {/* Introduction Video Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-16"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-display mb-4">How Three Days Off Works</h2>
                    <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                      Thousands prepare together—a global practice of time awareness
                      that builds capacity for what matters most.
                    </p>
                  </div>
                  
                  <div className="bg-sage-green/10 p-8 rounded-lg mb-8">
                    <div className="aspect-video mb-6">
                      <ContemplativeVideoPlayer
                        src="/videos/THREE_DAYS_OFF__A_Festival_of_Stillness.mp4"
                        poster="/images/festival-stillness-poster.jpg"
                        title="Three Days Off: Preparation Practice"
                        description="Thousands preparing for presence together across the globe"
                        analytics="practice-introduction"
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="w-12 h-12 bg-contemplative-gold rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-warm-cream font-bold">🌍</span>
                        </div>
                        <p className="text-sm text-deep-brown/70">Global Practice</p>
                      </div>
                      <div>
                        <div className="w-12 h-12 bg-intention-purple rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-warm-cream font-bold">🎭</span>
                        </div>
                        <p className="text-sm text-deep-brown/70">Real-Life Application</p>
                      </div>
                      <div>
                        <div className="w-12 h-12 bg-success-harmony rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-warm-cream font-bold">🤝</span>
                        </div>
                        <p className="text-sm text-deep-brown/70">Shared Preparation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Practice Invitation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col items-center"
              >
                <p className="text-lg text-sage-green font-medium mb-6">
                  Preparation opens possibilities—your practice strengthens the whole
                </p>
                <p className="text-sm text-deep-brown/60 max-w-md">
                  People prepare for custody transitions, solo travel, major presentations, heartbreak recovery,
                  and creative breakthroughs. Your practice builds capacity for what matters to you.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Message Section */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-display mb-8 three-dots">
                  Preparation creates presence
                </h2>
                <p className="text-xl leading-relaxed text-deep-brown/80 mb-12">
                  Three Days Off invites you to discover what opens when mind, body,
                  and spirit spend time together. A threesome with yourself—simple,
                  practical, and always available.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-warm-cream font-bold">•</span>
                    </div>
                    <h3 className="font-semibold text-deep-brown mb-2">Pause</h3>
                    <p className="text-deep-brown/70">Creating intentional space between demands</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-warm-cream font-bold">•</span>
                    </div>
                    <h3 className="font-semibold text-deep-brown mb-2">Breathe</h3>
                    <p className="text-deep-brown/70">Mind, body, and spirit in conversation</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-warm-cream font-bold">•</span>
                    </div>
                    <h3 className="font-semibold text-deep-brown mb-2">Observe</h3>
                    <p className="text-deep-brown/70">Recognizing patterns and possibilities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-display mb-8">
                  This practice is always available to you
                </h2>
                <p className="text-xl leading-relaxed mb-12 text-warm-cream/90">
                  Labor Day weekend becomes an opportunity to practice—mind, body, and spirit
                  preparing together for what matters. This practice requires only intention
                  and opens countless possibilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/pledge"
                    className="bg-warm-cream text-deep-brown px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                  >
                    Begin Your Practice
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300"
                  >
                    How It Works
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              A practice from <strong>TheAlienSchool.com</strong> • Created by <strong>Kamau Zuberi Akabueze</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/press" className="nav-link">Press</Link>
              <Link href="/privacy" className="nav-link">Privacy</Link>
              <Link href="/accessibility" className="nav-link">Accessibility</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}