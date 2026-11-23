import { test, expect } from "bun:test";
import { rankTasks, completion } from "../src/utils/rankRoadmap";
test("Cadet starts the path with actual individual and category quizzes", () => {
  const tasks = rankTasks("Cadet");
  expect(tasks).toHaveLength(4);
  expect(tasks[0].storageKey).toBe(
    "quiz_individual_Academy (Cadet + Probationary Officer) - Cadet",
  );
  expect(tasks[1].storageKey).toBe("quiz_category_Academy (10 Questions)");
});
test("completion derives from saved scores, not clicks", () => {
  expect(completion([80, 100, 0, 0])).toBe(45);
  expect(completion([100, 100, 100, 100])).toBe(100);
});
