import { useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getPractice,
  toggleBookmark,
  Bookmark as SavedBookmark,
} from "@/utils/practiceStorage";
export function BookmarkButton({ bookmark }: { bookmark: SavedBookmark }) {
  const [saved, setSaved] = useState(() =>
    getPractice().bookmarks.some((b) => b.id === bookmark.id),
  );
  const label = saved ? "Remove bookmark" : "Bookmark";
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`${label}: ${bookmark.title}`}
      aria-pressed={saved}
      title={label}
      className="shrink-0"
      onClick={() => {
        const next = toggleBookmark(bookmark);
        setSaved(next.bookmarks.some((b) => b.id === bookmark.id));
      }}
    >
      {saved ? (
        <BookmarkCheck className="h-5 w-5 text-primary" />
      ) : (
        <Bookmark className="h-5 w-5" />
      )}
    </Button>
  );
}
