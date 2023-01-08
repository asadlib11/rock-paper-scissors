import React from "react";
import { defaultRules } from "../../commons/defaultRules";
import {
  getWinner,
  randomProperty,
} from "../../utils/utils";
import "./styles.css";

type Props = {
  rules?: any;
};

function CpuVsCpu({ rules = defaultRules }: Props) {
  const [result, setResult] = React.useState("");
  const [cpu1Input, setCpu1Input] = React.useState("");
  const [cpu2Input, setCpu2Input] = React.useState("");

  const handlePlayClick = () => {
    generateCPUInputs();
    if (cpu1Input === cpu2Input) {
      setResult("Draw");
      return;
    } else if (rules[cpu1Input] === cpu2Input) {
      setResult(getWinner("CPU 1"));
    } else if (rules[cpu2Input] === cpu1Input) {
      setResult(getWinner(`CPU 2`));
    }
  };

  const generateCPUInputs = () => {
    setCpu1Input(randomProperty(rules));
    setCpu2Input(randomProperty(rules));
  };

  return (
    <div className="container">
      <div>
        <h2>CPU1 vs CPU2</h2>
      </div>
      <div>
        {cpu1Input && <h4>CPU1: {cpu1Input}</h4>}
        {cpu2Input && <h4>CPU2: {cpu2Input}</h4>}
      </div>
      <div>
        <button onClick={handlePlayClick}>Play</button>
      </div>
      {result && (
        <div>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
}

export default CpuVsCpu;
