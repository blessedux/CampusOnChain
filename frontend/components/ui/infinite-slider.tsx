'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';
import Image from 'next/image';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// Standalone InfiniteLogosSlider component
export default function InfiniteLogosSlider() {
  return (
    <section className={`py-8 md:py-12 transition-opacity duration-1000`}>
      <div className="group relative m-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:pr-6">
            <p className="text-center text-sm text-gray-400">
              Colaboramos<br />
              <span className="block w-full text-center">con</span>
            </p>
          </div>
          <div className="relative py-4 md:py-6 w-full md:w-[calc(100%-11rem)]">
            <InfiniteSlider duration={40} durationOnHover={120} gap={48} className="md:gap-[112px]">
              <div className="flex">
                <Image
                  style={{height: '32px', width: 'auto'}}
                  className="mx-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity md:h-12"
                  src="/logos/avalanche.svg"
                  alt="Avalanche Logo"
                  height={48}
                  width={150}
                />
              </div>
              <div className="flex">
                <Image
                  style={{height: '32px', width: 'auto'}}
                  className="mx-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity md:h-12"
                  src="/logos/stellar.svg"
                  alt="Stellar Logo"
                  height={48}
                  width={150}
                />
              </div>
              <div className="flex">
                <Image
                  style={{height: '32px', width: 'auto'}}
                  className="mx-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity md:h-12"
                  src="/logos/Polkadot_Logo.svg"
                  alt="Polkadot Logo"
                  height={48}
                  width={150}
                />
              </div>
              <div className="flex">
                <Image
                  style={{height: '32px', width: 'auto'}}
                  className="mx-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity md:h-12"
                  src="/logos/worldcoin.svg"
                  alt="Worldcoin Logo"
                  height={48}
                  width={150}
                />
              </div>
              <div className="flex">
                <Image
                  style={{height: '32px', width: 'auto'}}
                  className="mx-auto opacity-70 hover:opacity-100 transition-opacity md:h-12"
                  src="/logos/Chainlink-Logo-White.png"
                  alt="Chainlink Logo"
                  height={48}
                  width={150}
                />
              </div>
              <div className="flex">
                <Image
                  style={{height: '32px', width: 'auto'}}
                  className="mx-auto opacity-70 hover:opacity-100 transition-opacity md:h-12"
                  src="/logos/fintech_chile_whitelogo.png"
                  alt="Fintech Chile Logo"
                  height={48}
                  width={150}
                />
              </div>
              <div className="flex">
                <Image
                  style={{height: '32px', width: 'auto'}}
                  className="mx-auto opacity-70 hover:opacity-100 transition-opacity md:h-12"
                  src="/logos/hub_providencia_white.png"
                  alt="Hub Providencia Logo"
                  height={48}
                  width={150}
                />
              </div>
              <div className="flex">
                <Image
                  style={{height: '32px', width: 'auto'}}
                  className="mx-auto opacity-70 hover:opacity-100 transition-opacity md:h-12"
                  src="/logos/tellus_logowhite.png"
                  alt="Tellus Logo"
                  height={48}
                  width={150}
                />
              </div>
              <div className='flex'>
              <Image
                  style={{height: '32px', width: 'auto'}}
                  className="mx-auto opacity-70 hover:opacity-100 transition-opacity md:h-12"
                  src="/logos/mono-dark.png"
                  alt="Tellus Logo"
                  height={48}
                  width={150}
                />
              </div>

            </InfiniteSlider>
            <div className="bg-gradient-to-r from-black absolute inset-y-0 left-0 w-12 md:w-20"></div>
            <div className="bg-gradient-to-l from-black absolute inset-y-0 right-0 w-12 md:w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}