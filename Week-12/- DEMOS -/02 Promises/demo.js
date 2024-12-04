'use strict';

function doChores(chore) {
  return new Promise((resolve, reject) => {    // takes callback function that takes resolve method and reject method
    if (chore !== 'nap') resolve(`${chore} is complete`);
    reject(`${chore} is not a chore`);
  });
}

// takes callback, turns output into actual data - catch() needed for rejection
// can add on multiple .then to di things in order
const myChores = doChores('Wash the dishes');

myChores
.then(data1 => {
  console.log(data1);
  return doChores('Put away the laundry');
})
.then(data2 => {
  console.log(data2);
  return doChores('nap');  // would stop the chain if higher up
})
.then(data3 => console.log(data3))
.catch(rejData => console.log(rejData));    
