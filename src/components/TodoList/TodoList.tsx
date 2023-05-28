// import { useEffect } from "react";

// import store from "../../store";
import { useSelector, useDispatch } from "react-redux";

import "./TodoList.css";
import { TodoState } from "../../types/Types";
import { removeTodo } from "../../store/actions";

const TodoList = () => {
  const todos = useSelector((state: TodoState) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button
              onClick={() => {
                handleRemoveTodo(todo.id);
              }}
              className="remove-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
