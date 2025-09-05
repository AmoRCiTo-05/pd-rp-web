
import React from 'react'
import { Footer } from '@/components/Footer'
import { ThemeToggle } from '@/components/ThemeToggle'
import { SearchBar } from '@/components/SearchBar'
import { BackToTop } from '@/components/BackToTop'
import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { useScrollToTop } from '@/hooks/useScrollToTop'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  useScrollToTop();

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background text-foreground flex w-full animate-fade-in">
        {/* Sidebar */}
        <AppSidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="sticky top-0 z-30 glass-effect border-b border-border">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 gap-4">
              {/* Left: Sidebar Toggle */}
              <div className="flex-shrink-0">
                <SidebarTrigger />
              </div>
              
              {/* Center: Search Bar */}
              <div className="flex-1 max-w-3xl mx-auto">
                <SearchBar />
              </div>
              
              {/* Right: Theme Toggle */}
              <div className="flex-shrink-0">
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
      </div>
    </SidebarProvider>
  )
}
