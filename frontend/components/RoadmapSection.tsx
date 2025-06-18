'use client';

import React from 'react';
import { RoadmapContent } from './roadmap/RoadmapContent';

export default function RoadmapSection() {
  return (
    <section className="relative min-h-screen bg-black py-[8vh] z-0">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center">
          {/* Content will be added here */}
          <RoadmapContent />
        </div>
      </div>
    </section>
  );
} 