// src/reducers/rootReducer.js

// Importing the combineReducers function from Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit';
// Importing the counterReducer from the counterSlice file
import counterReducer from './counterSlice';

// Combining multiple reducers into a single root reducer using combineReducers
const rootReducer = combineReducers({
  // Assigning the counterReducer to manage the 'counter' slice of the Redux store
  counter: counterReducer,
});

// Exporting the rootReducer as the default export
export default rootReducer;
