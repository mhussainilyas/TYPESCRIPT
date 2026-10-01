// ====================
//     Definations
// ====================

// *** Type Guard ***
// A Type Guard is a way to check the type of a variable at runtime so that TypeScript can safely treat as a specific type.

// ===========================
//     "typeof" Type Guard
// ===========================

// function upperString(val: string | number) {
//   if (typeof val === "string") {
//     return val.toUpperCase();
//   } else {
//     return val;
//   }
// }

// let result = upperString("hussain");

// let result2 = upperString(123);

// console.log(result2);

// ================================
//     "instanceof" Type Guard
// ================================

// class Dog {
//   dogSound() {
//     console.log("bow bow bow");
//   }
// }

// class Cat {
//   catSound() {
//     console.log("meow meow meow");
//   }
// }

// function getSound(animalObj: Dog | Cat) {
//   if (animalObj instanceof Dog) {
//     animalObj.dogSound();
//   } else {
//     animalObj.catSound();
//   }
// }

// getSound(new Dog());

// getSound(new Cat());

// ================================
//     "in" operator Type Guard
// ================================

type Admin = { role: string };
type User = { id: number; name: string };

function checkUser(user: Admin | User) {
  if ("role" in user) {
    console.log(user.role);
  } else {
    console.log(user.name);
  }
}

checkUser({ role: "admin" });

checkUser({ id: 101, name: "hussain" });
