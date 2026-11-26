import facts from "@/data/guideFacts.json";
import { tenCodes, shortForms, codeCommunications } from "@/data/referenceLists";
import { searchData } from "@/data/searchData";
import type { Question, QuizData } from "./quizParser";
import type { BankQuestion } from "@/data/quizMe/types";
import { amendmentsBank } from "@/data/quizMe/amendments";
import { caseLawsBank } from "@/data/quizMe/caseLaws";
import { penalTypesBank } from "@/data/quizMe/penalTypes";
import { tenCodeQuestions, shortFormQuestions, codeCommsQuestions, penalQuestions } from "@/data/quizMe/generated";
import { trainingBank, mpuBank, seuBank, asdBank, dispatcherBank } from "@/data/quizMe/sops";

export interface GuideFact { title: string; detail: string; number?: string; classification?: string }
export const guideFacts: Record<string, GuideFact[]> = {
  ...facts,
  "/basic-codes/10-codes": tenCodes.map((c) => ({ title: c.code, detail: c.description })),
  "/short-forms": shortForms.map((c) => ({ title: c.abbreviation, detail: c.meaning })),
  "/basic-codes/code-comms": codeCommunications.map((c) => ({ title: c.code, detail: c.description })),
};
export function sectionId(title: string) {
  return `practice-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}`;
}
/** "1. What is SOP??" -> "What is SOP?" */
export const cleanHeading = (t: string) =>
  t.replace(/^\s*\d+\.\s*/, "").replace(/\?{2,}/g, "?").replace(/\s*->\s*/g, " / ").trim();

const bankBuilders: Record<string, () => BankQuestion[]> = {
  "/amendments": () => amendmentsBank,
  "/case-laws": () => caseLawsBank,
  "/penal-codes/types": () => penalTypesBank,
  "/basic-codes/10-codes": tenCodeQuestions,
  "/short-forms": shortFormQuestions,
  "/basic-codes/code-comms": codeCommsQuestions,
  "/penal-codes/felony": () => penalQuestions("/penal-codes/felony"),
  "/penal-codes/misdemeanor": () => penalQuestions("/penal-codes/misdemeanor"),
  "/penal-codes/infraction": () => penalQuestions("/penal-codes/infraction"),
  "/sop/training": () => trainingBank,
  "/sop/meu": () => mpuBank,
  "/sop/seu": () => seuBank,
  "/sop/asd": () => asdBank,
  "/sop/dispatcher": () => dispatcherBank,
};
const cache: Record<string, BankQuestion[]> = {};
export const drillPages = Object.keys(bankBuilders);
export function getBank(href: string) {
  if (!bankBuilders[href]) return [];
  return (cache[href] ??= bankBuilders[href]());
}

function shuffle<T>(list: T[], rand: () => number) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Returns problems for one question; empty when it is fine. */
export function questionProblems(q: Question) {
  const issues: string[] = [];
  if (q.options.some((o) => o.length > 150)) issues.push("option over 150 characters");
  if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== q.options.length) issues.push("duplicate options");
  if (/according to/i.test(q.question)) issues.push('stem contains "According to"');
  if (!q.options[q.correctAnswer]) issues.push("missing answer");
  return issues;
}

export function createPageDrill(
  href: string,
  query = "",
  avoid: string[] = [],
  rand: () => number = Math.random,
): QuizData | undefined {
  const bank = getBank(href);
  if (!bank.length) return;
  const term = query.trim().toLowerCase();
  const matches = term
    ? bank.filter((b) => `${b.stem} ${b.correct} ${b.section} ${b.explanation}`.toLowerCase().includes(term))
    : bank;
  if (!matches.length) return;
  const title = searchData.find((p) => p.path === href)?.title ?? "Guide";
  const ok = (t: string) => t.length <= 150;
  const usable = matches.filter((b) => ok(b.correct) && b.wrong.filter(ok).length >= 3);
  const fresh = shuffle(usable.filter((b) => !avoid.includes(b.id)), rand);
  const stale = shuffle(usable.filter((b) => avoid.includes(b.id)), rand);
  const used = new Set<string>();
  const questions: Question[] = [];
  const kinds = new Set<string>();
  const take = (b: BankQuestion, allowReuse: boolean) => {
    if (questions.length >= 5 || questions.some((q) => q.id.endsWith(`:${b.id}`))) return;
    const correct = b.correct.toLowerCase();
    if (used.has(correct)) return;
    const candidates = [...new Set(b.wrong.filter(ok))].filter((w) => w.toLowerCase() !== correct);
    const unused = shuffle(candidates.filter((w) => !used.has(w.toLowerCase())), rand);
    if (!allowReuse && unused.length < 3) return;
    const wrong = [...unused, ...shuffle(candidates.filter((w) => used.has(w.toLowerCase())), rand)].slice(0, 3);
    if (wrong.length < 3) return;
    [b.correct, ...wrong].forEach((w) => used.add(w.toLowerCase()));
    kinds.add(b.kind);
    const options = shuffle([b.correct, ...wrong], rand);
    const q: Question = {
      id: `quizme:${href}:${b.id}`,
      question: b.stem,
      options,
      correctAnswer: options.indexOf(b.correct),
      explanation: b.explanation,
      learnMore: b.section
        ? { label: `${title} — ${cleanHeading(b.section)}`, href: `${href}#${sectionId(b.section)}` }
        : { label: title, href },
    };
    if (import.meta.env?.DEV) {
      const issues = questionProblems(q);
      if (issues.length) console.warn(`[Quiz Me] ${b.id}: ${issues.join(", ")}`);
    }
    questions.push(q);
  };
  // Prefer: new style + new question + unused answers, then relax one rule at a time.
  for (const b of fresh) if (!kinds.has(b.kind)) take(b, false);
  for (const b of fresh) take(b, false);
  for (const b of stale) take(b, false);
  for (const b of [...fresh, ...stale]) take(b, true);
  if (!questions.length) return;
  return { title: `${title} · Quiz Me`, questions };
}
