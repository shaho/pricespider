import { vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CitiesList } from ".";

vi.mock("../../services/city", () => ({
  getCities: () => [
    { city: "Houston", admin_name: "Texas", population: "8000000" },
    { city: "Los Angeles", admin_name: "California", population: "4000000" },
    { city: "Chicago", admin_name: "Illinois", population: "2700000" },
  ],
}));

describe("<CitiesList />", () => {
  it("renders the list of cities when search term is empty", () => {
    render(<CitiesList />);
    expect(screen.getByText("Houston")).toBeInTheDocument();
    expect(screen.getByText("Los Angeles")).toBeInTheDocument();
    expect(screen.getByText("Chicago")).toBeInTheDocument();
  });

  it("filters cities based on search term", async () => {
    const { container } = render(<CitiesList />);
    const searchInput = container.querySelector("input");

    searchInput && (await act(async () => userEvent.type(searchInput, "Hou")));
    expect(screen.getByText("Houston")).toBeInTheDocument();
    expect(screen.queryByText("Los Angeles")).not.toBeInTheDocument();
    expect(screen.queryByText("Chicago")).not.toBeInTheDocument();
  });

  it("displays alert when no cities are found", async () => {
    const { container } = render(<CitiesList />);
    const searchInput = container.querySelector("input");
    searchInput &&
      (await act(async () => userEvent.type(searchInput, "Unknown")));
    expect(
      await screen.findByText("No matching item has been found."),
    ).toBeInTheDocument();
  });
});
