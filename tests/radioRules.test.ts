import { test, expect } from "bun:test";
import { checkRadio, RadioDraft } from "../src/utils/radioRules";
const draft: RadioDraft = {
  callsign: "PD-12",
  code: "10-11",
  location: "Alta Street",
  priority: "Code 2",
  details: "Stopped for speeding",
  vehicle: "Black Sultan",
  occupants: "2",
  support: "none",
};
test("traffic call includes all sample format parts", () => {
  expect(checkRadio(draft).every((c) => c.pass)).toBe(true);
  expect(
    checkRadio({ ...draft, vehicle: "" }).find(
      (c) => c.part === "Vehicle and occupants",
    )?.pass,
  ).toBe(false);
});
test("emergency backup requires high priority and 10-78 support", () => {
  expect(
    checkRadio({
      ...draft,
      code: "10-78",
      priority: "Code 3",
      support: "10-78",
    }).every((c) => c.pass),
  ).toBe(true);
  expect(
    checkRadio({ ...draft, code: "10-78", support: "10-77" })
      .filter((c) => !c.pass)
      .map((c) => c.part),
  ).toEqual(["Priority", "Support request"]);
});
test("pursuit call checks vehicle and direction from SEU callout guidance", () => {
  expect(
    checkRadio({
      ...draft,
      code: "10-80",
      priority: "Code 3",
      details: "Suspect fleeing",
    }).find((c) => c.part === "Pursuit details")?.pass,
  ).toBe(false);
  expect(
    checkRadio({
      ...draft,
      code: "10-80",
      priority: "Code 3",
      details: "Suspect eastbound Alta Street",
    }).every((c) => c.pass),
  ).toBe(true);
});
