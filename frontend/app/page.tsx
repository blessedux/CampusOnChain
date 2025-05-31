'use client'

import * as React from "react"
import { usePrivy, useLogin } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ValuePropSection from "@/components/ValuePropSection"
import PartnersSection from "@/components/PartnersSection"
import AboutSection from "@/components/AboutSection"
import TeamSection from "@/components/TeamSection"
import RoadmapSection from "@/components/RoadmapSection"
import Footer from "@/components/Footer"

export default function LandingPage() {
  const { ready, authenticated, user, logout } = usePrivy();
  const { login } = useLogin();
  const router = useRouter();

  // Handle wallet button click
  const handleWalletClick = () => {
    if (authenticated) {
      logout()
    } else {
      login()
    }
  }

  // Handle campus entry button click
  const handleCampusEntry = () => {
    if (authenticated) {
      router.push("/profile")
    } else {
      login()
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        authenticated={authenticated}
        ready={ready}
        user={user}
        onWalletClick={handleWalletClick}
      />

      <HeroSection 
        authenticated={authenticated}
        ready={ready}
        onCampusEntry={handleCampusEntry}
      />
      <AboutSection />
      <ValuePropSection />
      <PartnersSection />
      <RoadmapSection />
      
      <Footer />
    </div>
  )
} 