/* eslint-disable @typescript-eslint/no-explicit-any */

export const todoReducer = (intialState: any = [], action: any) => {
  switch (action.type) {
    case '[TODO] Add':
      return [...intialState, action.payload];

    case '[TODO] Delete':
      // regresa un nuevo arreglo con todos los elementos que cumplan la condicion
      return intialState.filter((todo: any) => todo.id !== action.payload);

    case '[TODO] Toggle Todo':
      // regresa un nuevo arreglo con todos los elementos que cumplan la condicion
      return intialState.map((todo: any) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          };
        }

        return todo;
      });

    default:
      return intialState;
  }
};
