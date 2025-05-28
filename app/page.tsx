'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePrivy, useLogin } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LandingPage() {
  const { ready, authenticated } = usePrivy();
  const { login } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (ready && authenticated) {
      router.push("/profile");
    }
  }, [ready, authenticated, router]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/campus1.webp" alt="Campus on Chain Logo" width={60} height={60} className="rounded" />
          </Link>
          {/* Privy wallet connect */}
          <Button onClick={login} disabled={!ready}>
            Conectar Wallet
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-4 max-w-2xl">
              El puente entre universidades y el mundo Web3
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Campus on Chain conecta a estudiantes universitarios con oportunidades reales en blockchain y Web3: aprende, participa en eventos y construye tu perfil profesional descentralizado.
            </p>
            <Button size="lg" className="mb-2" onClick={login} disabled={!ready}>
              Conectar Wallet
            </Button>
            <span className="text-sm text-muted-foreground">(Solo estudiantes: crea tu perfil y accede a tus POAPs y eventos)</span>
          </div>
        </section>

        
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-muted-foreground">
          <div>
            <p>&copy; {new Date().getFullYear()} Campus on Chain. Todos los derechos reservados.</p>
          </div>
          <div className="flex gap-4 items-center">
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
