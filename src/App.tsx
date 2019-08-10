import { h, FunctionComponent as FC } from 'preact'; /** @jsx h */
import { useState } from 'preact/hooks';
import Count from './Count';
import Buttons from './Buttons';

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React</h1>
      <Count count={count} />
      <Buttons addCount={x => setCount(count + x)} />
    </div>
  );
};

export default App;
