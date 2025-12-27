import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudies } from '@/hooks/useStudies';
import { StudyListItem } from '@/components/gcbs/StudyListItem';
import { GospelComparison } from '@/components/gcbs/GospelComparison';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter 
} from '@/components/ui/dialog';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Plus, BookOpen, Info, Loader2 } from 'lucide-react';

export default function GCBSHome() {
  const navigate = useNavigate();
  const { studies, isLoading, createStudy, deleteStudy } = useStudies();
  const [showNewDialog, setShowNewDialog] = useState(false);
  const [passageRef, setPassageRef] = useState('');

  const handleCreateStudy = () => {
    const study = createStudy(passageRef.trim());
    setShowNewDialog(false);
    setPassageRef('');
    navigate(`/study/${study.id}`);
  };

  const handleSelectStudy = (id: string) => {
    navigate(`/study/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border safe-area-top">
        <div className="px-4 py-4">
          <div className="max-w-lg mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">GCBS Leader</h1>
                <p className="text-xs text-muted-foreground">Gospel-Centered Bible Study</p>
              </div>
            </div>
            
            {/* About Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Info className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl overflow-y-auto">
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="text-xl">About GCBS</SheetTitle>
                </SheetHeader>
                <GospelComparison />
                
                <div className="mt-8 space-y-4 pb-safe-bottom">
                  <h3 className="font-semibold text-foreground">Scripture Foundation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This app is built on the conviction that Scripture is inspired, inerrant, and infallible—
                    God's authoritative Word to His people. We believe every passage of Scripture ultimately 
                    points to Christ and His redemptive work.
                  </p>
                  
                  <h3 className="font-semibold text-foreground pt-4">The 8-Step Method</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This gospel-centered approach guides you through understanding the text, identifying 
                    the fallen condition it addresses, discovering how Christ is the answer, and applying 
                    truth through the power of the gospel—not human effort.
                  </p>
                  
                  <h3 className="font-semibold text-foreground pt-4">For Leaders</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This tool is designed for small group leaders, Sunday school teachers, and anyone 
                    preparing to teach God's Word. Share your completed studies with co-leaders or 
                    use them as preparation notes.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 pb-safe-bottom">
        <div className="max-w-lg mx-auto space-y-6">
          {/* New Study Button */}
          <Button 
            onClick={() => setShowNewDialog(true)}
            className="w-full h-14 text-base font-semibold"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Start New Study
          </Button>

          {/* Studies List */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Your Studies</h2>
            
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : studies.length === 0 ? (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">No studies yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start your first gospel-centered Bible study to see it here.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {studies.map(study => (
                  <StudyListItem
                    key={study.id}
                    study={study}
                    onSelect={handleSelectStudy}
                    onDelete={deleteStudy}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* New Study Dialog */}
      <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
        <DialogContent className="max-w-sm mx-4">
          <DialogHeader>
            <DialogTitle>Start New Study</DialogTitle>
            <DialogDescription>
              Enter the passage reference you want to study.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Passage Reference
            </label>
            <Input
              value={passageRef}
              onChange={(e) => setPassageRef(e.target.value)}
              placeholder="e.g., John 3:16-21, Romans 8:1-11"
              className="text-base"
              autoFocus
            />
          </div>
          
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowNewDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateStudy}>
              Create Study
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
