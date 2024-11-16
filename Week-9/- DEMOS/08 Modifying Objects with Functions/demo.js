'use strict';

const fName = 'Joe';
const lName = 'Thomas';

function changeName(theName) { // passes VALUE NOT VARIABLE
  theName = 'Bob';
  console.log(`INSIDE: ${theName}`);
}

changeName(fName);
console.log(`OUTSIDE: ${fName}`); // name NOT CHANGED



// passing entire object WORKS
const person = {
  fName: 'Joe',
  lName: 'Thomas',
}

function changeName2(nameObject) {
  nameObject.fName = 'Bob';
  console.log(`INSIDE: ${nameObject.fName}`);
}

changeName2(person);
console.log(`OUTSIDE: ${person.fName}`);

// passing object property value DOES NOT WORK
function changeName3(nameObjectProperty) {
  nameObjectProperty = 'Red';
  console.log(`INSIDE: ${nameObjectProperty}`);
}

changeName3(person.fName);
console.log(`OUTSIDE: ${person.fName}`);
