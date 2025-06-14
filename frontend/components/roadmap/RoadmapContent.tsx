import React from 'react';
import { motion } from 'framer-motion';
import Stepper, { Step } from './Stepper';

export const RoadmapContent = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-cyan-500 mb-6">
            Nuestro Roadmap
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            De una comunidad universitaria a la red educativa Web3 más influyente de habla hispana
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(`Navegando al paso ${step}`);
            }}
            onFinalStepCompleted={() => console.log("¡Roadmap completado!")}
            backButtonText="Fase Anterior"
            nextButtonText="Siguiente Fase"
            stepCircleContainerClassName="bg-gradient-to-br from-neutral-900/80 to-black/80 backdrop-blur-sm border-neutral-800"
            contentClassName="text-white"
            footerClassName="border-t border-neutral-800"
          >
            {/* Todo el contenido de los Steps aquí... */}
            <Step>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Fase 1: Fundación y Comunidad</h3>
                    <p className="text-orange-400 font-medium">2024 - Estableciendo las bases</p>
                  </div>
                </div>
                {/* ... resto del contenido igual */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-400">✅ Logros completados:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Fundación constituida legalmente en Chile</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Equipo fundador consolidado (Mauro, Fabio, Joseph)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Primeros workshops y meetups realizados</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Alianzas iniciales con Chile DAO y Cámara Blockchain</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-orange-400">🎯 Objetivos clave:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Crear espacios educativos Web3 universitarios</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Identificar el problema educativo en blockchain</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Construir la primera comunidad de estudiantes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Step>
            <Step>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                    🌐
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Fase 2: Plataforma Digital</h3>
                    <p className="text-cyan-400 font-medium">2025 Q1-Q2 - Construcción de infraestructura</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-400">🔨 En desarrollo:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-yellow-400">•</span>
                        <span>Sitio web completo con todas las secciones</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-yellow-400">•</span>
                        <span>Sistema de autenticación con wallet</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-yellow-400">•</span>
                        <span>Blog para documentos, entrevistas y papers</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-yellow-400">•</span>
                        <span>Video introductorio de Campus On Chain</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-orange-400">💡 Funcionalidades clave:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Sección de donaciones para sostener la fundación</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Integración con POAP para eventos</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Perfiles de equipo y ambassadors</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Sistema de contacto y colaboración</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Step>
            <Step>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Fase 3: Programas Educativos</h3>
                    <p className="text-purple-400 font-medium">2025 Q3-Q4 - Escalando la educación</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-400">📚 Programas planificados:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>Bootcamps de blockchain en universidades</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>Programa Campus Points para gamificación</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>Certificaciones on-chain oficiales</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>Red de clubs Web3 universitarios</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-orange-400">🎯 Objetivos de impacto:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Implementar en 10+ universidades chilenas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Formar 1000+ estudiantes en tecnologías Web3</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Crear alianzas con aceleradoras (Seedstars, DART Labs)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Apoyo de blockchains (Stellar, Avalanche)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Step>
            <Step>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl">
                    🌎
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Fase 4: Expansión Regional</h3>
                    <p className="text-green-400 font-medium">2026+ - Liderando en Latinoamérica</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-400">🚀 Visión a largo plazo:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Red educativa Web3 más influyente de habla hispana</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Campus Wallet como herramienta principal</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <span>App móvil para seguimiento y recompensas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Expansión a Argentina, Colombia, México</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-orange-400">💫 Impacto esperado:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>10,000+ estudiantes capacitados en Web3</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>100+ proyectos Web3 con impacto social</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Chile como referente en educación blockchain</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Nueva generación de líderes Web3 latinoamericanos</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/30 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-3">🎯 Nuestra Misión Final</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "Posicionar a Chile como referente en educación Web3, formando una nueva generación de 
                    desarrolladores, emprendedores y líderes que guiarán la revolución tecnológica y económica que viene."
                  </p>
                </div>
              </div>
            </Step>
          </Stepper>
        </motion.div>
      </div>
    </section>
  );
};