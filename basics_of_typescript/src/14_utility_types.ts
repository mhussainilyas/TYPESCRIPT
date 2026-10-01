// ========================
//      Utility Types
// ========================
// Utility Types are built-in TypeScript types that helps us create new types from existing typeswithout rewriting code.

type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>; // makes all properties optional

type RequiredUser = Required<User>; // makes all properties required

type ReadonlyUser = Readonly<User>; // makes all properties readonly

type PickUserName = Pick<User, "name">; // picks only the name property

type OmitUserAge = Omit<User, "age">; // omits the age property

// ===============================================
//      Visit this link for more information
// ===============================================

// https://www.typescriptlang.org/docs/handbook/utility-types.html