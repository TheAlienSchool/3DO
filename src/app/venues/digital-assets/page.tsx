'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function DigitalAssetsPage() {
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
                  DIGITAL ASSETS<br />
                  Online Integration & Social Media
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Digital resources for sharing Three Days Off online—website graphics, social media templates, email designs, and story formats that maintain contemplative integrity in digital spaces.
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
                <h2 className="text-display mb-6 three-dots">Contemplative Digital Presence</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  Can digital communication preserve contemplative depth? These assets explore how—inviting rather than demanding attention, creating breathing room even in scrolling feeds.
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
                  <h3 className="text-heading mb-4 text-sage-green">Design Principles</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Three Days Off digital assets resist attention economy pressures—slower pacing, minimal text, generous whitespace. Visual calm that invites pause rather than demanding clicks.
                  </p>
                  <ul className="space-y-2 text-sm text-deep-brown/70">
                    <li>• Breathing room in composition</li>
                    <li>• Invitational language, not urgency</li>
                    <li>• Subtle animation (when used)</li>
                    <li>• Respect for attention as sacred</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Platform Optimization</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Assets sized and formatted for each platform's technical requirements while maintaining Three Days Off aesthetic—contemplative design that works within platform constraints.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <p className="font-medium mb-2">Optimized For:</p>
                    <p>• Instagram (Posts, Stories, Reels)<br />
                    • Facebook (Posts, Events)<br />
                    • LinkedIn (Posts, Articles)<br />
                    • Email (Headers, Banners)</p>
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
              <h2 className="text-display mb-6">Digital Resource Collections</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                Comprehensive digital toolkit currently in development—created by designers who understand both contemplative values and platform best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Social Media Graphics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">📱</span>
                </div>
                <h3 className="text-heading text-center mb-4">Social Media Templates</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Pre-sized templates for Instagram, Facebook, LinkedIn posts—announcement graphics, quote cards, framework explainers, practice reminders.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Template Types:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Session announcements</li>
                    <li>Practice quote cards</li>
                    <li>Framework explanations</li>
                    <li>Countdown graphics</li>
                    <li>Thank you / recap posts</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Story Format Series */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">📊</span>
                </div>
                <h3 className="text-heading text-center mb-4">Story Format Series</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Multi-slide story sequences for Instagram/Facebook Stories—sequential visual storytelling introducing practice concepts and session details.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Story Series:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>3-slide framework intro</li>
                    <li>5-slide session promotion</li>
                    <li>Practice journey sequences</li>
                    <li>Behind-the-scenes venue prep</li>
                    <li>Participant testimonials</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Website Integration Graphics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">🌐</span>
                </div>
                <h3 className="text-heading text-center mb-4">Website Graphics</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Branded elements for integrating Three Days Off into your venue website—banners, badges, event page headers, call-to-action buttons.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Web Elements:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hero banners & headers</li>
                    <li>Event page graphics</li>
                    <li>"We Host 3DO" badges</li>
                    <li>CTA button designs</li>
                    <li>Footer integration elements</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Email Templates */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">📧</span>
                </div>
                <h3 className="text-heading text-center mb-4">Email Templates</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Newsletter and announcement email designs—session invitations, reminder sequences, follow-up messages, practice tips for mailing lists.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Email Types:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Session announcement</li>
                    <li>Registration confirmation</li>
                    <li>Pre-session reminders</li>
                    <li>Post-session follow-up</li>
                    <li>Practice tips newsletter</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Video Graphics Pack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">🎬</span>
                </div>
                <h3 className="text-heading text-center mb-4">Video Graphics Pack</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Lower thirds, title cards, intro/outro sequences for video content—maintain contemplative aesthetic in Reels, YouTube, video announcements.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Video Elements:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Intro/outro templates</li>
                    <li>Lower third overlays</li>
                    <li>Title card designs</li>
                    <li>End screen graphics</li>
                    <li>Caption/subtitle styling</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Eventbrite & Registration Graphics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">🎟️</span>
                </div>
                <h3 className="text-heading text-center mb-4">Event Platform Graphics</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Headers and images for event platforms—Eventbrite banners, Meetup graphics, calendar listing images that maintain brand integrity.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Platform Assets:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Eventbrite headers (2160x1080px)</li>
                    <li>Meetup event images</li>
                    <li>Facebook event covers</li>
                    <li>Calendar listing graphics</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Editable Templates Section */}
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
                <h2 className="text-display mb-6">Editable Template Formats</h2>
                <p className="text-xl text-deep-brown/80">
                  All digital assets available in multiple editable formats for easy customization
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-sage-green/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-center">Design Software</h4>
                  <div className="text-sm text-deep-brown/70 space-y-2">
                    <p>• Figma (fully editable)</p>
                    <p>• Adobe Illustrator</p>
                    <p>• Adobe Photoshop</p>
                    <p>• Canva templates</p>
                  </div>
                </div>

                <div className="bg-sage-green/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-center">Export Formats</h4>
                  <div className="text-sm text-deep-brown/70 space-y-2">
                    <p>• PNG (transparent backgrounds)</p>
                    <p>• JPG (optimized for web)</p>
                    <p>• SVG (scalable vectors)</p>
                    <p>• PDF (print-ready)</p>
                  </div>
                </div>

                <div className="bg-sage-green/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-center">Customization</h4>
                  <div className="text-sm text-deep-brown/70 space-y-2">
                    <p>• Add venue name/logo</p>
                    <p>• Adjust colors (brand match)</p>
                    <p>• Edit text/copy</p>
                    <p>• Resize for platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-display mb-6">Digital Sharing Best Practices</h2>
                <p className="text-xl text-deep-brown/80">
                  Guidance for maintaining contemplative integrity in digital spaces
                </p>
              </motion.div>

              <div className="bg-warm-white p-8 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sage-green mb-2">Respect Attention as Sacred</h4>
                    <p className="text-sm text-deep-brown/70">
                      Post with intention rather than algorithm optimization. Quality over frequency. Invitations rather than demands for engagement.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sage-green mb-2">Slower Pacing</h4>
                    <p className="text-sm text-deep-brown/70">
                      Resist urgency culture. Session announcements don't need "LAST CHANCE" language. Trust that people who need this practice will find it.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sage-green mb-2">Inclusive Language</h4>
                    <p className="text-sm text-deep-brown/70">
                      Describe practice without spiritual assumptions. "Preparation practice" serves more people than "meditation retreat." Meet audiences where they are.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sage-green mb-2">Authentic Voice</h4>
                    <p className="text-sm text-deep-brown/70">
                      Adapt copy to your venue's voice while honoring Three Days Off principles. Your authentic expression matters more than perfect brand consistency.
                    </p>
                  </div>
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
                <h2 className="text-display mb-6">Help Build Digital Assets</h2>
                <p className="text-xl text-warm-cream/90 leading-relaxed mb-8">
                  These resources are being created collaboratively by digital designers, social media specialists, and contemplative practitioners who understand both platform dynamics and sacred presence.
                </p>

                <div className="bg-warm-cream/10 p-8 rounded-lg mb-8 text-left">
                  <h3 className="text-heading mb-4 text-sage-green">Contribution Opportunities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium mb-2">Social Media Designers</p>
                      <p className="text-sm text-warm-cream/80">Create platform-optimized templates, story sequences, post graphics</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Web Designers</p>
                      <p className="text-sm text-warm-cream/80">Develop website integration elements, event page graphics</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Email Designers</p>
                      <p className="text-sm text-warm-cream/80">Build responsive email templates, newsletter designs</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Video Editors</p>
                      <p className="text-sm text-warm-cream/80">Create motion graphics, title sequences, video overlays</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/volunteer"
                    className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-contemplative-gold transition-all duration-300"
                  >
                    Volunteer to Create Digital Assets
                  </Link>
                  <a
                    href="mailto:Creative@ThreeDaysOff.com?subject=Digital Assets Contribution&body=I'm interested in contributing to the Digital Assets collection."
                    className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300"
                  >
                    Share Your Digital Design Skills
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

                <Link href="/venues/programming" className="bg-sage-green/10 p-6 rounded-lg hover:bg-sage-green/20 transition-colors">
                  <div className="text-3xl mb-3 text-center">📋</div>
                  <h4 className="font-semibold text-center mb-2">Programming Kit</h4>
                  <p className="text-sm text-deep-brown/70 text-center">Session guides, facilitator resources, event templates</p>
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
