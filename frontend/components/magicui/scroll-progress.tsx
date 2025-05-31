'use client'

import { motion, useScroll, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      className={cn(
        "absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-orange-500 from-40% via-white via-60% to-cyan-500/40 to-90%",
        className
      )}
      style={{ 
        scaleX, 
        transformOrigin: "0%",
      }}
    />
  )
} 