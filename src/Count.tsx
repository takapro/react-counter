import React from 'react';
import { useCounterState } from './Context';

const Count: React.FC = () => {
  const state = useCounterState();

  return (
    <div className='count'>{state.count}</div>
  );
};

export default Count;
