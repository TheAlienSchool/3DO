'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Network Layout Constants - Balanced geometric distribution
const NETWORK_GEOMETRY = {
  GOLDEN_RATIO: 1.618033988749,
  TRIANGLE_HEIGHT: 0.866025403784, // √3/2 for equilateral triangle
  PHI_INVERSE: 0.618033988749, // 1/φ for balanced proportions
  VERTEX_ANGLES: {
    TOP: 0,
    BOTTOM_LEFT: 120,
    BOTTOM_RIGHT: 240,
  }
} as const

// Triangle Vertices - Visual structure for network layout
const TRIANGLE_VERTICES = [
  { x: 50, y: 25 }, // Top vertex
  { x: 25, y: 65 }, // Bottom left
  { x: 75, y: 65 }, // Bottom right
] as const

// Network Node Interface
interface NetworkNode {
  id: string
  type: 'individual' | 'venue'
  x: number
  y: number
  position: 'triangle_edge' | 'vertex' | 'center'
  edgeIndex?: number // Which triangle edge (0, 1, 2)
  edgeRatio?: number // Position along edge using golden ratio
  timestamp: Date
  connections: string[]
  pulseActive: boolean
  engagementLevel: number // Practice engagement metric
}

// Network Connection Interface
interface NetworkConnection {
  from: string
  to: string
  strength: number
}

