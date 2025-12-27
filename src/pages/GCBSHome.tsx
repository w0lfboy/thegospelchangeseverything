import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudies } from '@/hooks/useStudies';
import { Study } from '@/types/gcbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Plus, BookOpen, Info, Trash2, ChevronRight, X } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function GCBSHome() {
  const navigate = useNavigate();
  const { studies, isLoading, createStudy, deleteStudy } = useStudies();
  const [showNewForm, setShowNewForm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [passageRef, setPassageRef] = useState('');

  const handleCreateStudy = () => {
    if (!passageRef.trim()) return;
    const study = createStudy(passageRef.trim());
    setShowNewForm(false);
    setPassageRef('');
    navigate(`/study/${study.id}`);
  };

  const handleSelectStudy = (id: string) => {
    navigate(`/study/${id}`);
  };

  const getProgress = (study: Study) => {
    const completed = study.steps.filter(s => s.completed).length;
    return Math.round((completed / 8) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="px-4 pt-12 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold">GCBS Leader</h1>
              <p className="text-sm text-slate-400">Gospel-Centered Bible Study</p>
            </div>
          </div>
          <button 
            onClick={() => setShowAbout(true)}
            className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center"
          >
            <Info className="w-5 h-5 text-slate-300" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-8">
        {/* New Study Button/Form */}
        {showNewForm ? (
          <Card className="bg-slate-800/50 border-slate-700 p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">New Study</h3>
              <button onClick={() => setShowNewForm(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <Input
              value={passageRef}
              onChange={(e) => setPassageRef(e.target.value)}
              placeholder="e.g., John 3:16-21"
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 mb-3"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleCreateStudy()}
            />
            <Button 
              onClick={handleCreateStudy}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
              disabled={!passageRef.trim()}
            >
              Start Study
            </Button>
          </Card>
        ) : (
          <Button 
            onClick={() => setShowNewForm(true)}
            className="w-full h-14 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-base mb-6"
          >
            <Plus className="w-5 h-5 mr-2" />
            Start New Study
          </Button>
        )}

        {/* Studies List */}
        <h2 className="text-lg font-semibold mb-4 text-slate-200">Your Studies</h2>
        
        {isLoading ? (
          <div className="text-center py-12 text-slate-400">Loading...</div>
        ) : studies.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-slate-500" />
            </div>
            <p className="text-slate-400">No studies yet</p>
            <p className="text-sm text-slate-500">Tap above to start your first study</p>
          </div>
        ) : (
          <div className="space-y-3">
            {studies.map(study => (
              <Card 
                key={study.id}
                className="bg-slate-800/50 border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => handleSelectStudy(study.id)}
                  className="w-full p-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white truncate mb-1">
                        {study.title || 'Untitled Study'}
                      </h3>
                      <p className="text-xs text-slate-400 mb-2">
                        Updated {formatDistanceToNow(new Date(study.updatedAt), { addSuffix: true })}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-amber-500 rounded-full transition-all"
                            style={{ width: `${getProgress(study)}%` }}
                          />
                        </div>
                        <span className="text-xs text-amber-400 font-medium">
                          {getProgress(study)}%
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-500 ml-3" />
                  </div>
                </button>
                <div className="border-t border-slate-700 px-4 py-2">
                  <button
                    onClick={() => deleteStudy(study.id)}
                    className="text-xs text-red-400 flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-slate-800 w-full max-h-[85vh] rounded-t-3xl overflow-y-auto">
            <div className="sticky top-0 bg-slate-800 px-4 py-4 border-b border-slate-700 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">About GCBS</h2>
              <button onClick={() => setShowAbout(false)}>
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            <div className="p-4 space-y-6 pb-8">
              <div>
                <h3 className="font-semibold text-amber-400 mb-2">The 8-Step Method</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Text → Context → Content → Biblical Truth → Fallen Condition → Redemption in Christ → Faith in Christ → Application
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-red-900/20 border-red-800/30 p-4">
                  <h4 className="font-semibold text-red-400 mb-2 text-sm">❌ Moralism</h4>
                  <p className="text-xs text-slate-300">"Here's what to do. Now go do it."</p>
                  <p className="text-xs text-slate-400 mt-2">→ Pride or despair</p>
                </Card>
                <Card className="bg-green-900/20 border-green-800/30 p-4">
                  <h4 className="font-semibold text-green-400 mb-2 text-sm">✓ Gospel</h4>
                  <p className="text-xs text-slate-300">"Here's what Christ did. Respond in gratitude."</p>
                  <p className="text-xs text-slate-400 mt-2">→ Humility + Hope</p>
                </Card>
              </div>

              <div>
                <h3 className="font-semibold text-amber-400 mb-2">Application Pattern</h3>
                <div className="flex flex-wrap gap-2">
                  {['Examine', 'Confess', 'Repent', 'Believe', 'Obey'].map((step, i) => (
                    <span key={step} className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">
                      {i + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
