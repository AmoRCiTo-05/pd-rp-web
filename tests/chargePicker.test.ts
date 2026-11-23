import { test, expect } from "bun:test";
import {
  theftCharge,
  findCharge,
  chargeBranches,
} from "../src/utils/chargePicker";
test("theft uses the guide threshold without inventing a rule at exactly 5000", () => {
  expect(theftCharge(4999)?.classification).toBe("Misdemeanor");
  expect(theftCharge(5001)?.classification).toBe("Felony");
  expect(theftCharge(5000)).toBeUndefined();
});
test("charge picker covers Infraction Misdemeanor and Felony using actual definitions", () => {
  expect(findCharge("Littering")?.classification).toBe("Infraction");
  expect(findCharge("Battery")?.classification).toBe("Misdemeanor");
  expect(findCharge("Armed Robbery")?.classification).toBe("Felony");
  for (const branch of chargeBranches)
    for (const title of branch.options) expect(findCharge(title)).toBeDefined();
});
