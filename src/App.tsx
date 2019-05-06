import React from 'react';
import { setGlobal } from 'reactn';
import Count from './Count';
import Buttons from './Buttons';

setGlobal({
  count: 0
});

const App = (): JSX.Element => {
  return (
    <>
      <h1>Hello React</h1>
      <Count />
      <Buttons />
    </>
  );
};

export default App;
