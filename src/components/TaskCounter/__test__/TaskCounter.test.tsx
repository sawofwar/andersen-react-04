import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../../store/store";

import TaskCounter from "../TaskCounter";

const MockTaskCounter = () => {
  return (
    <Provider store={store}>
      <Router>
        <TaskCounter />
      </Router>
    </Provider>
  );
};

describe("TaskCounter", () => {
  it("renders with 0", () => {
    render(<MockTaskCounter />);
    const taskCounter = screen.getByText(/active tasks/i);
    expect(taskCounter).toHaveTextContent("Active tasks: 0");
  });
});
