'use client';

import { useInView } from 'react-intersection-observer';
import { TiltedCard } from './about/TiltedCard';
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const teamMembers = [
  {
    name: 'Fabio Buscio',
    role: 'Co-Founder & CEO',
    image: '/team/fabiobuscio.png',
    bio: 'Apasionado por conectar la educación con la tecnología Web3. Liderando la visión de Campus On Chain.',
    socials: {
      twitter: 'https://twitter.com/fabiobuscio',
      linkedin: 'https://linkedin.com/in/fabiobuscio'
    }
  },
  {
    name: 'Joseph Sanches',
    role: 'Co-Founder & CTO',
    image: '/team/josephsanchez.png',
    bio: 'Desarrollador full-stack y entusiasta de blockchain. Construyendo los cimientos técnicos de nuestra plataforma.',
    socials: {
      twitter: 'https://twitter.com/josephsanches',
      linkedin: 'https://linkedin.com/in/josephsanches'
    }
  },
  {
    name: 'Simon Espinola',
    role: 'Head of Community',
    image: '/team/simonespinola.png',
    bio: 'Constructor de comunidades y educador Web3. Fomentando conexiones en toda América Latina.',
    socials: {
      twitter: 'https://twitter.com/simonespinola',
      linkedin: 'https://linkedin.com/in/simonespinola'
    }
  },
  {
    name: 'Kaream Badillo',
    role: 'Head of Operations',
    image: '/team/kareambadillo.png',
    bio: 'Experto en operaciones enfocado en escalar iniciativas educativas en Web3.',
    socials: {
      twitter: 'https://twitter.com/kareambadillo',
      linkedin: 'https://linkedin.com/in/kareambadillo'
    }
  },
  {
    name: 'Mauro Ojeda',
    role: 'Co-Founder & Global Strategy',
    image: '/team/mauroojeda.png',
    bio: 'Ingeniero en computación. Especialista en educación tecnológica y desarrollo de ecosistemas blockchain en universidades.',
    socials: {
      twitter: 'https://twitter.com/mauroojeda',
      linkedin: 'https://linkedin.com/in/mauroojeda'
    }
  },
  {
    name: 'Carlos Concha',
    role: 'Cultural Programs Lead',
    image: '/team/carlosconcha.png',
    bio: 'Músico y productor cultural. Fundador y vocalista de la banda chilena Cleaver. Enfocado en conectar arte, música y nuevas tecnologías para fortalecer comunidades creativas.',
    socials: {
      twitter: 'https://twitter.com/carlosconcha',
      linkedin: 'https://linkedin.com/in/carlosconcha'
    }
  }
];

export const TeamSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-cyan-500 mb-16 text-center">
            Nuestro Equipo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="flex flex-col items-center relative">
                {/* Primary Backdrop Light Effect */}
                <div className="absolute inset-0 -z-10 translate-y-6 blur-3xl">
                  <div className="h-full w-full bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-[2.5rem] opacity-30" />
                </div>
                {/* Secondary Light Effect */}
                <div className="absolute inset-0 -z-10 translate-y-4 blur-2xl">
                  <div className="h-full w-full bg-gradient-to-b from-orange-500/20 via-white/30 to-transparent rounded-[2.5rem] opacity-25" />
                </div>
                
                <TiltedCard
                  imageSrc={member.image}
                  altText={`${member.name} - ${member.role}`}
                  containerHeight="300px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="absolute inset-0 w-full h-full">
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      {/* Content container */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        {/* Name and Role */}
                        <div className="space-y-1 mb-2">
                          <h3 className="text-xl font-bold text-white">{member.name}</h3>
                          <p className="text-sm text-orange-500">{member.role}</p>
                        </div>
                        
                        {/* Bio with hover reveal */}
                        <p className="text-sm text-neutral-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 leading-relaxed mb-4">
                          {member.bio}
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-end space-x-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <a 
                            href={member.socials.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-orange-500 transition-colors"
                          >
                            <FaXTwitter size={16} />
                          </a>
                          <a 
                            href={member.socials.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-orange-500 transition-colors"
                          >
                            <FaLinkedin size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  }
                  className="group"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 