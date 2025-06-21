'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FadeInCard } from '../ui/FadeInCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTA {
  label: string;
  href: string;
}

interface Card {
  icon: string;
  title: string;
  description: string;
  image: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
}

const cards: Card[] = [
  {
    icon: "🎯",
    title: "Aprende haciendo",
    description:
      "Participa en hackathons, meetups y workshops prácticos para explorar el mundo Web3 y construir proyectos reales desde el primer día.",
    image: "/IMG_5835.webp",
    primaryCTA: {
      label: "Próximos eventos",
      href: "/events"
    },
    secondaryCTA: {
      label: "Certificaciones",
      href: "/certs"
    }
  },
  {
    icon: "📚",
    title: "Conviértete en experto Web3",
    description:
      "Pasa de ser un estudiante curioso a un profesional blockchain con nuestra plataforma de aprendizaje gamificada, certificaciones on-chain y una ruta educativa pensada para ti.",
    image: "/IMG_4675-2.webp",
    primaryCTA: {
      label: "Próximos eventos",
      href: "/events"
    },
    secondaryCTA: {
      label: "Certificaciones",
      href: "/certs"
    }
  },
  {
    icon: "🤝",
    title: "Conecta con otros builders",
    description:
      "Conoce estudiantes de todo Chile que están construyendo el futuro de Web3. Encuentra compañeros para hackathons, únete a comunidades y crezcan juntos.",
    image: "/IMG_5859-3.webp",
    primaryCTA: {
      label: "Próximos eventos",
      href: "/events"
    },
    secondaryCTA: {
      label: "Certificaciones",
      href: "/certs"
    }
  }
];

export const CardsSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercentage = (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
        setScrollPosition(scrollPercentage);
        
        const newCard = Math.floor(scrollPercentage * 3);
        if (newCard >= 0 && newCard <= 2 && newCard !== currentCard) {
          setCurrentCard(newCard);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentCard]);

  return (
    <div className="min-h-[300vh] w-[80%] mx-auto relative" ref={sectionRef}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 max-w-[1600px]">
          <div className="mx-auto max-w-[1400px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`
                  absolute inset-0 transition-opacity duration-1000 flex items-center
                  ${currentCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
              >
                <div className="w-full py-12 md:py-16 lg:py-24">
                  <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                    <div className="col-span-12 md:col-span-5 lg:col-span-4">
                      <FadeInCard index={index}>
                        <div className="flex flex-col h-[400px]">
                          <div className="mb-8 h-16 w-16 rounded bg-neutral-800/50 flex items-center justify-center text-2xl">
                            {card.icon}
                          </div>
                          <h3 className="text-3xl font-medium text-neutral-200 mb-4">
                            {card.title}
                          </h3>
                          <p className="text-neutral-400 leading-relaxed flex-1">
                            {card.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link 
                              href={card.primaryCTA.href}
                              className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30"
                            >
                              {card.primaryCTA.label}
                            </Link>
                            <Link 
                              href={card.secondaryCTA.href}
                              className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl border border-neutral-700 text-neutral-200 font-medium hover:bg-neutral-800/50 transition-all duration-200"
                            >
                              {card.secondaryCTA.label}
                            </Link>
                          </div>
                        </div>
                      </FadeInCard>
                    </div>
                    <div className="col-span-12 md:col-span-7 lg:col-span-8 relative">
                      {/* Primary Backdrop Light Effect */}
                      <div className="absolute inset-0 -z-10 translate-y-6 blur-3xl">
                        <div className="h-full w-full bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-[2.5rem] opacity-30" />
                      </div>
                      {/* Secondary Light Effect */}
                      <div className="absolute inset-0 -z-10 translate-y-4 blur-2xl">
                        <div className="h-full w-full bg-gradient-to-b from-orange-500/20 via-white/30 to-transparent rounded-[2.5rem] opacity-25" />
                      </div>
                      
                      <div className="aspect-[16/9] w-full rounded-2xl bg-neutral-800/50 relative overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 