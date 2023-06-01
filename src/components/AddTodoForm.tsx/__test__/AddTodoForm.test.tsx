import { render, screen } from "@testing-library/react";
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
});
