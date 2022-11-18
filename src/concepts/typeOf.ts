/* 
  typeof allows you to extract a type from a value. 
  It can be used in a type context to refer to the type of a variable.
*/

let firstname = 'Frodo';
let name: typeof firstname;

/* 
  Of course, this doesn’t make much sense in such simple scenarios. 
  But let's look at a more sophisticated example. In this example, 
  we use typeof in combination with ReturnType to extract typing 
  information from a functions return type.
*/

function getCharacter() {
  return {
    firstname: 'Frodo',
    name: 'Baggins',
  };
}

type Character = ReturnType<typeof getCharacter>;

/*

equal to 

type Character = {
  firstname: string;
  name: string;
}

*/
