import { h } from 'preact';

const Count = (props: { count: number }): h.JSX.Element => {
  return (
    <div className='count'>{props.count}</div>
  );
};

export default Count;
