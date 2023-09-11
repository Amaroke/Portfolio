import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: global_en
    },
    fr: {
      global: global_fr
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
