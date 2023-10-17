import { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (factor: number = 1) => {
    setCounter(counter + factor);
  };

  const decrement = (factor: number = 1) => {
    if (counter == 0) return;
    setCounter(counter - factor);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset
  };
};
