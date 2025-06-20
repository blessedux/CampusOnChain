"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col bg-black/95",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg, rgba(38, 38, 38, 0.8) 5%, rgba(255, 107, 0, 0.2) 10%, rgba(255, 131, 0, 0.2) 15%, rgba(255, 149, 0, 0.3) 20%, rgba(255, 183, 0, 0.2) 25%, rgba(255, 123, 0, 0.2) 30%, rgba(38, 38, 38, 0.8) 35%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg, rgba(0, 0, 0, 0.95) 0%, rgba(38, 38, 38, 0.5) 7%, transparent 10%, transparent 12%, rgba(0, 0, 0, 0.95) 16%)",
            "--neutral-800": "rgb(38, 38, 38)",
            "--neutral-900": "rgb(23, 23, 23)",
            "--orange-300": "rgb(255, 149, 0)",
            "--orange-400": "rgb(255, 123, 0)",
            "--orange-500": "rgb(255, 107, 0)",
            "--orange-600": "rgb(255, 131, 0)",
            "--orange-700": "rgb(255, 183, 0)",
            "--black": "#000",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-40 blur-[12px] will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--neutral-900)_5%,var(--orange-500)_10%,var(--orange-600)_15%,var(--orange-300)_20%,var(--orange-700)_25%,var(--orange-400)_30%,var(--neutral-800)_35%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--neutral-900)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-plus-lighter after:content-[""]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
          )}
        ></div>
      </div>
      {children}
    </div>
  );
}; 