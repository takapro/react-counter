import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Count from './Count';
import Buttons from './Buttons';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Hello React</h1>
      <Count />
      <Buttons />
    </Provider>
  );
};

export default App;
