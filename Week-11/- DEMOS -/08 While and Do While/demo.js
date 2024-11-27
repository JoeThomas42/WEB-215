'use strict';

// while runs infinitely until condition is false,
// but NOT guaranteed to run even once

console.group('While');
  let i = 1;
  while (i < 10) {       // WHILE only gets condition
    console.log(i);
    i++
  }  
console.groupEnd();

while (i > 10) {      // will never run
  console.log(i);
  i--;
}


// do while runs then checks conditions
// always runs at least once
console.group('do while');
  let i2 = 1;
  do {
    console.log(i2);
    i2++;
  } while (i2 < 10);
console.groupEnd();
