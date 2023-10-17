import { fireEvent, render, screen } from '@testing-library/react';
import GifExpertApp from '../GifExpertApp';

describe('<GifExpertApp/> component test', () => {
  const category = 'Naruto';

  test('should add a new category', async () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.change(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(screen.getByText(category));
  });

  test('should not add the same category twice', async () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.change(input, { target: { value: category } });
    fireEvent.submit(form);

    fireEvent.change(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(screen.getAllByText(category).length).toBe(1);
  });
});
