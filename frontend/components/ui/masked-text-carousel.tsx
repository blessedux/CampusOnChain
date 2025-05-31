'use client'

import { useEffect, useState } from 'react'

interface MaskedTextCarouselProps {
  text: string
  images: string[]
  interval?: number
}

export function MaskedTextCarousel({ text, images, interval = 1000 }: MaskedTextCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full masked-text-container">
      <div 
        className="masked-text text-center text-8xl font-bold tracking-tight"
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