import React from 'react';
import { useStoreon } from 'storeon/react';
import { State } from './store';

const Buttons: React.FC = () => {
  const { dispatch } = useStoreon<State>('count');

  return (
    <div className='buttons'>
      <button onClick={() => { dispatch('decrement'); return false; }}>-</button>
      <button onClick={() => { dispatch('increment'); return false; }}>+</button>
    </div>
  );
};

export default Buttons;
