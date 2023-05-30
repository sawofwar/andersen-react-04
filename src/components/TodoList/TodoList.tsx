import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import "./TodoList.css";
import { TodoState } from "../../types/Types";
import { removeTodo, editTodo } from "../../store/actions";

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

  const handleCheckButtonClick = (event: React.MouseEvent) => {
    console.log(todos);
  };

  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        {todos.map((todo) => (
          // 🔥 li start

          <li key={todo.id} className="todo-item">
            {editTodoId === todo.id ? (
              // 🔥🔥 edit todo block

              <div className="edit-todo">
                <input
                  type="text"
                  value={editTodoText}
                  onChange={handleEditInputChange}
                  autoFocus
                />

                {/* 🔥🔥🔥 submit edited todo */}
                <button onClick={handleEditTodo} className="todo-btn">
                  💾
                </button>

                {/* // 🔥🔥 edit todo block end */}
              </div>
            ) : (
              // 🔥🔥 main todo block

              <div className="todo-main">
                {/* 🔥🔥🔥 finish todo button */}

                <button className="check-btn" onClick={handleCheckButtonClick}>
                  ✅
                </button>

                {/* 🔥🔥🔥 actual todo text */}

                <span>{todo.title}</span>

                {/* 🔥🔥🔥 edit todo trigger button  */}

                <button
                  onClick={() => handleEditButtonClick(todo.id, todo.title)}
                  className="todo-btn"
                >
                  🖊️
                </button>

                {/* 🔥🔥🔥 remove todo trigger button  */}

                <button
                  onClick={() => handleRemoveTodo(todo.id)}
                  className="todo-btn"
                >
                  ❌
                </button>

                {/* 🔥🔥 main todo block end */}
              </div>
              // 🔥 li end
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
