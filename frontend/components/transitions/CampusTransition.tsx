'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MaskedTextCarousel } from '@/components/ui/masked-text-carousel';

// Define the carousel images
const carouselImages = [
  '/logos/charla-abogado-Yanqpp98arUvPNJW.jpg_1.jpeg',
  '/logos/charla-world-mxBMpVgWQDh2pjWj.jpg.jpeg',
  '/logos/meetup-en-la-uc-Yg2qppO7NPUGVRwM.jpg.jpeg',
  '/logos/paintball-on-chain-AE0aZZ4lVyta7kRl.jpg.jpeg'
];

interface CampusTransitionProps {
  isVisible: boolean;
  onComplete: () => void;
}

export const CampusTransition = ({ isVisible, onComplete }: CampusTransitionProps) => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Start the transition sequence
      const sequence = async () => {
        // Wait for the title animation (increased to 5 seconds)
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Trigger the page transition
        onComplete();
        
        // Wait for the new page to be mounted
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Start fade out
        setShouldFadeOut(true);
      };

      sequence();
    }
  }, [isVisible, onComplete]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      setShouldFadeOut(false);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: shouldFadeOut ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1, filter: "blur(0px)" }}
            animate={{ 
              scale: 1.5,
              filter: shouldFadeOut ? "blur(20px)" : "blur(0px)"
            }}
            transition={{ 
              duration: 5,
              ease: [0.4, 0, 0.2, 1], // Custom easing for smoother animation
              filter: {
                duration: 0.8,
                ease: "easeInOut"
              }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex flex-col justify-center h-full text-center w-full px-4 relative z-10">
              <div className="mb-6 relative w-full max-w-[90vw] mx-auto">
                <div className="relative flex flex-col items-center">
                  {/* CAMPUS text in white */}
                  <div className="w-full text-center text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-2 whitespace-nowrap">
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 