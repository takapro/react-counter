import React from 'react';
import { useGlobal } from 'reactn';
import Global from './global';

const Buttons: React.FC = () => {
  const [count, setCount] = useGlobal<Global, 'count'>('count');

  return (
    <div className='buttons'>
      <button onClick={() => { setCount(count - 1); return false; }}>-</button>
      <button onClick={() => { setCount(count + 1); return false; }}>+</button>
    </div>
  );
};

export default Buttons;
