// ============================
//    Basic Example Of Class
// ============================

// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hye! ${this.name}`);
//   }
// }

// const u1 = new User("Hussain", 21);

// console.log(u1);

// u1.greet();

// console.log(Object.getPrototypeOf(u1));

// ============================
//       Access Modifiers
// ============================

// ===== PUBLIC & PRIVATE MODIFIERS =====

// class User {
//   public name: string; // public modifier
//   private age: number; // private modifier

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`name is ${this.name} and age is ${this.age}`);
//   }
// }

// const u1 = new User("Hussain", 21);

// console.log(u1);

// console.log(u1.name);

// console.log(u1.age); // Error

// ===== PROTECTED MODIFIERS =====

// class Person {
//   protected name: string; // protected modifier
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Employee extends Person {
//   salary: number;

//   constructor(name: string, age: number, salary: number) {
//     super(name, age);
//     this.salary = salary;
//   }

//   empInfo() {
//     console.log(`${this.name} salary is ${this.salary}`);
//   }
// }

// const emp1 = new Employee("Hussain", 21, 78_000);

// emp1.empInfo();

// ============================
//         Inheritance
// ============================

// class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hye! ${this.name}`);
//   }
// }

// class Employee extends Person {
//   salary: number;

//   constructor(name: string, salary: number) {
//     super(name);
//     this.salary = salary;
//   }

//   info() {
//     console.log(`${this.name} salary is ${this.salary}`);
//   }
// }

// const emp1 = new Employee("Hussain", 70_000);

// console.log(emp1);

// ============================
//      Method Override
// ============================

// class Animal {
//   speak() {
//     console.log("animal sound");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("meow meow meow");
//   }
// }

// const c = new Cat();

// c.speak();

// ============================
//      Getter v/s Setter
// ============================

// class User {
//   private _age: number = 0;

//   constructor(age: number) {
//     this._age = age;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(val: number) {
//     if (val > 0) {
//       this._age = val;
//     } else {
//       console.log("invalid age!");
//     }
//   }
// }

// const u1 = new User(18);

// console.log(u1.age); // Call getter

// u1.age = 21; // Call setter

// console.log(u1);

// ============================
//       Abstract Class
// ============================
// Abstract class ka direct object nahi banaya ja sakta. but ya dosri classes k liye blueprint k toor par kaam karti hai

abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract sound(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  sound(): void {
    console.log("Bark!!!");
  }
}

const d1 = new Dog("Doggi");

console.log(d1);

d1.sound();
