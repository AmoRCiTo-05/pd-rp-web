import legacyOrder from "@/data/legacyQuizOrder.json";
import type { QuizData } from "./quizParser";
export interface QuizState {
  currentQuestion: number;
  answers: Record<number, number>;
  timeStarted: number;
  completed: boolean;
  score?: number;
  questionIds?: string[];
  legacyAnswers?: Record<number, number>;
  legacyQuestionCount?: number;
}
export function freshQuizState(quiz?: QuizData): QuizState {
  return {
    currentQuestion: 0,
    answers: {},
    timeStarted: Date.now(),
    completed: false,
    questionIds: quiz?.questions.map((q) => q.id),
  };
}
export function restoreQuizState(
  saved: QuizState,
  quiz: QuizData,
  key: string,
): QuizState {
  if (!saved || !saved.answers || typeof saved.currentQuestion !== "number")
    return freshQuizState(quiz);
  const old = (legacyOrder as Record<string, string[]>)[key];
  const answers: Record<number, number> = {};
  if (saved.questionIds) {
    saved.questionIds.forEach((id, i) => {
      const index = quiz.questions.findIndex((q) => q.id === id);
      if (index >= 0 && saved.answers[i] !== undefined)
        answers[index] = saved.answers[i];
    });
  } else if (old) {
    old.forEach((text, i) => {
      const index = quiz.questions.findIndex((q) => q.question === text);
      if (index >= 0 && saved.answers[i] !== undefined)
        answers[index] = saved.answers[i];
    });
  } else Object.assign(answers, saved.answers);
  const oldCurrentId = saved.questionIds?.[saved.currentQuestion];
  const oldCurrentText = old?.[saved.currentQuestion];
  const mapped = quiz.questions.findIndex((q) =>
    oldCurrentId ? q.id === oldCurrentId : q.question === oldCurrentText,
  );
  return {
    ...saved,
    answers,
    currentQuestion: Math.max(
      0,
      Math.min(
        quiz.questions.length - 1,
        mapped >= 0 ? mapped : saved.currentQuestion,
      ),
    ),
    questionIds: quiz.questions.map((q) => q.id),
    ...(!saved.questionIds && old
      ? { legacyAnswers: saved.answers, legacyQuestionCount: old.length }
      : {}),
  };
}
