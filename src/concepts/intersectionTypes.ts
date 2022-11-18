/* 
An intersection type, on the other hand, combines multiple types into one. 
This new type has all the features of the combined types.
*/

interface Person {
  name: string;
  firstname: string;
}

interface FootballPlayer {
  club: string;
}

function transferPlayer(player: Person & FootballPlayer) {}

export function runExampleIntersectionTypes() {
  // 👍
  transferPlayer({
    name: 'Ramos',
    firstname: 'Sergio',
    club: 'PSG',
  })
  
  // 👎 Argument is not assignable to Person & FootballPlayer
  // transferPlayer({
  //   name: 'Ramos',
  //   firstname: 'Sergio',
  // });
}
