/* 
  Description

  The conditional ternary operator is a very well-known operator in Javascript. 
  The ternary operator takes three operands. A condition, a return type if the 
  condition is true, and a return type is false.

  condition ? returnTypeIfTrue : returnTypeIfFalse;

*/

interface StringId {
  id: string;
}

interface NumberId {
  id: number;
}

type Id<T> = T extends string ? StringId : NumberId;

let idOne: Id<string>;
// equal to let idOne: StringId;

let idTwo: Id<number>;
// equal to let idTwo: NumberId;

/* 
  Result

  In this example, we use the Id type util to generate a type based on a string. 
  If T extends string we return the StringId type. If we pass a number, we return 
  the NumberId type.
*/
