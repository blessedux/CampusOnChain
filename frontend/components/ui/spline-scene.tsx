'use client'

import React from 'react'

interface SplineSceneProps {
  url: string
  className?: string
}

export function SplineScene({ url, className = '' }: SplineSceneProps) {
  return (
    <div className={`relative w-full h-full pointer-events-none ${className}`}>
      <iframe 
        src={url}
        frameBorder='0'
        width='100%'
        height='100%'
        className="absolute inset-0"
        title="Spline Scene"
        scrolling="no"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  )
} 