import { useState } from "react";
import { Link } from "react-router-dom";
import { Radio, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  radioCodes,
  checkRadio,
  formatRadio,
  RadioDraft,
} from "@/utils/radioRules";
import { readLocal, writeLocal } from "@/utils/practiceStorage";
const blank: RadioDraft = {
  callsign: "",
  code: "10-11",
  location: "",
  priority: "Code 2",
  details: "",
  vehicle: "",
  occupants: "",
  support: "",
};
export default function RadioBuilder() {
  const [draft, setDraft] = useState(() =>
    readLocal("practice_radio_draft", blank),
  );
  const [submitted, setSubmitted] = useState(false);
  const change = (key: keyof RadioDraft, value: string) => {
    const next = { ...draft, [key]: value };
    setDraft(next);
    writeLocal("practice_radio_draft", next);
    setSubmitted(false);
  };
  const checks = checkRadio(draft);
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <Button asChild variant="ghost">
        <Link to="/practice">Practice</Link>
      </Button>
      <h1 className="text-3xl font-heading font-bold flex gap-3 items-center">
        <Radio className="h-7 w-7 text-primary" />
        Radio Call Builder
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {(["callsign", "location"] as const).map((key) => (
            <label key={key} className="space-y-2 capitalize">
              {key}
              <Input
                aria-label={key === "callsign" ? "Callsign" : "Location"}
                value={draft[key]}
                onChange={(e) => change(key, e.target.value)}
              />
            </label>
          ))}
          <label className="space-y-2">
            Code
            <select
              aria-label="Code"
              className="w-full border bg-background rounded-md p-3"
              value={draft.code}
              onChange={(e) => change("code", e.target.value)}
            >
              {radioCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} · {c.description}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2">
            Priority
            <select
              aria-label="Priority"
              className="w-full border bg-background rounded-md p-3"
              value={draft.priority}
              onChange={(e) => change("priority", e.target.value)}
            >
              <option>Code 1</option>
              <option>Code 2</option>
              <option>Code 3</option>
            </select>
          </label>
        </div>
        {(draft.code === "10-11" || draft.code === "10-80") && (
          <div className="grid sm:grid-cols-2 gap-4">
            <label>
              Vehicle color and make
              <Input
                value={draft.vehicle}
                onChange={(e) => change("vehicle", e.target.value)}
              />
            </label>
            {draft.code === "10-11" && (
              <label>
                Occupants
                <Input
                  type="number"
                  min="1"
                  value={draft.occupants}
                  onChange={(e) => change("occupants", e.target.value)}
                />
              </label>
            )}
          </div>
        )}
        <label className="block space-y-2">
          Support request
          <select
            aria-label="Support request"
            className="w-full border bg-background rounded-md p-3"
            value={draft.support}
            onChange={(e) => change("support", e.target.value)}
          >
            <option value="">Choose support</option>
            <option value="none">No additionals required</option>
            <option value="10-77">10-77 · Non-emergency backup</option>
            <option value="10-78">10-78 · Emergency backup</option>
          </select>
        </label>
        <label className="block space-y-2">
          Brief details
          <textarea
            aria-label="Brief details"
            className="w-full border bg-background rounded-md p-3 min-h-28"
            value={draft.details}
            onChange={(e) => change("details", e.target.value)}
          />
        </label>
        <Button type="submit">Check call</Button>
      </form>
      {submitted && (
        <div aria-live="polite" className="space-y-4">
          <h2 className="text-xl font-bold">
            {checks.every((c) => c.pass) ? "Call passed" : "Call needs changes"}
          </h2>
          <p className="border-y py-4 font-mono break-words">
            {formatRadio(draft)}
          </p>
          {checks.map((c) => (
            <div
              key={c.part}
              className={`border-l-4 p-4 ${c.pass ? "border-primary bg-primary/5" : "border-destructive bg-destructive/5"}`}
            >
              <h3 className="font-semibold flex gap-2 items-center">
                {c.pass ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                {c.part} · {c.pass ? "Pass" : "Fail"}
              </h3>
              <p className="my-2">{c.feedback}</p>
              <Link className="text-primary underline" to={c.href}>
                Review {c.part.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
