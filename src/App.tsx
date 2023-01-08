import React from "react";
import PlayerVsCPU from "./modules/PlayerVsCPU";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Rock Paper Scissors</h1>
      </div>
      <PlayerVsCPU />
    </div>
  );
}

export default App;
