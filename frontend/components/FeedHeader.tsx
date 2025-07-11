'use client'

import * as React from "react"
import { usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/ui/button"
import { LogOut, Wallet } from "lucide-react"
import { formatAddress } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

interface FeedHeaderProps {
  authenticated: boolean
  ready: boolean
  user: any
  onWalletClick: () => void
}

export default function FeedHeader({ authenticated, ready, user, onWalletClick }: FeedHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
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
              className="h-10 w-auto"
            />
          </Link>
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
      </div>
    </header>
  )
} 