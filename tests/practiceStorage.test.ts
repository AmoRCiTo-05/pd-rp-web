import { test, expect, beforeEach } from "bun:test";
import {
  readLocal,
  writeLocal,
  recordDay,
  getPractice,
  toggleBookmark,
} from "../src/utils/practiceStorage";
beforeEach(() => {
  const store = new Map<string, string>();
  globalThis.localStorage = {
    getItem: (k) => store.get(k) ?? null,
    setItem: (k, v) => {
      store.set(k, v);
    },
    removeItem: (k) => {
      store.delete(k);
    },
    clear: () => store.clear(),
    key: (i) => [...store.keys()][i] ?? null,
    get length() {
      return store.size;
    },
  };
});
test("progress survives reads", () => {
  writeLocal("progress", { score: 80 });
  expect(readLocal("progress", {})).toEqual({ score: 80 });
});
test("streak counts once per day and resets after gaps", () => {
  recordDay("2026-11-23");
  recordDay("2026-11-23");
  expect(getPractice().streak.count).toBe(1);
  recordDay("2026-11-24");
  expect(getPractice().streak.count).toBe(2);
  recordDay("2026-11-26");
  expect(getPractice().streak.count).toBe(1);
});
test("bookmarks toggle without duplicates", () => {
  const b = { id: "a", title: "A", href: "/amendments", kind: "page" as const };
  toggleBookmark(b);
  expect(getPractice().bookmarks).toHaveLength(1);
  toggleBookmark(b);
  expect(getPractice().bookmarks).toHaveLength(0);
});
test("card learning states persist separately", () => {
  writeLocal("pd_practice_v1", {
    ...getPractice(),
    cards: { "codes:10-4": "know", "codes:10-78": "learning" },
  });
  expect(getPractice().cards["codes:10-4"]).toBe("know");
  expect(getPractice().cards["codes:10-78"]).toBe("learning");
});
