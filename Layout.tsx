import React, { useState, useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { Menu, X, CheckCircle } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { fullCurriculum } from './data/curriculum';
import { useProgress } from './context/ProgressContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-cyber-dark text-gray-200 font-sans selection:bg-cyber-accent selection:text-black">
      <Sidebar />
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-cyber-panel/90 backdrop-blur z-50 border-b border-white/10 flex items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold tracking-tighter text-white">
            ZERO<span className="text-cyber-accent">TO</span>HERO
        </Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-cyber-dark pt-16 overflow-y-auto md:hidden">
            <div className="p-4">
               <SidebarMobile />
            </div>
        </div>
      )}

      <main className="md:ml-64 min-h-screen p-6 md:p-12 pt-24 md:pt-12 transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

// Simplified Sidebar for Mobile reuse
const SidebarMobile = () => {
    const { isComplete } = useProgress();
    return (
        <nav className="space-y-6">
             {fullCurriculum.phases.map((phase) => (
                <div key={phase.id}>
                    <h3 className="text-cyber-accent font-bold uppercase text-sm mb-2">{phase.title}</h3>
                    <div className="space-y-1 pl-2">
                         {phase.weeks.map(week => (
                             <div key={week.id} className="mb-2">
                                <p className="text-xs text-gray-500 mb-1">{week.title}</p>
                                {week.lessons.map(lesson => (
                                    <NavLink 
                                        key={lesson.id} 
                                        to={`/lesson/${lesson.id}`}
                                        className={({isActive}) => `block py-2 px-3 rounded ${isActive ? 'bg-cyber-accent text-black font-bold' : 'bg-white/5 text-gray-300'}`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span>{lesson.title}</span>
                                            {isComplete(lesson.id) && <CheckCircle size={14} />}
                                        </div>
                                    </NavLink>
                                ))}
                             </div>
                         ))}
                    </div>
                </div>
             ))}
        </nav>
    )
}