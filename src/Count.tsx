import React from 'react';
import { useCounterState } from './Context';

const Count: React.FC = () => {
  const { count } = useCounterState();

  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
