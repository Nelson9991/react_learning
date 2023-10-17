import React from 'react';

interface Props {
  increment: (num: number) => void;
}

export const ShowIncrement = React.memo(({ increment }: Props) => {
  console.log('Me volví a generar :(');

  return (
    <button className='btn btn-success' onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});
