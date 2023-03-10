import React from "react";
import PlayerVsCPU from "./modules/PlayerVsCPU";
import CpuVsCpu from "./modules/CpuVsCpu";
import "./App.css";
import { GameMode } from "./enums/enums";

function App() {
  const [mode, setMode] = React.useState("");

  return (
    <div className="App container">
      <div>
        <h1>Rock Paper Scissors</h1>
      </div>

      {!mode && (
        <div>
          Choose Game Mode:
          <button
            onClick={() => {
              setMode(GameMode.PlayerVsComputer);
            }}
            data-testid="playerVsComputerBtn"
          >
            Player Vs Computer
          </button>
          <button
            onClick={() => {
              setMode(GameMode.ComputerVsComputer);
            }}
            data-testid="computerVsComputerBtn"
          >
            Computer Vs Computer
          </button>
        </div>
      )}

      {mode === GameMode.PlayerVsComputer && <PlayerVsCPU />}
      {mode === GameMode.ComputerVsComputer && <CpuVsCpu />}

      {mode && (
        <div>
          <button
            onClick={() => {
              setMode("");
            }}
            data-testid="backBtn"
          >
            Back to Main page
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
