'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CommunityResourcesPage() {
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
                  COMMUNITY RESOURCES<br />
                  Engagement & Shared Practice
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Tools for fostering contemplative community—boundary templates, moderation guides, reflection prompts, and practices for creating safe, inclusive containers where preparation practice strengthens.
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
                <h2 className="text-display mb-6 three-dots">Community as Container</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  Individual practice deepens in community context. Not because groups make practice "better," but because shared preparation creates conditions where vulnerability becomes possible, where collective timing amplifies individual commitment.
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
                  <h3 className="text-heading mb-4 text-sage-green">Holding Space</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Community resources help venues create containers that honor both togetherness and solitude—spaces where people practice alongside each other without performing for each other.
                  </p>
                  <ul className="space-y-2 text-sm text-deep-brown/70">
                    <li>• Boundaries as love, not limitation</li>
                    <li>• Silence as communication</li>
                    <li>• Diversity as strength</li>
                    <li>• Safety through clear structure</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Inclusive Practice</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Three Days Off serves diverse nervous systems, backgrounds, and practice needs. Community resources help venues create accessibility without demanding disclosure, inclusion without forced participation.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <p className="font-medium mb-2">Considerations:</p>
                    <p>• Physical accessibility<br />
                    • Neurodivergent inclusion<br />
                    • Trauma-informed practices<br />
                    • Cultural responsiveness</p>
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
              <h2 className="text-display mb-6">Community Engagement Tools</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                Resources currently in development—created by community organizers, facilitators, and practitioners who understand contemplative group dynamics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Boundary Templates */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">🤝</span>
                </div>
                <h3 className="text-heading text-center mb-4">Boundary Templates</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Clear, loving communication frameworks for establishing group agreements—what creates safety, what preserves autonomy, how to address boundary crossings with compassion.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Includes:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Session opening agreements</li>
                    <li>Consent frameworks</li>
                    <li>Opt-in/opt-out language</li>
                    <li>Conflict resolution protocols</li>
                    <li>Repair process templates</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Moderation Guides */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">🎭</span>
                </div>
                <h3 className="text-heading text-center mb-4">Moderation & Safety Guides</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Practical guidance for holding safe containers—recognizing distress, supporting diverse nervous systems, intervening when needed, maintaining contemplative integrity.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Guidance for:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Trauma-informed facilitation</li>
                    <li>Recognizing dysregulation</li>
                    <li>Supporting intense experiences</li>
                    <li>When to intervene vs. hold space</li>
                    <li>Emergency protocols</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Reflection Prompts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">📝</span>
                </div>
                <h3 className="text-heading text-center mb-4">Reflection & Integration Prompts</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Optional sharing prompts and integration activities—questions that invite reflection without demanding disclosure, journaling prompts, paired sharing structures.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Prompt Types:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Post-practice reflection questions</li>
                    <li>Journaling prompts</li>
                    <li>Paired sharing formats</li>
                    <li>Circle sharing structures</li>
                    <li>Silent integration activities</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>

              {/* Accessibility Checklists */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-warm-cream text-3xl">♿</span>
                </div>
                <h3 className="text-heading text-center mb-4">Accessibility & Inclusion</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Comprehensive checklists for creating accessible practice spaces—physical access, sensory considerations, language inclusivity, economic accessibility.
                </p>
                <div className="text-xs text-deep-brown/60 space-y-2">
                  <p><strong>Checklists Cover:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Physical space accessibility</li>
                    <li>Sensory accommodations</li>
                    <li>Neurodivergent support</li>
                    <li>Language inclusivity</li>
                    <li>Economic access (sliding scale, etc.)</li>
                  </ul>
                  <p className="mt-3"><strong>Status:</strong> In Development</p>
                </div>
              </motion.div>
            </div>

            {/* Additional Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              {/* Ongoing Group Structures */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <div className="text-3xl mb-3 text-center">🔄</div>
                <h4 className="font-semibold text-center mb-3">Ongoing Group Formats</h4>
                <p className="text-sm text-deep-brown/70">
                  Templates for weekly/monthly practice groups, peer support structures, accountability partnerships, sustained community engagement.
                </p>
              </motion.div>

              {/* Conflict Resolution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <div className="text-3xl mb-3 text-center">🕊️</div>
                <h4 className="font-semibold text-center mb-3">Conflict Resolution Frameworks</h4>
                <p className="text-sm text-deep-brown/70">
                  Contemplative approaches to addressing harm, repairing relationships, maintaining community integrity when challenges arise.
                </p>
              </motion.div>

              {/* Diversity & Cultural Responsiveness */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg"
              >
                <div className="text-3xl mb-3 text-center">🌍</div>
                <h4 className="font-semibold text-center mb-3">Cultural Responsiveness</h4>
                <p className="text-sm text-deep-brown/70">
                  Resources for honoring diverse cultural backgrounds, adapting practice for different communities, avoiding appropriation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Principles Section */}
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
                <h2 className="text-display mb-6">Core Community Principles</h2>
                <p className="text-xl text-deep-brown/80">
                  Foundational values that guide Three Days Off community practice
                </p>
              </motion.div>

              <div className="bg-sage-green/10 p-8 rounded-lg">
                <div className="space-y-6">
                  {/* Consent & Autonomy */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <h4 className="font-semibold text-sage-green mb-2">Consent & Autonomy</h4>
                    <p className="text-sm text-deep-brown/80">
                      Everyone decides their own level of engagement. Sharing is invited, never required. Physical contact only with explicit consent. Participation is always opt-in.
                    </p>
                  </div>

                  {/* Boundaries as Love */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <h4 className="font-semibold text-sage-green mb-2">Boundaries as Love</h4>
                    <p className="text-sm text-deep-brown/80">
                      Clear boundaries create safety. Saying "no" is honored. Leaving early is fine. Taking space is respected. Boundaries protect everyone's capacity to practice.
                    </p>
                  </div>

                  {/* Diversity Strengthens */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <h4 className="font-semibold text-sage-green mb-2">Diversity Strengthens Practice</h4>
                    <p className="text-sm text-deep-brown/80">
                      Different nervous systems need different things. Multiple valid ways to practice. Honoring diverse experiences, backgrounds, and approaches enriches community capacity.
                    </p>
                  </div>

                  {/* Silence Communicates */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <h4 className="font-semibold text-sage-green mb-2">Silence Communicates</h4>
                    <p className="text-sm text-deep-brown/80">
                      Not all processing happens through words. Silence is valued as communication. Sitting together without speaking creates its own connection.
                    </p>
                  </div>

                  {/* Process Over Performance */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <h4 className="font-semibold text-sage-green mb-2">Process Over Performance</h4>
                    <p className="text-sm text-deep-brown/80">
                      No "correct" way to practice. Struggle is valid. Ease is valid. Restlessness, peace, boredom, insight—all welcome. This isn't performance, it's practice.
                    </p>
                  </div>

                  {/* Repair is Possible */}
                  <div className="border-l-4 border-sage-green pl-6">
                    <h4 className="font-semibold text-sage-green mb-2">Repair is Always Possible</h4>
                    <p className="text-sm text-deep-brown/80">
                      When harm occurs, repair processes exist. Mistakes don't end belonging. Communities stay healthy through addressing hurt, not avoiding it.
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
                <h2 className="text-display mb-6">Help Build Community Resources</h2>
                <p className="text-xl text-warm-cream/90 leading-relaxed mb-8">
                  These materials are being developed collaboratively by community organizers, trauma-informed facilitators, accessibility consultants, and practitioners who understand the complexity of holding contemplative space.
                </p>

                <div className="bg-warm-cream/10 p-8 rounded-lg mb-8 text-left">
                  <h3 className="text-heading mb-4 text-sage-green">Contribution Opportunities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium mb-2">Community Organizers</p>
                      <p className="text-sm text-warm-cream/80">Shape group structures, engagement frameworks, ongoing community formats</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Trauma-Informed Practitioners</p>
                      <p className="text-sm text-warm-cream/80">Develop safety protocols, moderation guides, crisis response resources</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Accessibility Consultants</p>
                      <p className="text-sm text-warm-cream/80">Create inclusion checklists, accommodation guides, universal design principles</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Conflict Resolution Facilitators</p>
                      <p className="text-sm text-warm-cream/80">Build repair frameworks, boundary templates, communication protocols</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/volunteer"
                    className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-contemplative-gold transition-all duration-300"
                  >
                    Volunteer to Build Community Resources
                  </Link>
                  <a
                    href="mailto:Community@ThreeDaysOff.com?subject=Community Resources Contribution&body=I'm interested in contributing to the Community Resources collection."
                    className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300"
                  >
                    Share Your Community Expertise
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

                <Link href="/venues/digital-assets" className="bg-sage-green/10 p-6 rounded-lg hover:bg-sage-green/20 transition-colors">
                  <div className="text-3xl mb-3 text-center">🌐</div>
                  <h4 className="font-semibold text-center mb-2">Digital Assets</h4>
                  <p className="text-sm text-deep-brown/70 text-center">Website graphics, social media, email templates</p>
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
