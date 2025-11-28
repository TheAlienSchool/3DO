'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function ThreeDaysOnIntensityPost() {
  return (
    <div className="min-h-screen bg-gradient-preparation">
      <Navigation />
      
      <main className="pt-20">
        <article className="container-preparation breathing-space max-w-4xl mx-auto">
          
          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="mb-6">
              <Link href="/blog" className="text-sage-green hover:text-deep-brown transition-colors">
                ← Field Notes
              </Link>
            </div>
            <h1 className="text-display mb-6">
              When Intensity Builds Capacity
            </h1>
            <p className="text-xl text-deep-brown/70 mb-4">
              Understanding the Research-Backed Path of Three Days On
            </p>
            <div className="text-sm text-deep-brown/60">
              Three Days Off Community • August 2025 • Practice Insights
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            
            {/* Opening */}
            <div className="text-xl leading-relaxed text-deep-brown/80 mb-8 border-l-4 border-sage-green pl-6">
              "There are times when your intuition calls for complete engagement, when rest would feel like betrayal of purpose. Three Days On honors the intentional intensity that serves life rather than depletes it."
            </div>

            <p className="text-lg leading-relaxed mb-6">
              While Three Days Off invites pause and restoration, the complementary practice of Three Days On recognizes that some moments in life call for conscious intensity. This is the path of the artist approaching deadline with creative fire, the athlete in peak training, the healer serving crisis, the parent navigating family emergency—times when stepping back would serve neither wisdom nor love.
            </p>

            <h2 className="text-heading mt-12 mb-6">The Sacred Geometry of Intensity</h2>

            <p className="mb-6">
              Just as Three Days Off employs mathematical principles of restoration, Three Days On follows its own intentional geometry. The triangle of ENGAGE • AMPLIFY • TRANSCEND creates sustainable structure for high-intensity periods that enhance rather than exhaust life force.
            </p>

            <div className="bg-warm-white p-6 rounded-lg my-8">
              <h3 className="text-lg font-semibold mb-4">Three Days On Framework:</h3>
              <ul className="space-y-3">
                <li><strong>Day One - ENGAGE:</strong> Full commitment to the calling with conscious boundaries and resource allocation</li>
                <li><strong>Day Two - AMPLIFY:</strong> Peak performance sustained through micro-recovery and purposeful rhythm</li>
                <li><strong>Day Three - TRANSCEND:</strong> Moving beyond ordinary capacity through spiritual momentum and collective support</li>
              </ul>
            </div>

            <h2 className="text-heading mt-12 mb-6">When Intensity Serves the Sacred</h2>

            <p className="mb-6">
              True intensity differs from burnout culture's unsustainable push. Sacred intensity arises from alignment with purpose, supported by conscious practice, and bounded by wisdom about when to rest.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">Recognizing Sacred Intensity</h3>
            <p className="mb-6">
              Sacred intensity feels energizing even when demanding. It connects you more deeply to purpose rather than disconnecting you from values. Time expands rather than contracts. Challenge becomes opportunity for growth rather than threat to well-being.
            </p>

            <blockquote className="border-l-4 border-sage-green pl-6 italic text-lg my-8 text-deep-brown/80">
              "When my daughter was born premature, those three days in the NICU became the most intense practice of my life. Every breath was intentional attention. Every moment was both urgency and presence. I had never been so exhausted or so alive."
              <footer className="text-base text-deep-brown/60 mt-2">— Community Participant</footer>
            </blockquote>

            <h3 className="text-lg font-semibold mt-8 mb-4">Distinguishing from Burnout Culture</h3>
            <p className="mb-6">
              Burnout culture uses intensity to escape presence through constant doing. Sacred intensity uses presence to fuel sustainable excellence. One depletes; the other transforms.
            </p>

            <h2 className="text-heading mt-12 mb-6">The Six Archetypes of Three Days On</h2>

            <p className="mb-6">
              Sacred intensity manifests differently depending on your calling and circumstances. Understanding these archetypes helps identify your natural pathway for conscious high performance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-warm-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">The Creator</h4>
                <p className="text-sm mb-3">Artists, writers, designers in creative flow states</p>
                <p className="text-sm">Sacred intensity channels through uninterrupted creative expression, breakthrough innovation, and artistic breakthrough.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">The Athlete</h4>
                <p className="text-sm mb-3">Physical performers, competitors, embodied practitioners</p>
                <p className="text-sm">Sacred intensity flows through peak physical performance, training breakthroughs, and mind-body integration.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">The Servant</h4>
                <p className="text-sm mb-3">Healers, caregivers, social impact workers</p>
                <p className="text-sm">Sacred intensity emerges through service to others, crisis response, and compassionate action.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">The Scholar</h4>
                <p className="text-sm mb-3">Researchers, students, knowledge workers</p>
                <p className="text-sm">Sacred intensity manifests through deep learning, intellectual breakthrough, and wisdom integration.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">The Builder</h4>
                <p className="text-sm mb-3">Entrepreneurs, organizers, system creators</p>
                <p className="text-sm">Sacred intensity channels through visionary construction, organizational development, and structural innovation.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">The Healer</h4>
                <p className="text-sm mb-3">Therapists, coaches, spiritual guides</p>
                <p className="text-sm">Sacred intensity flows through healing presence, transformational work, and spiritual service.</p>
              </div>
            </div>

            <h2 className="text-heading mt-12 mb-6">Conscious Intensity Guidelines</h2>

            <p className="mb-6">
              Three Days On requires skillful preparation, mindful execution, and intentional integration to serve rather than deplete your life force.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">Before: Preparation Phase</h3>
            <ul className="mb-6 space-y-2">
              <li>• <strong>Clear intention setting:</strong> Why does this intensity serve life and purpose?</li>
              <li>• <strong>Resource allocation:</strong> Energy, time, support systems, and boundary management</li>
              <li>• <strong>Recovery planning:</strong> How will restoration happen after the intensive period?</li>
              <li>• <strong>Support activation:</strong> Who can hold space and provide assistance during peak demands?</li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-4">During: Sacred Sustainability</h3>
            <ul className="mb-6 space-y-2">
              <li>• <strong>Micro-recovery:</strong> Brief pauses for breath, nourishment, and presence</li>
              <li>• <strong>Purpose connection:</strong> Regular remembering of why this intensity serves</li>
              <li>• <strong>Body wisdom:</strong> Attention to physical signals and energy management</li>
              <li>• <strong>Spiritual momentum:</strong> Drawing on sources larger than individual willpower</li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-4">After: Integration Wisdom</h3>
            <ul className="mb-6 space-y-2">
              <li>• <strong>Gradual transition:</strong> Avoiding abrupt return to normal rhythm</li>
              <li>• <strong>Learning harvest:</strong> What was gained through the intensive experience?</li>
              <li>• <strong>Relationship repair:</strong> Attending to connections that may have been strained</li>
              <li>• <strong>Restoration commitment:</strong> Honoring the need for deep recovery</li>
            </ul>

            <h2 className="text-heading mt-12 mb-6">The Science of Beneficial Stress</h2>

            <p className="mb-6">
              Sacred intensity engages what researchers call "hormetic response"—stress that strengthens rather than weakens systems. Like exercise that builds muscle or fasting that enhances cellular renewal, conscious intensity can expand capacity when approached with wisdom.
            </p>

            <blockquote className="border-l-4 border-sage-green pl-6 italic text-lg my-8 text-deep-brown/80">
              "The three days I spent finishing my thesis felt like climbing a mountain made of words. Each day required everything I had, but each day also revealed capabilities I never knew I possessed. By the third day, I was writing beyond my normal mind."
              <footer className="text-base text-deep-brown/60 mt-2">— Community Participant</footer>
            </blockquote>

            <h2 className="text-heading mt-12 mb-6">Honor All Paths</h2>

            <p className="mb-6">
              Three Days On and Three Days Off represent complementary approaches to spiritual practice in daily life. Neither is superior; both serve different moments in the rhythm of human flourishing.
            </p>

            <p className="mb-6">
              Some seasons call for deep rest and restoration. Others call for passionate engagement and creative fire. Wisdom lies in recognizing which approach serves the present moment and having the courage to honor what your intuition actually needs rather than what productivity culture demands.
            </p>

            <div className="bg-sage-green/10 p-8 rounded-lg my-12">
              <h3 className="text-lg font-semibold mb-4 text-center">Integration Practice</h3>
              <p className="text-center">
                Notice your current life rhythm. Are you in a season that calls for restorative pause or conscious intensity? Both paths can become practice when approached with presence and purpose.
              </p>
            </div>

            <h2 className="text-heading mt-12 mb-6">When Intensity Becomes Spiritual Practice</h2>

            <p className="mb-6">
              The highest expression of Three Days On transforms intense effort into preparation practice. Work becomes worship. Challenge becomes opportunity for spiritual development. Pressure becomes invitation to discover strength and wisdom beyond ordinary capacity.
            </p>

            <p className="mb-6">
              This transforms the relationship to difficulty itself. Rather than avoiding challenge or pushing through mindlessly, intentional intensity teaches engaging fully while remaining present to the spiritual dimensions of demanding circumstances.
            </p>

            <p className="mb-6">
              Whether your calling involves creative breakthrough, physical achievement, service to others, learning mastery, organizational development, or healing work, Three Days On provides a framework for bringing preparation awareness to high-performance periods.
            </p>

            <p className="mb-6">
              The goal is neither to avoid intensity nor to seek it compulsively, but to recognize when conscious engagement serves life and to bring spiritual presence to whatever level of effort the moment requires.
            </p>

            <hr className="my-12 border-sage-green/30" />

            <div className="text-sm text-deep-brown/60">
              <p>
                <strong>About This Practice:</strong> Three Days On complements Three Days Off by honoring the full spectrum of human spiritual experience, from deep rest to conscious intensity. Both approaches serve the development of wisdom, compassion, and authentic engagement with life's opportunities and challenges.
              </p>
            </div>

          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-warm-white p-8 rounded-lg">
              <h3 className="text-heading mb-4">Choose Your Sacred Path</h3>
              <p className="text-lg mb-6 text-deep-brown/80">
                Whether your current season calls for restoration or intensity, both paths can serve spiritual development when approached with consciousness.
              </p>
              <Link 
                href="/three-days-on"
                className="btn-primary mr-4"
              >
                Explore Three Days On
              </Link>
              <Link 
                href="/pledge"
                className="btn-secondary"
              >
                Join Three Days Off
              </Link>
            </div>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-heading mb-8 text-center">Related Practices</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog/boundary-templates-guide" className="block p-6 bg-warm-white rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2">The Art of Loving Boundaries</h4>
                <p className="text-deep-brown/70">Creating sustainable containers for both intensive work and restorative practice.</p>
              </Link>
              <Link href="/blog/creating-sanctuary-spaces" className="block p-6 bg-warm-white rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2">Creating Sanctuary Spaces</h4>
                <p className="text-deep-brown/70">Designing environments that support both high performance and deep restoration.</p>
              </Link>
            </div>
          </motion.div>

        </article>
      </main>

      {/* Footer */}
      <footer className="bg-soft-gray py-12 mt-16">
        <div className="container-preparation text-center">
          <p className="text-deep-brown/70">
            A practice from <strong>TheAlienSchool.com</strong> • Created by <strong>Kamau Zuberi Akabueze</strong>
          </p>
        </div>
      </footer>
    </div>
  )
}


