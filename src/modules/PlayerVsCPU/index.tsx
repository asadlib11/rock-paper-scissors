import React from "react";
import { defaultRules } from "../../commons/defaultRules";
import Select from "../../components/select-dropdown";
import {
  getWinner,
  randomProperty,
  mapRulesForSelect,
} from "../../utils/utils";
import "./styles.css";

type Props = {
  rules?: { [key: string]: string; };
};

function PlayerVsCPU({ rules = defaultRules }: Props) {
  const [userInput, setUserInput] = React.useState<string>('');
  const cpuInput = React.useRef("");
  const [result, setResult] = React.useState("");
  const selectInputs = mapRulesForSelect(rules);

  const handlePlayClick = () => {
    generateCPUInput();
    if (userInput === cpuInput.current) {
      setResult("Draw");
      return;
    } else if (rules[userInput] === cpuInput.current) {
      setResult(getWinner("Player"));
    } else if (rules[cpuInput.current] === userInput) {
      setResult(getWinner(`Computer with ${cpuInput.current}`));
    }
  };

  const userOptionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResult("");
    setUserInput(e.target.value);
  };

  const generateCPUInput = () => {
    cpuInput.current = randomProperty(rules);;
  };

  return (
    <div className="container">
      <div>
        <h2>Player vs Computer</h2>
      </div>
      <div>
        Choose Your Move: <span data-testid="userInput">{userInput || ''}</span>
        <Select
          onChange={userOptionChangeHandler}
          options={selectInputs}
          value={userInput}
        ></Select>
      </div>
      {result && <div>CPU Chose: <span data-testid="cpuInput">{cpuInput.current}</span></div>}
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

export default PlayerVsCPU;
