import { LegacyRef, useLayoutEffect, useRef, useState } from 'react';
import { ApiResponse } from '../models/ApiResponse';

interface Props {
  data: ApiResponse | null;
  loading: boolean;
  increment: () => void;
}

export const CharacterCard = ({ data, loading, increment }: Props) => {
  const imgRef = useRef<HTMLImageElement>();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!imgRef.current) return;
    const { height, width } = imgRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [data]);

  return (
    <>
      <div className='card' style={{ width: '18rem' }}>
        <img
          ref={imgRef as LegacyRef<HTMLImageElement>}
          src={data?.image}
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{data?.name}</h5>
          <p className='card-text'>
            {data?.status} - {data?.species}
          </p>
          <button
            className='btn btn-primary'
            disabled={loading}
            onClick={() => increment()}
          >
            Next Character
          </button>
        </div>
      </div>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
