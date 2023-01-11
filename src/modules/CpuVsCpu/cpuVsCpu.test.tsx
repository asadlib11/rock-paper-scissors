import React from "react";
import { render, screen, act } from "@testing-library/react";
import CpuVsCpu from "./index";
import { defaultRules } from "../../commons/defaultRules";

test("renders page with default state", () => {
  render(<CpuVsCpu />);
  const heading = screen.getByText(/CPU1 vs CPU2/i);
  expect(heading).toBeInTheDocument();

  const CPUInput1 = screen.getByTestId("cpu1Input").textContent;
  const CPUInput2 = screen.getByTestId("cpu2Input").textContent;
  expect(CPUInput1).toBe("");
  expect(CPUInput2).toBe("");
});

test("test game with default inputs", () => {
  render(<CpuVsCpu />);
  let CPUInput1 = screen.getByTestId("cpu1Input").textContent;
  let CPUInput2 = screen.getByTestId("cpu2Input").textContent;
  expect(CPUInput1).toBe("");
  expect(CPUInput2).toBe("");

  const playButton = screen.getByText(/Play/);
  act(()=>{
    playButton.click();
  });

  CPUInput1 = screen.getByTestId("cpu1Input").textContent || '';
  CPUInput2 = screen.getByTestId("cpu2Input").textContent || '';
  expect(CPUInput1.length > 0).toBe(true);
  expect(CPUInput2.length > 0).toBe(true);

  let resultText = '';
  if (CPUInput1 === CPUInput2) {
    resultText = 'Draw';
  }

  const rules: any = {...defaultRules};
  if (rules[CPUInput1] === CPUInput2) {
    resultText = 'CPU 1 wins!';
  } else if (rules[CPUInput2] === CPUInput1){
    resultText = 'CPU 2 wins!';
  }

  const result = screen.getByTestId("result").textContent;
  expect(resultText).toBe(result);
});
