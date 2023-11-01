import { render, screen } from "@testing-library/react";

import { Footer } from ".";

describe("<Footer />", () => {
  it("renders the footer component with correct text and link", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`Copyright © PriceSpider ${currentYear}.`),
    ).toBeInTheDocument();
  });
});
