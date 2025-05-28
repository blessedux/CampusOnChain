import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UniversityRingProps {
  universityId: string;
  size?: number;
}

// University color mapping
const universityColors: { [key: string]: string } = {
  uchile: "#0033A0",
  puc: "#8C1515",
  usach: "#F6A800",
  udec: "#002664",
  utfsm: "#D2232A",
  uach: "#4B7447",
  uv: "#005BAC",
  pucv: "#004990",
  ufro: "#003865",
  utalca: "#E60028",
  ucn: "#F47C20",
  uantofagasta: "#005596",
  uda: "#8C1919",
  uai: "#002E5D",
  udd: "#0072CE",
  udp: "#C8102E",
  uft: "#4A1830",
  umayor: "#003865",
  unab: "#B01E23",
  uah: "#0055A5",
  uandes: "#A6192E",
  ucen: "#1E2A78",
  ust: "#19513F",
  uautonoma: "#CE1126",
  uss: "#2C2A29",
  ubo: "#1E2E99",
  udla: "#F7941E",
  umc: "#80276C",
  uaconcagua: "#005596",
  ularepublica: "#003366",
  uisek: "#DA291C"
};

export function UniversityRing({ universityId, size = 160 }: UniversityRingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const color = universityColors[universityId] || "#666666";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Increase canvas size to prevent glow clipping
    const scale = 2;
    canvas.width = size * scale;
    canvas.height = size * scale;
    ctx.scale(scale, scale);

    let particles: Array<{
      x: number;
      y: number;
      angle: number;
      speed: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: size / 2,
        y: size / 2,
        angle: (Math.PI * 2 * i) / 20,
        speed: 0.5 + Math.random() * 0.5,
        size: 2 + Math.random() * 2,
        opacity: 0.7 + Math.random() * 0.3
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      
      // Draw outer glow
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 8, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 6;
      ctx.shadowColor = color;
      ctx.shadowBlur = 20;
      ctx.stroke();

      // Draw inner ring
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 8, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 0;
      ctx.stroke();

      // Update and draw particles
      particles.forEach(particle => {
        particle.angle += 0.01 * particle.speed;
        particle.x = size / 2 + Math.cos(particle.angle) * (size / 2 - 15);
        particle.y = size / 2 + Math.sin(particle.angle) * (size / 2 - 15);

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `${color}33`; // 20% opacity
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.fill();

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 0;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup animation
      particles = [];
    };
  }, [universityId, size, color]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
      style={{ width: size, height: size }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ transform: 'scale(0.5)', transformOrigin: 'top left' }}
      />
    </motion.div>
  );
} 