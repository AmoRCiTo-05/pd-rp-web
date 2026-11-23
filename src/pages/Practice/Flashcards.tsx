import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Shuffle, RotateCw, Check, BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cardDecks, shuffled } from "@/utils/practiceContent";
import { getPractice, updatePractice } from "@/utils/practiceStorage";
export default function Flashcards() {
  const [params] = useSearchParams();
  const initial = params.get("deck");
  const [deck, setDeck] = useState<keyof typeof cardDecks>(
    initial && initial in cardDecks
      ? (initial as keyof typeof cardDecks)
      : "tenCodes",
  );
  const [statuses, setStatuses] = useState(getPractice().cards);
  const [onlyLearning, setOnlyLearning] = useState(false);
  const [order, setOrder] = useState(cardDecks[deck]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards = order.filter(
    (c) => !onlyLearning || statuses[c.id] === "learning",
  );
  const card = cards[index % Math.max(cards.length, 1)];
  const mark = (status: "know" | "learning") => {
    if (!card) return;
    const next = { ...statuses, [card.id]: status };
    updatePractice((d) => ({ ...d, cards: next }));
    setStatuses(next);
    setFlipped(false);
    setIndex((i) => (status === "know" && onlyLearning ? i : i + 1));
  };
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <Button asChild variant="ghost">
        <Link to="/practice">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Practice
        </Link>
      </Button>
      <h1 className="text-3xl font-heading font-bold">Flashcards</h1>
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex flex-col gap-1">
          Deck
          <select
            aria-label="Deck"
            value={deck}
            onChange={(e) => {
              const key = e.target.value as keyof typeof cardDecks;
              setDeck(key);
              setOrder(cardDecks[key]);
              setIndex(0);
              setFlipped(false);
            }}
            className="bg-background border rounded-md p-2"
          >
            <option value="tenCodes">10-Codes</option>
            <option value="shortForms">Short Forms</option>
            <option value="communications">Code Communications</option>
          </select>
        </label>
        <Button
          variant="outline"
          onClick={() => {
            setOrder(shuffled(order));
            setIndex(0);
            setFlipped(false);
          }}
        >
          <Shuffle className="h-4 w-4 mr-2" />
          Shuffle
        </Button>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={onlyLearning}
            onChange={(e) => {
              setOnlyLearning(e.target.checked);
              setIndex(0);
              setFlipped(false);
            }}
          />
          Only show what I'm still learning
        </label>
      </div>
      <p className="text-sm text-muted-foreground">
        {cards.length} cards ·{" "}
        {order.filter((c) => statuses[c.id] === "know").length} known
      </p>
      {card ? (
        <>
          <Button
            variant="outline"
            onClick={() => setFlipped(!flipped)}
            aria-label="Flip card"
            className="w-full min-h-64 h-auto p-8 whitespace-normal flex-col gap-5"
          >
            <RotateCw className="h-5 w-5 text-primary" />
            <span className="text-2xl font-semibold leading-relaxed">
              {flipped ? card.back : card.front}
            </span>
          </Button>
          <div className="flex flex-wrap gap-3">
            <Button disabled={!flipped} onClick={() => mark("know")}>
              <Check className="h-4 w-4 mr-2" />
              Know
            </Button>
            <Button
              disabled={!flipped}
              variant="outline"
              onClick={() => mark("learning")}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Still learning
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setIndex((i) => i + 1);
                setFlipped(false);
              }}
            >
              Skip
            </Button>
          </div>
          <Link className="text-primary underline block" to={card.href}>
            Open guide
          </Link>
        </>
      ) : (
        <p role="status">No cards are marked Still learning in this deck.</p>
      )}
    </section>
  );
}
