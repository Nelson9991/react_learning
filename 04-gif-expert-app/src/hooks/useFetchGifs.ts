import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifResponse } from '../models/gif-response.model';

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<GifResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
    isLoading
  };
};
