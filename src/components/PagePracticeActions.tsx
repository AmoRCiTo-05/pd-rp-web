import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookmarkButton } from "@/components/BookmarkButton";
import { searchData } from "@/data/searchData";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { guideFacts, sectionId } from "@/utils/pageDrills";
export function PagePracticeActions() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!guideFacts[pathname]) return;
    const elements = Array.from(document.querySelectorAll("h2,h3,h4,p,td"));
    for (const fact of guideFacts[pathname]) {
      const target =
        elements.find((e) => e.textContent?.trim() === fact.title) ??
        elements.find((e) => e.textContent?.trim() === fact.detail);
      if (target) target.id = sectionId(fact.title);
    }
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      const header = target?.closest<HTMLElement>(".cursor-pointer");
      if (header && !header.nextElementSibling) header.click();
      requestAnimationFrame(() => target?.scrollIntoView({ block: "center" }));
    }
  }, [pathname, hash]);
  if (pathname.startsWith("/practice") || pathname.includes("/quiz/"))
    return null;
  const page = searchData.find((p) => p.path === pathname);
  if (!page) return null;
  return (
    <div className="px-4 pt-4 flex flex-wrap justify-end gap-2">
      <BookmarkButton
        key={pathname}
        bookmark={{
          id: `page:${pathname}`,
          title: page.title,
          href: pathname,
          kind: "page",
        }}
      />
      {guideFacts[pathname]?.length > 0 && (
        <Button asChild variant="outline" className="gap-2">
          <Link to={`/practice/quiz-me?page=${encodeURIComponent(pathname)}`}>
            <Brain className="h-4 w-4" />
            Quiz me on this page
          </Link>
        </Button>
      )}
    </div>
  );
}
