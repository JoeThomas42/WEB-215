'use strict';

/* 
ARRAY METHODS:
static - array.method()
instanced - array.prototype.method()
*/

//OLD don't use this
let test
// use array literal instead
let test2 = [2,4,6];


const abbr = document.querySelectorAll('abbr');
// convert to array
const arrAbbr = Array.from(abbr);

// map requires array
arrAbbr.map(function(itm){
  console.log(itm);
});

console.log('-------------------------');

abbr.forEach(function(itm){
  console.log(itm);
});
