import { tenCodes, shortForms } from './referenceLists'
import guideFacts from './guideFacts.json'

export interface SearchResult {
  id: string
  title: string
  description: string
  path: string
  category: string
  keywords: string[]
}

export const searchData: SearchResult[] = [
  { id:'practice',title:'Practice',description:'Practice tools and saved study activities',path:'/practice',category:'Practice',keywords:['flashcards','quiz','daily','scenarios','radio','charges','roadmap','study'] },
  // Home
  {
    id: 'home',
    title: 'Dashboard',
    description: 'Main dashboard and overview',
    path: '/',
    category: 'Main',
    keywords: ['dashboard', 'home', 'overview', 'main']
  },

  // Code Directory (formerly Basic Codes)
  {
    id: 'ten-codes',
    title: '10-Codes',
    description: 'Police radio 10-codes and their meanings',
    path: '/basic-codes/10-codes',
    category: 'Code Directory',
    keywords: ['10-codes', 'radio', 'police', 'communication', 'codes']
  },
  {
    id: 'code-comms',
    title: 'Code Communications',
    description: 'Communication codes and procedures',
    path: '/basic-codes/code-comms',
    category: 'Code Directory',
    keywords: ['communication', 'codes', 'procedures', 'radio']
  },
  {
    id: 'priority-sequence',
    title: 'Priority Sequence',
    description: 'Priority call sequence for law enforcement response',
    path: '/basic-codes/priority-sequence',
    category: 'Code Directory',
    keywords: ['priority', 'sequence', 'calls', 'emergency', 'response', 'backup']
  },

  // S.O.P (formerly SOP)
  {
    id: 'training',
    title: 'Training SOP',
    description: 'Standard Operating Procedures for training',
    path: '/sop/training',
    category: 'S.O.P',
    keywords: ['training', 'sop', 'procedures', 'standard']
  },
  {
    id: 'meu',
    title: 'MPU SOP',
    description: 'Motor Pursuit Unit Standard Operating Procedures',
    path: '/sop/meu',
    category: 'S.O.P',
    keywords: ['mpu', 'motor', 'pursuit', 'motorcycle', 'unit', 'sop']
  },
  {
    id: 'seu',
    title: 'SEU SOP',
    description: 'Special Enforcement Unit Standard Operating Procedures',
    path: '/sop/seu',
    category: 'S.O.P',
    keywords: ['seu', 'special', 'enforcement', 'unit', 'sop']
  },
  {
    id: 'asd',
    title: 'ASD SOP',
    description: 'Air Support Division Standard Operating Procedures',
    path: '/sop/asd',
    category: 'S.O.P',
    keywords: ['asd', 'air', 'support', 'division', 'sop']
  },
  {
    id: 'dispatcher',
    title: 'Dispatcher SOP',
    description: 'Dispatcher Standard Operating Procedures',
    path: '/sop/dispatcher',
    category: 'S.O.P',
    keywords: ['dispatcher', 'sop', 'communication', 'procedures']
  },

  // FTD
  {
    id: 'field-training',
    title: 'Field Training Division',
    description: 'Comprehensive training program for cadets and officers',
    path: '/ftd/field-training',
    category: 'FTD',
    keywords: ['ftd', 'field', 'training', 'division', 'cadet', 'officer', 'program', 'phases']
  },
  {
    id: 'evaluation-test',
    title: 'FTD Evaluation Test',
    description: 'Test your knowledge with comprehensive FTD questions and explanations',
    path: '/ftd/evaluation-test',
    category: 'FTD',
    keywords: ['ftd', 'evaluation', 'test', 'questions', 'exam', 'quiz', 'assessment', 'multiple choice']
  },

  // Advanced SOP
  {
    id: 'advanced-terms',
    title: 'Advanced Terms',
    description: 'Advanced law enforcement terminology',
    path: '/advanced-sop/terms',
    category: 'Advanced SOP',
    keywords: ['advanced', 'terms', 'terminology', 'law', 'enforcement']
  },

  // Penal Codes
  {
    id: 'penal-types',
    title: 'Penal Code Types',
    description: 'Types of penal codes and classifications',
    path: '/penal-codes/types',
    category: 'Penal Codes',
    keywords: ['penal', 'codes', 'types', 'classifications', 'law']
  },
  {
    id: 'felony',
    title: 'Felony Codes',
    description: 'Felony penal codes and penalties',
    path: '/penal-codes/felony',
    category: 'Penal Codes',
    keywords: ['felony', 'penal', 'codes', 'serious', 'crimes']
  },
  {
    id: 'misdemeanor',
    title: 'Misdemeanor Codes',
    description: 'Misdemeanor penal codes and penalties',
    path: '/penal-codes/misdemeanor',
    category: 'Penal Codes',
    keywords: ['misdemeanor', 'penal', 'codes', 'minor', 'crimes']
  },
  {
    id: 'infraction',
    title: 'Infraction Codes',
    description: 'Infraction penal codes and penalties',
    path: '/penal-codes/infraction',
    category: 'Penal Codes',
    keywords: ['infraction', 'penal', 'codes', 'violations', 'tickets']
  },

  // Now separate main sections
  {
    id: 'situation-questions',
    title: 'Situation Based Questions',
    description: 'A situation based questions bank for interviews',
    path: '/situation-questions',
    category: 'Interview Prep',
    keywords: ['situation', 'questions', 'interview', 'scenarios', 'bank', 'use of force', 'evidence', 'pursuit', 'arrest']
  },
  {
    id: 'confusing-topics',
    title: 'Confusing Topics',
    description: 'Confusing topics in SOP with detailed explanations',
    path: '/confusing-topics',
    category: 'Reference',
    keywords: ['confusing', 'topics', 'sop', 'pursuit', 'detainment', 'force', 'miranda', 'evidence', 'warrant', 'suspicion']
  },

  // PD Directory
  {
    id: 'sample-calls',
    title: 'Sample Calls',
    description: 'Sample Calls on a PD Radio while using PD 10-Codes',
    path: '/pd/sample-calls',
    category: 'PD Directory',
    keywords: ['sample', 'calls', 'radio', '10-codes', 'callout', 'formats', 'communication', 'police']
  },
  {
    id: 'in-game-commands',
    title: 'In-Game PD Commands',
    description: 'Essential in-game police department commands and functions',
    path: '/pd/in-game-commands',
    category: 'PD Directory',
    keywords: ['commands', 'in-game', 'police', 'jail', 'fine', 'impound', 'mdt', 'callsign', 'radar']
  },

  // Other pages
  {
    id: 'short-forms',
    title: 'Short Forms',
    description: 'Common law enforcement abbreviations and short forms',
    path: '/short-forms',
    category: 'Reference',
    keywords: ['short', 'forms', 'abbreviations', 'acronyms']
  },
  {
    id: 'case-laws',
    title: 'Case Laws',
    description: 'Important case law references',
    path: '/case-laws',
    category: 'Legal',
    keywords: ['case', 'laws', 'legal', 'precedent', 'court']
  },
  {
    id: 'amendments',
    title: 'Amendments',
    description: 'Constitutional amendments relevant to law enforcement',
    path: '/amendments',
    category: 'Legal',
    keywords: ['amendments', 'constitution', 'rights', 'legal']
  },
  {
    id: 'about',
    title: 'About',
    description: 'About this application and its features',
    path: '/about',
    category: 'Info',
    keywords: ['about', 'information', 'help', 'application']
  }
]

