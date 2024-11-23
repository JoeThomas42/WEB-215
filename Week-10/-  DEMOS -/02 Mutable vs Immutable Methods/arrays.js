'use strict';

/* 
METHODS
Static
  tests
  utility
Instanced
  has prototype
  manipulates data

Mutable
  mutates array contents
Immutable
  won't modify original array
*/

const names = ['john', 'paul', 'george', 'ringo'];

/*
const namesRev = names.reverse();  // MUTABLE

console.log(namesRev);
console.log(names);  // CHANGED ORIGINAL
 */

const someNames = names.slice(1,3); // takes a slice start is INCLUSIVE end is EXCLUSIVE, using ony one index goes from that to end
console.log(someNames);
console.log(names);   // IMMUTABLE did not modify the original

// reversing without changing original
const namesRev = [...names];  // spread syntax copy
namesRev.reverse();
console.log(namesRev);
console.log(names);
