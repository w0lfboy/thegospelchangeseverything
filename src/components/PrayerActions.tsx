import { Share2, Bookmark, BookmarkCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrayerActionsProps {
  isBookmarked: boolean;
  onBookmark: () => void;
  onShare: () => void;
}

export function PrayerActions({
  isBookmarked,
  onBookmark,
  onShare,
}: PrayerActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Bookmark */}
      <button
        onClick={onBookmark}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          "transition-all duration-200 active:scale-95",
          isBookmarked 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-muted-foreground hover:bg-muted/80"
        )}
        aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this prayer"}
      >
        {isBookmarked ? (
          <BookmarkCheck className="h-4 w-4" />
        ) : (
          <Bookmark className="h-4 w-4" />
        )}
      </button>

      {/* Share */}
      <button
        onClick={onShare}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          "bg-muted text-muted-foreground hover:bg-muted/80",
          "transition-all duration-200 active:scale-95"
        )}
        aria-label="Share this prayer"
      >
        <Share2 className="h-4 w-4" />
      </button>
    </div>
  );
}
