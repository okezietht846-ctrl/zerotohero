import React from 'react';
import { NavLink } from 'react-router-dom';
import { fullCurriculum } from '../data/curriculum';
import { BookOpen, CheckCircle, Terminal, Cpu, Code, Layers, Zap } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

export const Sidebar: React.FC = () => {
  const { isComplete } = useProgress();

  const getIcon = (index: number) => {
    const icons = [Cpu, Terminal, Code, Layers, Zap, BookOpen];
    const Icon = icons[index % icons.length];
    return <Icon size={18} />;
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-cyber-panel/95 backdrop-blur-xl border-r border-white/5 flex flex-col hidden md:flex">
      <div className="p-6 border-b border-white/5 shrink-0">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent to-blue-500 font-mono tracking-tighter">
          ZERO<span className="text-white">TO</span>HERO
        </h1>
        <p className="text-xs text-cyber-dim mt-2 font-mono">CURRICULUM v1.0</p>
      </div>

      <nav className="p-4 space-y-8 flex-1 overflow-y-auto custom-scrollbar">
        {fullCurriculum.phases.map((phase, pIndex) => (
          <div key={phase.id} className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-cyber-accent uppercase tracking-widest px-3 mb-3">
              {getIcon(pIndex)}
              <span>{phase.title.split(':')[0]}</span>
            </div>
            
            <div className="space-y-1">
              {phase.weeks.map((week) => (
                <div key={week.id} className="pl-2">
                  <p className="px-3 text-xs text-cyber-dim font-mono mb-1 mt-2">{week.title}</p>
                  {week.lessons.map((lesson) => (
                    <NavLink
                      key={lesson.id}
                      to={`/lesson/${lesson.id}`}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isActive
                            ? 'bg-cyber-accent/10 text-cyber-accent shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      <span className="truncate mr-2">{lesson.title}</span>
                      {isComplete(lesson.id) && (
                        <CheckCircle size={14} className="text-cyber-success shrink-0" />
                      )}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-6 border-t border-white/5 bg-cyber-dark/50 shrink-0">
        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">Architected by</p>
        <p className="text-sm font-bold text-gray-300 hover:text-cyber-accent transition-colors cursor-default">
            Abraham Okezie
        </p>
      </div>
    </aside>
  );
};