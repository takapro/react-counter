import React from 'react';
import Count from './Count';
import Buttons from './Buttons';
import { CounterProvider } from './Context';

const App: React.FC = () => {
  return (
    <CounterProvider>
      <h1>Hello React</h1>
      <Count />
      <Buttons />
    </CounterProvider>
  );
};

export default App;
