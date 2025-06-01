import { useInView } from 'react-intersection-observer';
import { AnimatedText } from './AnimatedText';
import { GradientText } from './GradientText';
import { BackgroundVideo } from '@/components/ui/background-video';
import { useEffect, useState } from 'react';

export const IntroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      console.log('Intro section is in view');
    }
  }, [inView]);

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
            </div>
          </div>

          {/* Video Background */}
          <div className="col-span-12 md:col-span-6 relative overflow-hidden">
            <div className="aspect-square w-full relative rounded-[2.5rem] overflow-hidden border border-neutral-800/30 bg-neutral-950/20 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-10" />
              <BackgroundVideo 
                src="/videos/chain2_optimized_loop.webm"
                className="scale-[1.35] md:scale-125 md:translate-y-0 translate-y-8"
                opacity={0.8}
                onLoadStateChange={setIsVideoLoaded}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 