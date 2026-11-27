
import React, { useState, useEffect, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const scrolled = window.scrollY
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      
      setScrollProgress(progress)
      setIsVisible(scrolled > 300)
    }

    const toggleVisibility = () => {
      if (frame) return
      frame = requestAnimationFrame(() => { frame = 0; update() })
    }
    update()
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => { window.removeEventListener('scroll', toggleVisibility); cancelAnimationFrame(frame) }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        "fixed z-30 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 touch-manipulation",
        // Mobile: bottom-right above quick nav, Desktop: standard position
        "bottom-20 right-4 md:bottom-8 md:right-8",
        "h-12 w-12 md:h-10 md:w-10" // Larger touch target on mobile
      )}
      aria-label="Scroll to top"
      style={{
        // Subtle progress ring effect
        boxShadow: `0 0 0 2px hsl(var(--primary) / ${scrollProgress / 100 * 0.5})`
      }}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

