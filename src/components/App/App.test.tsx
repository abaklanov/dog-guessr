import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("shows the name of the app and logo", () => {
    render(<App />);
    expect(screen.getByText("dog-guessr")).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
  it("shows the current score", () => {
    render(<App />);
    expect(screen.getByText("score: 0")).toBeInTheDocument();
  });
});
