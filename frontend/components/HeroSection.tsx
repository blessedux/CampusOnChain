'use client'

import React, { useState, useCallback } from 'react'
import { ButtonColorful } from '@/components/ui/button-colorful'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { LampContainer } from '@/components/ui/lamp'
import { SplineScene } from '@/components/ui/spline-scene'
import { MaskedTextCarousel } from '@/components/ui/masked-text-carousel'
import Image from 'next/image'
import '@/styles/hero.css'

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
  const [isZooming, setIsZooming] = useState(false);

  const handleCampusEntry = useCallback(async () => {
    setIsZooming(true);
    // Wait for animation to complete before calling onCampusEntry
    setTimeout(() => {
      onCampusEntry();
    }, 2000); // Match this with animation duration
  }, [onCampusEntry]);

  return (
    <>
      <section 
        className={`relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 -mt-16 ${isZooming ? 'hero-container zooming' : 'hero-container'}`}
      >
        {/* Background video */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`size-full object-cover opacity-30 dark:opacity-20 transition-opacity duration-1000 ${isZooming ? 'opacity-0' : ''}`}
            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477">
          </video>
        </div>

        {/* Lamp Effect */}
        <LampContainer className={`absolute inset-0 -z-[5] transition-opacity duration-1000 ${isZooming ? 'opacity-0' : ''}`}>
          <div className="pointer-events-none" />
        </LampContainer>

        {/* Floating Card with Backdrop Light */}
        <div className="relative z-10 w-full max-w-[98%] xl:max-w-[1600px]">
          {/* Backdrop Light Effect */}
          <div className="absolute inset-0 -z-10 translate-y-6 blur-3xl">
            <div className="h-full w-full bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-[2.5rem] opacity-30" />
          </div>
          {/* Secondary Light Effect for extra glow */}
          <div className="absolute inset-0 -z-10 translate-y-4 blur-2xl">
            <div className="h-full w-full bg-gradient-to-b from-orange-500/20 via-white/30 to-transparent rounded-[2.5rem] opacity-25" />
          </div>

          {/* Card Content */}
          <div className="relative aspect-[20/8] rounded-[2.5rem] border border-neutral-800/30 bg-neutral-950/20 backdrop-blur-sm p-12 shadow-2xl before:absolute before:inset-0 before:-z-10 before:rounded-[2.5rem] before:bg-gradient-to-b before:from-orange-500/5 before:via-black/5 before:to-black/5 before:backdrop-blur-2xl overflow-hidden">
            {/* Spline Scene Background */}
            <div className="absolute inset-0 -z-[1] opacity-50">
              <div className="w-full h-[calc(100%+60px)] -translate-y-2">
                <SplineScene url="https://my.spline.design/unchained-tBOtsunXijzRsPiy5Gg0pkCE/" />
              </div>
            </div>

            <div className="flex flex-col justify-center h-full text-center max-w-4xl mx-auto relative z-10">
              <div className="mb-6 relative max-w-[90%] mx-auto">
                <div className="relative flex flex-col items-center">
                  {/* CAMPUS text in white */}
                  <div className={`w-full text-center text-8xl font-bold tracking-tight text-white mb-2 transition-opacity duration-1000 ${isZooming ? 'opacity-0' : ''}`}>
                    CAMPUS
                  </div>
                  
                  {/* ON CHAIN masked text container */}
                  <MaskedTextCarousel 
                    text="ON CHAIN"
                    images={carouselImages}
                    interval={1000}
                  />
                </div>
              </div>
              <p className={`text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto transition-opacity duration-1000 ${isZooming ? 'opacity-0' : ''}`}>
                Transforma tu experiencia académica con blockchain.
              </p>
              <div className={`flex flex-col items-center justify-center space-y-4 transition-opacity duration-1000 ${isZooming ? 'opacity-0' : ''}`}>
                <ButtonColorful
                  size="lg"
                  label={"Entrar al Campus"}
                  onClick={handleCampusEntry}
                  disabled={!ready || isZooming}
                  className="bg-gradient-to-br from-neutral-100/10 via-orange-500/20 to-orange-600/30 hover:from-orange-500/30 hover:via-orange-600/40 hover:to-orange-700/50 backdrop-blur-sm border border-white/10 shadow-[0_0_1rem_-0.25rem_rgba(255,255,255,0.3)] hover:shadow-[0_0_2rem_-0.25rem_rgba(255,140,0,0.4)] transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${isZooming ? 'opacity-0' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-black/10 to-black/10 opacity-30 blur-3xl"></div>
        </div>
      </section>

      <section className={`py-12 transition-opacity duration-1000 ${isZooming ? 'opacity-0' : ''}`}>
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:pr-6">
              <p className="text-end text-sm text-gray-400">Nuestros <br></br>partners</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider
                duration={40}
                durationOnHover={120}
                gap={112}>
                <div className="flex">
                  <Image
                    className="mx-auto h-12 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    src="/logos/avalanche.svg"
                    alt="Avalanche Logo"
                    height={48}
                    width={150}
                  />
                </div>
                <div className="flex">
                  <Image
                    className="mx-auto h-12 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    src="/logos/stellar.svg"
                    alt="Stellar Logo"
                    height={48}
                    width={150}
                  />
                </div>
                <div className="flex">
                  <Image
                    className="mx-auto h-12 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    src="/logos/Polkadot_Logo.svg"
                    alt="Polkadot Logo"
                    height={48}
                    width={150}
                  />
                </div>
                <div className="flex">
                  <Image
                    className="mx-auto h-12 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    src="/logos/worldcoin.svg"
                    alt="Worldcoin Logo"
                    height={48}
                    width={150}
                  />
                </div>
              </InfiniteSlider>

              <div className="bg-gradient-to-r from-black absolute inset-y-0 left-0 w-20"></div>
              <div className="bg-gradient-to-l from-black absolute inset-y-0 right-0 w-20"></div>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 