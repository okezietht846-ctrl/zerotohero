import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProgressContextType {
  completedLessons: string[];
  markComplete: (lessonId: string) => void;
  isComplete: (lessonId: string) => boolean;
  getProgress: () => number; // 0 to 100
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('zth_progress');
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('zth_progress', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const markComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) return prev;
      return [...prev, lessonId];
    });
  };

  const isComplete = (lessonId: string) => completedLessons.includes(lessonId);

  const resetProgress = () => {
    if(confirm("Are you sure you want to reset all progress?")) {
      setCompletedLessons([]);
    }
  };

  const getProgress = () => completedLessons.length;

  return (
    <ProgressContext.Provider value={{ completedLessons, markComplete, isComplete, getProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within a ProgressProvider');
  return context;
};