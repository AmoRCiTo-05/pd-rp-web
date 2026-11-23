import { test, expect } from "bun:test";
import { dailyQuestion } from "../src/utils/dailyChallenge";
const pool = Array.from({ length: 130 }, (_, i) => ({
  id: String(i),
  question: "Q",
  options: ["A", "B"],
  correctAnswer: 0,
}));
test("same day always gets the same existing question", () => {
  expect(dailyQuestion(pool, "2026-11-23")).toBe(
    dailyQuestion(pool, "2026-11-23"),
  );
  expect(pool.includes(dailyQuestion(pool, "2026-11-23"))).toBe(true);
});
test("consecutive days rotate the question", () => {
  expect(dailyQuestion(pool, "2026-11-23").id).not.toBe(
    dailyQuestion(pool, "2026-11-24").id,
  );
});
