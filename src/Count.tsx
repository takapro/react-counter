import React from 'react';
import useStoreon from 'storeon/react';
import { State } from './store';

const Count = (): JSX.Element => {
  const { count } = useStoreon<State>('count');
  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
