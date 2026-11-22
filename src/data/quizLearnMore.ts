import type { Question } from '@/utils/quizParser'

interface LearningNote {
  explanation: string
  learnMore: {
    label: string
    href: string
  }
}

interface LearningRule extends LearningNote {
  matches: RegExp
}

// Keep specific question topics ahead of broader matches.
const learningRules: LearningRule[] = [
  {
    matches: /handcuff(?:ed|ing)?[^?]*(?:miranda|rights)|(?:miranda|rights)[^?]*handcuff/i,
    explanation: 'After a person is in custody, read Miranda rights before custodial questioning; handcuffing alone is not what triggers the warning.',
    learnMore: { label: 'Review the 5th and 6th Amendments', href: '/amendments' }
  },
  {
    matches: /self-incrimination|5th amendment|fifth amendment/i,
    explanation: 'The 5th Amendment protects a person from being compelled to incriminate themselves.',
    learnMore: { label: 'Review the 5th Amendment', href: '/amendments' }
  },
  {
    matches: /right to (?:an? )?attorney|6th amendment|sixth amendment|lawyer during questioning/i,
    explanation: 'The 6th Amendment protects the right to legal representation in criminal cases.',
    learnMore: { label: 'Review the 6th Amendment', href: '/amendments' }
  },
  {
    matches: /miranda|custodial interrogation|read (?:the )?rights/i,
    explanation: 'Miranda warnings protect the right to remain silent and to counsel during custodial interrogation.',
    learnMore: { label: 'Review Miranda v. Arizona', href: '/case-laws' }
  },
  {
    matches: /4th amendment|fourth amendment|unreasonable search|search(?:ing)? .*without (?:a )?warrant/i,
    explanation: 'The 4th Amendment protects against unreasonable searches and seizures; warrants and recognized exceptions guide when a search is allowed.',
    learnMore: { label: 'Review the 4th Amendment', href: '/amendments' }
  },
  {
    matches: /terry v\.?\s*ohio|stop-and-frisk|frisk|reasonable suspicion/i,
    explanation: 'Reasonable suspicion can justify a brief stop and, when there is reason to suspect a person is armed, a limited weapons frisk—not a full search.',
    learnMore: { label: 'Review Terry v. Ohio', href: '/case-laws' }
  },
  {
    matches: /tennessee v\.?\s*garner|deadly force|lethal force|shoot(?:ing)? .*flee|poses? (?:a )?serious threat/i,
    explanation: 'Deadly force is limited to situations involving a serious, immediate threat; fleeing by itself is not enough.',
    learnMore: { label: 'Review use-of-force case law', href: '/case-laws' }
  },
  {
    matches: /pennsylvania v\.?\s*mimms|wyoming v\.?\s*houghton|carroll v\.?|miranda v\.?|people v\.?|case law|precedent/i,
    explanation: 'Case-law guides connect operational decisions to the legal precedent that governs them.',
    learnMore: { label: 'Review Case Laws', href: '/case-laws' }
  },
  {
    matches: /probable cause|plain view doctrine|warrantless|search warrant|arrest warrant|search .*vehicle|vehicle .*search/i,
    explanation: 'Probable cause is a stronger, fact-based threshold than reasonable suspicion and may support an arrest or search under the applicable procedure.',
    learnMore: { label: 'Review Case Laws', href: '/case-laws' }
  },
  {
    matches: /bolo|be on the lookout/i,
    explanation: 'A BOLO shares information about a person or vehicle to watch for; by itself, it is not a warrant or automatic authority to arrest.',
    learnMore: { label: 'Review 10-Codes', href: '/basic-codes/10-codes' }
  },
  {
    matches: /10[- ]codes?|radio code/i,
    explanation: '10-codes are radio shorthand that help officers communicate status and incidents clearly and quickly.',
    learnMore: { label: 'Review 10-Codes', href: '/basic-codes/10-codes' }
  },
  {
    matches: /mdt|report(?:ing)? via|report writing|fir|chargesheet/i,
    explanation: 'Clear, timely reporting supports accountability and preserves an organized record of the incident and evidence.',
    learnMore: { label: 'Review Code Communications', href: '/basic-codes/code-comms' }
  },
  {
    matches: /misdemeanor.{0,50}felony|felony.{0,50}misdemeanor|criminal classification|types? of crimes/i,
    explanation: 'The site classifies offenses by severity: misdemeanors are lesser offenses, while felonies are more serious offenses.',
    learnMore: { label: 'Review Penal Code Types', href: '/penal-codes/types' }
  },
  {
    matches: /verbal(?:ly)? insult|insult(?:ing)?|mocking|free speech|de-escalat/i,
    explanation: 'Stay professional and use calm communication; insults alone do not justify escalating force or retaliation.',
    learnMore: { label: 'Review Confusing Topics', href: '/confusing-topics' }
  },
  {
    matches: /first level of force|officer presence|levels? of force|match of force|taser|force continuum|use of force/i,
    explanation: 'Use the least forceful effective response first and increase force only when the situation requires it, keeping the response proportional to the threat.',
    learnMore: { label: 'Review Training SOP', href: '/sop/training' }
  },
  {
    matches: /detain(?:ing|ment)?|arrest(?:ing)?|reasonable suspicion.{0,60}probable cause/i,
    explanation: 'Detention is a temporary investigative stop supported by reasonable suspicion; an arrest requires the stronger basis of probable cause.',
    learnMore: { label: 'Review Confusing Topics', href: '/confusing-topics' }
  },
  {
    matches: /evidence|bonafide|bona fide|non-bonafide|admissib/i,
    explanation: 'Evidence should be reliable, properly documented, and obtained according to procedure so it can be evaluated fairly.',
    learnMore: { label: 'Review Evidence Guidance', href: '/confusing-topics' }
  },
  {
    matches: /chain of command|unrelated personal order|misconduct|ethics|code of conduct|uniform|disciplin|suspension|watch commander/i,
    explanation: 'Follow lawful, duty-related procedures, keep conduct professional, and report misconduct through the proper chain.',
    learnMore: { label: 'Review Training SOP', href: '/sop/training' }
  },
  {
    matches: /pursuit|pit protocol|pit speed|vehicle chase|spikes/i,
    explanation: 'Pursuit tactics must follow the applicable speed, authorization, and public-safety limits; reassess risk as conditions change.',
    learnMore: { label: 'Review Training SOP', href: '/sop/training' }
  },
  {
    matches: /hostage|negotiat|active shooter|gang war|crisis|robbery and/i,
    explanation: 'Coordinate roles and resources, prioritize immediate safety, and keep communication clear during critical incidents.',
    learnMore: { label: 'Review Training SOP', href: '/sop/training' }
  },
  {
    matches: /10-\d+|dispatch|backup|radio|communication code|code 50/i,
    explanation: 'Use clear radio communication to share status, location, and requests so responding units can coordinate effectively.',
    learnMore: { label: 'Review Code Communications', href: '/basic-codes/code-comms' }
  },
  {
    matches: /perjury|money laundering|graft|insurrection|embezzlement|mayhem|poaching|extortion|forgery/i,
    explanation: 'Precise legal terminology helps distinguish the conduct involved and the correct offense classification.',
    learnMore: { label: 'Review Advanced Terms', href: '/advanced-sop/terms' }
  },
  {
    matches: /reasonable suspicion|probable cause|warrant|search|arrest|crime|officer|suspect|patrol|cadet|unit|jurisdiction|medical attention|ems|life safety/i,
    explanation: 'Apply the relevant training procedure, document the facts, and prioritize safety and lawful decision-making.',
    learnMore: { label: 'Review Training SOP', href: '/sop/training' }
  }
]

export function attachLearningToQuestion(question: Question): Question {
  const matchingRule = learningRules.find((rule) => rule.matches.test(question.question))

  if (!matchingRule) return question

  return {
    ...question,
    explanation: question.explanation ?? matchingRule.explanation,
    learnMore: question.learnMore ?? matchingRule.learnMore
  }
}