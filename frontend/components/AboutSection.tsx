'use client';

import { IntroSection } from './about/IntroSection';
import { CardsSection } from './about/CardsSection';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative">
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-0"
      >
        <AuroraBackground className="!min-h-full">
          <div className="w-full h-full" />
        </AuroraBackground>
      </motion.div>
      
      <div className="relative z-10">
        {/* Intro Section */}
        <div className="about-intro-section mb-4">
          <IntroSection />
        </div>
        {/* Cards Section */}
        <div className="about-cards-section mb-4">
          <CardsSection />
        </div>
      </div>
    </section>
  );
}