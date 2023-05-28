import { createStore, Reducer } from "redux";

// Define interface for the state
interface TodoState {
  todos: Todo[];
}

// Define interface for the todo object
interface Todo {
  id: number;
  title: string;
}

// Define initial state
const initialState: TodoState = {
  todos: [],
};

// Define actions and action types
interface AddTodoAction {
  type: "ADD_TODO";
  payload: Todo;
}

interface RemoveTodoAction {
  type: "REMOVE_TODO";
  payload: number; // Assuming todo ID is a number
}

type TodoAction = AddTodoAction | RemoveTodoAction;

// Define reducer function
const todoReducer: Reducer<TodoState, TodoAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(todoReducer);

export default store;
