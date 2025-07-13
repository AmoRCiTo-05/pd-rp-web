import React from 'react'
import { Sidebar } from '@/components/Sidebar'
import { ThemeToggle } from '@/components/ThemeToggle'
import { SearchBar } from '@/components/SearchBar'
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-72">
          {/* Header */}
          <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6">
              {/* Search Bar */}
              <div className="hidden sm:block flex-1 max-w-md">
                <SearchBar />
              </div>
              
              {/* Mobile search placeholder */}
              <div className="sm:hidden flex-1" />
              
              {/* Theme Toggle */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
              </div>
            </div>
            
            {/* Mobile Search Bar */}
            <div className="sm:hidden px-4 pb-4">
              <SearchBar />
            </div>
          </header>
          
          {/* Page Content */}
          <main className={cn("flex-1", className)}>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}