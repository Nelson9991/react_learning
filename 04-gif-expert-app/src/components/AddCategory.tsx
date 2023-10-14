import { ChangeEvent, useState } from 'react';

interface Props {
  onNewCategory: (newCategory: string) => void;
}

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
