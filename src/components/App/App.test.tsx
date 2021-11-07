import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("shows the header: name of the app, logo", () => {
    render(<App />);
    expect(screen.getByText("dog-guessr")).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
  it("shows the main image for guessing", () => {
    render(<App />);
    expect(screen.getByAltText("main-image")).toBeInTheDocument();
  });
  it("shows four buttons to select an answer", () => {
    render(<App />);
    expect(screen.getAllByRole("guess-button").length).toBe(4);
  });
  it("shows the score in two places", () => {
    render(<App />);
    expect(screen.getAllByText("score: 0").length).toBe(2);
  });
});
