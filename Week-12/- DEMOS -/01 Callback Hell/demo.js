'use strict';

console.log('start');
setTimeout(function() {console.log('running');}, 0)
console.log('end');


// nested callback functions - avoid if possible
setTimeout(function() {
  console.log('I have started');
  setTimeout(function() {
    console.log('I am running');
    setTimeout(function() {
      console.log('Done');
    }, 2000)
  }, 0)
}, 4000)
