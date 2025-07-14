import React from 'react'
import { Sidebar } from '@/components/Sidebar'
import { ThemeToggle } from '@/components/ThemeToggle'
import { SearchBar } from '@/components/SearchBar'
import { BackToTop } from '@/components/BackToTop'
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar - Fixed 25% width */}
      <div className="w-1/4 min-w-0 hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Main Content - 75% width on desktop, full width on mobile */}
      <div className="w-full lg:w-3/4 min-w-0 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            {/* Centered Search Bar for desktop */}
            <div className="hidden sm:flex flex-1 justify-center max-w-4xl mx-auto">
              <div className="w-full max-w-2xl">
                <SearchBar />
              </div>
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center space-x-4 sm:absolute sm:right-6">
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile Search Bar - Single line with menu and theme toggle */}
          <div className="sm:hidden px-4 pb-4 flex items-center gap-3">
            <div className="flex-1">
              <SearchBar />
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className={cn("flex-1 pb-16", className)}>
          {children}
        </main>
      </div>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}