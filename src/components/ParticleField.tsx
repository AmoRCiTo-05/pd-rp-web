import { useEffect, useRef } from 'react'

interface Particle { x: number; y: number; vx: number; vy: number; size: number }

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const desktop = matchMedia('(min-width: 768px)')
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    let cleanup: (() => void) | undefined
    const configure = () => {
      cleanup?.()
      cleanup = undefined
      if (!desktop.matches) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      let particles: Particle[] = []
      let frame = 0
      let previous = 0
      let colour = ''
      const readColour = () => {
        const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
        const candidate = `hsl(${primary})`
        colour = primary && CSS.supports('color', candidate) ? candidate : getComputedStyle(document.body).color
      }
      const resize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        particles = Array.from({ length: Math.min(30, Math.floor(canvas.width / 40)) }, () => {
          const angle = Math.random() * Math.PI * 2
          return { x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: Math.cos(angle) * 30, vy: Math.sin(angle) * 30, size: Math.random() * 2 + 1 }
        })
      }
      const draw = (dt: number) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = colour
        ctx.globalAlpha = 0.4
        particles.forEach(p => {
          p.x = (p.x + p.vx * dt + canvas.width) % canvas.width
          p.y = (p.y + p.vy * dt + canvas.height) % canvas.height
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill()
        })
      }
      const tick = (time: number) => {
        frame = 0
        if (document.hidden) return
        const dt = previous ? Math.min((time - previous) / 1000, 0.05) : 0
        previous = time
        draw(dt)
        frame = requestAnimationFrame(tick)
      }
      const resume = () => {
        cancelAnimationFrame(frame); frame = 0; previous = 0
        if (document.hidden) return
        if (reduced.matches) draw(0)
        else frame = requestAnimationFrame(tick)
      }
      const onResize = () => { resize(); resume() }
      const observer = new MutationObserver(() => { readColour(); resume() })
      readColour(); resize(); resume()
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
      window.addEventListener('resize', onResize)
      document.addEventListener('visibilitychange', resume)
      reduced.addEventListener('change', resume)
      cleanup = () => {
        cancelAnimationFrame(frame); observer.disconnect()
        window.removeEventListener('resize', onResize)
        document.removeEventListener('visibilitychange', resume)
        reduced.removeEventListener('change', resume)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
    configure()
    desktop.addEventListener('change', configure)
    return () => { cleanup?.(); desktop.removeEventListener('change', configure) }
  }, [])
  return <canvas ref={canvasRef} aria-hidden="true" className="particle-field absolute inset-0 pointer-events-none opacity-20 z-[1]" />
}
