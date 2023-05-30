import { useState } from "react";

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
  const [strikeThrough, setStrikeThrough] = useState(false);

  const checkButtonClickHandler = () => {
    setStrikeThrough(!strikeThrough);
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
