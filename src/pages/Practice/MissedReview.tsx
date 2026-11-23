import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import QuizComponent from "@/components/QuizComponent";
import { Button } from "@/components/ui/button";
import { rankQuizzes, categoryQuizzes, incorrectIds } from "@/utils/quizPools";
import {
  getPractice,
  readLocal,
  updatePractice,
  removeLocal,
} from "@/utils/practiceStorage";
export default function MissedReview() {
  const [params] = useSearchParams();
  const type = params.get("type") ?? "category";
  const id = params.get("quiz") ?? "";
  const source = (type === "individual" ? rankQuizzes : categoryQuizzes)[id];
  const key = `quiz_${type}_${id}`;
  const initialize = () => {
    const saved = getPractice().missed[key];
    if (saved) return saved;
    const original = readLocal<{
      answers: Record<number, number>;
      completed: boolean;
    }>(key, { answers: {}, completed: false });
    return source && original.completed
      ? incorrectIds(source.questions, original.answers)
      : [];
  };
  const [ids, setIds] = useState(initialize);
  const [remaining, setRemaining] = useState(ids);
  const [round, setRound] = useState(0);
  const fullHref = `/rank-based-questions/quiz/${type}/${encodeURIComponent(id)}`;
  if (!source || !ids.length)
    return (
      <section className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-heading font-bold">Wrong-answer review</h1>
        <p role="status">
          {source ? "All missed questions cleared." : "Quiz not found."}
        </p>
        <Button asChild>
          <Link to={source ? fullHref : "/practice"}>
            {source ? "Back to full quiz" : "Practice"}
          </Link>
        </Button>
      </section>
    );
  const quiz = {
    title: `${source.title} · Missed questions`,
    questions: source.questions.filter((q) => ids.includes(q.id)),
  };
  return (
    <QuizComponent
      allowRetake={false}
      key={`${ids.join("|")}:${round}`}
      providedQuiz={quiz}
      storageId={`review_${key}_${ids.join("|")}`}
      exitHref={fullHref}
      onComplete={(q, answers) => {
        const next = incorrectIds(q.questions, answers);
        setRemaining(next);
        updatePractice((d) => ({ ...d, missed: { ...d.missed, [key]: next } }));
      }}
      resultActions={
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {remaining.length > 0 ? (
            <Button
              onClick={() => {
                removeLocal(`review_${key}_${remaining.join("|")}`);
                setIds(remaining);
                setRound((r) => r + 1);
              }}
            >
              Practice only what I missed ({remaining.length})
            </Button>
          ) : (
            <p role="status" className="font-semibold text-primary">
              All missed questions cleared.
            </p>
          )}
          <Button asChild variant="outline">
            <Link to={fullHref}>Back to full quiz</Link>
          </Button>
        </div>
      }
    />
  );
}
