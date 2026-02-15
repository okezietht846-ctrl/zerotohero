import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional if we had one, but strict tailwind script usage in index.html is primary. 
// However, standard vite setup usually has an index.css. We will skip creating a file for it and rely on inline styles in HTML for this specific constrained format, 
// OR simpler: just render.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);