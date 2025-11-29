'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function ThreeDaysOnPage() {
  return (
    <div className="min-h-screen bg-gradient-contemplative">
      <Navigation />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-deep-brown text-warm-cream">
          <div className="container-contemplative relative z-10">
            <div className="breathing-space text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-hero mb-8">
                  THREE DAYS ON<br />
                  THE COUNTERCULTURE MANIFESTO
                </h1>
                <p className="text-xl md:text-2xl font-light text-warm-cream/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  For those who choose intensity over stillness, acceleration over pause, 
                  and radical engagement over contemplative withdrawal. Your path is equally valid.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Recognition */}
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
                <h2 className="text-display mb-6 three-dots">We See You</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  While others retreat into stillness, you lean into the fire. While others seek pause, 
                  you find clarity in motion. While others practice being, you perfect doing. 
                  This is your manifesto.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-heading mb-6">The High-Intensity Path</h3>
                  <p className="text-deep-brown/80 mb-6 leading-relaxed">
                    Three Days On recognizes that some nervous systems thrive through intensity,
                    not absence. Some find clarity in the grind, breakthrough in engagement, and
                    presence through purposeful productivity. Your nervous system doesn't need rest ::
                    it needs the right kind of challenge.
                  </p>
                  <p className="text-deep-brown/80 leading-relaxed">
                    This isn't about workaholism or toxic hustle culture. This is about honoring
                    those whose capabilities expand through intentional action, creative pressure,
                    and the transformative power of sustained focus.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h4 className="text-heading mb-4 text-sage-green">The Three Days On Practitioner</h4>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Flow State Seekers:</strong> Find meditation in focused work</li>
                    <li>• <strong>Creative Sprinters:</strong> Breakthrough via intensive creation</li>
                    <li>• <strong>Purpose-Driven Achievers:</strong> Service through excellence</li>
                    <li>• <strong>Crisis Responders:</strong> Thrive under beneficial pressure</li>
                    <li>• <strong>Movement Meditators:</strong> Stillness through motion</li>
                    <li>• <strong>Challenge Athletes:</strong> Growth through intensity</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* The Framework */}
        <section className="bg-sage-green text-warm-cream">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">ENGAGE • AMPLIFY • TRANSCEND</h2>
              <p className="text-xl text-warm-cream/90 max-w-3xl mx-auto">
                Three Days On follows its own research-backed framework :: intentional acceleration
                that transforms intensity into insight, pressure into presence, and action into
                breakthrough performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* ENGAGE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-warm-cream rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-sage-green font-bold text-xl">⚡</span>
                </div>
                <h3 className="text-heading mb-4">ENGAGE</h3>
                <p className="text-warm-cream/80 mb-6">
                  Dive fully into your chosen intensity. Whether creative project, physical challenge, 
                  or service mission :: commit completely without distraction or half-hearted effort.
                </p>
                <div className="text-left">
                  <h4 className="font-semibold mb-2 text-warm-cream">What This Looks Like:</h4>
                  <ul className="text-sm text-warm-cream/70 space-y-1">
                    <li>• Eliminate non-essential activities</li>
                    <li>• Create deep work time blocks</li>
                    <li>• Set ambitious but achievable goals</li>
                    <li>• Design supportive environments</li>
                    <li>• Commit to consistent execution</li>
                  </ul>
                </div>
              </motion.div>

              {/* AMPLIFY */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-warm-cream rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-sage-green font-bold text-xl">🔥</span>
                </div>
                <h3 className="text-heading mb-4">AMPLIFY</h3>
                <p className="text-warm-cream/80 mb-6">
                  Use intentional breathing and body awareness to increase your capacity for sustained
                  high performance. Turn intensity into fuel rather than burnout.
                </p>
                <div className="text-left">
                  <h4 className="font-semibold mb-2 text-warm-cream">What This Looks Like:</h4>
                  <ul className="text-sm text-warm-cream/70 space-y-1">
                    <li>• Breathe awareness into action</li>
                    <li>• Use movement to enhance focus</li>
                    <li>• Monitor energy levels skillfully</li>
                    <li>• Practice active recovery techniques</li>
                    <li>• Maintain connection to purpose</li>
                  </ul>
                </div>
              </motion.div>

              {/* TRANSCEND */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-warm-cream rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-sage-green font-bold text-xl">🚀</span>
                </div>
                <h3 className="text-heading mb-4">TRANSCEND</h3>
                <p className="text-warm-cream/80 mb-6">
                  Discover what emerges when you push through your perceived limitations with
                  awareness and care. Find the breakthrough on the other side of intensity.
                </p>
                <div className="text-left">
                  <h4 className="font-semibold mb-2 text-warm-cream">What This Looks Like:</h4>
                  <ul className="text-sm text-warm-cream/70 space-y-1">
                    <li>• Notice expanded capabilities</li>
                    <li>• Integrate insights from pressure</li>
                    <li>• Celebrate growth edge discoveries</li>
                    <li>• Share breakthroughs with community</li>
                    <li>• Plan integration of new capacity</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Science of Intensity */}
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
                <h2 className="text-display mb-6">The Neuroscience of Beneficial Stress</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  Three Days On isn't about ignoring your well-being :: it's about understanding that 
                  some nervous systems thrive on conscious challenge and purpose-driven intensity.
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
                  <h3 className="text-heading mb-4 text-sage-green">Hormetic Stress Response</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Beneficial Adaptation:</strong> Like exercise, controlled challenge stimulates 
                    growth. Research shows that purpose-driven intensity activates neuroplasticity, 
                    increases BDNF (brain-derived neurotrophic factor), and enhances cognitive flexibility.
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Flow State Access:</strong> Mihaly Csikszentmihalyi's research reveals that 
                    optimal challenge levels create flow states where action and awareness merge, 
                    time distorts, and peak performance becomes effortless.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Purpose-Driven Physiology</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Meaning-Making Systems:</strong> When aligned with genuine purpose, the body's 
                    stress response becomes energizing rather than depleting. Stanford research shows 
                    that meaningful challenge activates different neural pathways than meaningless pressure.
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Collective Impact:</strong> Studies on social purpose reveal that working toward 
                    something larger than oneself can increase stress resilience and create sustainable 
                    high performance without typical burnout patterns.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Creative Breakthrough Dynamics</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Constraint and Innovation:</strong> Research shows that creative breakthroughs 
                    often emerge under conscious constraints and time pressure. The brain's divergent 
                    thinking networks activate more powerfully when given focused challenges.
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Integration After Intensity:</strong> Following periods of conscious intensity, 
                    the brain naturally enters consolidation phases where insights integrate and new 
                    capabilities stabilize.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Movement as Meditation</h3>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Embodied Awareness:</strong> Athletes, dancers, and martial artists achieve
                    meditative states through movement. The body in purposeful motion can access
                    flow states and heightened awareness usually associated with stillness practices.
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Action-Based Presence:</strong> For some nervous systems, presence emerges
                    more readily through intentional action than through withdrawal from action.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Archetype Variations */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Three Days On Archetypes</h2>
              <p className="text-xl text-warm-cream/90">
                Different expressions of the intentional intensity path :: find yours and honor others.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* The Creator */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4">The Creator</h3>
                <p className="text-warm-cream/80 mb-4">
                  72 hours of intensive creative practice. Whether writing, music, visual art, or coding ::
                  you disappear into the flow of making something that wants to exist.
                </p>
                <p className="text-sm text-warm-cream/60">
                  Your practice is creation. Your focus is production. Your breakthrough is manifestation.
                </p>
              </motion.div>

              {/* The Athlete */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4">The Athlete</h3>
                <p className="text-warm-cream/80 mb-4">
                  Physical challenge as embodied practice. Three days of intentional training, movement
                  meditation, and pushing your body's capabilities with respect and intelligence.
                </p>
                <p className="text-sm text-warm-cream/60">
                  Your body is your instrument. Movement is your practice. Endurance is your strength.
                </p>
              </motion.div>

              {/* The Servant */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4">The Servant</h3>
                <p className="text-warm-cream/80 mb-4">
                  Intensive service to others or causes. Three days of intentional contribution :: whether
                  volunteering, activism, caregiving, or community building with complete presence.
                </p>
                <p className="text-sm text-warm-cream/60">
                  Service is your practice. Giving is your receiving. Others' growth is your purpose.
                </p>
              </motion.div>

              {/* The Scholar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4">The Scholar</h3>
                <p className="text-warm-cream/80 mb-4">
                  Deep learning intensive. Three days of intentional study, research, and knowledge
                  integration :: whether academic, philosophical, or skill-based learning with full focus.
                </p>
                <p className="text-sm text-warm-cream/60">
                  Inquiry is your practice. Understanding is your goal. Knowledge is your gift.
                </p>
              </motion.div>

              {/* The Builder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4">The Builder</h3>
                <p className="text-warm-cream/80 mb-4">
                  Three days of intentional construction :: whether physical building, system design,
                  or bringing structure to ideas. Creating foundations for others to build upon.
                </p>
                <p className="text-sm text-warm-cream/60">
                  Making is your practice. Structure is your craft. Legacy is your impact.
                </p>
              </motion.div>

              {/* The Healer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-6 rounded-lg"
              >
                <h3 className="text-heading mb-4">The Healer</h3>
                <p className="text-warm-cream/80 mb-4">
                  Intensive healing practice :: whether therapeutic work, energy healing, counseling,
                  or medical service. Three days of intentional attention to facilitating others' wholeness.
                </p>
                <p className="text-sm text-warm-cream/60">
                  Healing is your calling. Presence is your tool. Wholeness is your vision.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Guidelines */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-display mb-6">Intentional Intensity Guidelines</h2>
                <p className="text-xl text-deep-brown/80">
                  Three Days On requires as much awareness and care as Three Days Off.
                  Here's how to practice intensity without sacrificing wisdom.
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
                  <h3 className="text-heading mb-4 text-sage-green">Before You Begin</h3>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Purpose Clarity:</strong> Why this intensity? What wants to emerge?</li>
                    <li>• <strong>Body Preparation:</strong> Ensure physical readiness for chosen challenge</li>
                    <li>• <strong>Support Systems:</strong> Inform others, arrange necessary assistance</li>
                    <li>• <strong>Recovery Planning:</strong> How will you integrate after intensity?</li>
                    <li>• <strong>Exit Strategies:</strong> When to modify or stop if needed</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">During the Practice</h3>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Breathing Awareness:</strong> Never lose connection to breath</li>
                    <li>• <strong>Body Scanning:</strong> Regular check-ins with physical state</li>
                    <li>• <strong>Purpose Remembering:</strong> Stay connected to deeper meaning</li>
                    <li>• <strong>Hydration/Nutrition:</strong> Fuel awareness, not just performance</li>
                    <li>• <strong>Micro-Adjustments:</strong> Listen to what wants to shift</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Signs to Adjust</h3>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Lost Connection:</strong> No longer aware of body or breath</li>
                    <li>• <strong>Ego Hijacking:</strong> Pride or comparison replacing purpose</li>
                    <li>• <strong>Physical Signals:</strong> Pain vs. productive challenge distinction</li>
                    <li>• <strong>Emotional Numbing:</strong> Using intensity to avoid feeling</li>
                    <li>• <strong>Isolation Urges:</strong> Pushing away all support or connection</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Integration After</h3>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Rest Period:</strong> Allow natural recovery and consolidation</li>
                    <li>• <strong>Insight Harvest:</strong> What did you discover about your capabilities?</li>
                    <li>• <strong>Capacity Mapping:</strong> How has your baseline shifted?</li>
                    <li>• <strong>Community Sharing:</strong> Offer insights to others on similar paths</li>
                    <li>• <strong>Next Evolution:</strong> How does this intensity serve future growth?</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
                  Your Intensity, Your Path
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-warm-cream/90">
                  Three Days On and Three Days Off exist in perfect complementarity. Neither path
                  is superior :: both serve capacity-building in their own way. Some seasons
                  call for stillness, others for intensity. Trust your inner knowing.
                </p>
                <div className="bg-warm-cream/10 p-8 rounded-lg mb-8">
                  <h3 className="text-heading mb-4">Honor All Paths</h3>
                  <p className="text-warm-cream/80 leading-relaxed">
                    Whether you choose Three Days Off, Three Days On, or cycle between both throughout
                    the year :: the goal is intentional choice. Your nervous system knows what it needs.
                    Your intuition knows how you grow. Trust that knowing and act accordingly.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/pledge-intensity" 
                    className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300"
                  >
                    Commit to Three Days On
                  </Link>
                  <Link 
                    href="/" 
                    className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300"
                  >
                    Explore Three Days Off
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
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/how-it-works" className="nav-link">How It Works</Link>
              <Link href="/preparing" className="nav-link">Preparing</Link>
              <Link href="/venues" className="nav-link">Venues</Link>
              <Link href="/press" className="nav-link">Press</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
