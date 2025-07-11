import { useInView } from 'react-intersection-observer';
import { AnimatedText } from './AnimatedText';
import { GradientText } from './GradientText';
// import { BackgroundVideo } from '@/components/ui/background-video';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const IntroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="min-h-[80vh] flex items-center mb-12">
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
              {/* Botón Sobre Nosotros */}
              <a
                href="/nosotros"
                className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 text-lg"
              >
                Sobre Nosotros
              </a>
            </div>
          </div>

          {/* Imagen con fade in on scroll */}
          <div className="col-span-12 md:col-span-6 relative overflow-hidden">
            <div className="aspect-square w-full relative rounded-[2.5rem] overflow-hidden border border-neutral-800/30 bg-neutral-950/20 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-10" />
              <motion.img
                src="/IMG_5351-2.webp"
                alt="Campus On Chain"
                className="scale-[1.35] md:scale-125 md:translate-y-0 translate-y-8 object-cover w-full h-full"
                style={{ opacity: isImageLoaded ? 1 : 0 }}
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 