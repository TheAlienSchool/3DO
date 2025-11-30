'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function GlobalCalendarPage() {
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
                  GLOBAL THREE DAYS OFF<br />
                  CALENDAR
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Discover contemplative pause opportunities across cultures and continents. 
                  Preview the future of year-round conscious living through respectful engagement 
                  with global three-day weekend traditions.
                </p>
                <p className="text-lg text-sage-green font-medium mb-12">
                  Join us in building the world's first global contemplative calendar platform.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
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
                <h2 className="text-display mb-8">A Living Bridge Between Cultures</h2>
                <div className="space-y-6 text-lg leading-relaxed text-deep-brown/80">
                  <p>
                    Imagine a platform that honors the wisdom of global contemplative traditions while 
                    fostering year-round conscious pause opportunities. Instead of one annual moment, 
                    what if you could practice Three Days Off throughout the year by respectfully 
                    engaging with holidays and traditions from around the world?
                  </p>
                  <p>
                    The Global 3DO Calendar represents the natural evolution of Three Days Off from 
                    annual event to lifestyle platform :: a consciousness-serving technology that bridges 
                    cultures through shared contemplative experience while honoring the unique beauty 
                    of diverse traditions.
                  </p>
                  <p className="text-sage-green font-medium">
                    This is cultural diplomacy through contemplative practice. Academic collaboration 
                    meets spiritual curiosity. Individual wellness serves collective understanding.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Preview Calendar */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-display mb-8">Preview: Global Contemplative Opportunities</h2>
                <p className="text-xl text-deep-brown/80 mb-12">
                  Here's a glimpse of what global contemplative calendar intelligence could offer:
                </p>
              </motion.div>

              <div className="grid md:grid-cols-1 gap-8">
                {/* May International Workers Day */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-heading mb-2 text-contemplative-gold">May 2026: International Workers' Day Weekend</h3>
                      <p className="text-deep-brown/70 mb-2">Germany, France, Italy, Belgium, and 120+ countries</p>
                      <p className="text-sm bg-success-harmony/20 text-success-harmony px-3 py-1 rounded-full inline-block">
                        High Cultural Appropriateness - Secular memorial with universal themes
                      </p>
                    </div>
                  </div>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Theme:</strong> Labor, Rest, and Human Dignity
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Contemplative Practice:</strong> Reflect on work-life balance, rest as resistance, 
                    and dignified labor as spiritual practice. Honor those who fight for workers' rights 
                    through conscious pause and gratitude.
                  </p>
                </motion.div>

                {/* Vesak Day */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-heading mb-2 text-intention-purple">May 2026: Vesak Day (Buddhist)</h3>
                      <p className="text-deep-brown/70 mb-2">Thailand, Sri Lanka, Myanmar, Cambodia, and Buddhist communities globally</p>
                      <p className="text-sm bg-success-harmony/20 text-success-harmony px-3 py-1 rounded-full inline-block">
                        High Cultural Appropriateness - Explicitly contemplative holiday
                      </p>
                    </div>
                  </div>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Theme:</strong> Meditation, Compassion, and Spiritual Awakening
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Contemplative Practice:</strong> Buddha's birth, enlightenment, and death commemorated 
                    through meditation and compassionate action. This holiday explicitly welcomes respectful 
                    participation in contemplative practice.
                  </p>
                </motion.div>

                {/* Canadian Thanksgiving */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-8 rounded-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-heading mb-2 text-breath-blue">October 2026: Canadian Thanksgiving</h3>
                      <p className="text-deep-brown/70 mb-2">Canada and indigenous gratitude traditions</p>
                      <p className="text-sm bg-gentle-warning/20 text-gentle-warning px-3 py-1 rounded-full inline-block">
                        Moderate Appropriateness - Cultural consultation required
                      </p>
                    </div>
                  </div>
                  <p className="text-deep-brown/80 mb-4">
                    <strong>Theme:</strong> Gratitude, Harvest, and Community Connection
                  </p>
                  <p className="text-deep-brown/80">
                    <strong>Contemplative Practice:</strong> Gratitude practice, community service, and reflection 
                    on abundance and scarcity. Requires respectful acknowledgment of indigenous harvest traditions.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* The Potential */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-display mb-8">The Transformational Potential</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-contemplative-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-warm-cream font-bold text-xl">🧘</span>
                  </div>
                  <h3 className="text-heading mb-4">For Individuals</h3>
                  <p className="text-deep-brown/80">
                    50+ annual opportunities for conscious pause across diverse cultural traditions. 
                    Personal contemplative calendar curation. Cultural education integrated with 
                    spiritual practice. Year-round community connection with global practitioners.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-intention-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-warm-cream font-bold text-xl">🌍</span>
                  </div>
                  <h3 className="text-heading mb-4">For Cultural Understanding</h3>
                  <p className="text-deep-brown/80">
                    Respectful engagement with world traditions. Academic-level cultural education. 
                    Interfaith cooperation through shared contemplative practice. Cultural preservation 
                    through appreciation rather than appropriation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-success-harmony rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-warm-cream font-bold text-xl">🤝</span>
                  </div>
                  <h3 className="text-heading mb-4">For Global Community</h3>
                  <p className="text-deep-brown/80">
                    Bridge-building between contemplative traditions. Cultural diplomacy through 
                    conscious pause. Academic partnerships advancing interfaith understanding. 
                    Community formation across geographic and cultural boundaries.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Foundation */}
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
                <h2 className="text-display mb-8">Evidence-Based Cultural Intelligence</h2>
                <p className="text-xl text-deep-brown/80 mb-12">
                  Our research reveals 1,200+ annual three-day weekend opportunities across 200+ countries, 
                  with 60% showing high cultural appropriateness for external contemplative programming.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-1 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-3 text-contemplative-gold">European Bridge Day Excellence</h3>
                  <p className="text-deep-brown/80">
                    Germany's 'Brückentag' culture offers 8-10 annual opportunities. Nordic countries provide 
                    6-7 contemplative windows with established traditions. May emerges as the universal 
                    optimal month across all European countries.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-3 text-intention-purple">Buddhist Contemplative Alignment</h3>
                  <p className="text-deep-brown/80">
                    Buddhist-majority countries offer exceptional contemplative appropriateness through holidays 
                    explicitly focused on meditation and spiritual reflection. Vesak Day celebrations welcome 
                    respectful outside participation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-3 text-success-harmony">Secular Memorial Opportunities</h3>
                  <p className="text-deep-brown/80">
                    Labor Day celebrations, memorial holidays, and national reflection days provide 280+ annual 
                    opportunities with high cultural appropriateness across 45 countries.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Invitation */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display mb-8">Help Us Build the Future of Global Contemplative Practice</h2>
                <p className="text-xl leading-relaxed mb-8">
                  This vision requires community. We cannot and should not build a global contemplative 
                  calendar without authentic partnership with the cultures and traditions we hope to honor.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Whether you're a cultural tradition keeper, academic researcher, technology innovator, 
                  or simply someone passionate about respectful cross-cultural engagement, there's a 
                  place for you in this community.
                </p>
                <p className="text-lg leading-relaxed mb-12">
                  Together, we can create the world's first platform that serves both individual 
                  contemplative practice and global cultural understanding :: a living bridge between 
                  traditions that honors diversity while revealing our shared human capacity for 
                  wisdom, compassion, and conscious pause.
                </p>
                
                <Link 
                  href="#partnership-form" 
                  className="btn-contemplative px-8 py-4 text-lg"
                >
                  Join the Global 3DO Calendar Community
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section id="partnership-form" className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-display mb-6">Global 3DO Calendar Partnership Application</h2>
                <p className="text-xl text-deep-brown/80">
                  Help us understand your interest and expertise in building this global contemplative platform.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                action="mailto:Community@ThreeDaysOff.com"
                method="post"
                encType="text/plain"
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-deep-brown mb-2">
                        Full Name <span className="text-sage-green">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-deep-brown mb-2">
                        Email Address <span className="text-sage-green">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-deep-brown mb-2">
                      Organization/Institution (if applicable)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="expertise" className="block text-sm font-medium text-deep-brown mb-2">
                      Cultural, Academic, or Professional Expertise
                    </label>
                    <input
                      type="text"
                      id="expertise"
                      name="expertise"
                      placeholder="e.g., Buddhist studies professor, Indigenous tradition keeper, interfaith ministry leader, technology developer, etc."
                      className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="tradition" className="block text-sm font-medium text-deep-brown mb-2">
                      Cultural or Religious Tradition Affiliation (if applicable)
                    </label>
                    <input
                      type="text"
                      id="tradition"
                      name="tradition"
                      placeholder="Please specify tradition and your role/relationship to it"
                      className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="vision" className="block text-sm font-medium text-deep-brown mb-2">
                      Your Vision for Global Contemplative Calendar Platform
                    </label>
                    <textarea
                      id="vision"
                      name="vision"
                      placeholder="What excites you about this project? What concerns or suggestions do you have?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-contemplative py-4 font-medium tracking-wide"
                  >
                    Join the Global 3DO Calendar Community
                  </button>
                </div>
              </motion.form>
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
              <Link href="/blog" className="nav-link">Blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
