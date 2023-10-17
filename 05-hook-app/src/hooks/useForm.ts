import { ChangeEvent, useState } from 'react';

export function useForm<T>(initialForm = {}) {
  const [formState, setFormState] = useState<T>(initialForm as T);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm = () => {
    setFormState(initialForm as T);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm
  };
}
