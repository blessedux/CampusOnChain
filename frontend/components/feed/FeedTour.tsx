'use client'

import React, { useState } from 'react'
import { TourProvider, useTour } from '@reactour/tour'

interface FeedTourProps {
  run: boolean
}

// Componente interactivo para el paso de public beta
const PublicBetaStep: React.FC = () => {
  const [showBox, setShowBox] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2 text-orange-500">¡Bienvenido a Campus On Chain! 🚀</h3>
      <p className="text-gray-700 mb-4">Has completado el tour de la plataforma. Campus On Chain es tu hub central para conectar con la comunidad Web3, participar en hackathons, ganar recompensas y construir el futuro descentralizado.</p>
      <h4 className="text-md font-semibold mb-2 text-orange-500">Próximamente public beta</h4>
      {showBox && !showEmail && (
        <div className="relative mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center">
          <span className="mr-4">🔔 avisar sobre el public beta</span>
          <button
            className="ml-auto bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
            onClick={() => setShowEmail(true)}
          >
            Avisarme
          </button>
          <button
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-700"
            onClick={() => setShowBox(false)}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
      )}
      {showEmail && (
        <div className="relative mt-4 bg-white border border-orange-200 rounded-lg p-4">
          {!submitted ? (
            <>
              <label className="block mb-2 text-sm text-gray-700">Ingresa tu correo para ser notificado:</label>
              <input
                type="email"
                className="border border-gray-300 rounded px-2 py-1 w-full mb-3 text-white bg-gray-900"
                placeholder="Escribe tu correo..."
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <div className="flex justify-center">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full max-w-xs"
                  onClick={() => {
                    setSubmitted(true);
                  }}
                  disabled={!email}
                >
                  🔔 notificar public beta
                </button>
              </div>
              <button
                className="absolute top-1 right-1 text-gray-400 hover:text-gray-700"
                onClick={() => setShowEmail(false)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </>
          ) : (
            <div className="text-green-600 font-semibold">¡Te avisaremos cuando esté disponible el public beta!</div>
          )}
        </div>
      )}
    </div>
  );
};

