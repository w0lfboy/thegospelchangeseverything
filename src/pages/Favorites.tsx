import { ArrowLeft, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBookmarks, BookmarkedPrayer } from "@/hooks/useBookmarks";
import { cn } from "@/lib/utils";

const timeLabels = {
  morning: 'Morning',
  midday: 'Midday',
  evening: 'Evening',
};

function FavoriteCard({ bookmark, onRemove }: { bookmark: BookmarkedPrayer; onRemove: () => void }) {
  const formattedDate = new Date(bookmark.date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
      <header className="mb-3 flex items-start justify-between gap-2">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {timeLabels[bookmark.timeOfDay]} • {formattedDate}
          </span>
        </div>
        <button
          onClick={onRemove}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full",
            "text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
            "transition-colors duration-200"
          )}
          aria-label="Remove from favorites"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </header>

      <p className="font-serif text-sm italic text-foreground/80 line-clamp-2">
        "{bookmark.scripture.text}"
      </p>
      <cite className="mt-1 block text-xs text-muted-foreground not-italic">
        — {bookmark.scripture.reference}
      </cite>

      <p className="mt-3 text-sm text-foreground/70 line-clamp-2">
        {bookmark.reflection}
      </p>
    </article>
  );
}

export default function Favorites() {
  const navigate = useNavigate();
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              "text-foreground hover:bg-muted",
              "transition-colors duration-200"
            )}
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="font-serif text-xl font-medium text-foreground">
            Saved Prayers
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-6 pb-24">
        {bookmarks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <span className="text-2xl">📖</span>
            </div>
            <h2 className="font-serif text-lg font-medium text-foreground">
              No saved prayers yet
            </h2>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Bookmark prayers that speak to you, and they'll appear here for easy access.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookmarks.map((bookmark) => (
              <FavoriteCard
                key={bookmark.id}
                bookmark={bookmark}
                onRemove={() => removeBookmark(bookmark.id)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
