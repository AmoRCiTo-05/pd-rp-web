import facts from "@/data/guideFacts.json";
import { tenCodes, shortForms, codeCommunications } from "@/data/referenceLists";
import type { BankQuestion } from "./types";

const others = <T,>(list: T[], item: T) => list.filter((x) => x !== item);

export function tenCodeQuestions(): BankQuestion[] {
  const section = (code: string) => code;
  const qs: BankQuestion[] = [];
  const categories = [...new Set(tenCodes.map((c) => c.category))];
  const sameCat = (c: (typeof tenCodes)[number]) => {
    const peers = tenCodes.filter((x) => x.category === c.category && x !== c);
    return peers.length >= 3 ? peers : others(tenCodes, c);
  };
  tenCodes.forEach((c, i) => {
    const peers = sameCat(c);
    qs.push({
      id: `10c-meaning-${c.code}`, kind: "meaning",
      stem: `What does ${c.code} mean?`, correct: c.description,
      wrong: peers.map((p) => p.description),
      explanation: `${c.code} means "${c.description}" and is listed under ${c.category}.`,
      section: section(c.code),
    });
    qs.push({
      id: `10c-code-${c.code}`, kind: "code",
      stem: `Which code would you use for "${c.description}"?`, correct: c.code,
      wrong: peers.map((p) => p.code),
      explanation: `"${c.description}" is ${c.code} in the 10-codes list.`,
      section: section(c.code),
    });
    if (i % 2 === 0)
      qs.push({
        id: `10c-scenario-${c.code}`, kind: "scenario",
        stem: `A unit calls out ${c.code} over the radio. What are they reporting?`,
        correct: c.description, wrong: peers.map((p) => p.description),
        explanation: `${c.code} stands for "${c.description}".`, section: section(c.code),
      });
    qs.push({
      id: `10c-category-${c.code}`, kind: "category",
      stem: `Which category is ${c.code} (${c.description}) listed under?`,
      correct: c.category, wrong: categories.filter((x) => x !== c.category),
      explanation: `${c.code} is grouped with the ${c.category} codes.`, section: section(c.code),
    });
  });
  for (const cat of categories) {
    const inside = tenCodes.filter((c) => c.category === cat);
    if (inside.length < 3) continue;
    tenCodes.filter((c) => c.category !== cat).filter((_, i) => i % 7 === 0).forEach((outside) =>
      qs.push({
        id: `10c-not-${cat}-${outside.code}`, kind: "not",
        stem: `Which of these is NOT one of the ${cat} codes?`, correct: outside.code,
        wrong: inside.map((c) => c.code),
        explanation: `${outside.code} (${outside.description}) is listed under ${outside.category}, not ${cat}.`,
        section: outside.code,
      }),
    );
  }
  return qs;
}

function pairQuestions(
  prefix: string, items: { key: string; value: string }[], what: string,
): BankQuestion[] {
  const qs: BankQuestion[] = [];
  const pair = (a: { key: string }, b: { value: string }) => `${a.key}: ${b.value}`;
  const mismatched = (i: number) =>
    [1, 2, 3, 5, 8].map((k) => pair(items[i], items[(i + k) % items.length]));
  items.forEach((it, i) => {
    if (i % 3 === 0)
      qs.push({
        id: `${prefix}-pair-${it.key}`, kind: "pair",
        stem: `Which ${what} is matched with its correct meaning?`, correct: pair(it, it),
        wrong: [1, 2, 3, 5].map((k) => mismatched((i + k) % items.length)[k % 5]),
        explanation: `${it.key} means "${it.value}".`, section: it.key,
      });
    if (i % 3 === 1)
      qs.push({
        id: `${prefix}-pairnot-${it.key}`, kind: "pairNot",
        stem: `Which of these ${what} pairings is wrong?`, correct: mismatched(i)[0],
        wrong: [1, 2, 3, 5].map((k) => { const o = items[(i + k) % items.length]; return pair(o, o); }),
        explanation: `${it.key} actually means "${it.value}", so that pairing is wrong.`, section: it.key,
      });
  });
  return qs;
}

export function shortFormQuestions(): BankQuestion[] {
  const qs: BankQuestion[] = [];
  shortForms.forEach((s) => {
    const peers = others(shortForms, s);
    qs.push({
      id: `sf-meaning-${s.abbreviation}`, kind: "meaning",
      stem: `What does ${s.abbreviation} stand for?`, correct: s.meaning,
      wrong: peers.map((p) => p.meaning),
      explanation: `${s.abbreviation} stands for "${s.meaning}".`, section: s.abbreviation,
    });
    qs.push({
      id: `sf-code-${s.abbreviation}`, kind: "code",
      stem: `Which short form is used for "${s.meaning}"?`, correct: s.abbreviation,
      wrong: peers.map((p) => p.abbreviation),
      explanation: `"${s.meaning}" is shortened to ${s.abbreviation}.`, section: s.abbreviation,
    });
    qs.push({
      id: `sf-report-${s.abbreviation}`, kind: "report",
      stem: `A report you are reading mentions ${s.abbreviation}. What does it refer to?`,
      correct: s.meaning, wrong: peers.map((p) => p.meaning),
      explanation: `In reports, ${s.abbreviation} means "${s.meaning}".`, section: s.abbreviation,
    });
  });
  return [...qs, ...pairQuestions("sf", shortForms.map((s) => ({ key: s.abbreviation, value: s.meaning })), "short form")];
}

