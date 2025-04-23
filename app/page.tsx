import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Award, Calendar, BookOpen, ArrowRight, Wallet } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Simplificado */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl">Campus on Chain</span>
          </Link>
          <Button>Conectar Wallet</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section con Información Combinada */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Campus on Chain</h1>
                  <p className="text-xl text-muted-foreground">
                    Connect. Learn. Build. La comunidad blockchain definitiva para estudiantes universitarios.
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Democratizando el acceso a tecnologías emergentes construyendo una red global de comunidades
                  blockchain universitarias. Desde la curiosidad hasta la carrera profesional.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Comenzar <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Campus on Chain Hero"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Características Principales Simplificadas */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Todo lo que necesitas en un solo lugar
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Para Estudiantes</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Crea tu perfil, muestra tus POAPs y conecta con otros estudiantes interesados en blockchain.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Para Universidades</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Lleva educación blockchain a tu campus y conecta con una red global de instituciones.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Wallet className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Para Empresas Web3</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Conecta con talento emergente y construye relaciones con comunidades universitarias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Características Clave */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Colección POAP</h3>
                      <p className="text-sm text-muted-foreground">
                        Muestra todos tus POAPs de asistencia a eventos en un espacio unificado.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Eventos Universitarios</h3>
                      <p className="text-sm text-muted-foreground">Solicita y organiza reuniones en tu universidad.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Recursos Educativos</h3>
                      <p className="text-sm text-muted-foreground">
                        Accede a materiales de aprendizaje blockchain de calidad.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Características"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Llamada a la acción */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-[800px] space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Únete al Movimiento</h2>
              <p className="text-muted-foreground">
                Campus on Chain comenzó cuando un grupo de estudiantes descubrió que el plan de estudios de su
                universidad carecía de contenido blockchain. Hoy, estamos expandiendo esta visión a universidades de
                todo el mundo.
              </p>
              <div className="mx-auto max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit" className="w-full sm:w-auto">
                    Únete Ahora
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Simplificado */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Campus on Chain. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline underline-offset-4">
              Términos
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
