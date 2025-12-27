import { Sun, CloudSun, Moon, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface TimeNavigationProps {
  activeTime: 'morning' | 'midday' | 'evening';
  onTimeChange: (time: 'morning' | 'midday' | 'evening') => void;
}

const timeOptions = [
  { id: 'morning' as const, label: 'Morning', icon: Sun },
  { id: 'midday' as const, label: 'Midday', icon: CloudSun },
  { id: 'evening' as const, label: 'Evening', icon: Moon },
];

export function TimeNavigation({ activeTime, onTimeChange }: TimeNavigationProps) {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-safe-bottom sm:px-4">
      <div className="mx-auto mb-2 flex max-w-md items-center justify-between gap-2 rounded-2xl border border-border/50 bg-card/95 p-1.5 shadow-lg backdrop-blur-xl sm:gap-1 sm:p-2">
        {/* Time navigation buttons */}
        <div className="flex flex-1 items-center justify-around gap-1">
          {timeOptions.map(({ id, label, icon: Icon }) => {
            const isActive = activeTime === id;
            return (
              <button
                key={id}
                onClick={() => onTimeChange(id)}
                className={cn(
                  "flex flex-1 flex-col items-center gap-0.5 rounded-xl px-3 py-2.5 transition-all duration-300 sm:gap-1 sm:px-4",
                  "min-h-[52px] touch-manipulation", // Better touch target
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted"
                )}
                aria-label={`Switch to ${label} prayer`}
              >
                <Icon 
                  className={cn(
                    "h-4 w-4 transition-transform duration-300 sm:h-5 sm:w-5",
                    isActive && "scale-110"
                  )} 
                  strokeWidth={isActive ? 2 : 1.5}
                />
                <span className="text-[10px] font-medium tracking-wide sm:text-[11px]">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-border/50" />

        {/* Favorites button */}
        <button
          onClick={() => navigate('/favorites')}
          className={cn(
            "flex flex-col items-center gap-0.5 rounded-xl px-3 py-2.5 transition-all duration-300 sm:gap-1 sm:px-4",
            "min-h-[52px] touch-manipulation",
            "text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted"
          )}
          aria-label="View saved prayers"
        >
          <Heart className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          <span className="text-[10px] font-medium tracking-wide sm:text-[11px]">Saved</span>
        </button>
      </div>
    </nav>
  );
}
