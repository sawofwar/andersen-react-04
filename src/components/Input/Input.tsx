import "./Input.css";

const Input = () => {
  return (
    <form className="input-form">
      <label htmlFor="todo-input">Add your todo</label>
      <input type="text" placeholder="Buy groceries" id="todo-input" />
    </form>
  );
};

export default Input;
