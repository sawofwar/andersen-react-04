import { useState } from "react";
import { useDispatch } from "react-redux";

import "./AddTodoForm.css";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        title,
      };

      dispatch({ type: "ADD_TODO", payload: newTodo });
      setTitle("");
    }
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
        Add
      </button>
    </div>
  );
};

export default AddTodoForm;
