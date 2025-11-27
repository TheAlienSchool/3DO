'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Sacred Geometry Constants - Consciousness-Serving Technology Principles
const SACRED_GEOMETRY = {
  GOLDEN_RATIO: 1.618033988749,
  TRIANGLE_HEIGHT: 0.866025403784, // √3/2 for perfect equilateral
  PHI_INVERSE: 0.618033988749, // 1/φ for harmonic proportions
  SACRED_ANGLES: {
    VERTEX_1: 0, // Top vertex
    VERTEX_2: 120, // Bottom left (120° rotation)
    VERTEX_3: 240, // Bottom right (240° rotation)
  }
} as const

// Sacred Triangle Vertices - Pre-calculated for Performance Excellence
const SACRED_TRIANGLE_VERTICES = [
  { x: 50, y: 25, label: 'Awareness' }, // Top vertex - Mind
  { x: 25, y: 65, label: 'Embodiment' }, // Bottom left - Body  
  { x: 75, y: 65, label: 'Spirit' }, // Bottom right - Spirit
] as const

// Enhanced Network Node Interface with Sacred Positioning
interface NetworkNode {
  id: string
  type: 'individual' | 'venue'
  x: number
  y: number
  sacredPosition: 'triangle_edge' | 'vertex' | 'center'
  edgeIndex?: number // Which triangle edge (0, 1, 2)
  edgeRatio?: number // Position along edge using golden ratio
  timestamp: Date
  connections: string[]
  pulseActive: boolean
  contemplativeDepth: number // Engagement quality metric
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

  // Sacred Geometry Positioning Functions - Consciousness-Serving Architecture
  const generateSacredPosition = (index: number, totalNodes: number, isVenue: boolean = false): Partial<NetworkNode> => {
    // Venues are placed at sacred triangle vertices
    if (isVenue) {
      const vertexIndex = index % 3
      const vertex = SACRED_TRIANGLE_VERTICES[vertexIndex]
      return {
        x: vertex.x,
        y: vertex.y,
        sacredPosition: 'vertex',
        contemplativeDepth: 1.0 // Venues anchor the community
      }
    }
    
    // Individuals are positioned along triangle edges using golden ratio
    const edge = index % 3 // Which edge of the triangle
    const positionOnEdge = (index / 3) % 1 // Position along the edge
    
    // Use golden ratio for harmonic spacing
    const goldenPosition = (positionOnEdge * SACRED_GEOMETRY.PHI_INVERSE) % 1
    
    const startVertex = SACRED_TRIANGLE_VERTICES[edge]
    const endVertex = SACRED_TRIANGLE_VERTICES[(edge + 1) % 3]
    
    return {
      x: startVertex.x + (endVertex.x - startVertex.x) * goldenPosition,
      y: startVertex.y + (endVertex.y - startVertex.y) * goldenPosition,
      sacredPosition: 'triangle_edge',
      edgeIndex: edge,
      edgeRatio: goldenPosition,
      contemplativeDepth: 0.7 + (Math.sin(goldenPosition * Math.PI) * 0.3) // Harmonic depth variation
    }
  }

  // Initialize network with sacred geometry positioning
  const initializeNetwork = () => {
    const initialNodes: NetworkNode[] = []
    const initialConnections: NetworkConnection[] = []
    
    // Calculate optimal node distribution for sacred geometry
    const maxVisibleNodes = 21 // Sacred number for triangle edges (7 per edge)
    const visibleParticipants = Math.min(totalParticipants, maxVisibleNodes)
    
    // Generate nodes with sacred positioning
    for (let i = 0; i < visibleParticipants; i++) {
      const isVenue = i < 3 || (i > 6 && i % 7 === 0) // 3 vertex venues + periodic venues
      const sacredPosition = generateSacredPosition(i, visibleParticipants, isVenue)
      
      const node: NetworkNode = {
        id: `node-${i}`,
        type: isVenue ? 'venue' : 'individual',
        x: sacredPosition.x!,
        y: sacredPosition.y!,
        sacredPosition: sacredPosition.sacredPosition!,
        edgeIndex: sacredPosition.edgeIndex,
        edgeRatio: sacredPosition.edgeRatio,
        timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
        connections: [],
        pulseActive: false,
        contemplativeDepth: sacredPosition.contemplativeDepth!
      }
      initialNodes.push(node)
    }

    // Generate sacred connections based on geometric relationships
    initialNodes.forEach((node, index) => {
      const connectionCount = node.type === 'venue' ? 6 : 2 // Venues connect to more community members
      
      for (let i = 0; i < connectionCount; i++) {
        // Sacred connection algorithm: connect based on geometric harmony
        let targetIndex: number
        
        if (node.sacredPosition === 'vertex') {
          // Vertices connect along their adjacent edges
          const edgeOffset = i < 3 ? i * 2 + 1 : (i - 3) * 2 + 2
          targetIndex = (index + edgeOffset) % initialNodes.length
        } else {
          // Edge nodes connect to adjacent nodes and nearest vertex
          const goldenOffset = Math.floor(i * SACRED_GEOMETRY.GOLDEN_RATIO) + 1
          targetIndex = (index + goldenOffset) % initialNodes.length
        }
        
        if (targetIndex !== index && targetIndex < initialNodes.length) {
          const targetNode = initialNodes[targetIndex]
          
          // Connection strength based on sacred geometry relationships
          const geometricDistance = Math.sqrt(
            Math.pow(node.x - targetNode.x, 2) + Math.pow(node.y - targetNode.y, 2)
          )
          const harmonicStrength = 1 - (geometricDistance / 50) // Normalize to 0-1
          const sacredStrength = Math.max(0.3, harmonicStrength * SACRED_GEOMETRY.PHI_INVERSE)
          
          const connection: NetworkConnection = {
            from: node.id,
            to: targetNode.id,
            strength: sacredStrength
          }
          initialConnections.push(connection)
        }
      }
    })

    setNodes(initialNodes)
    setConnections(initialConnections)
  }

