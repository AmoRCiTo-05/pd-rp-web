import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      // Reduced particle count for better performance, especially on mobile
      const particleCount = Math.min(30, Math.floor(window.innerWidth / 40)) // More optimized responsive count
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.2
        })
      }
      particlesRef.current = particles
    }

    const animate = () => {
      if (!ctx) return;
      
      // Use RequestAnimationFrame timestamp for smooth animation
      const now = performance.now() * 0.001; // Convert to seconds
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach((particle, index) => {
        // Use time-based movement for smooth animation across different frame rates
        particle.x += particle.vx * (1/60)
        particle.y += particle.vy * (1/60)

        // Optimized edge wrapping
        particle.x = (particle.x + canvas.width) % canvas.width
        particle.y = (particle.y + canvas.height) % canvas.height

        // Draw particle
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = 'hsl(var(--primary))'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Connect nearby particles
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.globalAlpha = (1 - distance / 100) * 0.1
            ctx.strokeStyle = 'hsl(var(--primary))'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    updateCanvasSize()
    createParticles()
    animate()

    const handleResize = () => {
      updateCanvasSize()
      createParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="particle-field absolute inset-0 pointer-events-none opacity-20"
      style={{ zIndex: 1 }}
    />
  )
}