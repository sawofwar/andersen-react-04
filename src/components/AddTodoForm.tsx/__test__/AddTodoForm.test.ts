import { render, screen } from "@testing-library/react";
import AddTodoForm from "../AddTodoForm";

describe("AddTodoForm", () => {
  it("renders without crashing", () => {
    // render(<AddTodoForm />);

    // const todoForm = screen.getByText(/add todo/i);
    // expect(screen.getByText("Add")).toBeInTheDocument();
    render(<AddTodoForm />);
  });
});
