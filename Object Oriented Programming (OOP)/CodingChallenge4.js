// Object Oriented Programming (OOP)
// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%


//  Hồ Hoàng Vân Anh_2009521 


// Base CarCl Class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; // Speed in km/h
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} km/h`);
    return this; // Enable method chaining
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} slowed down to ${this.speed} km/h`);
    return this; // Enable method chaining
  }
}

// Electric Vehicle Class Extending CarCl
class EVCl extends CarCl {
  #charge; // Private property

  constructor(make, speed, charge) {
    super(make, speed); // Call parent constructor
    this.#charge = charge; // Initialize private property
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.#charge}%`);
    return this; // Enable method chaining
  }

  accelerate() {
    this.speed += 20; // Increase speed by 20 km/h
    this.#charge -= 1; // Decrease charge by 1%
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this; // Enable method chaining
  }
}

// Test the Implementation
const rivian = new EVCl('Rivian', 120, 23);

// Experiment with method chaining
rivian
  .accelerate()          // Increase speed and decrease charge
  .brake()               // Decrease speed
  .chargeBattery(90)     // Charge battery to 90%
  .accelerate();         // Increase speed again
