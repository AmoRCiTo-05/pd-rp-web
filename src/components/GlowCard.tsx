import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({ children, className, glowColor = 'primary' }: GlowCardProps) {
  return (
    <div className={cn(
      "relative group perspective-1000",
      "transition-transform duration-300 ease-out hover:scale-[1.02]",
      "hover:shadow-lg hover:shadow-primary/5",
      className
    )}>
      {/* Ambient glow effect */}
      <div 
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-30",
          "transition-all duration-500 rounded-lg blur-xl group-hover:blur-2xl",
          "md:motion-safe:animate-pulse-slow mix-blend-soft-light",
          glowColor === 'primary' && "from-primary via-primary/50 to-primary/30",
          glowColor === 'blue' && "from-blue-500 via-blue-400 to-blue-600",
          glowColor === 'green' && "from-green-500 via-green-400 to-green-600",
          glowColor === 'red' && "from-red-500 via-red-400 to-red-600",
          glowColor === 'purple' && "from-purple-500 via-purple-400 to-purple-600"
        )}
      />
      
      {/* Border glow */}
      <div 
        className={cn(
          "absolute -inset-[1px] bg-gradient-to-r opacity-0 group-hover:opacity-50",
          "transition-all duration-500 rounded-lg",
          glowColor === 'primary' && "from-primary to-primary/50",
          glowColor === 'blue' && "from-blue-500 to-blue-600",
          glowColor === 'green' && "from-green-500 to-green-600",
          glowColor === 'red' && "from-red-500 to-red-600",
          glowColor === 'purple' && "from-purple-500 to-purple-600"
        )}
      />
      
      {/* Content */}
      <div className="relative backdrop-blur-[2px] rounded-lg transition-colors duration-300 group-hover:bg-background/95">
        {children}
      </div>
    </div>
  )
}