'use client'

import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { UniversityRing } from "@/components/UniversityRing"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface POAP {
  id: number;
  name: string;
  image: string;
  date: string;
  description: string;
}

interface ProfileStats {
  eventsAttended: number;
  poapsEarned: number;
  communityRank: number;
  hackathonsParticipated: number;
  projectsCreated: number;
}

interface Profile {
  handle: string;
  university: string;
  field: string;
  bio: string;
  interests: string[];
  skills: string[];
  poaps: POAP[];
  stats: ProfileStats;
}

// Available PFPs
const availablePFPs = [
  "/pfps/pixelcat.webp",
  "/pfps/pixelfox.webp",
  "/pfps/pixelowl.webp"
]

const defaultPFP = "/pfps/pixelcat.webp" // Default PFP

// Predefined Web3 interests
const web3Interests = [
  "Blockchain",
  "Bitcoin",
  "Ethereum",
  "DeFi",
  "NFTs",
  "DAOs",
  "Web3",
  "Crypto",
  "Smart Contracts",
  "Fintech",
  "Startups",
  "Metaverse",
  "GameFi",
  "DeSci",
  "Layer 2",
  "Zero Knowledge",
  "AI",
  "Machine Learning",
  "Cybersecurity",
  "Tokenomics",
  "Governance",
  "Privacy",
  "Decentralization",
  "Open Source"
]

// Predefined soft skills for students
const studentSkills = [
  "Aprendizaje Rápido",
  "Trabajo en Equipo",
  "Comunicación Efectiva",
  "Resolución de Problemas",
  "Creatividad",
  "Adaptabilidad",
  "Organización",
  "Gestión del Tiempo",
  "Pensamiento Crítico",
  "Liderazgo",
  "Empatía",
  "Colaboración",
  "Iniciativa",
  "Responsabilidad",
  "Perseverancia",
  "Curiosidad",
  "Mente Abierta",
  "Proactividad",
  "Autodidacta",
  "Resiliencia",
  "Paciencia",
  "Flexibilidad",
  "Motivación",
  "Ética de Trabajo",
  "Innovación",
  "Mentalidad Emprendedora",
  "Pensamiento Disruptivo",
  "Aprendizaje Continuo",
  "Gestión de Proyectos",
  "Toma de Riesgos",
  "Networking",
  "Pensamiento Digital",
  "Adaptación al Cambio",
  "Colaboración Remota",
  "Gestión de Comunidades",
  "Pensamiento Estratégico",
  "Innovación Tecnológica",
  "Mentalidad de Crecimiento",
  "Gestión de Incertidumbre",
  "Pensamiento Sistémico"
]

// Universities data
const universities = {
  "Top & Most Recognized Universities (Traditional / CRUCH)": [
    { id: "uchile", name: "Universidad de Chile (UChile)", location: "Santiago" },
    { id: "puc", name: "Pontificia Universidad Católica de Chile (PUC)", location: "Santiago" },
    { id: "usach", name: "Universidad de Santiago de Chile (USACH)", location: "Santiago" },
    { id: "udec", name: "Universidad de Concepción (UdeC)", location: "Concepción" },
    { id: "usm", name: "Universidad Técnica Federico Santa María (UTFSM)", location: "Valparaíso" },
    { id: "uach", name: "Universidad Austral de Chile (UACh)", location: "Valdivia" },
    { id: "uv", name: "Universidad de Valparaíso (UV)", location: "Valparaíso" },
    { id: "pucv", name: "Universidad Católica de Valparaíso (PUCV)", location: "Valparaíso" },
    { id: "ufro", name: "Universidad de La Frontera (UFRO)", location: "Temuco" },
    { id: "utalca", name: "Universidad de Talca (UTalca)", location: "Talca" },
    { id: "ucn", name: "Universidad Católica del Norte (UCN)", location: "Antofagasta" },
    { id: "uantofagasta", name: "Universidad de Antofagasta (UA)", location: "Antofagasta" },
    { id: "uda", name: "Universidad de Atacama (UDA)", location: "Copiapó" },
  ],
  "Well-Known Private Universities": [
    { id: "uai", name: "Universidad Adolfo Ibáñez (UAI)", location: "Santiago & Viña del Mar" },
    { id: "udd", name: "Universidad del Desarrollo (UDD)", location: "Santiago & Concepción" },
    { id: "udp", name: "Universidad Diego Portales (UDP)", location: "Santiago" },
    { id: "uft", name: "Universidad Finis Terrae (UFT)", location: "Santiago" },
    { id: "umayor", name: "Universidad Mayor", location: "Santiago & Temuco" },
    { id: "unab", name: "Universidad Andrés Bello (UNAB)", location: "Santiago & regions" },
    { id: "uah", name: "Universidad Alberto Hurtado (UAH)", location: "Santiago" },
    { id: "uandes", name: "Universidad de Los Andes (UANDES)", location: "Santiago" },
    { id: "ucen", name: "Universidad Central (UCEN)", location: "Santiago" },
    { id: "ust", name: "Universidad Santo Tomás (UST)", location: "Multiple cities" },
    { id: "uautonoma", name: "Universidad Autónoma de Chile", location: "Santiago & regions" },
    { id: "uss", name: "Universidad San Sebastián (USS)", location: "Santiago & regions" },
  ],
  "Smaller or Lesser-Known Institutions": [
    { id: "ubo", name: "Universidad Bernardo O'Higgins (UBO)", location: "Santiago" },
    { id: "udla", name: "Universidad de Las Américas (UDLA)", location: "Santiago & regions" },
    { id: "umc", name: "Universidad Miguel de Cervantes (UMC)", location: "Santiago" },
    { id: "uaconcagua", name: "Universidad de Aconcagua (UDA)", location: "Various regions" },
    { id: "ularepublica", name: "Universidad La República", location: "Santiago" },
    { id: "uisek", name: "Universidad SEK (UISEK)", location: "Santiago" },
  ]
}

