import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Dashboard } from './views/Dashboard';
import { LessonView } from './views/LessonView';
import { ProgressProvider } from './context/ProgressContext';

const App: React.FC = () => {
  return (
    <ProgressProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lesson/:lessonId" element={<LessonView />} />
            {/* Fallback */}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ProgressProvider>
  );
};

export default App;