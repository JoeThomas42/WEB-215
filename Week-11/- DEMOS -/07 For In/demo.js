'use strict';

// FOR runs a code block n times

for (let i = 0; i < 10; i++) {      // start value; condition; increment
  // console.log(i);
}

for (let i = 100; i >= 0; i-=25) {
  // console.log(i);
}

// this is the OLD SCHOOL WAY - forEach is better
const names = ['john', 'paul', 'george', 'ringo'];
for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);
}


// ---------------------- FOR OF ------------------------
// loop over iterable (anything that has a length)
// strings, arrays, NOT OBJECTS

for (const item of names){
  // console.log(item);
}

let str = 'This is a string of text.';
for (const char of str) {          // every character gets its own line
  // console.log(char);
}


// ---------------------- FOR IN ------------------------
// for in loops over keys (indexes or named keys)
// objects and arrays

console.group('--- 1 ---');
  for (const itm in names) {
    console.log(itm);               // outputs the index
  }
console.groupEnd();

console.group('--- 2 ---');
  const johnDetails = {
    first: 'john',
    last: 'lennon',
    dob: 'October 9,  1940',
    dod: 'December 8, 1980',
    spouse: 'Yoko Ono',
  }

  for (const item in johnDetails) {
    console.log(item);
  }
console.groupEnd();

console.group('--- 3 back to for of ---');
  const arrJohn = Object.entries(johnDetails);  // converting to array
  for (const item of arrJohn) {
    console.log(item);
  }
console.groupEnd();
