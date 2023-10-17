/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }: any) => {
  return (
    <>
      <ul className='list-group'>
        {todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};