  // Start contemplative breathing rhythm (4s inhale, 6s exhale)
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

  // Add new participant with sacred positioning and contemplative pulse
  const addNewParticipant = (type: 'individual' | 'venue' = 'individual') => {
    setNodes(prev => {
      const currentNodeCount = prev.length
      const sacredPosition = generateSacredPosition(currentNodeCount, currentNodeCount + 1, type === 'venue')
      
      const newNode: NetworkNode = {
        id: `node-${Date.now()}`,
        type,
        x: sacredPosition.x!,
        y: sacredPosition.y!,
        sacredPosition: sacredPosition.sacredPosition!,
        edgeIndex: sacredPosition.edgeIndex,
        edgeRatio: sacredPosition.edgeRatio,
        timestamp: new Date(),
        connections: [],
        pulseActive: true,
        contemplativeDepth: sacredPosition.contemplativeDepth!
      }

      return [...prev, newNode]
    })
    
    setTotalParticipants(prev => prev + (type === 'venue' ? 15 : 1))

    // Sacred pulse effect - longer, more contemplative
    setTimeout(() => {
      setNodes(prev => prev.map(node => 
        node.id.includes(Date.now().toString()) ? { ...node, pulseActive: false } : node
      ))
    }, 4000) // Extended pulse duration for contemplative effect
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
      {/* Sacred Geometry Network Visualization */}
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
          {/* Sacred Triangle Foundation - Consciousness-Serving Architecture */}
          <motion.g 
            className="sacred-triangle-foundation"
            opacity={0.2}
            animate={{
              opacity: breathingPhase === 'inhale' ? 0.3 : 0.2,
              transition: { duration: breathingPhase === 'inhale' ? 4 : 6, ease: "easeInOut" }
            }}
          >
            {/* Triangle Edges */}
            <path
              d={`M ${SACRED_TRIANGLE_VERTICES[0].x} ${SACRED_TRIANGLE_VERTICES[0].y} 
                  L ${SACRED_TRIANGLE_VERTICES[1].x} ${SACRED_TRIANGLE_VERTICES[1].y} 
                  L ${SACRED_TRIANGLE_VERTICES[2].x} ${SACRED_TRIANGLE_VERTICES[2].y} 
                  Z`}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-sage-green"
            />
            
            {/* Golden Ratio Guidelines - Subtle Sacred Structure */}
            {SACRED_TRIANGLE_VERTICES.map((vertex, index) => {
              const nextVertex = SACRED_TRIANGLE_VERTICES[(index + 1) % 3]
              const goldenPoint = {
                x: vertex.x + (nextVertex.x - vertex.x) * SACRED_GEOMETRY.PHI_INVERSE,
                y: vertex.y + (nextVertex.y - vertex.y) * SACRED_GEOMETRY.PHI_INVERSE
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
            
            {/* Vertex Labels - Sacred Meaning */}
            {SACRED_TRIANGLE_VERTICES.map((vertex, index) => (
              <text
                key={`vertex-label-${index}`}
                x={vertex.x}
                y={vertex.y - 3}
                textAnchor="middle"
                fontSize="2"
                fill="currentColor"
                className="text-deep-brown opacity-30 font-medium"
              >
                {vertex.label}
              </text>
            ))}
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
                  {/* Sacred Node Circle with Contemplative Depth */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={getNodeSize(node)}
                    fill={getNodeColor(node)}
                    className="drop-shadow-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 0.7 + (node.contemplativeDepth * 0.3), // Opacity reflects contemplative engagement
                      r: node.pulseActive ? getNodeSize(node) * 1.5 : getNodeSize(node)
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.6,
                      r: { duration: node.pulseActive ? 2 : 0.3 }, // Longer pulse for contemplative effect
                      opacity: { duration: 1.2 } // Gentle opacity transitions
                    }}
                  />

                  {/* Sacred Position Indicator for Vertices */}
                  {node.sacredPosition === 'vertex' && (
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

// Contemplative Commitment Button Component - Anti-Gaming Sacred Interaction
interface ContemplativeButtonProps {
  onCommit: () => void
  children: React.ReactNode
  type: 'individual' | 'venue'
  className?: string
}

const ContemplativeCommitButton: React.FC<ContemplativeButtonProps> = ({ 
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
    
    // Require 3 conscious breath cycles (30 seconds total)
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
    
    // Brief moment of contemplative integration
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
            Take three conscious breaths before joining our community
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
            Your place in our sacred breathing network:
          </p>
          
          {/* Sacred Geometry Preview */}
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
              ? 'You will anchor the community as a sacred sanctuary space'
              : 'You will join the contemplative network with fellow practitioners'
            }
          </p>
          
          <motion.button
            onClick={handleFinalCommit}
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join the Sacred Network
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
            Integrating into the sacred network...
          </p>
        </div>
      </motion.div>
    )
  }

  return null
}

export default BreathingNetwork
export { ContemplativeCommitButton }

