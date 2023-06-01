import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../store/actions";
import { TodoState } from "../../types/Types";

import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";

interface TodoProps {
  id: number;
  title: string;
  onEditButtonClick: (id: number, title: string) => void;
  onRemoveButtonClick: (id: number) => void;
}

const Todo = ({
  id,
  title,
  onEditButtonClick,
  onRemoveButtonClick,
}: TodoProps) => {
  const todo = useSelector((state: TodoState) => {
    return state.todos.find((todo) => todo.id === id);
  });

  const [strikeThrough, setStrikeThrough] = useState(!todo?.active);
  const dispatch = useDispatch();

  const checkButtonClickHandler = () => {
    setStrikeThrough(!strikeThrough);
    dispatch(toggleTodo({ id, title, active: !todo?.active }));
  };

  const handleRemoveTodoButtonClick = () => {
    onRemoveButtonClick(id);
  };

  const handleEditButtonClick = () => {
    onEditButtonClick(id, title);
  };

  return (
    <div className="todo-main">
      <button className="check-btn" onClick={checkButtonClickHandler}>
        <CheckIcon className="h-6 w-6 text-gray-500 icon-svg" />
      </button>

      <span
        style={
          strikeThrough
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </span>

      <button onClick={() => handleEditButtonClick()} className="todo-btn">
        <PencilIcon className="h-6 w-6 text-gray-500 icon-svg" />
      </button>

      <button onClick={handleRemoveTodoButtonClick} className="todo-btn">
        <TrashIcon className="h-6 w-6 text-gray-500 icon-svg" />
      </button>
    </div>
  );
};

export default Todo;
