import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { FirstApp } from './FirstApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title="Mi nombre es Nelson" />
  </React.StrictMode>,
);
