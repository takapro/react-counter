import React from 'react';
import { Provider } from 'storeon/react/context';
import { store } from './store';
import Count from './Count';
import Buttons from './Buttons';

const App = (): JSX.Element => {
  return (
    <Provider value={store}>
      <h1>Hello React</h1>
      <Count />
      <Buttons />
    </Provider>
  );
};

export default App;
