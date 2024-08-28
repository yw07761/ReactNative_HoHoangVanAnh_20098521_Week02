// Working With Arrays
// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]



//  Hồ Hoàng Vân Anh_2009521 


function calcAverageHumanAge(ages) {
    // Step 1: Convert dog ages to human ages
    const humanAges = ages.map(dogAge => 
        dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
    );

    // Step 2: Filter out dogs younger than 18 human years
    const adults = humanAges.filter(age => age >= 18);

    // Step 3: Calculate the average human age
    const average = adults.length > 0 
        ? adults.reduce((sum, age) => sum + age, 0) / adults.length
        : 0;

    return average;
}

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Running the function
console.log(calcAverageHumanAge(data1)); // Output for data1
console.log(calcAverageHumanAge(data2)); // Output for data2

