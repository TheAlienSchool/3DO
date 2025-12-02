'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function VolunteerPage() {
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
                  VOLUNTEER WITH<br />
                  THREE DAYS OFF
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Help build the infrastructure for a global preparation practice — your skills create capacity for thousands
                </p>
                <p className="text-lg text-sage-green font-medium max-w-2xl mx-auto">
                  This practice costs nothing and serves everyone. Your contribution—whether a few hours or ongoing support—helps
                  make preparation practice accessible to all who need it.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities Grid */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6 three-dots">Current Opportunities</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                These areas need volunteer support to serve the growing Three Days Off community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content Creation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-heading mb-4">Content Creation & Writing</h3>
                <p className="text-deep-brown/80 mb-6 leading-relaxed">
                  Help develop resources that guide practitioners through preparation practice.
                </p>
                <ul className="space-y-3 text-deep-brown/80 mb-6">
                  <li>• <strong>Blog Posts:</strong> Field notes from practitioners, research summaries, practice guides</li>
                  <li>• <strong>Media Center Content:</strong> Press releases, fact sheets, story angles for journalists</li>
                  <li>• <strong>Venue Resources:</strong> Programming templates, facilitator guides, space preparation checklists</li>
                  <li>• <strong>Boundary Templates:</strong> Context-specific communication scripts for various life situations</li>
                  <li>• <strong>Research Summaries:</strong> Digestible explanations of neuroscience, psychology, contemplative studies</li>
                </ul>
                <div className="bg-warm-white p-4 rounded">
                  <p className="text-sm text-deep-brown/70 mb-2"><strong>Skills Needed:</strong></p>
                  <p className="text-sm text-deep-brown/70">Clear writing, research synthesis, contemplative practice understanding, empathy for diverse experiences</p>
                </div>
              </motion.div>

              {/* Design & Visual */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-contemplative-gold/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-heading mb-4">Design & Visual Assets</h3>
                <p className="text-deep-brown/80 mb-6 leading-relaxed">
                  Create visual resources that make the practice accessible and inviting.
                </p>
                <ul className="space-y-3 text-deep-brown/80 mb-6">
                  <li>• <strong>Space Assets:</strong> Downloadable posters, signage templates, room setup diagrams for venues</li>
                  <li>• <strong>Social Media Graphics:</strong> Share-worthy visuals for practice promotion and education</li>
                  <li>• <strong>Infographics:</strong> Visual explanations of the framework, research findings, global participation</li>
                  <li>• <strong>Print Materials:</strong> Flyers, brochures, bookmark reminders for analog distribution</li>
                  <li>• <strong>Iconography:</strong> Consistent visual language for Mind/Body/Spirit integration concepts</li>
                </ul>
                <div className="bg-warm-white p-4 rounded">
                  <p className="text-sm text-deep-brown/70 mb-2"><strong>Skills Needed:</strong></p>
                  <p className="text-sm text-deep-brown/70">Graphic design, brand consistency, accessibility awareness, print & digital formats</p>
                </div>
              </motion.div>

              {/* Development & Tech */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-intention-purple/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-heading mb-4">Development & Technical</h3>
                <p className="text-deep-brown/80 mb-6 leading-relaxed">
                  Build and maintain the digital infrastructure supporting global practice.
                </p>
                <ul className="space-y-3 text-deep-brown/80 mb-6">
                  <li>• <strong>Content Management:</strong> Organize and deploy Media Center, Content Library, Asset Libraries</li>
                  <li>• <strong>Database Integration:</strong> Connect Supabase for pledges, venues, real-time participation tracking</li>
                  <li>• <strong>Email Systems:</strong> Implement Resend for welcome messages, practice reminders, venue approvals</li>
                  <li>• <strong>Accessibility Testing:</strong> Ensure site works for screen readers, keyboard navigation, diverse abilities</li>
                  <li>• <strong>Performance Optimization:</strong> Monitoring, analytics, page speed, mobile responsiveness</li>
                </ul>
                <div className="bg-warm-white p-4 rounded">
                  <p className="text-sm text-deep-brown/70 mb-2"><strong>Skills Needed:</strong></p>
                  <p className="text-sm text-deep-brown/70">Next.js, React, TypeScript, Supabase, web accessibility standards, responsive design</p>
                </div>
              </motion.div>

              {/* Community & Operations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-success-harmony/10 p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-heading mb-4">Community & Operations</h3>
                <p className="text-deep-brown/80 mb-6 leading-relaxed">
                  Support the human infrastructure that holds this global practice.
                </p>
                <ul className="space-y-3 text-deep-brown/80 mb-6">
                  <li>• <strong>Venue Onboarding:</strong> Review applications, guide setup, provide ongoing support to practice spaces</li>
                  <li>• <strong>Practitioner Support:</strong> Answer questions, troubleshoot challenges, share resources</li>
                  <li>• <strong>Field Notes Collection:</strong> Interview practitioners, document experiences, curate community wisdom</li>
                  <li>• <strong>Social Media Presence:</strong> Share updates, respond to inquiries, build community connections</li>
                  <li>• <strong>Translation:</strong> Make resources accessible in multiple languages for global reach</li>
                </ul>
                <div className="bg-warm-white p-4 rounded">
                  <p className="text-sm text-deep-brown/70 mb-2"><strong>Skills Needed:</strong></p>
                  <p className="text-sm text-deep-brown/70">Communication, empathy, cultural sensitivity, organizational skills, language fluency</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specific Asset Needs */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display mb-6 three-dots">Assets Currently in Development</h2>
              <p className="text-xl text-deep-brown/80 max-w-3xl mx-auto">
                These specific resources need volunteer creation, deployment, and ongoing maintenance
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              <details className="bg-warm-white p-6 rounded-lg group hover:shadow-md transition-all">
                <summary className="cursor-pointer font-semibold text-deep-brown text-lg flex items-center justify-between">
                  <span>📰 Media Center (Press Resources)</span>
                  <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-4 text-deep-brown/80 leading-relaxed space-y-3">
                  <p><strong>Needed:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Press kit with high-resolution images, logos, brand guidelines</li>
                    <li>Fact sheets for journalists (one-page summaries, statistics, quotes)</li>
                    <li>Story angle suggestions (wellness, productivity, cultural trends, neuroscience)</li>
                    <li>Interview templates and talking points</li>
                    <li>Media coverage tracker and press release archive</li>
                  </ul>
                </div>
              </details>

              <details className="bg-warm-white p-6 rounded-lg group hover:shadow-md transition-all">
                <summary className="cursor-pointer font-semibold text-deep-brown text-lg flex items-center justify-between">
                  <span>📚 Content Library (Educational Resources)</span>
                  <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-4 text-deep-brown/80 leading-relaxed space-y-3">
                  <p><strong>Needed:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Research paper summaries (neuroscience, psychology, workplace wellness)</li>
                    <li>Practice guides for different contexts (parents, workers, caregivers, students)</li>
                    <li>Video content (practice demonstrations, testimonials, explainer animations)</li>
                    <li>Audio resources (guided breathwork, practice reminders, reflection prompts)</li>
                    <li>FAQ database addressing common questions and concerns</li>
                  </ul>
                </div>
              </details>

              <details className="bg-warm-white p-6 rounded-lg group hover:shadow-md transition-all">
                <summary className="cursor-pointer font-semibold text-deep-brown text-lg flex items-center justify-between">
                  <span>🏛️ Space Assets (Venue Resources)</span>
                  <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-4 text-deep-brown/80 leading-relaxed space-y-3">
                  <p><strong>Needed:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Downloadable posters and signage (multiple sizes, print-ready PDFs)</li>
                    <li>Room setup diagrams for various venue types</li>
                    <li>Welcome packets for participants arriving at venues</li>
                    <li>Accessibility checklists (ensuring spaces serve all practitioners)</li>
                    <li>Venue branding templates (maintaining 3DO aesthetic while allowing customization)</li>
                  </ul>
                </div>
              </details>

              <details className="bg-warm-white p-6 rounded-lg group hover:shadow-md transition-all">
                <summary className="cursor-pointer font-semibold text-deep-brown text-lg flex items-center justify-between">
                  <span>📅 Programming Kit (Facilitator Resources)</span>
                  <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-4 text-deep-brown/80 leading-relaxed space-y-3">
                  <p><strong>Needed:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sample schedules for 3-day, single-day, and drop-in sessions</li>
                    <li>Facilitation scripts for group openings and closings</li>
                    <li>Integration activities (journaling prompts, movement sequences, sharing circles)</li>
                    <li>Trauma-informed guidance for holding contemplative space</li>
                    <li>Troubleshooting guides for common facilitation challenges</li>
                  </ul>
                </div>
              </details>

              <details className="bg-warm-white p-6 rounded-lg group hover:shadow-md transition-all">
                <summary className="cursor-pointer font-semibold text-deep-brown text-lg flex items-center justify-between">
                  <span>🎁 Digital Assets (Shareable Content)</span>
                  <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-4 text-deep-brown/80 leading-relaxed space-y-3">
                  <p><strong>Needed:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Social media templates (Instagram, Facebook, Twitter, LinkedIn)</li>
                    <li>Email signature graphics and website badges</li>
                    <li>Zoom backgrounds for virtual practice sessions</li>
                    <li>Calendar reminders and countdown graphics</li>
                    <li>Share-worthy quotes and research findings formatted for social</li>
                  </ul>
                </div>
              </details>

              <details className="bg-warm-white p-6 rounded-lg group hover:shadow-md transition-all">
                <summary className="cursor-pointer font-semibold text-deep-brown text-lg flex items-center justify-between">
                  <span>🌐 Community Resources (Ongoing Support)</span>
                  <span className="text-sage-green text-2xl group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-4 text-deep-brown/80 leading-relaxed space-y-3">
                  <p><strong>Needed:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Discussion forum moderation and community guidelines</li>
                    <li>Practitioner directory (optional listing for those seeking practice partners)</li>
                    <li>Regional coordinator network (supporting local practice clusters)</li>
                    <li>Post-practice integration resources (maintaining momentum after September 5-7)</li>
                    <li>Ongoing research tracking (documenting practice effects, participant experiences)</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="bg-deep-brown text-warm-cream">
          <div className="container-contemplative breathing-space">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-display mb-6">Ready to Contribute?</h2>
                <p className="text-xl text-warm-cream/90 mb-8">
                  Your time, skills, and care help make preparation practice accessible to thousands
                </p>
                <p className="text-lg text-warm-cream/80 mb-12 leading-relaxed">
                  Whether you can offer a few hours or ongoing support, whether you're experienced or just beginning—there's
                  a place for your contribution. This practice belongs to everyone who needs it.
                </p>

                <div className="bg-warm-cream/10 p-8 rounded-lg mb-8 text-left">
                  <h3 className="text-heading mb-4">Connect with Kamau</h3>
                  <p className="text-warm-cream/90 mb-6 leading-relaxed">
                    Three Days Off is created and stewarded by <strong>Kamau Zuberi Akabueze</strong>. If you're interested
                    in volunteering your time and skills, reach out via LinkedIn to discuss how your contribution can serve
                    the practice.
                  </p>
                  <a
                    href="http://linkedin.com/in/thekzeea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-warm-cream text-deep-brown px-8 py-4 rounded-full font-medium tracking-wide hover:bg-sage-green hover:text-warm-cream transition-all duration-300"
                  >
                    <span className="text-xl">💼</span>
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>

                <div className="text-sm text-warm-cream/70 italic">
                  <p className="mb-2">When you reach out, please mention:</p>
                  <ul className="list-disc list-inside space-y-1 text-left max-w-xl mx-auto">
                    <li>Which opportunity area interests you</li>
                    <li>What skills or experience you bring</li>
                    <li>How much time you're able to contribute (one-time, ongoing, flexible)</li>
                    <li>Any questions about the work or the practice</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gratitude */}
        <section className="bg-sage-green/5">
          <div className="container-contemplative breathing-space">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-6">🙏</div>
                <h2 className="text-display mb-6">Thank You</h2>
                <p className="text-xl text-deep-brown/80 leading-relaxed">
                  Your willingness to serve this practice—to give your time, skills, and care to support others in their
                  preparation—is itself a practice. You are part of the lantern becoming a lighthouse.
                </p>
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
