
import ReactDOM from 'react-dom/client';
import App from './App';
import React, { createContext } from 'react';
import RodSettingsStore from './store/RodSettingsStore';

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Context.Provider value={{
    rodSettings: new RodSettingsStore(),
  }}>
    <App />
  </Context.Provider>
);