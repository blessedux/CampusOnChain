'use client'

import { useEffect, useState } from 'react'

interface MaskedTextCarouselProps {
  text: string
  images: string[]
  interval?: number
}

export function MaskedTextCarousel({ text, images, interval = 2000 }: MaskedTextCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image()
        img.src = src
        img.onload = () => {
          setLoadedImages((prev) => new Set([...prev, src]))
        }
      })
    }
    preloadImages()
  }, [images])

  useEffect(() => {
    // Only start the carousel when all images are loaded
    if (loadedImages.size !== images.length) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, loadedImages.size])

  // Show loading state or first image while images are loading
  if (loadedImages.size !== images.length) {
    return (
      <div className="relative w-full masked-text-container">
        <div 
          className="masked-text text-center text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight whitespace-nowrap"
          data-text={text}
          style={{
            '--image-url': `url(${images[0]})`,
          } as React.CSSProperties}
        >
          {text}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full masked-text-container">
      <div 
        className="masked-text text-center text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight whitespace-nowrap"
        data-text={text}
        style={{
          '--image-url': `url(${images[currentImageIndex]})`,
        } as React.CSSProperties}
      >
        {text}
      </div>
    </div>
  )
} 