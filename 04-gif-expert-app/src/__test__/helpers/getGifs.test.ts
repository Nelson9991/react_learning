import { getGifs } from '../../helpers/getGifs';
import { GifResponse } from '../../models/gif-response.model';

describe('getGifs() Tests', () => {
  test('should return a gifs array', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual<GifResponse>({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });
});
