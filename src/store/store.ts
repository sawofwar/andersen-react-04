import { createStore, Reducer } from "redux";
import { TodoState, TodoAction } from "../types/Types";

const initialState: TodoState = {
  todos: [],
};

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
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
