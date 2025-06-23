'use client';

import { useInView } from 'react-intersection-observer';
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Fabio Buscio',
    role: 'Co-Founder & CEO',
    image: '/team/fabio.jpeg',
    bio: 'Apasionado por conectar la educación con la tecnología Web3. Liderando la visión de Campus On Chain.',
    socials: {
      twitter: 'https://twitter.com/fabiobuscio',
      linkedin: 'https://linkedin.com/in/fabiobuscio'
    }
  },
  {
    name: 'Joseph Sanches',
    role: 'Co-Founder & CTO',
    image: '/team/joseph.jpeg',
    bio: 'Desarrollador full-stack y entusiasta de blockchain. Construyendo los cimientos técnicos de nuestra plataforma.',
    socials: {
      twitter: 'https://twitter.com/josephsanches',
      linkedin: 'https://linkedin.com/in/josephsanches'
    }
  },
  {
    name: 'Simon Espinola',
    role: 'Head of Community',
    image: '/team/simon.jpeg',
    bio: 'Constructor de comunidades y educador Web3. Fomentando conexiones en toda América Latina.',
    socials: {
      twitter: 'https://twitter.com/simonespinola',
      linkedin: 'https://linkedin.com/in/simonespinola'
    }
  },
  {
    name: 'Kaream Badillo',
    role: 'Head of Operations',
    image: '/team/kaream.jpeg',
    bio: 'Experto en operaciones enfocado en escalar iniciativas educativas en Web3.',
    socials: {
      twitter: 'https://twitter.com/kareambadillo',
      linkedin: 'https://linkedin.com/in/kareambadillo'
    }
  }
];

export const TeamSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const handleCardClick = (memberName: string) => {
    console.log('🎯 Card clicked:', memberName);
    setExpandedCards(prev => {
      const newState = {
        ...prev,
        [memberName]: !prev[memberName]
      };
      console.log('New state:', newState);
      return newState;
    });
  };

  return (
    <div ref={ref} className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-cyan-500 mb-16 text-center">
            Nuestro Equipo
          </h2>
          
          {/* Debug Panel */}
          <div className="mb-8 p-4 bg-black/50 rounded-lg border border-orange-500/30">
            <h3 className="text-orange-500 font-semibold mb-2">Debug: Card States</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex justify-between">
                  <span className="text-white">{member.name}:</span>
                  <span className={expandedCards[member.name] ? 'text-green-400' : 'text-red-400'}>
                    {expandedCards[member.name] ? 'Social' : 'Bio'}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                onClick={() => setExpandedCards({})}
                className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
              >
                Reset All
              </button>
              <button 
                onClick={() => {
                  const allExpanded = teamMembers.reduce((acc, member) => {
                    acc[member.name] = true;
                    return acc;
                  }, {} as { [key: string]: boolean });
                  setExpandedCards(allExpanded);
                }}
                className="px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600"
              >
                Expand All
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="flex flex-col items-center relative group">
                {/* Backdrop Light Effects */}
                <div className="absolute inset-0 -z-10 translate-y-6 blur-3xl">
                  <div className="h-full w-full bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-[2.5rem] opacity-30" />
                </div>
                <div className="absolute inset-0 -z-10 translate-y-4 blur-2xl">
                  <div className="h-full w-full bg-gradient-to-b from-orange-500/20 via-white/30 to-transparent rounded-[2.5rem] opacity-25" />
                </div>
                
                {/* Card Container */}
                <div className="relative w-full h-[300px] rounded-[2.5rem] overflow-hidden">
                  {/* Background Image - Always visible */}
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Clickable overlay for the entire card */}
                  <div 
                    className="absolute inset-0 cursor-pointer z-10"
                    onClick={() => handleCardClick(member.name)}
                  />
                  
                  {/* Status indicator */}
                  <div className={`absolute top-4 right-4 z-20 transition-all duration-300 ${
                    expandedCards[member.name] ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Social
                    </div>
                  </div>
                  
                  {/* Content container */}
                  <div className="absolute inset-x-0 bottom-0 p-4 z-20">
                    {/* Name and Role - Always visible */}
                    <div className="space-y-1 mb-2">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-orange-500">{member.role}</p>
                    </div>
                    
                    {/* Bio text - fades out when expanded */}
                    <div 
                      className={`transition-all duration-700 ease-in-out ${
                        expandedCards[member.name] 
                          ? 'opacity-0 transform translate-y-4 max-h-0 overflow-hidden' 
                          : 'opacity-100 transform translate-y-0 max-h-32'
                      }`}
                    >
                      <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social Icons - fades in when expanded */}
                    <div 
                      className={`flex justify-end space-x-3 transition-all duration-700 ease-in-out ${
                        expandedCards[member.name] 
                          ? 'opacity-100 transform translate-y-0' 
                          : 'opacity-0 transform translate-y-4'
                      }`}
                    >
                      <a 
                        href={member.socials.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-orange-500 transition-colors duration-300 p-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaXTwitter size={20} />
                      </a>
                      <a 
                        href={member.socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-orange-500 transition-colors duration-300 p-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 