import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EditTodo from "../EditTodo";

const handleEditTodoFunction = vi.fn();

const MockEditTodo = () => {
  const handleEditInputChange = () => {
    console.log("todo edit text changed");
  };

  const handleEditTodo = () => {
    handleEditTodoFunction();
  };

  return (
    <EditTodo
      inputValue="test"
      onChange={handleEditInputChange}
      onEdit={handleEditTodo}
    />
  );
};

describe("EditTodo", () => {
  it("shows edit todo input field", () => {
    render(<MockEditTodo />);
    const editTodoInputField = screen.getByTestId("edit-todo-input");
    expect(editTodoInputField).toBeInTheDocument();
  });

  it("edit todo input field accepts input", () => {
    const user = userEvent.setup();
    render(<MockEditTodo />);
    const editTodoInputField = screen.getByTestId("edit-todo-input");
    user.type(editTodoInputField, "test");
    expect(editTodoInputField).toHaveValue("test");
  });

  it("accepts submit & fires respective function", async () => {
    const user = userEvent.setup();
    render(<MockEditTodo />);
    const editTodoInputField = screen.getByTestId("edit-todo-input");
    await user.type(editTodoInputField, "test");
    await user.click(screen.getByRole("button"));
    expect(handleEditTodoFunction).toHaveBeenCalled();
  });
});
