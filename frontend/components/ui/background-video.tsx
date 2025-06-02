'use client'

import React, { useEffect, useRef, useState } from 'react'

interface BackgroundVideoProps {
  src: string
  className?: string
  opacity?: number
  onLoadStateChange?: (isLoaded: boolean) => void
}

export function BackgroundVideo({ 
  src, 
  className = '', 
  opacity = 1,
  onLoadStateChange 
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = (e: ErrorEvent) => {
      console.error('Video loading error:', e);
      console.error('Video source:', src);
      setIsLoaded(false);
      onLoadStateChange?.(false);
    };

    const handleLoadedData = () => {
      console.log('Video loaded successfully:', src);
      setIsLoaded(true);
      onLoadStateChange?.(true);
    };

    const handleCanPlay = () => {
      console.log('Video can play:', src);
      video.play().catch(error => {
        console.error('Error playing video:', error);
      });
    };

    video.addEventListener('error', handleError as any);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('error', handleError as any);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [src, onLoadStateChange]);

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