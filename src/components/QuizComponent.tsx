import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Trophy, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { parseIndividualRanks, parseCategoryRanks, Question, QuizData } from '@/utils/quizParser'
import rankBasedData from '@/data/rankBasedMCQs.txt?raw'
import categoryBasedData from '@/data/categoryBasedMCQs.txt?raw'
import { toast } from 'sonner'

interface QuizState {
  currentQuestion: number
  answers: Record<number, number>
  timeStarted: number
  completed: boolean
  score?: number
}

export default function QuizComponent() {
  const { type, quizId } = useParams<{ type: string; quizId: string }>()
  const navigate = useNavigate()
  const [quiz, setQuiz] = useState<QuizData | null>(null)
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    timeStarted: Date.now(),
    completed: false
  })
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(true)

  const storageKey = `quiz_${type}_${quizId}`

  useEffect(() => {
    loadQuiz()
    loadProgress()
  }, [type, quizId])

  const loadQuiz = async () => {
    try {
      if (!quizId) return
      
      const decodedQuizId = decodeURIComponent(quizId)
      let quizData: Record<string, QuizData>
      
      if (type === 'individual') {
        quizData = parseIndividualRanks(rankBasedData)
      } else if (type === 'category') {
        quizData = parseCategoryRanks(categoryBasedData)
      } else {
        throw new Error('Invalid quiz type')
      }
      
      const selectedQuiz = quizData[decodedQuizId]
      if (!selectedQuiz) {
        throw new Error('Quiz not found')
      }
      
      setQuiz(selectedQuiz)
    } catch (error) {
      console.error('Failed to load quiz:', error)
      toast.error('Failed to load quiz data')
      navigate(-1)
    } finally {
      setLoading(false)
    }
  }

  const loadProgress = () => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      try {
        const parsedState = JSON.parse(saved)
        setQuizState(parsedState)
        if (parsedState.completed) {
          setShowResults(true)
        }
      } catch (error) {
        console.error('Failed to load progress:', error)
      }
    }
  }

  const saveProgress = (newState: QuizState) => {
    localStorage.setItem(storageKey, JSON.stringify(newState))
  }

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = { ...quizState.answers, [quizState.currentQuestion]: optionIndex }
    const newState = { ...quizState, answers: newAnswers }
    setQuizState(newState)
    saveProgress(newState)
  }

  const goToNextQuestion = () => {
    if (!quiz) return
    
    if (quizState.currentQuestion < quiz.questions.length - 1) {
      const newState = { ...quizState, currentQuestion: quizState.currentQuestion + 1 }
      setQuizState(newState)
      saveProgress(newState)
    } else {
      finishQuiz()
    }
  }

  const goToPreviousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      const newState = { ...quizState, currentQuestion: quizState.currentQuestion - 1 }
      setQuizState(newState)
      saveProgress(newState)
    }
  }

  const finishQuiz = () => {
    if (!quiz) return
    
    const correctAnswers = quiz.questions.reduce((count, question, index) => {
      const userAnswer = quizState.answers[index]
      return userAnswer === question.correctAnswer ? count + 1 : count
    }, 0)
    
    const score = Math.round((correctAnswers / quiz.questions.length) * 100)
    const finalState = { 
      ...quizState, 
      completed: true, 
      score,
      currentQuestion: quiz.questions.length - 1
    }
    
    setQuizState(finalState)
    saveProgress(finalState)
    setShowResults(true)
    
    toast.success(`Quiz completed! Score: ${score}%`)
  }

  const restartQuiz = () => {
    const newState = {
      currentQuestion: 0,
      answers: {},
      timeStarted: Date.now(),
      completed: false
    }
    setQuizState(newState)
    setShowResults(false)
    localStorage.removeItem(storageKey)
    toast.success('Quiz restarted!')
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading quiz...</p>
        </div>
      </div>
    )
  }

  if (!quiz) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <XCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Quiz Not Found</h2>
          <p className="text-muted-foreground mb-4">The requested quiz could not be loaded.</p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-heading font-bold gradient-text mb-2">
              Quiz Completed!
            </h1>
            <p className="text-muted-foreground">Here are your results</p>
          </div>

          <Card className="immersive-card mb-8">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                {quiz.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-bold text-primary">
                {quizState.score}%
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-semibold text-green-600">
                    {Object.values(quizState.answers).filter((answer, index) => 
                      answer === quiz.questions[index]?.correctAnswer
                    ).length}
                  </div>
                  <p className="text-sm text-muted-foreground">Correct</p>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-red-600">
                    {quiz.questions.length - Object.values(quizState.answers).filter((answer, index) => 
                      answer === quiz.questions[index]?.correctAnswer
                    ).length}
                  </div>
                  <p className="text-sm text-muted-foreground">Incorrect</p>
                </div>
                <div>
                  <div className="text-2xl font-semibold">
                    {quiz.questions.length}
                  </div>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-heading font-semibold">Review Answers</h2>
            {quiz.questions.map((question, index) => {
              const userAnswer = quizState.answers[index]
              const isCorrect = userAnswer === question.correctAnswer
              
              return (
                <Card key={index} className="glass-effect border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <Badge variant={isCorrect ? 'default' : 'destructive'} className="mt-1">
                        {index + 1}
                      </Badge>
                      <div className="flex-1">
                        <p className="font-medium">{question.question}</p>
                      </div>
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600 mt-1" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {question.options.map((option, optionIndex) => {
                      let className = "p-2 rounded text-sm border"
                      
                      if (optionIndex === question.correctAnswer) {
                        className += " bg-green-100 border-green-300 text-green-800"
                      } else if (optionIndex === userAnswer && !isCorrect) {
                        className += " bg-red-100 border-red-300 text-red-800"
                      } else {
                        className += " bg-muted/30 border-muted"
                      }
                      
                      return (
                        <div key={optionIndex} className={className}>
                          {optionIndex === question.correctAnswer && "✓ "}
                          {optionIndex === userAnswer && optionIndex !== question.correctAnswer && "✗ "}
                          {option}
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={restartQuiz} variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Retake Quiz
            </Button>
            <Link 
              to={type === 'individual' ? '/rank-based-questions/individual-ranks' : '/rank-based-questions/category-ranks'}
            >
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Quizzes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = quiz.questions[quizState.currentQuestion]
  const progress = ((quizState.currentQuestion + 1) / quiz.questions.length) * 100
  const selectedAnswer = quizState.answers[quizState.currentQuestion]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to={type === 'individual' ? '/rank-based-questions/individual-ranks' : '/rank-based-questions/category-ranks'}
          >
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Exit Quiz
            </Button>
          </Link>
          <Badge variant="secondary">
            Question {quizState.currentQuestion + 1} of {quiz.questions.length}
          </Badge>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-heading font-semibold">{quiz.title}</h1>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="immersive-card mb-8">
          <CardHeader>
            <CardTitle className="text-lg leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className="w-full justify-start text-left h-auto p-4 whitespace-normal"
                onClick={() => handleAnswer(index)}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs bg-muted text-muted-foreground rounded px-2 py-1 mt-0.5">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={goToPreviousQuestion}
            disabled={quizState.currentQuestion === 0}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <Button
            onClick={goToNextQuestion}
            disabled={selectedAnswer === undefined}
            className="gap-2"
          >
            {quizState.currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next'}
            {quizState.currentQuestion < quiz.questions.length - 1 && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}