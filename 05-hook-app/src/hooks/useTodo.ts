/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-UseReducer/todoReducer';

const initialState: never[] = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || '[]');
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo: any) => {
    const action = {
      type: '[TODO] Add',
      payload: todo
    };
    // el dispatch es el que se encarga de enviar la accion al reducer
    dispatch(action);
  };

  const handleDeleteTodo = (todoId: Date) => {
    const action = {
      type: '[TODO] Delete',
      payload: todoId
    };
    dispatch(action);
  };

  const handleToggleTodo = (todoId: Date) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: todoId
    };
    dispatch(action);
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo: any) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
};
