import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Introducción a Web3",
    description: "Aprende los conceptos básicos de blockchain, wallets y contratos inteligentes.",
    link: "#"
  },
  {
    id: 2,
    title: "Smart Contracts con Solidity",
    description: "Crea y despliega tus propios smart contracts en Ethereum.",
    link: "#"
  },
  {
    id: 3,
    title: "DeFi y Finanzas Descentralizadas",
    description: "Explora el mundo de las finanzas descentralizadas y cómo interactuar con protocolos DeFi.",
    link: "#"
  }
];

export const EducationSection = () => {
  return (
    <div>
      <Card className="bg-[#18181a] border-gray-800 mt-4">
        <CardHeader>
          <h3 className="text-lg font-bold text-blue-300 mb-1">Educación Web3 en Campus On Chain</h3>
          <p className="text-xs text-gray-400 mb-2">Accede a cursos gratuitos y recursos para aprender sobre blockchain, smart contracts y más.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {courses.map(course => (
            <div key={course.id} className="flex flex-col md:flex-row md:items-center md:justify-between bg-white/5 rounded-lg p-4">
              <div>
                <div className="font-semibold text-white mb-1">{course.title}</div>
                <div className="text-xs text-gray-300 mb-2 md:mb-0">{course.description}</div>
              </div>
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white mt-2 md:mt-0">
                <a href="/courses" target="_blank" rel="noopener noreferrer">Ver curso</a>
              </Button>
            </div>
          ))}
          <div className="flex justify-end mt-2">
            <Button asChild variant="outline" size="sm" className="border-blue-500 text-blue-300 hover:bg-blue-900/20">
              <a href="/courses" target="_blank" rel="noopener noreferrer">Ver todos los cursos</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 