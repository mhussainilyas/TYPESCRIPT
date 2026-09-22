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

// ===========================
//    "in" operator object
// ===========================

type User = { name: string; age: number };
type Admin = { role: string };

function getRole(userObj: User | Admin) {
  if ("role" in userObj) {
    return userObj.role;
  } else {
    return userObj.name;
  }
}

console.log(getRole({ role: "guest" }));
console.log(getRole({ name: "HSN", age: 21 }));
