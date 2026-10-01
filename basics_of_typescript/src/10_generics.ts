// ====================
//     Definations
// ====================

// *** Generics ***
// Generics are placeholders for data types that make code reusable, flexible and type-safe.They are mainly used with functions, classes, interfaces, and type-alias.

// =========================
//     Problem Statement
// =========================

// function identity(val: any): any {
//   return val;
// }

// console.log(identity("HSN"));

// =========================
//     Solution Generics
// =========================

// NOTE : Here <T> is a placeholder

// function identity<T>(val: T): T {
//   return val;
// }

// let result1 = identity<number>(10);

// let result2 = identity<string>("Hussain");

// console.log(result2);

// ===============================================
//     Generics Example With Array In Function
// ===============================================

// function getFirst<ArrayType>(arr: ArrayType[]): ArrayType {
//   return arr[0];
// }

// let result1 = getFirst<number>([1, 2, 3, 4, 5]);

// let result2 = getFirst<string>(["Hussain", "Suleman", "Zaryab"]);

// console.log(result2);

// =========================
//     Multiple Generics
// =========================

// function pair<T, U>(first: T, second: U): { first: T; second: U } {
//   return { first, second };
// }

// let res = pair<number, string>(1, "HSN");

// console.log(res);

// =========================================
//     Generics Example With Interfaces
// =========================================

// interface ApiResponse<T> {
//   data: T;
//   success: boolean;
// }

// const response1: ApiResponse<string> = {
//   data: "This is a string response",
//   success: true,
// };

// console.log(response1);

// ======================================
//     Generics Example With Classes
// ======================================

// class Person<T, U> {
//   name: T;
//   age: U;

//   constructor(name: T, age: U) {
//     this.name = name;
//     this.age = age;
//   }

//   info(): string {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// const user1 = new Person<string, number>("Hussain", 21);

// console.log(user1.info());

// ==========================================
//     Generics Example With Type Aliases
// ==========================================

type Person<T> = { id: T };

const user1: Person<number> = { id: 101 };

const user2: Person<string> = { id: "HSN" };

console.log(user2);
