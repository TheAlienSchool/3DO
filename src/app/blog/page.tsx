'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BlogPage() {
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
                  FIELD NOTES<br />
                  FROM THE PAUSE
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Stories, insights, and discoveries from the global Three Days Off community. 
                  Real experiences from real people practicing the art of conscious pause.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6 three-dots">Featured Stories</h2>
              <p className="text-xl text-deep-brown/80">
                Highlights from our community of practitioners exploring what emerges in stillness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Post 1 */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-6 rounded-lg"
              >
                <div className="mb-4">
                  <span className="text-sm text-sage-green font-medium">Field Notes</span>
                  <span className="text-sm text-deep-brown/60 ml-2">August 12, 2025</span>
                </div>
                <h3 className="text-heading mb-3">
                  <Link href="/blog/first-time-practitioner" className="hover:text-sage-green transition-colors">
                    "I Never Thought I Could Sit Still"
                  </Link>
                </h3>
                <p className="text-deep-brown/80 mb-4">
                  A first-time participant discovers that stillness isn't about perfection :: it's about 
                  showing up with whatever capacity you have and letting the process unfold naturally.
                </p>
                <Link 
                  href="/blog/first-time-practitioner" 
                  className="text-sage-green font-medium hover:underline"
                >
                  Read Full Story →
                </Link>
              </motion.article>

              {/* Featured Post 2 */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-6 rounded-lg"
              >
                <div className="mb-4">
                  <span className="text-sm text-sage-green font-medium">Research Update</span>
                  <span className="text-sm text-deep-brown/60 ml-2">August 10, 2025</span>
                </div>
                <h3 className="text-heading mb-3">
                  <Link href="/blog/collective-pause-research" className="hover:text-sage-green transition-colors">
                    The Wisdom of Collective Pause
                  </Link>
                </h3>
                <p className="text-deep-brown/80 mb-4">
                  Ancient practices and modern understanding of synchronized contemplative states 
                  reveal how group practice creates wisdom beyond individual benefits.
                </p>
                                  <Link 
                    href="/blog/collective-pause-research" 
                    className="text-sage-green font-medium hover:underline"
                  >
                    Read Insights →
                  </Link>
              </motion.article>

              {/* Featured Post 3 */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-6 rounded-lg"
              >
                <div className="mb-4">
                  <span className="text-sm text-sage-green font-medium">Practice Wisdom</span>
                  <span className="text-sm text-deep-brown/60 ml-2">August 8, 2025</span>
                </div>
                <h3 className="text-heading mb-3">
                  <Link href="/blog/creating-sanctuary-spaces" className="hover:text-sage-green transition-colors">
                    Creating Sanctuary in Small Spaces
                  </Link>
                </h3>
                <p className="text-deep-brown/80 mb-4">
                  Practical guidance for urban dwellers, busy parents, and anyone who needs to create 
                  contemplative space within the constraints of modern life.
                </p>
                <Link 
                  href="/blog/creating-sanctuary-spaces" 
                  className="text-sage-green font-medium hover:underline"
                >
                  Read Guide →
                </Link>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Explore by Category</h2>
              <p className="text-xl text-deep-brown/80">
                Dive deeper into specific aspects of the Three Days Off practice and community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Field Notes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">📝</span>
                </div>
                <h3 className="text-heading mb-3">Field Notes</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Personal stories and experiences from Three Days Off practitioners around the world.
                </p>
                <span className="text-sage-green/60 font-medium">
                  Browse Stories (Coming Soon)
                </span>
              </motion.div>

              {/* Practice Wisdom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">🧘</span>
                </div>
                <h3 className="text-heading mb-3">Practice Wisdom</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Practical guidance, techniques, and insights for deepening your stillness practice.
                </p>
                <Link href="/resources/library" className="text-sage-green hover:underline font-medium">
                  Explore Practice Guides →
                </Link>
              </motion.div>

              {/* Research Updates */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">🔬</span>
                </div>
                <h3 className="text-heading mb-3">Research Updates</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  Latest scientific findings on consciousness, stillness, and the neuroscience of pause.
                </p>
                <Link href="/resources/library" className="text-sage-green hover:underline font-medium">
                  See Research Library →
                </Link>
              </motion.div>

              {/* Community Stories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-warm-cream font-bold">🌍</span>
                </div>
                <h3 className="text-heading mb-3">Community Stories</h3>
                <p className="text-deep-brown/80 mb-4 text-sm">
                  How Three Days Off is creating ripples of change in communities worldwide.
                </p>
                <span className="text-sage-green/60 font-medium">
                  Read Impact (Coming Soon)
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6">Recent Posts</h2>
              <p className="text-xl text-deep-brown/80">
                The latest insights, stories, and discoveries from our global community.
              </p>
            </motion.div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Recent Post 1 */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 p-6 bg-sage-green/5 rounded-lg"
              >
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="text-sm text-sage-green font-medium">Field Notes</span>
                    <span className="text-sm text-deep-brown/60 ml-2">August 14, 2025</span>
                  </div>
                  <h3 className="text-heading mb-3">
                    <Link href="/blog/three-days-on-intensity" className="hover:text-sage-green transition-colors">
                      When Intensity Becomes Prayer: A Three Days On Experience
                    </Link>
                  </h3>
                  <p className="text-deep-brown/80 mb-4">
                    A software developer shares their experience with Three Days On :: using intensive coding 
                    sessions as a form of moving meditation and discovering profound insights through 
                    conscious engagement with challenge...
                  </p>
                  <Link 
                    href="/blog/three-days-on-intensity" 
                    className="text-sage-green font-medium hover:underline"
                  >
                    Continue Reading →
                  </Link>
                </div>
              </motion.article>

              {/* Recent Post 2 */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 p-6 bg-sage-green/5 rounded-lg"
              >
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="text-sm text-sage-green font-medium">Practice Wisdom</span>
                    <span className="text-sm text-deep-brown/60 ml-2">August 13, 2025</span>
                  </div>
                  <h3 className="text-heading mb-3">
                    <Link href="/blog/boundary-templates-guide" className="hover:text-sage-green transition-colors">
                      The Art of Loving Boundaries: A Complete Guide
                    </Link>
                  </h3>
                  <p className="text-deep-brown/80 mb-4">
                    How to communicate your Three Days Off practice to family, friends, and colleagues 
                    in ways that honor both your needs and theirs. Includes templates for every 
                    relationship type and situation...
                  </p>
                  <Link 
                    href="/blog/boundary-templates-guide" 
                    className="text-sage-green font-medium hover:underline"
                  >
                    Read Guide →
                  </Link>
                </div>
              </motion.article>

              {/* Recent Post 3 */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 p-6 bg-sage-green/5 rounded-lg"
              >
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="text-sm text-sage-green font-medium">Community Stories</span>
                    <span className="text-sm text-deep-brown/60 ml-2">August 12, 2025</span>
                  </div>
                  <h3 className="text-heading mb-3">
                    <Link href="/blog/library-sanctuary-space" className="hover:text-sage-green transition-colors">
                      How One Library Became a Sanctuary Space for 200+ Practitioners
                    </Link>
                  </h3>
                  <p className="text-deep-brown/80 mb-4">
                    The Portland Public Library shares their journey of creating Three Days Off programming 
                    that serves their diverse community while honoring the contemplative nature of 
                    libraries as natural sanctuary spaces...
                  </p>
                  <Link 
                    href="/blog/library-sanctuary-space" 
                    className="text-sage-green font-medium hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.article>
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-deep-brown transition-all duration-300">
                Load More Posts
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display mb-6">
                  Stay Connected to the Practice
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-warm-cream/90">
                  Receive weekly field notes, practice guidance, and community stories delivered 
                  with the same contemplative care as our website content. No noise, just wisdom.
                </p>
                <div className="bg-warm-cream/10 p-8 rounded-lg mb-8">
                  <h3 className="text-heading mb-4">What You'll Receive</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📧</span>
                      <span className="text-warm-cream/80">Weekly field notes from practitioners</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🔬</span>
                      <span className="text-warm-cream/80">Contemplative wisdom insights</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🗓️</span>
                      <span className="text-warm-cream/80">Seasonal practice opportunities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🌍</span>
                      <span className="text-warm-cream/80">Global community updates</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-4 py-3 rounded-full text-deep-brown placeholder-deep-brown/50 focus:outline-none focus:ring-2 focus:ring-sage-green"
                  />
                  <button className="bg-sage-green text-warm-cream px-6 py-3 rounded-full font-medium hover:bg-warm-cream hover:text-deep-brown transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-warm-cream/60 mt-4">
                  Unsubscribe anytime. We honor your attention as sacred.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
