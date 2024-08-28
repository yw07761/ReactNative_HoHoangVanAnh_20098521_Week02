// Object Oriented Programming (OOP)
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h



//  Hồ Hoàng Vân Anh_2009521 


// Constructor function to create Car objects
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
    console.log(`Car created: ${this.make} with initial speed ${this.speed} km/h`);
}

// Method to accelerate the car
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`After accelerating: ${this.make} is going at ${this.speed} km/h`);
};

// Method to brake the car
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`After braking: ${this.make} is going at ${this.speed} km/h`);
};

// Create 2 Car objects
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Experiment with calling accelerate and brake methods
console.log('--- Testing Car 1 (BMW) ---');
car1.accelerate(); // BMW is going at 130 km/h
car1.brake();      // BMW is going at 125 km/h
car1.accelerate(); // BMW is going at 135 km/h

console.log('--- Testing Car 2 (Mercedes) ---');
car2.brake();      // Mercedes is going at 90 km/h
car2.accelerate(); // Mercedes is going at 100 km/h
car2.brake();      // Mercedes is going at 95 km/h
