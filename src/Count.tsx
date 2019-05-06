import React from 'react';
import { useGlobal } from 'reactn';

const Count = (): JSX.Element => {
  const [count] = useGlobal<number>('count');
  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
