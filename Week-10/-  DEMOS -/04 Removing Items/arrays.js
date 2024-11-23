'use strict';

let names = ['john', 'paul', 'george', 'ringo'];

/* 
remove ONE from START with shift()
remove ONE from END with pop()
*/

console.log('original list', names);
names.shift();
console.log('shift list', names);

names.pop();
console.log('pop list', names);

// removing more than one
names = ['john','yoko', 'paul', 'george', 'ringo'];

// IMMUTABLY with SLICE
const beatles = [
  ...names.slice(0,1),
  ...names.slice(2)
];

console.log('beatles list', beatles);
console.log('original list', names);

// using SPLICE is difficult
const beatles2 = [
  ...names.splice(0,1),
  ...names.splice(1)
];
console.log(beatles2);
console.log(names);

// splice just to delete
names = ['john','yoko', 'paul', 'george', 'ringo'];

console.log('before splice', names);
names.splice(1,1);
console.log('after splice', names);
