export interface ScenarioAction {
  label: string;
  next?: string;
  points: number;
  outcome: string;
  links: { label: string; href: string }[];
}
export interface ScenarioNode {
  title: string;
  situation: string;
  actions: ScenarioAction[];
}
export interface Scenario {
  id: string;
  title: string;
  start: string;
  nodes: Record<string, ScenarioNode>;
}
const training = { label: "Training SOP", href: "/sop/training" };
const codes = { label: "10-Codes", href: "/basic-codes/10-codes" };
const infractions = {
  label: "Infraction codes",
  href: "/penal-codes/infraction",
};
const misdemeanor = {
  label: "Misdemeanor codes",
  href: "/penal-codes/misdemeanor",
};
const felony = { label: "Felony codes", href: "/penal-codes/felony" };
export const scenarios: Scenario[] = [
  {
    id: "traffic-stop",
    title: "Traffic stop",
    start: "approach",
    nodes: {
      approach: {
        title: "Alta Street · Traffic stop",
        situation:
          "You observe a vehicle speeding. It pulls over. You are the first officer on scene. Choose your opening action.",
        actions: [
          {
            label:
              "Radio a 10-11 with location, vehicle and occupants; approach professionally.",
            next: "contact",
            points: 1,
            outcome:
              "The traffic-stop call gives other units your location and the details they need. Officer presence and calm communication are the starting point.",
            links: [codes, training],
          },
          {
            label:
              "Skip the radio call and demand the driver get out at gunpoint.",
            next: "tension",
            points: 0,
            outcome:
              "A routine stop does not by itself justify a weapon-led approach. Communicate the stop and use proportionate force.",
            links: [training, codes],
          },
          {
            label: "Immediately arrest the driver for speeding.",
            next: "tension",
            points: 0,
            outcome:
              "A traffic violation is not automatically a basis for arrest. Verify the applicable offense and evidence first.",
            links: [infractions, training],
          },
        ],
      },
      contact: {
        title: "Driver contact",
        situation:
          "The driver provides identification but complains loudly about the stop. No threat or resistance is present.",
        actions: [
          {
            label:
              "Stay calm, explain the reason for the stop, and check the documents.",
            next: "resolve",
            points: 1,
            outcome:
              "Calm communication helps de-escalate. Verbal complaints alone do not justify force.",
            links: [
              training,
              { label: "Confusing Topics", href: "/confusing-topics" },
            ],
          },
          {
            label: "Use a taser because the driver is insulting you.",
            next: "resolve",
            points: 0,
            outcome:
              "Insults alone do not justify force. Follow the force continuum and de-escalation guidance.",
            links: [training],
          },
          {
            label:
              "Search the entire vehicle solely because the driver complained.",
            next: "resolve",
            points: 0,
            outcome:
              "A complaint is not probable cause for a full search. Apply the search standards in the guide.",
            links: [{ label: "Amendments", href: "/amendments" }, training],
          },
        ],
      },
      tension: {
        title: "Tension at the stop",
        situation:
          "The driver becomes agitated and starts reaching toward the passenger seat. You cannot yet see what they are reaching for.",
        actions: [
          {
            label:
              "Give clear commands, seek cover, request appropriate backup and reassess.",
            next: "resolve",
            points: 1,
            outcome:
              "Clear commands, cover and coordinated support preserve safety while you assess the threat. Emergency backup uses 10-78 when an emergency exists.",
            links: [training, codes],
          },
          {
            label: "Fire immediately without assessing the threat.",
            next: "resolve",
            points: 0,
            outcome:
              "Deadly force requires a serious threat, not an unverified movement alone. Assess and use proportional tactics.",
            links: [{ label: "Case Laws", href: "/case-laws" }, training],
          },
          {
            label: "Walk away without any further checks.",
            next: "resolve",
            points: 0,
            outcome:
              "Reassess and communicate the situation rather than leaving an unresolved safety concern.",
            links: [training, codes],
          },
        ],
      },
      resolve: {
        title: "Resolve and document",
        situation:
          "The driver cooperates. Checks show a valid license, no warrants and only the observed speeding violation.",
        actions: [
          {
            label:
              "Use the matching infraction guidance and document the stop.",
            points: 1,
            outcome:
              "Match the observed traffic violation to the listed infraction and document facts accurately. Code 50 denotes report writing.",
            links: [
              infractions,
              { label: "Code Communications", href: "/basic-codes/code-comms" },
            ],
          },
          {
            label: "Add a felony charge because the driver argued earlier.",
            points: 0,
            outcome:
              "Charge selection follows conduct and evidence, not retaliation. Compare the actual offense definitions.",
            links: [infractions, misdemeanor, felony],
          },
          {
            label: "Treat the driver as wanted without checking for a warrant.",
            points: 0,
            outcome:
              "A warrant or another lawful basis is needed; do not invent a wanted status.",
            links: [training, { label: "Amendments", href: "/amendments" }],
          },
        ],
      },
    },
  },
  {
    id: "emergency-backup",
    title: "Emergency backup · 10-78",
    start: "request",
    nodes: {
      request: {
        title: "Emergency on scene",
        situation:
          "An armed suspect is threatening people at your location. You need immediate backup.",
        actions: [
          {
            label:
              "Call 10-78 with your location and the armed suspect details.",
            next: "coordinate",
            points: 1,
            outcome:
              "10-78 requests emergency backup. An actionable location and threat details help responding units coordinate.",
            links: [codes, training],
          },
          {
            label: "Call 10-77 and give no location.",
            next: "locate",
            points: 0,
            outcome:
              "10-77 is non-emergency backup. An immediate armed threat needs the emergency code and a location.",
            links: [codes, { label: "Sample Calls", href: "/pd/sample-calls" }],
          },
          {
            label: "Keep the emergency off the radio.",
            next: "locate",
            points: 0,
            outcome:
              "Without a call, support cannot coordinate. Report the emergency with location and details.",
            links: [codes, training],
          },
        ],
      },
      locate: {
        title: "Dispatch needs your twenty",
        situation: "Dispatch asks where you are and what support you need.",
        actions: [
          {
            label:
              "Give a named street or landmark and a concise description of the threat.",
            next: "coordinate",
            points: 1,
            outcome:
              "A clear 10-20 and relevant details make the request actionable.",
            links: [codes, { label: "Sample Calls", href: "/pd/sample-calls" }],
          },
          {
            label: "Say “somewhere nearby” and repeat the request.",
            next: "coordinate",
            points: 0,
            outcome:
              "A vague location prevents timely help. Give a recognizable street or landmark.",
            links: [codes, { label: "Sample Calls", href: "/pd/sample-calls" }],
          },
        ],
      },
      coordinate: {
        title: "Backup arriving",
        situation:
          "Other units are responding. The suspect is still armed and people remain nearby.",
        actions: [
          {
            label:
              "Coordinate positions, protect life, and reassess proportionate force.",
            points: 1,
            outcome:
              "Coordinate resources and prioritize immediate safety. Force must match the actual threat; an emergency code is not blanket authorization.",
            links: [
              training,
              { label: "Case Laws", href: "/case-laws" },
              felony,
            ],
          },
          {
            label: "Declare Code 4 while the threat is still active.",
            points: 0,
            outcome:
              "Code 4 means all clear. Do not report it until the incident is actually resolved.",
            links: [
              { label: "Code Communications", href: "/basic-codes/code-comms" },
              training,
            ],
          },
        ],
      },
    },
  },
];
export interface ScenarioChoice {
  node: string;
  action: number;
}
export function scenarioScore(scenario: Scenario, choices: ScenarioChoice[]) {
  return choices.length
    ? Math.round(
        (choices.reduce(
          (n, c) =>
            n + (scenario.nodes[c.node]?.actions[c.action]?.points ?? 0),
          0,
        ) /
          choices.length) *
          100,
      )
    : 0;
}
