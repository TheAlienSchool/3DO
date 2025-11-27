'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function PledgePage() {
  const [formData, setFormData] = useState({
    city: '',
    timezone: '',
    email: '',
    updates: false,
    anonymousData: false,
    intention: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Pledge submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-contemplative">
        <Navigation />
        
        <main id="main-content" className="pt-20">
          <section className="relative overflow-hidden">
            <div className="container-contemplative relative z-10">
              <div className="breathing-space text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="w-20 h-20 bg-success-harmony rounded-full mx-auto mb-8 flex items-center justify-center">
                    <span className="text-warm-cream font-bold text-2xl">✓</span>
                  </div>
                  
                  <h1 className="text-hero mb-8">
                    Welcome to the Global Festival
                  </h1>
                  
                  <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 leading-relaxed">
                    Your commitment creates ripples through the sacred geometry of collective consciousness. 
                    You are now part of a global community choosing conscious pause.
                  </p>

                  <div className="bg-sage-green/10 p-8 rounded-lg mb-8">
                    <h2 className="text-heading mb-4">Your Boundary Template</h2>
                    <div className="bg-warm-white p-6 rounded-lg text-left">
                      <p className="text-deep-brown/80 mb-4">
                        "I'm participating in Three Days Off (August 30 - September 1) - a global practice 
                        of conscious pause. During this time, I'll be stepping back from [usual activities] 
                        to create space for stillness and reflection. This isn't about avoiding life, 
                        but about approaching it with greater presence and intention."
                      </p>
                      <button 
                        onClick={() => navigator.clipboard.writeText("I'm participating in Three Days Off (August 30 - September 1) - a global practice of conscious pause. During this time, I'll be stepping back from usual activities to create space for stillness and reflection. This isn't about avoiding life, but about approaching it with greater presence and intention.")}
                        className="btn-contemplative px-4 py-2 text-sm"
                      >
                        Copy Template
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-warm-white p-6 rounded-lg">
                      <h3 className="font-semibold mb-3">Share Your Intention</h3>
                      <p className="text-sm text-deep-brown/70 mb-4">
                        Let others know you're part of the global pause
                      </p>
                      <button 
                        onClick={() => {
                          const text = `I'm joining Three Days Off - a global festival of stillness (Aug 30 - Sep 1). What would change if you gave yourself permission to pause? Learn more at ThreeDaysOff.com`
                          if (navigator.share) {
                            navigator.share({ text })
                          } else {
                            navigator.clipboard.writeText(text)
                          }
                        }}
                        className="btn-secondary px-4 py-2 text-sm"
                      >
                        Share Invitation
                      </button>
                    </div>

                    <div className="bg-warm-white p-6 rounded-lg">
                      <h3 className="font-semibold mb-3">Prepare for Your Experience</h3>
                      <p className="text-sm text-deep-brown/70 mb-4">
                        Get ready for your contemplative journey
                      </p>
                      <Link href="/preparing" className="btn-secondary px-4 py-2 text-sm inline-block">
                        Preparation Guide
                      </Link>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link href="/" className="text-sage-green hover:underline">
                      ← Return to Festival Experience
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-contemplative">
      <Navigation />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container-contemplative relative z-10">
            <div className="breathing-space text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-hero mb-8">
                  Create Space for<br />
                  What's Already Here
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Your pledge connects you to thousands practicing conscious pause simultaneously. 
                  This isn't about perfect conditions—it's about intention and presence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pledge Form */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-display mb-6">Your Sacred Commitment</h2>
                <p className="text-xl text-deep-brown/80">
                  Simple information to connect you with the global contemplative community.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <div className="space-y-6">
                  {/* Location */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-deep-brown mb-2">
                      City / Region <span className="text-sage-green">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Where will you be practicing?"
                      className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                    />
                  </div>

                  {/* Timezone */}
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-deep-brown mb-2">
                      Timezone
                    </label>
                    <input
                      type="text"
                      id="timezone"
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleInputChange}
                      placeholder="Auto-detected or manual entry"
                      className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-deep-brown mb-2">
                      Email <span className="text-sage-green/60">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="For preparation guidance and community updates"
                      className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                    />
                  </div>

                  {/* Intention */}
                  <div>
                    <label htmlFor="intention" className="block text-sm font-medium text-deep-brown mb-2">
                      Your Intention <span className="text-sage-green/60">(optional)</span>
                    </label>
                    <textarea
                      id="intention"
                      name="intention"
                      value={formData.intention}
                      onChange={handleInputChange}
                      placeholder="What do you hope to discover or create space for?"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="updates"
                        checked={formData.updates}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-contemplative-gold border-sage-green/30 rounded focus:ring-contemplative-gold focus:ring-2 mt-0.5"
                      />
                      <span className="text-sm text-deep-brown/80">
                        Send me gentle preparation guidance and community updates
                      </span>
                    </label>

                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="anonymousData"
                        checked={formData.anonymousData}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-contemplative-gold border-sage-green/30 rounded focus:ring-contemplative-gold focus:ring-2 mt-0.5"
                      />
                      <span className="text-sm text-deep-brown/80">
                        Include my anonymized location in global impact reporting
                      </span>
                    </label>
                  </div>

                  {/* Privacy Note */}
                  <div className="bg-warm-white p-4 rounded-lg">
                    <p className="text-xs text-deep-brown/60">
                      <strong>Privacy Promise:</strong> We store email separately from pledge data, never share personal information, 
                      and you can request deletion anytime. Your data serves the collective understanding of global 
                      contemplative practice, nothing more.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-contemplative py-4 font-medium tracking-wide"
                  >
                    Join the Global Festival of Stillness
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Community Context */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display mb-8">
                  You're Joining Something Beautiful
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-deep-brown/80">
                  Each pledge adds to the sacred geometry of global consciousness. Your commitment 
                  to pause creates permission for others to do the same. Together, we're demonstrating 
                  that another way of being together is possible.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-warm-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-contemplative-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-warm-cream font-bold">🌍</span>
                    </div>
                    <h3 className="font-semibold mb-2">Global Community</h3>
                    <p className="text-sm text-deep-brown/70">
                      Practitioners in dozens of countries, all choosing conscious pause
                    </p>
                  </div>

                  <div className="bg-warm-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-intention-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-warm-cream font-bold">🤝</span>
                    </div>
                    <h3 className="font-semibold mb-2">Shared Intention</h3>
                    <p className="text-sm text-deep-brown/70">
                      Individual practice within collective contemplative timing
                    </p>
                  </div>

                  <div className="bg-warm-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-success-harmony rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-warm-cream font-bold">🌱</span>
                    </div>
                    <h3 className="font-semibold mb-2">Cultural Shift</h3>
                    <p className="text-sm text-deep-brown/70">
                      Demonstrating that rest can be revolutionary
                    </p>
                  </div>
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
              <Link href="/how-it-works" className="nav-link">How It Works</Link>
              <Link href="/preparing" className="nav-link">Preparing</Link>
              <Link href="/venues" className="nav-link">Venues</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}