'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import { useEffect, useState } from "react"

interface HeaderProps {
  authenticated: boolean
  ready: boolean
  user: any
  onWalletClick: () => void
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

  return (
    <header className="sticky top-0 z-40 w-full bg-black/20 backdrop-blur-sm">
      <div className="relative">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/campus1.webp"
              alt="Campus on Chain"
              width={140}
              height={32}
              className={`h-8 w-auto transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
            />
          </Link>
          {/* Privy wallet connect */}
          <Button 
            variant="outline"
            className="bg-neutral-900/30 backdrop-blur-sm hover:bg-neutral-800 text-white hover:text-white border-neutral-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-700/20"
            onClick={onWalletClick} 
            disabled={!ready}
          >
            {authenticated ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-white">
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
                  className="h-4 w-4 text-white"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </div>
            ) : (
              <span className="text-white">Conectar Wallet</span>
            )}
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <ScrollProgress />
        </div>
      </div>
    </header>
  )
} 