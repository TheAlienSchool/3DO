'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function MediaCenterPage() {
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
                  THREE DAYS OFF<br />
                  MEDIA CENTER
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Complete press kit and media resources :: designed for journalists, content creators,
                  and storytellers covering the global preparation practice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:Press@ThreeDaysOff.com"
                    className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-deep-brown transition-all duration-300"
                  >
                    Contact Press Team
                  </a>
                  <Link
                    href="/volunteer"
                    className="border-2 border-sage-green text-sage-green px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                  >
                    Volunteer :: Help Build Assets
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Facts Sheet */}
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
                <h2 className="text-display mb-6 three-dots">Quick Facts Sheet</h2>
                <p className="text-lg text-deep-brown/80">
                  Essential information for reporters and content creators
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
                  <h3 className="text-heading mb-4 text-sage-green">Core Information</h3>
                  <div className="space-y-3 text-deep-brown/80">
                    <div>
                      <strong>What:</strong> Three Days Off :: A global preparation practice for Mind, Body, and Spirit integration
                    </div>
                    <div>
                      <strong>When:</strong> September 5-7, 2026 (Labor Day Weekend)
                    </div>
                    <div>
                      <strong>Launch:</strong> August 15, 2025
                    </div>
                    <div>
                      <strong>Where:</strong> Global :: accessible to anyone, anywhere
                    </div>
                    <div>
                      <strong>Cost:</strong> Free, voluntary participation
                    </div>
                    <div>
                      <strong>Creator:</strong> Kamau Zuberi Akabueze, founder of <a href="https://thealienschool.com" target="_blank" rel="noopener noreferrer" className="text-sage-green hover:underline">TheAlienSchool.com</a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">The Framework</h3>
                  <div className="space-y-3 text-deep-brown/80">
                    <div>
                      <strong>Philosophy:</strong> "Threesome with mind, body, and spirit"
                    </div>
                    <div>
                      <strong>Core Practice:</strong> PAUSE • BREATHE • OBSERVE
                    </div>
                    <div>
                      <strong>Positioning:</strong> Maximum internal restoration and genius development
                    </div>
                    <div>
                      <strong>Research Basis:</strong> HeartMath Institute, JAMA studies, WHO workplace stress research
                    </div>
                    <div>
                      <strong>Inspiration:</strong> Stefan Sagmeister's 7:1 sabbatical model
                    </div>
                    <div>
                      <strong>Alternative:</strong> Three Days On for intensity practitioners
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 bg-deep-brown text-warm-cream p-8 rounded-lg"
              >
                <h3 className="text-heading mb-4">Key Statistics</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="text-3xl font-bold text-contemplative-gold mb-2">46%</div>
                    <p>Reduction in anxiety symptoms through intentional pause practices (JAMA)</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-contemplative-gold mb-2">31%</div>
                    <p>Increase in Heart Rate Variability coherence (HeartMath Institute)</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-contemplative-gold mb-2">264M</div>
                    <p>Workers globally affected by workplace stress (WHO, 2023)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pullable Quotes */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Pullable Quotes</h2>
              <p className="text-xl text-deep-brown/80">
                Ready-to-use quotes from founder Kamau Zuberi Akabueze
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Quote 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg border-l-4 border-sage-green"
              >
                <p className="text-lg italic text-deep-brown/90 mb-4">
                  "Most practices train one aspect—meditation for mind, yoga for body, ritual for spirit.
                  Three Days Off trains their collaboration. When Mind, Body, and Spirit work together,
                  you don't just rest. You develop genius."
                </p>
                <p className="text-sm text-deep-brown/60">
                  — Kamau Zuberi Akabueze, Founder of Three Days Off
                </p>
              </motion.div>

              {/* Quote 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg border-l-4 border-sage-green"
              >
                <p className="text-lg italic text-deep-brown/90 mb-4">
                  "This isn't about escaping life. It's about building capacity for what matters.
                  When you bring undivided attention to your own integration, you become clear.
                  Your clarity creates orientation for others."
                </p>
                <p className="text-sm text-deep-brown/60">
                  — Kamau Zuberi Akabueze on the Lantern to Lighthouse framework
                </p>
              </motion.div>

              {/* Quote 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg border-l-4 border-sage-green"
              >
                <p className="text-lg italic text-deep-brown/90 mb-4">
                  "We're not selling anything. We're building proof that collective coherence is possible.
                  When thousands practice together, research suggests measurable effects emerge—a sales funnel
                  with nothing to sell, accessible to anyone who needs it."
                </p>
                <p className="text-sm text-deep-brown/60">
                  — Kamau Zuberi Akabueze on Three Days Off as social demonstration
                </p>
              </motion.div>

              {/* Quote 4 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg border-l-4 border-sage-green"
              >
                <p className="text-lg italic text-deep-brown/90 mb-4">
                  "Three Days Off works with real life, not perfect conditions. Five minutes of conscious
                  breathing counts. So does three full days of retreat. Your practice belongs to you."
                </p>
                <p className="text-sm text-deep-brown/60">
                  — Kamau Zuberi Akabueze on accessibility and adaptability
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Angles Library */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Story Angles Library</h2>
              <p className="text-xl text-deep-brown/80">
                Multiple entry points for different editorial perspectives
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Wellness Beat */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-3 text-sage-green">Wellness & Mental Health</h3>
                <p className="text-sm text-deep-brown/80 mb-4">
                  How structured pause addresses burnout epidemic :: 46% anxiety reduction,
                  HeartMath coherence data, WHO workplace stress solutions
                </p>
                <p className="text-xs text-deep-brown/60">
                  <strong>Best for:</strong> Health sections, wellness blogs, mental health coverage
                </p>
              </motion.div>

              {/* Labor Angle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-3 text-sage-green">Future of Work</h3>
                <p className="text-sm text-deep-brown/80 mb-4">
                  Labor Day launch questions productivity culture :: sabbatical models,
                  remote work wellness, collective rest as resistance
                </p>
                <p className="text-xs text-deep-brown/60">
                  <strong>Best for:</strong> Business sections, HR publications, labor coverage
                </p>
              </motion.div>

              {/* Tech & Consciousness */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-3 text-sage-green">Technology & Digital Life</h3>
                <p className="text-sm text-deep-brown/80 mb-4">
                  Can tech support contemplative practice? :: Digital minimalism meets global
                  coordination, conscious technology use
                </p>
                <p className="text-xs text-deep-brown/60">
                  <strong>Best for:</strong> Tech sections, digital culture, online communities
                </p>
              </motion.div>

              {/* Social Movement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-3 text-sage-green">Collective Action</h3>
                <p className="text-sm text-deep-brown/80 mb-4">
                  Thousands practicing stillness simultaneously :: social demonstration,
                  collective coherence research, consciousness as community building
                </p>
                <p className="text-xs text-deep-brown/60">
                  <strong>Best for:</strong> Culture sections, social trends, community organizing
                </p>
              </motion.div>

              {/* Creative Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-3 text-sage-green">Creativity & Innovation</h3>
                <p className="text-sm text-deep-brown/80 mb-4">
                  Sagmeister's sabbatical model scaled :: rest as creative necessity,
                  pause-innovation relationship, genius development framework
                </p>
                <p className="text-xs text-deep-brown/60">
                  <strong>Best for:</strong> Design publications, creative industry, arts coverage
                </p>
              </motion.div>

              {/* Cultural Shift */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-3 text-sage-green">Cultural Evolution</h3>
                <p className="text-sm text-deep-brown/80 mb-4">
                  Valuing being alongside doing :: consciousness culture, generational values shift,
                  lifestyle evolution post-pandemic
                </p>
                <p className="text-xs text-deep-brown/60">
                  <strong>Best for:</strong> Lifestyle sections, trend reporting, cultural analysis
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visual Assets Library */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Visual Assets Library</h2>
              <p className="text-xl text-warm-cream/90">
                High-resolution images, logos, and graphics for editorial use
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Logo Package */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-cream/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4">Logo & Branding Package</h3>
                  <div className="space-y-3 text-warm-cream/80 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-sage-green">📦</span>
                      <span><strong>Primary Logo:</strong> Full wordmark with symbol (PNG, SVG, EPS)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sage-green">⚪</span>
                      <span><strong>Symbol Only:</strong> 3DO icon for small spaces</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sage-green">🎨</span>
                      <span><strong>Color Variations:</strong> Full color, black, white, single-color</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sage-green">📐</span>
                      <span><strong>Usage Guidelines:</strong> Spacing, sizing, placement rules</span>
                    </div>
                  </div>
                  <Link
                    href="/volunteer"
                    className="mt-6 inline-block bg-sage-green text-warm-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-warm-cream hover:text-deep-brown transition-all"
                  >
                    Volunteer :: Help Create Logo Package
                  </Link>
                </motion.div>

                {/* Photography */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-cream/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4">Stock Photography</h3>
                  <div className="space-y-3 text-warm-cream/80 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-sage-green">🧘</span>
                      <span><strong>Practice Images:</strong> People in contemplative states</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sage-green">🌍</span>
                      <span><strong>Global Scenes:</strong> Diverse locations and practitioners</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sage-green">🏛️</span>
                      <span><strong>Venue Spaces:</strong> Libraries, studios, community centers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sage-green">📸</span>
                      <span><strong>Founder Headshots:</strong> Multiple resolution options</span>
                    </div>
                  </div>
                  <Link
                    href="/volunteer"
                    className="mt-6 inline-block bg-sage-green text-warm-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-warm-cream hover:text-deep-brown transition-all"
                  >
                    Volunteer :: Help Curate Photos
                  </Link>
                </motion.div>
              </div>

              {/* Infographics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <h3 className="text-heading mb-6 text-center">Editorial Infographics</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-deep-brown/30 p-4 rounded-lg">
                    <div className="text-contemplative-gold font-bold mb-2">🎯 Practice Framework</div>
                    <p className="text-warm-cream/70">
                      Visual breakdown of PAUSE • BREATHE • OBSERVE cycle with timing suggestions
                    </p>
                  </div>
                  <div className="bg-deep-brown/30 p-4 rounded-lg">
                    <div className="text-contemplative-gold font-bold mb-2">🌐 Global Participation</div>
                    <p className="text-warm-cream/70">
                      World map showing participant distribution, time zones, venue partners
                    </p>
                  </div>
                  <div className="bg-deep-brown/30 p-4 rounded-lg">
                    <div className="text-contemplative-gold font-bold mb-2">📊 Research Data</div>
                    <p className="text-warm-cream/70">
                      Anxiety reduction, HRV coherence, workplace stress statistics visualized
                    </p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Link
                    href="/volunteer"
                    className="inline-block bg-sage-green text-warm-cream px-8 py-3 rounded-full font-medium hover:bg-warm-cream hover:text-deep-brown transition-all"
                  >
                    Volunteer :: Help Design Infographics
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Research Summary */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-display mb-12 text-center">Research Summary for Media</h2>

              <div className="space-y-8">
                {/* Study 1 */}
                <div className="bg-warm-white p-8 rounded-lg">
                  <h3 className="text-heading mb-3 text-sage-green">Anxiety Reduction Through Pause Practices</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Source:</strong> JAMA Internal Medicine meta-analysis of mindfulness-based interventions
                  </p>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Finding:</strong> Structured pause practices showed 46% reduction in anxiety symptoms
                    compared to control groups over 8-week periods. Effects maintained at 6-month follow-up.
                  </p>
                  <p className="text-sm text-deep-brown/60">
                    <strong>Relevance:</strong> Three Days Off provides accessible structure for this type of
                    anxiety-reducing pause practice.
                  </p>
                </div>

                {/* Study 2 */}
                <div className="bg-warm-white p-8 rounded-lg">
                  <h3 className="text-heading mb-3 text-sage-green">Heart Rate Variability Coherence</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Source:</strong> HeartMath Institute research on physiological coherence
                  </p>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Finding:</strong> Intentional breathing practices increased Heart Rate Variability
                    coherence by 31%, indicating improved autonomic nervous system regulation and emotional resilience.
                  </p>
                  <p className="text-sm text-deep-brown/60">
                    <strong>Relevance:</strong> The BREATHE component of Three Days Off directly engages
                    these coherence-building mechanisms.
                  </p>
                </div>

                {/* Study 3 */}
                <div className="bg-warm-white p-8 rounded-lg">
                  <h3 className="text-heading mb-3 text-sage-green">Workplace Stress Global Impact</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Source:</strong> World Health Organization (WHO) workplace mental health report, 2023
                  </p>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Finding:</strong> 264 million workers globally affected by work-related stress,
                    anxiety, and burnout. Economic impact exceeds $1 trillion annually in lost productivity.
                  </p>
                  <p className="text-sm text-deep-brown/60">
                    <strong>Relevance:</strong> Three Days Off addresses this global challenge through structured,
                    accessible pause practice.
                  </p>
                </div>

                {/* Study 4 */}
                <div className="bg-warm-white p-8 rounded-lg">
                  <h3 className="text-heading mb-3 text-sage-green">Sabbatical Impact on Creativity</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Source:</strong> Stefan Sagmeister's documented 7-year sabbatical cycle
                  </p>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Finding:</strong> Regular extended breaks (one year every seven years) produced
                    measurably higher creative output, innovative thinking, and sustained professional satisfaction.
                  </p>
                  <p className="text-sm text-deep-brown/60">
                    <strong>Relevance:</strong> Three Days Off adapts sabbatical principles to accessible
                    72-hour format practiced annually.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-deep-brown text-warm-cream p-8 rounded-lg text-center">
                <h3 className="text-heading mb-4">Need More Research Context?</h3>
                <p className="text-warm-cream/90 mb-6">
                  Our research team can provide additional studies, expert sources, and
                  data visualizations tailored to your editorial needs.
                </p>
                <a
                  href="mailto:Research@ThreeDaysOff.com"
                  className="inline-block bg-warm-cream text-deep-brown px-8 py-3 rounded-full font-medium hover:bg-sage-green hover:text-warm-cream transition-all"
                >
                  Contact Research Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact & Support */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-display mb-8">Media Support Team</h2>
              <p className="text-xl leading-relaxed mb-12 text-deep-brown/80">
                We're here to support accurate, in-depth coverage of Three Days Off.
                Our team responds within 24 hours to all media inquiries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-sage-green/10 p-6 rounded-lg text-left">
                  <h3 className="font-semibold text-sage-green mb-2">General Press Inquiries</h3>
                  <p className="text-deep-brown/80 mb-2">Press@ThreeDaysOff.com</p>
                  <p className="text-sm text-deep-brown/60">Questions, fact-checking, general coverage</p>
                </div>

                <div className="bg-sage-green/10 p-6 rounded-lg text-left">
                  <h3 className="font-semibold text-sage-green mb-2">Interview Requests</h3>
                  <p className="text-deep-brown/80 mb-2">Interviews@ThreeDaysOff.com</p>
                  <p className="text-sm text-deep-brown/60">Founder availability, expert commentary</p>
                </div>

                <div className="bg-sage-green/10 p-6 rounded-lg text-left">
                  <h3 className="font-semibold text-sage-green mb-2">Research & Data</h3>
                  <p className="text-deep-brown/80 mb-2">Research@ThreeDaysOff.com</p>
                  <p className="text-sm text-deep-brown/60">Studies, statistics, expert sources</p>
                </div>

                <div className="bg-sage-green/10 p-6 rounded-lg text-left">
                  <h3 className="font-semibold text-sage-green mb-2">Custom Assets</h3>
                  <p className="text-deep-brown/80 mb-2">Creative@ThreeDaysOff.com</p>
                  <p className="text-sm text-deep-brown/60">Specialized visuals, custom graphics</p>
                </div>
              </div>

              <div className="bg-sage-green/10 p-6 rounded-lg mb-8 text-left">
                <h3 className="font-semibold text-sage-green mb-3">Looking for Philosophical Depth?</h3>
                <p className="text-deep-brown/80 text-sm mb-3">
                  For spiritual, philosophical, or cultural coverage, explore our **Context & Lineage** page ::
                  legacy, lineage traditions (Buddhist, Christian, Indigenous, Sufi, yogic), and lenticular vision.
                </p>
                <Link
                  href="/press/context"
                  className="text-sage-green hover:underline font-medium text-sm"
                >
                  Explore Context & Lineage →
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:Press@ThreeDaysOff.com"
                  className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-deep-brown transition-all duration-300"
                >
                  Contact Press Team
                </a>
                <Link
                  href="/press"
                  className="border-2 border-sage-green text-sage-green px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                >
                  Return to Press Hub
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
