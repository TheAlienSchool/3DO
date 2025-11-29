'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LanternLighthouseAnimation() {
  const [stage, setStage] = useState(0) // 0: Lantern, 1: Lighthouse, 2: Network

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 3)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const stages = [
    {
      icon: '🏮',
      title: 'THE LANTERN',
      subtitle: 'Your Practice',
      description: 'Personal integration creates clarity',
      color: 'from-contemplative-gold/30 to-sage-green/30'
    },
    {
      icon: '🗼',
      title: 'THE LIGHTHOUSE',
      subtitle: 'Your Presence',
      description: 'Clarity creates orientation for others',
      color: 'from-sage-green/30 to-intention-purple/30'
    },
    {
      icon: '🌊',
      title: 'THE NETWORK',
      subtitle: 'Collective Awakening',
      description: 'Thousands practicing together create coherence',
      color: 'from-intention-purple/30 to-success-harmony/30'
    }
  ]

  const currentStage = stages[stage]

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`relative bg-gradient-to-br ${currentStage.color} p-12 rounded-2xl text-center overflow-hidden`}
        >
          {/* Animated background ripples */}
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-0 bg-sage-green/20 rounded-full blur-xl"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-8xl mb-6"
            >
              {currentStage.icon}
            </motion.div>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-semibold text-deep-brown mb-2"
            >
              {currentStage.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-sage-green font-medium mb-4 italic"
            >
              {currentStage.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-deep-brown/80 max-w-md mx-auto"
            >
              {currentStage.description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Stage indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {stages.map((_, index) => (
          <button
            key={index}
            onClick={() => setStage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === stage
                ? 'w-8 bg-sage-green'
                : 'w-2 bg-sage-green/30 hover:bg-sage-green/50'
            }`}
            aria-label={`Go to stage ${index + 1}`}
          />
        ))}
      </div>

      {/* Descriptive text below */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-sm text-deep-brown/60 mt-6 italic"
      >
        Your practice transforms from personal clarity to collective capacity
      </motion.p>
    </div>
  )
}
