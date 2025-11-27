'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function HowItWorksPage() {
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
                  HOW THREE DAYS OFF<br />
                  ACTUALLY WORKS
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Welcome to an exploration of consciousness technology—the science, wisdom, 
                  and art behind why intentional stillness creates profound transformation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Science Foundation */}
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
                <h2 className="text-display mb-6 three-dots">The Science of Stillness</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  Three Days Off isn't mystical wishful thinking—it's a practice validated by neuroscience, 
                  psychology, and global health research. Here's what actually happens when you create 
                  space for mind, body, and spirit to spend time together.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Neurological Reset</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Heart-Brain Coherence:</strong> HeartMath Institute research shows that conscious 
                    breathing and intentional pause create measurable coherence between heart and brain rhythms, 
                    reducing anxiety by up to 46% and enhancing creative problem-solving.
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Default Mode Network:</strong> When you step away from goal-directed thinking, 
                    your brain's default mode network activates—the same system responsible for insight, 
                    self-reflection, and integration of complex information.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Physiological Restoration</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Stress Reduction:</strong> Global studies (JAMA Psychiatry, Lancet) show 29-55% 
                    reduction in stress hormones from structured retreat practices. Your nervous system 
                    literally learns new patterns of regulation.
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Immune Enhancement:</strong> WHO research confirms that intentional rest practices 
                    boost immune function, improve sleep quality, and increase overall resilience to illness.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Creative Emergence</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Insight Generation:</strong> Neuroscience reveals that breakthrough insights 
                    require periods of "diffuse attention"—exactly what intentional stillness provides. 
                    Your brain literally needs space to make new connections.
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Innovation Capacity:</strong> Studies show creative professionals who take 
                    regular sabbaticals (like Stefan Sagmeister's 7:1 model) produce more innovative 
                    work than those who maintain constant output.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Consciousness Integration</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Self-Awareness:</strong> Frontiers in Psychology research shows self-directed 
                    pause practices increase emotional intelligence and decision-making clarity by creating 
                    space between stimulus and response.
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Agency Development:</strong> When you practice choosing stillness over reactivity, 
                    you strengthen neural pathways associated with intentional action rather than automatic response.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* The Framework */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">The PAUSE • BREATHE • OBSERVE Framework</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                Three Days Off operates on a simple yet profound three-step process that anyone can adapt 
                to their circumstances. This isn't about perfect execution—it's about conscious engagement 
                with each element as feels right for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* PAUSE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold text-xl">⏸</span>
                </div>
                <h3 className="text-heading mb-4">PAUSE</h3>
                <p className="text-deep-brown/80 mb-6">
                  Intentionally interrupt the automatic flow of external input. This doesn't mean stopping 
                  all activity—it means choosing what receives your attention.
                </p>
                <div className="text-left">
                  <h4 className="font-semibold mb-2 text-sage-green">What This Looks Like:</h4>
                  <ul className="text-sm text-deep-brown/70 space-y-1">
                    <li>• Turning off notifications</li>
                    <li>• Choosing silence over music</li>
                    <li>• Sitting still instead of staying busy</li>
                    <li>• Creating buffer space between activities</li>
                    <li>• Practicing saying "not right now"</li>
                  </ul>
                </div>
              </motion.div>

              {/* BREATHE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold text-xl">◯</span>
                </div>
                <h3 className="text-heading mb-4">BREATHE</h3>
                <p className="text-deep-brown/80 mb-6">
                  Use conscious breathing to create a bridge between mind, body, and spirit. Your breath 
                  is the conversation between these three aspects of yourself.
                </p>
                <div className="text-left">
                  <h4 className="font-semibold mb-2 text-sage-green">What This Looks Like:</h4>
                  <ul className="text-sm text-deep-brown/70 space-y-1">
                    <li>• Notice your natural breath rhythm</li>
                    <li>• Extend exhales to activate calm</li>
                    <li>• Use breath as an anchor to present moment</li>
                    <li>• Breathe into areas of tension or emotion</li>
                    <li>• Let breath guide the pace of your day</li>
                  </ul>
                </div>
              </motion.div>

              {/* OBSERVE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold text-xl">👁</span>
                </div>
                <h3 className="text-heading mb-4">OBSERVE</h3>
                <p className="text-deep-brown/80 mb-6">
                  Practice witnessing your experience from three perspectives: mind (thoughts), 
                  body (sensations), and spirit (deeper knowing). Notice without needing to fix or change.
                </p>
                <div className="text-left">
                  <h4 className="font-semibold mb-2 text-sage-green">What This Looks Like:</h4>
                  <ul className="text-sm text-deep-brown/70 space-y-1">
                    <li>• Watch thoughts like clouds passing</li>
                    <li>• Feel sensations without judgment</li>
                    <li>• Notice what wants to emerge</li>
                    <li>• Observe patterns and preferences</li>
                    <li>• Trust what arises in the stillness</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cultural & Historical Context */}
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
                <h2 className="text-display mb-6">Ancient Wisdom, Modern Application</h2>
                <p className="text-xl text-warm-cream/90 leading-relaxed">
                  Three Days Off draws from a rich heritage of contemplative practices while adapting 
                  to contemporary life. You're joining a lineage of humans who understood that 
                  intentional pause creates space for wisdom to emerge.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-heading mb-4">Indigenous Traditions</h3>
                  <p className="text-warm-cream/80 mb-4">
                    <strong>Vision Quests:</strong> Native American traditions of solitary retreat for 
                    clarity and spiritual guidance mirror the container we create in Three Days Off.
                  </p>
                  <p className="text-warm-cream/80 mb-4">
                    <strong>African Rest Rituals:</strong> Diasporic traditions of "sitting with Spirit" 
                    and cyclical rest practices. As Tricia Hersey teaches, rest becomes resistance and restoration.
                  </p>
                  <p className="text-warm-cream/80">
                    <strong>Ubuntu Philosophy:</strong> "I am because we are"—individual stillness 
                    strengthens collective consciousness. Your practice serves the whole.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-heading mb-4">Contemplative Practices</h3>
                  <p className="text-warm-cream/80 mb-4">
                    <strong>Buddhist Retreats:</strong> Vipassana and mindfulness traditions use 
                    withdrawal and observation as paths to insight and liberation.
                  </p>
                  <p className="text-warm-cream/80 mb-4">
                    <strong>Yogic Sabbaticals:</strong> Pratyahara (withdrawal of senses) creates 
                    space for deeper states of consciousness and self-integration.
                  </p>
                  <p className="text-warm-cream/80">
                    <strong>Sabbath Traditions:</strong> Weekly practices of rest and reflection 
                    across multiple spiritual traditions recognize rhythm as sacred technology.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg mt-12"
              >
                <h3 className="text-heading mb-4 text-center">Contemporary Validators</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold mb-2">Audre Lorde</h4>
                    <p className="text-sm text-warm-cream/80">
                      "Caring for myself is not self-indulgence, it is self-preservation, 
                      and that is an act of political warfare."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">adrienne maree brown</h4>
                    <p className="text-sm text-warm-cream/80">
                      Emergent strategy and pleasure activism emphasize rest, play, 
                      and somatic wisdom as liberation practices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dr. Mariel Buqué</h4>
                    <p className="text-sm text-warm-cream/80">
                      Radical healing through mindful pauses and ancestral connection, 
                      especially for BIPOC trauma recovery.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Transformation Process */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6 three-dots">What Actually Happens Day by Day</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                While everyone's experience unfolds uniquely, there are recognizable patterns to how 
                consciousness shifts when given space to reorganize itself naturally.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Day 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-sage-green rounded-full flex items-center justify-center">
                    <span className="text-warm-cream font-bold text-2xl">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading mb-4">Day One: Nervous System Recalibration</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Many people initially feel restless, anxious, or uncertain. This is your nervous system 
                    adjusting to the absence of constant stimulation. You might notice how much mental 
                    "noise" was running in the background.
                  </p>
                  <p className="text-sm text-sage-green font-medium">
                    Common experiences: Physical fidgeting, mental chatter, urges to check devices, 
                    awareness of habitual patterns
                  </p>
                </div>
              </motion.div>

              {/* Day 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse gap-8 items-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-sage-green rounded-full flex items-center justify-center">
                    <span className="text-warm-cream font-bold text-2xl">2</span>
                  </div>
                </div>
                <div className="flex-1 md:text-right">
                  <h3 className="text-heading mb-4">Day Two: Deepening and Integration</h3>
                  <p className="text-deep-brown/80 mb-4">
                    The initial resistance usually softens. You begin to notice subtleties—sounds, 
                    sensations, thoughts—that were invisible when your attention was scattered. 
                    This is where the real conversation between mind, body, and spirit begins.
                  </p>
                  <p className="text-sm text-sage-green font-medium">
                    Common experiences: Increased sensory awareness, emotional surfacing, 
                    insights about life patterns, creative stirrings
                  </p>
                </div>
              </motion.div>

              {/* Day 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-sage-green rounded-full flex items-center justify-center">
                    <span className="text-warm-cream font-bold text-2xl">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading mb-4">Day Three: Emergence and Clarity</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Often the most profound day. With the nervous system settled and awareness expanded, 
                    new perspectives, solutions, or directions may emerge organically. You might feel 
                    clearer about decisions or discover insights about your life patterns.
                  </p>
                  <p className="text-sm text-sage-green font-medium">
                    Common experiences: Sudden clarity, creative breakthroughs, emotional release, 
                    sense of spaciousness, connection to larger purpose
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why It Works for Everyone */}
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
                <h2 className="text-display mb-6">Why This Works for Every Human Being</h2>
                <p className="text-xl text-deep-brown/80">
                  Three Days Off doesn't depend on beliefs, spiritual background, or perfect conditions. 
                  It works because it honors universal human needs that transcend cultural differences.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Universal Biology</h3>
                  <p className="text-deep-brown/80">
                    Every human nervous system responds to rhythm, rest, and conscious breathing. 
                    These aren't cultural preferences—they're biological necessities that modern 
                    life often overlooks. Three Days Off simply provides space for natural 
                    restoration processes to function.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Innate Wisdom</h3>
                  <p className="text-deep-brown/80">
                    Every person already possesses the capacity for insight, self-regulation, 
                    and wise decision-making. Three Days Off doesn't teach you anything new—it 
                    creates conditions where your existing wisdom can surface and be heard clearly.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Adaptable Structure</h3>
                  <p className="text-deep-brown/80">
                    The framework is simple enough to work in any circumstance yet sophisticated 
                    enough to accommodate diverse needs, schedules, and life situations. Whether 
                    you have hours or minutes, urban or rural settings, the core principles adapt.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Choice-Based Design</h3>
                  <p className="text-deep-brown/80">
                    Rather than prescribing specific actions, Three Days Off invites conscious 
                    choice about how you engage with stillness. This honors individual autonomy 
                    while providing supportive structure for exploration.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* The Ripple Effect */}
        <section className="bg-gradient-contemplative">
          <div className="container-contemplative breathing-space">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display mb-8">
                  Beyond Personal Transformation
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-deep-brown/80">
                  When thousands of people practice conscious pause simultaneously, something shifts 
                  in the collective field. Your individual stillness contributes to a global 
                  experiment in what becomes possible when humans remember how to rest together.
                </p>
                <div className="bg-warm-white/80 p-8 rounded-lg mb-8">
                  <h3 className="text-heading mb-4">Recognition Ripples</h3>
                  <p className="text-deep-brown/80 leading-relaxed">
                    Every person who practices Three Days Off creates what we call "recognition ripples"—
                    subtle shifts in their presence and energy that others notice and respond to. 
                    Your stillness gives others permission to find their own pause. Your rest 
                    becomes a gift to a world that desperately needs examples of another way.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/preparing" 
                    className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-deep-brown transition-all duration-300"
                  >
                    Prepare for Your Practice
                  </Link>
                  <Link 
                    href="/pledge" 
                    className="border-2 border-sage-green text-sage-green px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                  >
                    Join the Global Practice
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
              <Link href="/preparing" className="nav-link">Preparing</Link>
              <Link href="/venues" className="nav-link">Venues</Link>
              <Link href="/press" className="nav-link">Press</Link>
              <Link href="/privacy" className="nav-link">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
