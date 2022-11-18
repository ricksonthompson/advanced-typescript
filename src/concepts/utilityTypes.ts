/* 
  Partial
  The Partial utility type allows you to transform an interface into a new interface 
  where all properties are optional.
*/

interface MovieCharacter {
  firstname: string;
  name: string;
  movie: string;
}

function registerCharacter(character: Partial<MovieCharacter>) {}

// 👍
registerCharacter({
  firstname: 'Frodo',
});

// 👍
registerCharacter({
  firstname: 'Frodo',
  name: 'Baggins',
});


/* 
  Required
  Required does the opposite of Partial. It takes an existing interface with optional 
  properties and transforms it into a type where all properties are required.
*/

interface MovieCharacter2 {
  firstname?: string;
  name?: string;
  movie?: string;
}

function hireActor(character: Required<MovieCharacter>) {}

// 👍
hireActor({
  firstname: 'Frodo',
  name: 'Baggins',
  movie: 'The Lord of the Rings',
});

// 👎
// hireActor({
//   firstname: 'Frodo',
//   name: 'Baggins',
// });


/* 
  Extract
  Extract allows you to extract typing information from a type. Extract accepts two Parameters, 
  first the Interface and second the type that should be extracted.
*/

type MovieCharacters =
  | 'Harry Potter'
  | 'Tom Riddle'
  | { firstname: string; name: string };

type hpCharacters1 = Extract<MovieCharacters, string>;
// equal to type hpCharacters = 'Harry Potter' | 'Tom Riddle';

type hpCharacters = Extract<MovieCharacters, { firstname: string }>;
// equal to type hpCharacters = {firstname: string; name: string };

/* 
  Extract<MovieCharacters, string> creates a union type hpCharacters that consists only of strings. 
  Extract<MovieCharacters, {firstname: string}> on the other hand, it extracts all object types that
  contain a firstname: string type.
*/

/*
  Exclude
  Exclude does the opposite of extract. It allows you to generate a new type by excluding a type.
*/

type MovieCharacters2 =
  | 'Harry Potter'
  | 'Tom Riddle'
  | { firstname: string; name: string };

type hpCharactersExc = Exclude<MovieCharacters, string>;
// equal to type hpCharacters = {firstname: string; name: string };

type hpCharactersExc1 = Exclude<MovieCharacters, { firstname: string }>;
// equal to type hpCharacters = 'Harry Potter' | 'Tom Riddle';

