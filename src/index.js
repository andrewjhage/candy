// Imports the React Library, ReactDOM, CSS file, and the App component
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Renders the App component to the root element in the public/index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
