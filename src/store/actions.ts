import { Todo, TodoAction } from "../types/Types";

export const addTodo = (todo: Todo): TodoAction => ({
  type: "ADD_TODO",
  payload: todo,
});

export const removeTodo = (id: number): TodoAction => ({
  type: "REMOVE_TODO",
  payload: id,
});
