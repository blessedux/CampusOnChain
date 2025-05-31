'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const GradientText = ({ text, type }: { text: string, type: 'orange' | 'blue' }) => {
  const gradientClasses = {
    orange: `
      bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 
      animate-gradient-x bg-clip-text text-transparent 
      drop-shadow-[0_0_3px_rgba(234,88,12,0.4)]
      blur-[0.3px] filter
    `,
    blue: `
      bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 
      animate-gradient-x bg-clip-text text-transparent 
      drop-shadow-[0_0_3px_rgba(59,130,246,0.4)]
      blur-[0.3px] filter
    `
  };

  return (
    <span className={`${gradientClasses[type]} font-medium relative`}>
      <span className="absolute inset-0 blur-[1px] opacity-60">{text}</span>
      {text}
    </span>
  );
};

const AnimatedText = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="overflow-hidden">
      <div className={`transform transition-transform duration-1000 ease-out ${inView ? 'translate-y-0' : 'translate-y-full'}`}>
        {children}
      </div>
    </div>
  );
};

const AnimatedList = ({ items }: { items: string[] }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <ul ref={ref} className="space-y-2">
      {items.map((item, index) => (
        <li key={item} className="h-12 overflow-hidden">
          <span 
            className={`block text-xl font-medium text-neutral-400 transform transition-transform duration-1000 ease-out delay-${index * 100}`}
            style={{
              transitionDelay: `${index * 0.1}s`,
              transform: inView ? 'translateY(0)' : 'translateY(100%)'
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

const FadeInCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <div 
      ref={ref} 
      className={`
        transform transition-all duration-1000 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {children}
    </div>
  );
};

export default function AboutSection() {
  const [currentCard, setCurrentCard] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intro section ref
  const [ref1, inView1] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Final section ref
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercentage = (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
        setScrollPosition(scrollPercentage);
        
        // Calculate which card should be visible based on scroll position
        const newCard = Math.floor(scrollPercentage * 3); // 3 cards total
        if (newCard >= 0 && newCard <= 2 && newCard !== currentCard) {
          setCurrentCard(newCard);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentCard]);

  const cards = [
    {
      icon: "🎯",
      title: "Aprender haciendo, a través de hackathons, meetups y workshops especializados.",
      image: "/placeholder-1.jpg" // You'll need to add these images to your public folder
    },
    {
      icon: "💰",
      title: "Ganar construyendo, mediante bounties, prácticas y contribuciones open-source.",
      image: "/placeholder-2.jpg"
    },
    {
      icon: "🌐",
      title: "Pertenecer a una red global, uniéndose a otros builders más allá de fronteras y disciplinas.",
      image: "/placeholder-3.jpg"
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-black">
      {/* Intro Section */}
      <div ref={ref1} className="min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Text Content */}
            <div className="col-span-12 md:col-span-6">
              <div className="max-w-2xl">
                <div className="space-y-2 text-2xl text-neutral-300 leading-relaxed">
                  <AnimatedText>
                    Somos una organización
                  </AnimatedText>
                  <AnimatedText>
                    <GradientText text="sin fines de lucro" type="orange" /> que conecta
                  </AnimatedText>
                  <AnimatedText>
                    a estudiantes <GradientText text="universitarios" type="blue" /> latinoamericanos
                  </AnimatedText>
                  <AnimatedText>
                    con <GradientText text="oportunidades" type="orange" /> reales en <GradientText text="Web3" type="blue" />.
                  </AnimatedText>
                </div>
                <div className="text-lg text-neutral-400">
                  <AnimatedText>
                    Ayudamos a los estudiantes a:
                  </AnimatedText>
                </div>
              </div>
            </div>

            {/* Spline Scene */}
            <div className="col-span-12 md:col-span-6 relative overflow-hidden">
              <div className="aspect-square w-full scale-100">
                <iframe 
                  src='https://my.spline.design/chain-B6oxtiVTGyGz97m7p7nouK7q/?touch=0&mouse=0' 
                  frameBorder='0' 
                  width='100%' 
                  height='100%'
                  className="absolute inset-0 w-full h-full scale-125 pointer-events-none"
                  title="3D Chain Animation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="min-h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center py-24">
          <div className="container mx-auto px-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`
                  absolute inset-0 transition-opacity duration-1000 flex items-center
                  ${currentCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
              >
                <div className="w-full">
                  <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-12 md:col-span-5 lg:col-span-4">
                      <FadeInCard index={index}>
                        <div className="mb-8 h-16 w-16 rounded bg-neutral-800/50 flex items-center justify-center text-2xl">
                          {card.icon}
                        </div>
                        <p className="text-3xl font-medium text-neutral-200 mb-6">
                          {card.title}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 rounded-xl bg-neutral-800/30 p-4">
                            <div className="h-4 w-16 bg-neutral-700/50 rounded mb-2"></div>
                            <div className="h-8 w-24 bg-neutral-700/50 rounded"></div>
                          </div>
                          <div className="h-24 rounded-xl bg-neutral-800/30 p-4">
                            <div className="h-4 w-16 bg-neutral-700/50 rounded mb-2"></div>
                            <div className="h-8 w-24 bg-neutral-700/50 rounded"></div>
                          </div>
                        </div>
                      </FadeInCard>
                    </div>
                    <div className="col-span-12 md:col-span-7 lg:col-span-8">
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

      {/* What We're Doing Now Section */}
      <div ref={ref2} className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-cyan-500 mb-12">
              ¿Qué Estamos Haciendo?
            </h2>
            <div className="space-y-6 text-lg text-neutral-400">
              <ul className="list-none space-y-6 pl-0">
                <li className="flex items-start group">
                  <span className="text-orange-500 mr-3 transition-transform duration-300 group-hover:scale-125">✅</span>
                  <span className="group-hover:text-neutral-200 transition-colors duration-300">
                    Apoyando clubs Web3 universitarios en toda LATAM.
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-white mr-3 transition-transform duration-300 group-hover:scale-125">✅</span>
                  <span className="group-hover:text-neutral-200 transition-colors duration-300">
                    Ejecutando el programa Campus Points para recompensar el aprendizaje y la participación.
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-cyan-500 mr-3 transition-transform duration-300 group-hover:scale-125">✅</span>
                  <span className="group-hover:text-neutral-200 transition-colors duration-300">
                    Colaborando con ecosistemas líderes para ofrecer acceso a hackathons, empleos y grants.
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-orange-500 mr-3 transition-transform duration-300 group-hover:scale-125">✅</span>
                  <span className="group-hover:text-neutral-200 transition-colors duration-300">
                    Lanzando la App de Campus On Chain para seguir tu progreso, conectar con otros y desbloquear recompensas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 