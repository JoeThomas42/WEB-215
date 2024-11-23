'use strict';

let names = ['john', 'paul', 'george', 'ringo'];

/* 
findIndex(callbackFunction, thisArgumentOPTIONAL) returns true or false
forEach()
*/

const georgeIndex = names.findIndex(beatle => {
  if (beatle === 'george') {
    return true;
  } else {
    return false;
  }
});

console.group('findIndex');
  console.log('index:', georgeIndex);         // returns index
  console.log('item:', names[georgeIndex]);  // returns item itself
console.groupEnd();

const namesMinusGeorge = [
  // get everything up to George
  ...names.slice(0, georgeIndex),

  // get everything after George
  ...names.slice(georgeIndex + 1)
]

console.group('all but George');
  console.log(namesMinusGeorge);
console.groupEnd();
