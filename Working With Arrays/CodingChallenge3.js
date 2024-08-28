// Working With Arrays
// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]


//  Hồ Hoàng Vân Anh_2009521 


const calcAverageHumanAge = ages => 
    ages
    .map(dogAge => 
        dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
    )
    .filter(humanAge => humanAge >= 18)
    .reduce((sum, age) => sum + age, 0) / 
    ages.filter(dogAge => dogAge > 2).length || 0;

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Running the function
console.log(calcAverageHumanAge(data1)); // Output for data1
console.log(calcAverageHumanAge(data2)); // Output for data2

