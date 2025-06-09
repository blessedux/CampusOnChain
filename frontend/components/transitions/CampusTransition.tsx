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
      // Function to check if feed is ready
      const checkFeedReady = () => {
        // Check for elements that indicate feed is ready
        const feedHeader = document.querySelector('header');
        const feedPosts = document.querySelector('.grid-cols-1');
        
        const isFeedReady = feedHeader && feedPosts;
        console.log('Feed ready check:', {
          feedHeader: !!feedHeader,
          feedPosts: !!feedPosts,
          isReady: isFeedReady
        });

        if (isFeedReady) {
          console.log('Feed is ready, starting fade out');
          // Small delay to ensure feed is fully rendered
          setTimeout(() => {
        setShouldFadeOut(true);
            // Wait for fade out animation to complete
            setTimeout(() => {
              console.log('Fade out complete');
              onComplete();
            }, 1000);
          }, 100);
        } else {
          // Check again after a short delay
          setTimeout(checkFeedReady, 50);
        }
      };

      // Start checking for feed readiness
      checkFeedReady();

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