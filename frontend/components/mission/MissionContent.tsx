'use client';

import React from 'react';

export const MissionContent = () => {
  return (
    <div className="min-h-[80vh] flex items-center py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Content */}
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-cyan-500 mb-12">
                Campus on Chain
              </h2>
              
              <div className="space-y-8 text-lg text-neutral-300 leading-relaxed">
                <p>
                  Campus on Chain es una plataforma innovadora que conecta a estudiantes universitarios con el ecosistema Web3, 
                  transformando la experiencia educativa y profesional a través de la tecnología blockchain. Queremos ser el puente 
                  entre las universidades tradicionales y el ecosistema Web3, creando un espacio donde cada estudiante 
                  tiene su propia identidad digital verificable y sus logros académicos y profesionales se tokenizan como NFTs y POAPs.
                </p>
                
                <p>
                  Empoderamos a los estudiantes con conocimiento y oportunidades Web3, construyendo la red más grande 
                  de estudiantes universitarios interesados en Web3 de Sudamérica. 
                  A través de nuestra plataforma, los estudiantes pueden acceder a beneficios reales como descuentos y airdrops, 
                  mientras se conectan con la comunidad estudiantil a través de eventos, hackathons y conferencias especializadas 
                  en tecnologías descentralizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};