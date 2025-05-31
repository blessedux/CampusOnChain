import { IntroSection } from '@/components/about/IntroSection';
import { CardsSection } from '@/components/about/CardsSection';
import { TeamSection } from '@/components/about/TeamSection';
import { FinalSection } from '@/components/about/FinalSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-900">
      {/* Intro Section */}
      <IntroSection />

      {/* Cards Section */}
      <section className="relative min-h-[300vh]">
        <CardsSection />
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Final Section */}
      <FinalSection />
    </main>
  );
} 