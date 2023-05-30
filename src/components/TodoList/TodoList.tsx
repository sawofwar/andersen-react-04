import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import "./TodoList.css";
import { TodoState } from "../../types/Types";
import { removeTodo, editTodo } from "../../store/actions";

import EditTodo from "../EditTodo/EditTodo";
import Todo from "../Todo/Todo";

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

  const handleEditTodo = (event: React.MouseEvent) => {
    console.log(event.target);

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

  const handleCheckButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(todos);
    console.log(event);
  };

  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        {todos.map((todo) => (
          // 🔥 li start

          <li key={todo.id} className="todo-item">
            {editTodoId === todo.id ? (
              <EditTodo
                inputValue={editTodoText}
                onChange={handleEditInputChange}
                onEdit={handleEditTodo}
              />
            ) : (
              <Todo
                id={todo.id}
                title={todo.title}
                onCheckButtonClick={handleCheckButtonClick}
                onEditButtonClick={handleEditButtonClick}
                onRemoveButtonClick={handleRemoveTodo}
              />

              // 🔥 li end
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
