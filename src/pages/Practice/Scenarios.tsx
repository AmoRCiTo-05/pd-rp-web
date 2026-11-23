import { useQuizKeyboard } from "@/hooks/useQuizKeyboard";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Car, Radio, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  scenarios,
  scenarioScore,
  ScenarioChoice,
  Scenario,
} from "@/data/practiceScenarios";
import { Button } from "@/components/ui/button";
import { readLocal, writeLocal, updatePractice } from "@/utils/practiceStorage";
interface State {
  node: string;
  choices: ScenarioChoice[];
  completed: boolean;
}
export default function Scenarios() {
  const [params] = useSearchParams();
  const scenario = scenarios.find((s) => s.id === params.get("id"));
  if (scenario) return <ScenarioRun key={scenario.id} scenario={scenario} />;
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Button asChild variant="ghost">
        <Link to="/practice">Practice</Link>
      </Button>
      <h1 className="text-3xl font-heading font-bold">Scenarios</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {scenarios.map((s) => (
          <Button
            key={s.id}
            asChild
            variant="outline"
            className="h-auto min-h-32 whitespace-normal"
          >
            <Link to={`/practice/scenarios?id=${s.id}`}>
              <Car className="h-6 w-6 mr-3" />
              {s.title}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
function ScenarioRun({ scenario }: { scenario: Scenario }) {
  const [state, setState] = useState<State>(() =>
    readLocal(`scenario_${scenario?.id}`, {
      node: scenario?.start ?? "",
      choices: [],
      completed: false,
    }),
  );
  const [selected, setSelected] = useState<number>();
  const node = scenario.nodes[state.node];
  const save = (next: State) => {
    setState(next);
    writeLocal(`scenario_${scenario.id}`, next);
  };
  const confirm = () => {
    if (selected === undefined || !node) return;
    const action = node.actions[selected];
    if (!action) return;
    const next = {
      node: action.next ?? state.node,
      choices: [...state.choices, { node: state.node, action: selected }],
      completed: !action.next,
    };
    save(next);
    setSelected(undefined);
    if (next.completed)
      updatePractice((d) => ({
        ...d,
        roadmap: {
          ...d.roadmap,
          [`scenario:${scenario.id}`]: scenarioScore(scenario, next.choices),
        },
      }));
  };
  useQuizKeyboard(
    !state.completed,
    node?.actions.length ?? 0,
    setSelected,
    confirm,
  );
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <Button asChild variant="ghost">
        <Link to="/practice/scenarios">Scenarios</Link>
      </Button>
      <h1 className="text-3xl font-heading font-bold">{scenario.title}</h1>
      <div className="flex items-center gap-4 border-y py-5 text-primary">
        <Car className="h-10 w-10" />
        <span className="flex-1 border-t-2 border-dashed border-border" />
        <Radio className="h-8 w-8" />
      </div>
      {state.completed ? (
        <>
          <h2 className="text-2xl font-bold">
            Scenario submitted · {scenarioScore(scenario, state.choices)}%
          </h2>
          {state.choices.map((choice, i) => {
            const n = scenario.nodes[choice.node];
            const a = n.actions[choice.action];
            return (
              <div
                key={i}
                className={`border-l-4 p-4 space-y-3 ${a.points ? "border-primary bg-primary/5" : "border-destructive bg-destructive/5"}`}
              >
                <h3 className="font-semibold">{n.title}</h3>
                <p>{a.label}</p>
                <p>
                  <strong>Outcome: </strong>
                  {a.outcome}
                </p>
                <div className="flex flex-wrap gap-3">
                  {a.links.map((l) => (
                    <Link
                      key={l.href}
                      className="text-primary underline"
                      to={l.href}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <Button
            onClick={() =>
              save({ node: scenario.start, choices: [], completed: false })
            }
          >
            Try again
          </Button>
        </>
      ) : (
        node && (
          <>
            <h2 className="text-xl font-semibold">{node.title}</h2>
            <p className="leading-relaxed">{node.situation}</p>
            <div className="space-y-3">
              {node.actions.map((a, i) => (
                <Button
                  key={i}
                  variant={selected === i ? "default" : "outline"}
                  aria-pressed={selected === i}
                  onClick={() => setSelected(i)}
                  className="w-full h-auto min-h-14 justify-start whitespace-normal text-left p-4"
                >
                  {a.label}
                </Button>
              ))}
            </div>
            <Button
              disabled={selected === undefined}
              onClick={confirm}
              className="gap-2"
            >
              {node.actions[selected ?? -1]?.next
                ? "Confirm action"
                : "Submit scenario"}
              {node.actions[selected ?? -1]?.next ? (
                <ArrowRight className="h-4 w-4" />
              ) : (
                <CheckCircle2 className="h-4 w-4" />
              )}
            </Button>
          </>
        )
      )}
    </section>
  );
}
