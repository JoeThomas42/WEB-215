'use strict';

// FOR runs a code block n times

for (let i = 0; i < 10; i++) {      // start value; condition; increment
  // console.log(i);
};

for (let i = 100; i >= 0; i-=25) {
  // console.log(i);
};

// this is the OLD SCHOOL WAY - forEach is better
const names = ['john', 'paul', 'george', 'ringo'];
for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);
}

// ---------------------- FOR OF ------------------------
// loop over iterable (anything that has a length)

for (const item of names){
  console.log(item);
}

let str = 'This is a string of text.';
for (const char of str) {
  console.log(char);
}
