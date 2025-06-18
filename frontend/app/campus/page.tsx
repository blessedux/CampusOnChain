'use client'

import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { CampusTour } from "@/components/joyride/CampusTour"

export default function CampusPage() {
  const { ready, authenticated, user } = usePrivy()
  const router = useRouter()
  const [showJoyride, setShowJoyride] = useState(false)

  // Redirect if not authenticated
  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/')
    }
  }, [ready, authenticated, router])

  // Start joyride when user is authenticated and page loads
  useEffect(() => {
    if (ready && authenticated && user) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setShowJoyride(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [ready, authenticated, user])

  if (!ready || !authenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Elementos simples para el tour */}
      <div id="campus-logo" className="text-2xl font-bold text-orange-500 mb-8">
        Campus On Chain
      </div>

      <div id="welcome-section" className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          ¡Bienvenido al Campus, {user?.email?.address || 'Builder'}! 🎓
        </h1>
        <p className="text-gray-400">
          Este es tu centro de aprendizaje Web3. Comenzamos el tour...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="learning-dashboard" className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">📚 Mi Aprendizaje</h2>
          <p>Dashboard de progreso educativo</p>
        </div>

        <div id="community-feed" className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">💬 Feed de Comunidad</h2>
          <p>Actividades y novedades</p>
        </div>

        <div id="quick-stats" className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">🏆 Tus Logros</h2>
          <p>Estadísticas y achievements</p>
        </div>

        <div id="upcoming-events" className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">📅 Próximos Eventos</h2>
          <p>Workshops y meetups</p>
        </div>
      </div>

      <div id="quick-actions" className="mt-8 bg-gray-900 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">⚡ Acciones Rápidas</h2>
        <p>Navegación rápida por la plataforma</p>
      </div>

      {/* Botones del header simplificados */}
      <div className="fixed top-4 right-4 flex space-x-2">
        <button id="notifications-button" className="bg-gray-800 p-2 rounded">🔔</button>
        <button id="profile-button" className="bg-gray-800 p-2 rounded">👤</button>
        <button id="wallet-button" className="bg-gray-800 p-2 rounded">💼</button>
      </div>

      {/* Navegación simplificada */}
      <nav className="fixed top-4 left-4 flex space-x-4">
        <a href="#" id="nav-courses" className="text-orange-500">📚 Cursos</a>
        <a href="#" id="nav-community" className="text-orange-500">🤝 Comunidad</a>
        <a href="#" id="nav-events" className="text-orange-500">🗓️ Eventos</a>
      </nav>

      {/* Tour Component */}
      <CampusTour run={showJoyride} />
    </div>
  )
}