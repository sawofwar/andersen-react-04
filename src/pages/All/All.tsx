import AddTodoForm from "../../components/AddTodoForm.tsx/AddTodoForm";
import TodoList from "../../components/TodoList/TodoList";

import "./All.css";

const All = () => {
  return (
    <>
      <div className="small-wrapper">
        <AddTodoForm />
        <TodoList active={null} />
      </div>
    </>
  );
};

export default All;
