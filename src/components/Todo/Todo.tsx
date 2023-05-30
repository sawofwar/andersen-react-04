type CheckButtonClickEventType = React.MouseEvent<HTMLButtonElement>;

interface TodoProps {
  id: number;
  title: string;
  onCheckButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onEditButtonClick: (id: number, title: string) => void;
  onRemoveButtonClick: (id: number) => void;
}

const Todo = ({
  onCheckButtonClick,
  id,
  title,
  onEditButtonClick,
  onRemoveButtonClick,
}: TodoProps) => {
  const checkButtonClickHandler = (event: CheckButtonClickEventType) => {
    onCheckButtonClick(event);
  };

  const handleRemoveTodoButtonClick = () => {
    onRemoveButtonClick(id);
  };

  const handleEditButtonClick = (id: number, title: string) => {
    onEditButtonClick(id, title);
  };

  return (
    <div className="todo-main">
      <button className="check-btn" onClick={checkButtonClickHandler}>
        ✅
      </button>

      <span>{title}</span>

      <button
        onClick={() => handleEditButtonClick(id, title)}
        className="todo-btn"
      >
        🖊️
      </button>

      <button onClick={handleRemoveTodoButtonClick} className="todo-btn">
        ❌
      </button>
    </div>
  );
};

export default Todo;
