import { cn } from '@/lib/utils';
import { STUDY_STEPS } from '@/types/gcbs';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  completedSteps: number[];
  onStepClick: (step: number) => void;
}

export function ProgressBar({ currentStep, completedSteps, onStepClick }: ProgressBarProps) {
  return (
    <div className="w-full py-3 px-4 bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-40">
      <div className="flex items-center justify-between gap-1 max-w-lg mx-auto">
        {STUDY_STEPS.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = currentStep === step.id;
          
          return (
            <button
              key={step.id}
              onClick={() => onStepClick(step.id)}
              className={cn(
                "relative flex flex-col items-center gap-1 transition-all touch-manipulation",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md p-1"
              )}
            >
              {/* Step indicator */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all",
                  isCompleted && "bg-primary text-primary-foreground",
                  isCurrent && !isCompleted && "bg-primary/20 text-primary ring-2 ring-primary",
                  !isCurrent && !isCompleted && "bg-muted text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step.id}
              </div>
              
              {/* Step label - only show on larger screens or current */}
              <span
                className={cn(
                  "text-[10px] font-medium transition-all max-w-[40px] truncate",
                  isCurrent ? "text-primary" : "text-muted-foreground"
                )}
              >
                {step.shortName}
              </span>
              
              {/* Connection line */}
              {index < STUDY_STEPS.length - 1 && (
                <div
                  className={cn(
                    "absolute top-4 left-[calc(50%+16px)] w-[calc(100%-8px)] h-0.5 -translate-y-1/2",
                    isCompleted ? "bg-primary" : "bg-muted"
                  )}
                  style={{ width: 'calc(100% - 16px)' }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
