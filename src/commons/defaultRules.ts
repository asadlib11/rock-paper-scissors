export const defaultRules = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

export const getWinner = (playerName: string) => `${playerName} wins!`;