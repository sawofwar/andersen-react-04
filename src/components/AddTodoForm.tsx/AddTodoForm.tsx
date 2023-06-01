import { useState } from "react";
import { useDispatch } from "react-redux";

import { PlusIcon } from "@heroicons/react/24/outline";

import { addTodo } from "../../store/actions";

import "./AddTodoForm.css";

import store from "../../store/store";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        title,
        active: true,
      };

      dispatch(addTodo(newTodo));
      setTitle("");
    }

    console.log(store.getState());
  };

  return (
    <div className="add-todo-form">
      <input
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="add-todo-input"
      />
      <button onClick={handleAddTodo} className="add-todo-btn">
        <PlusIcon className="h-6 w-6 add-todo-svg" />
      </button>
    </div>
  );
};

export default AddTodoForm;
