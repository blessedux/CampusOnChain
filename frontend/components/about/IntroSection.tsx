import { useInView } from 'react-intersection-observer';
import { AnimatedText } from './AnimatedText';
import { GradientText } from './GradientText';

export const IntroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="min-h-[80vh] flex items-center">
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
  );
}; 