import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../store/actions";

interface TodoProps {
  id: number;
  title: string;
  filter?: string;
  onEditButtonClick: (id: number, title: string) => void;
  onRemoveButtonClick: (id: number) => void;
}

const Todo = ({
  id,
  title,
  filter,
  onEditButtonClick,
  onRemoveButtonClick,
}: TodoProps) => {
  const [strikeThrough, setStrikeThrough] = useState(false);
  const dispatch = useDispatch();

  const checkButtonClickHandler = () => {
    setStrikeThrough(!strikeThrough);
    dispatch(toggleTodo({ id, title }));
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
        ✅
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
        🖊️
      </button>

      <button onClick={handleRemoveTodoButtonClick} className="todo-btn">
        ❌
      </button>
    </div>
  );
};

export default Todo;
