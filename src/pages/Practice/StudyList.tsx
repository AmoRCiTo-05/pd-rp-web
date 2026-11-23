import { useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Trash2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPractice, toggleBookmark } from "@/utils/practiceStorage";
export default function StudyList() {
  const [items, setItems] = useState(getPractice().bookmarks);
  const [kind, setKind] = useState("all");
  const visible = items.filter((b) => kind === "all" || b.kind === kind);
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Button asChild variant="ghost">
        <Link to="/practice">Practice</Link>
      </Button>
      <h1 className="text-3xl font-heading font-bold flex gap-3 items-center">
        <Bookmark className="h-7 w-7 text-primary" />
        Study List
      </h1>
      <div className="flex flex-wrap gap-2">
        {["all", "page", "question"].map((k) => (
          <Button
            key={k}
            variant={kind === k ? "default" : "outline"}
            aria-pressed={kind === k}
            onClick={() => setKind(k)}
          >
            {k === "all" ? "All" : k === "page" ? "Pages" : "Questions"}
          </Button>
        ))}
      </div>
      {!visible.length ? (
        <p role="status" className="text-muted-foreground">
          No saved {kind === "all" ? "items" : `${kind}s`} yet.
        </p>
      ) : (
        <ul className="divide-y">
          {visible.map((b) => (
            <li key={b.id} className="py-5 flex items-start gap-3">
              <div className="min-w-0 flex-1 space-y-3">
                <Link
                  className="text-primary underline break-words font-medium"
                  to={b.href}
                >
                  {b.title}
                </Link>
                <p className="text-sm text-muted-foreground capitalize">
                  {b.kind}
                </p>
                {b.question && (
                  <Button asChild variant="outline" className="gap-2">
                    <Link
                      to={`/practice/quiz-me?question=${encodeURIComponent(b.id)}`}
                    >
                      <Brain className="h-4 w-4" />
                      Test this question
                    </Link>
                  </Button>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                title="Remove bookmark"
                aria-label={`Remove bookmark: ${b.title}`}
                onClick={() => setItems(toggleBookmark(b).bookmarks)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
