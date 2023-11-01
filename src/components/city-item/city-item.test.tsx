import { render, screen } from "@testing-library/react";

import { CityItem } from ".";

const mockCity = {
  city: "The Hague",
  admin_name: "Zuid-Holland",
  population: "548320",
};

describe("<CityItem />", () => {
  it("renders the city item with correct data", () => {
    const style = { backgroundColor: "red" };
    render(<CityItem index={0} style={style} data={{ items: [mockCity] }} />);
    expect(screen.getByText("The Hague")).toBeInTheDocument();
    expect(screen.getByText("Zuid-Holland")).toBeInTheDocument();
    expect(screen.getByText("548320")).toBeInTheDocument();
  });
});
