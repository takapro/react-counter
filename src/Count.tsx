import { h, FunctionComponent as FC } from 'preact'; /** @jsx h */

const Count: FC<{ count: number }> = ({ count }) => {
  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
