export interface SearchResult {
  id: string
  title: string
  description: string
  path: string
  category: string
  keywords: string[]
}

export const searchData: SearchResult[] = [
  // Home
  {
    id: 'home',
    title: 'Dashboard',
    description: 'Main dashboard and overview',
    path: '/',
    category: 'Main',
    keywords: ['dashboard', 'home', 'overview', 'main']
  },

  // Basic Codes
  {
    id: 'ten-codes',
    title: '10-Codes',
    description: 'Police radio 10-codes and their meanings',
    path: '/basic-codes/10-codes',
    category: 'Basic Codes',
    keywords: ['10-codes', 'radio', 'police', 'communication', 'codes']
  },
  {
    id: 'code-comms',
    title: 'Code Communications',
    description: 'Communication codes and procedures',
    path: '/basic-codes/code-comms',
    category: 'Basic Codes',
    keywords: ['communication', 'codes', 'procedures', 'radio']
  },

  // SOP
  {
    id: 'training',
    title: 'Training SOP',
    description: 'Standard Operating Procedures for training',
    path: '/sop/training',
    category: 'SOP',
    keywords: ['training', 'sop', 'procedures', 'standard']
  },
  {
    id: 'meu',
    title: 'MEU SOP',
    description: 'Major Enforcement Unit Standard Operating Procedures',
    path: '/sop/meu',
    category: 'SOP',
    keywords: ['meu', 'major', 'enforcement', 'unit', 'sop']
  },
  {
    id: 'seu',
    title: 'SEU SOP',
    description: 'Special Enforcement Unit Standard Operating Procedures',
    path: '/sop/seu',
    category: 'SOP',
    keywords: ['seu', 'special', 'enforcement', 'unit', 'sop']
  },
  {
    id: 'asd',
    title: 'ASD SOP',
    description: 'Air Support Division Standard Operating Procedures',
    path: '/sop/asd',
    category: 'SOP',
    keywords: ['asd', 'air', 'support', 'division', 'sop']
  },
  {
    id: 'dispatcher',
    title: 'Dispatcher SOP',
    description: 'Dispatcher Standard Operating Procedures',
    path: '/sop/dispatcher',
    category: 'SOP',
    keywords: ['dispatcher', 'sop', 'communication', 'procedures']
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

export function searchPages(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) {
    return []
  }

  const searchTerm = query.toLowerCase().trim()
  
  return searchData.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(searchTerm)
    const descriptionMatch = item.description.toLowerCase().includes(searchTerm)
    const categoryMatch = item.category.toLowerCase().includes(searchTerm)
    const keywordMatch = item.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm)
    )
    
    return titleMatch || descriptionMatch || categoryMatch || keywordMatch
  }).slice(0, 8) // Limit to 8 results
}
