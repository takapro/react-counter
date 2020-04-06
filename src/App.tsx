import React from 'react';
import { StoreContext } from 'storeon/react';
import { store } from './store';
import Count from './Count';
import Buttons from './Buttons';

const App: React.FC = () => {
  return (
    <StoreContext.Provider value={store}>
      <h1>Hello React</h1>
      <Count />
      <Buttons />
    </StoreContext.Provider>
  );
};

export default App;
