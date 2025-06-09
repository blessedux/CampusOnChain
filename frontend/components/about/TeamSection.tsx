'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Kaream Badillo",
    title: "Community Lead & Web Developer",
    bio: "Desarrolladora web con foco en HTML, CSS y JavaScript. Activa en comunidades Web3 en Latinoamérica, donde impulsa la inclusión y participación de nuevos talentos en tecnología y blockchain.",
    avatar: "/PFPs/pixelcat.webp",
  },
  {
    name: "Carlos Concha",
    title: "Cultural Programs Lead",
    bio: "Músico y productor cultural. Fundador y vocalista de la banda chilena Cleaver. Enfocado en conectar arte, música y nuevas tecnologías para fortalecer comunidades creativas.",
    avatar: "/PFPs/pixelfox.webp",
  },
  {
    name: "Simón Espínola",
    title: "University Partnerships & Product Manager",
    bio: "Ingeniero comercial. Forma parte del equipo de Dob Protocol, desarrollando productos Web3 centrados en la experiencia del usuario. Conecta el mundo académico con la innovación digital.",
    avatar: "/PFPs/pixelowl.webp",
  },
  {
    name: "Mauro Ojeda",
    title: "Co-founder & Global Strategy",
    bio: "Ingeniero en computación. Especialista en educación tecnológica y desarrollo de ecosistemas blockchain en universidades. Diseña estrategias para la expansión regional de proyectos Web3.",
    avatar: "/PFPs/pixelcat.webp",
  },
  {
    name: "Joseph Sánchez",
    title: "Co-founder & Executive Director",
    bio: "Comunicador y organizador de comunidades tecnológicas. Dirige iniciativas educativas y gremiales enfocadas en la adopción y comprensión de tecnologías descentralizadas.",
    avatar: "/PFPs/pixelfox.webp",
  },
  {
    name: "Fabio Buscio",
    title: "Co-founder & Marketing Director",
    bio: "Publicista con experiencia en estrategia, comunicación y crecimiento de comunidades Web3. Enfocado en educación, storytelling y adopción de nuevas tecnologías desde una perspectiva creativa y humana.",
    avatar: "/PFPs/pixelowl.webp",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-white/20">
              <Avatar className="w-20 h-20 mb-4 border-2 border-orange-500">
                <AvatarImage src={member.avatar} />
                <AvatarFallback className="bg-gray-700 text-gray-300 text-2xl">
                  {member.name[0]}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold text-orange-300 mb-1">{member.name}</h3>
              <div className="text-sm text-orange-100 mb-2 font-semibold">{member.title}</div>
              <p className="text-sm text-white/90 mb-2">{member.bio}</p>
            </div>
        ))}
      </div>
    </div>
    </section>
  );
} 