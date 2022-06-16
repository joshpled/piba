//system
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//local imports
import NavRoutes from '@/NavRoutes.jsx';
import { store } from '@/store/store';
//css imports
import '@/assets/styles/css/main.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavRoutes />
    </Provider>
  </React.StrictMode>
);
