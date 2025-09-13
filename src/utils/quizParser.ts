export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

export interface QuizData {
  title: string
  questions: Question[]
}

export function parseIndividualRanks(data: string): Record<string, QuizData> {
  const sections: Record<string, QuizData> = {}
  const lines = data.split('\n')
  
  let currentSection = ''
  let currentSubSection = ''
  let questions: Question[] = []
  let currentQuestion: Partial<Question> = {}
  let questionCounter = 0
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Section headers like "Academy (Cadet + Probationary Officer)"
    if (line.includes('=====') && lines[i + 1]?.trim() && !lines[i + 1].includes('=====')) {
      if (currentSubSection && questions.length > 0) {
        sections[`${currentSection} - ${currentSubSection}`] = {
          title: `${currentSection} - ${currentSubSection}`,
          questions: [...questions]
        }
      }
      currentSection = lines[i + 1].trim()
      questions = []
      questionCounter = 0
      continue
    }
    
    // Sub-section headers like "--- Cadet ---"
    if (line.startsWith('--- ') && line.endsWith(' ---')) {
      if (currentSubSection && questions.length > 0) {
        sections[`${currentSection} - ${currentSubSection}`] = {
          title: `${currentSection} - ${currentSubSection}`,
          questions: [...questions]
        }
      }
      currentSubSection = line.replace(/---\s*/, '').replace(/\s*---/, '')
      questions = []
      questionCounter = 0
      continue
    }
    
    // Question line
    if (line.match(/^Q\d+\./)) {
      if (currentQuestion.question && currentQuestion.options) {
        questions.push({
          id: `${currentSection}-${currentSubSection}-${questionCounter}`,
          question: currentQuestion.question,
          options: currentQuestion.options,
          correctAnswer: currentQuestion.correctAnswer || 0
        })
      }
      
      questionCounter++
      currentQuestion = {
        question: line.replace(/^Q\d+\.\s*/, ''),
        options: [],
        correctAnswer: 0
      }
    }
    
    // Answer options
    if (line.match(/^[A-D]\)/)) {
      const isCorrect = line.includes('✅')
      const option = line.replace(/^[A-D]\)\s*/, '').replace(/\s*✅/, '')
      
      currentQuestion.options = currentQuestion.options || []
      currentQuestion.options.push(option)
      
      if (isCorrect) {
        currentQuestion.correctAnswer = currentQuestion.options.length - 1
      }
    }
  }
  
  // Add the last question and section
  if (currentQuestion.question && currentQuestion.options) {
    questions.push({
      id: `${currentSection}-${currentSubSection}-${questionCounter}`,
      question: currentQuestion.question,
      options: currentQuestion.options,
      correctAnswer: currentQuestion.correctAnswer || 0
    })
  }
  
  if (currentSubSection && questions.length > 0) {
    sections[`${currentSection} - ${currentSubSection}`] = {
      title: `${currentSection} - ${currentSubSection}`,
      questions: [...questions]
    }
  }
  
  return sections
}

export function parseCategoryRanks(data: string): Record<string, QuizData> {
  const sections: Record<string, QuizData> = {}
  const lines = data.split('\n')
  
  let currentSection = ''
  let questions: Question[] = []
  let currentQuestion: Partial<Question> = {}
  let questionCounter = 0
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Section headers like "Academy (10 Questions)"
    if (line.includes('=====') && lines[i + 1]?.trim() && !lines[i + 1].includes('=====')) {
      if (currentSection && questions.length > 0) {
        sections[currentSection] = {
          title: currentSection,
          questions: [...questions]
        }
      }
      currentSection = lines[i + 1].trim()
      questions = []
      questionCounter = 0
      continue
    }
    
    // Question line
    if (line.match(/^Q\d+\./)) {
      if (currentQuestion.question && currentQuestion.options) {
        questions.push({
          id: `${currentSection}-${questionCounter}`,
          question: currentQuestion.question,
          options: currentQuestion.options,
          correctAnswer: currentQuestion.correctAnswer || 0
        })
      }
      
      questionCounter++
      currentQuestion = {
        question: line.replace(/^Q\d+\.\s*/, ''),
        options: [],
        correctAnswer: 0
      }
    }
    
    // Answer options
    if (line.match(/^[A-D]\)/)) {
      const isCorrect = line.includes('✅')
      const option = line.replace(/^[A-D]\)\s*/, '').replace(/\s*✅/, '')
      
      currentQuestion.options = currentQuestion.options || []
      currentQuestion.options.push(option)
      
      if (isCorrect) {
        currentQuestion.correctAnswer = currentQuestion.options.length - 1
      }
    }
  }
  
  // Add the last question and section
  if (currentQuestion.question && currentQuestion.options) {
    questions.push({
      id: `${currentSection}-${questionCounter}`,
      question: currentQuestion.question,
      options: currentQuestion.options,
      correctAnswer: currentQuestion.correctAnswer || 0
    })
  }
  
  if (currentSection && questions.length > 0) {
    sections[currentSection] = {
      title: currentSection,
      questions: [...questions]
    }
  }
  
  return sections
}