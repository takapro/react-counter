import React from 'react';

const Buttons: React.FC<{ addCount: (x: number) => void }> = ({ addCount }) => {
  return (
    <div className='buttons'>
      <button onClick={() => { addCount(-1); return false; }}>-</button>
      <button onClick={() => { addCount(+1); return false; }}>+</button>
    </div>
  );
};

export default Buttons;
