/* eslint-disable @typescript-eslint/no-explicit-any */
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }: any) => {
  return (
    <>
      <li
        key={todo.id}
        className='list-group-item d-flex justify-content-between align-items-center'
      >
        <span
          className={`${todo.done ? 'text-decoration-line-through' : ''}`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button
          className='btn btn-danger'
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
