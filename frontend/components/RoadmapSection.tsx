'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface RoadmapItem {
  quarter: string;
  year: string;
  title: string;
  items: string[];
}

const roadmapData: RoadmapItem[] = [
  {
    quarter: '2024',
    year: '2024',
    title: '2024',
    items: [
      'Q1 - Preparación y desarrollo inicial de la plataforma',
      'Q2 - Desarrollo de la plataforma beta con certificados verificables en blockchain',
      'Q3 - Campus On Chain se constituye oficialmente como organización sin fines de lucro bajo la regulación chilena',
      'Q4 - Integración con universidades piloto en Chile y América Latina'
    ]
  },
  {
    quarter: '2025',
    year: '2025',
    title: '2025',
    items: [
      'Q1 - Obtiene apoyo oficial de Stellar Foundation para el desarrollo de la plataforma',
      'Q2 - Alianza estratégica con la Pontificia Universidad Católica de Chile',
      'Q3 - Campus On Chain se convierte en partner oficial de ETH Chile Conference y ETH Chile Hackathon 2025',
      'Q4 - Expansión a 5 universidades en la región con programas activos'
    ]
  },
  {
    quarter: '2026',
    year: '2026',
    title: '2026',
    items: [
      'Q1 - Alcanza el apoyo de 10 universidades en América Latina',
      'Q2 - Establecimiento de programa permanente de educación Web3',
      'Q3 - Sistema de mentoría para identificar y formar builders Web3',
      'Q4 - Plataforma de hackathons y competencias blockchain interuniversitarias'
    ]
  },
  {
    quarter: '2027',
    year: '2027',
    title: '2027',
    items: [
      'Q1 - Go-to-market global como plataforma interuniversitaria',
      'Q2 - Herramienta de campus para encontrar equipos de hackathons y amigos',
      'Q3 - Sistema de logros on-chain y credenciales verificables',
      'Q4 - Campus On Chain se convierte en la app principal para todas las universidades del país y busca expansión por toda América Latina'
    ]
  }
];

