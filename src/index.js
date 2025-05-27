import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // אם יש לך עיצוב כלשהו
import Food from './Food'; // ודא שהנתיב נכון לפי המיקום של Food.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Food />
  </React.StrictMode>
);
