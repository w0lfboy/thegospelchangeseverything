import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStudies } from '@/hooks/useStudies';
import { STUDY_STEPS, StudyStep } from '@/types/gcbs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  HelpCircle,
  BookOpen,
  X
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

export default function StudyBuilder() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getStudy, updateStepNotes, toggleStepComplete, exportStudy } = useStudies();
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [currentStep, setCurrentStep] = useState(0);
  const [showHelp, setShowHelp] = useState<StudyStep | null>(null);

  const study = getStudy(id || '');

  useEffect(() => {
    if (!study) {
      navigate('/');
    }
  }, [study, navigate]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentStep(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  const handleNotesChange = useCallback((stepId: number, notes: string) => {
    if (id) {
      updateStepNotes(id, stepId, notes);
    }
  }, [id, updateStepNotes]);

  const handleComplete = useCallback((stepId: number) => {
    if (id) {
      toggleStepComplete(id, stepId);
    }
  }, [id, toggleStepComplete]);

  const handleShare = useCallback(async () => {
    if (!id) return;
    const text = exportStudy(id);
    
    if (navigator.share) {
      try {
        await navigator.share({ title: `Bible Study: ${study?.title}`, text });
        return;
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Study copied to clipboard",
      });
    } catch {
      toast({
        title: "Error",
        description: "Could not copy study",
        variant: "destructive",
      });
    }
  }, [id, study, exportStudy]);

  if (!study) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  const completedSteps = study.steps.filter(s => s.completed).map(s => s.stepId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="px-4 pt-8 pb-4 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-slate-300" />
        </button>
        <h1 className="text-lg font-semibold truncate flex-1 text-center px-2">
          {study.title || 'Untitled Study'}
        </h1>
        <button onClick={handleShare} className="p-2 -mr-2">
          <Share2 className="w-5 h-5 text-slate-300" />
        </button>
      </header>

      {/* Progress Dots */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-center gap-2">
          {STUDY_STEPS.map((step, index) => (
            <button
              key={step.id}
              onClick={() => scrollTo(index)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                completedSteps.includes(step.id)
                  ? 'bg-green-500 text-white'
                  : index === currentStep
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              {completedSteps.includes(step.id) ? <Check className="w-4 h-4" /> : step.id}
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-amber-400 mt-2 font-medium">
          {STUDY_STEPS[currentStep]?.name}
        </p>
      </div>

      {/* Swipeable Content */}
      <div className="flex-1 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {STUDY_STEPS.map((step) => {
            const stepData = study.steps.find(s => s.stepId === step.id);
            const isCompleted = stepData?.completed || false;
            
            return (
              <div key={step.id} className="flex-[0_0_100%] min-w-0 px-4 flex flex-col">
                <div className="flex-1 overflow-y-auto pb-4">
                  {/* Step Description */}
                  <div className="bg-slate-800/50 rounded-2xl p-4 mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-slate-300 text-sm">{step.description}</p>
                      <button 
                        onClick={() => setShowHelp(step)}
                        className="p-1 -mr-1 -mt-1"
                      >
                        <HelpCircle className="w-5 h-5 text-slate-500" />
                      </button>
                    </div>
                  </div>

                  {/* Guiding Questions */}
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 mb-4">
                    <h3 className="text-amber-400 font-semibold text-sm mb-3 flex items-center gap-2">
                      <span>📝</span> Guiding Questions
                    </h3>
                    <ul className="space-y-2">
                      {step.guidingQuestions.map((q, i) => (
                        <li key={i} className="text-sm text-slate-300 flex gap-2">
                          <span className="text-amber-500 font-medium">{i + 1}.</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Notes */}
                  <div className="mb-4">
                    <label className="text-sm font-medium text-slate-300 mb-2 block">
                      Your Notes
                    </label>
                    <Textarea
                      value={stepData?.notes || ''}
                      onChange={(e) => handleNotesChange(step.id, e.target.value)}
                      placeholder={`Write your observations for ${step.name}...`}
                      className="min-h-[150px] bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                    />
                  </div>

                  {/* Complete Button */}
                  <Button
                    onClick={() => handleComplete(step.id)}
                    variant={isCompleted ? "secondary" : "outline"}
                    className={`w-full ${
                      isCompleted 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-transparent border-slate-600 text-slate-300'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Completed
                      </>
                    ) : (
                      'Mark Complete'
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="px-4 py-4 border-t border-slate-700/50 flex gap-3 pb-8">
        <Button
          onClick={() => scrollTo(currentStep - 1)}
          disabled={currentStep === 0}
          variant="outline"
          className="flex-1 bg-transparent border-slate-600 text-slate-300 disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        <Button
          onClick={() => scrollTo(currentStep + 1)}
          disabled={currentStep === 7}
          className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-900"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-slate-800 w-full max-h-[80vh] rounded-t-3xl overflow-y-auto">
            <div className="sticky top-0 bg-slate-800 px-4 py-4 border-b border-slate-700 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">{showHelp.name}</h2>
              <button onClick={() => setShowHelp(null)}>
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            <div className="p-4 space-y-4 pb-8">
              <p className="text-slate-300 text-sm leading-relaxed">
                {showHelp.helpContent}
              </p>
              
              {showHelp.theologicalContext && (
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Reformed Historical Context
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {showHelp.theologicalContext}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
