import { useState } from "react";
import { Link } from "react-router-dom";
import { Flame, CalendarDays } from "lucide-react";
import QuizComponent from "@/components/QuizComponent";
import { mcqPool } from "@/utils/quizPools";
import { getPractice, recordDay } from "@/utils/practiceStorage";
import { dailyQuestion, localDay } from "@/utils/dailyChallenge";
import { Button } from "@/components/ui/button";
export default function DailyChallenge() {
  const [day] = useState(localDay);
  const [streak, setStreak] = useState(getPractice().streak);
  const q = dailyQuestion(mcqPool, day);
  if (!q) return null;
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 pt-8 space-y-4">
        <Button asChild variant="ghost">
          <Link to="/practice">Practice</Link>
        </Button>
        <h1 className="text-3xl font-heading font-bold flex items-center gap-3">
          <CalendarDays className="h-7 w-7 text-primary" />
          Daily Challenge
        </h1>
        <div className="flex flex-wrap gap-4 text-muted-foreground">
          <span>{day}</span>
          <span className="flex gap-2 items-center">
            <Flame className="h-5 w-5 text-primary" />
            {streak.count} day streak
          </span>
        </div>
      </section>
      <QuizComponent
        key={day}
        providedQuiz={{ title: "Question of the Day", questions: [q] }}
        storageId={`daily_${day}`}
        exitHref="/practice"
        allowRetake={false}
        onComplete={() => setStreak(recordDay(day).streak)}
      />
    </>
  );
}
