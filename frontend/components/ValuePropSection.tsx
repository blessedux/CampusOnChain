'use client';

import React, { useState, useEffect } from 'react';
import { MeteorShower } from "@/components/core/backgrounds/meteor-shower";
import Image from 'next/image';

export default function ValuePropSection() {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Debug logging
  useEffect(() => {
    console.log('🔍 ValuePropSection: Component mounted');
    console.log('🔍 ValuePropSection: Initial state - splineLoaded:', splineLoaded, 'iframeLoaded:', iframeLoaded);
  }, []);

  useEffect(() => {
    console.log('🔍 ValuePropSection: State changed - splineLoaded:', splineLoaded, 'iframeLoaded:', iframeLoaded);
  }, [splineLoaded, iframeLoaded]);

  // Handle iframe load
  const handleIframeLoad = () => {
    console.log('🔍 ValuePropSection: Iframe load event triggered');
    setIframeLoaded(true);
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      console.log('🔍 ValuePropSection: Setting splineLoaded to true after delay');
      setSplineLoaded(true);
    }, 500);
  };

  // Handle iframe error
  const handleIframeError = (error: any) => {
    console.error('❌ ValuePropSection: Iframe error:', error);
  };

  // Test Spline URL accessibility
  useEffect(() => {
    const testSplineUrl = async () => {
      try {
        console.log('🔍 ValuePropSection: Testing Spline URL accessibility...');
        const response = await fetch('https://my.spline.design/cutecomputerfollowcursor-AT0SxKGRYhXCNQXCt30IFFgA/', {
          method: 'HEAD',
          mode: 'no-cors' // This will still show if the URL is reachable
        });
        console.log('🔍 ValuePropSection: Spline URL test response:', response);
      } catch (error) {
        console.error('❌ ValuePropSection: Spline URL test failed:', error);
      }
    };
    
    testSplineUrl();
  }, []);

  // Handle mouse events for debugging
  const handleMouseEnter = () => {
    console.log('🔍 ValuePropSection: Mouse entered Spline container');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only log occasionally to avoid spam
    if (Math.random() < 0.01) {
      console.log('🔍 ValuePropSection: Mouse move in Spline container', { x: e.clientX, y: e.clientY });
    }
  };

  return (
    <section className="relative min-h-[180vh] lg:min-h-[1200px] bg-black py-24 lg:py-32 mt-auto">
      <MeteorShower className="absolute inset-0" number={30}>
        <div className="relative z-10 container mx-auto px-4">
          
          {/* Top Wide Container - Animation and Title */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="relative w-full h-[400px] mb-16">
              {/* Spline Animation Container */}
              <div 
                className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-neutral-800/30 bg-neutral-800/20 backdrop-blur-sm shadow-2xl"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
              >
                {/* Placeholder Image (shown while Spline loads) */}
                {!splineLoaded && (
                  <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                    <Image
                      src="/Cute_Computer_lazyload.webp"
                      alt="Cute Computer Loading"
                      fill
                      className="object-cover rounded-[2.5rem]"
                      priority
                      onLoad={() => console.log('🔍 ValuePropSection: Placeholder image loaded')}
                      onError={(e) => console.error('❌ ValuePropSection: Placeholder image error:', e)}
                    />
                  </div>
                )}
                
                {/* Spline Animation - Scaled up to crop borders */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    splineLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: 'scale(1.4)',
                    transformOrigin: 'center center'
                  }}
                >
                  <iframe 
                    src='https://my.spline.design/cutecomputerfollowcursor-AT0SxKGRYhXCNQXCt30IFFgA/' 
                    frameBorder='0' 
                    width='100%' 
                    height='100%'
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                    className="rounded-[2.5rem]"
                    style={{ pointerEvents: 'auto' }}
                  />
                </div>
                
                {/* Darker overlay for mobile only */}
                <div className="absolute inset-0 bg-black/40 sm:hidden rounded-[2.5rem]"></div>
                
                {/* Title Overlay - Centered on mobile, right-aligned on tablet and desktop */}
                <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center z-10 px-8 md:pr-16 pointer-events-none">
                  <div className="space-y-6 text-center md:text-right pointer-events-none max-w-md md:max-w-lg">
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg pointer-events-none">
                      Construye el futuro del{' '}
                      <span className="text-orange-500">
                        Web3
                      </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-lg pointer-events-none">
                      Únete a la revolución blockchain con Campus On Chain. Aprende, construye y conecta con una comunidad global de builders que están definiendo el futuro de la tecnología descentralizada.
                    </p>
                    
                    <a 
                      href="https://docs.google.com/forms/u/0/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 pointer-events-auto"
                    >
                      Quiero un evento en mi universidad
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto pb-16 lg:pb-24">
            {/* Certificados Verificables */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl -m-2 group-hover:from-orange-500/20 transition-all duration-300"></div>
              <div className="relative p-6 border border-neutral-800/30 rounded-xl bg-neutral-950/30 backdrop-blur-sm">
                <div className="h-12 w-12 mb-6 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Certificados Verificables</h3>
                <p className="text-neutral-300">
                  Tus logros académicos quedan registrados de manera inmutable en la blockchain, garantizando su autenticidad y accesibilidad permanente.
                </p>
              </div>
            </div>

            {/* Comunidad Descentralizada */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl -m-2 group-hover:from-white/20 transition-all duration-300"></div>
              <div className="relative p-6 border border-neutral-800/30 rounded-xl bg-neutral-950/30 backdrop-blur-sm">
                <div className="h-12 w-12 mb-6 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Comunidad Descentralizada</h3>
                <p className="text-neutral-300">
                  Forma parte de una red académica sin fronteras donde estudiantes y profesores colaboran y comparten conocimiento de manera directa.
                </p>
              </div>
            </div>

            {/* Oportunidades Únicas */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-2xl -m-2 group-hover:from-cyan-500/20 transition-all duration-300"></div>
              <div className="relative p-6 border border-neutral-800/30 rounded-xl bg-neutral-950/30 backdrop-blur-sm">
                <div className="h-12 w-12 mb-6 text-cyan-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Oportunidades Únicas</h3>
                <p className="text-neutral-300">
                  Accede a experiencias educativas innovadoras, programas especializados y conexiones directas con la industria blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MeteorShower>
    </section>
  );
} 