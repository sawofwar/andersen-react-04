import AddTodoForm from "../../components/AddTodoForm.tsx/AddTodoForm";
import TodoList from "../../components/TodoList/TodoList";

import "./Active.css";

const Active = () => {
  return (
    <>
      <div className="small-wrapper">
        <AddTodoForm />
        <TodoList filter="active" />
      </div>
    </>
  );
};

export default Active;
