import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "./App";

test("Testing homepage on game mode clicks", () => {
  render(<App />);
  const heading = screen.getByText("Rock Paper Scissors");
  expect(heading).toBeInTheDocument();

  const playerVsComputerBtn = screen.getByTestId("playerVsComputerBtn");
  const computerVsComputerBtn = screen.getByTestId("computerVsComputerBtn");

  act(() => {
    playerVsComputerBtn.click();
  });

  const backBtn = screen.getByTestId("backBtn");
  let gameModeTitle = screen.getByText("Player vs Computer");
  expect(gameModeTitle).toBeInTheDocument();

  act(() => {
    backBtn.click();
    computerVsComputerBtn.click();
  });

  gameModeTitle = screen.getByText("Computer Vs Computer");
  expect(gameModeTitle).toBeInTheDocument();
});
