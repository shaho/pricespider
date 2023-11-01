import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("<Header />", () => {
  it("should render the header component with correct text", () => {
    render(<Header />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toBe("🇳🇱 Netherlands Cities Database");
  });
});
