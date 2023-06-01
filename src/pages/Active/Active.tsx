import AddTodoForm from "../../components/AddTodoForm.tsx/AddTodoForm";
import TodoList from "../../components/TodoList/TodoList";

import Tabs from "../../components/Tabs/Tabs";

import "./Active.css";

const Active = () => {
  return (
    <>
      <div className="small-wrapper">
        <Tabs />

        <AddTodoForm />
        <TodoList active={true} />
      </div>
    </>
  );
};

export default Active;