// University background mapping
const universityBackgrounds: { [key: string]: string } = {
  uchile: "backgrounds/casacentral_pixelart.webp",
  puc: "backgrounds/puc_pixelart.webp",
  // Add more university backgrounds as needed
}

// Empty profile template
const emptyProfile: Profile = {
  handle: "",
  university: "",
  field: "",
  bio: "",
  interests: [],
  skills: [],
  poaps: [],
  stats: {
    eventsAttended: 0,
    poapsEarned: 0,
    communityRank: 0,
    hackathonsParticipated: 0,
    projectsCreated: 0
  }
}

export default function ProfilePage() {
  const { ready, authenticated, user, logout } = usePrivy()
  const router = useRouter()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<Profile>(emptyProfile)
  const [selectedPFP, setSelectedPFP] = useState("")
  const [showTutorial, setShowTutorial] = useState(true)
  const [isNewUser, setIsNewUser] = useState(false)

  useEffect(() => {
    if (ready) {
      if (!authenticated) {
        router.replace("/")
      } else {
        // Check if user has a profile
        const hasProfile = localStorage.getItem('userProfile')
        if (!hasProfile) {
          setIsNewUser(true)
        }
      }
    }
  }, [ready, authenticated, router])

  // Handle back button click
  const handleBackClick = () => {
    // Store the current state before navigation
    const currentState = {
      authenticated,
      profile: localStorage.getItem('userProfile'),
      pfp: localStorage.getItem('userPFP')
    }
    
    // Store state in sessionStorage for the home page
    sessionStorage.setItem('profileState', JSON.stringify(currentState))
    
    // Navigate to home
    router.replace("/")
  }

  // Handle wallet button click
  const handleWalletClick = () => {
    if (authenticated) {
      // Clear session storage before logout
      sessionStorage.removeItem('profileState')
      logout()
      router.replace("/")
    } else {
      router.replace("/")
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clear any temporary state when leaving the profile page
      sessionStorage.removeItem('profileState')
    }
  }, [])

  // Set random PFP on first load
  useEffect(() => {
    if (!selectedPFP) {
      const randomPFP = availablePFPs[Math.floor(Math.random() * availablePFPs.length)]
      setSelectedPFP(randomPFP)
      
      // Store the selected PFP in localStorage to maintain consistency
      localStorage.setItem('userPFP', randomPFP)
    }
  }, [])

  // Load saved PFP on mount
  useEffect(() => {
    const savedPFP = localStorage.getItem('userPFP')
    if (savedPFP) {
      setSelectedPFP(savedPFP)
    } else {
      setSelectedPFP(defaultPFP)
    }
  }, [])

  const getUniversityName = (id: string) => {
    for (const category of Object.values(universities)) {
      const university = category.find(u => u.id === id)
      if (university) return university.name
    }
    return "Selecciona tu universidad"
  }

  const handleSaveProfile = () => {
    if (!profile.handle || !profile.university) {
      toast({
        title: "Información Incompleta",
        description: "Por favor completa tu nombre de usuario y selecciona tu universidad para continuar.",
        variant: "destructive",
      })
      return
    }

    // Save profile to localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile))
    setIsNewUser(false)
    setIsEditing(false)
    
    toast({
      title: "Perfil Actualizado",
      description: "¡Tu perfil ha sido actualizado exitosamente!",
    })
  }

  const getBackgroundImage = () => {
    return universityBackgrounds[profile.university] || "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500"
  }

  if (!ready || !authenticated) {
    return null
  }

  const isProfileComplete = profile.handle && profile.university

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={handleBackClick}
          className="text-white drop-shadow-lg hover:text-white/90 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Wallet Button */}
      <div className="absolute top-4 right-4 z-50">
        <Button
          variant="outline"
          className="bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={handleWalletClick}
        >
          {authenticated ? (
            <div className="flex items-center gap-2">
              <span className="text-sm">
                {user?.wallet?.address?.slice(0, 6)}...{user?.wallet?.address?.slice(-4)}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </div>
          ) : (
            "Conectar Wallet"
          )}
        </Button>
      </div>

      {/* Profile Header */}
      <div 
        className={`relative h-48 ${!universityBackgrounds[profile.university] ? getBackgroundImage() : ''}`}
        style={universityBackgrounds[profile.university] ? {
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : {}}
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text visibility */}
        <div className="absolute -bottom-16 left-8">
          <div className="relative">
            <UniversityRing universityId={profile.university} size={144} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-32 w-32 rounded-full bg-background overflow-hidden shadow-lg z-10">
                <Image
                  src={selectedPFP || defaultPFP}
                  alt="Foto de Perfil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-2 space-y-6">
            <Card className={`p-6 ${showTutorial && !isProfileComplete ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold">
                    {profile.handle ? `@${profile.handle}` : "Completa tu perfil"}
                  </h1>
                  <p className="text-muted-foreground">{getUniversityName(profile.university)}</p>
                  {profile.field && <p className="text-muted-foreground">{profile.field}</p>}
                </div>
                <Button onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}>
                  {isEditing ? "Guardar Cambios" : "Editar Perfil"}
                </Button>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nombre de Usuario</label>
                    <Input 
                      value={profile.handle} 
                      onChange={(e) => setProfile({...profile, handle: e.target.value})}
                      placeholder="Elige tu nombre de usuario"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Universidad</label>
                    <Select
                      value={profile.university}
                      onValueChange={(value) => setProfile({...profile, university: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu universidad" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(universities).map(([category, unis]) => (
                          <div key={category}>
                            <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                              {category}
                            </div>
                            {unis.map((uni) => (
                              <SelectItem key={uni.id} value={uni.id}>
                                {uni.name}
                              </SelectItem>
                            ))}
                          </div>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Carrera</label>
                    <Input 
                      value={profile.field} 
                      onChange={(e) => setProfile({...profile, field: e.target.value})}
                      placeholder="¿Qué estás estudiando?"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Biografía</label>
                    <Textarea 
                      value={profile.bio} 
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      placeholder="Cuéntanos sobre ti..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Intereses</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {profile.interests.map((interest, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => {
                            const newInterests = [...profile.interests]
                            newInterests.splice(index, 1)
                            setProfile({...profile, interests: newInterests})
                          }}
                        >
                          {interest} ×
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Selecciona tus intereses:</p>
                      <div className="flex flex-wrap gap-2">
                        {web3Interests.map((interest) => (
                          <Badge
                            key={interest}
                            variant={profile.interests.includes(interest) ? "default" : "outline"}
                            className="cursor-pointer hover:bg-primary/10 transition-colors"
                            onClick={() => {
                              const newInterests = profile.interests.includes(interest)
                                ? profile.interests.filter(i => i !== interest)
                                : [...profile.interests, interest]
                              setProfile({...profile, interests: newInterests})
                            }}
                          >
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Habilidades</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {profile.skills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="outline"
                          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => {
                            const newSkills = [...profile.skills]
                            newSkills.splice(index, 1)
                            setProfile({...profile, skills: newSkills})
                          }}
                        >
                          {skill} ×
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Selecciona tus habilidades:</p>
                      <div className="flex flex-wrap gap-2">
                        {studentSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant={profile.skills.includes(skill) ? "default" : "outline"}
                            className="cursor-pointer hover:bg-primary/10 transition-colors"
                            onClick={() => {
                              const newSkills = profile.skills.includes(skill)
                                ? profile.skills.filter(s => s !== skill)
                                : [...profile.skills, skill]
                              setProfile({...profile, skills: newSkills})
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {profile.bio ? (
                    <p className="text-muted-foreground">{profile.bio}</p>
                  ) : (
                    <p className="text-muted-foreground italic">Agrega una biografía para contarles a otros sobre ti</p>
                  )}
                  {profile.interests.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary">{interest}</Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground italic">Agrega tus intereses para conectar con otros</p>
                  )}
                </div>
              )}
            </Card>

            {/* Achievements Gallery */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Logros</h2>
              {profile.poaps.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {profile.poaps.map((poap) => (
                    <div key={poap.id} className="group relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={poap.image}
                        alt={poap.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                        <h3 className="text-white font-semibold">{poap.name}</h3>
                        <p className="text-white/80 text-sm">Completado: {poap.date}</p>
                        <p className="text-white/60 text-xs mt-1">{poap.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Aún no hay logros</p>
                  <p className="text-sm">¡Completa cursos de Campus On Chain para ganar NFTs exclusivos!</p>
                  <p className="text-xs mt-2">Cada curso completado te otorgará un NFT único que certifica tu aprendizaje</p>
                </div>
              )}
            </Card>
          </div>

          {/* Right Column - Stats & Skills */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Habilidades</h2>
              {profile.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="hover:bg-primary/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground italic">Agrega tus habilidades para mostrar tu experiencia</p>
              )}
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Estadísticas</h2>
              <div className="space-y-6">
                {/* POAPs Preview */}
                <div>
                  <p className="text-sm text-muted-foreground mb-3">POAPs</p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                          onClick={() => window.open('https://poap.xyz', '_blank')}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <p className="text-2xl font-bold">{profile.stats.poapsEarned}</p>
                  </div>
                </div>

                {/* Other Stats */}
                <div className="space-y-4">
                  <div className="group relative">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      OnChain Rank
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-muted-foreground/70 cursor-help"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </p>
                    <p className="text-2xl font-bold">#{profile.stats.communityRank}</p>
                    <div className="absolute left-0 top-full mt-2 w-72 p-3 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <p className="mb-2">Tu OnChain Rank se basa en tu participación en:</p>
                      <ul className="list-disc list-inside mb-2 space-y-1">
                        <li>Eventos de Campus On Chain</li>
                        <li>Cursos completados</li>
                        <li>POAPs ganados</li>
                        <li>Hackathons y eventos Web3</li>
                      </ul>
                      <p className="text-primary font-medium">¡Premio especial! Mantén el rango #1 por mas de 30 dias y recibe un premio en efectivo en tu wallet de Campus on Chain. $$$</p>
                    </div>
                  </div>
                  <div className="group relative">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      Hackathons
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-muted-foreground/70 cursor-help"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </p>
                    <p className="text-2xl font-bold">{profile.stats.hackathonsParticipated}</p>
                    <div className="absolute left-0 top-full mt-2 w-72 p-3 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <p className="mb-2">Campus On Chain fomenta la participación en hackathons como una excelente manera de aprender y crecer en el ecosistema Web3.</p>
                      <p className="mb-2">
                        Únete a{" "}
                        <span 
                          className="text-primary cursor-pointer hover:underline"
                          onClick={() => window.open('https://chiledao.xyz', '_blank')}
                        >
                          ChileDAO
                        </span>{" "}
                        para aprender cómo participar y ganar hackathons internacionales de Web3.
                      </p>
                      <p>
                        Visita{" "}
                        <span 
                          className="text-primary cursor-pointer hover:underline"
                          onClick={() => window.open('https://dorahacks.io', '_blank')}
                        >
                          dorahacks.io
                        </span>{" "}
                        para encontrar nuevos hackathons →
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 