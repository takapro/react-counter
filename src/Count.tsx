import { h, FunctionComponent as FC } from 'preact'; /** @jsx h */
import useStoreon from 'storeon/preact';
import { State } from './store';

const Count: FC = () => {
  const { count } = useStoreon<State>('count');

  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
