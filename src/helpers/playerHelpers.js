// playerHelpers.js

// Declarations starting with export will be added to module.exports object
// export default... at the bottom will not work for multiple exports

export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayer = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the # of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
  });
}

// output: [{player}, {player}] (each player having a win key and a numerical value)