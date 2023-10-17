import { useForm } from '../hooks';
/* eslint-disable @typescript-eslint/no-explicit-any */

interface TodoForm {
  todoDesc: string;
}

const initialForm: TodoForm = {
  todoDesc: ''
};

export const AddTodo = ({ onNewTodo }: any) => {
  const { todoDesc, onInputChange, onResetForm } =
    useForm<TodoForm>(initialForm);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (todoDesc.trim().length <= 0) return;

    onNewTodo({
      id: new Date().getTime(),
      description: todoDesc,
      done: false
    });

    onResetForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={todoDesc}
          type='text'
          name='todoDesc'
          placeholder='¿Qué hay que hacer?'
          className='form-control'
          onChange={onInputChange}
        />
        <button type='submit' className='btn btn btn-outline-primary mt-2'>
          Agregar
        </button>
      </form>
    </>
  );
};
