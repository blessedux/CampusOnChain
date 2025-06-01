'use client'

import React from 'react'

interface SplineSceneProps {
  url: string
  className?: string
}

export function SplineScene({ url, className = '' }: SplineSceneProps) {
  return (
    <div className={`relative w-full h-full spline-container ${className}`}>
      <iframe 
        src={url}
        frameBorder='0'
        width='100%'
        height='100%'
        className="absolute inset-0 spline-scene"
        title="Spline Scene"
        scrolling="no"
        allow="autoplay"
        style={{ 
          pointerEvents: 'none',
          opacity: 1,
          visibility: 'visible',
          background: 'transparent',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  )
} 