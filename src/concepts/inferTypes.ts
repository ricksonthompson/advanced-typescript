/* 
  Infer type
  Infer allows you to create a new type. It's similar to creating a variable in Javascript 
  with the keyword var, let or const.
*/

type flattenArrayType<T> = T extends Array<infer ArrayType> ? ArrayType : T;

type foo = flattenArrayType<string[]>;
// equal to type foo = string;

type fooo = flattenArrayType<number[]>;
// equal to type foo = number;

type foooo = flattenArrayType<number>;
// equal to type foo = number;


/* 
  Complement

  Wow, the getArrayType looks pretty complicated. But actually, it’s not. Let’s go through it.

  T extends Array<infer ArrayType> checks if T extends an Array. Furthermore, we use the infer keyword to get a hold of the array type. Think of it as storing the type in a variable.

  We then use the conditional type to return the ArrayType if T extends Array. If not, we return T.
*/