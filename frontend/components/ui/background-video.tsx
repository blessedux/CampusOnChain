'use client'

import React, { useEffect, useRef } from 'react'

interface BackgroundVideoProps {
  src: string
  className?: string
  opacity?: number
}

export function BackgroundVideo({ src, className = '', opacity = 1 }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = (e: ErrorEvent) => {
      console.error('Video loading error:', e);
      console.error('Video source:', src);
    };

    const handleLoadedData = () => {
      console.log('Video loaded successfully:', src);
    };

    video.addEventListener('error', handleError as any);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('error', handleError as any);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [src]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 