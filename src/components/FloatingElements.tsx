import React from 'react'
import { Shield, Scale, FileText, Radio, Gavel, GraduationCap } from 'lucide-react'

const floatingIcons = [
  { icon: Shield, delay: 0, duration: 8 },
  { icon: Scale, delay: 1, duration: 10 },
  { icon: FileText, delay: 2, duration: 9 },
  { icon: Radio, delay: 3, duration: 11 },
  { icon: Gavel, delay: 4, duration: 7 },
  { icon: GraduationCap, delay: 5, duration: 12 }
]

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={index}
            className="absolute opacity-[0.03] dark:opacity-[0.08]"
            style={{
              left: `${15 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`,
              animation: `float ${item.duration}s ease-in-out infinite`,
              animationDelay: `${item.delay}s`
            }}
          >
            <Icon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-primary" />
          </div>
        )
      })}
    </div>
  )
}