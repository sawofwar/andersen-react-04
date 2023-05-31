import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeTodo, editTodo } from "../../store/actions";
import { TodoState } from "../../types/Types";

import EditTodo from "../EditTodo/EditTodo";
import Todo from "../Todo/Todo";

import "./TodoList.css";

const TodoList = ({ active }: { active: boolean | null }) => {
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
        {todos.map((todo) => {
          if (active === true) {
            return todo.active === true ? (
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
                    onEditButtonClick={handleEditButtonClick}
                    onRemoveButtonClick={handleRemoveTodo}
                  />
                )}
              </li>
            ) : null;
          } else if (active === false) {
            return todo.active === false ? (
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
                    onEditButtonClick={handleEditButtonClick}
                    onRemoveButtonClick={handleRemoveTodo}
                  />
                )}
              </li>
            ) : null;
          } else {
            return (
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
                    onEditButtonClick={handleEditButtonClick}
                    onRemoveButtonClick={handleRemoveTodo}
                  />
                )}
              </li>
            );
          }
          // 🔥 li end
        })}
      </ul>
    </div>
  );
};

export default TodoList;
