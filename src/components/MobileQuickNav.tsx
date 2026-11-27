import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Radio, Scale, FileText, Menu, X, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/components/ui/sidebar'

const quickLinks = [
  { icon: Brain, label: 'Practice', href: '/practice' },
  { icon: Home, label: 'Home', href: '/' },
  { icon: Radio, label: '10-Codes', href: '/basic-codes/10-codes' },
  { icon: Scale, label: 'Penal', href: '/penal-codes/types' },
  { icon: FileText, label: 'SOPs', href: '/sop/training' },
]

export function MobileQuickNav() {
  const location = useLocation()
  const { toggleSidebar } = useSidebar()
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let frame = 0
    const handleScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const current = window.scrollY
        const delta = current - lastScrollY.current
        if (current <= 100) setIsVisible(true)
        else if (Math.abs(delta) >= 8) setIsVisible(delta < 0)
        if (Math.abs(delta) >= 8) lastScrollY.current = current
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => { window.removeEventListener('scroll', handleScroll); cancelAnimationFrame(frame) }
  }, [])

  useEffect(() => { lastScrollY.current = window.scrollY; setIsVisible(true) }, [location.pathname])

  return (
    <nav
      className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border/50 shadow-lg transition-transform duration-300 safe-area-bottom",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
      role="navigation"
      aria-label="Quick navigation"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {quickLinks.map((link) => {
          const isActive = location.pathname === link.href || (link.href === '/practice' && location.pathname.startsWith('/practice/'))
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full py-2 rounded-lg transition-all duration-200 active:scale-95 touch-manipulation",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground active:bg-accent/50"
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <link.icon className={cn("h-5 w-5 mb-1", isActive && "animate-bounce-subtle")} />
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          )
        })}
        <Button variant="ghost"
          onClick={toggleSidebar}
          className="flex flex-col gap-0 items-center justify-center flex-1 h-full py-2 rounded-lg text-muted-foreground hover:text-foreground active:bg-accent/50 active:scale-95 transition-all duration-200 touch-manipulation"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 mb-1" />
          <span className="text-[10px] font-medium">Menu</span>
        </Button>
      </div>
    </nav>
  )
}
