import { h, FunctionComponent as FC } from 'preact'; /** @jsx h */
import { useStoreon } from 'storeon/preact';
import { State } from './store';

const Buttons: FC = () => {
  const { dispatch } = useStoreon<State>('count');

  return (
    <div className='buttons'>
      <button onClick={() => { dispatch('decrement'); return false; }}>-</button>
      <button onClick={() => { dispatch('increment'); return false; }}>+</button>
    </div>
  );
};

export default Buttons;
