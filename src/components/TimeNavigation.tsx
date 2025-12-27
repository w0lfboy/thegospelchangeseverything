import { Sun, CloudSun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

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
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-4">
      <div className="mx-auto flex max-w-sm items-center justify-around gap-1 rounded-2xl border border-border/50 bg-card/95 p-1.5 shadow-lg backdrop-blur-xl">
        {timeOptions.map(({ id, label, icon: Icon }) => {
          const isActive = activeTime === id;
          return (
            <button
              key={id}
              onClick={() => onTimeChange(id)}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-xl px-4 py-2.5 transition-all duration-300",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              aria-label={`Switch to ${label} prayer`}
            >
              <Icon 
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isActive && "scale-110"
                )} 
                strokeWidth={isActive ? 2 : 1.5}
              />
              <span className="text-[11px] font-medium tracking-wide">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
