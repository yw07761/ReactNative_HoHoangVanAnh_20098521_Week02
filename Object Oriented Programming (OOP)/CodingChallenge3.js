// Object Oriented Programming (OOP)
// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%





//  Hồ Hoàng Vân Anh_2009521 


// 1. Define the CarCl class
class CarCl {
    // Constructor function to initialize the car
    constructor(make, speed) {
      this.make = make;
      this.speed = speed; // speed in km/h
    }
  
    // Method to accelerate the car
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} accelerated to ${this.speed} km/h`);
    }
  
    // Method to brake the car
    brake() {
      this.speed -= 5;
      console.log(`${this.make} slowed down to ${this.speed} km/h`);
    }
  
    // Getter for speed in US miles per hour
    get speedUS() {
      return this.speed / 1.6;
    }
  
    // Setter for speed in US miles per hour
    set speedUS(speedInMiles) {
      this.speed = speedInMiles * 1.6;
    }
  }
  
  // 4. Create a new car and test the methods and getters/setters
  const ford = new CarCl('Ford', 120);
  
  // Test accelerate and brake methods
  ford.accelerate(); // Ford accelerated to 130 km/h
  ford.brake();      // Ford slowed down to 125 km/h
  
  // Test getter for speed in US miles per hour
  console.log(`Speed in mi/h: ${ford.speedUS}`); // Speed in mi/h: 78.125
  
  // Test setter for speed in US miles per hour
  ford.speedUS = 100; // Setting speed to 100 mi/h
  console.log(`New speed in km/h: ${ford.speed}`); // New speed in km/h: 160
  