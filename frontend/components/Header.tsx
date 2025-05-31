'use client'

import * as React from "react"
import { usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'}`}>
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
          <div className="flex items-center gap-4">
            {authenticated ? (
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
            ) : (
              <Button
                onClick={onWalletClick}
                disabled={!ready}
                variant="outline"
                className="text-white hover:text-white border-white/20 hover:border-white/40 hover:bg-white/10 bg-transparent"
              >
                Conectar Wallet
              </Button>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <ScrollProgress />
        </div>
      </div>
    </header>
  )
} 