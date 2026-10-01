// ======================
//      Type Alias
// ======================

// 1. Defination
// 2. Basic Example
// 3. Function Type
// 4. Array Of Object
// 5. Intersection
// 6. Literal Type
// 7. Optional Property
// 8. readonly Property

// ======================
//       Defination
// ======================

// Defination -> Kisi type ko ak naam de dena
// Matlab -> Custom type bana na.

// ======================
//     Basic Example
// ======================

// type ID = string | number;
// let id: ID = "HSN";
// id = 595;
// console.log(id);

// ***** 🚀 EXAMPLE WITH OBJECT *****

// type Person = {
//   id: number;
//   name: string;
//   age: number;
//   passion: string;
// };

// const user: Person = {
//   id: 101,
//   name: "Hussain",
//   age: 21,
//   passion: "Developer",
// };

// console.log(user);

// ======================
//      Function Type
// ======================

// type Addition = (a: number, b: number) => number;
// type Concatination = (a: number, b: string) => string;

// const addTwoNumber: Addition = (a, b) => {
//   let ans = a + b;
//   return ans;
// };

// const mergeItems: Concatination = (item1, item2) => {
//   let result = item1 + item2;
//   return result;
// };

// console.log(addTwoNumber(4, 5));
// console.log(mergeItems(595, "HSN"));

// ======================
//    Array Of Object
// ======================

// type Person = {
//   id: number;
//   name: string;
//   age: number;
// };

// let users: Person[] = [
//   { id: 101, name: "Hussain", age: 21 },
//   { id: 101, name: "Hussain", age: 21 },
//   { id: 101, name: "Hussain", age: 21 },
// ];

// console.log(users);

// ======================
//      Intersection
// ======================
// 👉🏻 The intersection operator & combines multiple types into one type that must satisfy all of them.

// ***** 🚀 EXAMPLE 01 *****

// type Demo1 = {
//   a: string;
// };

// type Demo2 = {
//   b: string;
// };

// type Demo3 = Demo1 & Demo2;

// const obj: Demo3 = {
//   a: "A for Apple",
//   b: "B for Bara Apple",
// };

// console.log(obj);

// ***** 🚀 EXAMPLE 02 *****

// const config: {
//   server: string;
//   port: number;
// } & {
//   ssl: boolean;
//   reverseProxy: boolean;
// } = {
//   server: "localhost",
//   port: 7000,
//   ssl: true,
//   reverseProxy: true,
// };

// console.log(config);

// ***** 🚀 EXAMPLE 02 (A CLEANER WAY) *****

// type ServerConfig = {
//   server: string;
//   port: number;
// };

// type SecurityConfig = {
//   ssl: boolean;
//   reverseProxy: boolean;
// };

// type Config = ServerConfig & SecurityConfig;

// const config: Config = {
//   server: "localhost",
//   port: 7000,
//   ssl: true,
//   reverseProxy: true,
// };

// console.log(config);

// ======================
//     Literal Type
// ======================
// 👉🏻 literal types -> restricting a variable's value to a fixed set of allowed values.

// type Status = "Success" | "Error" | "Loading";

// let response: Status = "Success";

// response = "something else" // ❌ Error

// console.log(response);

// =======================
//    Optional Property
// =======================

// type Person = {
//   id: number;
//   name: string;
//   age?: number; // 👉🏻 Optional Property
// };

// const user1: Person = { id: 101, name: "Hussain" };
// const user2: Person = { id: 102, name: "Suleman", age: 22 };

// console.log(user1);
// console.log(user2);

// =======================
//    readonly Property
// =======================

// type Person = {
//   readonly id: number; // 👉🏻 readonly Property
//   name: string;
//   isStudent: boolean;
// };

// const user: Person = { id: 101, name: "Hussain", isStudent: true };

// user.id = 102; // ❌ Error

// console.log(user);
