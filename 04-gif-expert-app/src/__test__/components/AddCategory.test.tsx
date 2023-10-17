import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../components';

describe('<AddCategory /> Tests', () => {
  test('should change text input value', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Naruto' } });

    expect(input.value).toBe('Naruto');
  });

  test('should call onNewCategory if input have value', () => {
    const inputValue = 'Naruto';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onNewCategory if input have not value', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.submit(form);

    // expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
