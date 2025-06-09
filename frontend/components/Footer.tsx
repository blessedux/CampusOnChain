'use client'

import Link from "next/link"
import AnimatedGradientBackground from "./AnimatedGradientBackground"
import { SplineScene } from "@/components/ui/spline-scene"

export default function Footer() {
  return (
    <footer 
      id="footer-section"
      className="relative w-full h-screen bg-black">
      <AnimatedGradientBackground 
        Breathing={true}
        startingGap={110}
        gradientColors={[
          "#000000",  // Black center
          "#000000",  // Black
          "#F97316",  // Orange-500
          "#FB923C",  // Orange-400
          "#EA580C",   // Orange-600          
          "#0369A1" ,
          "#0C4A6E" 
        ]}
        gradientStops={[35, 45, 55, 65, 75, 85, 100]}
        animationSpeed={0.015}
        breathingRange={8}
        topOffset={20}
      />
      
      {/* Spline Scene */}
      <div className="absolute inset-0 -z-[1] opacity-30">
        <div className="w-full h-full">
          <SplineScene url="https://my.spline.design/animatedlightdesktop-z09EWCas87ASp5fW7afDMlCt/" />
        </div>
      </div>
      
      <div className="relative container h-full flex flex-col justify-end pb-8">
        <div className="flex flex-col items-center gap-6 text-center text-sm text-white/80">
          <div className="w-full text-center">
            <p>&copy; {new Date().getFullYear()} Campus on Chain. Todos los derechos reservados.</p>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="#" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              Términos
            </Link>
            <Link href="#" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 