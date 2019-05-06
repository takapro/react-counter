import React from 'react';

const Buttons = (props: { addCount: (x: number) => void }): JSX.Element => {
  return (
    <div className='buttons'>
      <button onClick={() => { props.addCount(-1); return false; }}>-</button>
      <button onClick={() => { props.addCount(+1); return false; }}>+</button>
    </div>
  );
};

export default Buttons;
