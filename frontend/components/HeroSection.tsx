'use client'

import React, { useState } from 'react'
import { GradientButton } from '@/components/ui/gradient-button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { LampContainer } from '@/components/ui/lamp'
import { SplineScene } from '@/components/ui/spline-scene'
import { MaskedTextCarousel } from '@/components/ui/masked-text-carousel'
import { motion, AnimatePresence } from 'framer-motion'
import '@/styles/hero.css'
import { BackgroundVideo } from '@/components/ui/background-video'
import { AuroraBackground } from '@/components/ui/aurora-background'

// Define the carousel images
const carouselImages = [
  '/logos/charla-abogado-Yanqpp98arUvPNJW.jpg_1.jpeg',
  '/logos/charla-world-mxBMpVgWQDh2pjWj.jpg.jpeg',
  '/logos/meetup-en-la-uc-Yg2qppO7NPUGVRwM.jpg.jpeg',
  '/logos/paintball-on-chain-AE0aZZ4lVyta7kRl.jpg.jpeg'
]

interface HeroSectionProps {
  authenticated: boolean
  ready: boolean
  onCampusEntry: () => void
}

export default function HeroSection({ authenticated, ready, onCampusEntry }: HeroSectionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCampusEntry = () => {
    if (authenticated) {
      setIsTransitioning(true);
      onCampusEntry();
    } else {
      // If not authenticated, just trigger the login without changing visibility
      onCampusEntry();
    }
  };

  // Only show transition state if authenticated
  if (isTransitioning && authenticated) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-2">
            CAMPUS
          </div>
          <MaskedTextCarousel 
            text="ON CHAIN"
            images={carouselImages}
            interval={2000}
          />
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <section className="relative w-screen h-screen min-h-screen flex items-center justify-center overflow-hidden mt-[-4rem] hero-container">
        {/* Lamp Effect */}
        <LampContainer className="absolute inset-0 -z-[5]">
          <div className="pointer-events-none" />
        </LampContainer>

        {/* Floating Card with Backdrop Light */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full h-full max-w-none flex items-center justify-center"
        >
          {/* Backdrop Light Effect */}
          <div className="absolute inset-0 -z-10 translate-y-6 blur-3xl">
            <div className="h-full w-full bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-[2.5rem] opacity-30" />
          </div>
          <div className="absolute inset-0 -z-10 translate-y-4 blur-2xl">
            <div className="h-full w-full bg-gradient-to-b from-orange-500/20 via-white/30 to-transparent rounded-[2.5rem] opacity-25" />
          </div>

          {/* Card Content */}
          <div className="relative w-full h-full max-w-[600px] max-h-[800px] sm:max-w-[90vw] sm:max-h-[90vh] md:max-w-[80vw] md:max-h-[70vh] lg:max-w-[1200px] lg:max-h-[75vh] xl:max-w-[1400px] xl:max-h-[75vh] rounded-[2.5rem] border border-neutral-800/30 bg-neutral-950/20 backdrop-blur-sm p-4 sm:p-8 md:p-12 shadow-2xl before:absolute before:inset-0 before:-z-10 before:rounded-[2.5rem] before:bg-gradient-to-b before:from-orange-500/5 before:via-black/5 before:to-black/5 before:backdrop-blur-2xl overflow-hidden flex flex-col justify-center">
            {/* Aurora Background */}
            <div className="absolute inset-0 -z-[2]">
              <AuroraBackground className="!min-h-full">
                <div className="w-full h-full" />
              </AuroraBackground>
            </div>

            {/* Video Background */}
            <div className="absolute inset-0 -z-[1] opacity-50">
              <div className="w-full h-[calc(100%+60px)] -translate-y-2">
                <BackgroundVideo 
                  src="/videos/unchained2_optimized_loop.webm"
                  className="scale-[1.35] md:scale-125 md:translate-y-0 translate-y-8"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center h-full text-center max-w-4xl mx-auto relative z-10">
              <div className="mb-6 relative max-w-[90%] mx-auto">
                <div className="relative flex flex-col items-center">
                  {/* CAMPUS text in white */}
                  <div className="w-full text-center text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-2">
                    CAMPUS
                  </div>
                  
                  {/* ON CHAIN masked text container */}
                  <MaskedTextCarousel 
                    text="ON CHAIN"
                    images={carouselImages}
                    interval={2000}
                  />
                </div>
              </div>
              <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                Transforma tu experiencia académica con blockchain.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4">
                <GradientButton
                  onClick={handleCampusEntry}
                  disabled={!ready}
                  variant="variant"
                  className="flex items-center gap-2 hover:text-orange-200"
                >
                  Entrar al Campus
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform rotate-45"
                  >
                    <path 
                      d="M3.33334 12.6667L12.6667 3.33334M12.6667 3.33334H5.33334M12.6667 3.33334V10.6667" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </GradientButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-black/10 to-black/10 opacity-30 blur-3xl"></div>
        </div>
      </section>
    </AnimatePresence>
  )
} 