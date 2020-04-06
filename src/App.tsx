import { h, FunctionComponent as FC } from 'preact'; /** @jsx h */
import { StoreContext } from 'storeon/preact';
import { store } from './store';
import Count from './Count';
import Buttons from './Buttons';

const App: FC = () => {
  return (
    <StoreContext.Provider value={store}>
      <h1>Hello React</h1>
      <Count />
      <Buttons />
    </StoreContext.Provider>
  );
};

export default App;
