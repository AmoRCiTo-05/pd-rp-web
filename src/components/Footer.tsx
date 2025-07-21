
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Instagram, MessageSquare, ExternalLink } from 'lucide-react';

const quickLinks = [{
  title: '10-Codes',
  href: '/basic-codes/10-codes'
}, {
  title: 'Code Communications',
  href: '/basic-codes/code-comms'
}, {
  title: 'Priority Sequence',
  href: '/basic-codes/priority-sequence'
}, {
  title: 'Short Forms',
  href: '/short-forms'
}];

const sopLinks = [{
  title: 'Training S.O.P',
  href: '/sop/training'
}, {
  title: 'MPU S.O.P',
  href: '/sop/meu'
}, {
  title: 'SEU S.O.P',
  href: '/sop/seu'
}, {
  title: 'ASD S.O.P',
  href: '/sop/asd'
}, {
  title: 'Dispatcher S.O.P',
  href: '/sop/dispatcher'
}];

const penalCodeLinks = [{
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
}];

const additionalLinks = [{
  title: 'Amendments',
  href: '/amendments'
}, {
  title: 'Case Laws',
  href: '/case-laws'
}, {
  title: 'Advanced Terms',
  href: '/advanced-sop/terms'
}, {
  title: 'Situation Questions',
  href: '/situation-questions'
}, {
  title: 'Confusing Topics',
  href: '/confusing-topics'
}];

export function Footer() {
  return <footer className="bg-card border-t border-border">
      {/* Mobile Layout - Vertical Stack */}
      <div className="lg:hidden">
        {/* Branding Section */}
        <div className="p-6 border-b border-border bg-sidebar-background">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-sidebar-foreground">PD RP Guide</h3>
              <p className="text-sm text-sidebar-foreground/60">Law Enforcement Roleplay</p>
            </div>
          </div>
          
          <p className="text-sm text-sidebar-foreground/80 mb-4 leading-relaxed">
            Your comprehensive guide to mastering law enforcement roleplay in GTA RP.
          </p>
          
          <div className="flex items-center space-x-4 mb-4">
            <a href="https://instagram.com/aanshchopra" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sidebar-foreground/60 hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" />
              <span className="text-sm">@aanshchopra</span>
            </a>
          </div>
          
          <div className="text-xs text-sidebar-foreground/60">
            Made with ❤️ by <a href="mailto:aanshchopra33@gmail.com" className="font-medium text-sidebar-primary hover:underline">Aansh (AmoRCiTo)</a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="p-6 space-y-8">
          {/* Code Directory */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Code Directory</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map(link => <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.title}
                </Link>)}
            </div>
          </div>

          {/* S.O.P */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">S.O.P</h4>
            <div className="grid grid-cols-2 gap-3">
              {sopLinks.map(link => <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.title}
                </Link>)}
            </div>
          </div>

          {/* Penal Codes */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Penal Codes</h4>
            <div className="grid grid-cols-2 gap-3">
              {penalCodeLinks.map(link => <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.title}
                </Link>)}
            </div>
          </div>

          {/* Additional Resources */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Resources</h4>
            <div className="grid grid-cols-2 gap-3">
              {additionalLinks.map(link => <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.title}
                </Link>)}
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <a href="https://forms.gle/qRnadpZqkHahsq7U6" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-3 w-3" />
                <span>Feedback</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Original Horizontal Layout */}
      <div className="hidden lg:flex min-h-[200px]">
        {/* Left 25% - Branding */}
        <div className="w-1/4 p-8 border-r border-border bg-sidebar-background">
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-sidebar-foreground">PD RP Guide</h3>
                <p className="text-sm text-sidebar-foreground/60">Law Enforcement Roleplay</p>
              </div>
            </div>
            
            <p className="text-sm text-sidebar-foreground/80 mb-6 leading-relaxed">
              Your comprehensive guide to mastering law enforcement roleplay in GTA RP. 
              Everything you need for authentic police experiences.
            </p>
            
            <div className="mt-auto">
              <div className="flex items-center space-x-4 mb-4">
                <a href="https://instagram.com/aanshchopra" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sidebar-foreground/60 hover:text-primary transition-colors">
                  <Instagram className="h-4 w-4" />
                  <span className="text-sm">@aanshchopra</span>
                </a>
              </div>
              
              <div className="text-xs text-sidebar-foreground/60">
                Made with ❤️ by <a href="mailto:aanshchopra33@gmail.com" className="font-medium text-sidebar-primary hover:underline">Aansh (AmoRCiTo)</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right 75% - Links */}
        <div className="w-3/4 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full">
            {/* Code Directory */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Code Directory</h4>
              <ul className="space-y-3">
                {quickLinks.map(link => <li key={link.href}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.title}
                    </Link>
                  </li>)}
              </ul>
            </div>

            {/* Standard Operating Procedures */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">S.O.P</h4>
              <ul className="space-y-3">
                {sopLinks.map(link => <li key={link.href}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.title}
                    </Link>
                  </li>)}
              </ul>
            </div>

            {/* Penal Codes */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Penal Codes</h4>
              <ul className="space-y-3">
                {penalCodeLinks.map(link => <li key={link.href}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.title}
                    </Link>
                  </li>)}
              </ul>
            </div>

            {/* Additional Resources */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {additionalLinks.map(link => <li key={link.href}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.title}
                    </Link>
                  </li>)}
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a href="https://forms.gle/qRnadpZqkHahsq7U6" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>Feedback</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
