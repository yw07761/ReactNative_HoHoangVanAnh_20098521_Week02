// Object Oriented Programming (OOP)
// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h




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
  