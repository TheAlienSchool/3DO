'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PressPage() {
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
                  PRESS RESOURCES<br />
                  FOR THREE DAYS OFF
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Everything you need to tell the story of a global preparation practice ::
                  research-backed, practically applicable, building capacity for what matters.
                </p>
                <p className="text-lg text-sage-green font-medium">
                  Press inquiries: <a href="mailto:Press@ThreeDaysOff.com" className="hover:underline">Press@ThreeDaysOff.com</a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Messages */}
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
                <h2 className="text-display mb-6 three-dots">The Story</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed mb-6">
                  Three Days Off is maximum internal restoration and the development of genius ::
                  a research-backed framework that trains Mind, Body, and Spirit to work together
                  for breakthrough capacity.
                </p>
                <p className="text-lg text-deep-brown/70 leading-relaxed">
                  When thousands practice together in a shared time window, network effects emerge.
                  This goes beyond individual self-care—it's a global demonstration of collective coherence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-heading mb-6">Key Messages for Media</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-sage-green mb-2">The Integration Engine</h4>
                      <p className="text-deep-brown/80">
                        Most practices train one aspect—meditation for mind, yoga for body, ritual for spirit.
                        Three Days Off trains their collaboration, honoring lineages that understood integration
                        millennia before neuroscience could measure it. When Mind, Body, and Spirit work together,
                        you don't just rest. You develop genius—the capacity for integrated choice, creative
                        breakthrough, and sustained presence.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-green mb-2">From Burden to Breakthrough</h4>
                      <p className="text-deep-brown/80">
                        The practice addresses what people are actually carrying :: digital fatigue, fragmented
                        attention, burnout, isolation. Through intentional pause, these transform into psychological
                        renewal, integrated awareness, genius activation, and collective coherence. Research shows
                        measurable improvements in anxiety (46% reduction), Heart Rate Variability, and creative capacity.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-green mb-2">Lantern to Lighthouse</h4>
                      <p className="text-deep-brown/80">
                        Individual practice creates collective capacity. When you bring undivided attention to your
                        own integration (the Lantern), you become clear. Your clarity creates orientation for others
                        (the Lighthouse). When thousands practice together (the Network), research suggests measurable
                        coherence emerges—a sales funnel with nothing to sell, accessible to anyone who needs it.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-8 rounded-lg"
                >
                  <h4 className="text-heading mb-4 text-sage-green">Quick Facts</h4>
                  <ul className="space-y-3 text-deep-brown/80">
                    <li>• <strong>Launch Date:</strong> August 15, 2025</li>
                    <li>• <strong>Global Practice:</strong> September 5 - September 7, 2026</li>
                    <li>• <strong>Founder:</strong> Kamau Zuberi Akabueze, Creator of <a href="https://thealienschool.com" target="_blank" rel="noopener noreferrer" className="text-sage-green hover:underline">TheAlienSchool.com</a></li>
                    <li>• <strong>Inspiration:</strong> Stefan Sagmeister's 7:1 sabbatical model</li>
                    <li>• <strong>Participation:</strong> Free, voluntary, globally accessible</li>
                    <li>• <strong>Website:</strong> ThreeDaysOff.com</li>
                    <li>• <strong>Philosophy:</strong> "Threesome with mind, body, and spirit" :: contemporary language for ancient integration</li>
                    <li>• <strong>Framework:</strong> PAUSE • BREATHE • OBSERVE</li>
                    <li>• <strong>Lineages Honored:</strong> Buddhist mindfulness, contemplative Christianity, Indigenous ceremony, Sufi practice, yogic tradition <Link href="/press/context" className="text-sage-green hover:underline text-sm">→ See full context</Link></li>
                    <li>• <strong>Alternative:</strong> Three Days On for intensity practitioners</li>
                    <li>• <strong>Community:</strong> Venue partnerships, global participation</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Lineage Expandable */}
        <section className="bg-warm-white border-t-2 border-sage-green/20">
          <div className="container-contemplative breathing-space">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <details className="group">
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-center justify-between bg-sage-green/10 p-6 rounded-lg hover:bg-sage-green/20 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">📜</span>
                        <div>
                          <h3 className="text-heading text-sage-green">Context & Lineage</h3>
                          <p className="text-sm text-deep-brown/70 mt-1">
                            What this practice honors :: Legacy, lineage, and lenticular vision
                          </p>
                        </div>
                      </div>
                      <span className="text-2xl text-sage-green group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </div>
                  </summary>

                  <div className="mt-6 p-8 bg-soft-gray/30 rounded-lg">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-deep-brown/80 leading-relaxed mb-6">
                        Three Days Off doesn't invent stillness :: it creates accessible structure for what
                        human beings have always known. This practice honors contemplative lineages spanning
                        millennia while addressing contemporary crisis.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-warm-white p-6 rounded-lg">
                          <h4 className="font-semibold text-sage-green mb-3">Legacy</h4>
                          <p className="text-sm text-deep-brown/80">
                            Ancient wisdom understood that pause creates capacity, that Mind/Body/Spirit
                            integration is the work, that collective practice amplifies individual clarity.
                            Contemporary neuroscience now measures what contemplative masters always knew.
                          </p>
                        </div>

                        <div className="bg-warm-white p-6 rounded-lg">
                          <h4 className="font-semibold text-sage-green mb-3">Lineage</h4>
                          <p className="text-sm text-deep-brown/80 mb-2">
                            This practice stands on:
                          </p>
                          <ul className="text-xs text-deep-brown/70 space-y-1">
                            <li>• Buddhist mindfulness (2,500 years)</li>
                            <li>• Contemplative Christianity (2,000+ years)</li>
                            <li>• Indigenous ceremony (millennia)</li>
                            <li>• Sufi practice (1,400+ years)</li>
                            <li>• Yogic tradition (5,000+ years)</li>
                            <li>• Sabbatical research (contemporary)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-warm-white p-6 rounded-lg mb-6">
                        <h4 className="font-semibold text-sage-green mb-3">Lenticular Vision</h4>
                        <p className="text-sm text-deep-brown/80 mb-3">
                          Three Days Off holds paradox without requiring resolution :: seeing multiple
                          truths simultaneously.
                        </p>
                        <div className="text-xs text-deep-brown/70 space-y-1">
                          <p>• <strong>Off AND On:</strong> Stillness and intensity are both valid paths</p>
                          <p>• <strong>Ancient AND Modern:</strong> Lineage wisdom validated by contemporary research</p>
                          <p>• <strong>Individual AND Collective:</strong> Personal practice creates communal capacity</p>
                          <p>• <strong>Pragmatic AND Sacred:</strong> Framework and mystery coexist</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link
                          href="/press/context"
                          className="inline-block bg-sage-green text-warm-cream px-8 py-3 rounded-full font-medium hover:bg-deep-brown transition-all"
                        >
                          Explore Full Context & Lineage Page →
                        </Link>
                        <p className="text-xs text-deep-brown/60 mt-3">
                          For spiritual, philosophical, and cultural coverage
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
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
                <h2 className="text-display mb-6">About the Creator</h2>
                <p className="text-xl text-deep-brown/80">
                  Kamau Zuberi Akabueze bridges preparation practices, creative work,
                  and research-backed tools to build human capacity.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2"
                >
                  <h3 className="text-heading mb-4">Kamau Zuberi Akabueze</h3>
                  <p className="text-deep-brown/80 mb-4 leading-relaxed">
                    Creator of <a href="https://thealienschool.com" target="_blank" rel="noopener noreferrer" className="text-sage-green hover:underline">TheAlienSchool.com</a> and founder of Three Days Off, Kamau brings a unique
                    perspective that bridges ancient contemplative wisdom with contemporary applications.
                    His work explores what he calls "consciousness technology" :: practical approaches to
                    awareness that honor both individual transformation and collective wellbeing.
                  </p>
                  <p className="text-deep-brown/80 mb-4 leading-relaxed">
                    Drawing inspiration from Stefan Sagmeister's sabbatical philosophy, Kamau developed 
                    Three Days Off as a "quantum leap manifestation" of retreat practice :: making the 
                    benefits of extended contemplative practice accessible within the constraints and 
                    rhythms of modern life.
                  </p>
                  <p className="text-deep-brown/80 mb-6 leading-relaxed">
                    His approach emphasizes what he calls "Reflectionary Guidance" :: creating conditions 
                    where individuals discover their own wisdom rather than receiving prescriptive 
                    instruction. This philosophy permeates all aspects of Three Days Off, honoring 
                    each person's unique path to stillness and insight.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Available for Interview Topics:</h4>
                    <ul className="text-sm text-deep-brown/70 space-y-1">
                      <li>• The science and philosophy of conscious pause</li>
                      <li>• Consciousness technology and contemplative innovation</li>
                      <li>• Creating accessible contemplative practices</li>
                      <li>• The relationship between rest and creativity</li>
                      <li>• Building global communities around contemplative practice</li>
                      <li>• The future of wellness and consciousness culture</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg"
                >
                  <h4 className="text-heading mb-4">Background</h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-sage-green">Education & Philosophy</h5>
                      <p className="text-deep-brown/70">
                        Synthesizes contemplative traditions with contemporary neuroscience and 
                        creative practice methodologies.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sage-green">
                        <a href="https://thealienschool.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          TheAlienSchool.com
                        </a>
                      </h5>
                      <p className="text-deep-brown/70">
                        Platform for creative guidance and consciousness development, emphasizing
                        "advocates for the alienated."
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sage-green">Creative Practice</h5>
                      <p className="text-deep-brown/70">
                        Integrates fatherhood, creativity, and contemplative practice as integrated 
                        approach to conscious living.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sage-green">Media Availability</h5>
                      <p className="text-deep-brown/70">
                        Available for interviews, podcasts, and speaking engagements about 
                        consciousness, creativity, and contemplative technology.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Kit */}
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
                <h2 className="text-display mb-6">Media Kit & Assets</h2>
                <p className="text-xl text-warm-cream/90 leading-relaxed">
                  High-quality assets designed to help media tell the Three Days Off story 
                  with visual excellence and editorial accuracy.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Visual Assets */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-cream/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-6">Visual Assets</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🎨</span>
                      <div>
                        <div className="font-semibold">Logo Package</div>
                        <div className="text-sm text-warm-cream/70">High-res logos, wordmarks, icons (PNG, SVG, EPS)</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📐</span>
                      <div>
                        <div className="font-semibold">Poster Series</div>
                        <div className="text-sm text-warm-cream/70">Bauhaus-inspired, Swiss style, contemplative designs</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📱</span>
                      <div>
                        <div className="font-semibold">Social Media Kit</div>
                        <div className="text-sm text-warm-cream/70">Instagram, Twitter, Facebook, LinkedIn formats</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📊</span>
                      <div>
                        <div className="font-semibold">Infographics</div>
                        <div className="text-sm text-warm-cream/70">Practice framework, global participation data</div>
                      </div>
                    </div>
                  </div>
                  <Link href="/press/media-center" className="mt-6 inline-block bg-sage-green text-warm-cream px-6 py-3 rounded-full font-medium hover:bg-warm-cream hover:text-deep-brown transition-all duration-300">
                    Access Media Center
                  </Link>
                </motion.div>

                {/* Written Materials */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-warm-cream/10 p-8 rounded-lg"
                >
                  <h3 className="text-heading mb-6">Written Materials</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📄</span>
                      <div>
                        <div className="font-semibold">Press Release</div>
                        <div className="text-sm text-warm-cream/70">Official announcement, key quotes, background</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">📝</span>
                      <div>
                        <div className="font-semibold">Fact Sheet</div>
                        <div className="text-sm text-warm-cream/70">Key statistics, timeline, participation info</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">💬</span>
                      <div>
                        <div className="font-semibold">Quote Library</div>
                        <div className="text-sm text-warm-cream/70">Pullable quotes from founder and participants</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sage-green">🔬</span>
                      <div>
                        <div className="font-semibold">Research Summary</div>
                        <div className="text-sm text-warm-cream/70">Scientific backing, study citations, expert opinions</div>
                      </div>
                    </div>
                  </div>
                  <Link href="/resources/library" className="mt-6 inline-block bg-sage-green text-warm-cream px-6 py-3 rounded-full font-medium hover:bg-warm-cream hover:text-deep-brown transition-all duration-300">
                    Access Content Library
                  </Link>
                </motion.div>
              </div>

              {/* Complete Media Kit */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 bg-warm-cream/10 p-8 rounded-lg text-center"
              >
                <h3 className="text-heading mb-4">Complete Media Kit</h3>
                <p className="text-warm-cream/80 mb-6 max-w-2xl mx-auto">
                  Everything in one comprehensive package: visual assets, written materials, 
                  background research, founder bio, high-res images, and usage guidelines.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/press/media-center" className="bg-warm-cream text-deep-brown px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300">
                    Access 3DO Media Center
                  </Link>
                  <a href="mailto:Creative@ThreeDaysOff.com" className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300">
                    Request Custom Assets
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Angles */}
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
                <h2 className="text-display mb-6">Story Angles for Media</h2>
                <p className="text-xl text-deep-brown/80">
                  Multiple perspectives on how Three Days Off intersects with current cultural conversations.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Wellness & Health */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Wellness & Mental Health</h3>
                  <p className="text-deep-brown/80 mb-4">
                    How structured retreat practices address burnout, anxiety, and digital overwhelm. 
                    Features scientific research on the neurological benefits of conscious pause.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <strong>Angles:</strong> Post-pandemic wellness, mental health solutions, 
                    digital wellness, preventive healthcare
                  </div>
                </motion.div>

                {/* Labor & Work Culture */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Work Culture & Labor</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Three Days Off launches during Labor Day weekend, questioning our relationship 
                    with productivity, rest, and what constitutes meaningful work in 2025.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <strong>Angles:</strong> Future of work, sabbatical culture, productivity paradox, 
                    remote work wellness
                  </div>
                </motion.div>

                {/* Technology & Digital Life */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Technology & Consciousness</h3>
                  <p className="text-deep-brown/80 mb-4">
                    How technology can support rather than hinder contemplative practice. 
                    Three Days Off uses digital platforms to create global contemplative community.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <strong>Angles:</strong> Conscious technology use, digital minimalism, 
                    tech-wellness integration, online communities
                  </div>
                </motion.div>

                {/* Social Movement */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Collective Action & Community</h3>
                  <p className="text-deep-brown/80 mb-4">
                    What happens when thousands practice stillness simultaneously? Exploring 
                    contemplative practice as form of social action and community building.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <strong>Angles:</strong> Collective consciousness, social movements, 
                    community organizing, global coordination
                  </div>
                </motion.div>

                {/* Creativity & Innovation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Creativity & Innovation</h3>
                  <p className="text-deep-brown/80 mb-4">
                    How conscious pause enhances creative capacity. Features Stefan Sagmeister's 
                    sabbatical influence and the relationship between rest and innovation.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <strong>Angles:</strong> Creative process, innovation methodology, 
                    artist practices, design thinking
                  </div>
                </motion.div>

                {/* Cultural Shift */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-6 rounded-lg"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Cultural Evolution</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Three Days Off represents broader cultural shift toward valuing being alongside 
                    doing, stillness alongside action, presence alongside productivity.
                  </p>
                  <div className="text-sm text-deep-brown/70">
                    <strong>Angles:</strong> Cultural trends, generational values,
                    lifestyle evolution, consciousness culture
                  </div>
                </motion.div>

                {/* Spiritual Lineage */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="bg-sage-green/10 p-6 rounded-lg md:col-span-2"
                >
                  <h3 className="text-heading mb-4 text-sage-green">Spiritual Lineage & Cultural Context</h3>
                  <p className="text-deep-brown/80 mb-4">
                    Three Days Off as contemporary expression of cross-cultural contemplative wisdom ::
                    How modern practice honors ancient teachers. Buddhist mindfulness, contemplative Christianity,
                    Indigenous ceremony, Sufi practice, yogic tradition. Accessible structure for timeless technology.
                    Cultural preservation through respectful adaptation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-deep-brown/70">
                      <strong>Angles:</strong> Religion sections, spirituality coverage, interfaith publications,
                      cultural anthropology, philosophy, consciousness studies
                    </div>
                    <Link
                      href="/press/context"
                      className="text-sage-green hover:underline font-medium text-sm whitespace-nowrap ml-4"
                    >
                      Full context →
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display mb-8">
                  Ready to Tell the Story?
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-deep-brown/80">
                  We're here to support your coverage of Three Days Off with additional information, 
                  custom assets, interview coordination, and background research. Our goal is to help 
                  you tell this story with accuracy, depth, and respect for the contemplative approach 
                  that underlies everything we do.
                </p>
                <div className="bg-warm-white p-8 rounded-lg mb-8">
                  <h3 className="text-heading mb-4">Media Support Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold text-sage-green mb-2">General Press Inquiries</h4>
                      <p className="text-deep-brown/80 mb-2">Press@ThreeDaysOff.com</p>
                      <p className="text-sm text-deep-brown/60">Response within 24 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-green mb-2">Interview Requests</h4>
                      <p className="text-deep-brown/80 mb-2">Interviews@ThreeDaysOff.com</p>
                      <p className="text-sm text-deep-brown/60">Founder availability coordination</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-green mb-2">Research & Data</h4>
                      <p className="text-deep-brown/80 mb-2">Research@ThreeDaysOff.com</p>
                      <p className="text-sm text-deep-brown/60">Scientific studies, statistics, expert sources</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-green mb-2">Custom Assets</h4>
                      <p className="text-deep-brown/80 mb-2">Creative@ThreeDaysOff.com</p>
                      <p className="text-sm text-deep-brown/60">Specialized visuals, custom graphics</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="mailto:Press@ThreeDaysOff.com" 
                    className="bg-sage-green text-warm-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-deep-brown transition-all duration-300"
                  >
                    Contact Press Team
                  </a>
                  <button 
                    className="border-2 border-sage-green text-sage-green px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                  >
                    Schedule Interview
                  </button>
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
