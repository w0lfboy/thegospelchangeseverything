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
      <div className="mx-auto flex max-w-md items-center justify-around gap-2 rounded-2xl bg-black/30 p-2 backdrop-blur-xl">
        {timeOptions.map(({ id, label, icon: Icon }) => {
          const isActive = activeTime === id;
          return (
            <button
              key={id}
              onClick={() => onTimeChange(id)}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-xl px-4 py-3 transition-all duration-300",
                isActive 
                  ? "bg-white/20 text-white shadow-lg" 
                  : "text-white/60 hover:bg-white/10 hover:text-white/80"
              )}
              aria-label={`Switch to ${label} prayer`}
            >
              <Icon 
                className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  isActive && "scale-110"
                )} 
              />
              <span className="text-xs font-medium tracking-wide">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
