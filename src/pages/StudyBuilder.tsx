import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStudies } from '@/hooks/useStudies';
import { STUDY_STEPS } from '@/types/gcbs';
import { ProgressBar } from '@/components/gcbs/ProgressBar';
import { StepCard } from '@/components/gcbs/StepCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Share2, MoreVertical, Edit2, Check, Loader2 } from 'lucide-react';

export default function StudyBuilder() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getStudy, updateStudy, updateStepNotes, toggleStepComplete, exportStudy } = useStudies();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState('');

  const study = getStudy(id || '');

  useEffect(() => {
    if (!study) {
      navigate('/');
    } else {
      setCurrentStep(study.currentStep);
      setTitleInput(study.passageReference || study.title);
    }
  }, [study, navigate]);

  const handleStepChange = useCallback((step: number) => {
    setCurrentStep(step);
    if (study && id) {
      updateStudy(id, { currentStep: step });
    }
  }, [study, id, updateStudy]);

  const handleNotesChange = useCallback((notes: string) => {
    if (id) {
      updateStepNotes(id, currentStep, notes);
    }
  }, [id, currentStep, updateStepNotes]);

  const handleComplete = useCallback(() => {
    if (id) {
      toggleStepComplete(id, currentStep);
    }
  }, [id, currentStep, toggleStepComplete]);

  const handleNext = useCallback(() => {
    if (currentStep < 8) {
      handleStepChange(currentStep + 1);
    }
  }, [currentStep, handleStepChange]);

  const handlePrevious = useCallback(() => {
    if (currentStep > 1) {
      handleStepChange(currentStep - 1);
    }
  }, [currentStep, handleStepChange]);

  const handleTitleSave = useCallback(() => {
    if (id && titleInput.trim()) {
      updateStudy(id, { 
        passageReference: titleInput.trim(),
        title: titleInput.trim()
      });
    }
    setIsEditingTitle(false);
  }, [id, titleInput, updateStudy]);

  const handleShare = useCallback(async () => {
    if (!id) return;
    
    const text = exportStudy(id);
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Bible Study: ${study?.title}`,
          text: text,
        });
        return;
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Your study has been copied. Share it with your co-leaders!",
      });
    } catch {
      toast({
        title: "Unable to share",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  }, [id, study, exportStudy]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const currentStepData = STUDY_STEPS.find(s => s.id === currentStep)!;
  const stepData = study.steps.find(s => s.stepId === currentStep)!;
  const completedSteps = study.steps.filter(s => s.completed).map(s => s.stepId);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border safe-area-top">
        <div className="px-4 py-3">
          <div className="max-w-lg mx-auto flex items-center justify-between gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            {/* Title */}
            <div className="flex-1 min-w-0">
              {isEditingTitle ? (
                <div className="flex items-center gap-2">
                  <Input
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    className="h-8 text-sm"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleTitleSave();
                      if (e.key === 'Escape') setIsEditingTitle(false);
                    }}
                  />
                  <Button size="icon" variant="ghost" onClick={handleTitleSave}>
                    <Check className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditingTitle(true)}
                  className="flex items-center gap-2 max-w-full"
                >
                  <span className="font-semibold text-foreground truncate">
                    {study.passageReference || study.title}
                  </span>
                  <Edit2 className="w-3 h-3 text-muted-foreground shrink-0" />
                </button>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-1 shrink-0">
              <Button variant="ghost" size="icon" onClick={handleShare}>
                <Share2 className="w-5 h-5" />
              </Button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="rounded-t-3xl">
                  <SheetHeader className="text-left mb-4">
                    <SheetTitle>Study Options</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-2 pb-safe-bottom">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => {
                        handleShare();
                      }}
                    >
                      <Share2 className="w-4 h-4 mr-3" />
                      Export & Share Study
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => setIsEditingTitle(true)}
                    >
                      <Edit2 className="w-4 h-4 mr-3" />
                      Edit Passage Reference
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <ProgressBar
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepChange}
      />

      {/* Step Content */}
      <div className="flex-1 overflow-y-auto">
        <StepCard
          step={currentStepData}
          stepData={stepData}
          isFirst={currentStep === 1}
          isLast={currentStep === 8}
          onNotesChange={handleNotesChange}
          onComplete={handleComplete}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  );
}
