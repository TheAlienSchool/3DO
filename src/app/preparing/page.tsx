'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import ContemplativeVideoPlayer from '@/components/ContemplativeVideoPlayer'
import Footer from '@/components/Footer'

export default function PreparingPage() {
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
                  PREPARING FOR YOUR<br />
                  THREESOME WITH THE SELF
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Three Days Off is for everyone. Whether you have abundant time or just stolen moments,
                  whether you're new to preparation practice or experienced—design your own approach.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Conscious Pause Video Section */}
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
                <h2 className="text-display mb-6">Preparing for Your Practice</h2>
                <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                  While Three Days Off is a global practice window, your experience begins with
                  personal preparation—creating space for what matters to you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-8 rounded-lg mb-12"
              >
                <div className="aspect-video mb-6">
                  <ContemplativeVideoPlayer
                    src="/videos/The_Conscious_Pause__Beyond_Burnout.mp4"
                    poster="/images/conscious-pause-poster.jpg"
                    title="The Conscious Pause: Beyond Burnout"
                    description="Personal preparation for contemplative practice and burnout recovery"
                    analytics="preparation-depth"
                    className="w-full h-full"
                  />
                </div>
                
                <h3 className="text-heading mb-4 text-center">
                  The Conscious Pause: Beyond Burnout
                </h3>
                <p className="text-deep-brown/80 text-center mb-6">
                  Before the global practice window, develop your personal relationship
                  with intentional pause. This foundational practice prepares you to benefit
                  from preparing alongside thousands of others.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-breath-blue rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-warm-cream font-bold">🧘</span>
                    </div>
                    <p className="text-sm text-deep-brown/70">Personal Practice</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-success-harmony rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-warm-cream font-bold">💚</span>
                    </div>
                    <p className="text-sm text-deep-brown/70">Burnout Recovery</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-contemplative-gold rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-warm-cream font-bold">🌱</span>
                    </div>
                    <p className="text-sm text-deep-brown/70">Inner Preparation</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Universal Welcome */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display mb-6 three-dots">
                  All Are Welcome Here
                </h2>
                <p className="text-lg leading-relaxed text-deep-brown/80 mb-6">
                  This practice belongs to no one and everyone. Whether you're employed or unemployed,
                  seeking or finding, experienced in preparation practices or hearing about them for the first time—
                  there's a way for you to build capacity with what you have.
                </p>
                <p className="text-lg leading-relaxed text-deep-brown/80">
                  Three Days Off works with real life, not perfect conditions. You practice with what you have,
                  where you are, with whatever time and space your circumstances allow.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <h3 className="text-heading mb-4 text-sage-green">Your Practice, Your Way</h3>
                <ul className="space-y-3 text-deep-brown/80">
                  <li>• <strong>Have 5 minutes?</strong> Perfect for intentional pause</li>
                  <li>• <strong>Have 1 hour?</strong> Space for PAUSE • BREATHE • OBSERVE</li>
                  <li>• <strong>Have all weekend?</strong> Room for deep preparation</li>
                  <li>• <strong>Have external pressures?</strong> Micro-practices build capacity too</li>
                  <li>• <strong>Never practiced preparation?</strong> Simply sitting quietly counts</li>
                  <li>• <strong>Experienced practitioner?</strong> Explore new applications</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practice Approaches */}
        <section className="bg-gradient-contemplative">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Choose Your Approach</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                There's no single "right" way to practice Three Days Off. Here are three approaches
                that participants have found meaningful—choose what resonates or create your own.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Complete Immersion */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">🕯️</span>
                </div>
                <h3 className="text-heading text-center mb-4">Complete Immersion</h3>
                <p className="text-deep-brown/80 mb-4">
                  Step fully away from external inputs. Minimal digital engagement, 
                  quiet spaces, slow movements, deep listening.
                </p>
                <p className="text-sm text-sage-green font-medium">
                  Perfect for: Those with flexible schedules, private space, minimal external obligations
                </p>
              </motion.div>

              {/* Mindful Reduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">🌱</span>
                </div>
                <h3 className="text-heading text-center mb-4">Mindful Reduction</h3>
                <p className="text-deep-brown/80 mb-4">
                  Significantly reduce but don't eliminate external inputs. 
                  Essential communications only, longer pauses between activities.
                </p>
                <p className="text-sm text-sage-green font-medium">
                  Perfect for: Parents, caregivers, those with work responsibilities that can't pause completely
                </p>
              </motion.div>

              {/* Conscious Pause */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">🤲</span>
                </div>
                <h3 className="text-heading text-center mb-4">Intentional Moments</h3>
                <p className="text-deep-brown/80 mb-4">
                  Maintain necessary activities while adding preparation moments.
                  Micro-practices throughout each day.
                </p>
                <p className="text-sm text-sage-green font-medium">
                  Perfect for: Those facing external pressures, new to preparation practice, or in demanding situations
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practical Preparation */}
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
                <h2 className="text-display mb-6">Practical Preparation</h2>
                <p className="text-xl text-deep-brown/80">
                  Simple steps to set yourself up for whatever level of practice feels right for you.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Physical Space */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-soft-gray/50 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Create Your Space</h3>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Minimal:</strong> One chair you can sit quietly in</li>
                    <li>• <strong>Ideal:</strong> A dedicated corner with minimal distractions</li>
                    <li>• <strong>Reality:</strong> Even a bathroom can be a sanctuary</li>
                    <li>• <strong>Pro tip:</strong> Same spot each time helps build the container</li>
                  </ul>
                </motion.div>

                {/* Time Management */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-soft-gray/50 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Work With Your Time</h3>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>5 minutes:</strong> Conscious breathing or stillness</li>
                    <li>• <strong>30 minutes:</strong> Longer sitting or slow walking</li>
                    <li>• <strong>2 hours:</strong> Extended practice sessions</li>
                    <li>• <strong>All day:</strong> Natural rhythm without external schedule</li>
                  </ul>
                </motion.div>

                {/* Communication Boundaries */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-soft-gray/50 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Set Loving Boundaries</h3>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Family:</strong> "I'm practicing quiet time, will respond slowly"</li>
                    <li>• <strong>Work:</strong> Out of office with clear return time</li>
                    <li>• <strong>Friends:</strong> "Taking Three Days Off, back Tuesday"</li>
                    <li>• <strong>Emergency:</strong> One clear way to reach you if needed</li>
                  </ul>
                </motion.div>

                {/* Supplies & Support */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-soft-gray/50 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Gather Simple Supports</h3>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Essential:</strong> Just yourself and intention</li>
                    <li>• <strong>Helpful:</strong> Journal, comfortable clothes, water</li>
                    <li>• <strong>Nourishing:</strong> Herbal tea, soft blanket, plants</li>
                    <li>• <strong>Optional:</strong> Essential oils, candles, crystals</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Circumstances */}
        <section className="bg-sage-green/10">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display mb-6">When Life is Challenging</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                Sometimes external pressures, health challenges, or life crises make traditional 
                stillness practices feel impossible. Here's how to adapt Three Days Off to any circumstance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Crisis Mode */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4 text-deep-brown">In Crisis or Trauma</h3>
                <p className="text-deep-brown/80 mb-4">
                  Three conscious breaths in the bathroom. Feeling your feet on the ground while washing dishes. 
                  30 seconds of noticing you're alive.
                </p>
                <p className="text-sm text-sage-green font-medium">
                  Stillness can be found in the smallest moments, even in chaos.
                </p>
              </motion.div>

              {/* Physical Limitations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4 text-deep-brown">Physical Limitations</h3>
                <p className="text-deep-brown/80 mb-4">
                  Stillness isn't about sitting perfectly. Lying down counts. Moving slowly counts. 
                  Listening to your body's wisdom counts.
                </p>
                <p className="text-sm text-sage-green font-medium">
                  Your body knows how to be still in its own way.
                </p>
              </motion.div>

              {/* Caregiving Demands */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4 text-deep-brown">Intensive Caregiving</h3>
                <p className="text-deep-brown/80 mb-4">
                  Mindful caregiving becomes practice. Conscious breathing while feeding someone. 
                  Stillness while holding space for another's needs.
                </p>
                <p className="text-sm text-sage-green font-medium">
                  Love in action can be a form of moving meditation.
                </p>
              </motion.div>

              {/* Financial Stress */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4 text-deep-brown">Financial Pressure</h3>
                <p className="text-deep-brown/80 mb-4">
                  Can't take time off work? Practice stillness on lunch breaks. 
                  Conscious breathing on public transport. Mindful moments between tasks.
                </p>
                <p className="text-sm text-sage-green font-medium">
                  Three Days Off costs nothing but intention.
                </p>
              </motion.div>

              {/* Social Isolation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4 text-deep-brown">Feeling Alone</h3>
                <p className="text-deep-brown/80 mb-4">
                  You're practicing with thousands globally. Every moment of stillness connects 
                  you to a web of consciousness choosing pause.
                </p>
                <p className="text-sm text-sage-green font-medium">
                  Isolation transforms into solitude through intention.
                </p>
              </motion.div>

              {/* Skepticism */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4 text-deep-brown">Spiritual Skepticism</h3>
                <p className="text-deep-brown/80 mb-4">
                  Think of it as nervous system regulation. Rest as productivity optimization. 
                  Pause as creative problem-solving technique.
                </p>
                <p className="text-sm text-sage-green font-medium">
                  Science validates what mystics have always known.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Future Practice */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display mb-8">
                  Beyond September 5-7
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-warm-cream/90">
                  The global Three Days Off happens annually, but your personal practice can happen anytime. 
                  Create your own three days when life calls for pause. The container is always available.
                </p>
                <div className="bg-warm-cream/10 p-8 rounded-lg mb-8">
                  <h3 className="text-heading mb-4">Your Practice Belongs to You</h3>
                  <p className="text-warm-cream/80 leading-relaxed">
                    Whether you join the global practice or create your own timing, whether you sit in silence
                    for hours or breathe consciously for moments—your threesome with mind, body, and spirit
                    is always available. Trust what emerges. Honor what feels right. Begin where you are.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/pledge" 
                    className="bg-warm-cream text-deep-brown px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                  >
                    I'm Ready to Begin
                  </Link>
                  <Link 
                    href="/how-it-works" 
                    className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300"
                  >
                    Learn More First
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
