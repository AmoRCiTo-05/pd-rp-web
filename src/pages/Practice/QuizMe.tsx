import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import QuizComponent from "@/components/QuizComponent";
import { createPageDrill, drillPages } from "@/utils/pageDrills";
import { searchData } from "@/data/searchData";
import { getPractice, readLocal, removeLocal, writeLocal } from "@/utils/practiceStorage";
import type { QuizData } from "@/utils/quizParser";
import { Button } from "@/components/ui/button";

export const REPORT_KEY = "pd_reported_questions_v1";
export interface ReportedQuestion { id: string; question: string; page: string; at: string }
interface SavedDrill { nonce: string; quiz: QuizData }

function newDrill(page: string, query: string, key: string): SavedDrill | undefined {
  const avoid = readLocal<string[]>(`quizme_last_${page}`, []).map((id) => id.split(":").pop()!);
  const quiz = createPageDrill(page, query, avoid);
  if (!quiz) return;
  const saved = { nonce: Date.now().toString(36), quiz };
  writeLocal(key, saved);
  return saved;
}

export default function QuizMe() {
  const [params] = useSearchParams();
  const page = params.get("page") ?? "";
  const query = params.get("topic") ?? "";
  const questionId = params.get("question");
  const setKey = `quizme_set_${page}_${query}`;
  const [version, setVersion] = useState(0);
  const [reports, setReports] = useState(() => readLocal<ReportedQuestion[]>(REPORT_KEY, []));
  const bookmarked = getPractice().bookmarks.find((b) => b.id === questionId)?.question;
  const drill = useMemo(() => {
    if (bookmarked || !page) return;
    const saved = readLocal<SavedDrill | null>(setKey, null);
    return saved?.quiz?.questions?.length ? saved : newDrill(page, query, setKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query, version, bookmarked]);

  const report = (q: { id: string; question: string }) => {
    const next = [...reports.filter((r) => r.id !== q.id), { id: q.id, question: q.question, page, at: new Date().toISOString() }];
    writeLocal(REPORT_KEY, next);
    setReports(next);
  };

  if (bookmarked)
    return (
      <QuizComponent key={`bm:${questionId}`} providedQuiz={{ title: "Study List · Quiz Me", questions: [bookmarked] }}
        storageId={`bookmark_drill_${questionId}`} exitHref="/practice/study-list" />
    );
  if (drill)
    return (
      <QuizComponent
        key={drill.nonce}
        providedQuiz={drill.quiz}
        storageId={`drill_${page}_${query}_${drill.nonce}`}
        exitHref={page}
        reportedIds={reports.map((r) => r.id)}
        onReport={report}
        onComplete={(quiz) => writeLocal(`quizme_last_${page}`, quiz.questions.map((q) => q.id))}
        onRestart={() => {
          removeLocal(`drill_${page}_${query}_${drill.nonce}`);
          removeLocal(setKey);
          setVersion((v) => v + 1);
        }}
        restartLabel="New set of questions"
      />
    );
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Button asChild variant="ghost"><Link to="/practice">Practice</Link></Button>
      <h1 className="text-3xl font-heading font-bold">Quiz Me</h1>
      {page && <p>No matching questions for this topic.</p>}
      <div className="grid sm:grid-cols-2 gap-3">
        {drillPages.map((href) => (
          <Button key={href} asChild variant="outline" className="h-auto min-h-12 whitespace-normal">
            <Link to={`/practice/quiz-me?page=${encodeURIComponent(href)}`}>
              {searchData.find((p) => p.path === href)?.title ?? href}
            </Link>
          </Button>
        ))}
      </div>
      {reports.length > 0 && (
        <div className="space-y-3 rounded-lg border p-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-semibold">Reported questions ({reports.length})</h2>
            <Button size="sm" variant="ghost" onClick={() => { removeLocal(REPORT_KEY); setReports([]); }}>Clear</Button>
          </div>
          <ul className="space-y-2 text-sm">
            {reports.map((r) => (
              <li key={r.id} className="break-words"><span className="font-medium">{r.question}</span>
                <span className="block text-xs text-muted-foreground">{r.id}</span></li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
