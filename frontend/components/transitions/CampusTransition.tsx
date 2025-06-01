'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    console.log('CampusTransition mounted, isVisible:', isVisible);
    
    if (isVisible) {
      console.log('Starting feed content check');
      
      // Start checking for feed content immediately
      const checkFeedContent = () => {
        const feedContent = document.querySelector('[data-feed-content]');
        console.log('Checking for feed content, found:', !!feedContent);
        
        if (feedContent) {
          console.log('Feed content detected, setting shouldFadeOut to true');
          setShouldFadeOut(true);
          
          // Wait for fade out animation to complete before calling onComplete
          setTimeout(() => {
            console.log('Fade out complete, calling onComplete');
            onComplete();
          }, 1000);
        } else {
          console.log('Feed content not found, checking again in 50ms');
          // Check again in 50ms if feed content is not found
          setTimeout(checkFeedContent, 50);
        }
      };

      // Start checking
      checkFeedContent();

      // Cleanup timeout if component unmounts
      return () => {
        console.log('CampusTransition cleanup');
        setShouldFadeOut(false);
      };
    }
  }, [isVisible, onComplete]);

  console.log('Rendering CampusTransition, shouldFadeOut:', shouldFadeOut);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 1, filter: "blur(0px)" }}
              animate={{ 
                opacity: shouldFadeOut ? 0 : 1,
                filter: shouldFadeOut ? "blur(20px)" : "blur(0px)",
              }}
              transition={{ 
                duration: 1,
                ease: "easeOut"
              }}
              className="w-full max-w-[400px] px-4"
            >
              <Image
                src="/logos/campus_logo.png"
                alt="Campus on Chain"
                width={400}
                height={89}
                priority
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 