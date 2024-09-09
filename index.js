import React from 'react';
import { createRoot } from 'react-dom/client';  // Use from 'react-dom/client'
import './index.css';
import App from './App';

// Get the root element where React will render the app
const rootElement = document.getElementById('root');

// Create a root using React 18's new API
const root = createRoot(rootElement);

// Render your app inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
