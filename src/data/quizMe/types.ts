export type QuestionKind =
  | "scenario"
  | "not"
  | "classify"
  | "define"
  | "meaning"
  | "code"
  | "category"
  | "pair"
  | "pairNot"
  | "describe"
  | "report";

/** One hand-written or data-built Quiz Me question. */
export interface BankQuestion {
  id: string;
  kind: QuestionKind;
  stem: string;
  correct: string;
  /** At least three believable wrong answers from the same topic; three are picked per drill. */
  wrong: string[];
  explanation: string;
  /** Exact guide section title used for the Learn more anchor. */
  section: string;
}

export interface QuizMeBank {
  href: string;
  title: string;
  questions: BankQuestion[];
}
