'use strict';


const guitar = {
  body: `Swamp ash`,
  neck: `Ebony`,
  pickups: `Seymore Duncan`
}

const guitar2 = {
  body: `Maple`,
  neck: `Ebony`,
  pickups: `DiMarzio`
}

// a method is a function that is built into and object

console.group(`First Guitar`);
console.table(guitar);
console.groupEnd();

console.groupCollapsed(`Second Guitar`);
console.table(guitar2);
console.groupEnd();
