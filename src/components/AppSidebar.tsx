
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Home, Radio, FileText, GraduationCap, Scale, Gavel, FileCode, Info, MessageSquare, Shield, Menu, HelpCircle, AlertTriangle, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, useSidebar } from '@/components/ui/sidebar';

const navigationItems = [{
  title: 'Home',
  href: '/',
  icon: Home
}, {
  title: 'PD Directory',
  icon: Radio,
  children: [{
    title: '10-Codes',
    href: '/basic-codes/10-codes'
  }, {
    title: 'Code-Comms',
    href: '/basic-codes/code-comms'
  }, {
    title: 'Priority Sequence',
    href: '/basic-codes/priority-sequence'
  }, {
    title: 'City Limit Patrol Areas',
    href: '/basic-codes/patrol-areas'
  }, {
    title: 'Sample Calls',
    href: '/pd/sample-calls'
  }, {
    title: 'In-Game PD Commands',
    href: '/pd/in-game-commands'
  }]
}, {
  title: 'Short Forms',
  href: '/short-forms',
  icon: FileCode
}, {
  title: 'Amendments',
  href: '/amendments',
  icon: Gavel
}, {
  title: 'S.O.P',
  icon: FileText,
  children: [{
    title: 'SOP for Training',
    href: '/sop/training'
  }, {
    title: 'MPU SOP',
    href: '/sop/meu'
  }, {
    title: 'SEU SOP',
    href: '/sop/seu'
  }, {
    title: 'ASD SOP',
    href: '/sop/asd'
  }, {
    title: 'Dispatcher SOP',
    href: '/sop/dispatcher'
  }]
}, {
  title: 'FTD',
  icon: Users,
  children: [{
    title: 'Field Training Division',
    href: '/ftd/field-training'
  }, {
    title: 'FTD Evaluation Test',
    href: '/ftd/evaluation-test'
  }]
}, {
  title: 'Case Laws',
  href: '/case-laws',
  icon: Shield
}, {
  title: 'Advanced SOPs',
  icon: GraduationCap,
  children: [{
    title: 'Advanced Terms',
    href: '/advanced-sop/terms'
  }]
}, {
  title: 'Penal Codes',
  icon: Scale,
  children: [{
    title: 'Types of Charges',
    href: '/penal-codes/types'
  }, {
    title: 'Felony',
    href: '/penal-codes/felony'
  }, {
    title: 'Misdemeanor',
    href: '/penal-codes/misdemeanor'
  }, {
    title: 'Infraction',
    href: '/penal-codes/infraction'
  }]
}, {
  title: 'Situation Based Questions',
  href: '/situation-questions',
  icon: HelpCircle
}, {
  title: 'Confusing Topics',
  href: '/confusing-topics',
  icon: AlertTriangle
}, {
  title: 'About',
  href: '/about',
  icon: Info
}, {
  title: 'Feedback',
  href: 'https://forms.gle/qRnadpZqkHahsq7U6',
  icon: MessageSquare,
  external: true
}];

export function AppSidebar() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const toggleSection = (title: string) => {
    if (isCollapsed) return;
    setOpenSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title) 
        : [...prev, title]
    );
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  const isParentActive = (children: { href: string }[]) => {
    return children.some(child => location.pathname === child.href);
  };

  return (
    <Sidebar variant="inset" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center p-3 md:p-4">
          <div className="flex items-center space-x-2 md:space-x-3 w-full">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale">
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div className="min-w-0 flex-1">
                <h1 className="font-heading font-semibold text-base md:text-lg text-sidebar-foreground truncate">PD RP Guide</h1>
                <p className="text-xs text-sidebar-foreground/70 truncate">Law Enforcement Roleplay</p>
              </div>
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.href ? (
                    // Single navigation item
                    item.external ? (
                      <SidebarMenuButton asChild className="group">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                            "focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none",
                            "active:scale-95",
                            isActiveRoute(item.href) && "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                          )}
                        >
                          <item.icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-200" />
                          {!isCollapsed && <span className="truncate text-left">{item.title}</span>}
                        </a>
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton asChild className="group">
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            cn(
                              "flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                              "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                              "focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none",
                              "active:scale-95",
                              isActive && "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                            )
                          }
                        >
                          <item.icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-200" />
                          {!isCollapsed && <span className="truncate text-left">{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    )
                  ) : (
                    // Navigation group with children
                    <>
                      <SidebarMenuButton
                        onClick={() => toggleSection(item.title)}
                        className={cn(
                          "group flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          "focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none",
                          "active:scale-95",
                          isParentActive(item.children!) && "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                        )}
                      >
                        <div className="flex items-center flex-1 min-w-0">
                          <item.icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-200" />
                          {!isCollapsed && <span className="truncate text-left">{item.title}</span>}
                        </div>
                        {!isCollapsed && (
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 flex-shrink-0 ml-1 transition-all duration-200 group-hover:scale-110",
                              openSections.includes(item.title) ? "rotate-180" : ""
                            )}
                          />
                        )}
                      </SidebarMenuButton>
                      
                      {/* Submenu with smooth animation */}
                      {!isCollapsed && openSections.includes(item.title) && (
                        <SidebarMenuSub className="ml-4 mt-1 space-y-1 animate-accordion-down">
                          {item.children?.map((child) => (
                            <SidebarMenuSubItem key={child.href}>
                              <SidebarMenuSubButton asChild className="group">
                                <NavLink
                                  to={child.href}
                                  className={({ isActive }) =>
                                    cn(
                                      "flex items-center w-full px-3 py-2 text-sm rounded-md transition-all duration-200",
                                      "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                                      "focus:bg-sidebar-accent/50 focus:text-sidebar-accent-foreground focus:outline-none",
                                      "active:scale-95",
                                      isActive && "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm font-medium"
                                    )
                                  }
                                >
                                  <div className="w-2 h-2 rounded-full bg-current opacity-50 mr-3 flex-shrink-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-200"></div>
                                  <span className="truncate text-left">{child.title}</span>
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
          <div className="p-3 md:p-4">
            <div className="text-xs text-sidebar-foreground/70 text-center">
              Made by <a 
                href="mailto:aanshchopra33@gmail.com" 
                className="font-medium text-sidebar-primary hover:text-sidebar-primary/80 transition-colors duration-200 hover:underline"
              >
                Aansh (AmoRCiTo)
              </a>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
