import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import store from "../../../store/store";

import AddTodoForm from "../AddTodoForm";

const MockAddTodo = () => {
  return (
    <Provider store={store}>
      <AddTodoForm />
    </Provider>
  );
};

describe("AddTodoForm", () => {
  it("renders without crashing", () => {
    render(<MockAddTodo />);
    const todoForm = screen.getByPlaceholderText(/add todo/i);
    expect(todoForm).toBeInTheDocument();
  });

  it("contains add button", () => {
    render(<MockAddTodo />);
    const addButton = screen.getByTestId("add-button");
    expect(addButton).toBeInTheDocument();
  });

  it("accepts focus on input bar", async () => {
    const user = userEvent.setup();
    render(<MockAddTodo />);
    const todoForm = screen.getByPlaceholderText(/add todo/i);
    await user.click(todoForm);
    expect(todoForm).toHaveFocus();
  });

  it("accepts keyboard input", async () => {
    const user = userEvent.setup();
    render(<MockAddTodo />);
    const todoForm = screen.getByPlaceholderText(/add todo/i);
    await user.click(todoForm);
    await user.keyboard("test");
    expect(todoForm).toHaveValue("test");
  });
});