export function codeCommsQuestions(): BankQuestion[] {
  const qs: BankQuestion[] = [];
  codeCommunications.forEach((c) => {
    const peers = others(codeCommunications, c);
    qs.push({
      id: `cc-meaning-${c.code}`, kind: "meaning", stem: `What does ${c.code} mean?`,
      correct: c.description, wrong: peers.map((p) => p.description),
      explanation: `${c.code} means "${c.description}".`, section: c.code,
    });
    qs.push({
      id: `cc-code-${c.code}`, kind: "code", stem: `Which code matches "${c.description}"?`,
      correct: c.code, wrong: peers.map((p) => p.code),
      explanation: `"${c.description}" is ${c.code}.`, section: c.code,
    });
    qs.push({
      id: `cc-scenario-${c.code}`, kind: "scenario",
      stem: `Dispatch tells you to go ${c.code}. What is being asked of you?`,
      correct: c.description, wrong: peers.map((p) => p.description),
      explanation: `${c.code} means "${c.description}".`, section: c.code,
    });
  });
  return [...qs, ...pairQuestions("cc", codeCommunications.map((c) => ({ key: c.code, value: c.description })), "code")];
}

type Fact = { title: string; detail: string };
const penal = facts as unknown as Record<string, Fact[]>;
const CLASSES = [
  ["Felony", "/penal-codes/felony"],
  ["Misdemeanor", "/penal-codes/misdemeanor"],
  ["Infraction", "/penal-codes/infraction"],
] as const;
const clean = (t: string) => t.replace(/\s*->\s*/g, " / ");

export function penalQuestions(href: string): BankQuestion[] {
  const cls = CLASSES.find((c) => c[1] === href)?.[0];
  if (!cls) return [];
  const counts = new Map<string, number>();
  CLASSES.forEach(([, h]) => penal[h].forEach((f) => counts.set(f.title, (counts.get(f.title) ?? 0) + 1)));
  const unique = (h: string) => penal[h].filter((f) => counts.get(f.title) === 1);
  const mine = unique(href);
  const outside = CLASSES.filter((c) => c[1] !== href).flatMap(([c, h]) => unique(h).map((f) => ({ ...f, cls: c })));
  const qs: BankQuestion[] = [];
  const pick = <T,>(list: T[], i: number, n: number) => Array.from({ length: n }, (_, k) => list[(i * 7 + k * 13) % list.length]);
  mine.forEach((f, i) => {
    const name = clean(f.title);
    qs.push({
      id: `${cls}-classify-${i}`, kind: "classify",
      stem: `How is ${name} classified in the penal code?`, correct: cls,
      wrong: [...CLASSES.map((c) => c[0]).filter((c) => c !== cls), "Not listed in the penal code"],
      explanation: `${name} is listed as a ${cls}: ${f.detail}`, section: f.title,
    });
    qs.push({
      id: `${cls}-which-${i}`, kind: "category",
      stem: `Which of these offenses is a ${cls}?`, correct: name,
      wrong: pick(outside, i, 8).map((o) => clean(o.title)),
      explanation: `${name} is a ${cls}. The other options appear under different classifications.`, section: f.title,
    });
    qs.push({
      id: `${cls}-describe-${i}`, kind: "describe",
      stem: `A suspect is accused of this: "${f.detail}" Which offense fits?`, correct: name,
      wrong: mine.filter((o) => o !== f).map((o) => clean(o.title)),
      explanation: `That description matches ${name}, listed as a ${cls}.`, section: f.title,
    });
    const shortPeers = mine.filter((o) => o !== f && o.detail.length <= 110);
    if (f.detail.length <= 110 && shortPeers.length >= 3)
      qs.push({
        id: `${cls}-meaning-${i}`, kind: "meaning",
        stem: `What does the offense ${name} cover?`, correct: f.detail,
        wrong: shortPeers.map((o) => o.detail),
        explanation: `${name} is defined on the page as: ${f.detail}`, section: f.title,
      });
    if (i % 3 === 0) {
      const odd = outside[(i * 5) % outside.length];
      qs.push({
        id: `${cls}-not-${i}`, kind: "not",
        stem: `Which of these is NOT listed as a ${cls}?`, correct: clean(odd.title),
        wrong: pick(mine, i, 6).filter((o) => o.title !== odd.title).map((o) => clean(o.title)),
        explanation: `${clean(odd.title)} is listed as a ${odd.cls}, not a ${cls}.`, section: "",
      });
    }
  });
  return qs;
}
