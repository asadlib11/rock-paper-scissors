import React from "react";
import { defaultRules, getWinner } from '../../commons/defaultRules';
import { DefaultGameInputs } from "../../enums/enums";

type Props = {
  rules?: any;
};

function RockPaperScissors({rules = defaultRules}: Props) {
  
  const [userInput, setUserInput] = React.useState(DefaultGameInputs.PAPER);
  const [cpuInput, setCpuInput] = React.useState(DefaultGameInputs.PAPER);
  const [result, setResult] = React.useState('');
  const handleInput = () => {
    if (userInput === cpuInput) {
        setResult("Draw");
        return;
    } else if (rules[userInput] === cpuInput) {
        setResult(getWinner('Player'));
    } else if (rules[cpuInput] === userInput) {
        setResult(getWinner('Computer'));
    }
  }

  return (
    <div>
      <div>
        <h1>Rock Paper Scissors</h1>
      </div>
      <div>
        <button onClick={handleInput}>Play</button>
      </div>
      {result && (<div>
        <h3>Result is: {result}</h3>
      </div>)}
    </div>
  );
}

export default RockPaperScissors;
