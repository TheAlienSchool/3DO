'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import BreathingNetwork, { JoinBreathingButton } from '@/components/BreathingNetwork'
import ContemplativeVideoPlayer from '@/components/ContemplativeVideoPlayer'
import Tooltip from '@/components/Tooltip'
import LanternLighthouseAnimation from '@/components/LanternLighthouseAnimation'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [currentPledges, setCurrentPledges] = useState(0) // Start from zero
  const [currentVenues, setCurrentVenues] = useState(0) // Start from zero

  useEffect(() => {
    setMounted(true)

    // TODO: Replace with real Supabase counts
    // const fetchCounts = async () => {
    //   const { data: stats } = await supabase.from('pledge_stats').select('*').single()
    //   setCurrentPledges(stats.individual_count)
    //   setCurrentVenues(stats.venue_count)
    // }
    // fetchCounts()

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
                  className="text-xl md:text-2xl font-light text-deep-brown/80 mb-8 leading-relaxed"
                >
                  Maximum internal restoration and the development of your genius
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-lg text-deep-brown/70 mb-12"
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
                <JoinBreathingButton
                  onJoin={() => {
                    window.location.href = '/pledge'
                  }}
                  className="flex-1 max-w-sm"
                >
                  Begin Your Practice
                </JoinBreathingButton>

                <JoinBreathingButton
                  onJoin={() => {
                    window.location.href = '/venues/register'
                  }}
                  className="flex-1 max-w-sm"
                >
                  Offer a Practice Space
                </JoinBreathingButton>
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
                      Thousands prepare together :: a global practice of time awareness
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
                        analytics="educational-focus"
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
                  Preparation opens possibilities :: your practice strengthens the whole
                </p>
                <p className="text-sm text-deep-brown/60 max-w-md">
                  People prepare for custody transitions, solo travel, major presentations, heartbreak recovery,
                  and creative breakthroughs. Your practice builds capacity for what matters to you.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You're Carrying Section */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-display mb-8 three-dots">
                  What You're Carrying
                </h2>
                <p className="text-xl leading-relaxed text-deep-brown/80 mb-12 max-w-2xl mx-auto">
                  The unprocessed emails. The postponed conversations. The creative work waiting.
                  The decisions unmade. The relationships needing attention. The clarity you seek.
                </p>
                <p className="text-2xl font-medium text-sage-green mb-12">
                  These are your stones.
                </p>
                <p className="text-lg leading-relaxed text-deep-brown/80 mb-12 max-w-3xl mx-auto">
                  Three Days Off is the practice of setting them down long enough to see which
                  ones are yours to carry—and how to forge them into conscious creation rather
                  than unconscious burden.
                </p>

                {/* Transformation Grid */}
                <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                  <Tooltip
                    content={
                      <div>
                        <p className="font-semibold mb-2">Research Evidence:</p>
                        <p className="text-xs mb-2">• JAMA Psychiatry: 46% reduction in anxiety with mindfulness practices</p>
                        <p className="text-xs mb-2">• Digital Detox Studies: Significant improvement in sleep quality and focus</p>
                        <p className="text-xs">• Cognitive Load Theory: Reduced multitasking improves working memory</p>
                      </div>
                    }
                  >
                    <div className="bg-warm-white p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all cursor-help">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">💻</span>
                        <div>
                          <h3 className="font-semibold text-deep-brown mb-2">Digital Fatigue</h3>
                          <p className="text-sm text-deep-brown/70 mb-2">The constant input, notification overload, screen exhaustion</p>
                          <p className="text-sm text-sage-green font-medium">→ Psychological Renewal & reduced cognitive load</p>
                        </div>
                      </div>
                    </div>
                  </Tooltip>

                  <Tooltip
                    content={
                      <div>
                        <p className="font-semibold mb-2">Research Evidence:</p>
                        <p className="text-xs mb-2">• Default Mode Network: Restored through intentional pause practices</p>
                        <p className="text-xs mb-2">• Attention Restoration Theory: Nature of mind requires coherent focus periods</p>
                        <p className="text-xs">• Flow State Research: Integration creates sustained peak performance</p>
                      </div>
                    }
                  >
                    <div className="bg-warm-white p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all cursor-help">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🧩</span>
                        <div>
                          <h3 className="font-semibold text-deep-brown mb-2">Fragmented Attention</h3>
                          <p className="text-sm text-deep-brown/70 mb-2">Scattered focus, perpetual distraction, mental dispersion</p>
                          <p className="text-sm text-sage-green font-medium">→ Integrated Awareness & coherent presence</p>
                        </div>
                      </div>
                    </div>
                  </Tooltip>

                  <Tooltip
                    content={
                      <div>
                        <p className="font-semibold mb-2">Research Evidence:</p>
                        <p className="text-xs mb-2">• WHO: Burnout now classified as occupational phenomenon affecting productivity</p>
                        <p className="text-xs mb-2">• Creativity Studies: Rest periods essential for creative breakthroughs</p>
                        <p className="text-xs">• Neuroplasticity: Integration practices enhance capacity for complex problem-solving</p>
                      </div>
                    }
                  >
                    <div className="bg-warm-white p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all cursor-help">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🔥</span>
                        <div>
                          <h3 className="font-semibold text-deep-brown mb-2">Burnout</h3>
                          <p className="text-sm text-deep-brown/70 mb-2">Exhaustion, overwhelm, depleted creative capacity</p>
                          <p className="text-sm text-sage-green font-medium">→ Genius Activation through integration</p>
                        </div>
                      </div>
                    </div>
                  </Tooltip>

                  <Tooltip
                    content={
                      <div>
                        <p className="font-semibold mb-2">Research Evidence:</p>
                        <p className="text-xs mb-2">• Social Coherence Theory: Group practices create measurable synchronization</p>
                        <p className="text-xs mb-2">• HeartMath Institute: Collective coherence enhances individual capacity</p>
                        <p className="text-xs">• Network Effects: Shared intention amplifies individual transformation</p>
                      </div>
                    }
                  >
                    <div className="bg-warm-white p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all cursor-help">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🏝️</span>
                        <div>
                          <h3 className="font-semibold text-deep-brown mb-2">Isolation</h3>
                          <p className="text-sm text-deep-brown/70 mb-2">Disconnection, loneliness, fragmented community</p>
                          <p className="text-sm text-sage-green font-medium">→ Collective Coherence & network presence</p>
                        </div>
                      </div>
                    </div>
                  </Tooltip>
                </div>

                <p className="text-sm text-deep-brown/60 italic">
                  Learn the practice of conscious creation, one stone at a time ::
                  <a href="http://wayof.netlify.app" target="_blank" rel="noopener noreferrer" className="text-sage-green hover:underline ml-1">
                    The Stone Forger's Way
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Engine Section */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-display mb-6 three-dots">
                  The Integration Engine
                </h2>
                <p className="text-xl text-deep-brown/80 mb-4 max-w-2xl mx-auto">
                  Most practices train one aspect. Three Days Off trains their collaboration.
                </p>
                <p className="text-lg text-deep-brown/70 mb-12 max-w-3xl mx-auto">
                  When Mind, Body, and Spirit work together, you don't just rest.
                  You develop genius.
                </p>

                {/* Three Aspects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
                  <div className="bg-sage-green/10 p-6 rounded-lg">
                    <div className="w-14 h-14 bg-contemplative-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-warm-cream font-bold text-xl">🧠</span>
                    </div>
                    <h3 className="font-semibold text-deep-brown mb-3 text-center">MIND</h3>
                    <p className="text-sm text-deep-brown/70 mb-4 text-center italic">Philosophical & Psychological</p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm text-sage-green mb-1">PAUSE</p>
                        <p className="text-sm text-deep-brown/70">Withdrawal from analysis creates philosophical clarity</p>
                      </div>
                      <div className="bg-warm-white/50 p-3 rounded text-xs text-deep-brown/60">
                        <strong>Research:</strong> Default Mode Network activation, insight generation, creativity emergence
                      </div>
                    </div>
                  </div>

                  <div className="bg-sage-green/10 p-6 rounded-lg">
                    <div className="w-14 h-14 bg-intention-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-warm-cream font-bold text-xl">🫁</span>
                    </div>
                    <h3 className="font-semibold text-deep-brown mb-3 text-center">BODY</h3>
                    <p className="text-sm text-deep-brown/70 mb-4 text-center italic">Somatic & Scientific</p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm text-sage-green mb-1">BREATHE</p>
                        <p className="text-sm text-deep-brown/70">Conscious breathing bridges all three aspects</p>
                      </div>
                      <div className="bg-warm-white/50 p-3 rounded text-xs text-deep-brown/60">
                        <strong>Research:</strong> Heart Rate Variability increases, coherence emerges, stress reduction
                      </div>
                    </div>
                  </div>

                  <div className="bg-sage-green/10 p-6 rounded-lg">
                    <div className="w-14 h-14 bg-success-harmony rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-warm-cream font-bold text-xl">✨</span>
                    </div>
                    <h3 className="font-semibold text-deep-brown mb-3 text-center">SPIRIT</h3>
                    <p className="text-sm text-deep-brown/70 mb-4 text-center italic">Meaning & Ritual</p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm text-sage-green mb-1">OBSERVE</p>
                        <p className="text-sm text-deep-brown/70">Sensing deeper currents beyond immediate reaction</p>
                      </div>
                      <div className="bg-warm-white/50 p-3 rounded text-xs text-deep-brown/60">
                        <strong>Research:</strong> Contemplative traditions show collective synchronization, meaning-making
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integration Result */}
                <div className="relative bg-gradient-to-br from-deep-brown via-sage-green to-deep-brown p-8 rounded-lg text-warm-cream max-w-2xl mx-auto overflow-hidden">
                  <div className="absolute inset-0 bg-deep-brown/40"></div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="text-2xl font-semibold mb-4">Integrated Choice</h3>
                    <p className="text-warm-cream">
                      Decisions emerge from the confluence of Mind (clarity), Body (somatic knowing),
                      and Spirit (wisdom)—choices that serve your whole self rather than impulse.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lantern → Lighthouse: Network Effect */}
        <section className="bg-gradient-to-br from-sage-green/20 to-contemplative-gold/20">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
              >
                <h2 className="text-display mb-6 three-dots">
                  From Personal Clarity to Collective Coherence
                </h2>
                <p className="text-xl text-deep-brown/80 mb-12">
                  Your personal practice creates collective capacity
                </p>

                {/* Animated Transformation Visualization */}
                <LanternLighthouseAnimation />
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg text-center"
                >
                  <div className="text-6xl mb-4">🏮</div>
                  <h3 className="text-xl font-semibold text-deep-brown mb-4">THE LANTERN</h3>
                  <p className="text-sm text-deep-brown/70 mb-2 italic">Your Practice</p>
                  <p className="text-deep-brown/80">
                    When you bring undivided attention to your own integration, you become clear.
                    This isn't selfish—it's the prerequisite for everything else.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg text-center"
                >
                  <div className="text-6xl mb-4">🗼</div>
                  <h3 className="text-xl font-semibold text-deep-brown mb-4">THE LIGHTHOUSE</h3>
                  <p className="text-sm text-deep-brown/70 mb-2 italic">Your Presence</p>
                  <p className="text-deep-brown/80">
                    Your clarity creates orientation for others. Your intentional pause gives permission.
                    Your practice models what becomes possible through conscious choice.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg text-center"
                >
                  <div className="text-6xl mb-4">🌊</div>
                  <h3 className="text-xl font-semibold text-deep-brown mb-4">THE NETWORK</h3>
                  <p className="text-sm text-deep-brown/70 mb-2 italic">Collective Awakening</p>
                  <p className="text-deep-brown/80">
                    When thousands practice together, research suggests network effects emerge.
                    Individual coherence creates collective capacity for what matters most.
                  </p>
                </motion.div>
              </div>

              <div className="text-center">
                <div className="bg-warm-white p-6 rounded-lg inline-block">
                  <p className="text-lg font-medium text-deep-brown mb-2">
                    <span className="text-3xl font-bold text-sage-green">{currentPledges.toLocaleString()}</span> practitioners preparing together
                  </p>
                  <p className="text-lg font-medium text-deep-brown">
                    <span className="text-3xl font-bold text-contemplative-gold">{currentVenues.toLocaleString()}</span> practice spaces worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For the Skeptical */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
              >
                <h2 className="text-display mb-6 three-dots">
                  For the Skeptical
                </h2>
                <p className="text-xl text-deep-brown/80 max-w-2xl mx-auto">
                  This practice addresses what you're actually carrying—with research, not hope
                </p>
              </motion.div>

              <div className="space-y-6">
                <motion.details
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/5 p-6 rounded-lg group hover:shadow-md transition-all"
                >
                  <summary className="cursor-pointer font-semibold text-deep-brown text-lg mb-2 list-none flex items-center justify-between">
                    <span>"I don't have time for three days off"</span>
                    <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="text-deep-brown/80 mt-4 leading-relaxed">
                    You're already taking time off. The question is whether it restores you or depletes you further.
                    Three Days Off works with stolen moments or abundant hours—your approach adapts to your life.
                    Many practitioners maintain essential responsibilities while practicing.
                  </p>
                </motion.details>

                <motion.details
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/5 p-6 rounded-lg group hover:shadow-md transition-all"
                >
                  <summary className="cursor-pointer font-semibold text-deep-brown text-lg mb-2 list-none flex items-center justify-between">
                    <span>"I've tried meditation/retreats. They don't work for me"</span>
                    <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="text-deep-brown/80 mt-4 leading-relaxed">
                    This isn't sitting in silence hoping for enlightenment. It's conscious integration of what
                    you're already doing—eating, moving, breathing, thinking. The practice meets you where you are.
                    No perfect conditions required.
                  </p>
                </motion.details>

                <motion.details
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/5 p-6 rounded-lg group hover:shadow-md transition-all"
                >
                  <summary className="cursor-pointer font-semibold text-deep-brown text-lg mb-2 list-none flex items-center justify-between">
                    <span>"This sounds too 'woo' for me"</span>
                    <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <div className="text-deep-brown/80 mt-4 leading-relaxed">
                    <p className="mb-4">
                      The framework is validated by neuroscience (HeartMath, JAMA Psychiatry), workplace psychology
                      (WHO studies), and global health research. The mysticism is optional; the results are measurable.
                    </p>
                    <p className="text-sm text-sage-green">
                      <Link href="/how-it-works" className="hover:underline font-medium">
                        → See the complete scientific foundation
                      </Link>
                    </p>
                  </div>
                </motion.details>

                <motion.details
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/5 p-6 rounded-lg group hover:shadow-md transition-all"
                >
                  <summary className="cursor-pointer font-semibold text-deep-brown text-lg mb-2 list-none flex items-center justify-between">
                    <span>"What if I'm just lazy and calling it self-care?"</span>
                    <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="text-deep-brown/80 mt-4 leading-relaxed">
                    The practice actually increases capacity for meaningful work. By integrating Mind, Body, and Spirit,
                    you develop the coherence required for sustained creative and productive output. This is genius
                    development, not escape. Research shows practitioners report enhanced focus, creativity, and
                    decision-making capacity.
                  </p>
                </motion.details>

                <motion.details
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/5 p-6 rounded-lg group hover:shadow-md transition-all"
                >
                  <summary className="cursor-pointer font-semibold text-deep-brown text-lg mb-2 list-none flex items-center justify-between">
                    <span>"I can't afford to disconnect from work/family"</span>
                    <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="text-deep-brown/80 mt-4 leading-relaxed">
                    The practice costs nothing and requires no one's permission. Boundaries are negotiated using
                    provided templates. You remain available for true emergencies while creating space for integration.
                    Your increased clarity and presence actually enhance your capacity to serve those who depend on you.
                  </p>
                </motion.details>
              </div>
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
                <p className="text-xl leading-relaxed mb-4 text-warm-cream/90">
                  Labor Day weekend becomes an opportunity to practice :: mind, body, and spirit
                  preparing together for what matters.
                </p>
                <p className="text-lg leading-relaxed mb-12 text-warm-cream/80 italic">
                  This practice costs nothing. Requires no one's permission. Opens countless possibilities.
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