const extraPages: Array<[string, string, string]> = [
  ['Patrol Areas', '/basic-codes/patrol-areas', 'PD Directory'],
  ['Rank Based Questions', '/rank-based-questions', 'FTD'],
  ['Individual Ranks', '/rank-based-questions/individual-ranks', 'FTD'],
  ['Category Ranks', '/rank-based-questions/category-ranks', 'FTD'],
  ['Flashcards', '/practice/flashcards', 'Practice'],
  ['Quiz Me', '/practice/quiz-me', 'Practice'],
  ['Daily Challenge', '/practice/daily', 'Practice'],
  ['Scenario Simulator', '/practice/scenarios', 'Practice'],
  ['Radio Call Builder', '/practice/radio', 'Practice'],
  ['Charge Picker', '/practice/charges', 'Practice'],
  ['Rank Roadmap', '/practice/roadmap', 'Practice'],
  ['Study List', '/practice/study-list', 'Practice'],
  ['Review Missed Questions', '/practice/missed', 'Practice'],
]
searchData.push(...extraPages.map(([title, path, category]) => ({
  id: path, title, path, category, description: `${title} — PD RP Guide`, keywords: title.toLowerCase().split(/\s+/),
})))

let contentIndex: SearchResult[] | undefined
function getContentIndex() {
  if (contentIndex) return contentIndex
  const entry = (title: string, description: string, path: string, category: string): SearchResult => ({
    id: `content:${path}:${title}`, title, description, path: `${path}?q=${encodeURIComponent(title)}`, category,
    keywords: [title, description],
  })
  contentIndex = [
    ...tenCodes.map(c => entry(c.code, c.description, '/basic-codes/10-codes', '10-Codes')),
    ...shortForms.map(c => entry(c.abbreviation, c.meaning, '/short-forms', 'Short Forms')),
    ...(['/penal-codes/felony', '/penal-codes/misdemeanor', '/penal-codes/infraction'] as const)
      .flatMap(path => guideFacts[path].map(c => entry(c.title, c.detail, path, 'Penal Codes'))),
  ]
  return contentIndex
}

export function searchPages(query: string, limit = 8): SearchResult[] {
  const term = query.toLowerCase().trim()
  if (!term) return []
  const words = term.split(/\s+/)
  return [...searchData, ...getContentIndex()].map(item => {
    const title = item.title.toLowerCase()
    const keywords = item.keywords.join(' ').toLowerCase()
    const category = item.category.toLowerCase()
    const description = item.description.toLowerCase()
    if (!words.every(word => [title, keywords, category, description].some(field => field.includes(word)))) return { item, score: 0 }
    const titleWords = title.split(/[^a-z0-9-]+/)
    const score = (title === term ? 1000 : title.startsWith(term) ? 700 : 0)
      + words.reduce((sum, word) => sum + (titleWords.includes(word) ? 100 : title.includes(word) ? 80 : keywords.includes(word) ? 40 : category.includes(word) ? 20 : description.includes(word) ? 10 : 0), 0)
      + (item.id.startsWith('content:') ? 0 : 5)
    return { item, score }
  }).filter(result => result.score > 0).sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, Math.max(0, limit)).map(result => result.item)
}
