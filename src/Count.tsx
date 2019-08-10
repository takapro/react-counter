import React from 'react';
import { useGlobal } from 'reactn';
import Global from './global';

const Count: React.FC = () => {
  const [count] = useGlobal<Global, 'count'>('count');

  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
