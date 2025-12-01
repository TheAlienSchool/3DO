'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function SpaceAssetsPage() {
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
                  SPACE TRANSFORMATION ASSETS<br />
                  Design Resources for Contemplative Environments
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Professional design assets to transform your venue into a contemplative practice space—posters, signage, environmental graphics, and spatial design resources.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-display mb-6 three-dots">What Space Does</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  Physical environment shapes nervous system experience. These assets help create conditions where pause becomes natural—not through instruction, but through spatial design that invites stillness.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Design Philosophy</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Three Days Off space assets draw from Bauhaus simplicity, Swiss typography, and contemplative minimalism—clean geometry that creates breathing room for attention.
                  </p>
                  <ul className="space-y-2 text-sm text-deep-brown/70">
                    <li>• Intentional whitespace</li>
                    <li>• Calming color palettes (sage green, warm cream, deep brown)</li>
                    <li>• Typography that slows reading pace</li>
                    <li>• Geometric forms that ground attention</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Customization Rights</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Every asset is designed for adaptation. Add your venue branding, adjust colors to match your space, translate text to serve your community. We celebrate venues making these resources their own.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <p className="font-medium mb-2">Usage Guidelines:</p>
                    <p>✓ Modify for your venue<br />
                    ✓ Combine with your branding<br />
                    ✓ Translate to any language<br />
                    ✓ Share with your community</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Collections */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Available Asset Collections</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                Professional design resources currently in development—volunteer contributors building these collections with contemplative care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Bauhaus Poster Series */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">📐</span>
                </div>
                <h3 className="text-heading text-center mb-4">Bauhaus Poster Series</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Clean geometric designs featuring the Three Days Off framework—PAUSE • BREATHE • OBSERVE rendered in contemplative minimalism.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-1">
                  <p><strong>Formats:</strong> PDF (print-ready), PNG (digital display)</p>
                  <p><strong>Sizes:</strong> 11x17, 18x24, 24x36 inches</p>
                  <p><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Swiss Typography Collection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">🎨</span>
                </div>
                <h3 className="text-heading text-center mb-4">Swiss Style Collection</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Typography-focused designs that slow reading pace and invite reflection—text as contemplative architecture.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-1">
                  <p><strong>Formats:</strong> Editable templates (Figma, Adobe)</p>
                  <p><strong>Applications:</strong> Wall graphics, window displays</p>
                  <p><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Environmental Graphics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">🖼️</span>
                </div>
                <h3 className="text-heading text-center mb-4">Environmental Graphics</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Wayfinding signage, door markers, practice zone indicators—subtle spatial cues that create contemplative atmosphere.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-1">
                  <p><strong>Includes:</strong> Entrance signs, practice zone markers</p>
                  <p><strong>Customizable:</strong> Add venue name, room numbers</p>
                  <p><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Window Decals */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">🪟</span>
                </div>
                <h3 className="text-heading text-center mb-4">Window Decals & Displays</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Street-facing graphics announcing practice sessions, event dates, and venue participation in Three Days Off.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-1">
                  <p><strong>Applications:</strong> Storefront windows, entrance doors</p>
                  <p><strong>Editable:</strong> Add session dates, contact info</p>
                  <p><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Table Tents & Small Signage */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">🏷️</span>
                </div>
                <h3 className="text-heading text-center mb-4">Small Format Signage</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Table tents, shelf talkers, small cards—intimate-scale reminders of practice principles (PAUSE • BREATHE • OBSERVE).
                </p>
                <div className="text-xs text-deep-brown/60 space-y-1">
                  <p><strong>Formats:</strong> 4x6, 5x7 print-ready PDFs</p>
                  <p><strong>Use Cases:</strong> Reception desks, practice spaces</p>
                  <p><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Spatial Layout Guides */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">📏</span>
                </div>
                <h3 className="text-heading text-center mb-4">Spatial Layout Guides</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Room arrangement templates, seating configurations, lighting recommendations—practical guides for creating contemplative environments.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-1">
                  <p><strong>Includes:</strong> Floor plans, seating diagrams</p>
                  <p><strong>Applications:</strong> Group sessions, open practice</p>
                  <p><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Help Build Section */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display mb-6">Help Build Space Assets</h2>
                <p className="text-xl text-warm-cream/90 leading-relaxed mb-8">
                  These resources are being created collaboratively by designers, typographers, and spatial thinkers who care about contemplative environments. Your contributions strengthen what venues can offer.
                </p>

                <div className="bg-warm-cream/10 p-8 rounded-lg mb-8 text-left">
                  <h3 className="text-heading mb-4 text-sage-green">Contribution Opportunities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium mb-2">Graphic Designers</p>
                      <p className="text-sm text-warm-cream/80">Create poster series, signage templates, environmental graphics</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Spatial Designers</p>
                      <p className="text-sm text-warm-cream/80">Develop layout guides, room configuration templates</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Typographers</p>
                      <p className="text-sm text-warm-cream/80">Design contemplative text treatments, readable signage</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Print Specialists</p>
                      <p className="text-sm text-warm-cream/80">Ensure print-ready formats, technical specifications</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/volunteer"
                    className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-contemplative-gold transition-all duration-300"
                  >
                    Volunteer to Create Assets
                  </Link>
                  <a
                    href="mailto:Creative@ThreeDaysOff.com?subject=Space Assets Contribution&body=I'm interested in contributing to the Space Transformation Assets collection."
                    className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300"
                  >
                    Discuss Your Ideas
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation to Other Resources */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-heading text-center mb-8">Other Venue Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/venues/programming" className="bg-sage-green/10 p-6 rounded-lg hover:bg-sage-green/20 transition-colors">
                  <div className="text-3xl mb-3 text-center">📋</div>
                  <h4 className="font-semibold text-center mb-2">Programming Kit</h4>
                  <p className="text-sm text-deep-brown/70 text-center">Session guides, facilitator resources, event templates</p>
                </Link>

                <Link href="/venues/digital-assets" className="bg-sage-green/10 p-6 rounded-lg hover:bg-sage-green/20 transition-colors">
                  <div className="text-3xl mb-3 text-center">🌐</div>
                  <h4 className="font-semibold text-center mb-2">Digital Assets</h4>
                  <p className="text-sm text-deep-brown/70 text-center">Website graphics, social media, email templates</p>
                </Link>

                <Link href="/venues/community" className="bg-sage-green/10 p-6 rounded-lg hover:bg-sage-green/20 transition-colors">
                  <div className="text-3xl mb-3 text-center">🤝</div>
                  <h4 className="font-semibold text-center mb-2">Community Resources</h4>
                  <p className="text-sm text-deep-brown/70 text-center">Engagement guides, moderation tools, reflection prompts</p>
                </Link>
              </div>

              <div className="mt-8 text-center">
                <Link href="/venues" className="text-sage-green hover:underline font-medium">
                  ← Back to Venues Hub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