// Main Breathing Network Component
const BreathingNetwork: React.FC = () => {
  const [nodes, setNodes] = useState<NetworkNode[]>([])
  const [connections, setConnections] = useState<NetworkConnection[]>([])
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'exhale'>('exhale')
  const [totalParticipants, setTotalParticipants] = useState(1247)
  const [mounted, setMounted] = useState(false)
  const networkRef = useRef<SVGSVGElement>(null)

  // Initialize component and breathing rhythm
  useEffect(() => {
    setMounted(true)
    initializeNetwork()
    startBreathingRhythm()
  }, [])

  // Network Positioning - Balanced geometric distribution
  const generateNetworkPosition = (index: number, totalNodes: number, isVenue: boolean = false): Partial<NetworkNode> => {
    // Venues are placed at triangle vertices (anchor points)
    if (isVenue) {
      const vertexIndex = index % 3
      const vertex = TRIANGLE_VERTICES[vertexIndex]
      return {
        x: vertex.x,
        y: vertex.y,
        position: 'vertex',
        engagementLevel: 1.0 // Venues anchor the practice community
      }
    }

    // Individuals are positioned along triangle edges using golden ratio spacing
    const edge = index % 3 // Which edge of the triangle
    const positionOnEdge = (index / 3) % 1 // Position along the edge

    // Use golden ratio for balanced spacing
    const goldenPosition = (positionOnEdge * NETWORK_GEOMETRY.PHI_INVERSE) % 1

    const startVertex = TRIANGLE_VERTICES[edge]
    const endVertex = TRIANGLE_VERTICES[(edge + 1) % 3]

    return {
      x: startVertex.x + (endVertex.x - startVertex.x) * goldenPosition,
      y: startVertex.y + (endVertex.y - startVertex.y) * goldenPosition,
      position: 'triangle_edge',
      edgeIndex: edge,
      edgeRatio: goldenPosition,
      engagementLevel: 0.7 + (Math.sin(goldenPosition * Math.PI) * 0.3) // Varied engagement levels
    }
  }

  // Initialize network with balanced geometric positioning
  const initializeNetwork = () => {
    const initialNodes: NetworkNode[] = []
    const initialConnections: NetworkConnection[] = []

    // Calculate optimal node distribution for visual clarity
    const maxVisibleNodes = 21 // Balanced distribution (7 per triangle edge)
    const visibleParticipants = Math.min(totalParticipants, maxVisibleNodes)

    // Generate nodes with balanced positioning
    for (let i = 0; i < visibleParticipants; i++) {
      const isVenue = i < 3 || (i > 6 && i % 7 === 0) // 3 vertex venues + periodic venues
      const networkPosition = generateNetworkPosition(i, visibleParticipants, isVenue)

      const node: NetworkNode = {
        id: `node-${i}`,
        type: isVenue ? 'venue' : 'individual',
        x: networkPosition.x!,
        y: networkPosition.y!,
        position: networkPosition.position!,
        edgeIndex: networkPosition.edgeIndex,
        edgeRatio: networkPosition.edgeRatio,
        timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
        connections: [],
        pulseActive: false,
        engagementLevel: networkPosition.engagementLevel!
      }
      initialNodes.push(node)
    }

    // Generate network connections based on geometric relationships
    initialNodes.forEach((node, index) => {
      const connectionCount = node.type === 'venue' ? 6 : 2 // Venues connect to more community members
      
      for (let i = 0; i < connectionCount; i++) {
        // Network connection algorithm: connect based on geometric proximity
        let targetIndex: number

        if (node.position === 'vertex') {
          // Vertices connect along their adjacent edges
          const edgeOffset = i < 3 ? i * 2 + 1 : (i - 3) * 2 + 2
          targetIndex = (index + edgeOffset) % initialNodes.length
        } else {
          // Edge nodes connect to adjacent nodes and nearest vertex
          const goldenOffset = Math.floor(i * NETWORK_GEOMETRY.GOLDEN_RATIO) + 1
          targetIndex = (index + goldenOffset) % initialNodes.length
        }

        if (targetIndex !== index && targetIndex < initialNodes.length) {
          const targetNode = initialNodes[targetIndex]

          // Connection strength based on geometric distance
          const geometricDistance = Math.sqrt(
            Math.pow(node.x - targetNode.x, 2) + Math.pow(node.y - targetNode.y, 2)
          )
          const proximityStrength = 1 - (geometricDistance / 50) // Normalize to 0-1
          const connectionStrength = Math.max(0.3, proximityStrength * NETWORK_GEOMETRY.PHI_INVERSE)

          const connection: NetworkConnection = {
            from: node.id,
            to: targetNode.id,
            strength: connectionStrength
          }
          initialConnections.push(connection)
        }
      }
    })

    setNodes(initialNodes)
    setConnections(initialConnections)
  }

  // Start breathing rhythm (4s inhale, 6s exhale)
  const startBreathingRhythm = () => {
    const breatheCycle = () => {
      // Exhale phase (6 seconds)
      setBreathingPhase('exhale')
      setTimeout(() => {
        // Inhale phase (4 seconds)
        setBreathingPhase('inhale')
        setTimeout(breatheCycle, 4000)
      }, 6000)
    }
    breatheCycle()
  }

  // Add new participant with network positioning and visual pulse
  const addNewParticipant = (type: 'individual' | 'venue' = 'individual') => {
    setNodes(prev => {
      const currentNodeCount = prev.length
      const networkPosition = generateNetworkPosition(currentNodeCount, currentNodeCount + 1, type === 'venue')

      const newNode: NetworkNode = {
        id: `node-${Date.now()}`,
        type,
        x: networkPosition.x!,
        y: networkPosition.y!,
        position: networkPosition.position!,
        edgeIndex: networkPosition.edgeIndex,
        edgeRatio: networkPosition.edgeRatio,
        timestamp: new Date(),
        connections: [],
        pulseActive: true,
        engagementLevel: networkPosition.engagementLevel!
      }

      return [...prev, newNode]
    })

    setTotalParticipants(prev => prev + (type === 'venue' ? 15 : 1))

    // Visual pulse effect for new additions
    setTimeout(() => {
      setNodes(prev => prev.map(node =>
        node.id.includes(Date.now().toString()) ? { ...node, pulseActive: false } : node
      ))
    }, 4000)
  }

  // Breathing animation scale calculation
  const breathingScale = breathingPhase === 'inhale' ? 1.08 : 1.0

  // Node size calculation based on type
  const getNodeSize = (node: NetworkNode) => {
    return node.type === 'venue' ? 8 : 4
  }

  // Node color based on type and breathing phase
  const getNodeColor = (node: NetworkNode) => {
    if (node.type === 'venue') {
      return breathingPhase === 'inhale' ? '#94a3b8' : '#64748b' // Sage variations
    }
    return breathingPhase === 'inhale' ? '#e2e8f0' : '#cbd5e1' // Warm cream variations
  }

  if (!mounted) {
    return <div className="h-64 w-full bg-warm-cream/20 rounded-lg animate-pulse" />
  }

  return (
    <div className="relative w-full h-64 lg:h-80 overflow-hidden rounded-lg bg-gradient-to-br from-warm-cream/10 to-sage-green/10">
      {/* Practice Network Visualization */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: breathingScale,
          transition: {
            duration: breathingPhase === 'inhale' ? 4 : 6,
            ease: "easeInOut"
          }
        }}
      >
        <svg
          ref={networkRef}
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Triangle Framework - Visual structure */}
          <motion.g
            className="triangle-framework"
            opacity={0.2}
            animate={{
              opacity: breathingPhase === 'inhale' ? 0.3 : 0.2,
              transition: { duration: breathingPhase === 'inhale' ? 4 : 6, ease: "easeInOut" }
            }}
          >
            {/* Triangle Edges */}
            <path
              d={`M ${TRIANGLE_VERTICES[0].x} ${TRIANGLE_VERTICES[0].y}
                  L ${TRIANGLE_VERTICES[1].x} ${TRIANGLE_VERTICES[1].y}
                  L ${TRIANGLE_VERTICES[2].x} ${TRIANGLE_VERTICES[2].y}
                  Z`}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-sage-green"
            />

            {/* Golden Ratio Guidelines - Balanced spacing markers */}
            {TRIANGLE_VERTICES.map((vertex, index) => {
              const nextVertex = TRIANGLE_VERTICES[(index + 1) % 3]
              const goldenPoint = {
                x: vertex.x + (nextVertex.x - vertex.x) * NETWORK_GEOMETRY.PHI_INVERSE,
                y: vertex.y + (nextVertex.y - vertex.y) * NETWORK_GEOMETRY.PHI_INVERSE
              }
              return (
                <circle
                  key={`golden-${index}`}
                  cx={goldenPoint.x}
                  cy={goldenPoint.y}
                  r="0.5"
                  fill="currentColor"
                  className="text-sage-green opacity-40"
                />
              )
            })}
          </motion.g>
          {/* Connection Lines */}
          <g className="connections" opacity={0.3}>
            {connections.map((connection, index) => {
              const fromNode = nodes.find(n => n.id === connection.from)
              const toNode = nodes.find(n => n.id === connection.to)
              if (!fromNode || !toNode) return null

              return (
                <motion.line
                  key={`connection-${index}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="currentColor"
                  strokeWidth={connection.strength * 0.2}
                  className="text-sage-green"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: index * 0.05 }}
                />
              )
            })}
          </g>

          {/* Network Nodes */}
          <g className="nodes">
            <AnimatePresence>
              {nodes.map((node) => (
                <motion.g key={node.id}>
                  {/* Network Node Circle */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={getNodeSize(node)}
                    fill={getNodeColor(node)}
                    className="drop-shadow-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 0.7 + (node.engagementLevel * 0.3), // Opacity reflects practice engagement
                      r: node.pulseActive ? getNodeSize(node) * 1.5 : getNodeSize(node)
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      r: { duration: node.pulseActive ? 2 : 0.3 },
                      opacity: { duration: 1.2 }
                    }}
                  />

                  {/* Vertex Position Indicator */}
                  {node.position === 'vertex' && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={getNodeSize(node) + 2}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-sage-green"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 0.4,
                        strokeDasharray: breathingPhase === 'inhale' ? '0 8' : '2 6'
                      }}
                      transition={{ 
                        duration: breathingPhase === 'inhale' ? 4 : 6,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  
                  {/* Pulse Effect for New Nodes */}
                  {node.pulseActive && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={getNodeSize(node)}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-sage-green"
                      initial={{ r: getNodeSize(node), opacity: 1 }}
                      animate={{ 
                        r: getNodeSize(node) * 3,
                        opacity: 0
                      }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  )}

                  {/* Venue Node Indicator */}
                  {node.type === 'venue' && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={getNodeSize(node) * 0.6}
                      fill="currentColor"
                      className="text-warm-cream"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    />
                  )}
                </motion.g>
              ))}
            </AnimatePresence>
          </g>
        </svg>
      </motion.div>

      {/* Network Information Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Total Participants Display */}
        <div className="absolute top-4 left-4">
          <motion.div
            className="text-2xl lg:text-3xl font-bold text-deep-brown"
            animate={{ 
              scale: breathingPhase === 'inhale' ? 1.02 : 1,
              transition: { duration: breathingPhase === 'inhale' ? 4 : 6, ease: "easeInOut" }
            }}
          >
            {totalParticipants.toLocaleString()}
          </motion.div>
          <div className="text-sm text-deep-brown/70 font-medium">
            Breathing Together
          </div>
        </div>

        {/* Breathing Phase Indicator */}
        <div className="absolute top-4 right-4">
          <motion.div
            className="text-sm text-deep-brown/60 font-medium"
            animate={{ 
              opacity: breathingPhase === 'inhale' ? 0.8 : 0.4,
              transition: { duration: 1 }
            }}
          >
            {breathingPhase === 'inhale' ? '→ inhale' : '← exhale'}
          </motion.div>
        </div>

        {/* Network Status */}
        <div className="absolute bottom-4 left-4">
          <div className="text-xs text-deep-brown/50">
            <motion.span
              animate={{ 
                opacity: [0.5, 1, 0.5],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              ●
            </motion.span>
            {' '}Live Community
          </div>
        </div>
      </div>

      {/* Development Testing - Remove in Production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-4 right-4 space-x-2 pointer-events-auto">
          <button
            onClick={() => addNewParticipant('individual')}
            className="px-2 py-1 text-xs bg-sage-green text-warm-cream rounded"
          >
            +Individual
          </button>
          <button
            onClick={() => addNewParticipant('venue')}
            className="px-2 py-1 text-xs bg-deep-brown text-warm-cream rounded"
          >
            +Venue
          </button>
        </div>
      )}
    </div>
  )
}

// Practice Commitment Button Component - Intentional engagement flow
interface PracticeButtonProps {
  onCommit: () => void
  children: React.ReactNode
  type: 'individual' | 'venue'
  className?: string
}

const ContemplativeCommitButton: React.FC<PracticeButtonProps> = ({ 
  onCommit, 
  children, 
  type,
  className = '' 
}) => {
  const [commitmentPhase, setCommitmentPhase] = useState<'ready' | 'breathing' | 'preview' | 'committing'>('ready')
  const [breathCount, setBreathCount] = useState(0)
  const [breathing, setBreathing] = useState(false)

  const handleInitialClick = () => {
    setCommitmentPhase('breathing')
    setBreathing(true)
    
    // Require 3 breath cycles (30 seconds total)
    const breathingTimer = setInterval(() => {
      setBreathCount(prev => {
        if (prev >= 2) { // 0, 1, 2 = 3 breaths
          clearInterval(breathingTimer)
          setBreathing(false)
          setCommitmentPhase('preview')
          return 0
        }
        return prev + 1
      })
    }, 10000) // 10 seconds per breath cycle (4s inhale + 6s exhale)
  }

  const handleFinalCommit = () => {
    setCommitmentPhase('committing')
    
    // Brief integration moment
    setTimeout(() => {
      onCommit()
      setCommitmentPhase('ready')
      setBreathCount(0)
    }, 2000)
  }

  if (commitmentPhase === 'ready') {
    return (
      <motion.button
        onClick={handleInitialClick}
        className={`btn-primary group relative overflow-hidden ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="absolute inset-0 bg-sage-green/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    )
  }

  if (commitmentPhase === 'breathing') {
    return (
      <motion.div 
        className={`p-6 bg-warm-cream/90 rounded-lg border border-sage-green/20 ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <p className="text-sage-green mb-4 font-medium">
            Take three breaths before joining the practice
          </p>
          <div className="text-deep-brown/70 mb-6">
            Breath {breathCount + 1} of 3
          </div>
          
          {/* Breathing Visualization */}
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-green/20 flex items-center justify-center"
            animate={{
              scale: breathing ? [1, 1.3, 1] : 1,
            }}
            transition={{
              duration: 10, // Full breath cycle
              repeat: breathing ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-sage-green/40"
              animate={{
                scale: breathing ? [1, 0.6, 1] : 1,
              }}
              transition={{
                duration: 10,
                repeat: breathing ? Infinity : 0,
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

  if (commitmentPhase === 'preview') {
    return (
      <motion.div 
        className={`p-6 bg-warm-cream/90 rounded-lg border border-sage-green/20 ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <p className="text-deep-brown mb-4 font-medium">
            Your place in the practice network:
          </p>

          {/* Network Position Preview */}
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Mini triangle */}
              <path
                d="M 50 20 L 25 65 L 75 65 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-sage-green opacity-60"
              />
              {/* User's position */}
              <circle
                cx={type === 'venue' ? 50 : 40}
                cy={type === 'venue' ? 20 : 50}
                r={type === 'venue' ? 4 : 2}
                fill="currentColor"
                className={type === 'venue' ? 'text-deep-brown' : 'text-sage-green'}
              />
            </svg>
          </div>

          <p className="text-sm text-deep-brown/70 mb-6">
            {type === 'venue'
              ? 'You will anchor the community as a practice space'
              : 'You will join thousands preparing together'
            }
          </p>

          <motion.button
            onClick={handleFinalCommit}
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join the Practice
          </motion.button>
        </div>
      </motion.div>
    )
  }

  if (commitmentPhase === 'committing') {
    return (
      <motion.div 
        className={`p-6 bg-sage-green/10 rounded-lg border border-sage-green/20 ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage-green/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear" }}
          />
          <p className="text-sage-green font-medium">
            Joining the practice network...
          </p>
        </div>
      </motion.div>
    )
  }

  return null
}

export default BreathingNetwork
export { ContemplativeCommitButton }

