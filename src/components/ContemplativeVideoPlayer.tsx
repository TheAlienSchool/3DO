'use client'

import React, { useState, useRef, useEffect } from 'react'

interface ContemplativeVideoPlayerProps {
  src: string
  poster?: string
  title: string
  description: string
  className?: string
  analytics?: 'cultural-engagement' | 'preparation-depth' | 'educational-focus'
}

export default function ContemplativeVideoPlayer({
  src,
  poster,
  title,
  description,
  className = '',
  analytics = 'cultural-engagement'
}: ContemplativeVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setIsPlaying(true)
    // Contemplative analytics - track meaningful engagement
    if (analytics === 'cultural-engagement') {
      console.log('Festival of Stillness engagement initiated')
    } else if (analytics === 'preparation-depth') {
      console.log('Conscious Pause preparation engagement initiated')
    }
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      video.addEventListener('loadeddata', handleLoadedData)

      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
        video.removeEventListener('loadeddata', handleLoadedData)
      }
    }
  }, [])

  return (
    <div className={`contemplative-video-container relative ${className}`}>
      {/* Sacred Geometry Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
        <div className="w-full h-full bg-gradient-to-br from-contemplative-gold/20 via-transparent to-intention-purple/20"></div>
      </div>

      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        poster={poster}
        controls
        preload="metadata"
        style={{
          background: 'linear-gradient(135deg, #6B8E6B 0%, #2C1810 100%)'
        }}
      >
        <source src={src} type="video/mp4" />
        {/* Accessibility placeholder - captions would be added here */}
        <track
          kind="captions"
          src="/captions/placeholder-en.vtt"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag. Please visit our audio-only version or download the transcript.
      </video>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-deep-brown/80 flex items-center justify-center">
          <div className="text-warm-cream text-center">
            <div className="w-12 h-12 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center animate-breathe">
              <span className="text-warm-cream font-bold">🎬</span>
            </div>
            <p className="text-sm">Preparing contemplative experience...</p>
          </div>
        </div>
      )}

      {/* Video Information Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-brown/80 to-transparent p-6 text-warm-cream">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-warm-cream/80">{description}</p>
      </div>
    </div>
  )
}
