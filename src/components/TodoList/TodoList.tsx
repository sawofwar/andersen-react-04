import { useSelector, useDispatch } from "react-redux";

import "./TodoList.css";
import { TodoState } from "../../types/Types";
import { removeTodo, editTodo } from "../../store/actions";

import { useState } from "react";

const TodoList = () => {
  const todos = useSelector((state: TodoState) => state.todos);
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editTodoText, setEditTodoText] = useState("");
  const dispatch = useDispatch();

  const handleEditButtonClick = (id: number, title: string) => {
    setEditTodoId(id);
    setEditTodoText(title);
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleEditInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditTodoText(event.target.value);
  };

  const handleEditTodo = () => {
    if (editTodoId !== null && editTodoText.trim() !== "") {
      dispatch(
        editTodo({
          id: editTodoId,
          title: editTodoText.trim(),
        })
      );
      setEditTodoId(null);
      setEditTodoText("");
    }
  };

  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {editTodoId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editTodoText}
                  onChange={handleEditInputChange}
                />
                <button onClick={handleEditTodo}>Save</button>
              </div>
            ) : (
              <div>
                <span>{todo.title}</span>
                <button
                  onClick={() => handleEditButtonClick(todo.id, todo.title)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveTodo(todo.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
