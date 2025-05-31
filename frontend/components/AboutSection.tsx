'use client';

import { IntroSection } from './about/IntroSection';
import { CardsSection } from './about/CardsSection';
import { FinalSection } from './about/FinalSection';
import { TeamSection } from './about/TeamSection';
import { BgradientAnim } from './ui/BgradientAnim';

export default function AboutSection() {
  return (
    <section className="relative">
      <BgradientAnim />
      <IntroSection />
      <CardsSection />
      <TeamSection />
      <FinalSection />
    </section>
  );
} 