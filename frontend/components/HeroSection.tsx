'use client'

import React, { useState, useCallback } from 'react'
import { ButtonColorful } from '@/components/ui/button-colorful'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { LampContainer } from '@/components/ui/lamp'
import Image from 'next/image'
import '@/styles/hero.css'

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
    }, 1500); // Match this with animation duration
  }, [onCampusEntry]);

  return (
    <>
      <section className={`relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 -mt-16 hero-container ${isZooming ? 'zooming' : ''}`}>
        {/* Background video */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover opacity-30 dark:opacity-20"
            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477">
          </video>
        </div>

        {/* Lamp Effect */}
        <LampContainer className="absolute inset-0 -z-[5]">
          <div className="pointer-events-none" />
        </LampContainer>

        {/* Floating Card */}
        <div className="relative z-10 w-full max-w-[98%] xl:max-w-[1600px] aspect-[20/8] rounded-[2.5rem] border border-neutral-800/30 bg-neutral-950/20 backdrop-blur-sm p-12 shadow-2xl before:absolute before:inset-0 before:-z-10 before:rounded-[2.5rem] before:bg-gradient-to-b before:from-orange-500/5 before:via-black/5 before:to-black/5 before:backdrop-blur-2xl">
          <div className="flex flex-col justify-center h-full text-center max-w-4xl mx-auto">
            <div className="mb-6 relative max-w-[90%] mx-auto">
              <div className="relative flex flex-col items-center">
                {/* CAMPUS text in white */}
                <div className="w-full text-center text-8xl font-bold tracking-tight text-white mb-2">
                  CAMPUS
                </div>
                
                {/* ON CHAIN masked text container */}
                <div className="relative w-full masked-text-container">
                  <div 
                    className="masked-text text-center text-8xl font-bold tracking-tight"
                    data-text="ON CHAIN"
                  >
                    ON CHAIN
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Transforma tu experiencia académica con blockchain.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4">
              <ButtonColorful
                size="lg"
                label={"Entrar al Campus"}
                onClick={handleCampusEntry}
                disabled={!ready || isZooming}
              />
            </div>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-black/10 to-black/10 opacity-30 blur-3xl"></div>
        </div>
      </section>

      <section className="py-12">
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