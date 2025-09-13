
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Radio, 
  FileText, 
  GraduationCap, 
  Scale, 
  Gavel, 
  FileCode, 
  Shield,
  HelpCircle,
  AlertTriangle,
  BookOpen
} from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface LearningModalProps {
  isOpen: boolean
  onClose: () => void
}

const learningCategories = [
  {
    title: 'Basic Codes',
    description: 'Essential 10-codes, communication protocols, priority sequences, and patrol area maps',
    icon: Radio,
    href: '/basic-codes/10-codes',
    color: 'from-blue-500 to-blue-600',
    subcategories: [
      { title: '10-Codes', href: '/basic-codes/10-codes' },
      { title: 'Code Communications', href: '/basic-codes/code-comms' },
      { title: 'In-Game Commands', href: '/basic-codes/in-game-commands' },
      { title: 'Patrol Areas', href: '/basic-codes/patrol-areas' },
      { title: 'Priority Sequence', href: '/basic-codes/priority-sequence' },
      { title: 'Sample Calls', href: '/basic-codes/sample-calls' }
    ]
  },
  {
    title: 'Field Training Division (FTD)',
    description: 'Comprehensive FTD training curriculum and evaluation materials for cadets',
    icon: GraduationCap,
    href: '/ftd/field-training',
    color: 'from-indigo-500 to-indigo-600',
    subcategories: [
      { title: 'Field Training Program', href: '/ftd/field-training' },
      { title: 'Evaluation Test', href: '/ftd/evaluation-test' },
      { title: 'Rank Based Questions', href: '/rank-based-questions' }
    ]
  },
  {
    title: 'Standard Operating Procedures',
    description: 'Detailed SOPs covering training protocols and specialized unit operations',
    icon: FileText,
    href: '/sop/training',
    color: 'from-green-500 to-green-600',
    subcategories: [
      { title: 'Training SOP', href: '/sop/training' },
      { title: 'Dispatcher SOP', href: '/sop/dispatcher' },
      { title: 'MEU SOP', href: '/sop/meu' },
      { title: 'SEU SOP', href: '/sop/seu' },
      { title: 'ASD SOP', href: '/sop/asd' }
    ]
  },
  {
    title: 'Penal Codes',
    description: 'Complete classification system of criminal offenses and their penalties',
    icon: Scale,
    href: '/penal-codes/types',
    color: 'from-red-500 to-red-600',
    subcategories: [
      { title: 'Code Types', href: '/penal-codes/types' },
      { title: 'Felonies', href: '/penal-codes/felony' },
      { title: 'Misdemeanors', href: '/penal-codes/misdemeanor' },
      { title: 'Infractions', href: '/penal-codes/infraction' },
      { title: 'Situation Questions', href: '/situation-questions' },
      { title: 'Confusing Topics', href: '/confusing-topics' }
    ]
  },
  {
    title: 'PD Operations',
    description: 'Police department operational procedures and command structures',
    icon: Shield,
    href: '/pd/in-game-commands',
    color: 'from-purple-500 to-purple-600',
    subcategories: [
      { title: 'In-Game Commands', href: '/pd/in-game-commands' },
      { title: 'Sample Calls', href: '/pd/sample-calls' }
    ]
  },
  {
    title: 'Legal Framework',
    description: 'Constitutional amendments and case law precedents for law enforcement',
    icon: Gavel,
    href: '/amendments',
    color: 'from-orange-500 to-orange-600',
    subcategories: [
      { title: 'Amendments', href: '/amendments' },
      { title: 'Case Laws', href: '/case-laws' }
    ]
  },
  {
    title: 'Reference Materials',
    description: 'Quick reference guides and terminology for daily operations',
    icon: FileCode,
    href: '/short-forms',
    color: 'from-teal-500 to-teal-600',
    subcategories: [
      { title: 'Short Forms', href: '/short-forms' },
      { title: 'Advanced Terms', href: '/advanced-sop/terms' }
    ]
  },
  {
    title: 'Situation Based Questions',
    description: 'Scenario-based questions to test practical law enforcement knowledge',
    icon: HelpCircle,
    href: '/situation-questions',
    color: 'from-yellow-500 to-yellow-600',
    subcategories: []
  },
  {
    title: 'Confusing Topics',
    description: 'Clarification on commonly misunderstood law enforcement concepts',
    icon: AlertTriangle,
    href: '/confusing-topics',
    color: 'from-pink-500 to-pink-600',
    subcategories: []
  }
]

