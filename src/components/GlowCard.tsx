import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({ children, className, glowColor = 'primary' }: GlowCardProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-sm",
          glowColor === 'primary' && "from-primary to-primary/50",
          glowColor === 'blue' && "from-blue-500 to-blue-600",
          glowColor === 'green' && "from-green-500 to-green-600",
          glowColor === 'red' && "from-red-500 to-red-600",
          glowColor === 'purple' && "from-purple-500 to-purple-600"
        )}
      />
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}