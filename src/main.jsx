// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux'; // Importing Provider from react-redux
import store from './store';
import App from './App';

// Using createRoot to create the root of the React application
const root = createRoot(document.getElementById('root'));

// Rendering the entire application inside the root using the Provider component from react-redux
// The Provider component makes the Redux store available to all components in the application
root.render(
  <Provider store={store}>
    {/* Rendering the root component of the application */}
    <App />
  </Provider>
);
