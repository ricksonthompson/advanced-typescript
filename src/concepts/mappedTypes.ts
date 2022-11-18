/* 
  Mapped types

  Mapped types are a great way of transforming existing types into new types. Therefore the term map. 
  Mapped types are compelling and allow us to create custom utility types.
*/

interface Character {
  playInFantasyMovie: () => void;
  playInActionMovie: () => void;
}

type toFlags<Type> = { [Property in keyof Type]: boolean };

type characterFeatures = toFlags<Character>;

/*

equal to 

type characterFeatures = {
  playInFantasyMovie: boolean;
  playInActionMovie: boolean;
}

*/


/* 
  We create the toFlags helper type that takes a type and maps all properties to be of return type boolean.

  Pretty cool. But it gets even more powerful. We can add or remove the ? or the readonly modifier by prefixing
  them with a simple + or -.

  Let’s have a look at an example where we create a mutable utility type.
*/

type mutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type Characterr = {
  readonly firstname: string;
  readonly name: string;
};

type mutableCharacter = mutable<Characterr>;
/*

equal to

type mutableCharacter = {
  firstname: string;
  name: string;
}

 */


/*
  Each property of the Character type is readonly. Our mutable interface removes the readonly property
  because we prefix it with a -.`

  The same works in the other direction. If we add a + we can create a helper type that takes an interface
  and transforms it into an interface where every property is optional.
*/

type optional<Type> = {
  [Property in keyof Type]+?: Type[Property];
};

type Characterrr = {
  firstname: string;
  name: string;
};

type mutableCharacterrr = optional<Characterrr>;

/* 
  equal to

  type mutableCharacter = {
    firstname?: string;
    name?: string;
  }
*/

/* 
  Of course, those two approaches can also be combined. Look at the next example where the optionalAndMutable
  type removes the readonly property and adds a ? which makes each property optional.
*/

type optionalAndMutable<Type> = {
  -readonly [Property in keyof Type]+?: Type[Property];
};

type Characterrrr = {
  readonly firstname: string;
  readonly name: string;
};

type mutableCharacterrrr = optionalAndMutable<Characterrrr>;

/*
  equal to

  type mutableCharacter = {
    firstname?: string;
    name?: string;
  }
*/

/* 
  It even gets more powerful. Let’s check out the following example where we create type util that
  transforms an existing type into a type of setters.
*/

type setters<Type> = {
  [Property in keyof Type as `set${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

type Characterrrrr = {
  firstname: string;
  name: string;
};

type character = setters<Characterrrrr>;

/*

equal to

type character = {
  setFirstname: () => string;
  setName: () => string;
}

*/

