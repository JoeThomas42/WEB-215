'use strict';

/* 
arrays keep order 
uses index starting at 0
*/

// Two ways to create
const names =['john', 'paul', 'george', 'ringo'];
// OLD WAY
const beatles = Array.of('john', 'paul', 'george', 'ringo'); 

// arrays show as objects, use this to confirm array
Array.isArray(names);

console.log(names);     // full array
console.log(names[1]);  // only the indexed item

console.log(names.length);  // how many items
console.log(names[names.length - 1]); // gives you the last item in the index
