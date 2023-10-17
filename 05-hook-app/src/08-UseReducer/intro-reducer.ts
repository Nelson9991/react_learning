/* eslint-disable @typescript-eslint/no-explicit-any */
import { TodoItem } from '../models/TodoItem';

interface Action {
  type: string;
  payload: TodoItem;
}

const initlalState: TodoItem[] = [
  {
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
  }
];

const todoReducer = (
  state: TodoItem[] = initlalState,
  action?: Action
): TodoItem[] => {
  if (action?.type === '[TODO] add todo') {
    return [...state, action?.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false
};

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo
};

// actualizar el estado de los todos mediante el reducer
todos = todoReducer(todos, addTodoAction);
console.log(todos);
