import { Link } from 'react-router-dom'
import { Shield, Instagram, MessageSquare, ExternalLink } from 'lucide-react'

const linkGroups = [
  { title: 'Code Directory', links: [['10-Codes', '/basic-codes/10-codes'], ['Code Communications', '/basic-codes/code-comms'], ['Priority Sequence', '/basic-codes/priority-sequence'], ['Short Forms', '/short-forms']] },
  { title: 'S.O.P', links: [['Training S.O.P', '/sop/training'], ['MPU S.O.P', '/sop/meu'], ['SEU S.O.P', '/sop/seu'], ['ASD S.O.P', '/sop/asd'], ['Dispatcher S.O.P', '/sop/dispatcher']] },
  { title: 'Penal Codes', links: [['Types of Charges', '/penal-codes/types'], ['Felony', '/penal-codes/felony'], ['Misdemeanor', '/penal-codes/misdemeanor'], ['Infraction', '/penal-codes/infraction']] },
  { title: 'Practice', links: [['Practice Hub', '/practice'], ['Flashcards', '/practice/flashcards'], ['Daily Challenge', '/practice/daily'], ['Scenarios', '/practice/scenarios'], ['Radio Call Builder', '/practice/radio'], ['Charge Picker', '/practice/charges'], ['Rank Roadmap', '/practice/roadmap']] },
  { title: 'Resources', links: [['Amendments', '/amendments'], ['Case Laws', '/case-laws'], ['Advanced Terms', '/advanced-sop/terms'], ['Situation Questions', '/situation-questions'], ['Confusing Topics', '/confusing-topics'], ['About', '/about'], ['Feedback', 'https://forms.gle/qRnadpZqkHahsq7U6']] },
] as const

export function Footer() {
  return (
    <footer className="bg-card border-t border-border grid lg:grid-cols-[minmax(15rem,1fr)_3fr]">
      <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border bg-sidebar flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <p className="font-heading font-bold text-xl text-sidebar-foreground">PD RP Guide</p>
            <p className="text-sm text-sidebar-foreground/60">Law Enforcement Roleplay</p>
          </div>
        </div>
        <p className="text-sm text-sidebar-foreground/80 mb-6 leading-relaxed">
          Your comprehensive guide to mastering law enforcement roleplay in GTA RP. Everything you need for authentic police experiences.
        </p>
        <a href="https://instagram.com/aanshchopra" target="_blank" rel="noopener noreferrer" className="mt-auto mb-4 inline-flex items-center gap-2 text-sm text-sidebar-foreground/70 hover:text-primary">
          <Instagram className="h-4 w-4" />@aanshchopra
        </a>
        <p className="text-xs text-sidebar-foreground/60">
          Made with ❤️ by <a href="mailto:aanshchopra33@gmail.com" className="font-medium text-sidebar-primary hover:underline">Aansh (AmoRCiTo)</a>
        </p>
      </div>
      <div className="p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8">
        {linkGroups.map(group => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="font-heading font-semibold text-base text-foreground mb-4">{group.title}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              {group.links.map(([title, href]) => (
                <li key={href}>{href.startsWith('http')
                  ? <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"><MessageSquare className="h-3 w-3" />{title}<ExternalLink className="h-3 w-3" /></a>
                  : <Link to={href} className="text-sm text-muted-foreground hover:text-primary">{title}</Link>}</li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  )
}
