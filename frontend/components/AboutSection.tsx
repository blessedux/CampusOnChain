'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  // First paragraph section
  const [ref1, inView1] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Second paragraph section
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="relative min-h-[200vh] bg-black py-24">
      {/* First Section */}
      <div ref={ref1} className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="prose prose-lg prose-invert">
              <p className="text-2xl text-neutral-300 leading-relaxed mb-12">
                ¡Hola! Somos una organización sin fines de lucro que conecta a estudiantes universitarios latinoamericanos con oportunidades reales en Web3. 🌟
              </p>
              
              <div className="space-y-16">
                <p className="text-lg text-neutral-400">Ayudamos a los estudiantes a:</p>
                
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Learn by Doing Box */}
                  <div className="group relative">
                    {/* Content Container */}
                    <div className="relative z-10 h-full rounded-2xl border border-neutral-800/50 bg-neutral-900/50 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-orange-500/50 hover:bg-neutral-900/80">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-orange-500/20 via-transparent to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>
                      
                      {/* Icon Placeholder */}
                      <div className="mb-6 h-12 w-12 rounded bg-neutral-800/50"></div>
                      
                      {/* Text */}
                      <p className="text-lg text-neutral-300 mb-6">
                        Aprender haciendo, a través de hackathons, grants y workshops especializados.
                      </p>
                      
                      {/* Image/Video Placeholder */}
                      <div className="aspect-video w-full rounded-lg bg-neutral-800/50 mb-4"></div>
                      
                      {/* Stats Placeholder */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-16 rounded bg-neutral-800/30"></div>
                        <div className="h-16 rounded bg-neutral-800/30"></div>
                      </div>
                    </div>
                  </div>

                  {/* Earn by Building Box */}
                  <div className="group relative">
                    {/* Content Container */}
                    <div className="relative z-10 h-full rounded-2xl border border-neutral-800/50 bg-neutral-900/50 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/50 hover:bg-neutral-900/80">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>
                      
                      {/* Icon Placeholder */}
                      <div className="mb-6 h-12 w-12 rounded bg-neutral-800/50"></div>
                      
                      {/* Text */}
                      <p className="text-lg text-neutral-300 mb-6">
                        Ganar construyendo, mediante bounties, prácticas y contribuciones open-source.
                      </p>
                      
                      {/* Image/Video Placeholder */}
                      <div className="aspect-video w-full rounded-lg bg-neutral-800/50 mb-4"></div>
                      
                      {/* Stats Placeholder */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-16 rounded bg-neutral-800/30"></div>
                        <div className="h-16 rounded bg-neutral-800/30"></div>
                      </div>
                    </div>
                  </div>

                  {/* Global Network Box */}
                  <div className="group relative">
                    {/* Content Container */}
                    <div className="relative z-10 h-full rounded-2xl border border-neutral-800/50 bg-neutral-900/50 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/50 hover:bg-neutral-900/80">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>
                      
                      {/* Icon Placeholder */}
                      <div className="mb-6 h-12 w-12 rounded bg-neutral-800/50"></div>
                      
                      {/* Text */}
                      <p className="text-lg text-neutral-300 mb-6">
                        Pertenecer a una red global, uniéndose a otros builders más allá de fronteras y disciplinas.
                      </p>
                      
                      {/* Image/Video Placeholder */}
                      <div className="aspect-video w-full rounded-lg bg-neutral-800/50 mb-4"></div>
                      
                      {/* Stats Placeholder */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-16 rounded bg-neutral-800/30"></div>
                        <div className="h-16 rounded bg-neutral-800/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
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