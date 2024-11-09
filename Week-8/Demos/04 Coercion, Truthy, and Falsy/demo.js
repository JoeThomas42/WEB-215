'use strict';

// COERCION - value converted to true or false value
let fName = 'Joe';  // if left empty will be false - FALSY

if (fName) {
  console.log(`Your name is ${fName}.`)
} else {
  console.log(`No name.`)
}

/*

FALSY
  empty string
  0
  undefined
  null
  NaN (not a number -> 'Joe - 10')

TRUTHY
  string of a spaces
  1
  negative values
  arrays (including empty)
  objects (including empty)

*/
