import { useSelector } from "react-redux";
import { TodoState } from "../../types/Types";

import "./TaskCounter.css";

const TaskCounter = () => {
  const todos = useSelector((state: TodoState) => state.todos);

  return (
    <div className="task-counter">
      <p>
        Active tasks:{" "}
        <span className="active-tasks">
          {todos.filter((todo) => todo.active).length}
        </span>
      </p>
    </div>
  );
};

export default TaskCounter;
