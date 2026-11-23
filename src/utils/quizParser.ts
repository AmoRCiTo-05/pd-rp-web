export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  learnMore?: {
    label: string;
    href: string;
  };
}

export interface QuizData {
  title: string;
  questions: Question[];
}

// Flush a pending question before switching sections: otherwise Q10 was carried
// into the next category and Academy was left with only nine questions.
function parseRanks(
  data: string,
  individual: boolean,
): Record<string, QuizData> {
  const sections: Record<string, QuizData> = {};
  const lines = data.split("\n");
  let section = "";
  let rank = "";
  let questions: Question[] = [];
  let current: Question | undefined;
  let counter = 0;
  const flushQuestion = () => {
    if (current?.question && current.options.length) questions.push(current);
    current = undefined;
  };
  const flushSection = () => {
    flushQuestion();
    const title = individual ? `${section} - ${rank}` : section;
    if (section && (!individual || rank) && questions.length)
      sections[title] = { title, questions: [...questions] };
    questions = [];
    counter = 0;
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const next = lines[i + 1]?.trim();
    if (
      /^={3,}$/.test(line) &&
      next &&
      !/^={3,}$/.test(next) &&
      !/^Q\d+[.)]/.test(next) &&
      !next.startsWith("---")
    ) {
      flushSection();
      section = next;
      rank = "";
      i++;
      continue;
    }
    const rankHeader = line.match(/^---\s+(.+?)\s+---$/);
    if (individual && rankHeader) {
      flushSection();
      rank = rankHeader[1];
      continue;
    }
    const questionLine = line.match(/^Q\d+[.)]\s*(.+)$/);
    if (questionLine) {
      flushQuestion();
      counter++;
      current = {
        id: individual
          ? `${section}-${rank}-${counter}`
          : `${section}-${counter}`,
        question: questionLine[1],
        options: [],
        correctAnswer: 0,
      };
      continue;
    }
    if (/^[A-D]\)/.test(line) && current) {
      const isCorrect = line.includes("✅");
      current.options.push(
        line
          .replace(/^[A-D]\)\s*/, "")
          .replace(/\s*✅/g, "")
          .trim(),
      );
      if (isCorrect) current.correctAnswer = current.options.length - 1;
    }
  }
  flushSection();
  return sections;
}
export function parseIndividualRanks(data: string): Record<string, QuizData> {
  return parseRanks(data, true);
}
export function parseCategoryRanks(data: string): Record<string, QuizData> {
  return parseRanks(data, false);
}
