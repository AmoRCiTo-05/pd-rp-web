import { test, expect } from "bun:test";
import { scenarios, scenarioScore } from "../src/data/practiceScenarios";
test("scenario branches point to existing data nodes", () => {
  for (const s of scenarios)
    for (const n of Object.values(s.nodes))
      for (const a of n.actions)
        if (a.next) expect(s.nodes[a.next]).toBeDefined();
});
test("traffic stop professional path scores 100 and escalation path scores 0", () => {
  expect(
    scenarioScore(scenarios[0], [
      { node: "approach", action: 0 },
      { node: "contact", action: 0 },
      { node: "resolve", action: 0 },
    ]),
  ).toBe(100);
  expect(
    scenarioScore(scenarios[0], [
      { node: "approach", action: 1 },
      { node: "tension", action: 1 },
      { node: "resolve", action: 1 },
    ]),
  ).toBe(0);
});
