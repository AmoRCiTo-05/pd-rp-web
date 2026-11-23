import { useState } from "react";
import { Link } from "react-router-dom";
import { Scale, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chargeBranches, findCharge, theftCharge } from "@/utils/chargePicker";
export default function ChargePicker() {
  const [branch, setBranch] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const choices = chargeBranches.find((c) => c.id === branch);
  const match = findCharge(title);
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <Button asChild variant="ghost">
        <Link to="/practice">Practice</Link>
      </Button>
      <h1 className="text-3xl font-heading font-bold flex gap-3 items-center">
        <Scale className="h-7 w-7 text-primary" />
        Charge Picker
      </h1>
      <p className="text-sm text-muted-foreground">
        RP training suggestions, not legal advice. Verify all elements and
        evidence against the guide.
      </p>
      {!choices ? (
        <>
          <h2 className="text-xl font-semibold">What did the suspect do?</h2>
          <div className="space-y-3">
            {chargeBranches.map((c) => (
              <Button
                key={c.id}
                variant="outline"
                onClick={() => {
                  setBranch(c.id);
                  setTitle("");
                }}
                className="w-full min-h-14 h-auto whitespace-normal justify-start"
              >
                {c.label}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <>
          <Button
            variant="ghost"
            onClick={() => {
              setBranch("");
              setTitle("");
              setValue("");
            }}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Change action
          </Button>
          <h2 className="text-xl font-semibold">
            Which description matches the observed facts?
          </h2>
          {branch === "theft" && (
            <div className="border-y py-4 space-y-3">
              <label className="block">
                Property value (no force or weapon)
                <Input
                  aria-label="Property value"
                  type="number"
                  min="0"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    setTitle("");
                  }}
                />
              </label>
              <Button
                disabled={value === ""}
                onClick={() =>
                  setTitle(theftCharge(Number(value))?.title ?? "unresolved")
                }
              >
                Check theft classification
              </Button>
              {title === "unresolved" && (
                <p role="status">
                  The guide specifies less than $5,000 and more than $5,000;
                  exactly $5,000 is not defined. Review the penal codes.
                </p>
              )}
            </div>
          )}
          <div className="space-y-3">
            {choices.options.map((name) => {
              const charge = findCharge(name);
              return (
                charge && (
                  <Button
                    key={name}
                    variant={title === name ? "default" : "outline"}
                    className="w-full h-auto min-h-14 text-left justify-start whitespace-normal p-4"
                    onClick={() => setTitle(name)}
                  >
                    {charge.description}
                  </Button>
                )
              );
            })}
          </div>
        </>
      )}
      {match && (
        <div
          aria-live="polite"
          className="border-l-4 border-primary bg-primary/5 p-5 space-y-3"
        >
          <p className="font-semibold text-primary">
            Suggested classification: {match.classification}
          </p>
          <h2 className="text-xl font-bold">{match.title}</h2>
          <p>{match.description}</p>
          <Link className="text-primary underline" to={match.href}>
            Open matching penal code
          </Link>
          <p className="text-sm text-muted-foreground">
            Only apply a charge when the facts satisfy its definition.
          </p>
        </div>
      )}
    </section>
  );
}
