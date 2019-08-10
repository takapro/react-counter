import { h, FunctionComponent as FC } from 'preact'; /** @jsx h */
import { Provider } from 'storeon/preact/context';
import { store } from './store';
import Count from './Count';
import Buttons from './Buttons';

const App: FC = () => {
  return (
    <Provider value={store}>
      <h1>Hello React</h1>
      <Count />
      <Buttons />
    </Provider>
  );
};

export default App;
