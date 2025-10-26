import React from 'react'

export function AnimatedBackground() {
  return (
    <div className="animated-background absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
  <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-3xl md:motion-safe:animate-float opacity-60 mix-blend-soft-light"></div>
  <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-accent/15 rounded-full blur-3xl md:motion-safe:animate-float-delayed opacity-50 mix-blend-soft-light" style={{ animationDelay: '2s' }}></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-secondary/8 rounded-full blur-3xl md:motion-safe:animate-float-slow opacity-40 mix-blend-soft-light" style={{ animationDelay: '4s' }}></div>
  <div className="absolute bottom-1/3 left-1/3 w-[25vw] h-[25vw] bg-primary/5 rounded-full blur-3xl md:motion-safe:animate-float opacity-30 mix-blend-soft-light" style={{ animationDelay: '6s' }}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M0%200h2v2H0V0zm4%204h2v2H4V4zm8%208h2v2h-2v-2zm8%208h2v2h-2v-2z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
    </div>
  )
}