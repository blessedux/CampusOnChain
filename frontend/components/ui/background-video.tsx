'use client'

import React from 'react'

interface BackgroundVideoProps {
  src: string
  className?: string
  opacity?: number
}

export function BackgroundVideo({ src, className = '', opacity = 1 }: BackgroundVideoProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
        loading="lazy"
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  )
} 