// Data Structures, Modern Operators and Strings
// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL


// Hồ Hoàng Vân Anh_2009521

// Test data
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 SUBSTITUTION'],
  [47, '⚽ GOAL'],
  [64, '🟡 YELLOW CARD'],
  [72, '🔁 SUBSTITUTION'],
  [85, '⚽ GOAL']
]);

// 1. Create an array 'events' of the different game events (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log('Events:', events);

// 2. Remove the event from minute 64
gameEvents.delete(64);
console.log('Updated game events:', gameEvents);

// 3. Compute and log the average time between events
const eventMinutes = [...gameEvents.keys()];
const averageInterval = (90 / eventMinutes.length).toFixed(2);
console.log(`An event happened, on average, every ${averageInterval} minutes`);

// 4. Loop over 'gameEvents' and log each element with the period of the game
gameEvents.forEach((event, minute) => {
  const period = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${period}] ${minute}: ${event}`);
});
