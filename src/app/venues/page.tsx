'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function VenuesPage() {
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
                  SANCTUARY SPACES<br />
                  FOR THREE DAYS OFF
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  We invite venues, organizations, and communities to become sanctuary spaces—places where 
                  people can practice Three Days Off together while honoring their own individual rhythms.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Invitation Section */}
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
                <h2 className="text-display mb-6 three-dots">An Invitation to Create Space</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  Three Days Off becomes more powerful when practiced in community. We're seeking venues that 
                  understand the profound value of collective stillness and want to offer their space as 
                  a container for this global practice.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-heading mb-6">What Makes a Sanctuary Space?</h3>
                  <p className="text-deep-brown/80 mb-6 leading-relaxed">
                    A Three Days Off venue isn't about providing entertainment or instruction. It's about 
                    creating conditions where people can practice conscious pause, mindful breathing, and 
                    observant stillness—either in guided community sessions or through self-directed practice.
                  </p>
                  <p className="text-deep-brown/80 leading-relaxed">
                    You might be a meditation center, library, community center, bookstore, art gallery, 
                    coworking space, yoga studio, or any place that values contemplative practice and 
                    community wellbeing.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h4 className="text-heading mb-4 text-sage-green">Venue Partnership Benefits</h4>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Global Recognition:</strong> Listed on ThreeDaysOff.com venue directory</li>
                    <li>• <strong>Marketing Toolkit:</strong> Professional assets and promotional materials</li>
                    <li>• <strong>Community Building:</strong> Attract conscious, mindful community members</li>
                    <li>• <strong>Flexible Programming:</strong> Adapt to your space and audience needs</li>
                    <li>• <strong>No Cost Participation:</strong> Partnership is free—this is about service</li>
                    <li>• <strong>Ongoing Support:</strong> Access to facilitator resources and guidance</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Programming Options */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Programming Approaches</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                Three Days Off venues can offer various types of programming, from structured group sessions 
                to simply providing quiet space for individual practice. Choose what feels aligned with 
                your community and capacity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Structured Sessions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">🎯</span>
                </div>
                <h3 className="text-heading text-center mb-4">Guided Sessions</h3>
                <p className="text-deep-brown/80 mb-4">
                  Offer structured group experiences using the PAUSE • BREATHE • OBSERVE framework. 
                  Sessions can range from 30 minutes to several hours.
                </p>
                <div className="text-sm text-sage-green font-medium">
                  <p><strong>Includes:</strong> Facilitator guides, session outlines, participant materials</p>
                </div>
              </motion.div>

              {/* Open Practice */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">🕯️</span>
                </div>
                <h3 className="text-heading text-center mb-4">Open Practice Space</h3>
                <p className="text-deep-brown/80 mb-4">
                  Provide quiet, supportive environment where people can practice Three Days Off 
                  individually while being in community presence.
                </p>
                <div className="text-sm text-sage-green font-medium">
                  <p><strong>Includes:</strong> Space setup guides, ambient materials, gentle guidance resources</p>
                </div>
              </motion.div>

              {/* Hybrid Approach */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">🌱</span>
                </div>
                <h3 className="text-heading text-center mb-4">Flexible Programming</h3>
                <p className="text-deep-brown/80 mb-4">
                  Combine elements—perhaps opening with brief group centering, then individual practice, 
                  followed by optional sharing or integration time.
                </p>
                <div className="text-sm text-sage-green font-medium">
                  <p><strong>Includes:</strong> Modular programming options, timing templates, adaptation guides</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3DO Media Center */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-display mb-6">3DO Media Center</h2>
                <p className="text-xl text-warm-cream/90 leading-relaxed mb-8">
                  Your creative sanctuary for Three Days Off. Professional assets designed for collaboration, 
                  adaptation, and authentic expression of contemplative practice.
                </p>
                <div className="bg-warm-cream/10 p-6 rounded-lg text-left max-w-3xl mx-auto">
                  <h3 className="text-lg font-semibold mb-4 text-center">Make Them Yours</h3>
                  <p className="text-warm-cream/90 mb-4">
                    Every asset is designed for collaboration. Add your branding, adapt the messaging, 
                    integrate with your existing aesthetic. We celebrate venues that make Three Days Off 
                    their own while honoring the contemplative heart of the practice.
                  </p>
                  <p className="text-sage-green text-center font-medium">
                    Share your 3DO campaigns and events: <strong>Creative@ThreeDaysOff.com</strong>
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Space Transformation Assets */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-cream/10 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-4">Space Transformation</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📐</span>
                      <span><strong>Bauhaus Poster Series:</strong> Clean geometric contemplative designs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🎨</span>
                      <span><strong>Swiss Style Collection:</strong> Typography that breathes with meaning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🖼️</span>
                      <span><strong>Environmental Graphics:</strong> Sanctuary signage and displays</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open('https://drive.google.com/drive/folders/space-transformation-assets', '_blank')}
                    className="mt-4 w-full btn-contemplative px-4 py-2 rounded-full text-sm font-medium"
                  >
                    Browse Space Assets
                  </button>
                </motion.div>

                {/* Event Creation Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-warm-cream/10 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-4">Event Creation</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📋</span>
                      <span><strong>Program Templates:</strong> Workshop guides and session outlines</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📱</span>
                      <span><strong>Social Media Kit:</strong> Engagement-optimized announcement templates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📝</span>
                      <span><strong>Registration Materials:</strong> Sign-up forms and participant guides</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open('https://drive.google.com/drive/folders/event-creation-resources', '_blank')}
                    className="mt-4 w-full btn-contemplative px-4 py-2 rounded-full text-sm font-medium"
                  >
                    Browse Event Resources
                  </button>
                </motion.div>

                {/* Digital Integration Tools */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-warm-cream/10 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-4">Digital Integration</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🌐</span>
                      <span><strong>Website Graphics:</strong> Branded integration elements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📧</span>
                      <span><strong>Email Templates:</strong> Newsletter and announcement designs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📊</span>
                      <span><strong>Story Format Series:</strong> Sequential visual storytelling assets</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open('https://drive.google.com/drive/folders/digital-integration-tools', '_blank')}
                    className="mt-4 w-full btn-contemplative px-4 py-2 rounded-full text-sm font-medium"
                  >
                    Browse Digital Assets
                  </button>
                </motion.div>

                {/* Programming Resources */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-warm-cream/10 p-6 rounded-lg md:col-span-2 lg:col-span-1"
                >
                  <h3 className="text-lg font-semibold mb-4">Programming Resources</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📋</span>
                      <span><strong>Facilitator Guides:</strong> Session outlines and group management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🗣️</span>
                      <span><strong>Script Templates:</strong> Opening words and transitions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🏗️</span>
                      <span><strong>Space Setup Guides:</strong> Layout and atmosphere creation</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open('https://drive.google.com/drive/folders/programming-resources', '_blank')}
                    className="mt-4 w-full btn-contemplative px-4 py-2 rounded-full text-sm font-medium"
                  >
                    Browse Programming Kit
                  </button>
                </motion.div>

                {/* Community Engagement */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-warm-cream/10 p-6 rounded-lg md:col-span-2 lg:col-span-1"
                >
                  <h3 className="text-lg font-semibold mb-4">Community Engagement</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🤝</span>
                      <span><strong>Boundary Templates:</strong> Loving communication guidelines</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🎭</span>
                      <span><strong>Moderation Guides:</strong> Creating safe containers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📝</span>
                      <span><strong>Reflection Prompts:</strong> Integration and sharing activities</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open('https://drive.google.com/drive/folders/community-engagement', '_blank')}
                    className="mt-4 w-full btn-contemplative px-4 py-2 rounded-full text-sm font-medium"
                  >
                    Browse Community Resources
                  </button>
                </motion.div>
              </div>

              {/* Access the Full Media Center */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 md:col-span-2 lg:col-span-3 bg-sage-green/20 p-8 rounded-lg text-center"
              >
                <h3 className="text-heading mb-4">3DO Content Library</h3>
                <p className="text-warm-cream/90 mb-6 max-w-2xl mx-auto">
                  Access the complete collection through our Google Drive Content Library. Browse, download, 
                  and adapt any assets that serve your venue's Three Days Off experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.open('https://drive.google.com/drive/folders/3do-complete-content-library', '_blank')}
                    className="btn-contemplative px-8 py-4 rounded-full font-medium tracking-wide"
                  >
                    Access Content Library
                  </button>
                  <a 
                    href="mailto:Creative@ThreeDaysOff.com?subject=Custom Asset Request&body=Hello! I'd like to request custom assets for my Three Days Off venue. Please include details about your venue and specific asset needs."
                    className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300"
                  >
                    Request Custom Assets
                  </a>
                </div>
                <p className="text-sm text-warm-cream/70 mt-4">
                  New assets added regularly • Community creations featured • Usage rights included
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Registration Process */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-display mb-6">Becoming a Sanctuary Space</h2>
                <p className="text-xl text-deep-brown/80">
                  The process is intentionally simple—we believe in reducing barriers to creating 
                  contemplative community spaces.
                </p>
              </motion.div>

              <div className="space-y-8">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-green rounded-full flex items-center justify-center">
                      <span className="text-warm-cream font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-heading mb-3">Complete Venue Application</h3>
                    <p className="text-deep-brown/80">
                      Brief form about your space, capacity, programming interests, and community. 
                      We want to understand how Three Days Off aligns with your existing mission and values.
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-green rounded-full flex items-center justify-center">
                      <span className="text-warm-cream font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-heading mb-3">Connect with Our Team</h3>
                    <p className="text-deep-brown/80">
                      Brief conversation with our venue support team to explore programming options, 
                      answer questions, and ensure Three Days Off feels aligned with your community's needs.
                    </p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-green rounded-full flex items-center justify-center">
                      <span className="text-warm-cream font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-heading mb-3">Receive Toolkit & Support</h3>
                    <p className="text-deep-brown/80">
                      Access complete venue toolkit, get listed in our directory, and connect with 
                      our community of venue partners for ongoing support and shared learning.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
                  Ready to Create Sanctuary?
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-deep-brown/80">
                  Join a growing network of venues creating space for collective contemplative practice. 
                  Together, we're demonstrating that another way of being together is possible—one that 
                  honors both individual wisdom and community support.
                </p>
                <div className="bg-warm-white p-8 rounded-lg mb-8">
                  <h3 className="text-heading mb-4">Gratitude for Your Consideration</h3>
                  <p className="text-deep-brown/80 leading-relaxed">
                    Whether you join as a venue partner or simply hold space for this work in your community, 
                    we honor your contribution to creating a more contemplative world. Your willingness to 
                    consider this invitation is already a gift to the collective practice of conscious pause.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/venues/register" 
                    className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-deep-brown transition-all duration-300"
                  >
                    Apply to Become a Venue
                  </Link>
                  <button 
                    onClick={() => window.scrollTo({ top: 200, behavior: 'smooth' })}
                    className="border-2 border-sage-green text-sage-green px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                  >
                    Explore Media Center ↑
                  </button>
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
              <Link href="/press" className="nav-link">Press</Link>
              <Link href="/privacy" className="nav-link">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
