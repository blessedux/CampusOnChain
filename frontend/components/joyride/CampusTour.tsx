'use client'

import React from 'react'
import { TourProvider, useTour } from '@reactour/tour'

interface CampusTourProps {
  run: boolean
}

const steps = [
  {
    selector: '#campus-logo',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">¡Bienvenido a Campus On Chain! 🎓</h3>
        <p className="text-gray-700">Este es tu centro de aprendizaje Web3. Te guiaremos por todas las funcionalidades principales para que aproveches al máximo la plataforma.</p>
      </div>
    ),
  },
  {
    selector: '#welcome-section',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Tu Dashboard Personal</h3>
        <p className="text-gray-700">Aquí verás tus recompensas como airdrops, Campus Points y Ranking. Es tu punto de partida cada vez que ingreses al campus.</p>
      </div>
    ),
  },
  {
    selector: '#nav-courses',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Sección de Cursos 📚</h3>
        <p className="text-gray-700">Explora todos nuestros cursos de blockchain, DeFi, NFTs y más. Desde principiante hasta avanzado, tenemos contenido para todos los niveles.</p>
      </div>
    ),
  },
  {
    selector: '#nav-community',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Muro del Campus 🤝</h3>
        <p className="text-gray-700">Conecta con otros estudiantes, únete a grupos de estudio, participa en discusiones, publica tu idea o forma equipos para hackathons.</p>
      </div>
    ),
  },
  {
    selector: '#nav-events',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Próximos Eventos 🗓️</h3>
        <p className="text-gray-700">Descubre workshops, meetups, hackathons y conferencias. Asiste presencialmente o virtualmente y gana POAPs por tu participación.</p>
      </div>
    ),
  },
  {
    selector: '#learning-dashboard',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Hackatons en DoraHacks 📈</h3>
        <p className="text-gray-700">Participa en hackatons de DoraHacks. Ve tus cursos actuales, próximas tareas y objetivos pendientes. Todo tu aprendizaje centralizado en un lugar.</p>
      </div>
    ),
  },
  {
    selector: '#community-feed',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Leaderboard: desafíos del Campus y Activaciones 💬</h3>
        <p className="text-gray-700">Mantente al día con las actividades de otros estudiantes, nuevos anuncios, logros de la comunidad y oportunidades emergentes.</p>
      </div>
    ),
  },
  {
    selector: '#quick-stats',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Tus Logros 🏆</h3>
        <p className="text-gray-700">Visualiza tus estadísticas: cursos completados, POAPs obtenidos, hackathons participados y puntos Campus acumulados.</p>
      </div>
    ),
  },
  {
    selector: '#upcoming-events',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Próximos Eventos 📅</h3>
        <p className="text-gray-700">No te pierdas ningún evento importante. Aquí verás workshops, hackathons y meetups programados para los próximos días.</p>
      </div>
    ),
  },
  {
    selector: '#quick-actions',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Acciones Rápidas ⚡</h3>
        <p className="text-gray-700">Accesos directos a las funciones más utilizadas: continuar cursos, buscar compañeros de estudio, ver eventos y configurar tu perfil.</p>
      </div>
    ),
  },
  {
    selector: '#notifications-button',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Notificaciones 🔔</h3>
        <p className="text-gray-700">Recibe alertas sobre nuevos cursos, eventos próximos, menciones en la comunidad y actualizaciones importantes.</p>
      </div>
    ),
  },
  {
    selector: '#profile-button',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Tu Perfil 👤</h3>
        <p className="text-gray-700">Gestiona tu información personal, ve tu historial completo de aprendizaje, POAPs obtenidos y configura tus preferencias.</p>
      </div>
    ),
  },
  {
    selector: '#wallet-button',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Wallet Campus 💼</h3>
        <p className="text-gray-700">Tu wallet integrada para recibir POAPs, participar en governance, acceder a beneficios exclusivos y gestionar tus activos on-chain.</p>
      </div>
    ),
  },
  {
    selector: 'body',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">¡Public Beta! 🚀</h3>
        <p className="text-gray-700">Ya conoces todas las funcionalidades principales. Explora el campus, toma cursos, conecta con la comunidad y construye tu futuro en Web3.</p>
        <p className="mt-2 text-sm text-gray-600">💡 Tip: Puedes volver a ver este tour en cualquier momento desde el menú de ayuda.</p>
        <p className="mt-2 text-sm text-gray-600">Contacto IG, X, Linkedin</p>
      </div>
    ),
  },
]

// Componente interno que usa el hook useTour
const TourController: React.FC<{ run: boolean }> = ({ run }) => {
  const { setIsOpen } = useTour()

  React.useEffect(() => {
    if (run) {
      setIsOpen(true)
    }
  }, [run, setIsOpen])

  return null
}

// Componente principal que envuelve todo
export const CampusTour: React.FC<CampusTourProps> = ({ run }) => {
  return (
    <TourProvider
      steps={steps}
      defaultOpen={false}
      styles={{
        popover: (base) => ({
          ...base,
          '--reactour-accent': '#f97316',
          borderRadius: 10,
          backgroundColor: '#ffffff',
          color: '#000000',
        }),
        maskArea: (base) => ({ ...base, rx: 10 }),
        maskWrapper: (base) => ({ ...base, color: 'rgba(0, 0, 0, 0.7)' }),
        badge: (base) => ({ ...base, left: 'auto', right: '-0.8125em' }),
        controls: (base) => ({ ...base, marginTop: 10 }),
        close: (base) => ({ ...base, right: 'auto', left: 8, top: 8 }),
      }}
      showPrevNextButtons={true}
      showCloseButton={true}
      disableInteraction={false}
      className="tour-highlight"
      prevButton={({ currentStep, setCurrentStep, steps }) => (
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          disabled={currentStep === 0}
        >
          Anterior
        </button>
      )}
      nextButton={({ currentStep, setCurrentStep, setIsOpen, steps }) => (
        <button
          onClick={() => {
            if (currentStep === steps!.length - 1) {
              setIsOpen(false)
            } else {
              setCurrentStep(currentStep + 1)
            }
          }}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium ml-2"
        >
          {currentStep === steps!.length - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      )}
    >
      <TourController run={run} />
    </TourProvider>
  )
}