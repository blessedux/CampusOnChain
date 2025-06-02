import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const internships = [
  {
    id: 1,
    title: "Blockchain Developer Intern",
    company: "Web3 Labs",
    description: "Participa en el desarrollo de dApps y smart contracts en un entorno profesional.",
    link: "#"
  },
  {
    id: 2,
    title: "Community Manager Web3",
    company: "CryptoStart",
    description: "Ayuda a construir y gestionar comunidades en proyectos blockchain.",
    link: "#"
  },
  {
    id: 3,
    title: "Research Assistant DeFi",
    company: "DeFi Insights",
    description: "Colabora en investigaciones sobre protocolos y tendencias DeFi.",
    link: "#"
  }
];

export const InternshipsSection = () => {
  return (
    <div>
      <Card className="bg-[#18181a] border-gray-800 mt-4">
        <CardHeader>
          <h3 className="text-lg font-bold text-green-300 mb-1">Internships & Oportunidades</h3>
          <p className="text-xs text-gray-400 mb-2">Descubre pasantías, prácticas y oportunidades en el ecosistema Web3.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {internships.map(intern => (
            <div key={intern.id} className="flex flex-col md:flex-row md:items-center md:justify-between bg-white/5 rounded-lg p-4">
              <div>
                <div className="font-semibold text-white mb-1">{intern.title} <span className="text-xs text-gray-400 font-normal">@ {intern.company}</span></div>
                <div className="text-xs text-gray-300 mb-2 md:mb-0">{intern.description}</div>
              </div>
              <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white mt-2 md:mt-0">
                <a href="https://www.chiledao.xyz/" target="_blank" rel="noopener noreferrer">Aplicar</a>
              </Button>
            </div>
          ))}
          <div className="flex justify-end mt-2">
            <Button asChild variant="outline" size="sm" className="border-green-500 text-green-300 hover:bg-green-900/20">
              <a href="https://www.chiledao.xyz/" target="_blank" rel="noopener noreferrer">Ver más oportunidades</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 