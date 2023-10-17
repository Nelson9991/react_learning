import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifResponse } from '../../models/gif-response.model';

jest.mock('../../hooks/useFetcwhGifs');

describe('<GifGrid/> component Tests', () => {
  const category = 'Naruto';

  test('should render loading initialy', () => {
    (useFetchGifs as jest.Mock).mockReturnValue({
      gifs: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('should render items when gifs are loaded by useFecthGifs', () => {
    const gifs: GifResponse[] = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/any/thing.jpg'
      },
      {
        id: 'DEF',
        title: 'Goku',
        url: 'https://localhost/any/thing2.jpg'
      }
    ];

    (useFetchGifs as jest.Mock).mockReturnValue({
      gifs: gifs,
      isLoading: false
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  });
});
