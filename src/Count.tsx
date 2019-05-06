import React from 'react';

const Count = (props: { count: number }): JSX.Element => {
  return (
    <div className='count'>{props.count}</div>
  );
};

export default Count;
