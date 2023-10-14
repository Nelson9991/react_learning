import { GifResponse } from '../models/gif-response.model';

export const getGifs = async (category: string): Promise<GifResponse[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=e3bjDCDD7rjXZx4u2zPD5qY5YBXUAigO&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
};
