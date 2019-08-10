import React from 'react';

const Count: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className='count'>{count}</div>
  );
};

export default Count;
