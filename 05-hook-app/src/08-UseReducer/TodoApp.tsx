/* eslint-disable @typescript-eslint/no-explicit-any */
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo
  } = useTodo();

  return (
    <>
      <h1>
        TODO App: ({todosCount}), <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <AddTodo onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
