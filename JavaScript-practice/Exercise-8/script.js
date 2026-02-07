// Class and Object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

let person1 = new Person("Jaswanth", 21);
console.log(person1.greet());

// Encapsulation
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  getBalance() {
    return this._balance;
  }
}

let account = new BankAccount("Jaswanth", 1000);
account.deposit(500);
console.log("Balance:", account.getBalance());

// Inheritance
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  study() {
    return `${this.name} is studying ${this.course}`;
  }
}

let student1 = new Student("Jaswanth", 21, "Web Development");
console.log(student1.greet());
console.log(student1.study());

// Polymorphism
class Animal {
  sound() {
    return "Animal makes a sound";
  }
}

class Dog extends Animal {
  sound() {
    return "Dog barks";
  }
}

let animal = new Animal();
let dog = new Dog();

console.log(animal.sound());
console.log(dog.sound());

// Abstraction
class Vehicle {
  start() {
    return "Vehicle starting";
  }
}

class Car extends Vehicle {
  start() {
    return "Car starting with key";
  }
}

let car = new Car();
console.log(car.start());

// Static method
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log("Static method result:", MathUtils.add(10, 20));
