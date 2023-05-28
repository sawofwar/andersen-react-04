export interface Todo {
  id: number;
  title: string;
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

export type TodoAction = AddTodoAction | RemoveTodoAction;
