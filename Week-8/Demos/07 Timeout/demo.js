'use strict';

/*
Timers - delays something from running ONCE by x seconds
Interval - run something repeatedly every x seconds
 */

// function, milliseconds
setTimeout(() => {console.log('Sorry I was late')}, 2000)

setTimeout(timesUp, 5000);

function timesUp() {
  console.log('Time is up!');
}
