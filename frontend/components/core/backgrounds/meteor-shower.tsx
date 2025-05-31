'use client';

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MeteorShowerProps {
  number?: number;
  className?: string;
  children?: React.ReactNode;
}

export function MeteorShower({ number = 20, className, children }: MeteorShowerProps) {
  const [meteors, setMeteors] = useState<Array<{ top: string; left: string; delay: string; duration: string }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generateMeteors = () => {
      return Array.from({ length: number }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${8 + Math.random() * 2}s`
      }));
    };
    
    setMeteors(generateMeteors());
    setMounted(true);
  }, [number]);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      
      {/* Meteors */}
      {meteors.map((meteor, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute top-1/2 left-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:left-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:translate-x-0 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:blur-[2px]"
          )}
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  );
} 