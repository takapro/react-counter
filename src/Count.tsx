import React from 'react';
import { useSelector } from './react-redux';
import { State } from './store';

const Count = (): JSX.Element => {
  const count = useSelector((state: State) => state.count);
  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
