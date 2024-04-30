// src/store/index.js

// Importing the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importing the rootReducer from the rootReducer file
import rootReducer from '../reducers/rootReducer';

// Configuring the Redux store with rootReducer
const store = configureStore({
  // Setting the root reducer for the store
  reducer: rootReducer,
});

// Exporting the configured Redux store as the default export
export default store;
