'use strict';

/*
Use DOT SYNTAX to get specific values: person.age   person.address.city
If property uses quotes must use bracketed syntax: person['hair-color']
*/


let age = 34;

const person = {
  fName: 'Addie',
  lName: 'Thomas',
  age,
  address: {
    street: '54 Danielwood Ct',
    city: 'Clyde',
    state: 'NC',
    zip: 28721,
  }
}

console.log(person.fName, person.address.city);


// use a prompt to ask what to look up
const checkThis = prompt('Check which property?');
console.log(person[checkThis]);  // variable needs to be bracketed

// setter
person.spouse = 'Joe';
console.log(person.spouse);

//delete
delete person.spouse;
console.log(person.spouse); //undefined
