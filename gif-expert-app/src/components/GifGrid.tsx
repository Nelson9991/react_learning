import GifItem from './GifItem';
import { useFecthGifs } from '../hooks/useFecthGifs';

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { gifs, isLoading } = useFecthGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        // If isLoading is true, then show the loading message
        isLoading && <p>Loading...</p>
      }

      <div className='card-grid'>
        {gifs.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
