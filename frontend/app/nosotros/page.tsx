"use client";

import React from 'react';
import { AnimatedText } from '@/components/about/AnimatedText';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-blue-950 relative flex items-center justify-center px-4 py-16">
      {/* Flecha para volver al home */}
      <Link href="/" className="fixed top-8 left-8 flex items-center gap-2 text-white/80 hover:text-orange-400 transition-colors text-lg z-20">
        <FiArrowLeft size={28} />
        <span className="hidden sm:inline">Inicio</span>
      </Link>
      <div className="w-full max-w-5xl xl:max-w-6xl bg-black/60 rounded-3xl shadow-2xl p-8 md:p-16 border border-neutral-800/40 text-white text-center">
        <AnimatedText>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">¿Quiénes somos?</h1>
        </AnimatedText>
        <AnimatedText>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Nuestra historia</h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-lg leading-relaxed text-neutral-200">
            Campus On Chain nace en 2024, cuando tres estudiantes entusiastas de la industria blockchain comenzaron a buscar espacios donde aprender, compartir y conectar con otros interesados en el mundo Web3. Al notar la falta de instancias formativas y redes dentro del entorno universitario chileno, entendieron que no bastaba con esperar a que esas oportunidades llegaran: había que crearlas. Lo que comenzó como una búsqueda personal, se transformó en una visión compartida. Mauro, Fabio y Joseph decidieron unir fuerzas y construir una iniciativa que acerque a las nuevas generaciones a las tecnologías que están transformando el mundo.<br/><br/>
            Campus On Chain no es solo una serie de eventos ni una comunidad pasajera. Es una fundación constituida en Chile con la misión de llevar el aprendizaje de blockchain, inteligencia artificial, metaverso y otras tecnologías emergentes a cada rincón del país, y proyectar este modelo educativo hacia nuevas regiones. Nuestra esencia es conectar conocimiento, tecnología y propósito para que más estudiantes pasen de ser espectadores a protagonistas del cambio.
          </p>
        </AnimatedText>
        <AnimatedText>
          <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">El problema que identificamos</h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-lg leading-relaxed text-neutral-200">
            Mientras la innovación avanza a un ritmo acelerado, la educación tradicional se mantiene en modelos que muchas veces no responden a los desafíos del presente. Temas como blockchain, identidad digital, contratos inteligentes o inteligencia artificial aplicada siguen fuera de la mayoría de los programas académicos, lo que limita el acceso de los estudiantes a herramientas clave y a redes de colaboración que potencien sus ideas.<br/><br/>
            Campus On Chain nace para acortar esa distancia. Diseñamos experiencias educativas que permiten aprender haciendo, conectamos a estudiantes con referentes del ecosistema y promovemos entornos donde la innovación, la curiosidad y el impacto se encuentran.
          </p>
        </AnimatedText>

        {/* Misión */}
        <AnimatedText>
          <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">Misión</h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-lg leading-relaxed text-neutral-200">
            Entregar a estudiantes y universidades las herramientas, experiencias y oportunidades necesarias para que lideren el futuro con tecnologías emergentes.
          </p>
        </AnimatedText>

        {/* Visión */}
        <AnimatedText>
          <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">Visión</h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-lg leading-relaxed text-neutral-200">
            Posicionar a Chile como referente en educación Web3, integrando blockchain, inteligencia artificial y tecnología de vanguardia en la vida universitaria.
          </p>
        </AnimatedText>

        {/* Propósito */}
        <AnimatedText>
          <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">Propósito</h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-lg leading-relaxed text-neutral-200">
            Impulsar la adopción de tecnologías emergentes en universidades, mejorando vidas, comunidades y abriendo nuevos caminos de desarrollo.
          </p>
        </AnimatedText>
      </div>
    </div>
  );
} 