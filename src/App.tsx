import React, { useState } from 'react';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello React</h1>
      <div className='count'>{count}</div>
      <div className='buttons'>
        <button onClick={() => { setCount(count - 1); return false; }}>-</button>
        <button onClick={() => { setCount(count + 1); return false; }}>+</button>
      </div>
    </>
  );
};

export default App;
