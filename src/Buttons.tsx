import { h } from 'preact';
import useStoreon from 'storeon/preact';
import { State } from './store';

const Buttons = (): h.JSX.Element => {
  const { dispatch } = useStoreon<State>('count');
  return (
    <div className='buttons'>
      <button onClick={() => { dispatch('decrement'); return false; }}>-</button>
      <button onClick={() => { dispatch('increment'); return false; }}>+</button>
    </div>
  );
};

export default Buttons;
