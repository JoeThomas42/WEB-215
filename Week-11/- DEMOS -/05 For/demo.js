'use strict';

// FOR runs a code block n times

for (let i = 0; i < 10; i++) {      // start value; condition; increment
  console.log(i);
};

for (let i = 100; i >= 0; i-=25) {
  console.log(i);
};

// this is the OLD SCHOOL WAY - forEach is better
const names = ['john', 'paul', 'george', 'ringo'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
