import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import NavRoutes from './NavRoutes.jsx';
import './assets/styles/css/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavRoutes />
  </React.StrictMode>
);
