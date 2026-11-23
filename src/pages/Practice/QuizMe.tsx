import { Link, useSearchParams } from "react-router-dom";
import QuizComponent from "@/components/QuizComponent";
import { createPageDrill, guideFacts } from "@/utils/pageDrills";
import { searchData } from "@/data/searchData";
import { getPractice } from "@/utils/practiceStorage";
import { Button } from "@/components/ui/button";
export default function QuizMe() {
  const [params] = useSearchParams();
  const page = params.get("page") ?? "";
  const query = params.get("topic") ?? "";
  const questionId = params.get("question");
  const bookmarked = getPractice().bookmarks.find(
    (b) => b.id === questionId,
  )?.question;
  const quiz = bookmarked
    ? { title: "Study List · Quiz Me", questions: [bookmarked] }
    : createPageDrill(page, query);
  if (quiz)
    return (
      <QuizComponent
        key={`${page}:${query}:${questionId ?? ""}`}
        providedQuiz={quiz}
        storageId={
          bookmarked ? `bookmark_drill_${questionId}` : `drill_${page}_${query}`
        }
        exitHref={bookmarked ? "/practice/study-list" : page}
      />
    );
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Button asChild variant="ghost">
        <Link to="/practice">Practice</Link>
      </Button>
      <h1 className="text-3xl font-heading font-bold">Quiz Me</h1>
      {page && <p>No matching questions for this topic.</p>}
      <div className="grid sm:grid-cols-2 gap-3">
        {Object.keys(guideFacts).map((href) => (
          <Button
            key={href}
            asChild
            variant="outline"
            className="h-auto min-h-12 whitespace-normal"
          >
            <Link to={`/practice/quiz-me?page=${encodeURIComponent(href)}`}>
              {searchData.find((p) => p.path === href)?.title ?? href}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
