'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Wave Particle - Each person breathing creates a wave particle
interface WaveParticle {
  id: string
  type: 'individual' | 'venue'
  x: number // 0-100 (percentage across wave)
  amplitude: number // Height of wave influence
  timestamp: Date
  location?: string
  isNew: boolean
}

// Main Breathing Network Component - Wave Visualization
const BreathingNetwork: React.FC = () => {
  const [participants, setParticipants] = useState<WaveParticle[]>([])
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'exhale'>('exhale')
  const [hoveredParticle, setHoveredParticle] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  // Initialize
  useEffect(() => {
    setMounted(true)
    startBreathingRhythm()

    // Supabase Realtime Presence Integration
    let presenceChannel: any = null
    const sessionId = crypto.randomUUID()

    const connectToSupabase = async () => {
      const { supabase, isSupabaseConfigured } = await import('@/lib/supabase')

      if (!isSupabaseConfigured()) {
        console.log('🌊 Running in development mode - using local state only')
        return
      }

      presenceChannel = supabase.channel('breathing-room', {
        config: {
          presence: {
            key: sessionId
          }
        }
      })

      // Listen for presence changes
      presenceChannel.on('presence', { event: 'sync' }, () => {
        const state = presenceChannel.presenceState()
        const onlineUsers = Object.values(state).flat()

        // Convert presence data to WaveParticle format
        const waveParticles: WaveParticle[] = onlineUsers.map((user: any) => ({
          id: user.id,
          type: user.type || 'individual',
          x: user.x,
          amplitude: user.amplitude,
          timestamp: new Date(user.joined_at),
          location: user.location,
          isNew: false
        }))

        setParticipants(waveParticles)
      })

      // Subscribe and track presence
      presenceChannel.subscribe(async (status: string) => {
        if (status === 'SUBSCRIBED') {
          console.log('🌊 Connected to breathing room')

          // Join the wave with random position
          await presenceChannel.track({
            id: sessionId,
            type: 'individual',
            x: Math.random() * 100,
            amplitude: 0.5 + Math.random() * 0.5,
            joined_at: new Date().toISOString(),
            location: undefined // Optional: could add geolocation
          })
        }
      })
    }

    connectToSupabase()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (presenceChannel) {
        presenceChannel.unsubscribe()
      }
    }
  }, [])

  // Breathing Rhythm: 4s inhale, 6s exhale
  const startBreathingRhythm = () => {
    const breatheCycle = () => {
      setBreathingPhase('exhale')
      setTimeout(() => {
        setBreathingPhase('inhale')
        setTimeout(breatheCycle, 4000)
      }, 6000)
    }
    breatheCycle()
  }

  // Wave Drawing - Canvas-based for smooth performance
  useEffect(() => {
    if (!mounted || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    let time = 0
    const breathingSpeed = breathingPhase === 'inhale' ? 0.4 : 0.6
    const waveAmplitude = breathingPhase === 'inhale' ? 30 : 20

    const drawWave = () => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw base wave (represents the collective breathing)
      ctx.beginPath()
      ctx.strokeStyle = participants.length === 0 ? 'rgba(148, 163, 184, 0.2)' : 'rgba(148, 163, 184, 0.4)'
      ctx.lineWidth = 2

      const baseY = height / 2

      for (let x = 0; x < width; x++) {
        const frequency = 0.02 + (participants.length * 0.001) // More people = faster wave
        const y = baseY + Math.sin(x * frequency + time * breathingSpeed) * waveAmplitude

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Draw participant waves (each person adds to the wave)
      participants.forEach((particle, index) => {
        const particleX = (particle.x / 100) * width
        const particleAmplitude = particle.amplitude * (particle.type === 'venue' ? 1.5 : 1)

        ctx.beginPath()
        ctx.strokeStyle = particle.type === 'venue'
          ? 'rgba(100, 116, 139, 0.3)'
          : 'rgba(148, 163, 184, 0.2)'
        ctx.lineWidth = particle.type === 'venue' ? 2 : 1

        for (let x = 0; x < width; x++) {
          const distance = Math.abs(x - particleX) / width
          const influence = Math.exp(-distance * 5) // Wave influence falls off with distance
          const frequency = 0.02
          const phaseShift = index * 0.5
          const y = baseY +
            Math.sin(x * frequency + time * breathingSpeed + phaseShift) *
            waveAmplitude *
            influence *
            particleAmplitude

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()

        // Draw particle dot on the wave
        const particleFrequency = 0.02
        const particleY = baseY +
          Math.sin(particleX * particleFrequency + time * breathingSpeed) *
          waveAmplitude

        ctx.beginPath()
        ctx.fillStyle = particle.isNew
          ? 'rgba(148, 163, 184, 1)'
          : (particle.type === 'venue' ? 'rgba(100, 116, 139, 0.8)' : 'rgba(148, 163, 184, 0.6)')
        ctx.arc(particleX, particleY, particle.type === 'venue' ? 6 : 4, 0, Math.PI * 2)
        ctx.fill()

        // Pulse for new participants
        if (particle.isNew) {
          ctx.beginPath()
          ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)'
          ctx.lineWidth = 2
          ctx.arc(particleX, particleY, 12 + Math.sin(time * 2) * 4, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      time += 0.05
      animationRef.current = requestAnimationFrame(drawWave)
    }

    drawWave()

    return () => {
      window.removeEventListener('resize', updateSize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [participants, breathingPhase, mounted])

  // Add new participant (for testing - will be replaced with Supabase)
  const addParticipant = (type: 'individual' | 'venue' = 'individual') => {
    const newParticle: WaveParticle = {
      id: `particle-${Date.now()}-${Math.random()}`,
      type,
      x: Math.random() * 100, // Random position across wave
      amplitude: 0.5 + Math.random() * 0.5, // Random amplitude
      timestamp: new Date(),
      location: undefined, // TODO: Get from Supabase user data
      isNew: true
    }

    setParticipants(prev => [...prev, newParticle])

    // Remove "new" status after 4 seconds
    setTimeout(() => {
      setParticipants(prev =>
        prev.map(p => p.id === newParticle.id ? { ...p, isNew: false } : p)
      )
    }, 4000)
  }

  // Time ago helper
  const timeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    return `${hours}h ago`
  }

  if (!mounted) {
    return <div className="h-64 w-full bg-warm-cream/20 rounded-lg animate-pulse" />
  }

  const totalCount = participants.length
  const lastJoined = participants.length > 0
    ? participants[participants.length - 1]
    : null

  return (
    <div className="relative w-full h-64 lg:h-80 overflow-hidden rounded-lg bg-gradient-to-br from-warm-cream/10 to-sage-green/10">

      {/* Wave Visualization Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Empty State */}
      <AnimatePresence>
        {totalCount === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{
                scale: breathingPhase === 'inhale' ? 1.05 : 1,
              }}
              transition={{
                duration: breathingPhase === 'inhale' ? 4 : 6,
                ease: "easeInOut"
              }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-light text-deep-brown/30 mb-4">
                0
              </div>
              <p className="text-deep-brown/60 mb-6 text-lg">
                No one is preparing right now
              </p>
              <p className="text-sage-green font-medium">
                Be the first to breathe
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Participant Count */}
      {totalCount > 0 && (
        <div className="absolute top-4 left-4 pointer-events-none">
          <motion.div
            animate={{
              scale: breathingPhase === 'inhale' ? 1.02 : 1,
            }}
            transition={{
              duration: breathingPhase === 'inhale' ? 4 : 6,
              ease: "easeInOut"
            }}
            className="text-4xl md:text-5xl font-light text-deep-brown"
          >
            {totalCount}
          </motion.div>
          <div className="text-sm text-deep-brown/70 font-medium">
            {totalCount === 1 ? 'person' : 'people'} preparing now
          </div>

          {lastJoined && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-sage-green mt-2"
            >
              Someone joined {timeAgo(lastJoined.timestamp)}
            </motion.div>
          )}
        </div>
      )}

      {/* Breathing Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.div
          animate={{
            scale: breathingPhase === 'inhale' ? 1.05 : 1
          }}
          transition={{
            duration: breathingPhase === 'inhale' ? 4 : 6,
            ease: "easeInOut"
          }}
          className="flex items-center gap-3 bg-warm-cream/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
        >
          <motion.div
            animate={{
              scale: breathingPhase === 'inhale' ? 1.5 : 1
            }}
            transition={{
              duration: breathingPhase === 'inhale' ? 4 : 6,
              ease: "easeInOut"
            }}
            className="w-3 h-3 rounded-full bg-sage-green"
          />
          <span className="text-sm font-medium text-deep-brown">
            {breathingPhase === 'inhale' ? 'Breathe in (4s)' : 'Breathe out (6s)'}
          </span>
        </motion.div>
      </div>

      {/* Live Indicator */}
      <div className="absolute top-4 right-4 pointer-events-none">
        <div className="flex items-center gap-2 text-xs text-deep-brown/50">
          <motion.span
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ●
          </motion.span>
          Live
        </div>
      </div>

      {/* Development Testing Buttons */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-4 right-4 space-x-2 pointer-events-auto">
          <button
            onClick={() => addParticipant('individual')}
            className="px-3 py-1.5 text-xs bg-sage-green text-warm-cream rounded-full hover:bg-sage-green/80 transition-colors"
          >
            + Person
          </button>
          <button
            onClick={() => addParticipant('venue')}
            className="px-3 py-1.5 text-xs bg-deep-brown text-warm-cream rounded-full hover:bg-deep-brown/80 transition-colors"
          >
            + Venue
          </button>
          {participants.length > 0 && (
            <button
              onClick={() => setParticipants([])}
              className="px-3 py-1.5 text-xs bg-warm-cream text-deep-brown rounded-full hover:bg-warm-cream/80 transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      )}

      {/* Wave Momentum Message */}
      {totalCount >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="text-center">
            <p className="text-sage-green/80 font-medium text-lg">
              The wave is building
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

// Simple Join Button Component
interface JoinButtonProps {
  onJoin: () => void
  children: React.ReactNode
  className?: string
}

const JoinBreathingButton: React.FC<JoinButtonProps> = ({
  onJoin,
  children,
  className = ''
}) => {
  const [breathing, setBreathing] = useState(false)
  const [breathCount, setBreathCount] = useState(0)

  const handleClick = () => {
    if (!breathing) {
      setBreathing(true)

      // Three breath cycles (30 seconds)
      const breathingTimer = setInterval(() => {
        setBreathCount(prev => {
          if (prev >= 2) {
            clearInterval(breathingTimer)
            setBreathing(false)
            setBreathCount(0)
            onJoin()
            return 0
          }
          return prev + 1
        })
      }, 10000) // 10s per cycle
    }
  }

  if (breathing) {
    return (
      <motion.div
        className={`p-6 bg-warm-cream/90 rounded-lg border border-sage-green/20 ${className}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center">
          <p className="text-sage-green mb-4 font-medium">
            Take three breaths before joining
          </p>
          <div className="text-deep-brown/70 mb-6">
            Breath {breathCount + 1} of 3
          </div>

          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-green/20 flex items-center justify-center"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-sage-green/40"
              animate={{
                scale: [1, 0.6, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <p className="text-xs text-deep-brown/50">
            4 seconds in • 6 seconds out
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`btn-primary ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export default BreathingNetwork
export { JoinBreathingButton }
