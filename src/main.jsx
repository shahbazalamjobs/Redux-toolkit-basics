// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
