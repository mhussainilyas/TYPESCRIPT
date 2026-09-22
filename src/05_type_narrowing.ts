// ===========================
//       Type Narrowing
// ===========================
// Type Narrowing - Jab ak variable k multiple possible types hotay hain (union) to ham check kar k ak specific type bana dete hain.

function printID(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID("hsn");
printID(101);
