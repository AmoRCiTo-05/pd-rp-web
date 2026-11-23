import { rankQuizzes, categoryQuizzes } from "./quizPools";
import { readLocal, getPractice } from "./practiceStorage";
export interface RoadmapTask {
  title: string;
  href: string;
  storageKey: string;
  guideHref?: string;
}
export const roadmapRanks = [
  "Cadet",
  "Probationary Officer",
  "Officer",
  "Senior Officer",
  "Corporal",
  "Sergeant",
  "Head Sergeant",
  "Lieutenant",
  "Captain",
  "Commander",
  "Deputy Chief",
  "Chief",
];
export function rankTasks(rank: string): RoadmapTask[] {
  const individual = Object.keys(rankQuizzes).find((k) =>
    k.endsWith(` - ${rank}`),
  );
  const category = Object.keys(categoryQuizzes).find((k) =>
    rank === "Cadet" || rank === "Probationary Officer"
      ? k.startsWith("Academy")
      : rank === "Officer" || rank === "Senior Officer"
        ? k.startsWith("Patrol")
        : rank === "Corporal"
          ? k.startsWith("Supervisor")
          : rank === "Sergeant" || rank === "Head Sergeant"
            ? k.startsWith("Command (")
            : rank === "Lieutenant"
              ? k.startsWith("Command Supervisor")
              : k.startsWith("High Command"),
  );
  const topics =
    rank === "Cadet" || rank === "Probationary Officer"
      ? ["/basic-codes/10-codes", "/sop/training"]
      : rank === "Officer" || rank === "Senior Officer"
        ? ["/amendments", "/penal-codes/types"]
        : ["/case-laws", "/sop/training"];
  const tasks: RoadmapTask[] = [];
  if (individual)
    tasks.push({
      title: `${rank} quiz`,
      href: `/rank-based-questions/quiz/individual/${encodeURIComponent(individual)}`,
      storageKey: `quiz_individual_${individual}`,
    });
  if (category)
    tasks.push({
      title: category,
      href: `/rank-based-questions/quiz/category/${encodeURIComponent(category)}`,
      storageKey: `quiz_category_${category}`,
    });
  topics.forEach((href) =>
    tasks.push({
      title:
        href === "/basic-codes/10-codes"
          ? "10-Codes"
          : href === "/sop/training"
            ? "Training SOP"
            : href === "/amendments"
              ? "Amendments"
              : href === "/penal-codes/types"
                ? "Penal Code Types"
                : "Case Laws",
      href: `/practice/quiz-me?page=${encodeURIComponent(href)}`,
      storageKey: `drill_${href}_`,
      guideHref: href,
    }),
  );
  return tasks;
}
export function taskScore(key: string) {
  const saved = readLocal<{ completed?: boolean; score?: number }>(key, {});
  const encoded = key.startsWith("quiz_")
    ? key.replace(
        /^(quiz_(?:individual|category)_)(.*)$/,
        (_, prefix, id) => prefix + encodeURIComponent(id),
      )
    : key;
  const legacy = readLocal<{ completed?: boolean; score?: number }>(
    encoded,
    {},
  );
  return Math.min(
    100,
    Math.max(
      0,
      getPractice().roadmap[key] ?? 0,
      saved.completed ? (saved.score ?? 0) : 0,
      legacy.completed ? (legacy.score ?? 0) : 0,
    ),
  );
}
export function completion(scores: number[]) {
  return scores.length
    ? Math.round(scores.reduce((sum, n) => sum + n, 0) / scores.length)
    : 0;
}
