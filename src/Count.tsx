import { h } from 'preact';
import useStoreon from 'storeon/preact';
import { State } from './store';

const Count = (): h.JSX.Element => {
  const { count } = useStoreon<State>('count');
  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
