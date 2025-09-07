
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
  AlertTriangle
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
      { title: 'Evaluation Test', href: '/ftd/evaluation-test' }
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
      { title: 'Situation Questions', href: '/penal-codes/situation-questions' },
      { title: 'Confusing Topics', href: '/penal-codes/confusing-topics' }
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
  }
]

export function LearningModal({ isOpen, onClose }: LearningModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            What do you want to learn?
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-h-[60vh] overflow-y-auto">
          {learningCategories.map((category, index) => (
            <div key={index} className="space-y-2">
              <Link to={category.href} onClick={onClose}>
                <Card className="transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 border-border bg-card cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
              
              {category.subcategories && (
                <div className="ml-4 space-y-1">
                  {category.subcategories.map((sub, subIndex) => (
                    <Link key={subIndex} to={sub.href} onClick={onClose}>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted/50 transition-colors text-sm">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {sub.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
