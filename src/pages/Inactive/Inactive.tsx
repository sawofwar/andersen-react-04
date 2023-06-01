import AddTodoForm from "../../components/AddTodoForm.tsx/AddTodoForm";
import TodoList from "../../components/TodoList/TodoList";

import Tabs from "../../components/Tabs/Tabs";

import "./Inactive.css";

const Inactive = () => {
  return (
    <>
      <div className="small-wrapper">
        <Tabs />
        <AddTodoForm />
        <TodoList active={false} />
      </div>
    </>
  );
};

export default Inactive;
