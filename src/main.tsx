import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App'; // Importa el componente App
import store from './store/store';
import './index.css';

// Selecciona el contenedor raíz
const container = document.getElementById('root');

// Crea una raíz para el renderizado
const root = createRoot(container!);

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);