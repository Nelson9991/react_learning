import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components';
import { GifResponse } from '../../models/gif-response.model';

describe('Test in <GifItem/>', () => {
  const gif: GifResponse = {
    id: 'ABC',
    title: 'A title',
    url: 'https://localhost/any/thing.jpg'
  };

  test('snapshot must match', () => {
    const { container } = render(<GifItem gif={gif} />);
    expect(container).toMatchSnapshot();
  });

  test('should render an img with proper src and alt', () => {
    render(<GifItem gif={gif} />);
    // screen.debug(); // sirve para ver el contenido del render()
    // expect((screen.getByRole('img') as HTMLImageElement).src).toBe(gif.url);
    // expect((screen.getByRole('img') as HTMLImageElement).alt).toBe(gif.title);
    const { src, alt } = screen.getByRole('img') as HTMLImageElement;
    expect(src).toBe(gif.url);
    expect(alt).toBe(gif.title);
  });

  test('should render the gif title in component', () => {
    render(<GifItem gif={gif} />);
    expect(screen.getByText(gif.title)).toBeTruthy();
  });
});
