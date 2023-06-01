import { createStore, Reducer, compose } from "redux";
import { TodoState, TodoAction } from "../types/Types";
import { ReduxDevtoolsExtensionCompose } from "@redux-devtools/extension";

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

    case "TOGGLE_TODO":
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

const composeEnhancers: ReduxDevtoolsExtensionCompose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todoReducer, composeEnhancers());

export default store;
