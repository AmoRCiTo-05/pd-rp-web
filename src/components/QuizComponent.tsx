import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Trophy, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { parseIndividualRanks, parseCategoryRanks, QuizData } from '@/utils/quizParser'
import { attachLearningToQuestion } from '@/data/quizLearnMore'
import rankBasedData from '@/data/rankBasedMCQs.txt?raw'
import categoryBasedData from '@/data/categoryBasedMCQs.txt?raw'
import { readLocal, writeLocal, removeLocal, updatePractice, getPractice } from '@/utils/practiceStorage'
import { incorrectIds } from '@/utils/quizPools'
import { BookmarkButton } from '@/components/BookmarkButton'
import { useQuizKeyboard } from '@/hooks/useQuizKeyboard'
import { toast } from 'sonner'

import { QuizState, freshQuizState, restoreQuizState } from '@/utils/quizProgress'

interface QuizProps { allowRetake?: boolean; providedQuiz?: QuizData; storageId?: string; exitHref?: string; resultActions?: React.ReactNode; onComplete?: (quiz: QuizData, answers: Record<number,number>, score: number) => void }

export default function QuizComponent({ providedQuiz, storageId, exitHref, onComplete, resultActions, allowRetake = true }: QuizProps = {}) {
  const { type, quizId } = useParams<{ type: string; quizId: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const [quiz, setQuiz] = useState<QuizData | null>(null)
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    timeStarted: Date.now(),
    completed: false
  })
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(true)

  const storageKey = storageId ?? `quiz_${type}_${quizId}`
  const backHref = exitHref ?? (type === 'individual' ? '/rank-based-questions/individual-ranks' : '/rank-based-questions/category-ranks')

  useEffect(() => {
    loadQuiz()

  }, [type, quizId, storageKey])

  const loadQuiz = async () => {
    try {
      if (providedQuiz) { const selected = { ...providedQuiz, questions: providedQuiz.questions.map(attachLearningToQuestion) }; setQuiz(selected); loadProgress(selected); return }
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
      
      const selected = { ...selectedQuiz, questions: selectedQuiz.questions.map(attachLearningToQuestion) }
      setQuiz(selected)
      loadProgress(selected)
    } catch (error) {
      console.error('Failed to load quiz:', error)
      toast.error('Failed to load quiz data')
      navigate(-1)
    } finally {
      setLoading(false)
    }
  }

  const loadProgress = (selected: QuizData) => {
    const saved = readLocal<QuizState>(storageKey, freshQuizState(selected))
    const parsedState = restoreQuizState(saved, selected, storageKey)
    writeLocal(storageKey, parsedState)
    setQuizState(parsedState)
    setShowResults(parsedState.completed)
  }

  const saveProgress = (newState: QuizState) => {
    writeLocal(storageKey, newState)
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
    if (!providedQuiz) updatePractice(d => ({ ...d, missed: { ...d.missed, [storageKey]: incorrectIds(quiz.questions, quizState.answers) } }))
    updatePractice(d => ({...d,roadmap:{...d.roadmap,[storageKey]:Math.max(d.roadmap[storageKey]??0,score)}}))
    onComplete?.(quiz, quizState.answers, score)
    
    toast.success(`Quiz completed! Score: ${score}%`)
  }

  const restartQuiz = () => {
    const newState = freshQuizState(quiz ?? undefined)
    setQuizState(newState)
    setShowResults(false)
    removeLocal(storageKey)
    if (!providedQuiz) updatePractice(d => ({...d, missed:{...d.missed,[storageKey]:[]}}))
    toast.success('Quiz restarted!')
  }

  useQuizKeyboard(!loading && !showResults, quiz?.questions[quizState.currentQuestion]?.options.length ?? 0, handleAnswer, () => {
    if (quizState.answers[quizState.currentQuestion] !== undefined) goToNextQuestion()
  })
  useEffect(() => {
    if (!loading && !location.hash) window.scrollTo({top:0, behavior:'instant' as ScrollBehavior})
  }, [quizState.currentQuestion, showResults, loading, storageKey])
  useEffect(() => {
    if (!location.hash || !quiz) return
    const id = decodeURIComponent(location.hash.slice(1))
    const index = quiz.questions.findIndex(q => `question-${q.id}` === id)
    if (!showResults && index >= 0 && index !== quizState.currentQuestion) {
      const next = {...quizState, currentQuestion:index}; setQuizState(next); saveProgress(next)
    }
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({block:'center'}))
  }, [location.hash, quiz, showResults])

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
            {quizState.legacyQuestionCount && quizState.legacyQuestionCount !== quiz.questions.length && <p role="status" className="mt-3 text-sm text-muted-foreground">Your saved score is retained. This quiz now includes {quiz.questions.length} questions; retake it to answer the complete set.</p>}
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
                    {quiz.questions.filter((question, index) => quizState.answers[index] === question.correctAnswer).length}
                  </div>
                  <p className="text-sm text-muted-foreground">Correct</p>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-red-600">
                    {quiz.questions.length - quiz.questions.filter((question, index) => quizState.answers[index] === question.correctAnswer).length}
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
                <Card key={index} id={`question-${question.id}`} className="glass-effect border-border/50 scroll-mt-24">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <Badge variant={isCorrect ? 'default' : 'destructive'} className="mt-1">
                        {index + 1}
                      </Badge>
                      <div className="flex-1">
                        <p className="font-medium">{question.question}</p>
                        <BookmarkButton bookmark={{id:`question:${question.id}`,title:question.question,href:`${location.pathname}${location.search}#${encodeURIComponent(`question-${question.id}`)}`,kind:'question',question}}/>
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
                    {question.explanation && (
                      <div
                        role="note"
                        className={`rounded-md border p-3 sm:p-4 ${
                          isCorrect
                            ? 'border-primary/25 bg-primary/5'
                            : 'border-destructive/50 bg-destructive/10 ring-1 ring-destructive/15'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold">Why: </span>
                          {question.explanation}
                        </p>
                      </div>
                    )}
                    {question.learnMore && (
                      <div className="flex min-w-0 flex-col gap-1 text-sm sm:flex-row sm:items-center sm:gap-2">
                        <span className="shrink-0 font-semibold text-muted-foreground">Learn more:</span>
                        <Link
                          to={question.learnMore.href}
                          className="break-words text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {question.learnMore.label}
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {resultActions}
          {!providedQuiz && (getPractice().missed[storageKey] ?? incorrectIds(quiz.questions, quizState.answers)).length > 0 && <div className="mb-6 flex justify-center"><Button asChild className="h-auto min-h-11 whitespace-normal"><Link to={`/practice/missed?type=${type}&quiz=${encodeURIComponent(quiz.title)}`}>Practice only what I missed</Link></Button></div>}
          <div className="flex flex-wrap gap-4 justify-center">
            {allowRetake && <Button onClick={restartQuiz} variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Retake Quiz
            </Button>}
            <Link 
              to={backHref}
            >
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Quizzes
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Want more scenario practice?{' '}
            <Link
              to="/situation-questions"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Explore Situation Based Questions
            </Link>
          </p>
        </div>
      </div>
    )
  }

  const currentQuestion = quiz.questions[quizState.currentQuestion]
  if (!currentQuestion) return <Button onClick={restartQuiz}>Retake Quiz</Button>
  const progress = ((quizState.currentQuestion + 1) / quiz.questions.length) * 100
  const selectedAnswer = quizState.answers[quizState.currentQuestion]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to={backHref}
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

        <Card id={`question-${currentQuestion.id}`} className="immersive-card mb-8 scroll-mt-24">
          <CardHeader>
            <CardTitle className="text-lg leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
            <BookmarkButton key={currentQuestion.id} bookmark={{id:`question:${currentQuestion.id}`,title:currentQuestion.question,href:`${location.pathname}${location.search}#${encodeURIComponent(`question-${currentQuestion.id}`)}`,kind:'question',question:currentQuestion}}/>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className="w-full justify-start text-left h-auto p-4 whitespace-normal"
                aria-pressed={selectedAnswer === index}
                aria-keyshortcuts={String.fromCharCode(65 + index)}
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