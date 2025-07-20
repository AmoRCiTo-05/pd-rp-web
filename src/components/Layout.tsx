
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
      <div className="min-h-screen bg-background text-foreground flex w-full">
        {/* Sidebar */}
        <AppSidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6">
              {/* Sidebar Toggle - Always visible */}
              <div>
                <SidebarTrigger />
              </div>
              
              {/* Centered Search Bar for desktop, full width for mobile */}
              <div className="flex-1 lg:flex lg:justify-center lg:max-w-5xl lg:mx-auto">
                <div className="w-full max-w-3xl ml-3 lg:ml-0">
                  <SearchBar />
                </div>
              </div>
              
              {/* Theme Toggle */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
              </div>
            </div>
          </header>
          
          {/* Page Content - Removed padding */}
          <main className={cn("flex-1", className)}>
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
