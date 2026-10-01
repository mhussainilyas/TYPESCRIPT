// ======================================
//      Non Null Assertion Operator
// ======================================
// The Non Null Assertion Operator (!) tells TypeScript that a value is definetly not "null" or "undefined", so don't show a type error.

// *** null Case ***
// function printName(name: string | null) {
//   console.log(name!.toUpperCase());
// }

// *** undefined Case ***
function printName(name: string | undefined) {
  console.log(name!.toUpperCase());
}

printName("hussain");
