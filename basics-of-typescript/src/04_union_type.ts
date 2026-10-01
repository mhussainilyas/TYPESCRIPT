// ======================
//       Union Type
// ======================
// Union Type (|) - Ak variable multiple types la sakta hai.

let data: string | number = 595;

data = "Hussain"; // ✔ allowed

// data = true; // ❌ Error

console.log(data);

// ======================
//     With Functions
// ======================

function addTwoItems(a: number | string, b: number | string): number | string {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

console.log(addTwoItems(10, "595"));
console.log(addTwoItems(10, 595));
console.log(addTwoItems("10", "595"));
console.log(addTwoItems("10", 595));
