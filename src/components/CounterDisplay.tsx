'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CounterDisplayProps {
  label: string
  initialValue?: number
  targetValue?: number
  duration?: number
}

const CounterDisplay = ({ 
  label, 
  initialValue = 0, 
  targetValue = 0, 
  duration = 2000 
}: CounterDisplayProps) => {
  const [count, setCount] = useState(initialValue)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`counter-${label.replace(/\s+/g, '-').toLowerCase()}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [label])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = count
    const endValue = targetValue

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOutQuart)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isVisible, targetValue, duration, count])

  return (
    <div 
      id={`counter-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className="text-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ opacity: 0.5, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="counter-display"
        >
          {count.toLocaleString()}
        </motion.div>
      </AnimatePresence>
      <p className="text-lg font-medium text-sage-green mt-2 tracking-wide">
        {label}
      </p>
    </div>
  )
}

export default CounterDisplay

