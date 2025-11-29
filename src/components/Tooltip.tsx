'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  delay?: number
}

export default function Tooltip({ content, children, delay = 200 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  let timeout: NodeJS.Timeout

  const showTooltip = () => {
    timeout = setTimeout(() => setIsVisible(true), delay)
  }

  const hideTooltip = () => {
    clearTimeout(timeout)
    setIsVisible(false)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 px-4 py-3 text-sm bg-deep-brown text-warm-cream rounded-lg shadow-lg pointer-events-none"
            style={{
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginBottom: '8px',
              minWidth: '200px',
              maxWidth: '320px',
            }}
          >
            <div className="relative">{content}</div>
            <div
              className="absolute w-3 h-3 bg-deep-brown"
              style={{
                bottom: '-6px',
                left: '50%',
                transform: 'translateX(-50%) rotate(45deg)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
