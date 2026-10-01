// =======================
//     Normal Function
// =======================

// function addTwoNumber(num1: number, num2: number): number {
//   let ans = num1 + num2;
//   return ans;
// }

// console.log(addTwoNumber(4, 5));

// ===========================
//     Function Expression
// ===========================

// const divideTwoNumber = function (a: number, b: number): number {
//   let ans = a / b;
//   return ans;
// };

// console.log(divideTwoNumber(10, 2));

// ===========================
//        Arrow Function
// ===========================

// const subtractTwoNumber = (a: number, b: number): number => {
//   let ans = a - b;
//   return ans;
// };

// console.log(subtractTwoNumber(10, 2));

// ===========================
//     Optional Parameters
// ===========================

// function greetFunc(greetMsg: string, name?: string): string {
//   let str = `${greetMsg} ${name}`;
//   return str;
// }

// console.log(greetFunc("Salam!", "Hussain"));

// ============================
//      Default Parameters
// ============================

// function greetFunc(name: string, greetMsg: string = "Hye!"): string {
//   let str = `${greetMsg} ${name}`;
//   return str;
// }

// console.log(greetFunc("Salam!", "Hussain"));
// console.log(greetFunc("Hussain"));

// ==============================
//      Function Overloading
// ==============================

function addTwoNumber(a: number, b: number): number;

function addTwoNumber(a: string, b: string): string;

function addTwoNumber(a: number | string, b: string | number): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("Both values must be the same type");
  }
}

console.log(addTwoNumber(10, 20));
console.log(addTwoNumber("HSN", "JVR"));

// ==============================
//        Rest Parameters
// ==============================

function addNumbers(...nums: number[]): number {
  let result = nums.reduce((acc, num) => {
    return (acc += num);
  }, 0);

  return result;
}

console.log(addNumbers(1, 2, 3, 4, 5));
