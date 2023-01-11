import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import PlayerVsCPU from "./index";
import { defaultRules } from "../../commons/defaultRules";

test("renders page with default state and rules", () => {
  render(<PlayerVsCPU />);
  const heading = screen.getByText(/Player vs Computer/i);
  expect(heading).toBeInTheDocument();

  let playerInput = screen.getByTestId("userInput").textContent;
  expect(playerInput).toBe("");

  const select = screen.getByTestId('select');
  fireEvent.change(select, { target: { value: 'Rock' } });

  playerInput = screen.getByTestId("userInput").textContent;
  expect(playerInput).toBe("Rock");
});

test("test game with default inputs", () => {
  render(<PlayerVsCPU />);

  let playerInput = screen.getByTestId("userInput").textContent;
  expect(playerInput).toBe("");

  const select = screen.getByTestId('select');
  fireEvent.change(select, { target: { value: 'Rock' } });

  playerInput = screen.getByTestId("userInput").textContent || '';
  expect(playerInput).toBe("Rock");

  const playButton = screen.getByText("Play");
  act(()=>{
    playButton.click();
  });

  const CPUInput = screen.getByTestId("cpuInput").textContent || '';
  expect(CPUInput.length > 0).toBe(true);

  const result = screen.getByTestId("result").textContent;
  let resultText = '';
  const rules: { [key: string]: string; } = {...defaultRules};
  if (CPUInput === playerInput) {
    resultText = 'Draw';
  } else if (rules[CPUInput] === playerInput) {
    resultText = `Computer with ${CPUInput} wins!`;
  } else if (rules[playerInput] === CPUInput) {
    resultText = `Player wins!`;
  }

  expect(resultText).toBe(result);
});
