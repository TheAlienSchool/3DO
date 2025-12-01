'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ProgrammingKitPage() {
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
                  PROGRAMMING KIT<br />
                  Facilitator Resources & Event Creation
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Complete toolkit for hosting Three Days Off sessions—facilitator guides, session outlines, event templates, and participant materials for bringing preparation practice to your community.
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
                <h2 className="text-display mb-6 three-dots">From Practice to Programming</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  Three Days Off programming isn't about teaching meditation or imposing techniques. It's about creating containers where people can discover their own relationship with PAUSE • BREATHE • OBSERVE.
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
                  <h3 className="text-heading mb-4 text-sage-green">Facilitation Philosophy</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Less instruction, more invitation. Facilitators create conditions for practice rather than directing experience. The framework is simple enough that people don't need experts—they need supportive containers.
                  </p>
                  <ul className="space-y-2 text-sm text-deep-brown/70">
                    <li>• Hold space without controlling outcomes</li>
                    <li>• Trust participants' inner wisdom</li>
                    <li>• Offer structure without rigidity</li>
                    <li>• Honor diverse nervous system needs</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Programming Flexibility</h3>
                  <p className="text-deep-brown/80 mb-4">
                    These resources adapt to your venue's capacity and community needs. Single 30-minute sessions, multi-hour workshops, ongoing practice groups—all built on the same foundational framework.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <p className="font-medium mb-2">Session Formats:</p>
                    <p>• 30-minute Introduction<br />
                    • 90-minute Workshop<br />
                    • 3-hour Deep Practice<br />
                    • Ongoing Practice Groups</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Collections */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Programming Resources</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                Comprehensive toolkit currently in development—built by facilitators who understand both contemplative practice and practical event logistics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Facilitator Guides */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">📋</span>
                </div>
                <h3 className="text-heading text-center mb-4">Facilitator Guides</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Step-by-step session outlines, timing guides, transition scripts, and group management principles for holding contemplative space.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Includes:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Session opening scripts</li>
                    <li>Practice transition language</li>
                    <li>Group size considerations</li>
                    <li>Timing templates (30min - 3hr)</li>
                    <li>Q&A response guides</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Session Outlines */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">⏱️</span>
                </div>
                <h3 className="text-heading text-center mb-4">Session Outlines</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Minute-by-minute breakdowns for different session types—from brief intro sessions to extended workshops with integration time.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Session Types:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>30min: Framework Introduction</li>
                    <li>60min: Practice + Integration</li>
                    <li>90min: Deep Dive Workshop</li>
                    <li>3hr: Extended Practice Session</li>
                    <li>Multi-week: Ongoing Groups</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Participant Materials */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">📄</span>
                </div>
                <h3 className="text-heading text-center mb-4">Participant Materials</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Handouts, practice guides, reflection prompts, and take-home resources that support continued practice after sessions.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Materials Include:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Framework overview cards</li>
                    <li>Practice reminder sheets</li>
                    <li>Integration journals</li>
                    <li>Resource links & QR codes</li>
                    <li>Take-home practice guides</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Event Creation Templates */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">📅</span>
                </div>
                <h3 className="text-heading text-center mb-4">Event Creation Templates</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Registration forms, event descriptions, announcement copy, email sequences—everything needed to launch and promote sessions.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Templates for:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Event page copy</li>
                    <li>Registration forms (Eventbrite, etc.)</li>
                    <li>Announcement emails</li>
                    <li>Reminder sequences</li>
                    <li>Post-event follow-up</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>
            </div>

            {/* Additional Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              {/* Space Setup Guides */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <div className="text-3xl mb-3 text-center">🏗️</div>
                <h4 className="font-semibold text-center mb-3">Space Setup Guides</h4>
                <p className="text-sm text-deep-brown/70">
                  Room arrangement, seating configurations, lighting recommendations, sound considerations for contemplative environments.
                </p>
              </motion.div>

              {/* Adaptation Guidelines */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <div className="text-3xl mb-3 text-center">🔄</div>
                <h4 className="font-semibold text-center mb-3">Adaptation Guidelines</h4>
                <p className="text-sm text-deep-brown/70">
                  How to modify sessions for different contexts—corporate settings, faith communities, educational institutions, public spaces.
                </p>
              </motion.div>

              {/* Accessibility Resources */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <div className="text-3xl mb-3 text-center">♿</div>
                <h4 className="font-semibold text-center mb-3">Accessibility Resources</h4>
                <p className="text-sm text-deep-brown/70">
                  Guidance for creating inclusive sessions—physical accessibility, neurodivergent considerations, trauma-informed approaches.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sample Session Structure */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-display mb-6">Sample Session Structure</h2>
                <p className="text-xl text-deep-brown/80">
                  Preview of a 90-minute Three Days Off workshop format
                </p>
              </motion.div>

              <div className="bg-sage-green/10 p-8 rounded-lg">
                <div className="space-y-6">
                  {/* Arrival & Settling */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-semibold text-sage-green">Arrival & Settling</h4>
                      <span className="text-sm text-deep-brown/60">0-10 minutes</span>
                    </div>
                    <p className="text-sm text-deep-brown/80">
                      Gentle arrival, find seating, ambient environment. Brief welcome without rushing transition from external world.
                    </p>
                  </div>

                  {/* Opening & Context */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-semibold text-sage-green">Opening & Context</h4>
                      <span className="text-sm text-deep-brown/60">10-20 minutes</span>
                    </div>
                    <p className="text-sm text-deep-brown/80">
                      Brief introduction to Three Days Off framework, PAUSE • BREATHE • OBSERVE. Why preparation practice matters. Set container for session.
                    </p>
                  </div>

                  {/* Guided Practice */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-semibold text-sage-green">Guided Practice (PAUSE • BREATHE • OBSERVE)</h4>
                      <span className="text-sm text-deep-brown/60">20-50 minutes</span>
                    </div>
                    <p className="text-sm text-deep-brown/80">
                      Moving through framework phases with gentle guidance. Extended silence. Minimal instruction once practice begins.
                    </p>
                  </div>

                  {/* Integration Time */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-semibold text-sage-green">Integration & Reflection</h4>
                      <span className="text-sm text-deep-brown/60">50-75 minutes</span>
                    </div>
                    <p className="text-sm text-deep-brown/80">
                      Gentle return. Optional sharing (never required). Q&A about practice. Connecting experience to daily life.
                    </p>
                  </div>

                  {/* Closing */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-semibold text-sage-green">Closing & Resources</h4>
                      <span className="text-sm text-deep-brown/60">75-90 minutes</span>
                    </div>
                    <p className="text-sm text-deep-brown/80">
                      Share take-home materials, practice resources, upcoming sessions. Gentle completion without rushing departure.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-warm-white rounded-lg">
                  <p className="text-sm text-deep-brown/70 italic">
                    <strong>Note:</strong> All timing is flexible. Some groups need more settling time, others move quickly into practice. The framework adapts to the nervous systems in the room.
                  </p>
                </div>
              </div>
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
                <h2 className="text-display mb-6">Help Build Programming Resources</h2>
                <p className="text-xl text-warm-cream/90 leading-relaxed mb-8">
                  These materials are being developed collaboratively by facilitators, event organizers, and practice holders who understand both contemplative depth and logistical realities.
                </p>

                <div className="bg-warm-cream/10 p-8 rounded-lg mb-8 text-left">
                  <h3 className="text-heading mb-4 text-sage-green">Contribution Opportunities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium mb-2">Experienced Facilitators</p>
                      <p className="text-sm text-warm-cream/80">Shape session guides, timing templates, group management principles</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Event Organizers</p>
                      <p className="text-sm text-warm-cream/80">Create registration templates, announcement copy, logistics guides</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Instructional Designers</p>
                      <p className="text-sm text-warm-cream/80">Develop clear, accessible participant materials and handouts</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Accessibility Consultants</p>
                      <p className="text-sm text-warm-cream/80">Ensure resources serve diverse needs and nervous systems</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/volunteer"
                    className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-contemplative-gold transition-all duration-300"
                  >
                    Volunteer to Build Programming Kit
                  </Link>
                  <a
                    href="mailto:Facilitators@ThreeDaysOff.com?subject=Programming Resources Contribution&body=I'm interested in contributing to the Programming Kit."
                    className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300"
                  >
                    Share Your Facilitation Experience
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
                <Link href="/venues/space-assets" className="bg-sage-green/10 p-6 rounded-lg hover:bg-sage-green/20 transition-colors">
                  <div className="text-3xl mb-3 text-center">📐</div>
                  <h4 className="font-semibold text-center mb-2">Space Assets</h4>
                  <p className="text-sm text-deep-brown/70 text-center">Posters, signage, environmental graphics for venues</p>
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
