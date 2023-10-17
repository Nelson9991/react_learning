import { memo } from 'react';

interface Props {
  value: number;
}

export const Small = memo(({ value }: Props) => {
  console.log('Me volví a llamar :(');

  return <small>{value}</small>;
});
