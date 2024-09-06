'use strict';

// calcArea(); // hoisting, functions are always loaded first so this works

function calcArea(l, w) { // these have parameters
  console.log(`Calculating area...`);
  let area = l * w;
  return area;
}

let smLength = 4;
console.log(calcArea(15, 5)) // these have arguments
console.log(calcArea(smLength, 5))
