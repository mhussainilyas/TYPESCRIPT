// =====================
//      Decorators
// =====================
// A decorator is a special function that adds extra functionality to a class or its members (such as methods, properties, accessors, or parameters) without modifying the original code.

// =====================
//      Example 01
// =====================

// *** Decorator function ***
// function printClassName(constructor: Function) {
//   console.log(`Class ka naam: ${constructor.name}`);
// }

// @printClassName  // Decorator applied to the User class
// class User {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// =====================
//      Example 02
// =====================

// *** Decorator function ***
// function printProperty(target: any, propertyKey: string) {
//   console.log(`Property ki detail: ${propertyKey}`);
// }

// class User {
//   @printProperty // Decorator applied to the 'name' property
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// ============================================
//      Example 02 With Modern Decorators
// ============================================

// *** Decorator function ***
function printProperty(value: undefined, context: ClassFieldDecoratorContext) {
  console.log(`Property ka name: ${String(context.name)}`);
}

class User {
  @printProperty
  name: string;
  @printProperty
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
