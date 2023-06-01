import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../../store/store";

import Tabs from "../Tabs";

const MockTabs = () => {
  return (
    <Provider store={store}>
      <Router>
        <Tabs />
      </Router>
    </Provider>
  );
};

describe("Tabs", () => {
  it("shows all three tabs", () => {
    render(<MockTabs />);
    const allTab = screen.getByText("All");
    const activeTab = screen.getByText("Active");
    const inactiveTab = screen.getByText("Inactive");
    const tabs = [allTab, activeTab, inactiveTab];
    tabs.forEach((tab) => {
      expect(tab).toBeInTheDocument();
    });
  });

  it("redirects to all tab on click", async () => {
    const user = userEvent.setup();
    render(<MockTabs />);
    const allTab = screen.getByText("All");
    await user.click(allTab);
    expect(window.location.pathname).toBe("/all");
  });

  it("redirects to active tab on click", async () => {
    const user = userEvent.setup();
    render(<MockTabs />);
    const allTab = screen.getByText("Active");
    await user.click(allTab);
    expect(window.location.pathname).toBe("/active");
  });

  it("redirects to inactive tab on click", async () => {
    const user = userEvent.setup();
    render(<MockTabs />);
    const allTab = screen.getByText("Inactive");
    await user.click(allTab);
    expect(window.location.pathname).toBe("/inactive");
  });

  it("colours active tab", async () => {
    const user = userEvent.setup();
    render(<MockTabs />);
    const allTab = screen.getByText("All");
    await user.click(allTab);
    expect(allTab).toHaveStyle("color: var(--dark-blue)");

    const activeTab = screen.getByText("Active");
    await user.click(activeTab);
    expect(activeTab).toHaveStyle("color: var(--dark-blue)");

    const inactiveTab = screen.getByText("Inactive");
    await user.click(inactiveTab);
    expect(inactiveTab).toHaveStyle("color: var(--dark-blue)");
  });
});
