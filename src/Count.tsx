import React from 'react';
import { useSelector } from 'react-redux';
import { CounterState } from './store';

const Count: React.FC = () => {
  const count = useSelector((state: CounterState) => state.count);

  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
