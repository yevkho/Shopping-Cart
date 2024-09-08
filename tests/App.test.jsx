import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

// import pages
import Home from "../src/Pages/Home";
// import Shop from "../src/Pages/Shop";
// import ShopItem from "../src/Pages/ShopItem";
// import ErrorPage from "../src/Pages/ErrorPage";
import RootLayout from "../src/Layouts/RootLayout";

// DASHBOARD
describe("Dashboard", () => {
  it("presence of 'a' Nav links", () => {
    render(
      <MemoryRouter>
        {" "}
        <RootLayout />
      </MemoryRouter>
    );
    screen.debug();

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument;
    expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument;
    expect(screen.getByRole("button", { name: "Cart" })).toBeInTheDocument;
  });

  it("Cart button click revealing side panel", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        {" "}
        <RootLayout />
      </MemoryRouter>
    );
    screen.debug();

    const button = screen.getByRole("button", { name: "Cart" });

    await user.click(button);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument;
  });
});

//HOME
describe("Home", () => {
  it("renders headline 'Home'", () => {
    render(<Home />);
    screen.debug();

    // expect(screen.getByRole("heading")).toBeInTheDocument;
    expect(screen.getByRole("heading").textContent).toMatch("Home");
  });

  it("basic snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
