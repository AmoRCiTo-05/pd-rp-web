
import React, { useMemo, useState } from 'react'
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
import { searchData } from '@/data/searchData'
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
  const [query, setQuery] = useState('')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const normalizedQuery = query.trim().toLowerCase()

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return learningCategories
    return learningCategories
      .map((cat) => ({
        ...cat,
        subcategories: cat.subcategories.filter((s) => s.title.toLowerCase().includes(normalizedQuery))
      }))
      .filter((cat) => cat.title.toLowerCase().includes(normalizedQuery) || cat.subcategories.length > 0)
  }, [normalizedQuery])

  const filteredPages = useMemo(() => {
    if (!normalizedQuery) return searchData
    return searchData.filter((p) => p.title.toLowerCase().includes(normalizedQuery) || p.category.toLowerCase().includes(normalizedQuery))
  }, [normalizedQuery])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-full max-w-[95vw] sm:max-w-4xl lg:max-w-6xl max-h-[90vh] sm:max-h-[92vh] rounded-lg sm:rounded-xl overflow-hidden backdrop-blur-md bg-background/95 border-border/50 p-4 sm:px-6 shadow-xl">
        <DialogHeader className="pb-3 sm:pb-4">
          <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-center gradient-text">
            What do you want to learn?
          </DialogTitle>
        </DialogHeader>

        {/* Search with enhanced details */}
        <div className="px-0 sm:px-4 mb-4">
          <div className="relative">
            <BookOpen className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground/60" />
            <input
              aria-label="Search learning topics"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics, pages or categories..."
              className="w-full rounded-lg bg-muted/5 border border-border/40 pl-10 sm:pl-12 pr-16 sm:pr-20 py-3 sm:py-3.5 text-sm sm:text-base placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-muted/10 transition-all duration-200 shadow-sm"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-muted-foreground hover:text-foreground px-2 py-1 rounded hover:bg-muted/50 transition-colors"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 px-0 sm:px-4 max-h-[60vh] sm:max-h-[65vh] overflow-y-auto pb-4 sm:pb-6">
          {/* Categories (accordion style) */}
          <div className="space-y-2 sm:space-y-3">
            {filteredCategories.map((category, index) => {
              const isOpen = openIndex === index
              return (
                <div key={category.title} className="">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left"
                    aria-expanded={isOpen}
                  >
                    <Card className={`relative overflow-hidden backdrop-blur-sm bg-card/95 border-border/50 transition-all duration-200 ${isOpen ? 'ring-2 ring-primary/40 shadow-lg shadow-primary/10' : 'hover:shadow-md hover:shadow-primary/5'}`}>
                      <CardHeader className="p-3 sm:pb-3 sm:pt-4">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center transform transition-transform will-change-transform hover:scale-105 shadow-sm flex-shrink-0`}> 
                            <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-sm sm:text-base lg:text-lg font-heading group-hover:text-primary transition-colors duration-150 line-clamp-1">
                              {category.title}
                            </CardTitle>
                            <CardDescription className="text-xs sm:text-sm leading-relaxed mt-0.5 sm:mt-1 line-clamp-2 text-muted-foreground">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </button>

                  <div className={`mt-1.5 sm:mt-2 pl-3 sm:pl-4 transition-[max-height,opacity] duration-200 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-1 sm:space-y-2">
                      {category.subcategories && category.subcategories.length > 0 ? (
                        category.subcategories.map((sub, sIdx) => (
                          <Link key={sIdx} to={sub.href} onClick={onClose} className="block px-2 sm:px-3 py-2 sm:py-3 rounded-md hover:bg-accent/60 transition-colors text-xs sm:text-sm text-muted-foreground flex items-center gap-2 sm:gap-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full flex-shrink-0" />
                            <div className="truncate">{sub.title}</div>
                          </Link>
                        ))
                      ) : (
                        <div className="px-2 sm:px-3 py-2 text-xs sm:text-sm text-muted-foreground">No quick links</div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pages / Results */}
          <div className="space-y-2 sm:space-y-3">
            <Card className="immersive-card">
              <CardHeader className="p-3 sm:pb-2 sm:pt-4">
                <CardTitle className="text-sm sm:text-base lg:text-lg font-heading">Pages & Results</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-1">Quickly jump to any page. Search filters results in real-time.</CardDescription>
              </CardHeader>
              <div className="px-2 sm:px-4 pb-3">
                <div className="grid grid-cols-1 gap-1 sm:gap-2 max-h-[52vh] sm:max-h-[56vh] overflow-y-auto">
                  {(normalizedQuery ? filteredPages : searchData).map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={onClose}
                      className="block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-accent/60 transition-colors text-xs sm:text-sm text-muted-foreground flex items-center gap-2 sm:gap-3"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full flex-shrink-0" />
                      <div className="truncate flex-1">{item.title}</div>
                      <div className="ml-auto text-xs text-muted-foreground/70 hidden sm:block flex-shrink-0">{item.category}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
