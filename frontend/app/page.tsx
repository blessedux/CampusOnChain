'use client'

import * as React from "react"
import { usePrivy, useLogin } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import InfiniteLogosSlider from "@/components/ui/infinite-slider"
import ValuePropSection from "@/components/ValuePropSection"
import PartnersSection from "@/components/PartnersSection"
import AboutSection from "@/components/AboutSection"
import MissionSection from "@/components/MissionSection"
import TeamSection from '@/components/about/TeamSection'
import RoadmapSection from "@/components/RoadmapSection"
import { CampusTransition } from '@/components/transitions/CampusTransition'
import { useState, useCallback, useEffect } from 'react'
import { Footer } from "@/components/Footer"

export default function LandingPage() {
  const { ready, authenticated, user, logout } = usePrivy();
  const { login } = useLogin();
  const router = useRouter();
  const [showTransition, setShowTransition] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isLoginAttempted, setIsLoginAttempted] = useState(false);

  // Handle wallet button click
  const handleWalletClick = () => {
    if (authenticated) {
      logout()
    } else {
      login()
    }
  }

  // Handle campus entry button click
  const handleCampusEntry = async () => {
    if (isNavigating) return; // Prevent multiple clicks
    
    if (authenticated) {
      // If already authenticated, start transition
      setShowTransition(true);
    } else {
      // If not authenticated, trigger login
      setIsLoginAttempted(true);
      await login();
    }
  }

  // Handle transition completion
  const handleTransitionComplete = useCallback(() => {
    if (!isNavigating) {
      setIsNavigating(true);
      router.push('/feed');
    }
  }, [router, isNavigating]);

  // Listen for authentication changes after login attempt
  useEffect(() => {
    if (isLoginAttempted && authenticated) {
      // If user successfully authenticated after clicking Enter Campus
      setShowTransition(true);
      setIsLoginAttempted(false);
    } else if (isLoginAttempted && !authenticated) {
      // If user cancelled login or it failed
      setIsLoginAttempted(false);
    }
  }, [authenticated, isLoginAttempted]);

  return (
    <div className="flex flex-col min-h-screen text-white">
      {showTransition && (
        <CampusTransition 
          isVisible={showTransition} 
          onComplete={handleTransitionComplete}
        />
      )}
      
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
      <InfiniteLogosSlider />
      <AboutSection />
      <MissionSection />
      <TeamSection />
      <ValuePropSection />
      <RoadmapSection />
      <Footer />
    </div>
  )
} 