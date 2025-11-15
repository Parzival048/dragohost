/**
 * ParticleBackground Component
 * Animated background with Minecraft-themed particles
 * Features:
 * - Floating Minecraft blocks
 * - Gradient orbs with cursor following
 * - Parallax depth layers
 * - Performance-optimized with RAF
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  type: 'block' | 'orb';
  color?: string;
  emoji?: string;
  depth: number; // 0-1, for parallax effect
}

const MINECRAFT_BLOCKS = ['⬛', '🟫', '🟦', '🟩', '🟨', '🟥', '🟪', '⬜'];

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];

      // Add Minecraft block particles
      for (let i = 0; i < 20; i++) {
        particles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 20 + Math.random() * 30,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          type: 'block',
          emoji: MINECRAFT_BLOCKS[Math.floor(Math.random() * MINECRAFT_BLOCKS.length)],
          depth: Math.random(),
        });
      }

      // Add gradient orbs
      for (let i = 20; i < 35; i++) {
        particles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 40 + Math.random() * 80,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          type: 'orb',
          color: ['#0ea5e9', '#a855f7', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)],
          depth: Math.random(),
        });
      }

      particlesRef.current = particles;
    };

    initParticles();

    // Mouse move handler for cursor following effect
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX * (1 + particle.depth);
        particle.y += particle.speedY * (1 + particle.depth);

        // Cursor attraction for orbs (subtle effect)
        if (particle.type === 'orb') {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const force = (200 - distance) / 200;
            particle.x += (dx / distance) * force * 0.5;
            particle.y += (dy / distance) * force * 0.5;
          }
        }

        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

        // Render particle
        ctx.save();
        ctx.globalAlpha = 0.15 + particle.depth * 0.25; // Depth-based opacity

        if (particle.type === 'block' && particle.emoji) {
          // Render Minecraft block emoji
          ctx.font = `${particle.size}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          // Add subtle rotation
          ctx.translate(particle.x, particle.y);
          ctx.rotate((Date.now() / 5000 + particle.id) * 0.2);
          ctx.fillText(particle.emoji, 0, 0);
        } else if (particle.type === 'orb' && particle.color) {
          // Render gradient orb
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size
          );
          gradient.addColorStop(0, particle.color + '40');
          gradient.addColorStop(0.5, particle.color + '20');
          gradient.addColorStop(1, particle.color + '00');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isClient]);

  return (
    <>
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Additional CSS-based animated elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating gradient orbs (CSS fallback) */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Matrix-style code rain effect (subtle) */}
        <div className="absolute inset-0 opacity-5">
          <div className="matrix-rain" />
        </div>
      </div>

      {/* Global styles for matrix effect */}
      <style jsx>{`
        .matrix-rain {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            transparent 0%,
            transparent 70%,
            rgba(14, 165, 233, 0.05) 100%
          );
        }

        .matrix-rain::before {
          content: '01010101 10101010 01010101 10101010 01010101 10101010 01010101 10101010 01010101 10101010';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: rgba(14, 165, 233, 0.3);
          white-space: pre-wrap;
          word-break: break-all;
          line-height: 1.5;
          animation: matrix-fall 30s linear infinite;
        }

        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  );
}
