'use strict';

/*
A method is a function inside an object
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
  },
  greeting: function() {
    return `Hello ${this.fName}`;  // DON"T use variable name, use THIS
  },
}
console.log(person.greeting());



// object constructor - function that creates an object
// use a capital letter
// dent use trailing comma
function Character(charName, catchPhrase) {
  this.name = charName,
  this.phrase = catchPhrase,
  this.speak = function() {
    return `${this.name} says, "${this.phrase}"`;
  }
}
const joe = new Character('Joe Thomas', 'God damnit');
const homer = new Character('Homer Simpson', 'Doh!');
const steve = new Character('Steve Urkle', 'Did I do that?');
console.log(joe.speak());
console.log(homer.speak());
console.log(steve.speak());
