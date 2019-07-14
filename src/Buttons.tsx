import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementAction, incrementAction } from './store';

const Buttons = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div className='buttons'>
      <button onClick={() => { dispatch(decrementAction()); return false; }}>-</button>
      <button onClick={() => { dispatch(incrementAction()); return false; }}>+</button>
    </div>
  );
};

export default Buttons;
