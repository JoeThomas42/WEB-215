'use strict';


/* 
sort() - instanced, mutable
default is alphabetical for STRINGS
default is left to right digits for NUMBERS
USE LODASH - IMUTABLE
  _.sortBy() - always ascending
  _.orderBy(collection, ?iteration, ?order) - configurable
*/
const pets = ['dog', 'cat', 'snake', 'bird'];
console.log(pets);
pets.sort();
console.log(pets);

const numbers = [309, 23, 217, 25, 30];
// console.table(numbers);
// numbers.sort();
// console.table(numbers);
// numbers.sort();

console.log('-------------- USING LODASH --------------');
/* 
_.sortBy(collection)
_.orderBy(collection, ?iteration, ?order)
*/

const numsOrder = _.sortBy(numbers); // ascending order
console.table(numsOrder);

const numsReverse = _.orderBy(numbers, null, 'desc'); // descending order
console.table(numsReverse);
