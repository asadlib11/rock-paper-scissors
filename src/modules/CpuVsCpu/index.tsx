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
  const cpu1Input = React.useRef("");
  const cpu2Input = React.useRef("");


  const handlePlayClick = () => {
    generateCPUInputs();
    if (cpu1Input.current === cpu2Input.current) {
      setResult("Draw");
      return;
    } else if (rules[cpu1Input.current] === cpu2Input.current) {
      setResult(getWinner("CPU 1"));
    } else if (rules[cpu2Input.current] === cpu1Input.current) {
      setResult(getWinner(`CPU 2`));
    }
  };

  const generateCPUInputs = () => {
    cpu1Input.current = (randomProperty(rules));
    cpu2Input.current = (randomProperty(rules));
  };

  return (
    <div className="container">
      <div>
        <h2>CPU1 vs CPU2</h2>
      </div>
      <div>
        {cpu1Input && <h4>CPU1: <span data-testid="cpu1Input">{cpu1Input.current}</span></h4>}
        {cpu2Input && <h4>CPU2: <span data-testid="cpu2Input">{cpu2Input.current}</span></h4>}
      </div>
      <div>
        <button onClick={handlePlayClick}>Play</button>
      </div>
      {result && (
        <div>
          <h3 data-testid="result">{result}</h3>
        </div>
      )}
    </div>
  );
}

export default CpuVsCpu;
