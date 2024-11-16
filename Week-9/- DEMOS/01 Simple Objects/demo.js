'use strict';

/*
In an OBJECT, order is NOT maintained.
Create with object literal syntax: {}
Only use quotes for property if it contains a dash (-) or space
*/

const person1 = {
  fName: 'Joe',
  lName: 'Thomas',
  age: 40,
}

let age = 34;

const person2 = {
  fName: 'Addie',
  lName: 'Thomas',
  age: age,
}

//shorthand for age variable
const person3 = {
  fName: 'Addie',
  lName: 'Thomas',
  age,
}
