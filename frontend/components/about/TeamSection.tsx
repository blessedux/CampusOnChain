'use client';

import { TiltedCard } from '@/components/ui/tilted-card';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Simon',
    role: 'Founder & CEO',
    bio: 'Blockchain visionary with extensive experience in Web3 education and community building.',
    image: '/team/simon.jpeg'
  },
  {
    name: 'Kaream',
    role: 'CTO',
    bio: 'Technical architect specializing in blockchain infrastructure and smart contract development.',
    image: '/team/kaream.jpeg'
  },
  {
    name: 'Fabio',
    role: 'Head of Product',
    bio: 'Product strategist focused on creating intuitive Web3 learning experiences.',
    image: '/team/fabio.jpeg'
  },
  {
    name: 'Joseph',
    role: 'Head of Operations',
    bio: 'Operations expert with a background in scaling Web3 educational platforms.',
    image: '/team/joseph.jpeg'
  }
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const overlayContent = (
    <div className="absolute inset-0 [transform-style:preserve-3d]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                      rounded-b-[15px] transition-all duration-300 [transform:translateZ(20px)]">
        <div className="flex flex-col justify-between p-8 h-full">
          <div className="transform-gpu [transform-style:preserve-3d] w-full max-w-[85%] mx-auto flex-1 flex items-center justify-center">
            <div className="overflow-hidden [transform:translateZ(20px)]">
              <p className="text-sm text-gray-200 drop-shadow-sm transform -translate-y-full opacity-0 
                           group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-center">
                {member.bio}
              </p>
            </div>
          </div>
          <div className="transform-gpu [transform-style:preserve-3d] w-full max-w-[85%] mx-auto">
            <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-sm [transform:translateZ(30px)] text-center">
              {member.name}
            </h3>
            <p className="text-orange-500 font-medium drop-shadow-sm [transform:translateZ(25px)] text-center">
              {member.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="group relative">
      <div className="absolute inset-0 transition-all duration-300 group-hover:blur-[1px] group-hover:brightness-75">
        <TiltedCard
          imageSrc={member.image}
          altText={`${member.name} - ${member.role}`}
          containerHeight="400px"
          containerWidth="300px"
          imageHeight="100%"
          imageWidth="100%"
          scaleOnHover={1.15}
          rotateAmplitude={12}
          showMobileWarning={false}
          showTooltip={false}
          className="rounded-xl overflow-hidden cursor-pointer"
        />
      </div>
      <div className="relative z-10">
        <TiltedCard
          imageSrc={member.image}
          altText={`${member.name} - ${member.role}`}
          containerHeight="400px"
          containerWidth="300px"
          imageHeight="100%"
          imageWidth="100%"
          scaleOnHover={1.15}
          rotateAmplitude={12}
          showMobileWarning={false}
          showTooltip={false}
          overlayContent={overlayContent}
          displayOverlayContent={true}
          className="rounded-xl overflow-hidden cursor-pointer"
        />
      </div>
    </div>
  );
};

export default function TeamSection() {
  return (
    <div className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Nuestro Equipo</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
} 