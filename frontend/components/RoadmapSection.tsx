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
    quarter: '2023',
    year: '2023',
    title: '2023',
    items: [
      'Q1 - Lanzamiento de la plataforma beta con certificados verificables',
      'Q2 - Integración con universidades piloto en América Latina',
      'Q3 - Desarrollo de la comunidad inicial de estudiantes Web3',
      'Q4 - Implementación del sistema de reputación blockchain'
    ]
  },
  {
    quarter: '2024',
    year: '2024',
    title: '2024',
    items: [
      'Q1 - Expansión a 10+ universidades en la región',
      'Q2 - Lanzamiento de programas especializados en DeFi y NFTs',
      'Q3 - Integración con protocolos DeFi para incentivos',
      'Q4 - Desarrollo de marketplace de oportunidades laborales'
    ]
  },
  {
    quarter: '2025',
    year: '2025',
    title: '2025',
    items: [
      'Q1 - Plataforma de hackathons y competencias blockchain',
      'Q2 - Sistema de mentoría con expertos de la industria',
      'Q3 - Integración con DAOs para gobernanza estudiantil',
      'Q4 - Lanzamiento de certificaciones avanzadas'
    ]
  },
  {
    quarter: '2026',
    year: '2026',
    title: '2026',
    items: [
      'Q1 - Expansión global a Europa y Asia',
      'Q2 - Plataforma de investigación colaborativa Web3',
      'Q3 - Sistema de financiamiento descentralizado para estudiantes',
      'Q4 - Lanzamiento de la versión 2.0 con IA integrada'
    ]
  }
];

export default function RoadmapSection() {
  const [activeQuarter, setActiveQuarter] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shape1X, shape1Y, shape2X, shape2Y, shape3X, shape3Y]);

  const handleQuarterHover = (quarterIndex: number) => {
    setActiveQuarter(quarterIndex);
  };

  return (
    <section className="relative min-h-screen bg-transparent -mt-32" style={{ overflowX: 'hidden', overflowY: 'visible' }}>
      {/* Background Shapes with GSAP-like movement */}
      <div className="absolute z-1" style={{ 
        top: '-100vh', 
        left: '0', 
        right: '0', 
        bottom: '0',
        overflowX: 'hidden', 
        overflowY: 'visible',
        pointerEvents: 'none'
      }}>
        <motion.div 
          className="absolute"
          style={{
            width: '1400px',
            height: '1400px',
            borderRadius: '50%',
            background: '#071129',
            boxShadow: 'inset -25px -25px 50px #ff6b35, inset 25px 25px 50px #000000',
            opacity: 0.8,
            filter: 'blur(20px)',
            x: shape1SpringX,
            y: shape1SpringY
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
            opacity: 0.8,
            filter: 'blur(10px)',
            x: shape2SpringX,
            y: shape2SpringY
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
            opacity: 0.8,
            filter: 'blur(0px)',
            x: shape3SpringX,
            y: shape3SpringY
          }}
        />
      </div>

      {/* Mouse Cursor Effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-100"
        style={{
          boxShadow: 'inset -25px -25px 50px #ff6b35, inset 25px 25px 50px #000000',
          userSelect: 'none',
          opacity: 0.8,
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