
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
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar'

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

export function AppSidebar() {
  const [openSections, setOpenSections] = useState<string[]>([])
  const location = useLocation()
  const { state } = useSidebar()
  
  const isCollapsed = state === 'collapsed'

  const toggleSection = (title: string) => {
    if (isCollapsed) return // Don't toggle sections when collapsed
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
    <Sidebar variant="inset" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="font-heading font-semibold text-lg text-sidebar-foreground">PD RP Guide</h1>
                <p className="text-xs text-sidebar-foreground/60">Law Enforcement Roleplay</p>
              </div>
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.href ? (
                    // Single navigation item
                    item.external ? (
                      <SidebarMenuButton asChild size="lg">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "flex items-center space-x-3 text-sm",
                            isActiveRoute(item.href) && "bg-sidebar-accent text-sidebar-accent-foreground"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          {!isCollapsed && <span>{item.title}</span>}
                        </a>
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton asChild size="lg">
                        <NavLink
                          to={item.href}
                          className={({ isActive }) => cn(
                            "flex items-center space-x-3 text-sm",
                            isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          {!isCollapsed && <span>{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    )
                  ) : (
                    // Navigation group with children
                    <>
                      <SidebarMenuButton
                        onClick={() => toggleSection(item.title)}
                        size="lg"
                        className={cn(
                          "flex items-center justify-between w-full text-sm",
                          isParentActive(item.children!) && "bg-sidebar-accent text-sidebar-accent-foreground"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="h-5 w-5" />
                          {!isCollapsed && <span>{item.title}</span>}
                        </div>
                        {!isCollapsed && (
                          <ChevronDown 
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              openSections.includes(item.title) ? "rotate-180" : ""
                            )} 
                          />
                        )}
                      </SidebarMenuButton>
                      
                      {/* Submenu */}
                      {!isCollapsed && openSections.includes(item.title) && (
                        <SidebarMenuSub>
                          {item.children?.map((child) => (
                            <SidebarMenuSubItem key={child.href}>
                              <SidebarMenuSubButton asChild>
                                <NavLink
                                  to={child.href}
                                  className={({ isActive }) => cn(
                                    "block text-sm",
                                    isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                                  )}
                                >
                                  {child.title}
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        {!isCollapsed && (
          <div className="p-4">
            <div className="text-xs text-sidebar-foreground/60 text-center">
              Made by <span className="font-medium text-sidebar-primary">Aansh (AmoRCiTo)</span>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
