import { test, expect } from "bun:test";
import { createPageDrill, guideFacts } from "../src/utils/pageDrills";
test("every supported page produces exactly five page-sourced questions", () => {
  for (const href of Object.keys(guideFacts)) {
    const drill = createPageDrill(href);
    expect(drill?.questions.length).toBe(5);
    for (const q of drill?.questions ?? []) {
      expect(q.learnMore?.href.startsWith(href + "#")).toBe(true);
      expect(guideFacts[href].some((f) => f.detail === q.explanation)).toBe(
        true,
      );
      expect(q.options[q.correctAnswer]).toBeTruthy();
    }
  }
});
test("topic filter never falls back to unrelated questions", () => {
  expect(
    createPageDrill("/amendments", "Self-Incrimination")?.questions.length,
  ).toBe(1);
  expect(createPageDrill("/amendments", "nonexistent")).toBeUndefined();
});
