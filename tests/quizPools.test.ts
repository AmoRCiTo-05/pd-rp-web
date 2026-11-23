import { test, expect } from "bun:test";
import { incorrectIds } from "../src/utils/quizPools";
test("only incorrect and unanswered questions enter review", () => {
  expect(
    incorrectIds(
      [
        { id: "a", correctAnswer: 0 },
        { id: "b", correctAnswer: 1 },
        { id: "c", correctAnswer: 2 },
      ],
      { 0: 0, 1: 0 },
    ),
  ).toEqual(["b", "c"]);
});
test("cleared answers disappear from the next round", () => {
  expect(
    incorrectIds(
      [
        { id: "b", correctAnswer: 1 },
        { id: "c", correctAnswer: 2 },
      ],
      { 0: 1, 1: 2 },
    ),
  ).toEqual([]);
});
