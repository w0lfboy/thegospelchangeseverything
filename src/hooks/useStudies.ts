import { useState, useEffect, useCallback } from 'react';
import { Study, StudyStepData, STUDY_STEPS } from '@/types/gcbs';

const STORAGE_KEY = 'gcbs-studies';

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function createEmptySteps(): StudyStepData[] {
  return STUDY_STEPS.map(step => ({
    stepId: step.id,
    notes: '',
    completed: false
  }));
}

export function useStudies() {
  const [studies, setStudies] = useState<Study[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load studies from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setStudies(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load studies:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save studies to localStorage
  const saveStudies = useCallback((updatedStudies: Study[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStudies));
      setStudies(updatedStudies);
    } catch (error) {
      console.error('Failed to save studies:', error);
    }
  }, []);

  // Create a new study
  const createStudy = useCallback((passageReference: string = ''): Study => {
    const now = new Date().toISOString();
    const newStudy: Study = {
      id: generateId(),
      title: passageReference || 'New Study',
      passageReference,
      createdAt: now,
      updatedAt: now,
      currentStep: 1,
      steps: createEmptySteps()
    };
    
    const updatedStudies = [newStudy, ...studies];
    saveStudies(updatedStudies);
    return newStudy;
  }, [studies, saveStudies]);

  // Update a study
  const updateStudy = useCallback((studyId: string, updates: Partial<Study>) => {
    const updatedStudies = studies.map(study => {
      if (study.id === studyId) {
        const updated = {
          ...study,
          ...updates,
          updatedAt: new Date().toISOString()
        };
        // Auto-update title from passage reference
        if (updates.passageReference && updates.passageReference !== study.passageReference) {
          updated.title = updates.passageReference;
        }
        return updated;
      }
      return study;
    });
    saveStudies(updatedStudies);
  }, [studies, saveStudies]);

  // Update step notes
  const updateStepNotes = useCallback((studyId: string, stepId: number, notes: string) => {
    const updatedStudies = studies.map(study => {
      if (study.id === studyId) {
        const updatedSteps = study.steps.map(step => {
          if (step.stepId === stepId) {
            return { ...step, notes };
          }
          return step;
        });
        return {
          ...study,
          steps: updatedSteps,
          updatedAt: new Date().toISOString()
        };
      }
      return study;
    });
    saveStudies(updatedStudies);
  }, [studies, saveStudies]);

  // Mark step as completed
  const toggleStepComplete = useCallback((studyId: string, stepId: number) => {
    const updatedStudies = studies.map(study => {
      if (study.id === studyId) {
        const updatedSteps = study.steps.map(step => {
          if (step.stepId === stepId) {
            return { ...step, completed: !step.completed };
          }
          return step;
        });
        return {
          ...study,
          steps: updatedSteps,
          updatedAt: new Date().toISOString()
        };
      }
      return study;
    });
    saveStudies(updatedStudies);
  }, [studies, saveStudies]);

  // Delete a study
  const deleteStudy = useCallback((studyId: string) => {
    const updatedStudies = studies.filter(study => study.id !== studyId);
    saveStudies(updatedStudies);
  }, [studies, saveStudies]);

  // Get a single study
  const getStudy = useCallback((studyId: string): Study | undefined => {
    return studies.find(study => study.id === studyId);
  }, [studies]);

  // Export study as formatted text
  const exportStudy = useCallback((studyId: string): string => {
    const study = studies.find(s => s.id === studyId);
    if (!study) return '';

    let text = `GOSPEL-CENTERED BIBLE STUDY\n`;
    text += `${'='.repeat(40)}\n\n`;
    text += `📖 ${study.title || study.passageReference || 'Untitled Study'}\n`;
    text += `Created: ${new Date(study.createdAt).toLocaleDateString()}\n\n`;

    STUDY_STEPS.forEach(step => {
      const stepData = study.steps.find(s => s.stepId === step.id);
      text += `${'─'.repeat(40)}\n`;
      text += `STEP ${step.id}: ${step.name.toUpperCase()}\n`;
      text += `${step.description}\n\n`;
      
      if (stepData?.notes) {
        text += `${stepData.notes}\n\n`;
      } else {
        text += `[No notes yet]\n\n`;
      }
    });

    text += `${'='.repeat(40)}\n`;
    text += `Shared from GCBS Leader App\n`;
    text += `"The gospel changes everything."`;

    return text;
  }, [studies]);

  return {
    studies,
    isLoading,
    createStudy,
    updateStudy,
    updateStepNotes,
    toggleStepComplete,
    deleteStudy,
    getStudy,
    exportStudy
  };
}
