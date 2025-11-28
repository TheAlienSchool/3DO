'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function BoundaryTemplatesGuidePost() {
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
              The Art of Loving Boundaries
            </h1>
            <p className="text-xl text-deep-brown/70 mb-4">
              Templates for Compassionate Communication During Preparation Practice
            </p>
            <div className="text-sm text-deep-brown/60">
              Three Days Off Community • August 2025 • Practice Guidance
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
              "Boundaries are how love takes care of love. When we create space for preparation practice, we create space for our most generous selves to emerge."
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Three Days Off requires gentle yet clear communication with the people in your life who may wonder where you've gone. Rather than disappearing without explanation or feeling guilty about taking preparation time, loving boundaries allow you to honor both your practice and your relationships.
            </p>

            <h2 className="text-heading mt-12 mb-6">The Structure of Healthy Boundaries</h2>

            <p className="mb-6">
              Just as Three Days Off employs mathematical principles of balance and proportion, healthy boundaries follow their own structural framework. They create containers that hold both individual autonomy and relational connection, allowing space for personal practice while maintaining loving availability for genuine needs.
            </p>

            <div className="bg-warm-white p-6 rounded-lg my-8">
              <h3 className="text-lg font-semibold mb-4">Boundary Principles:</h3>
              <ul className="space-y-2">
                <li>• <strong>Clarity over Perfection:</strong> Simple, honest communication trumps elaborate explanations</li>
                <li>• <strong>Kindness over Defensiveness:</strong> Lead with love rather than justification</li>
                <li>• <strong>Consistency over Rigidity:</strong> Maintain boundaries with flexible implementation</li>
                <li>• <strong>Presence over Absence:</strong> Quality connection during available times</li>
              </ul>
            </div>

            <h2 className="text-heading mt-12 mb-6">Mad-Libs Style Boundary Templates</h2>

            <p className="mb-6">
              These templates provide starting points for communicating your preparation practice needs across different relationship types. Customize them with your own language and circumstances.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">For Family Members</h3>

            <div className="bg-sage-green/10 p-6 rounded-lg my-6">
              <p className="mb-4"><strong>Basic Template:</strong></p>
              <p className="italic mb-4">
                "I'm taking [TIME PERIOD] for [PREPARATION PRACTICE DESCRIPTION] starting [DATE]. During this time, I'll be [AVAILABILITY LEVEL] but will respond to [EMERGENCY CRITERIA]. I'm doing this to [PERSONAL BENEFIT] so I can [RELATIONSHIP BENEFIT]. I love you and appreciate your support of this practice."
              </p>

              <p className="mb-2"><strong>Example:</strong></p>
              <p className="text-sm">
                "I'm taking three days for intentional pause and reflection starting August 30th. During this time, I'll be minimally available by text but will respond to genuine emergencies or urgent family needs. I'm doing this to restore my energy and presence so I can be more patient and creative with our family time. I love you and appreciate your support of this practice."
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">For Romantic Partners</h3>

            <div className="bg-sage-green/10 p-6 rounded-lg my-6">
              <p className="mb-4"><strong>Intimate Template:</strong></p>
              <p className="italic mb-4">
                "I'm planning [CONTEMPLATIVE PRACTICE] for [TIME PERIOD] and would love your thoughts on how to make this work for both of us. During this time, I'm hoping to [PERSONAL GOALS] while still being available for [SHARED PRIORITIES]. How can we structure this so you feel supported and I can get the restoration I need?"
              </p>
              
              <p className="mb-2"><strong>Example:</strong></p>
              <p className="text-sm">
                "I'm planning a three-day preparation pause for Labor Day weekend and would love your thoughts on how to make this work for both of us. During this time, I'm hoping to reduce digital distractions and spend time in reflection while still being available for our Saturday morning coffee ritual and any plans you're excited about. How can we structure this so you feel supported and I can get the restoration I need?"
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">For Work Colleagues</h3>

            <div className="bg-sage-green/10 p-6 rounded-lg my-6">
              <p className="mb-4"><strong>Professional Template:</strong></p>
              <p className="italic mb-4">
                "I'll be participating in [PRACTICE DESCRIPTION] during [TIME PERIOD] as part of my personal wellness routine. I'll have limited email access but will monitor for [URGENT CRITERIA]. All regular work will be [STATUS/PLAN]. Please reach me at [EMERGENCY CONTACT METHOD] for anything that requires immediate attention."
              </p>
              
              <p className="mb-2"><strong>Example:</strong></p>
              <p className="text-sm">
                "I'll be participating in a digital wellness practice during Labor Day weekend as part of my personal wellness routine. I'll have limited email access but will monitor for client emergencies or system issues. All regular work will be completed by Friday or delegated appropriately. Please reach me by text for anything that requires immediate attention."
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">For Friends</h3>

            <div className="bg-sage-green/10 p-6 rounded-lg my-6">
              <p className="mb-4"><strong>Friendship Template:</strong></p>
              <p className="italic mb-4">
                "Hey friend! I'm taking [TIME PERIOD] for [CONTEMPLATIVE PRACTICE] and will be [AVAILABILITY LEVEL]. I'm excited to [PRACTICE BENEFITS] and will be back to [NORMAL INTERACTION] on [DATE]. Thanks for understanding, and I'd love to [FUTURE CONNECTION PLAN] when I'm back!"
              </p>
              
              <p className="mb-2"><strong>Example:</strong></p>
              <p className="text-sm">
                "Hey friend! I'm taking the long weekend for some preparation space and will be pretty quiet on social media and texting. I'm excited to reset my energy and reflect on some life stuff, and will be back to normal chatting on Tuesday. Thanks for understanding, and I'd love to grab coffee next week to catch up when I'm back!"
              </p>
            </div>

            <h2 className="text-heading mt-12 mb-6">Special Circumstances</h2>

            <p className="mb-6">
              Some situations require additional sensitivity and creativity in boundary communication. These templates address common challenging scenarios.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">For Caregiving Responsibilities</h3>
            <p className="mb-6">
              When caring for children, elderly parents, or others who depend on you, boundaries become collaborative rather than individual. The goal is modified practice rather than abandoned practice.
            </p>

            <blockquote className="border-l-4 border-sage-green pl-6 italic text-lg my-8 text-deep-brown/80">
              "I told my kids we were having 'quiet weekend' where we'd do gentle activities but skip the usual scheduled chaos. They ended up loving the slower pace, and I got preparation time while still being present for them."
              <footer className="text-base text-deep-brown/60 mt-2">— Community Participant</footer>
            </blockquote>

            <h3 className="text-lg font-semibold mt-8 mb-4">For Financial or Job Insecurity</h3>
            <p className="mb-6">
              When economic circumstances make complete unavailability impossible, boundaries become about quality of attention rather than quantity of time offline.
            </p>

            <div className="bg-warm-white p-6 rounded-lg my-6">
              <h4 className="font-semibold mb-3">Modified Practice Options:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Designated preparation hours within regular schedule</li>
                <li>• Social media boundaries while maintaining work communication</li>
                <li>• Mindful engagement with necessary activities</li>
                <li>• Contemplative approach to required work or caregiving</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">For Skeptical or Unsupportive Relationships</h3>
            <p className="mb-6">
              When people in your life question or criticize preparation practices, focus on benefits they'll recognize rather than philosophical explanations they may resist.
            </p>

            <div className="bg-sage-green/10 p-6 rounded-lg my-6">
              <p className="mb-4"><strong>Benefits-Focused Template:</strong></p>
              <p className="italic mb-4">
                "I'm taking some time this weekend to [PRACTICAL BENEFIT] so I can [RELATIONSHIP BENEFIT]. I find that when I [CONTEMPLATIVE PRACTICE], I'm better able to [SPECIFIC IMPROVEMENT]. I'll be [AVAILABILITY LEVEL] and back to normal on [DATE]."
              </p>
              
              <p className="mb-2"><strong>Example:</strong></p>
              <p className="text-sm">
                "I'm taking some time this weekend to reduce my stress levels so I can be more patient and present with everyone. I find that when I step back from constant connectivity, I'm better able to focus and solve problems creatively. I'll be reachable for important things and back to normal communication on Tuesday."
              </p>
            </div>

            <h2 className="text-heading mt-12 mb-6">Maintaining Boundaries with Love</h2>

            <p className="mb-6">
              Setting boundaries is only the beginning. Maintaining them with kindness and flexibility requires ongoing attention and sometimes difficult conversations.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">When People Push Back</h3>
            <p className="mb-6">
              Some people may react to your boundaries with guilt, anger, or manipulation. Remember that their discomfort with your boundaries often reflects their own relationship to rest and self-care rather than actual harm caused by your practice.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">Emergency Protocol</h3>
            <p className="mb-6">
              True emergencies require immediate availability, but many "urgent" requests are actually preferences dressed up as needs. Create clear criteria for what constitutes genuine emergency worthy of interrupting preparation practice.
            </p>

            <div className="bg-warm-white p-6 rounded-lg my-8">
              <h4 className="font-semibold mb-3">Emergency Criteria Examples:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Medical situations requiring immediate attention</li>
                <li>• Safety concerns for children or vulnerable people</li>
                <li>• Work crises that could impact job security or client safety</li>
                <li>• Death, serious illness, or major life transitions in close relationships</li>
              </ul>
            </div>

            <h2 className="text-heading mt-12 mb-6">Integration and Follow-Up</h2>

            <p className="mb-6">
              After your preparation practice period, follow up with the people who supported your boundaries. Express gratitude, share appropriate benefits you experienced, and discuss how to integrate preparation practices into ongoing life rhythm.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">Post-Practice Communication</h3>
            <p className="mb-6">
              Thank people for respecting your boundaries and share how the practice served your ability to show up for relationships and responsibilities. This builds understanding and support for future preparation practices.
            </p>

            <blockquote className="border-l-4 border-sage-green pl-6 italic text-lg my-8 text-deep-brown/80">
              "After my three days off, I was so much more present for family dinner conversations. My partner noticed immediately and has been incredibly supportive of regular preparation time ever since."
              <footer className="text-base text-deep-brown/60 mt-2">— Community Participant</footer>
            </blockquote>

            <h2 className="text-heading mt-12 mb-6">Building Long-Term Boundary Skills</h2>

            <p className="mb-6">
              Three Days Off provides practice in boundary-setting that serves preparation development throughout the year. The skills you develop communicating about this practice transfer to other areas of life where loving boundaries serve both individual well-being and relationship health.
            </p>

            <p className="mb-6">
              Each time you practice clear, kind boundary-setting, you strengthen your capacity for authentic relationship and sustainable self-care. You model for others that taking care of oneself is a form of love rather than selfishness.
            </p>

            <div className="bg-deep-brown text-warm-cream p-8 rounded-lg my-12">
              <h3 className="text-lg font-semibold mb-4 text-center">Boundary Reminder</h3>
              <p className="text-center">
                "My preparation practice serves my capacity to love and contribute. When I honor my need for restoration and renewal, I honor the relationships and responsibilities that matter most to me."
              </p>
            </div>

            <hr className="my-12 border-sage-green/30" />

            <div className="text-sm text-deep-brown/60">
              <p>
                <strong>About Boundary Templates:</strong> These templates serve as starting points for your own boundary communication. Adapt the language to match your relationships, circumstances, and personal communication style. The goal is clarity and kindness rather than perfect wording.
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
              <h3 className="text-heading mb-4">Practice Loving Boundaries</h3>
              <p className="text-lg mb-6 text-deep-brown/80">
                Three Days Off provides the perfect opportunity to practice clear, compassionate boundary communication with the people in your life.
              </p>
              <Link 
                href="/pledge"
                className="btn-primary mr-4"
              >
                Practice Boundaries
              </Link>
              <Link 
                href="/preparing"
                className="btn-secondary"
              >
                Learn About Preparing
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
              <Link href="/blog/creating-sanctuary-spaces" className="block p-6 bg-warm-white rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2">Creating Practice Spaces</h4>
                <p className="text-deep-brown/70">Designing physical and emotional containers that support preparation practice.</p>
              </Link>
              <Link href="/blog/first-time-practitioner" className="block p-6 bg-warm-white rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-2">Beginning Your Practice</h4>
                <p className="text-deep-brown/70">Guidance for establishing preparation practice within existing life circumstances.</p>
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
