import { test, expect } from "bun:test";
import { createPageDrill, drillPages, getBank, questionProblems } from "../src/utils/pageDrills";

test("every Quiz Me page gives five clean questions linking to its own sections", () => {
  for (const href of drillPages) {
    for (let run = 0; run < 20; run++) {
      const drill = createPageDrill(href)!;
      expect(drill.questions.length).toBe(5);
      const ids = drill.questions.map((q) => q.id);
      expect(new Set(ids).size).toBe(5);
      for (const q of drill.questions) {
        expect(questionProblems(q)).toEqual([]);
        expect(q.question).not.toMatch(/\?\?|^\d+\./);
        expect(q.learnMore!.href.startsWith(href)).toBe(true);
        expect(q.explanation).toBeTruthy();
      }
    }
  }
});
test("a wrong answer is not reused within one drill", () => {
  for (const href of drillPages) {
    const all = createPageDrill(href)!.questions.flatMap((q) => q.options.filter((_, i) => i !== q.correctAnswer));
    expect(new Set(all).size).toBe(all.length);
  }
});
test("next drill avoids the previous drill's questions", () => {
  const first = createPageDrill("/amendments")!.questions.map((q) => q.id.split(":").pop()!);
  const second = createPageDrill("/amendments", "", first)!.questions.map((q) => q.id.split(":").pop()!);
  expect(second.filter((id) => first.includes(id))).toEqual([]);
});
test("SOP pages have banks and topic filter stays on topic", () => {
  for (const h of ["/sop/training", "/sop/meu", "/sop/seu", "/sop/asd", "/sop/dispatcher"]) expect(getBank(h).length).toBeGreaterThanOrEqual(5);
  expect(createPageDrill("/amendments", "nonexistent")).toBeUndefined();
  expect(createPageDrill("/amendments", "Self-Incrimination")!.questions.length).toBeGreaterThan(0);
});
