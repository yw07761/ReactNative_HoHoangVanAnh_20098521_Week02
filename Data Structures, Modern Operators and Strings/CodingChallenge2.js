// Data Structures, Modern Operators and Strings
// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

// Hồ Hoàng Vân Anh_2009521

// Test data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',
      'Kimmich', 'Goretzka', 'Muller', 'Coman',
      'Lewandowski', 'Wagner'
    ],
    [
      'Burki', 'Piszczek', 'Hummels', 'Akanji', 'Schulz',
      'Witsel', 'Delaney', 'Sancho', 'Brandt',
      'Reus', 'Alcacer'
    ]
  ],
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5
  },
  scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich']
};

// 1. Loop over game.scored array and print each player name with the goal number
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// 2. Calculate the average odd
const odds = Object.values(game.odds);
const averageOdd = odds.reduce((acc, odd) => acc + odd, 0) / odds.length;
console.log(`Average odd: ${averageOdd.toFixed(2)}`); // Fixed to 2 decimal places

// 3. Print the odds in a formatted way
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.draw}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// 4. Bonus: Create a scorers object
const scorers = game.scored.reduce((acc, player) => {
  acc[player] = (acc[player] || 0) + 1;
  return acc;
}, {});

console.log(scorers);
