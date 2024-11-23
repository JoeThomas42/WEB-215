'use strict';

const names = ['john', 'paul', 'george', 'ringo'];

/* 
add items to the END with push()
add items to the BEGINNING with unshift()
add items to the MIDDLE with
    splice() - MUTABLE
    slice() - IMMUTABLE
*/

// adding to end
console.group('END');
  names.push('brian');
  console.log(names);
  names.push('bill', 'joe');  // can do multiple
  console.log(names);
console.groupEnd();


// adding to beginning
console.group('BEGINNING');
  names.unshift('stu', 'pete');
  console.log(names);
console.groupEnd();

// slice and splice
console.group('MIDDLE SLICE');
  const sliced = names.slice(2,5);
  console.log(sliced);
  console.log(names);
console.groupEnd();

console.group('MIDDLE SPLICE');
  const spliced = names.splice(2,5);  // START,DELETE COUNT 
  console.log(spliced); // the items removed went into 'spliced'
  console.log(names);   // left over from removal
console.groupEnd();

// adding to middle
console.group('ADDING TO MIDDLE WITH SLICE');
  const addPeople = [
    ...names.slice(0,2),  // takes first two names
    'new1',               // adds new1
    'new2',               // adds new2
    ...names.slice(2)     // takes rest of names
  ];
  console.log(addPeople);
  console.log(names);     // did not change original
console.groupEnd();

// using splice
console.group('ADDING USING SPLICE');
  const addPeople2 = [
    ...names.splice(0,2),
    'new3',
    'new4',
    ...names
  ];
  console.log(addPeople2);
  console.log(names);      // worked but ruined original list
console.groupEnd();
