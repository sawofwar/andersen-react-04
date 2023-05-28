import "./App.css";
import InputWithButton from "./components/InputWithButton/InputWithButton";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <div className="small-wrapper">
        <InputWithButton />

        <TodoList />
      </div>
    </div>
  );
}

export default App;
