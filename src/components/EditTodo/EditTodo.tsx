import { CheckIcon } from "@heroicons/react/24/solid";

type InputChangeEventType = React.ChangeEvent<HTMLInputElement>;

interface EditTodoProps {
  inputValue: string;
  onChange: (event: InputChangeEventType) => void;
  onEdit: () => void;
}

const EditTodo = ({ inputValue, onChange, onEdit }: EditTodoProps) => {
  const inputChangeHandler = (event: InputChangeEventType) => {
    onChange(event);
  };

  const editButtonClickHandler = () => {
    onEdit();
  };

  return (
    <div className="edit-todo">
      <input
        type="text"
        value={inputValue}
        onChange={inputChangeHandler}
        autoFocus
        className="edit-todo-input"
        maxLength={30}
      />

      <button onClick={editButtonClickHandler} className="todo-btn">
        <CheckIcon className="h-6 w-6 text-gray-500 icon-svg" />
      </button>
    </div>
  );
};

export default EditTodo;