const steps = [
  {
    selector: '.quick-stats',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">¡Bienvenido a Campus On Chain! 📊</h3>
        <p className="text-gray-700 mb-3">Campus On Chain es la plataforma definitiva para estudiantes y builders del ecosistema Web3. Aquí podrás conectar, aprender, participar y ganar recompensas por tu contribución a la comunidad.</p>
        <p className="text-gray-700">Estas son tus estadísticas rápidas: puntos Campus acumulados y tu ranking en la comunidad. Cada interacción, participación en eventos y contribución te acerca a más oportunidades y recompensas exclusivas.</p>
      </div>
    ),
  },
  {
    selector: '.campus-wall',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Muro del Campus 💬</h3>
        <p className="text-gray-700 mb-3">El corazón social de la plataforma donde la comunidad Web3 cobra vida. Aquí podrás:</p>
        <ul className="text-gray-700 text-sm space-y-1 mb-3">
          <li>• Compartir ideas y proyectos con otros builders</li>
          <li>• Encontrar colaboradores para hackathons</li>
          <li>• Mantenerte actualizado con las últimas tendencias</li>
          <li>• Construir relaciones duraderas en el ecosistema</li>
        </ul>
        <p className="text-gray-700">¡Haz clic para participar y ser parte de las conversaciones más importantes del Web3!</p>
      </div>
    ),
  },
  {
    selector: '.upcoming-events',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Próximos Eventos 🗓️</h3>
        <p className="text-gray-700 mb-3">Nunca te pierdas una oportunidad de crecimiento y networking. Campus On Chain te conecta con:</p>
        <ul className="text-gray-700 text-sm space-y-1 mb-3">
          <li>• Workshops exclusivos con expertos del ecosistema</li>
          <li>• Meetups locales y virtuales</li>
          <li>• Conferencias y eventos de networking</li>
          <li>• Sesiones de mentoring personalizado</li>
        </ul>
        <p className="text-gray-700">Cada evento es una oportunidad para aprender, conectar y avanzar en tu carrera Web3.</p>
      </div>
    ),
  },
  {
    selector: '.hackathons-feed',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Hackathons Activos 🏆</h3>
        <p className="text-gray-700 mb-3">La sección más emocionante para builders y developers. Aquí encontrarás:</p>
        <ul className="text-gray-700 text-sm space-y-1 mb-3">
          <li>• Hackathons con premios en efectivo y tokens</li>
          <li>• Oportunidades para trabajar con protocolos líderes</li>
          <li>• Networking con otros developers talentosos</li>
          <li>• Mentoring de expertos del ecosistema</li>
        </ul>
        <p className="text-gray-700">Participa en competencias, gana premios y construye proyectos que pueden cambiar el futuro del Web3.</p>
      </div>
    ),
  },
  {
    selector: '.leaderboard-stats',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Ranking de la Comunidad 🥇</h3>
        <p className="text-gray-700 mb-3">La gamificación que impulsa la excelencia. El ranking te permite:</p>
        <ul className="text-gray-700 text-sm space-y-1 mb-3">
          <li>• Ver los estudiantes más activos y comprometidos</li>
          <li>• Encontrar inspiración en los top performers</li>
          <li>• Competir por posiciones y reconocimientos</li>
          <li>• Acceder a oportunidades exclusivas por tu ranking</li>
        </ul>
        <p className="text-gray-700">Tu posición refleja tu contribución a la comunidad y te abre puertas a oportunidades únicas.</p>
      </div>
    ),
  },
  {
    selector: '.user-profile-panel',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Tu Perfil 👤</h3>
        <p className="text-gray-700 mb-3">Tu identidad digital en el ecosistema Web3. Desde aquí puedes:</p>
        <ul className="text-gray-700 text-sm space-y-1 mb-3">
          <li>• Mostrar tus logros y contribuciones</li>
          <li>• Personalizar tu experiencia y preferencias</li>
          <li>• Conectar tu wallet y verificar tu identidad</li>
          <li>• Gestionar tus recompensas y badges</li>
        </ul>
        <p className="text-gray-700">Un perfil completo te ayuda a conectar mejor con la comunidad y acceder a más oportunidades.</p>
      </div>
    ),
  },
  {
    selector: '.assets-summary',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-orange-500">Resumen de Assets 💎</h3>
        <p className="text-gray-700 mb-3">Tu tesoro digital en Campus On Chain. Aquí verás:</p>
        <ul className="text-gray-700 text-sm space-y-1 mb-3">
          <li>• Campus Points: tu moneda de reputación en la plataforma</li>
          <li>• POAPs: badges únicos por participación en eventos</li>
          <li>• Badges especiales por logros y contribuciones</li>
          <li>• NFTs y recompensas exclusivas</li>
        </ul>
        <p className="text-gray-700">Cada asset representa un logro y te acerca a más oportunidades en el ecosistema Web3.</p>
      </div>
    ),
  },
  {
    selector: 'body',
    content: <PublicBetaStep />,
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
export const FeedTour: React.FC<FeedTourProps> = ({ run }) => {
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
          zIndex: 10000,
        }),
        maskArea: (base) => ({ ...base, rx: 10 }),
        maskWrapper: (base) => ({ 
          ...base, 
          color: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9999,
        }),
        badge: (base) => ({ ...base, left: 'auto', right: '-0.8125em' }),
        controls: (base) => ({ ...base, marginTop: 10 }),
        close: (base) => ({ ...base, display: 'none' }),
      }}
      showPrevNextButtons={true}
      showCloseButton={false}
      disableInteraction={true}
      disableKeyboardNavigation={true}
      onClickMask={({ setIsOpen }) => {
        // Prevent closing when clicking on mask
        console.log('Mask clicked but tour stays open');
      }}
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
      nextButton={({ currentStep, setCurrentStep, steps }) => {
        if (currentStep === steps!.length - 1) {
          return (
            <button
              onClick={() => {
                console.log('Tour completed');
              }}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium ml-2"
            >
              ¡Completado!
            </button>
          );
        }
        return (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium ml-2"
          >
            Siguiente
          </button>
        );
      }}
    >
      <TourController run={run} />
    </TourProvider>
  )
}