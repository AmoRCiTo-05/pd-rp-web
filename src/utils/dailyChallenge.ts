import type { Question } from "./quizParser";
export function localDay(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function dailyQuestion(pool: Question[], day: string) {
  let hash = 0;
  for (const c of day) hash = (Math.imul(hash, 31) + c.charCodeAt(0)) >>> 0;
  return pool[hash % pool.length];
}
