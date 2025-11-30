'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PressContextPage() {
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
                  CONTEXT & LINEAGE<br />
                  <span className="text-3xl md:text-4xl font-light">What Three Days Off Honors</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  This practice doesn't invent stillness :: it creates accessible structure for what
                  human beings have always known. Legacy, lineage, and lenticular vision.
                </p>
                <Link
                  href="/press"
                  className="text-sage-green hover:underline font-medium"
                >
                  ← Return to Press Hub
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
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
                <h2 className="text-display mb-6 three-dots">Legacy</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  Ancient wisdom addressing modern crisis :: What contemplative traditions across
                  cultures have always understood about pause, integration, and collective practice.
                </p>
              </motion.div>

              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg mb-8"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Pause as Sacred Technology</h3>
                  <p className="text-deep-brown/80 leading-relaxed mb-4">
                    For millennia, human beings have understood that **pause creates capacity**.
                    Not as escape from life, but as preparation for it. Contemplative traditions
                    across cultures developed sophisticated technologies of stillness—practices that
                    regulate the nervous system, integrate awareness, and build resilience.
                  </p>
                  <p className="text-deep-brown/80 leading-relaxed">
                    Three Days Off honors this legacy. We don't claim to have discovered anything new.
                    We create **accessible structure** for ancient wisdom—a 72-hour container that
                    makes contemplative practice available within the constraints and rhythms of modern life.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg mb-8"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Integration Before Measurement</h3>
                  <p className="text-deep-brown/80 leading-relaxed mb-4">
                    Mind, Body, and Spirit working together isn't a new idea. It's what contemplative
                    masters have taught for thousands of years :: that human beings function best when
                    awareness integrates all aspects of self.
                  </p>
                  <p className="text-deep-brown/80 leading-relaxed">
                    Contemporary neuroscience now **measures** what ancient practices always **understood**—that breathing patterns affect emotional regulation, that physical stillness creates
                    mental clarity, that spiritual practice has physiological effects. The research validates
                    the legacy. It doesn't replace it.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Collective Practice, Individual Path</h3>
                  <p className="text-deep-brown/80 leading-relaxed">
                    The idea that **individual practice strengthens collective capacity** appears across
                    traditions :: Buddhist sangha, Christian community prayer, Indigenous ceremony,
                    Islamic Ramadan. When people practice together in shared time, something emerges
                    that transcends individual experience.
                  </p>
                  <p className="text-deep-brown/80 leading-relaxed mt-4">
                    Three Days Off explores this ancient understanding through contemporary coordination—thousands practicing simultaneously across time zones, creating what research suggests
                    might be measurable coherence. The technology is old. The scale is new.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Lineage Section */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Lineage</h2>
              <p className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed">
                Three Days Off stands on the shoulders of teachers, traditions, and wisdom-keepers
                who understood pause as practice long before neuroscience could measure its effects.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Buddhist Mindfulness */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">☸️</div>
                <h3 className="text-heading mb-3">Buddhist Mindfulness</h3>
                <p className="text-warm-cream/80 text-sm leading-relaxed mb-3">
                  **2,500 years** of pause practice—Vipassana (insight meditation), shamatha
                  (calm abiding), and mindfulness of breathing as core technologies for awareness
                  development and suffering reduction.
                </p>
                <p className="text-xs text-warm-cream/60">
                  Three Days Off honors: Intentional stillness, breath awareness, observation
                  without judgment, collective retreat practice
                </p>
              </motion.div>

              {/* Contemplative Christianity */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">✝️</div>
                <h3 className="text-heading mb-3">Contemplative Christianity</h3>
                <p className="text-warm-cream/80 text-sm leading-relaxed mb-3">
                  Desert Fathers and Mothers, Centering Prayer, Christian meditation, Sabbath
                  observance—**2,000+ years** of sacred rest as spiritual practice and divine
                  communion through stillness.
                </p>
                <p className="text-xs text-warm-cream/60">
                  Three Days Off honors: Sabbath rhythm, contemplative prayer, silence as sacred,
                  communal rest practices
                </p>
              </motion.div>

              {/* Indigenous Ceremony */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-heading mb-3">Indigenous Ceremony</h3>
                <p className="text-warm-cream/80 text-sm leading-relaxed mb-3">
                  **Millennia** of ceremonial practice across cultures—vision quests, sweat lodges,
                  communal fasts, seasonal rituals. Time outside ordinary schedule for connection,
                  renewal, and collective healing.
                </p>
                <p className="text-xs text-warm-cream/60">
                  Three Days Off honors: Ceremonial timing, communal practice, connection to larger
                  cycles, preparation through withdrawal
                </p>
              </motion.div>

              {/* Sufi Practice */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">☪️</div>
                <h3 className="text-heading mb-3">Sufi Practice</h3>
                <p className="text-warm-cream/80 text-sm leading-relaxed mb-3">
                  **1,400+ years** of remembrance (dhikr), whirling meditation, and retreat (khalwa)—stillness as divine remembrance, movement as prayer, withdrawal for intensification
                  of presence.
                </p>
                <p className="text-xs text-warm-cream/60">
                  Three Days Off honors: Remembrance practices, retreat traditions, breath as divine
                  connection, ecstatic stillness
                </p>
              </motion.div>

              {/* Yogic Tradition */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">🕉️</div>
                <h3 className="text-heading mb-3">Yogic Tradition</h3>
                <p className="text-warm-cream/80 text-sm leading-relaxed mb-3">
                  **5,000+ years** of practice—Pratyahara (sense withdrawal), pranayama (breath
                  control), dhyana (meditation)—systematic technologies for integrating body,
                  breath, and awareness.
                </p>
                <p className="text-xs text-warm-cream/60">
                  Three Days Off honors: Eight-limbed path, breath as bridge, withdrawal as
                  preparation, integration of physical and spiritual
                </p>
              </motion.div>

              {/* Sabbatical Research */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-heading mb-3">Contemporary Sabbatical</h3>
                <p className="text-warm-cream/80 text-sm leading-relaxed mb-3">
                  Stefan Sagmeister's **7:1 sabbatical model**—documented evidence that extended
                  breaks produce breakthrough work. Modern validation of ancient wisdom adapted to
                  creative professional life.
                </p>
                <p className="text-xs text-warm-cream/60">
                  Three Days Off honors: Sabbatical research, creative renewal through rest,
                  documented benefits of structured pause
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-16 max-w-3xl mx-auto bg-warm-cream/10 p-8 rounded-lg text-center"
            >
              <h3 className="text-heading mb-4">Respectful Adaptation</h3>
              <p className="text-warm-cream/90 leading-relaxed">
                Three Days Off doesn't claim ownership of these lineages. We **honor without appropriating**—creating accessible structure inspired by cross-cultural wisdom while respecting the depth,
                complexity, and sacred contexts from which these practices emerge. We invite people to explore
                these traditions directly through their own teachers and communities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lenticular Vision Section */}
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
                <h2 className="text-display mb-6">Lenticular Vision</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  The ability to see multiple truths simultaneously—how Three Days Off holds
                  paradox without requiring resolution.
                </p>
              </motion.div>

              <div className="space-y-8">
                {/* Off AND On */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Three Days Off AND Three Days On</h3>
                  <p className="text-deep-brown/80 leading-relaxed mb-4">
                    Some nervous systems restore through **stillness**. Others through **intensity**.
                    Both paths are valid. Both build capacity. Both honor what bodies actually need
                    rather than prescribing universal solutions.
                  </p>
                  <p className="text-deep-brown/80 leading-relaxed">
                    The lenticular lens sees: Rest is not superior to action. Stillness is not better
                    than movement. **Your practice belongs to you**—honoring your nervous system's
                    actual requirements rather than cultural narratives about what "wellness" should look like.
                  </p>
                </motion.div>

                {/* Ancient AND Modern */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Ancient Wisdom AND Contemporary Research</h3>
                  <p className="text-deep-brown/80 leading-relaxed mb-4">
                    Contemplative traditions understood integration **millennia** before neuroscience could
                    measure HRV coherence. The research doesn't replace the lineage—it **validates** what
                    masters always knew.
                  </p>
                  <p className="text-deep-brown/80 leading-relaxed">
                    Three Days Off holds both—we cite JAMA studies AND honor Buddhist mindfulness.
                    We reference HeartMath data AND respect Sufi dhikr. Science and spirit aren't
                    opposites; they're **complementary lenses** on the same human capacity for transformation.
                  </p>
                </motion.div>

                {/* Individual AND Collective */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Individual Practice AND Collective Coherence</h3>
                  <p className="text-deep-brown/80 leading-relaxed mb-4">
                    Your practice is **deeply personal**—what you discover in stillness belongs to you alone.
                    AND your practice **contributes to collective capacity**—when thousands practice together,
                    research suggests measurable coherence emerges.
                  </p>
                  <p className="text-deep-brown/80 leading-relaxed">
                    The Lantern (personal clarity) AND the Lighthouse (collective orientation) AND the Network
                    (emergent coherence) all exist simultaneously. You're practicing for yourself **and** for
                    the whole—both are true.
                  </p>
                </motion.div>

                {/* Practical AND Sacred */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Pragmatic Structure AND Sacred Practice</h3>
                  <p className="text-deep-brown/80 leading-relaxed mb-4">
                    Three Days Off provides **practical framework**—PAUSE • BREATHE • OBSERVE, 72-hour
                    container, research validation, workplace applicability. AND it honors **sacred dimensions**—lineage wisdom, spiritual integration, collective ritual, mystery.
                  </p>
                  <p className="text-deep-brown/80 leading-relaxed">
                    You can engage with the practice as nervous system regulation OR as spiritual ceremony
                    OR as both simultaneously. The container holds multiple truths. What you discover in
                    stillness is yours to name.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* For Journalists Section */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-display mb-8">For Journalists & Writers</h2>
              <p className="text-xl leading-relaxed mb-8 text-deep-brown/80">
                This context page provides **philosophical and spiritual depth** for coverage that
                explores Three Days Off beyond workplace wellness or mental health angles. The lineage,
                legacy, and lenticular vision offer entry points for cultural, spiritual, or
                philosophical reporting.
              </p>

              <div className="bg-sage-green/10 p-8 rounded-lg mb-8 text-left">
                <h3 className="text-heading mb-4 text-sage-green">Story Angles This Context Serves</h3>
                <ul className="space-y-3 text-deep-brown/80">
                  <li>• **Religious/Spiritual Coverage** :: Cross-cultural contemplative traditions, interfaith wisdom</li>
                  <li>• **Cultural Anthropology** :: Ancient practices adapted to modern life, cultural preservation</li>
                  <li>• **Philosophy Sections** :: Integration philosophy, paradox-holding, lenticular thinking</li>
                  <li>• **Consciousness Studies** :: Scientific validation of ancient wisdom, integration research</li>
                  <li>• **Social Innovation** :: How traditional practices address contemporary crises</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/press"
                  className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-deep-brown transition-all duration-300"
                >
                  ← Press Hub (Practical Resources)
                </Link>
                <Link
                  href="/press/media-center"
                  className="border-2 border-sage-green text-sage-green px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                >
                  Media Center (Assets & Research)
                </Link>
              </div>

              <p className="mt-8 text-deep-brown/60 text-sm">
                Questions about lineage, philosophy, or spiritual context? Contact{' '}
                <a href="mailto:Press@ThreeDaysOff.com" className="text-sage-green hover:underline">
                  Press@ThreeDaysOff.com
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
