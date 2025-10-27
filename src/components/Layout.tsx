
import React, { useState } from 'react'
import { Footer } from '@/components/Footer'
import { ThemeToggle } from '@/components/ThemeToggle'
import { SearchBar } from '@/components/SearchBar'
import { BackToTop } from '@/components/BackToTop'
import { AppSidebar } from '@/components/AppSidebar'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { ParticleField } from '@/components/ParticleField'
import { LearningModal } from '@/components/LearningModal'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollToTop } from '@/hooks/useScrollToTop'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  useScrollToTop();
  const [isLearningModalOpen, setIsLearningModalOpen] = useState(false);

  return (
    <SidebarProvider>
      <div id="app-root" className="min-h-screen bg-background text-foreground relative">
        {/* Animated Background - Only show on desktop for better mobile performance */}
        <div className="fixed inset-0 pointer-events-none hidden md:block">
          <AnimatedBackground />
          <ParticleField />
        </div>
        
        {/* Mobile-optimized simpler background */}
        <div className="fixed inset-0 pointer-events-none md:hidden bg-gradient-to-b from-background via-background/95 to-background opacity-80" />

        <div className="flex h-full">
          {/* Sidebar - Sticky on desktop */}
          <div className="hidden md:block flex-shrink-0">
            <div className="fixed top-0 left-0 h-screen">
              <AppSidebar />
            </div>
          </div>
          
          {/* Mobile Sidebar */}
          <div className="md:hidden relative z-20">
            <AppSidebar />
          </div>
        
          {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 relative z-10 md:ml-64 app-main will-change-transform">
          {/* Header */}
          <header className="sticky top-0 z-[15] backdrop-blur-md bg-background/80 border-b border-border/50 shadow-sm transition-all duration-300 hover:bg-background/90">
            <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 lg:px-6 gap-2 sm:gap-3">
              {/* Left: Sidebar Toggle */}
              <div className="flex-shrink-0">
                <SidebarTrigger />
              </div>
              
              {/* Center: Search Bar */}
              <div className="flex-1 max-w-md sm:max-w-xl lg:max-w-2xl mx-auto">
                <SearchBar />
              </div>
              
              {/* Right: Start Learning + Theme Toggle */}
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsLearningModalOpen(true)}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 h-9 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Start Learning"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden md:inline">Start Learning</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsLearningModalOpen(true)}
                  className="sm:hidden h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Start Learning"
                >
                  <BookOpen className="h-4 w-4" />
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </header>
          
          {/* Page Content */}
          <main className={cn("flex-1 animate-fade-in", className)}>
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
        
        {/* Back to Top Button */}
        <BackToTop />
        
        {/* Learning Modal */}
        <LearningModal 
          isOpen={isLearningModalOpen} 
          onClose={() => setIsLearningModalOpen(false)} 
        />
      </div>
      </div>
    </SidebarProvider>
  )
}
