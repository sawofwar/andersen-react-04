import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        <li className="todo"> Buy groceries </li>
        <li> Walk the dog </li>
        <li> Do laundry </li>
      </ul>
    </div>
  );
};

export default TodoList;
