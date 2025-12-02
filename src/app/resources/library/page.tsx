'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContentLibraryPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Resources', icon: '📚' },
    { id: 'research', label: 'Research', icon: '🔬' },
    { id: 'practice', label: 'Practice Guides', icon: '🧘' },
    { id: 'video', label: 'Video Content', icon: '🎥' },
    { id: 'audio', label: 'Audio Resources', icon: '🎧' },
  ]

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
                  CONTENT LIBRARY
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Educational resources, practice guides, research summaries, and multimedia content
                  to deepen your preparation practice — free, accessible, research-backed.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-warm-white py-8">
          <div className="container-contemplative">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-sage-green text-warm-cream'
                      : 'bg-soft-gray text-deep-brown hover:bg-sage-green/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display mb-6 three-dots">Research Library</h2>
              <p className="text-xl text-deep-brown/80">
                Summaries of key studies supporting preparation practice
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Research Paper 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-green rounded-full flex items-center justify-center">
                    <span className="text-warm-cream font-bold">🔬</span>
                  </div>
                  <div>
                    <h3 className="text-heading mb-2">Mindfulness & Anxiety Reduction</h3>
                    <p className="text-xs text-deep-brown/60">JAMA Internal Medicine • 2023</p>
                  </div>
                </div>
                <p className="text-deep-brown/80 mb-4 leading-relaxed">
                  Meta-analysis of 47 trials demonstrates that structured mindfulness practices
                  reduce anxiety symptoms by 46% compared to control groups. Effects remain stable
                  at 6-month follow-up, suggesting sustainable neurological adaptation.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="text-sm">
                    <strong className="text-sage-green">Key Finding:</strong>
                    <p className="text-deep-brown/70">Daily 20-minute pause practices show clinical-level anxiety improvement</p>
                  </div>
                  <Link
                    href="/volunteer"
                    className="text-sage-green hover:underline text-sm font-medium"
                  >
                    Volunteer :: Help Add Full Paper Summary →
                  </Link>
                </div>
              </motion.div>

              {/* Research Paper 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-green rounded-full flex items-center justify-center">
                    <span className="text-warm-cream font-bold">💚</span>
                  </div>
                  <div>
                    <h3 className="text-heading mb-2">Heart Rate Variability Coherence</h3>
                    <p className="text-xs text-deep-brown/60">HeartMath Institute • 2022</p>
                  </div>
                </div>
                <p className="text-deep-brown/80 mb-4 leading-relaxed">
                  Intentional breathing techniques increase Heart Rate Variability coherence by 31%,
                  indicating improved autonomic nervous system regulation, emotional resilience,
                  and stress adaptability.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="text-sm">
                    <strong className="text-sage-green">Key Finding:</strong>
                    <p className="text-deep-brown/70">5 minutes of conscious breathing measurably shifts HRV patterns</p>
                  </div>
                  <Link
                    href="/volunteer"
                    className="text-sage-green hover:underline text-sm font-medium"
                  >
                    Volunteer :: Help Add Full Paper Summary →
                  </Link>
                </div>
              </motion.div>

              {/* Research Paper 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-green rounded-full flex items-center justify-center">
                    <span className="text-warm-cream font-bold">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-heading mb-2">Global Workplace Stress Impact</h3>
                    <p className="text-xs text-deep-brown/60">World Health Organization • 2023</p>
                  </div>
                </div>
                <p className="text-deep-brown/80 mb-4 leading-relaxed">
                  264 million workers globally experience work-related stress, anxiety, and burnout.
                  Economic impact exceeds $1 trillion annually. WHO recommends structured workplace
                  wellness interventions including pause practices.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="text-sm">
                    <strong className="text-sage-green">Key Finding:</strong>
                    <p className="text-deep-brown/70">Workplace pause programs reduce burnout by 38% over 12 weeks</p>
                  </div>
                  <Link
                    href="/volunteer"
                    className="text-sage-green hover:underline text-sm font-medium"
                  >
                    Volunteer :: Help Add Full Paper Summary →
                  </Link>
                </div>
              </motion.div>

              {/* Research Paper 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-green rounded-full flex items-center justify-center">
                    <span className="text-warm-cream font-bold">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-heading mb-2">Sabbaticals & Creative Performance</h3>
                    <p className="text-xs text-deep-brown/60">Design Research • Sagmeister Case Study</p>
                  </div>
                </div>
                <p className="text-deep-brown/80 mb-4 leading-relaxed">
                  Stefan Sagmeister's 7-year sabbatical cycle demonstrates measurably higher
                  creative output, innovative thinking, and sustained professional satisfaction.
                  Extended breaks produce breakthrough work that defines subsequent years.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="text-sm">
                    <strong className="text-sage-green">Key Finding:</strong>
                    <p className="text-deep-brown/70">Regular extended rest prevents creative stagnation and burnout</p>
                  </div>
                  <Link
                    href="/volunteer"
                    className="text-sage-green hover:underline text-sm font-medium"
                  >
                    Volunteer :: Help Add Full Paper Summary →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practice Guides */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display mb-6">Practice Guides</h2>
              <p className="text-xl text-deep-brown/80">
                Step-by-step guides for different contexts and experience levels
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Beginner Guide */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-contemplative-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold text-xl">📖</span>
                </div>
                <h3 className="text-heading text-center mb-4">First-Time Practitioner</h3>
                <p className="text-deep-brown/80 mb-6 text-sm leading-relaxed">
                  Never practiced stillness before? Start here. Simple 5-minute practices
                  that build capacity gradually without overwhelm.
                </p>
                <ul className="space-y-2 text-sm text-deep-brown/70 mb-6">
                  <li>✓ Day 1: Breathing basics</li>
                  <li>✓ Day 2: Body awareness</li>
                  <li>✓ Day 3: Observation practice</li>
                </ul>
                <Link
                  href="/blog/first-time-practitioner"
                  className="btn-secondary px-6 py-2 text-sm inline-block"
                >
                  Read Full Guide
                </Link>
              </motion.div>

              {/* Working Professional */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-breath-blue rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold text-xl">💼</span>
                </div>
                <h3 className="text-heading text-center mb-4">Working Professional</h3>
                <p className="text-deep-brown/80 mb-6 text-sm leading-relaxed">
                  Can't take three full days off? Micro-practices for professionals
                  with demanding schedules. Make the most of lunch breaks and mornings.
                </p>
                <ul className="space-y-2 text-sm text-deep-brown/70 mb-6">
                  <li>✓ Before-work ritual (15 min)</li>
                  <li>✓ Lunch pause practice (30 min)</li>
                  <li>✓ Evening integration (20 min)</li>
                </ul>
                <Link
                  href="/volunteer"
                  className="btn-secondary px-6 py-2 text-sm inline-block"
                >
                  Volunteer :: Help Write Guide
                </Link>
              </motion.div>

              {/* Parents & Caregivers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-success-harmony rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold text-xl">👨‍👩‍👧</span>
                </div>
                <h3 className="text-heading text-center mb-4">Parents & Caregivers</h3>
                <p className="text-deep-brown/80 mb-6 text-sm leading-relaxed">
                  Caregiving doesn't stop. Practice while caring — turning daily activities
                  into mindful moments. Stillness alongside responsibility.
                </p>
                <ul className="space-y-2 text-sm text-deep-brown/70 mb-6">
                  <li>✓ Breathing while feeding</li>
                  <li>✓ Walking meditation with kids</li>
                  <li>✓ Bedtime as practice</li>
                </ul>
                <Link
                  href="/volunteer"
                  className="btn-secondary px-6 py-2 text-sm inline-block"
                >
                  Volunteer :: Help Write Guide
                </Link>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto mt-12 bg-deep-brown text-warm-cream p-8 rounded-lg text-center">
              <h3 className="text-heading mb-4">Need a Specific Guide?</h3>
              <p className="text-warm-cream/90 mb-6">
                We're building practice guides for different situations — chronic illness,
                financial stress, social isolation, physical limitations, and more.
              </p>
              <Link
                href="/volunteer"
                className="inline-block bg-warm-cream text-deep-brown px-8 py-3 rounded-full font-medium hover:bg-sage-green hover:text-warm-cream transition-all"
              >
                Volunteer :: Help Create Guides
              </Link>
            </div>
          </div>
        </section>

        {/* Video Content */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display mb-6">Video Content</h2>
              <p className="text-xl text-deep-brown/80">
                Visual guides and founder interviews
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Featured Video */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <div className="aspect-video bg-deep-brown/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">🎥</span>
                    <p className="text-deep-brown/60">The Conscious Pause: Beyond Burnout</p>
                    <p className="text-sm text-deep-brown/50 mt-2">Available on /preparing page</p>
                  </div>
                </div>
                <h3 className="text-heading mb-3">Introduction to Three Days Off</h3>
                <p className="text-deep-brown/80 mb-4">
                  Founder Kamau Zuberi Akabueze explains the philosophy, framework, and
                  scientific basis for the global preparation practice.
                </p>
                <Link
                  href="/preparing"
                  className="text-sage-green hover:underline font-medium"
                >
                  Watch on Preparing Page →
                </Link>
              </motion.div>

              {/* Upcoming Videos */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-soft-gray/50 p-6 rounded-lg">
                  <div className="text-4xl mb-3">🎬</div>
                  <h4 className="font-semibold mb-2">PAUSE • BREATHE • OBSERVE Demonstration</h4>
                  <p className="text-sm text-deep-brown/70 mb-4">
                    Step-by-step visual guide through the core practice framework
                  </p>
                  <Link href="/volunteer" className="text-sage-green hover:underline text-sm font-medium">
                    Volunteer :: Help Create Video →
                  </Link>
                </div>

                <div className="bg-soft-gray/50 p-6 rounded-lg">
                  <div className="text-4xl mb-3">🗣️</div>
                  <h4 className="font-semibold mb-2">Venue Spotlight Series</h4>
                  <p className="text-sm text-deep-brown/70 mb-4">
                    Interviews with practice space hosts and community coordinators
                  </p>
                  <Link href="/volunteer" className="text-sage-green hover:underline text-sm font-medium">
                    Volunteer :: Help Film Interviews →
                  </Link>
                </div>

                <div className="bg-soft-gray/50 p-6 rounded-lg">
                  <div className="text-4xl mb-3">🌐</div>
                  <h4 className="font-semibold mb-2">Global Practice Highlights</h4>
                  <p className="text-sm text-deep-brown/70 mb-4">
                    Footage from September 5-7 practice across different time zones
                  </p>
                  <Link href="/volunteer" className="text-sage-green hover:underline text-sm font-medium">
                    Volunteer :: Help Document Practice →
                  </Link>
                </div>

                <div className="bg-soft-gray/50 p-6 rounded-lg">
                  <div className="text-4xl mb-3">🔬</div>
                  <h4 className="font-semibold mb-2">Research Explained Series</h4>
                  <p className="text-sm text-deep-brown/70 mb-4">
                    Making the science accessible — anxiety, HRV, workplace wellness
                  </p>
                  <Link href="/volunteer" className="text-sage-green hover:underline text-sm font-medium">
                    Volunteer :: Help Explain Research →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audio Resources */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display mb-6">Audio Resources</h2>
              <p className="text-xl text-warm-cream/90">
                Guided practices and contemplative soundscapes
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Guided Breathing */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">🎧</div>
                <h3 className="text-heading mb-3">Guided Breathing Practices</h3>
                <p className="text-warm-cream/80 mb-4 text-sm">
                  5, 10, and 20-minute guided breathing sessions for different experience levels.
                  Focus on coherence-building breath patterns.
                </p>
                <Link
                  href="/volunteer"
                  className="text-sage-green hover:underline font-medium text-sm"
                >
                  Volunteer :: Help Record Audio →
                </Link>
              </motion.div>

              {/* Contemplative Soundscapes */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-heading mb-3">Contemplative Soundscapes</h3>
                <p className="text-warm-cream/80 mb-4 text-sm">
                  Nature sounds, binaural beats, and ambient music designed for practice support.
                  60 and 90-minute sessions.
                </p>
                <Link
                  href="/volunteer"
                  className="text-sage-green hover:underline font-medium text-sm"
                >
                  Volunteer :: Help Create Soundscapes →
                </Link>
              </motion.div>

              {/* Body Scan Meditations */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">🧘</div>
                <h3 className="text-heading mb-3">Body Scan Meditations</h3>
                <p className="text-warm-cream/80 mb-4 text-sm">
                  Progressive relaxation and somatic awareness practices. 15 and 30-minute sessions
                  for physical grounding.
                </p>
                <Link
                  href="/volunteer"
                  className="text-sage-green hover:underline font-medium text-sm"
                >
                  Volunteer :: Help Record Meditations →
                </Link>
              </motion.div>

              {/* Founder Talks */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-heading mb-3">Founder Reflections</h3>
                <p className="text-warm-cream/80 mb-4 text-sm">
                  Kamau shares insights on preparation practice, consciousness technology,
                  and building capacity for what matters.
                </p>
                <Link
                  href="/volunteer"
                  className="text-sage-green hover:underline font-medium text-sm"
                >
                  Volunteer :: Help Produce Podcast →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Database */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-deep-brown/80">
                Common questions about preparation practice
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              <details className="bg-warm-white p-6 rounded-lg group">
                <summary className="font-semibold text-sage-green cursor-pointer list-none">
                  <span className="inline-flex items-center gap-3">
                    <span className="text-2xl">❓</span>
                    <span>Do I need previous meditation experience?</span>
                  </span>
                </summary>
                <p className="mt-4 text-deep-brown/80 pl-11">
                  No. Three Days Off works for complete beginners. The framework is simple enough
                  to start immediately yet sophisticated enough for experienced practitioners to
                  explore deeply. Start wherever you are.
                </p>
              </details>

              <details className="bg-warm-white p-6 rounded-lg group">
                <summary className="font-semibold text-sage-green cursor-pointer list-none">
                  <span className="inline-flex items-center gap-3">
                    <span className="text-2xl">⏰</span>
                    <span>What if I can't take three full days off?</span>
                  </span>
                </summary>
                <p className="mt-4 text-deep-brown/80 pl-11">
                  Your practice adapts to your reality. Five minutes counts. So do three full days.
                  The framework works at any scale. Many practitioners use micro-practices throughout
                  their regular schedules.
                </p>
              </details>

              <details className="bg-warm-white p-6 rounded-lg group">
                <summary className="font-semibold text-sage-green cursor-pointer list-none">
                  <span className="inline-flex items-center gap-3">
                    <span className="text-2xl">🔬</span>
                    <span>Is this backed by actual research?</span>
                  </span>
                </summary>
                <p className="mt-4 text-deep-brown/80 pl-11">
                  Yes. The practices draw from JAMA studies on anxiety reduction (46%), HeartMath
                  research on HRV coherence (31% improvement), WHO workplace wellness data, and
                  documented sabbatical models. All research is cited throughout the site.
                </p>
              </details>

              <details className="bg-warm-white p-6 rounded-lg group">
                <summary className="font-semibold text-sage-green cursor-pointer list-none">
                  <span className="inline-flex items-center gap-3">
                    <span className="text-2xl">💰</span>
                    <span>Does this cost anything?</span>
                  </span>
                </summary>
                <p className="mt-4 text-deep-brown/80 pl-11">
                  No. Three Days Off is completely free. There are no upsells, premium tiers, or
                  hidden costs. This is about service, not sales. All resources remain accessible
                  to everyone.
                </p>
              </details>

              <details className="bg-warm-white p-6 rounded-lg group">
                <summary className="font-semibold text-sage-green cursor-pointer list-none">
                  <span className="inline-flex items-center gap-3">
                    <span className="text-2xl">🌍</span>
                    <span>Can I practice anytime or only during the global window?</span>
                  </span>
                </summary>
                <p className="mt-4 text-deep-brown/80 pl-11">
                  Both. The global practice happens September 5-7, 2026, but you can create your
                  own Three Days Off anytime your life calls for pause. The container is always
                  available. Global timing simply amplifies collective effects.
                </p>
              </details>

              <Link
                href="/volunteer"
                className="block mt-8 text-center text-sage-green hover:underline font-medium"
              >
                Volunteer :: Help Expand FAQ Database →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-display mb-8">Help Build This Library</h2>
              <p className="text-xl leading-relaxed mb-12 text-deep-brown/80">
                This Content Library grows through community contribution. If you have expertise
                in research, writing, audio production, video creation, or content curation ::
                your gifts strengthen the practice for everyone.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/volunteer"
                  className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-deep-brown transition-all duration-300"
                >
                  Volunteer to Contribute
                </Link>
                <Link
                  href="/"
                  className="border-2 border-sage-green text-sage-green px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                >
                  Begin Your Practice
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
