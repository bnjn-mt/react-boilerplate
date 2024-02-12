import { createRoot } from 'react-dom';
import React from 'react';
import App from './src/App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);