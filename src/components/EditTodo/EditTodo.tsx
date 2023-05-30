type InputChangeEventType = React.ChangeEvent<HTMLInputElement>;
type EditButtonClickEventType = React.MouseEvent<HTMLButtonElement>;

interface EditTodoProps {
  inputValue: string;
  onChange: (event: InputChangeEventType) => void;
  onEdit: (event: EditButtonClickEventType) => void;
}

const EditTodo = ({ inputValue, onChange, onEdit }: EditTodoProps) => {
  const inputChangeHandler = (event: InputChangeEventType) => {
    onChange(event);
  };

  const editButtonClickHandler = (event: EditButtonClickEventType) => {
    onEdit(event);
  };

  return (
    <div className="edit-todo">
      <input
        type="text"
        value={inputValue}
        onChange={inputChangeHandler}
        autoFocus
      />

      {/* 🔥🔥🔥 submit edited todo */}
      <button onClick={editButtonClickHandler} className="todo-btn">
        💾
      </button>
    </div>
  );
};

export default EditTodo;
