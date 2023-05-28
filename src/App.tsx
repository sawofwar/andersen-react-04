import { Provider } from "react-redux";

import AddTodoForm from "./components/AddTodoForm.tsx/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";

import store from "./store/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <h1>Todo List</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
