import { Study } from '@/types/gcbs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { BookOpen, Trash2, ChevronRight, Calendar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface StudyListItemProps {
  study: Study;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export function StudyListItem({ study, onSelect, onDelete }: StudyListItemProps) {
  const completedCount = study.steps.filter(s => s.completed).length;
  const progress = (completedCount / 8) * 100;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md active:scale-[0.99]">
      <CardContent className="p-0">
        <button
          onClick={() => onSelect(study.id)}
          className="w-full text-left p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-primary shrink-0" />
                <h3 className="font-semibold text-foreground truncate">
                  {study.title || study.passageReference || 'Untitled Study'}
                </h3>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="w-3 h-3" />
                <span>Updated {formatDistanceToNow(new Date(study.updatedAt), { addSuffix: true })}</span>
              </div>
              
              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{completedCount} of 8 steps</span>
                  <span className="font-medium text-primary">{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
            
            <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
          </div>
        </button>
        
        {/* Delete button */}
        <div className="border-t border-border px-4 py-2 flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Study?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete "{study.title || 'this study'}" and all your notes. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => onDelete(study.id)}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
}
