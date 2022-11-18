/*
  Now that we know the union type. Let’s have a look at the keyof operator. 
  The keyof operator takes the keys of an interface or an object and produces a union type.
*/

interface MovieCharacter {
  firstname: string;
  name: string;
  movie: string;
}

type characterProps = keyof MovieCharacter;

const appliedTypes: characterProps = "firstname";

// Example with Pizza Menu
interface PizzaMenu {
  starter: string;
  pizza: string;
  beverage: string;
  dessert: string;
}

const simpleMenu: PizzaMenu = {
  starter: 'Salad',
  pizza: 'Pepperoni',
  beverage: 'Coke',
  dessert: 'Vanilla ice cream',
};

function adjustMenu(
  menu: PizzaMenu,
  menuEntry: keyof PizzaMenu,
  change: string,
) {
  console.log(menu[menuEntry] = change);
}

export function runExampleKeyOf() {
  // 👍
  adjustMenu(simpleMenu, 'pizza', 'Hawaii');

  // 👍
  adjustMenu(simpleMenu, 'beverage', 'Beer');

  // 👎 Type - 'bevereger' is not assignable
  // adjustMenu(simpleMenu, 'bevereger', 'Beer');

  // 👎 Wrong property - 'coffee' is not assignable
  // adjustMenu(simpleMenu, 'coffee', 'Beer');
}
