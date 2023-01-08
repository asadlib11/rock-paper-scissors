import React from "react";
import { defaultRules } from "../../commons/defaultRules";
import Select from "../../components/select-dropdown";
import { DefaultGameInputs } from "../../enums/enums";
import {
  getWinner,
  randomProperty,
  mapRulesForSelect,
} from "../../utils/utils";
import "./styles.css";

type Props = {
  rules?: any;
};

function PlayerVsCPU({ rules = defaultRules }: Props) {
  const [userInput, setUserInput] = React.useState<string>(
    DefaultGameInputs.PAPER
  );
  const [result, setResult] = React.useState("");
  const selectInputs = mapRulesForSelect(rules);

  const handlePlayClick = () => {
    const cpuInput = generateCPUInput();
    if (userInput === cpuInput) {
      setResult("Draw");
      return;
    } else if (rules[userInput] === cpuInput) {
      setResult(getWinner("Player"));
    } else if (rules[cpuInput] === userInput) {
      setResult(getWinner(`Computer with ${cpuInput}`));
    }
  };

  const userOptionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserInput(e.target.value);
  };

  const generateCPUInput = () => {
    return randomProperty(rules);
  };

  return (
    <div className="container">
      <div>
        <h2>Player vs Computer</h2>
      </div>
      <div>
        <Select
          onChange={userOptionChangeHandler}
          options={selectInputs}
        ></Select>
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

export default PlayerVsCPU;
