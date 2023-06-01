import AddTodoForm from "../../components/AddTodoForm.tsx/AddTodoForm";
import TodoList from "../../components/TodoList/TodoList";

import Tabs from "../../components/Tabs/Tabs";

import "./All.css";

const All = () => {
  return (
    <>
      <div className="small-wrapper">
        <Tabs />

        <AddTodoForm />
        <TodoList active={null} />
      </div>
    </>
  );
};

export default All;
