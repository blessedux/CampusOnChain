'use client';

import React, { useEffect } from 'react';

interface BgradientAnimProps {
  className?: string;
  animationDuration?: number;
}

const BgradientAnim: React.FC<BgradientAnimProps> = ({
  className = "",
  animationDuration = 20,
}) => {
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      .gradient-background-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        background: rgb(0, 0, 0);
      }

      .gradient-background {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
          to right,
          rgb(20, 20, 20),        /* Dark black */
          rgb(255, 119, 0),       /* Bright orange */
          rgb(255, 200, 0),       /* Yellow */
          rgb(180, 70, 0),        /* Deep orange */
          rgb(20, 20, 20)         /* Dark black again to complete the cycle */
        );
        background-size: 600%;
        background-position: 0 0;
        mix-blend-mode: soft-light;
        opacity: 0.8;
        animation: gradients ${animationDuration}s ease infinite;
      }

      @keyframes gradients {
        0% {
          background-position: 0 0;
        }
        25% {
          background-position: 50% 0;
        }
        50% {
          background-position: 90% 0;
        }
        60% {
          background-position: 60% 0;
        }
        75% {
          background-position: 40% 0;
        }
        100% {
          background-position: 0 0;
        }
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, [animationDuration]);

  return (
    <div className="gradient-background-wrapper">
      <div 
        className={`gradient-background ${className}`}
      />
    </div>
  );
};

export { BgradientAnim }; 