import React from 'react';
import { useCounterDispatch, DECREMENT, INCREMENT } from './Context';

const Buttons: React.FC = () => {
  const dispatch = useCounterDispatch();

  return (
    <div className='buttons'>
      <button onClick={() => { dispatch({ type: DECREMENT, decr: 1 }); return false; }}>-</button>
      <button onClick={() => { dispatch({ type: INCREMENT, incr: 1 }); return false; }}>+</button>
    </div>
  );
};

export default Buttons;
