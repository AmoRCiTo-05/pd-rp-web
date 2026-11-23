import {
  tenCodes,
  shortForms,
  codeCommunications,
} from "@/data/referenceLists";
export const cardDecks = {
  tenCodes: tenCodes.map((c) => ({
    id: `codes:${c.code}`,
    front: c.code,
    back: c.description,
    href: "/basic-codes/10-codes",
  })),
  shortForms: shortForms.map((c) => ({
    id: `short:${c.abbreviation}`,
    front: c.abbreviation,
    back: c.meaning,
    href: "/short-forms",
  })),
  communications: codeCommunications.map((c) => ({
    id: `comms:${c.code}`,
    front: c.code,
    back: c.description,
    href: "/basic-codes/code-comms",
  })),
};
export function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
