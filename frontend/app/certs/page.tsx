import Image from 'next/image';

interface Certificate {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
}

const certificates: Certificate[] = [
  {
    title: "Fundamentos de Web3",
    description: "Aprende los conceptos básicos de blockchain, criptomonedas y aplicaciones descentralizadas.",
    image: "/cert-placeholder-1.jpg",
    level: "Principiante",
    duration: "4 semanas"
  },
  {
    title: "Desarrollo de Smart Contracts",
    description: "Domina Solidity y aprende a crear contratos inteligentes seguros y eficientes.",
    image: "/cert-placeholder-2.jpg",
    level: "Intermedio",
    duration: "6 semanas"
  },
  {
    title: "DeFi y Tokenomics",
    description: "Explora las finanzas descentralizadas y aprende a diseñar sistemas económicos tokenizados.",
    image: "/cert-placeholder-3.jpg",
    level: "Avanzado",
    duration: "8 semanas"
  }
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-neutral-900/50 to-neutral-900" />
        </div>
        
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Certificaciones On-Chain
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Obtén certificaciones verificables en blockchain y demuestra tus habilidades en el ecosistema Web3
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-neutral-800/50 rounded-2xl overflow-hidden border border-neutral-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="aspect-video relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-500/20 text-orange-400">
                      {cert.level}
                    </span>
                    <span className="text-sm text-neutral-400">
                      {cert.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-neutral-400">
                    {cert.description}
                  </p>
                  <button className="mt-6 w-full px-4 py-2 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
                    Comenzar certificación
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 