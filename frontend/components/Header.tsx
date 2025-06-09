'use client'

import * as React from "react"
import { usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/ui/button"
import { LogOut, Wallet } from "lucide-react"
import { formatAddress } from "@/lib/utils"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface HeaderProps {
  authenticated: boolean
  ready: boolean
  user: any
  onWalletClick: () => void
}

// smooth scroll
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export default function Header({ authenticated, ready, user, onWalletClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'App del Campus', target: 'hero-section' },
    { label: 'Nosotros', target: 'about-section' },
    { label: 'Misión', target: 'mission-section' },
    { label: 'Contacto', target: 'footer-section' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="relative">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              key="campus-logo"
              src="/logos/campus_logo.png"
              alt="Campus on Chain"
              width={180}
              height={40}
              priority
              className={`h-10 w-auto transition-all duration-500 transform ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            />
          </Link>
          {/* Menu de navegacion */}
          <nav className={`hidden lg:flex items-center space-x-6 transition-all duration-500 transform ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-white hover:text-orange-400 transition-colors text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {authenticated ? (
              <div className="hidden md:flex items-center gap-2">
              <Button
                onClick={onWalletClick}
                variant="outline"
                className="flex items-center gap-2 text-white hover:text-white border-white/20 hover:border-white/40 hover:bg-white/10 bg-transparent"
              >
                <span className="text-sm font-medium">
                  {formatAddress(user?.wallet?.address)}
                </span>
                <LogOut className="w-4 h-4" />
              </Button>
              </div>
            ) : (
              <div className="hidden md:flex">
              <Button
                onClick={onWalletClick}
                disabled={!ready}
                variant="outline"
                className="text-white hover:text-white border-white/20 hover:border-white/40 hover:bg-white/10 bg-transparent"
              >
                  Conectar Wallet
                </Button>
              </div>
            )}
            {/* Mobile version - always show icon button */}
            <Button
              onClick={onWalletClick}
              disabled={!ready}
              variant="outline"
              className="md:hidden text-white hover:text-white border-white/20 hover:border-white/40 hover:bg-white/10 bg-transparent"
            >
              {authenticated ? (
                <LogOut className="w-5 h-5" />
              ) : (
                <Wallet className="w-5 h-5" />
              )}
              </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <ScrollProgress />
        </div>
      </div>
    </header>
  )
} 