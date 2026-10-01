// ========================
//      keyof operator
// ========================
// The `keyof` operator is a TypeScript operator that works on object types. It extract all the property names (keys) of a given object type and returns them as a union type.

// ========================
//      Basic Example
// ========================

// type User = {
//   name: string;
//   age: number;
// };

// type UserKeys = keyof User;

// let key: UserKeys = "name";

// key = "age";

// key = "email"; // Error: Type '"email"' is not assignable to type 'UserKeys'.

// console.log(key);

// ===============================
//      Example with Function
// ===============================

// type User = {
//   name: string;
//   age: number;
// };

// function getProperty(obj: User, Key: keyof User) {
//   return obj[Key];
// }

// const user: User = { name: "hussain", age: 21 };

// console.log(getProperty(user, "name"));

// console.log(getProperty(user, "age"));

// ================================
//      Example with Interface
// ================================

// interface Person {
//   name: string;
//   age: number;
// }

// type Keys = keyof Person;

// let personName: Keys = "name";

// let personAge: Keys = "age";

// const user1 = { name: "hussain", age: 21 };

// console.log(user1[personName]);

// console.log(user1[personAge]);

// ===============================
//      Example with Classes
// ===============================

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type UserKeys = keyof User;

let nameKey: UserKeys = "name";

let ageKey: UserKeys = "age";

const user1 = new User("hussain", 21);

console.log(user1[nameKey]);

console.log(user1[ageKey]);
