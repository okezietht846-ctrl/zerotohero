import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fullCurriculum } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import { VideoPlayer } from '../components/VideoPlayer';
import { CheckCircle, ArrowRight, Clock, Activity, AlertTriangle, ExternalLink, BookOpen } from 'lucide-react';

export const LessonView: React.FC = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { markComplete, isComplete } = useProgress();

  // Find current lesson data
  let currentLesson = null;
  let nextLessonId = null;
  
  // Flatten curriculum to find lesson and next
  const allLessons = fullCurriculum.phases.flatMap(p => p.weeks.flatMap(w => w.lessons));
  const currentIndex = allLessons.findIndex(l => l.id === lessonId);
  
  if (currentIndex !== -1) {
    currentLesson = allLessons[currentIndex];
    if (currentIndex < allLessons.length - 1) {
      nextLessonId = allLessons[currentIndex + 1].id;
    }
  }

  if (!currentLesson) {
    return <div className="text-center pt-20 text-red-500">Lesson not found</div>;
  }

  const handleComplete = () => {
    markComplete(currentLesson!.id);
    if (nextLessonId) {
      navigate(`/lesson/${nextLessonId}`);
      window.scrollTo(0,0);
    } else {
        navigate('/');
    }
  };

  const completed = isComplete(currentLesson.id);

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-fade-in">
      {/* Header */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-3 text-cyber-accent font-mono text-sm">
            <span className="bg-cyber-accent/10 px-2 py-1 rounded">LESSON</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {currentLesson.duration}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          {currentLesson.title}
        </h1>
        <p className="text-xl text-gray-400">
          {currentLesson.description}
        </p>
      </div>

      {/* Video Content */}
      <div className="mb-12">
        {currentLesson.videoId ? (
          <VideoPlayer videoId={currentLesson.videoId} title={currentLesson.title} />
        ) : (
          <div className="aspect-video w-full bg-cyber-panel border border-white/5 rounded-xl flex items-center justify-center flex-col gap-4 text-gray-500">
             <AlertTriangle size={48} />
             <p>Video content loading...</p>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
            <section className="prose prose-invert max-w-none prose-p:text-lg prose-p:text-gray-300 prose-headings:text-white">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-8 bg-cyber-accent block rounded-full"></span>
                    Knowledge Download
                </h3>
                <div className="bg-cyber-panel/50 p-6 rounded-2xl border border-white/5 leading-relaxed">
                    {currentLesson.content}
                </div>
            </section>

             {/* Blog/Resource Link */}
             {currentLesson.blogLink && (
                <section className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl hover:bg-blue-900/20 transition-colors">
                    <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                        <BookOpen size={20} />
                        Deep Dive
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                        Want to master this concept? Read this selected article for more details.
                    </p>
                    <a 
                        href={currentLesson.blogLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-semibold hover:text-cyber-accent transition-colors border-b border-transparent hover:border-cyber-accent"
                    >
                        {currentLesson.blogTitle || "Read Article"}
                        <ExternalLink size={16} />
                    </a>
                </section>
            )}

            {/* Activity Card */}
            <section className="bg-gradient-to-br from-cyber-panel to-cyber-dark p-6 rounded-2xl border border-cyber-accent/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Activity size={100} />
                </div>
                <h3 className="text-xl font-bold text-cyber-accent mb-4 flex items-center gap-2">
                    <Activity className="shrink-0" />
                    Practical Mission
                </h3>
                <p className="text-white text-lg font-medium relative z-10">
                    {currentLesson.activity}
                </p>
            </section>
        </div>

        {/* Action Sidebar (Sticky on Desktop) */}
        <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
                <div className="bg-cyber-panel border border-white/5 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Status</h4>
                    {completed ? (
                        <div className="flex items-center gap-3 text-cyber-success bg-cyber-success/10 p-3 rounded-lg mb-4">
                            <CheckCircle size={20} />
                            <span className="font-bold">Module Completed</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 text-gray-500 bg-white/5 p-3 rounded-lg mb-4">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-600" />
                            <span className="font-mono text-sm">Pending</span>
                        </div>
                    )}

                    <button
                        onClick={handleComplete}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                            completed 
                            ? 'bg-white/10 text-white hover:bg-white/20' 
                            : 'bg-cyber-accent text-black hover:bg-white hover:shadow-cyber-accent/50'
                        }`}
                    >
                        {completed ? (
                            <>Next Lesson <ArrowRight size={18} /></>
                        ) : (
                            <>Complete & Continue <ArrowRight size={18} /></>
                        )}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};