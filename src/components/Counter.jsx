// src/components/Counter.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reducers/counterSlice';

function Counter() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div className="counter-container">
            <h2 className="counter-value">Counter: {counter}</h2>
            <div className="counter-buttons">
                <button className="counter-button" onClick={handleIncrement}>Increment</button>
                <button className="counter-button" onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;
