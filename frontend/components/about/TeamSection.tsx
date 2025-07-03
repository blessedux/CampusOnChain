'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Kaream Badillo",
    title: "Community Lead",
    avatar: "/team/kareambadillo.webp",
    linkedin: "https://linkedin.com/in/kaream-s-badillo-1725a4325",
    twitter: "https://x.com/kaream_badillo",
  },
  {
    name: "Carlos Concha",
    title: "Cultural Programs Lead",
    avatar: "/team/carlosconcha.webp",
    linkedin: "https://linkedin.com/in/carlosconchabilla",
    twitter: "#",
  },
  {
    name: "Simón Espínola",
    title: "University Partnerships & Product Manager",
    avatar: "/team/simonespinola.webp",
    linkedin: "https://linkedin.com/in/simon-espinola-marin-06a78b86",
    twitter: "https://x.com/Cryptosadhu1",
  },
  {
    name: "Mauro Ojeda",
    title: "Co-founder & Global Strategy",
    avatar: "/team/mauroojeda.webp",
    linkedin: "https://linkedin.com/in/sr-mauro",
    twitter: "https://x.com/campusonchain",
  },
  {
    name: "Joseph Sánchez",
    title: "Co-founder & Executive Director",
    avatar: "/team/josephsanchez.webp",
    linkedin: "https://linkedin.com/in/josephhsv",
    twitter: "https://x.com/campusonchain",
  },
  {
    name: "Fabio Buscio",
    title: "Co-founder & Marketing Director",
    avatar: "/team/fabiobuscio.webp",
    linkedin: "https://linkedin.com/in/fabio-buscio",
    twitter: "https://x.com/campusonchain",
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
              <div className="flex gap-4 justify-center mt-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <FaXTwitter size={24} />
                </a>
              </div>
            </div>
        ))}
      </div>
    </div>
    </section>
  );
} 