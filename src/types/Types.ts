export interface Todo {
  id: number;
  title: string;
  active?: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export interface TodoState {
  todos: Todo[];
}

export interface AddTodoAction {
  type: "ADD_TODO";
  payload: Todo;
}

export interface RemoveTodoAction {
  type: "REMOVE_TODO";
  payload: number;
}

export interface EditTodoAction {
  type: "EDIT_TODO";
  payload: Todo;
}

export interface ToggleTodoAction {
  type: "TOGGLE_TODO";
  payload: Todo;
}

export type TodoAction =
  | AddTodoAction
  | RemoveTodoAction
  | EditTodoAction
  | ToggleTodoAction;
