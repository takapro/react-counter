import { h } from 'preact';

const Buttons = (props: { addCount: (x: number) => void }): h.JSX.Element => {
  return (
    <div className='buttons'>
      <button onClick={() => { props.addCount(-1); return false; }}>-</button>
      <button onClick={() => { props.addCount(+1); return false; }}>+</button>
    </div>
  );
};

export default Buttons;
