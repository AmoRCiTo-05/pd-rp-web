import React, { ReactNode, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({ children, className, glowColor = 'primary' }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isPressed, setIsPressed] = useState(false)

  // Touch feedback handlers
  const handleTouchStart = () => setIsPressed(true)
  const handleTouchEnd = () => setIsPressed(false)

  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative group perspective-1000",
        "transition-transform duration-200 ease-out",
        // Desktop hover effects
        "md:hover:scale-[1.02] md:hover:shadow-lg md:hover:shadow-primary/5",
        // Mobile touch feedback
        isPressed && "scale-[0.98] opacity-90",
        "touch-manipulation",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Ambient glow effect - desktop only for performance */}
      <div 
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r opacity-0 hidden md:block",
          "group-hover:opacity-30 transition-all duration-500 rounded-lg blur-xl group-hover:blur-2xl",
          "motion-safe:animate-pulse-slow mix-blend-soft-light",
          glowColor === 'primary' && "from-primary via-primary/50 to-primary/30",
          glowColor === 'blue' && "from-blue-500 via-blue-400 to-blue-600",
          glowColor === 'green' && "from-green-500 via-green-400 to-green-600",
          glowColor === 'red' && "from-red-500 via-red-400 to-red-600",
          glowColor === 'purple' && "from-purple-500 via-purple-400 to-purple-600"
        )}
      />
      
      {/* Border glow - desktop only */}
      <div 
        className={cn(
          "absolute -inset-[1px] bg-gradient-to-r opacity-0 hidden md:block",
          "group-hover:opacity-50 transition-all duration-500 rounded-lg",
          glowColor === 'primary' && "from-primary to-primary/50",
          glowColor === 'blue' && "from-blue-500 to-blue-600",
          glowColor === 'green' && "from-green-500 to-green-600",
          glowColor === 'red' && "from-red-500 to-red-600",
          glowColor === 'purple' && "from-purple-500 to-purple-600"
        )}
      />
      
      {/* Content */}
      <div className={cn(
        "relative rounded-lg transition-colors duration-200",
        "md:backdrop-blur-[2px] md:group-hover:bg-background/95"
      )}>
        {children}
      </div>
    </div>
  )
}