export default function RoadmapSection() {
  const [activeQuarter, setActiveQuarter] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileTapped, setIsMobileTapped] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // GSAP-like motion values for shapes
  const shape1X = useMotionValue(0);
  const shape1Y = useMotionValue(0);
  const shape2X = useMotionValue(0);
  const shape2Y = useMotionValue(0);
  const shape3X = useMotionValue(0);
  const shape3Y = useMotionValue(0);
  
  // Spring animations for smooth movement
  const springConfig = { stiffness: 150, damping: 15 };
  const shape1SpringX = useSpring(shape1X, springConfig);
  const shape1SpringY = useSpring(shape1Y, springConfig);
  const shape2SpringX = useSpring(shape2X, springConfig);
  const shape2SpringY = useSpring(shape2Y, springConfig);
  const shape3SpringX = useSpring(shape3X, springConfig);
  const shape3SpringY = useSpring(shape3Y, springConfig);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize circles to center position
  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setMousePosition({ x: centerX, y: centerY });
      
      // Set initial positions
      shape1X.set(centerX - 700);
      shape1Y.set(centerY - 700);
      shape2X.set(centerX - 550);
      shape2Y.set(centerY - 550);
      shape3X.set(centerX - 400);
      shape3Y.set(centerY - 400);
    }
  }, [shape1X, shape1Y, shape2X, shape2Y, shape3X, shape3Y]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isMobile) return; // Don't track mouse on mobile
      
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      
      setMousePosition({ x: mouseX, y: mouseY });
      
      // Center all circles on the mouse cursor
      shape1X.set(mouseX - 700); // Center the 1400px circle (1400/2 = 700)
      shape1Y.set(mouseY - 700);
      
      // Stagger delay of -0.05 seconds (50ms)
      setTimeout(() => {
        shape2X.set(mouseX - 550); // Center the 1100px circle (1100/2 = 550)
        shape2Y.set(mouseY - 550);
      }, 50);
      
      setTimeout(() => {
        shape3X.set(mouseX - 400); // Center the 800px circle (800/2 = 400)
        shape3Y.set(mouseY - 400);
      }, 100);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (!isMobile) return;
      
      const touch = event.touches[0];
      const touchX = touch.clientX;
      const touchY = touch.clientY;
      
      setMousePosition({ x: touchX, y: touchY });
      setIsMobileTapped(true);
      
      // Center circles on touch position
      shape1X.set(touchX - 700);
      shape1Y.set(touchY - 700);
      
      setTimeout(() => {
        shape2X.set(touchX - 550);
        shape2Y.set(touchY - 550);
      }, 50);
      
      setTimeout(() => {
        shape3X.set(touchX - 400);
        shape3Y.set(touchY - 400);
      }, 100);
    };

    const handleTouchEnd = () => {
      if (!isMobile) return;
      
      // Return circles to center after touch ends
      setTimeout(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          setMousePosition({ x: centerX, y: centerY });
          
          shape1X.set(centerX - 700);
          shape1Y.set(centerY - 700);
          
          setTimeout(() => {
            shape2X.set(centerX - 550);
            shape2Y.set(centerY - 550);
          }, 50);
          
          setTimeout(() => {
            shape3X.set(centerX - 400);
            shape3Y.set(centerY - 400);
          }, 100);
        }
        setIsMobileTapped(false);
      }, 1000); // Return to center after 1 second
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, shape1X, shape1Y, shape2X, shape2Y, shape3X, shape3Y]);

  const handleQuarterHover = (quarterIndex: number) => {
    setActiveQuarter(quarterIndex);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-transparent" style={{ 
      overflowX: 'hidden', 
      overflowY: 'visible',
      clipPath: 'none',
      isolation: 'isolate',
      marginTop: '-400px' // Increased overlap with ValuePropSection
    }}>
      {/* Background Shapes with GSAP-like movement */}
      <div className="absolute z-1" style={{ 
        top: '0px', // Extend above the section to allow overflow
        left: '0', 
        right: '0', 
        bottom: '0',
        overflowX: 'hidden', 
        overflowY: 'visible',
        pointerEvents: 'none',
        clipPath: 'none',
        isolation: 'isolate'
      }}>
        <motion.div 
          className="absolute"
          style={{
            width: '1400px',
            height: '1400px',
            borderRadius: '50%',
            background: '#071129',
            boxShadow: 'inset -25px -25px 50px #ff6b35, inset 25px 25px 50px #000000',
            opacity: 0.6,
            filter: 'blur(20px)',
            x: shape1SpringX,
            y: shape1SpringY,
            clipPath: 'none'
          }}
        />
        <motion.div 
          className="absolute"
          style={{
            width: '1100px',
            height: '1100px',
            borderRadius: '50%',
            background: '#071129',
            boxShadow: 'inset -25px -25px 50px #ff6b35, inset 25px 25px 50px #000000',
            opacity: 0.5,
            filter: 'blur(10px)',
            x: shape2SpringX,
            y: shape2SpringY,
            clipPath: 'none'
          }}
        />
        <motion.div 
          className="absolute"
          style={{
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: '#071129',
            boxShadow: 'inset -25px -25px 50px #ff6b35, inset 25px 25px 50px #000000',
            opacity: 0.4,
            filter: 'blur(0px)',
            x: shape3SpringX,
            y: shape3SpringY,
            clipPath: 'none'
          }}
        />
      </div>

      {/* Mouse Cursor Effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-100"
        style={{
          boxShadow: 'inset -25px -25px 50px #ff6b35, inset 25px 25px 50px #000000',
          userSelect: 'none',
          opacity: 0.3,
          filter: 'blur(0px)',
          x: mousePosition.x - 250, // Center the 500px circle (500/2 = 250)
          y: mousePosition.y - 250 // Center the cursor circle
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      {/* Roadmap Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <motion.p 
                className="text-orange-500 text-xl font-medium mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Roadmap
              </motion.p>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-cyan-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Future Plans
              </motion.h2>
            </div>
            
            <div className="w-full lg:w-1/2">
              <ul className="flex justify-center lg:justify-end space-x-8">
                {roadmapData.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveQuarter(index)}
                      className={`text-lg font-medium transition-all duration-300 hover:text-white ${
                        activeQuarter === index ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {item.year}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Roadmap Quarters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapData.map((quarter, index) => (
              <motion.div
                key={index}
                className={`quarter q${index + 1} relative text-center transition-all duration-700 ${
                  activeQuarter === index ? 'active' : ''
                }`}
                onMouseEnter={() => handleQuarterHover(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Year Title (shown when not active) */}
                <div className={`quarter-title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                  activeQuarter === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <h2 className="text-3xl font-bold text-white/20">{quarter.year}</h2>
                </div>

                {/* Quarter Content (shown when active) */}
                <div className={`quarter-content transition-all duration-700 ${
                  activeQuarter === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h4 className="text-2xl font-semibold text-white mb-6">{quarter.title}</h4>
                  <ul className="space-y-4 text-left">
                    {quarter.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 