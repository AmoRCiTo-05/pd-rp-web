import { Link } from "react-router-dom";
import { Milestone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  roadmapRanks,
  rankTasks,
  taskScore,
  completion,
} from "@/utils/rankRoadmap";
export default function RankRoadmap() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Button asChild variant="ghost">
        <Link to="/practice">Practice</Link>
      </Button>
      <h1 className="text-3xl font-heading font-bold flex gap-3 items-center">
        <Milestone className="h-7 w-7 text-primary" />
        Rank Roadmap
      </h1>
      <ol className="border-l-2 border-border ml-3">
        {roadmapRanks.map((rank, index) => {
          const tasks = rankTasks(rank);
          const percent = completion(tasks.map((t) => taskScore(t.storageKey)));
          return (
            <li key={rank} className="pl-6 pb-10 relative">
              <span className="absolute -left-4 bg-background text-primary border border-border w-8 h-8 rounded-full flex items-center justify-center text-sm">
                {percent === 100 ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  index + 1
                )}
              </span>
              <div className="flex gap-3 justify-between items-start">
                <h2 className="text-xl font-semibold">{rank}</h2>
                <span className="text-sm text-muted-foreground shrink-0">
                  {percent}% complete
                </span>
              </div>
              <Progress value={percent} className="h-2 my-4" />
              <ul className="space-y-3">
                {tasks.map((t) => (
                  <li
                    key={t.storageKey}
                    className="flex flex-wrap items-center justify-between gap-3 border-b pb-3"
                  >
                    <Link
                      className="text-primary underline flex-1 min-w-0 break-words"
                      to={t.href}
                    >
                      {t.title}
                    </Link>
                    <div className="flex gap-3 items-center text-sm">
                      {t.guideHref && (
                        <Link
                          className="text-primary underline"
                          to={t.guideHref}
                        >
                          Guide
                        </Link>
                      )}
                      <span>{taskScore(t.storageKey)}%</span>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
