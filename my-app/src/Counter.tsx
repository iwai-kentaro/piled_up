import React from 'react';

type CounterProps = {
  count: number;
  countUp: () => void;
  countDown: () => void;
  countReset: () => void;
};

const Counter: React.FC<CounterProps> = ({ count, countUp, countDown,countReset }) => {
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={countUp}>Count Up</button>
      <button onClick={countDown}>Count Down</button>
      <button onClick={countReset}>Count Reset</button>
    </div>
  );
};

export default Counter;
