// ==========================
//      index signature
// ==========================
// An Index Signature is typeScript feature that define the type of values for objects whose property names (keys) are not known in advance.

// ======================
//      Example 01
// ======================

// type User = {
//   [key: string]: string;
// };

// const user1: User = {
//   name: "hussain",
//   // age: 21, // Error: Type 'number' is not assignable to type 'string'.
//   // 21: "21", // This is valid because the key is converted to a string in objects.
//   age: "21",
// };

// console.log(user1);

// ======================
//      Example 02
// ======================

// interface Numerics {
//   [key: number]: number;
// }

// const nums: Numerics = {
//   0: 70,
//   1: 80,
//   2: 90,
// };

// console.log(nums);

// ======================
//      Example 03
// ======================

type Products = {
  name: string;
  price: number;
  [key: string]: string | number | boolean;
};

const products1: Products = {
  name: "Laptop",
  price: 32_000,
  description: "mast laptop hai",
  isAvailable: true,
};

console.log(products1);
