export const randomProperty = (obj: any) => {
  let keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

export const mapRulesForSelect = (obj: any) => {
    let keys = Object.keys(obj);
    const array = Array(keys.length);
    for (const key of keys) {
        array.push({label: key, value: key});
    }
    return(array);
}

export const getWinner = (playerName: string) => `${playerName} wins!`;
