
import React from 'react';

const Counter = ({value, onIncrement, onDecrement}) => (
            <p>
                Clicked: {value.value} times
                <button onClick={onIncrement}>
                    +
                </button>
                <button onClick={onDecrement}>
                    -
                </button>
            </p>
            );

export default Counter

