import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Users, Trophy, BookOpen } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function RankBasedQuestions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-xl">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
            Rank Based Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Test your knowledge with specialized quizzes designed for different ranks and categories. 
            Track your progress and improve your understanding of law enforcement procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link to="/rank-based-questions/individual-ranks">
            <Card className="immersive-card group cursor-pointer h-full transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                      Individual Ranks
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      Specialized quizzes for each rank
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Take quizzes tailored to your specific rank, from Cadet to Chief. 
                  Each quiz focuses on the knowledge and responsibilities required at your level.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Cadet, Probationary Officer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Officer, Senior Officer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Corporal, Sergeant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Lieutenant, Captain, Chief</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/rank-based-questions/category-ranks">
            <Card className="immersive-card group cursor-pointer h-full transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                      Category Ranks
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      Quizzes organized by department
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive quizzes grouped by department categories. 
                  Perfect for testing broader knowledge across different operational areas.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Academy Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Patrol Operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Supervisor Duties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Command Operations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Card className="glass-effect border-border/50 max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-center gap-3 mb-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">How It Works</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                    1
                  </div>
                  <p>Choose your quiz type</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                    2
                  </div>
                  <p>Answer questions</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                    3
                  </div>
                  <p>Get your score</p>
                </div>
              </div>
              <p className="text-center pt-2">
                Your progress is automatically saved. You can continue where you left off anytime!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}