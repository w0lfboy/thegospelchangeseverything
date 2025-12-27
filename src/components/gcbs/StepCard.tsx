import { useState } from 'react';
import { StudyStep, StudyStepData } from '@/types/gcbs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetDescription 
} from '@/components/ui/sheet';
import { ChevronLeft, ChevronRight, HelpCircle, Check, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepCardProps {
  step: StudyStep;
  stepData: StudyStepData;
  isFirst: boolean;
  isLast: boolean;
  onNotesChange: (notes: string) => void;
  onComplete: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function StepCard({
  step,
  stepData,
  isFirst,
  isLast,
  onNotesChange,
  onComplete,
  onNext,
  onPrevious
}: StepCardProps) {
  const [showTheology, setShowTheology] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* Step Header */}
      <div className="px-4 py-6 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-lg mx-auto">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Step {step.id} of 8
                </span>
                {stepData.completed && (
                  <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Complete
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold text-foreground">{step.name}</h2>
              <p className="text-muted-foreground mt-1">{step.description}</p>
            </div>
            
            {/* Help Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
                <SheetHeader className="text-left">
                  <SheetTitle className="text-xl">{step.name}</SheetTitle>
                  <SheetDescription>{step.description}</SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6 overflow-y-auto pb-safe-bottom">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Understanding This Step</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.helpContent}
                    </p>
                  </div>
                  
                  {step.theologicalContext && (
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-foreground">Reformed Theological Context</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.theologicalContext}
                      </p>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Guiding Questions */}
      <div className="px-4 py-4 flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto space-y-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <span className="text-primary">📝</span>
                Guiding Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                {step.guidingQuestions.map((question, index) => (
                  <li key={index} className="flex gap-3 text-sm">
                    <span className="text-primary font-medium shrink-0">{index + 1}.</span>
                    <span className="text-foreground">{question}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Theological Context Toggle */}
          {step.theologicalContext && (
            <button
              onClick={() => setShowTheology(!showTheology)}
              className="w-full text-left"
            >
              <Card className={cn(
                "transition-all border-amber-500/20",
                showTheology ? "bg-amber-50/50 dark:bg-amber-950/20" : "bg-muted/30"
              )}>
                <CardContent className="py-3 px-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium">Reformed Historical Context</span>
                    </div>
                    <ChevronRight className={cn(
                      "w-4 h-4 text-muted-foreground transition-transform",
                      showTheology && "rotate-90"
                    )} />
                  </div>
                  {showTheology && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {step.theologicalContext}
                    </p>
                  )}
                </CardContent>
              </Card>
            </button>
          )}

          {/* Notes Area */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Your Notes</label>
            <Textarea
              value={stepData.notes}
              onChange={(e) => onNotesChange(e.target.value)}
              placeholder={`Write your observations and insights for the ${step.name} step...`}
              className="min-h-[200px] resize-none text-base"
            />
          </div>

          {/* Mark Complete */}
          <Button
            variant={stepData.completed ? "secondary" : "outline"}
            className="w-full"
            onClick={onComplete}
          >
            {stepData.completed ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Marked Complete
              </>
            ) : (
              'Mark Step as Complete'
            )}
          </Button>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="sticky bottom-0 px-4 py-4 bg-background/95 backdrop-blur-sm border-t border-border pb-safe-bottom">
        <div className="max-w-lg mx-auto flex gap-3">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={isFirst}
            className="flex-1"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={isLast}
            className="flex-1"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
