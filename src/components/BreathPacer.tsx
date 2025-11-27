'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BreathPacerProps {
  isActive?: boolean
  duration?: number // in seconds for full cycle
  className?: string
}

const BreathPacer = ({ 
  isActive = true, 
  duration = 4, 
  className = "" 
}: BreathPacerProps) => {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'pause'>('inhale')
  const [cycleProgress, setCycleProgress] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const phaseDuration = duration * 1000 / 4 // Each phase is 1/4 of total duration
    let currentPhaseIndex = 0
    const phases = ['inhale', 'hold', 'exhale', 'pause'] as const

    const interval = setInterval(() => {
      currentPhaseIndex = (currentPhaseIndex + 1) % 4
      setPhase(phases[currentPhaseIndex])
    }, phaseDuration)

    // Update progress for smooth animation
    const progressInterval = setInterval(() => {
      setCycleProgress(prev => (prev + 0.01) % 1)
    }, (duration * 1000) / 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [isActive, duration])

  const getScaleForPhase = (currentPhase: string) => {
    switch (currentPhase) {
      case 'inhale': return 1.3
      case 'hold': return 1.3
      case 'exhale': return 0.8
      case 'pause': return 0.8
      default: return 1
    }
  }

  const getOpacityForPhase = (currentPhase: string) => {
    switch (currentPhase) {
      case 'inhale': return 0.9
      case 'hold': return 1
      case 'exhale': return 0.6
      case 'pause': return 0.5
      default: return 0.7
    }
  }

  const getInstructionText = (currentPhase: string) => {
    switch (currentPhase) {
      case 'inhale': return 'Breathe in'
      case 'hold': return 'Hold'
      case 'exhale': return 'Breathe out'
      case 'pause': return 'Pause'
      default: return 'Breathe'
    }
  }

  if (!isActive) {
    return (
      <div className={`flex flex-col items-center space-y-4 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-soft-gray opacity-50" />
        <p className="text-sm text-soft-gray">Breath pacer at rest</p>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-sage-green/30"
          style={{ width: '80px', height: '80px' }}
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            opacity: [0.3, 0.6, 0.6, 0.3, 0.3]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main breathing circle */}
        <motion.div
          className="w-16 h-16 rounded-full bg-sage-green relative z-10"
          animate={{
            scale: getScaleForPhase(phase),
            opacity: getOpacityForPhase(phase)
          }}
          transition={{
            duration: duration / 4,
            ease: "easeInOut"
          }}
        >
          {/* Inner highlight */}
          <div className="absolute inset-2 rounded-full bg-warm-white/20" />
        </motion.div>
      </div>

      {/* Instruction text */}
      <motion.p 
        className="text-sm font-medium text-deep-brown text-center min-h-[20px]"
        key={phase}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {getInstructionText(phase)}
      </motion.p>

      {/* Progress indicator */}
      <div className="w-32 h-1 bg-soft-gray rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-sage-green rounded-full origin-left"
          animate={{
            scaleX: [0, 1, 1, 0]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Screen reader instructions */}
      <div className="sr-only" aria-live="polite">
        Current breathing phase: {getInstructionText(phase)}. 
        Breathing exercise in progress with {duration} second cycles.
      </div>
    </div>
  )
}

export default BreathPacer

