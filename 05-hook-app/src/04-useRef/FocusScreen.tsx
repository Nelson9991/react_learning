import { LegacyRef, useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>();

  const handleClick = () => {
    inputRef.current?.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef as LegacyRef<HTMLInputElement>}
        type='text'
        placeholder='Ingrese su nombre'
        className='form-control mt-2'
      />

      <button className='btn btn-success mt-2' onClick={handleClick}>
        Set Focus
      </button>
    </>
  );
};
