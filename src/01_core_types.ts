// ===============
//      Number
// ===============

// let num: number = 10;

// ===============
//      String
// ===============

// let str: string = "Hussain";

// ===============
//     Boolean
// ===============

// let bool: boolean = true;

// ===============
//       Any
// ===============

// let random: any = 10;
// random = "Hussain Ilyas";
// random = [1, 2, 3];

// ===============
//     Unknown
// ===============

// let random: unknown = 10;
// random = "Muhammad Hussain";
// random = false;

// =======================
//     Unknown v/s Any
// =======================

// let anyVar: any = 10;
// anyVar = "Hussain";
// console.log(anyVar.toUpperCase());

// let unknownVar: unknown = 10;
// unknownVar = "Hussain";
// console.log(unknownVar.toUpperCase()); // ❌ 'unknownVar' is of type 'unknown'

// ===============
//     Array
// ===============

// const quantity: number[] = [1, 2, 3, 4, 5];
// const users: string[] = ["Hussain", "Suleman", "Zaryab"];
// const general: any[] = ["HSN", 21, true];

// *** Nested Array ***

// const nestedArr: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// ===============
//     Object
// ===============

// *** 1st method ***

// const user: { name: string; age: number; isStudent: boolean } = {
//   name: "Hussain",
//   age: 21,
//   isStudent: true,
// };

// *** 2nd method ***

// const user: Object = {
//   firstName: "Muhammad",
//   lastName: "Hussain",
//   age: 21,
// };

// *** Nested Array ***

// const user: {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     zipCode: number;
//   };
// } = {
//   name: "Hussain",
//   age: 21,
//   address: {
//     city: "Lahore",
//     zipCode: 54_000,
//   },
// };

// =======================
//     Array Of Object
// =======================

// const userData: { id: number; name: string; age: number }[] = [
//   { id: 1, name: "Hussain", age: 21 },
//   { id: 2, name: "Suleman", age: 22 },
//   { id: 3, name: "Zaryab", age: 20 },
// ];

// ===============
//     Tuples
// ===============

// let arr: [string, number] = ["Hussain", 21];
// console.log(arr);

// *** Drawback of tuples ***

// arr.push("something");
// console.log(arr);

// *** Tuples with array or object ***

// const data: [number, string, number[], { city: string; zipCode: number }] = [
//   101,
//   "HSN",
//   [1, 2, 3, 4, 5],
//   { city: "Lahore", zipCode: 54_000 },
// ];

// console.log(data);

// =============
//     Enum
// =============

// enum Role {
//   Admin = "Admin",
//   User = "User",
//   Guest = "Guest",
// }

// let userRole: Role = Role.Admin;
// let userRole: Role = Role.Guest;

// console.log(userRole);

// =============
//     void
// =============

// function addTwoNumber(num1: number, num2: number): void {
//   let result = num1 + num2;
//   console.log(result); // ✔ correct
// }

// function addTwoNumber(num1: number, num2: number): void {
//   let result = num1 + num2;
//   return result; // ❌ error
// }

// addTwoNumber(10, 20);

// =============
//     Null
// =============

// let kuchNahi: null = null;

// ==================
//     Undefined
// ==================

// let kuchNahi: undefined = undefined;

// =============
//     Never
// =============
// never means - function will never complete (function should always incomplete)

// function neverEnd(a: number, b: number): never {
//   console.log(a + b);
//   throw new Error("Farzi Error Hai...!");
// }

// neverEnd(1, 2);

// =============
//    Bigint
// =============

// let largeNum: bigint = 123456789123456789n;
