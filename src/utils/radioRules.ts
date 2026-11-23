import { tenCodes, codeCommunications } from "@/data/referenceLists";
export interface RadioDraft {
  callsign: string;
  code: string;
  location: string;
  priority: string;
  details: string;
  vehicle: string;
  occupants: string;
  support: string;
}
export interface RadioCheck {
  part: string;
  pass: boolean;
  feedback: string;
  href: string;
}
export const radioCodes = tenCodes.filter((c) =>
  ["10-11", "10-32", "10-78", "10-80"].includes(c.code),
);
export function checkRadio(d: RadioDraft): RadioCheck[] {
  const code = radioCodes.find((c) => c.code === d.code);
  const response = codeCommunications.find((c) => c.code === d.priority);
  const checks: RadioCheck[] = [
    {
      part: "Callsign",
      pass: !!d.callsign.trim(),
      feedback: d.callsign.trim()
        ? "Callsign identifies the unit."
        : "Include your callsign at the start of the call.",
      href: "/pd/sample-calls",
    },
    {
      part: "Code",
      pass: !!code,
      feedback: code
        ? `${code.code}: ${code.description}`
        : "Choose a supported incident code.",
      href: "/basic-codes/10-codes",
    },
    {
      part: "Location",
      pass:
        !!d.location.trim() &&
        !/^(here|my location|somewhere|nearby)$/i.test(d.location.trim()),
      feedback:
        d.location.trim() &&
        !/^(here|my location|somewhere|nearby)$/i.test(d.location.trim())
          ? "A location is supplied for responding units."
          : "Supply a named street or recognizable landmark, not just “here”.",
      href: "/pd/sample-calls",
    },
    {
      part: "Priority",
      pass: !!code && response?.priority === code.priority,
      feedback:
        response?.priority === code?.priority && code
          ? `${response?.code}: ${response?.description}`
          : `This ${code?.priority ?? "unknown"} priority incident needs ${code?.priority === "High" ? "Code 3" : "Code 2"} in this drill.`,
      href: "/basic-codes/code-comms",
    },
    {
      part: "Details",
      pass: !!d.details.trim(),
      feedback: d.details.trim()
        ? "Brief incident details included."
        : "Include a brief factual description of the incident.",
      href: "/pd/sample-calls",
    },
  ];
  if (d.code === "10-11")
    checks.push({
      part: "Vehicle and occupants",
      pass: !!d.vehicle.trim() && Number(d.occupants) >= 1,
      feedback:
        d.vehicle.trim() && Number(d.occupants) >= 1
          ? "Vehicle and occupant count supplied."
          : "Traffic-stop format requires vehicle color/make and occupants.",
      href: "/pd/sample-calls",
    });
  if (d.code === "10-80")
    checks.push({
      part: "Pursuit details",
      pass: !!d.vehicle.trim() && /north|south|east|west/i.test(d.details),
      feedback:
        d.vehicle.trim() && /north|south|east|west/i.test(d.details)
          ? "Vehicle and direction details supplied."
          : "Identify the vehicle and include north/south/east/west direction in brief details.",
      href: "/sop/seu",
    });
  checks.push({
    part: "Support request",
    pass: d.code === "10-78" ? d.support === "10-78" : !!d.support,
    feedback:
      d.code === "10-78" && d.support !== "10-78"
        ? "Emergency backup requires 10-78, not a non-emergency request."
        : d.support
          ? "Support requirement is stated."
          : "State whether you need additionals; use 10-77 or 10-78 for backup.",
    href: "/pd/sample-calls",
  });
  return checks;
}
export function formatRadio(d: RadioDraft) {
  return `${d.callsign} ${d.code === "10-11" ? "performing" : d.code === "10-80" ? "joining" : "requesting"} ${d.code} at ${d.location}${d.vehicle ? `, ${d.vehicle}` : ""}${d.occupants ? `, ${d.occupants} occupants` : ""}. ${d.details}. ${d.support === "none" ? "No additionals required" : `Requesting ${d.support}`}. ${d.priority}.`;
}
