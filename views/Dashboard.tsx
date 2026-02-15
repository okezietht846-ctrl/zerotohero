import React from 'react';
import { fullCurriculum } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle, RotateCcw, Quote } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { completedLessons, isComplete, resetProgress } = useProgress();
  const navigate = useNavigate();

  // Calculate Stats
  const totalLessons = fullCurriculum.phases.reduce(
    (acc, phase) => acc + phase.weeks.reduce((wAcc, week) => wAcc + week.lessons.length, 0),
    0
  );
  const completedCount = completedLessons.length;
  const percentage = Math.round((completedCount / totalLessons) * 100);

  // Find next lesson
  let nextLessonId = fullCurriculum.phases[0].weeks[0].lessons[0].id;
  let found = false;
  
  // Simple iteration to find first incomplete
  for (const phase of fullCurriculum.phases) {
    for (const week of phase.weeks) {
      for (const lesson of week.lessons) {
        if (!isComplete(lesson.id)) {
          nextLessonId = lesson.id;
          found = true;
          break;
        }
      }
      if (found) break;
    }
    if (found) break;
  }

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fade-in pb-20">
      {/* Hero Section */}
      <header className="space-y-6 pt-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Code is <span className="text-cyber-accent">Power</span>.
        </h1>
        <p className="text-xl text-cyber-dim max-w-2xl">
          Your journey from absolute beginner to programmer mindset starts here. 
          No magic. Just logic, practice, and persistence.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <button 
            onClick={() => navigate(`/lesson/${nextLessonId}`)}
            className="flex items-center gap-3 px-8 py-4 bg-cyber-accent text-black font-bold text-lg rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <Play size={20} fill="currentColor" />
            {percentage === 0 ? "Start Journey" : "Continue Learning"}
          </button>
          
          {percentage > 0 && (
            <button 
                onClick={resetProgress}
                className="flex items-center gap-2 px-6 py-4 border border-white/10 text-gray-400 font-mono text-sm rounded-full hover:bg-red-500/10 hover:text-red-400 transition-colors"
            >
                <RotateCcw size={16} />
                Reset Progress
            </button>
          )}
        </div>
      </header>

      {/* Progress Section */}
      <section className="bg-cyber-panel/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex justify-between items-end mb-4">
            <div>
                <h2 className="text-2xl font-bold text-white mb-1">Your Progress</h2>
                <p className="text-cyber-dim font-mono">{completedCount} / {totalLessons} Modules Completed</p>
            </div>
            <span className="text-5xl font-bold text-white/10">{percentage}%</span>
        </div>
        <div className="w-full h-4 bg-black/50 rounded-full overflow-hidden border border-white/5">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-cyber-accent transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </section>

      {/* Phases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fullCurriculum.phases.map((phase, i) => {
            const phaseTotal = phase.weeks.reduce((acc, w) => acc + w.lessons.length, 0);
            const phaseCompleted = phase.weeks.reduce((acc, w) => acc + w.lessons.filter(l => isComplete(l.id)).length, 0);
            const isPhaseDone = phaseTotal === phaseCompleted;
            const isLocked = i > 0 && completedLessons.length === 0; // Soft lock visual only, not functional

            return (
                <div 
                    key={phase.id}
                    className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                        isPhaseDone 
                        ? 'bg-cyber-success/5 border-cyber-success/30' 
                        : 'bg-cyber-panel border-white/5 hover:border-cyber-accent/50'
                    }`}
                >
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-cyber-accent bg-cyber-accent/10 px-2 py-1 rounded">
                            PHASE {i + 1}
                        </span>
                        {isPhaseDone && <CheckCircle className="text-cyber-success" size={20} />}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-accent transition-colors">
                        {phase.title.split(': ')[1]}
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 min-h-[40px]">
                        {phase.goal}
                    </p>

                    <div className="space-y-3">
                        {phase.weeks.map(week => (
                            <div key={week.id} className="flex items-center gap-3 text-sm text-gray-500 font-mono">
                                <div className={`w-1.5 h-1.5 rounded-full ${isPhaseDone ? 'bg-cyber-success' : 'bg-white/20'}`} />
                                {week.title.split(': ')[1]}
                            </div>
                        ))}
                    </div>
                </div>
            )
        })}
      </div>

      {/* Author's Remark Section */}
      <section className="mt-20 pt-10 border-t border-white/5">
        <div className="bg-gradient-to-r from-cyber-panel to-black p-8 md:p-12 rounded-3xl border-l-4 border-cyber-accent relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 text-white/5 group-hover:text-cyber-accent/10 transition-colors duration-500">
                <Quote size={180} />
            </div>
            
            <div className="relative z-10">
                <h3 className="text-cyber-accent font-mono text-xs uppercase tracking-[0.2em] mb-6">Author's Remark</h3>
                <p className="text-xl md:text-2xl text-gray-300 italic font-light leading-relaxed max-w-3xl mb-8">
                    "I didn't build this curriculum just to teach you syntax. I built it to change how you see the world. 
                    The gap between a user and a creator is smaller than you think—it's just a willingness to look behind the curtain. 
                    Don't rush the process. Confusion is just the sensation of learning."
                </p>
                
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-cyber-dim/10 flex items-center justify-center text-cyber-accent font-bold border border-white/10 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                        AO
                    </div>
                    <div>
                        <p className="text-white font-bold text-lg">Abraham Okezie</p>
                        <p className="text-xs text-cyber-dim font-mono uppercase tracking-wider">Curriculum Architect</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};