import { test, expect } from "bun:test";
import { readFileSync } from "node:fs";
import {
  parseCategoryRanks,
  parseIndividualRanks,
} from "../src/utils/quizParser";
import { restoreQuizState } from "../src/utils/quizProgress";
const category = parseCategoryRanks(
  readFileSync("src/data/categoryBasedMCQs.txt", "utf8"),
);
const individual = parseIndividualRanks(
  readFileSync("src/data/rankBasedMCQs.txt", "utf8"),
);
test("Academy has all ten source questions including MDT Q10", () => {
  const q = category["Academy (10 Questions)"].questions;
  expect(q).toHaveLength(10);
  expect(q[9].question).toBe("Why is reporting via MDT essential?");
  expect(q[9].correctAnswer).toBe(2);
});
test("boundaries never carry questions into the next quiz", () => {
  expect(category["Patrol (10 Questions)"].questions[0].question).toBe(
    "When must Miranda Rights be read?",
  );
  for (const q of Object.values(category))
    expect(q.questions).toHaveLength(
      q.title.startsWith("High Command") ? 20 : 10,
    );
  for (const q of Object.values(individual))
    expect(q.questions).toHaveLength(5);
});
test("old Academy score and nine answers remain intact after repair", () => {
  const answers = Object.fromEntries(
    Array.from({ length: 9 }, (_, i) => [i, i % 4]),
  );
  const saved = {
    currentQuestion: 8,
    answers,
    timeStarted: 123,
    completed: true,
    score: 89,
  };
  const restored = restoreQuizState(
    saved,
    category["Academy (10 Questions)"],
    "quiz_category_Academy (10 Questions)",
  );
  expect(restored.score).toBe(89);
  expect(restored.completed).toBe(true);
  expect(restored.answers).toEqual(answers);
  expect(restored.legacyAnswers).toEqual(answers);
  expect(restored.questionIds).toHaveLength(10);
  expect(restored.answers[9]).toBeUndefined();
});
test("old Patrol answers follow question text, not leaked Academy Q10", () => {
  const restored = restoreQuizState(
    {
      currentQuestion: 1,
      answers: { 0: 2, 1: 0 },
      timeStarted: 123,
      completed: false,
    },
    category["Patrol (10 Questions)"],
    "quiz_category_Patrol (10 Questions)",
  );
  expect(restored.answers).toEqual({ 0: 0 });
  expect(restored.legacyAnswers).toEqual({ 0: 2, 1: 0 });
  expect(restored.currentQuestion).toBe(0);
});
test("parser remains backward-compatible without learning fields", () => {
  expect(
    category["Academy (10 Questions)"].questions[0].explanation,
  ).toBeUndefined();
  expect(
    category["Academy (10 Questions)"].questions[0].learnMore,
  ).toBeUndefined();
});