export function LearningModal({ isOpen, onClose }: LearningModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto glass-effect border-border/50">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-center mb-4 gradient-text">
            What do you want to learn?
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 max-h-[60vh] overflow-y-auto px-2 sm:px-0">
          {learningCategories.map((category, index) => (
            <div key={index} className="space-y-2">
              <Link to={category.href} onClick={onClose}>
                <Card className="immersive-card group cursor-pointer overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base sm:text-lg font-heading group-hover:text-primary transition-colors duration-200 line-clamp-2">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-2 mt-1">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
              
              {category.subcategories && category.subcategories.length > 0 && (
                <div className="ml-4 space-y-1">
                  {category.subcategories.map((sub, subIndex) => (
                    <Link key={subIndex} to={sub.href} onClick={onClose}>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/50 transition-colors text-sm group cursor-pointer">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full group-hover:bg-primary transition-colors"></div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors truncate">
                          {sub.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* All pages - derived from searchData for completeness */}
          <div className="space-y-2">
            <Card className="immersive-card group cursor-default">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center transition-transform duration-300 shadow-lg`}>
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base sm:text-lg font-heading transition-colors duration-200 line-clamp-2">
                      All Pages
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-2 mt-1">
                      Quick links to every discoverable page in the site
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-1 max-h-40 overflow-y-auto">
                  {/** We'll reference searchData to list all paths. Keep this static list in sync with `src/data/searchData.ts` */}
                  <Link to="/" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Dashboard</Link>
                  <Link to="/basic-codes/10-codes" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">10-Codes</Link>
                  <Link to="/basic-codes/code-comms" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Code Communications</Link>
                  <Link to="/basic-codes/in-game-commands" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Basic In-Game Commands</Link>
                  <Link to="/basic-codes/patrol-areas" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Patrol Areas</Link>
                  <Link to="/basic-codes/priority-sequence" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Priority Sequence</Link>
                  <Link to="/basic-codes/sample-calls" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Basic Sample Calls</Link>
                  <Link to="/short-forms" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Short Forms</Link>
                  <Link to="/amendments" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Amendments</Link>
                  <Link to="/sop/training" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Training SOP</Link>
                  <Link to="/sop/meu" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">MEU SOP</Link>
                  <Link to="/sop/seu" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">SEU SOP</Link>
                  <Link to="/sop/asd" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">ASD SOP</Link>
                  <Link to="/sop/dispatcher" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Dispatcher SOP</Link>
                  <Link to="/ftd/field-training" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Field Training Division</Link>
                  <Link to="/ftd/evaluation-test" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">FTD Evaluation Test</Link>
                  <Link to="/advanced-sop/terms" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Advanced Terms</Link>
                  <Link to="/penal-codes/types" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Penal Code Types</Link>
                  <Link to="/penal-codes/felony" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Felony</Link>
                  <Link to="/penal-codes/misdemeanor" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Misdemeanor</Link>
                  <Link to="/penal-codes/infraction" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Infraction</Link>
                  <Link to="/situation-questions" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Situation Based Questions</Link>
                  <Link to="/confusing-topics" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Confusing Topics</Link>
                  <Link to="/pd/sample-calls" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">PD Sample Calls</Link>
                  <Link to="/pd/in-game-commands" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">PD In-Game Commands</Link>
                  <Link to="/about" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">About</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
