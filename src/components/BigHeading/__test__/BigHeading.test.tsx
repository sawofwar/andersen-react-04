import { render, screen } from "@testing-library/react";

import BigHeading from "../BigHeading";

describe("AddTodoForm", () => {
  it("contains passed text", () => {
    render(<BigHeading headingText="Passed heading text" />);
    const headingElement = screen.getByText(/passed heading text/i);
    expect(headingElement).toBeInTheDocument();
  });
});
