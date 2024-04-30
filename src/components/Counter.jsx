// Importing necessary modules from React and Redux for this component
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reducers/counterSlice';

// Defining the Counter component as a functional component
function Counter() {
    // Using the useSelector hook to extract the 'counter' state from the Redux store
    const counter = useSelector(state => state.counter);
    // Using the useDispatch hook to get the reference to the dispatch function from Redux
    const dispatch = useDispatch();

    // Function to handle incrementing the counter
    const handleIncrement = () => {
        // Dispatching the 'increment' action, which will update the counter state in Redux
        dispatch(increment());
    };

    // Function to handle decrementing the counter
    const handleDecrement = () => {
        // Dispatching the 'decrement' action, which will update the counter state in Redux
        dispatch(decrement());
    };

    // Returning the JSX for rendering the Counter component
    return (
        <div className="counter-container">
            {/* Displaying the current value of the counter */}
            <h2 className="counter-value">Counter: {counter}</h2>
            {/* Buttons for incrementing and decrementing the counter */}
            <div className="counter-buttons">
                {/* Button to increment the counter, onClick event calls handleIncrement */}
                <button className="counter-button" onClick={handleIncrement}>Increment</button>
                {/* Button to decrement the counter, onClick event calls handleDecrement */}
                <button className="counter-button" onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );
}

// Exporting the Counter component as the default export
export default Counter;
