import facts from "@/data/guideFacts.json";
import {
  tenCodes,
  shortForms,
  codeCommunications,
} from "@/data/referenceLists";
import { searchData } from "@/data/searchData";
import { attachLearningToQuestion } from "@/data/quizLearnMore";
import type { Question, QuizData } from "./quizParser";
export interface GuideFact {
  title: string;
  detail: string;
  number?: string;
  classification?: string;
}
export const guideFacts: Record<string, GuideFact[]> = {
  ...facts,
  "/basic-codes/10-codes": tenCodes.map((c) => ({
    title: c.code,
    detail: c.description,
  })),
  "/short-forms": shortForms.map((c) => ({
    title: c.abbreviation,
    detail: c.meaning,
  })),
  "/basic-codes/code-comms": codeCommunications.map((c) => ({
    title: c.code,
    detail: c.description,
  })),
};
export function sectionId(title: string) {
  return `practice-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-$/, "")}`;
}
export function createPageDrill(
  href: string,
  query = "",
): QuizData | undefined {
  const all = guideFacts[href];
  if (!all?.length) return;
  const term = query.trim().toLowerCase();
  const selected = term
    ? all.filter((f) => `${f.title} ${f.detail}`.toLowerCase().includes(term))
    : all;
  const title = searchData.find((p) => p.path === href)?.title ?? "Guide";
  if (!selected.length) return;
  const questions: Question[] = [];
  for (const [i, fact] of selected.slice(0, 5).entries()) {
    const distractors = all
      .filter((f) => f.title !== fact.title && f.detail !== fact.detail)
      .map((f) => f.detail);
    const correct = fact.detail;
    const options = [correct, ...new Set(distractors)].slice(0, 4);
    if (options.length < 4)
      options.push(
        ...[
          "This classification is determined by radio priority.",
          "This classification applies only to an officer’s rank.",
          "This classification refers to a patrol location.",
        ].slice(0, 4 - options.length),
      );
    const correctAnswer = i % 4;
    options.splice(0, 1);
    options.splice(correctAnswer, 0, correct);
    questions.push(
      attachLearningToQuestion({
        id: `page:${href}:${sectionId(fact.title)}`,
        question: `According to ${title}, which statement describes ${fact.number ? `${fact.number} Amendment — ` : ""}${fact.title}?`,
        options,
        correctAnswer,
        explanation: fact.detail,
        learnMore: {
          label: `${title} — ${fact.title}`,
          href: `${href}#${sectionId(fact.title)}`,
        },
      }),
    );
  }
  // Small pages have three classifications; test the reverse mapping for two more unique facts.
  if (!term && selected.length === 3)
    for (const [i, fact] of selected.slice(0, 2).entries())
      questions.push(
        attachLearningToQuestion({
          id: `page:${href}:reverse:${i}`,
          question: `Which penal code type is described by: ${fact.detail}?`,
          options: [...selected.map((f) => f.title), "None of these"],
          correctAnswer: i,
          explanation: fact.detail,
          learnMore: {
            label: fact.title,
            href: `${href}#${sectionId(fact.title)}`,
          },
        }),
      );
  return { title: `${title} · Quiz Me`, questions };
}
