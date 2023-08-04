import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App.js";

describe("App Component", () => {
  it('renders when "/" path is matched'),
    () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );
      expect(screen.getByText("Welcome to Home!").toBeInTheDocument());
    };

  it('renders when "/Profile" path is matched'),
    () => {
      render(
        <MemoryRouter initialEntries={["/Profile"]}>
          <App />
        </MemoryRouter>
      );
      expect(screen.getByText("This is Tirou's profie.").toBeInTheDocument());
    };

  it("should handle back button press"),
    () => {
      const mockLocation = { href: "" };
      delete window.location;
      window.location = mockLocation;
      window.removeEventListener = jest.fn();
      render(<App />);
      window.dispatchEvent(new PopStateEvent("popState"));
      expect(window.location.href).toBe("/");
    };

  it("check the work experience page"),
    () => {
      render(
        <MemoryRouter initialEntries={["/work"]}>
          <App />
        </MemoryRouter>
      );
      expect(screen.getByText("Work Expeience!").toBeInTheDocument());
    };
});
