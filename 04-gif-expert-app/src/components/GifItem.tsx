import { GifResponse } from '../models/gif-response.model';

interface Props {
  gif: GifResponse;
}

export const GifItem = ({ gif }: Props) => {
  return (
    <div className='card'>
      <img src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
};

export default GifItem;
