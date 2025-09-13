import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Users, Trophy, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { parseIndividualRanks } from '@/utils/quizParser'
import rankBasedData from '@/data/rankBasedMCQs.txt?raw'

export default function IndividualRanks() {
  const [quizData, setQuizData] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const parsed = parseIndividualRanks(rankBasedData)
      setQuizData(parsed)
    } catch (error) {
      console.error('Failed to parse quiz data:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  const rankCategories = [
    {
      category: 'Academy',
      ranks: ['Academy (Cadet + Probationary Officer) - Cadet', 'Academy (Cadet + Probationary Officer) - Probationary Officer'],
      color: 'from-blue-500 to-blue-600',
      description: 'Entry-level training and probationary period'
    },
    {
      category: 'Patrol',
      ranks: ['Patrol (Officer + Senior Officer) - Officer', 'Patrol (Officer + Senior Officer) - Senior Officer'],
      color: 'from-green-500 to-green-600',
      description: 'Front-line patrol operations'
    },
    {
      category: 'Supervisor',
      ranks: ['Supervisor (Corporal + Sergeant) - Corporal', 'Supervisor (Corporal + Sergeant) - Sergeant'],
      color: 'from-orange-500 to-orange-600',
      description: 'Team leadership and supervision'
    },
    {
      category: 'Command',
      ranks: ['Command (Head Sergeant + Lieutenant) - Head Sergeant', 'Command (Head Sergeant + Lieutenant) - Lieutenant'],
      color: 'from-purple-500 to-purple-600',
      description: 'Operational command and coordination'
    },
    {
      category: 'High Command',
      ranks: [
        'High Command (Captain + Commander + Deputy Chief + Chief) - Captain',
        'High Command (Captain + Commander + Deputy Chief + Chief) - Commander',
        'High Command (Captain + Commander + Deputy Chief + Chief) - Deputy Chief',
        'High Command (Captain + Commander + Deputy Chief + Chief) - Chief'
      ],
      color: 'from-red-500 to-red-600',
      description: 'Senior leadership and strategic oversight'
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
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/rank-based-questions">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold gradient-text">
              Individual Ranks
            </h1>
            <p className="text-muted-foreground mt-1">
              Choose a specific rank to test your knowledge
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {rankCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-8 rounded-full bg-gradient-to-b ${category.color}`}></div>
                <div>
                  <h2 className="text-xl font-heading font-semibold">{category.category}</h2>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 ml-6">
                {category.ranks.map((rankTitle, rankIndex) => {
                  const quiz = quizData[rankTitle]
                  const rankName = rankTitle.split(' - ')[1]
                  const questionCount = quiz?.questions?.length || 0
                  
                  return (
                    <Card key={rankIndex} className="immersive-card group cursor-pointer transition-all duration-300 hover:scale-105">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                              <Users className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-base font-heading group-hover:text-primary transition-colors">
                                {rankName}
                              </CardTitle>
                              <CardDescription className="text-xs">
                                {questionCount} questions
                              </CardDescription>
                            </div>
                          </div>
                          <Trophy className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Test your knowledge of {rankName.toLowerCase()} responsibilities and procedures.
                        </p>
                        <Link 
                          to={`/rank-based-questions/quiz/individual/${encodeURIComponent(rankTitle)}`}
                          className="w-full"
                        >
                          <Button 
                            size="sm" 
                            className="w-full gap-2"
                            disabled={questionCount === 0}
                          >
                            <Play className="h-4 w-4" />
                            Start Quiz
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
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