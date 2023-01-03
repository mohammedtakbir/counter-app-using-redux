import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/Actions/CounterActions';

const Counter = () => {
    // const [count, setCount] = useState(0);
    const dispatch = useDispatch()
    const count = useSelector((state => state.count))

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }

    return (
        <div>
            <h1>Counter App using Redux</h1>
            <h3>Counter: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>Decrement</button>
            <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button>
        </div>
    );
};

export default Counter;



/* 
* 1. state --> count: 0
* 2. action dispatch --> increment, decrement, reset
* 3. reducer --> increment --> count = count + 1, decrement --> count = count - 1, reset --> count = 0 
* 4. store
* 5. Provide the store in index.js file --> <Provider store={store}><App /></ Provider >
* 6. use store
*/