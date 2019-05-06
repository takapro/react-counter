import { h } from 'preact';
import { Provider } from 'storeon/preact/context';
import { store } from './store';
import Count from './Count';
import Buttons from './Buttons';

const App = (): h.JSX.Element => {
  return (
    <Provider value={store}>
      <h1>Hello React</h1>
      <Count />
      <Buttons />
    </Provider>
  );
};

export default App;
