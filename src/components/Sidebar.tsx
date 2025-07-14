
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { 
  ChevronDown, 
  Home, 
  Radio, 
  FileText, 
  GraduationCap, 
  Scale, 
  Gavel, 
  FileCode, 
  Info, 
  MessageSquare,
  Shield,
  Menu,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    title: 'Home',
    href: '/',
    icon: Home
  },
  {
    title: 'Basic Codes',
    icon: Radio,
    children: [
      { title: '10-Codes', href: '/basic-codes/10-codes' },
      { title: 'Code-Comms', href: '/basic-codes/code-comms' },
    ]
  },
  {
    title: 'Short Forms',
    href: '/short-forms',
    icon: FileCode
  },
  {
    title: 'Amendments',
    href: '/amendments',
    icon: Gavel
  },
  {
    title: 'Standard Operating Procedures',
    icon: FileText,
    children: [
      { title: 'SOP for Training', href: '/sop/training' },
      { title: 'MEU SOP', href: '/sop/meu' },
      { title: 'SEU SOP', href: '/sop/seu' },
      { title: 'ASD SOP', href: '/sop/asd' },
      { title: 'Dispatcher SOP', href: '/sop/dispatcher' },
    ]
  },
  {
    title: 'Case Laws',
    href: '/case-laws',
    icon: Shield
  },
  {
    title: 'Advanced SOPs',
    icon: GraduationCap,
    children: [
      { title: 'Advanced Terms', href: '/advanced-sop/terms' },
    ]
  },
  {
    title: 'Penal Codes',
    icon: Scale,
    children: [
      { title: 'Types of Charges', href: '/penal-codes/types' },
      { title: 'Felony', href: '/penal-codes/felony' },
      { title: 'Misdemeanor', href: '/penal-codes/misdemeanor' },
      { title: 'Infraction', href: '/penal-codes/infraction' },
    ]
  },
  {
    title: 'About',
    href: '/about',
    icon: Info
  },
  {
    title: 'Feedback',
    href: 'https://forms.gle/qRnadpZqkHahsq7U6',
    icon: MessageSquare,
    external: true
  }
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>([])
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  const toggleSection = (title: string) => {
    setOpenSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  const isActiveRoute = (href: string) => {
    return location.pathname === href
  }

  const isParentActive = (children: { href: string }[]) => {
    return children.some(child => location.pathname === child.href)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border"
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar - Fixed and Static */}
      <div className={cn(
        "h-screen bg-sidebar-background border-r border-sidebar-border flex flex-col",
        "lg:static lg:w-full overflow-hidden", // Desktop: static positioning, no overflow
        "fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out", // Mobile: fixed positioning
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        className
      )}>
        <div className="flex flex-col h-full overflow-hidden">
          {/* Logo/Header - Fixed */}
          <div className="flex items-center h-16 px-6 border-b border-sidebar-border flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-heading font-semibold text-lg text-sidebar-foreground">PD RP Guide</h1>
                <p className="text-xs text-sidebar-foreground/60">Law Enforcement Roleplay</p>
              </div>
            </div>
          </div>

          {/* Navigation - Scrollable content area */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  {item.href ? (
                    // Single navigation item
                    item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    ) : (
                      <NavLink
                        to={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={({ isActive }) => cn(
                          "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                        )}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span className="font-medium">{item.title}</span>
                      </NavLink>
                    )
                  ) : (
                    // Navigation group with children
                    <div>
                      <button
                        onClick={() => toggleSection(item.title)}
                        className={cn(
                          "flex items-center justify-between w-full px-3 py-2.5 rounded-lg transition-all duration-200 text-left",
                          isParentActive(item.children!)
                            ? "bg-sidebar-accent text-sidebar-primary font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="h-5 w-5 flex-shrink-0" />
                          <span className="font-medium">{item.title}</span>
                        </div>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            openSections.includes(item.title) ? "rotate-180" : ""
                          )} 
                        />
                      </button>
                      
                      {/* Submenu */}
                      <div className={cn(
                        "ml-8 mt-1 space-y-1 overflow-hidden transition-all duration-300",
                        openSections.includes(item.title) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      )}>
                        {item.children?.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={({ isActive }) => cn(
                              "block px-3 py-2 rounded-lg transition-all duration-200 text-sm",
                              isActive
                                ? "bg-sidebar-accent text-sidebar-primary font-medium"
                                : "text-sidebar-foreground/80 hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
                            )}
                          >
                            {child.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Footer - Fixed position */}
          <div className="px-4 py-4 border-t border-sidebar-border flex-shrink-0">
            <div className="text-xs text-sidebar-foreground/60 text-center">
              Made by <span className="font-medium text-sidebar-primary">Aansh (AmoRCiTo)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
