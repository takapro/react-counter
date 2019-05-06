import React, { useState } from 'react';
import Count from './Count';
import Buttons from './Buttons';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello React</h1>
      <Count count={count} />
      <Buttons addCount={x => setCount(count + x)} />
    </>
  );
};

export default App;
