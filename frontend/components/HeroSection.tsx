'use client'

import React from 'react'
import { ButtonColorful } from '@/components/ui/button-colorful'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from 'next/image'

interface HeroSectionProps {
  authenticated: boolean
  ready: boolean
  onCampusEntry: () => void
}

export default function HeroSection({ authenticated, ready, onCampusEntry }: HeroSectionProps) {
  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 -mt-16">
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

        {/* Floating Card */}
        <div className="relative z-10 w-full max-w-[98%] xl:max-w-[1600px] aspect-[20/8] rounded-[2.5rem] border border-neutral-800/30 bg-neutral-950/30 backdrop-blur-xl p-12 shadow-2xl before:absolute before:inset-0 before:-z-10 before:rounded-[2.5rem] before:bg-gradient-to-b before:from-purple-500/5 before:to-emerald-500/5 before:backdrop-blur-2xl">
          <div className="flex flex-col justify-center h-full text-center">
            <div className="flex flex-col items-center justify-center">
              <ButtonColorful
                size="lg"
                label={"Entrar al Campus"}
                onClick={onCampusEntry}
                disabled={!ready}
              />
            </div>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-emerald-500/10 opacity-30 blur-3xl"></div>
        </div>
      </section>

      <section className="py-12">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:pr-6">
              <p className="text-end text-sm text-gray-400">Blockchains Participantes</p>
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
                    src="/logos/worldcoin 1.svg"
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
    </main>
  )
} 