import { useInView } from 'react-intersection-observer';
import { Footer } from './Footer';

export const FinalSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div id="final-section" ref={ref} className="relative flex items-center bg-gradient-to-b from-black to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
  );
}; 