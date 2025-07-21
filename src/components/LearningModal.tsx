
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
    title: 'Code Directory',
    description: '10-codes, communication protocols, and priority sequences',
    icon: Radio,
    href: '/basic-codes/10-codes',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Short Forms',
    description: 'Abbreviations and acronyms used in law enforcement',
    icon: FileCode,
    href: '/short-forms',
    color: 'from-teal-500 to-teal-600'
  },
  {
    title: 'Amendments',
    description: 'Constitutional amendments relevant to law enforcement',
    icon: Gavel,
    href: '/amendments',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'S.O.P',
    description: 'Standard Operating Procedures for all units',
    icon: FileText,
    href: '/sop/training',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Case Laws',
    description: 'Important case law precedents and legal decisions',
    icon: Shield,
    href: '/case-laws',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'Advanced S.O.P',
    description: 'Advanced terminology and command ranking procedures',
    icon: GraduationCap,
    href: '/advanced-sop/terms',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Penal Codes',
    description: 'Felonies, misdemeanors, and infractions breakdown',
    icon: Scale,
    href: '/penal-codes/types',
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'Situation Based Questions',
    description: 'Scenario-based questions to test your knowledge',
    icon: HelpCircle,
    href: '/situation-questions',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Confusing Topics',
    description: 'Clarification on commonly misunderstood concepts',
    icon: AlertTriangle,
    href: '/confusing-topics',
    color: 'from-pink-500 to-pink-600'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {learningCategories.map((category, index) => (
            <Link key={index} to={category.href} onClick={onClose}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border bg-card/50 backdrop-blur cursor-pointer">
                <CardHeader className="pb-4 text-center">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-heading text-lg">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
