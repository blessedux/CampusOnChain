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
  const { ready, authenticated, user } = usePrivy()
  const router = useRouter()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<Profile>(emptyProfile)
  const [selectedPFP, setSelectedPFP] = useState("")
  const [showTutorial, setShowTutorial] = useState(true)

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/")
    }
  }, [ready, authenticated, router])

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
                  src={selectedPFP}
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

            {/* POAPs Gallery */}
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
                        <p className="text-white/80 text-sm">{poap.date}</p>
                        <p className="text-white/60 text-xs mt-1">{poap.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Aún no hay logros</p>
                  <p className="text-sm">¡Asiste a eventos para ganar POAPs!</p>
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
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Eventos Asistidos</p>
                  <p className="text-2xl font-bold">{profile.stats.eventsAttended}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">POAPs Ganados</p>
                  <p className="text-2xl font-bold">{profile.stats.poapsEarned}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rango en la Comunidad</p>
                  <p className="text-2xl font-bold">#{profile.stats.communityRank}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hackathons</p>
                  <p className="text-2xl font-bold">{profile.stats.hackathonsParticipated}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Proyectos</p>
                  <p className="text-2xl font-bold">{profile.stats.projectsCreated}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 