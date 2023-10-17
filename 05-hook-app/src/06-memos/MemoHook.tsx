import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterations: number = 100): string => {
  for (let i = 0; i < iterations; i++) {
    console.log('Here we go...');
  }

  return `Done! ${iterations} iterations.`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className='btn btn-primary' onClick={() => increment(1)}>
        +1
      </button>

      <button
        className='btn btn-outline-success'
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
