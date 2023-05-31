import AddTodoForm from "../../components/AddTodoForm.tsx/AddTodoForm";
import TodoList from "../../components/TodoList/TodoList";

import "./Inactive.css";

const Inactive = () => {
  return (
    <>
      <div className="small-wrapper">
        <AddTodoForm />
        <TodoList active={false} />
      </div>
    </>
  );
};

export default Inactive;
