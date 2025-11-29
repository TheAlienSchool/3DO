'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function VenueRegisterPage() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    website: '',
    venueType: '',
    capacity: '',
    quietHours: '',
    experience: '',
    programmingInterest: '',
    accessibility: '',
    motivation: '',
    questions: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Venue application submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-contemplative">
        <Navigation />
        
        <main id="main-content" className="pt-20">
          <section className="relative overflow-hidden">
            <div className="container-contemplative relative z-10">
              <div className="breathing-space text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="w-20 h-20 bg-success-harmony rounded-full mx-auto mb-8 flex items-center justify-center">
                    <span className="text-warm-cream font-bold text-2xl">✓</span>
                  </div>
                  
                  <h1 className="text-hero mb-8">
                    Welcome to the Sanctuary Network
                  </h1>
                  
                  <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 leading-relaxed">
                    Your application has been received with deep gratitude. We'll be in touch within 
                    48 hours to begin the conversation about creating contemplative space together.
                  </p>

                  <div className="bg-sage-green/10 p-8 rounded-lg mb-8">
                    <h2 className="text-heading mb-4">What Happens Next</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="w-12 h-12 bg-contemplative-gold rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-warm-cream font-bold">1</span>
                        </div>
                        <h3 className="font-semibold mb-2">Review & Connect</h3>
                        <p className="text-sm text-deep-brown/70">
                          Our team reviews your application and reaches out for initial conversation
                        </p>
                      </div>
                      
                      <div>
                        <div className="w-12 h-12 bg-intention-purple rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-warm-cream font-bold">2</span>
                        </div>
                        <h3 className="font-semibold mb-2">Explore Together</h3>
                        <p className="text-sm text-deep-brown/70">
                          We discuss programming options and ensure Three Days Off aligns with your community
                        </p>
                      </div>
                      
                      <div>
                        <div className="w-12 h-12 bg-success-harmony rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-warm-cream font-bold">3</span>
                        </div>
                        <h3 className="font-semibold mb-2">Access Resources</h3>
                        <p className="text-sm text-deep-brown/70">
                          Receive complete venue toolkit and join our community of sanctuary spaces
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link href="/venues" className="btn-secondary px-6 py-3 mr-4">
                      Explore Media Center
                    </Link>
                    <Link href="/" className="text-sage-green hover:underline">
                      Return to Festival
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

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
                  Become a Sanctuary Space
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-brown/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join a growing network of venues creating space for collective contemplative practice. 
                  Your application helps us understand how Three Days Off can serve your community.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-warm-white">
          <div className="container-contemplative breathing-space">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-display mb-6">Venue Partnership Application</h2>
                <p className="text-xl text-deep-brown/80">
                  Help us understand your space, community, and vision for contemplative programming.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-sage-green/10 p-8 rounded-lg"
              >
                <div className="space-y-8">
                  {/* Organization Information */}
                  <div>
                    <h3 className="text-heading mb-6 text-sage-green">Organization Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="organizationName" className="block text-sm font-medium text-deep-brown mb-2">
                          Organization/Venue Name <span className="text-sage-green">*</span>
                        </label>
                        <input
                          type="text"
                          id="organizationName"
                          name="organizationName"
                          required
                          value={formData.organizationName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="contactPerson" className="block text-sm font-medium text-deep-brown mb-2">
                          Primary Contact Person <span className="text-sage-green">*</span>
                        </label>
                        <input
                          type="text"
                          id="contactPerson"
                          name="contactPerson"
                          required
                          value={formData.contactPerson}
                          onChange={handleInputChange}
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
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-deep-brown mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-deep-brown mb-2">
                          Website URL
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://"
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Information */}
                  <div>
                    <h3 className="text-heading mb-6 text-sage-green">Location Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-deep-brown mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Street address (will not be published)"
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-deep-brown mb-2">
                          City/Region <span className="text-sage-green">*</span>
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Venue Details */}
                  <div>
                    <h3 className="text-heading mb-6 text-sage-green">Venue Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="venueType" className="block text-sm font-medium text-deep-brown mb-2">
                          Venue Type <span className="text-sage-green">*</span>
                        </label>
                        <select
                          id="venueType"
                          name="venueType"
                          required
                          value={formData.venueType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        >
                          <option value="">Select venue type</option>
                          <option value="meditation-center">Meditation Center</option>
                          <option value="yoga-studio">Yoga Studio</option>
                          <option value="library">Library</option>
                          <option value="community-center">Community Center</option>
                          <option value="bookstore">Bookstore</option>
                          <option value="art-gallery">Art Gallery</option>
                          <option value="cafe">Café</option>
                          <option value="coworking-space">Coworking Space</option>
                          <option value="wellness-center">Wellness Center</option>
                          <option value="educational-institution">Educational Institution</option>
                          <option value="religious-space">Religious/Spiritual Space</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="capacity" className="block text-sm font-medium text-deep-brown mb-2">
                          Contemplative Space Capacity
                        </label>
                        <input
                          type="text"
                          id="capacity"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleInputChange}
                          placeholder="e.g., 20 people comfortably"
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="quietHours" className="block text-sm font-medium text-deep-brown mb-2">
                          Proposed Three Days Off Hours
                        </label>
                        <input
                          type="text"
                          id="quietHours"
                          name="quietHours"
                          value={formData.quietHours}
                          onChange={handleInputChange}
                          placeholder="e.g., Daily 9am-5pm, or specific session times"
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Programming Interest */}
                  <div>
                    <h3 className="text-heading mb-6 text-sage-green">Programming Approach</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="programmingInterest" className="block text-sm font-medium text-deep-brown mb-2">
                          Which programming approach interests you most?
                        </label>
                        <select
                          id="programmingInterest"
                          name="programmingInterest"
                          value={formData.programmingInterest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-full border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent"
                        >
                          <option value="">Select programming style</option>
                          <option value="guided-sessions">Guided group sessions with facilitator</option>
                          <option value="open-practice">Open practice space (individual contemplation in community)</option>
                          <option value="hybrid">Hybrid approach (combination of guided and open practice)</option>
                          <option value="flexible">Flexible - want to discuss options</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-deep-brown mb-2">
                          Your Community's Experience with Contemplative Practice
                        </label>
                        <textarea
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="Describe your community's familiarity with meditation, mindfulness, or similar practices"
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent resize-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="accessibility" className="block text-sm font-medium text-deep-brown mb-2">
                          Accessibility Features
                        </label>
                        <textarea
                          id="accessibility"
                          name="accessibility"
                          value={formData.accessibility}
                          onChange={handleInputChange}
                          placeholder="Physical accessibility, sensory considerations, inclusive practices"
                          rows={2}
                          className="w-full px-4 py-3 rounded-lg border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Motivation and Questions */}
                  <div>
                    <h3 className="text-heading mb-6 text-sage-green">Vision & Questions</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="motivation" className="block text-sm font-medium text-deep-brown mb-2">
                          Why does Three Days Off resonate with your organization?
                        </label>
                        <textarea
                          id="motivation"
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleInputChange}
                          placeholder="What draws you to creating contemplative space? How does this align with your mission?"
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent resize-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="questions" className="block text-sm font-medium text-deep-brown mb-2">
                          Questions or Special Considerations
                        </label>
                        <textarea
                          id="questions"
                          name="questions"
                          value={formData.questions}
                          onChange={handleInputChange}
                          placeholder="Anything specific you'd like to discuss or clarify about venue partnership"
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-sage-green/30 focus:outline-none focus:ring-2 focus:ring-contemplative-gold focus:border-transparent resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Privacy Note */}
                  <div className="bg-warm-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Partnership Commitment</h4>
                    <p className="text-sm text-deep-brown/70 mb-4">
                      Three Days Off venue partnerships are offered at no cost as a service to contemplative 
                      community building. We provide complete resources and ongoing support to ensure your 
                      programming serves both individual transformation and collective wellbeing.
                    </p>
                    <p className="text-xs text-deep-brown/60">
                      <strong>Privacy:</strong> Your contact information is used solely for venue partnership 
                      coordination. We never share venue data and you can request removal at any time.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-contemplative py-4 font-medium tracking-wide"
                  >
                    Submit Venue Application
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Support Information */}
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
                  Questions About Venue Partnership?
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-deep-brown/80">
                  We're here to support your vision for creating contemplative community space. 
                  Every venue brings unique gifts to the global festival of stillness.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-warm-white p-6 rounded-lg text-left">
                    <h3 className="font-semibold mb-3">Programming Support</h3>
                    <p className="text-sm text-deep-brown/70 mb-4">
                      Get guidance on session planning, community engagement, and contemplative facilitation
                    </p>
                    <a 
                      href="mailto:Venues@ThreeDaysOff.com?subject=Programming Support Request"
                      className="text-sage-green hover:underline text-sm font-medium"
                    >
                      Venues@ThreeDaysOff.com
                    </a>
                  </div>

                  <div className="bg-warm-white p-6 rounded-lg text-left">
                    <h3 className="font-semibold mb-3">Resource Access</h3>
                    <p className="text-sm text-deep-brown/70 mb-4">
                      Questions about toolkit materials, signage, or promotional resources
                    </p>
                    <Link href="/venues" className="text-sage-green hover:underline text-sm font-medium">
                      Explore Media Center →
                    </Link>
                  </div>
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
              <Link href="/blog" className="nav-link">Blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
