import { guideFacts, sectionId } from "./pageDrills";
export interface ChargeMatch {
  title: string;
  description: string;
  classification: string;
  href: string;
}
export function findCharge(title: string): ChargeMatch | undefined {
  for (const href of [
    "/penal-codes/infraction",
    "/penal-codes/misdemeanor",
    "/penal-codes/felony",
  ]) {
    const fact = guideFacts[href].find((f) => f.title === title);
    if (fact)
      return {
        title: fact.title,
        description: fact.detail,
        classification: fact.classification ?? "",
        href: `${href}#${sectionId(fact.title)}`,
      };
  }
}
export function theftCharge(value: number) {
  if (value < 0 || !Number.isFinite(value)) return;
  return value < 5000
    ? findCharge("Petty Theft")
    : value > 5000
      ? findCharge("Grand Theft")
      : undefined;
}
export const chargeBranches = [
  {
    id: "traffic",
    label: "A driving or traffic violation",
    options: [
      "Failure to Obey Traffic Control Device",
      "Driving While Under the Influence of Drugs or Alcohol",
      "Reckless Driving",
      "Street Racing",
    ],
  },
  {
    id: "theft",
    label: "Took someone’s property",
    options: ["Petty Theft", "Grand Theft", "Carjacking", "Armed Robbery"],
  },
  {
    id: "violence",
    label: "Threatened or injured someone",
    options: [
      "Criminal Threats",
      "Battery",
      "Assault with a Weapon",
      "Kidnapping",
    ],
  },
  {
    id: "property",
    label: "Entered or damaged property",
    options: ["Trespassing", "Vandalism", "Felony Trespassing", "Arson"],
  },
  {
    id: "other",
    label: "Another observed action",
    options: [
      "Littering",
      "Public Intoxication",
      "Resisting Arrest",
      "Evidence Tampering",
    ],
  },
];
