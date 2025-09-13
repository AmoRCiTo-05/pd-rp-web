import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Trophy, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { parseCategoryRanks } from '@/utils/quizParser'
import categoryBasedData from '@/data/categoryBasedMCQs.txt?raw'

export default function CategoryRanks() {
  const [quizData, setQuizData] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const parsed = parseCategoryRanks(categoryBasedData)
      setQuizData(parsed)
    } catch (error) {
      console.error('Failed to parse quiz data:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  const categoryInfo = [
    {
      key: 'Academy (10 Questions)',
      title: 'Academy',
      description: 'Basic training fundamentals and entry-level knowledge',
      color: 'from-blue-500 to-blue-600',
      icon: '🎓'
    },
    {
      key: 'Patrol (10 Questions)',
      title: 'Patrol',
      description: 'Field operations, traffic stops, and patrol procedures',
      color: 'from-green-500 to-green-600',
      icon: '🚔'
    },
    {
      key: 'Supervisor (Corporal – 10 Questions)',
      title: 'Supervisor',
      description: 'Team leadership, case law, and supervision duties',
      color: 'from-orange-500 to-orange-600',
      icon: '👮'
    },
    {
      key: 'Command (Sergeant + Head Sergeant – 10 Questions)',
      title: 'Command',
      description: 'Advanced procedures, financial crimes, and coordination',
      color: 'from-purple-500 to-purple-600',
      icon: '⭐'
    },
    {
      key: 'Command Supervisor (Lieutenant – 10 Questions)',
      title: 'Command Supervisor',
      description: 'Policy enforcement, disciplinary actions, and operations',
      color: 'from-indigo-500 to-indigo-600',
      icon: '🎖️'
    },
    {
      key: 'High Command (Captain + Commander + Deputy Chief + Chief – 20 Questions)',
      title: 'High Command',
      description: 'Strategic leadership, crisis management, and administration',
      color: 'from-red-500 to-red-600',
      icon: '👑'
    }
  ]

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading quiz data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/rank-based-questions">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold gradient-text">
              Category Ranks
            </h1>
            <p className="text-muted-foreground mt-1">
              Choose a category to test your departmental knowledge
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categoryInfo.map((category, index) => {
            const quiz = quizData[category.key]
            const questionCount = quiz?.questions?.length || 0
            
            return (
              <Card key={index} className="immersive-card group cursor-pointer transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg text-2xl`}>
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {questionCount} questions available
                        </CardDescription>
                      </div>
                    </div>
                    <Trophy className="h-5 w-5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {category.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>Comprehensive {category.title.toLowerCase()} knowledge test</span>
                    </div>
                    
                    <Link 
                      to={`/rank-based-questions/quiz/category/${encodeURIComponent(category.key)}`}
                      className="w-full"
                    >
                      <Button 
                        className="w-full gap-2" 
                        disabled={questionCount === 0}
                      >
                        <Play className="h-4 w-4" />
                        Start {category.title} Quiz
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {Object.keys(quizData).length === 0 && (
          <Card className="glass-effect border-border/50 text-center py-12">
            <CardContent>
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Quiz Data Available</h3>
              <p className="text-muted-foreground">
                Quiz data is being loaded. Please check back later.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}