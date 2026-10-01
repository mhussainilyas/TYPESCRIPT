// ===========================
//       Type Assertions
// ===========================
// Type Assertions - Hum TypeScript ko khud bolte hain mujhy pata hai iska type kiya hai, to tension mat le

// let myName: unknown = "Hussain";

// *** 1st method ***
// let myUpperCaseName1 = (myName as string).toUpperCase();

// *** 2nd method ***
// let myUpperCaseName2 = (<string>myName).toUpperCase();

// console.log(myUpperCaseName2);

// =======================================
//       Drawback Of Type Assertion
// =======================================

let myVar: unknown = 10;
let result = (<string>myVar).toUpperCase();
console.log(result); // ❌ Runtime Error
