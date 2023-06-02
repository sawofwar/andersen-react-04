import { screen, render } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import store from "../../../store/store";
import Todo from "../Todo";

const mockOnEditButtonClick = vi.fn();
const mockOnRemoveButtonClick = vi.fn();

const MockTodo = () => {
  return (
    <Provider store={store}>
      <Todo
        id={1}
        title="123"
        onEditButtonClick={mockOnEditButtonClick}
        onRemoveButtonClick={mockOnRemoveButtonClick}
      />
    </Provider>
  );
};

describe("Todo", () => {
  it("renders properly", () => {
    render(<MockTodo />);
  });

  it("renders check button", () => {
    render(<MockTodo />);
    const checkButton = screen.getByTestId("check-btn");
    expect(checkButton).toBeInTheDocument();
  });

  it("fires onRemoveButton click on clicking remove button", async () => {
    const user = userEvent.setup();
    render(<MockTodo />);
    const removeButton = screen.getByTestId("remove-btn");
    await user.click(removeButton);
    expect(mockOnRemoveButtonClick).toHaveBeenCalled();
  });

  it("fires onEditButtonClick on click on clicking edit button", async () => {
    const user = userEvent.setup();
    render(<MockTodo />);
    const editButton = screen.getByTestId("edit-btn");
    await user.click(editButton);
    expect(mockOnEditButtonClick).toHaveBeenCalled();
  });
});
