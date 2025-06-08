'use client';

import { MissionContent } from './mission/MissionContent';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function MissionSection() {
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
        <div className="mission-content-section mb-4">
          <MissionContent />
        </div>
      </div>
    </section>
  );
}