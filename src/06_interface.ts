// ======================
//       Interface
// ======================

// 1. Defination
// 2. Basic Example
// 3. Optional Property
// 4. ReadOnly Property
// 5. Function Inside Interface
// 6. Interface With Arrays
// 7. Extending Interface

// ======================
//       Defination
// ======================

// Defination -> Object ka structure define karna
// Matlab -> Object ma kiya properties hongi or on ka type kiya hoga

// ======================
//     Basic Example
// ======================

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const user1: User = { firstName: "Muhammad", lastName: "Hussain", age: 21 };

// console.log(user1);

// ===========================
//    Optional Property (?)
// ===========================

// interface User {
//   id: number;
//   name: string;
//   age: number;
//   passion?: string; // 👈🏻 Optional Property
// }

// const user1: User = { id: 101, name: "Hussain", age: 21 };
// const user2: User = { id: 102, name: "Suleman", age: 22, passion: "Designer" };

// console.log(user1);
// console.log(user2);

// ===========================
//      ReadOnly Property
// ===========================

// interface User {
//   readonly id: number; // 👈🏻 readonly property
//   name: string;
//   age: number;
// }

// const user1: User = { id: 101, name: "Hussain", age: 21 };

// user1.id = 7; // ❌ Error

// console.log(user1);

// ===============================
//    Function Inside Interface
// ===============================

// interface Add {
//   (a: number, b: number): number;
// }

// const addTwoNumber: Add = (a, b) => {
//   let ans = a + b;
//   return ans;
// };

// console.log(addTwoNumber(4, 5));

// ***** 🚀 MULTIPLE FUNCTIONS AK INTERFACE MAIN *****

// interface Utility {
//   addition(a: number, b: number): number;
//   concatination(a: number, b: string): string;
// }

// const util1: Utility = {
//   addition: (a, b) => {
//     return a + b;
//   },
//   concatination: (a, b) => {
//     return a + b;
//   },
// };

// console.log(util1.addition(10, 20));
// console.log(util1.concatination(10, "HSN"));

// ===============================
//      Interface With Arrays
// ===============================

// interface User {
//   id: number;
//   name: string;
// }

// let users: User[] = [
//   { id: 101, name: "Hussain" },
//   { id: 102, name: "Suleman" },
//   { id: 103, name: "Zaryab" },
// ];

// console.log(users);

// =============================
//      Extending Interface
// =============================
// 👉🏻 Ak interface dusre interface ki properties use kare or sath hi sath apni properties bhi add karay

// interface Person {
//   id: number;
//   name: string;
//   age: number;
// }

// interface Employee extends Person {
//   salary: number;
//   passion: string;
// }

// const emp1: Employee = {
//   id: 101,
//   name: "Hussain",
//   age: 21,
//   salary: 80_000,
//   passion: "Developer",
// };

// console.log(emp1);

// ========================
//      Common Pitfall
// ========================

interface Person {
  id: number;
  name: string;
}

interface Person {
  age: number;
}

const user: Person = {
  id: 101,
  name: "Hussain",
  age: 21,
};

console.log(user);
