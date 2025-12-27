import { Share2, Bookmark, BookmarkCheck, Volume2, VolumeX, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrayerActionsProps {
  isBookmarked: boolean;
  onBookmark: () => void;
  onShare: () => void;
  isPlaying: boolean;
  isPaused: boolean;
  isAudioSupported: boolean;
  onPlay: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
}

export function PrayerActions({
  isBookmarked,
  onBookmark,
  onShare,
  isPlaying,
  isPaused,
  isAudioSupported,
  onPlay,
  onPause,
  onResume,
  onStop,
}: PrayerActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Audio controls */}
      {isAudioSupported && (
        <div className="flex items-center gap-1">
          {!isPlaying ? (
            <button
              onClick={onPlay}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                "bg-primary/10 text-primary hover:bg-primary/20",
                "transition-all duration-200 active:scale-95"
              )}
              aria-label="Play audio"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          ) : (
            <>
              <button
                onClick={isPaused ? onResume : onPause}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                  "transition-all duration-200 active:scale-95"
                )}
                aria-label={isPaused ? "Resume" : "Pause"}
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
              <button
                onClick={onStop}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "bg-muted text-muted-foreground hover:bg-muted/80",
                  "transition-all duration-200 active:scale-95"
                )}
                aria-label="Stop audio"
              >
                <VolumeX className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      )}

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
