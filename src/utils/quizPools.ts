import rankText from "@/data/rankBasedMCQs.txt?raw";
import categoryText from "@/data/categoryBasedMCQs.txt?raw";
import { parseIndividualRanks, parseCategoryRanks } from "./quizParser";
import { attachLearningToQuestion } from "@/data/quizLearnMore";
export const rankQuizzes = parseIndividualRanks(rankText);
export const categoryQuizzes = parseCategoryRanks(categoryText);
export const mcqPool = [
  ...Object.values(rankQuizzes),
  ...Object.values(categoryQuizzes),
].flatMap((q) => q.questions.map(attachLearningToQuestion));
export function incorrectIds(
  questions: { id: string; correctAnswer: number }[],
  answers: Record<number, number>,
) {
  return questions
    .filter((q, i) => answers[i] !== q.correctAnswer)
    .map((q) => q.id);
}
