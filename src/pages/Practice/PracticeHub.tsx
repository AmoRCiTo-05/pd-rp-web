import { Link } from "react-router-dom";
import {
  Layers,
  Brain,
  CalendarDays,
  Route,
  Radio,
  Scale,
  Milestone,
  Bookmark,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
export const practiceTools = [
  { title: "Flashcards", slug: "flashcards", icon: Layers },
  { title: "Quiz Me", slug: "quiz-me", icon: Brain },
  { title: "Daily Challenge", slug: "daily", icon: CalendarDays },
  { title: "Scenarios", slug: "scenarios", icon: Route },
  { title: "Radio Call Builder", slug: "radio", icon: Radio },
  { title: "Charge Picker", slug: "charges", icon: Scale },
  { title: "Rank Roadmap", slug: "roadmap", icon: Milestone },
  { title: "Study List", slug: "study-list", icon: Bookmark },
];
export default function PracticeHub() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <p className="text-primary text-sm font-semibold uppercase">
        PD RP Guide
      </p>
      <h1 className="text-3xl font-heading font-bold mt-2 mb-8">Practice</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {practiceTools.map((tool) => (
          <Button
            key={tool.slug}
            asChild
            variant="outline"
            className="h-auto min-h-32 justify-start p-5 whitespace-normal"
          >
            <Link
              to={`/practice/${tool.slug}`}
              className="flex flex-col items-start gap-4"
            >
              <tool.icon className="h-7 w-7 text-primary" />
              <span className="flex w-full items-center justify-between gap-3 text-lg">
                {tool.title}
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </span>
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
