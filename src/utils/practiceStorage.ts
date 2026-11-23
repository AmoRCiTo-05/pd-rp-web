import type { Question } from "./quizParser";
export function readLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
export function writeLocal<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
export function removeLocal(key: string) {
  try {
    localStorage.removeItem(key);
  } catch {
    /* Storage unavailable. */
  }
}
export interface Bookmark {
  id: string;
  title: string;
  href: string;
  kind: "page" | "question";
  question?: Question;
}
export interface PracticeData {
  cards: Record<string, "know" | "learning">;
  bookmarks: Bookmark[];
  streak: { lastDay: string; count: number };
  roadmap: Record<string, number>;
  missed: Record<string, string[]>;
}
const empty: PracticeData = {
  cards: {},
  bookmarks: [],
  streak: { lastDay: "", count: 0 },
  roadmap: {},
  missed: {},
};
export function getPractice() {
  return { ...empty, ...readLocal<PracticeData>("pd_practice_v1", empty) };
}
export function updatePractice(change: (data: PracticeData) => PracticeData) {
  const next = change(getPractice());
  writeLocal("pd_practice_v1", next);
  return next;
}
export function recordDay(day: string) {
  return updatePractice((data) => {
    if (data.streak.lastDay === day) return data;
    const yesterday = new Date(`${day}T12:00:00Z`);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);
    return {
      ...data,
      streak: {
        lastDay: day,
        count:
          data.streak.lastDay === yesterday.toISOString().slice(0, 10)
            ? data.streak.count + 1
            : 1,
      },
    };
  });
}
export function toggleBookmark(bookmark: Bookmark) {
  return updatePractice((data) => ({
    ...data,
    bookmarks: data.bookmarks.some((b) => b.id === bookmark.id)
      ? data.bookmarks.filter((b) => b.id !== bookmark.id)
      : [...data.bookmarks, bookmark],
  }));
}
