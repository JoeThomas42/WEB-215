'use strict';

/*
Timers - delays something from running ONCE by x seconds
Interval - run something repeatedly every x seconds
 */

setInterval(() => {
  console.count('second')
}, 1000);

// to stop an interval you must store in variable to reference
const timer = setInterval(reminder, 1000);

function reminder() {
  console.log('Remember!');
}

// automatic timeout
setTimeout(stopTimer, 60000);

// stop with an action
document.querySelector('p'),addEventListener('click', stopTimer);

// clearInterval to stop
function stopTimer() {
  clearInterval(timer);
  console.log('Reminder stopped');
}
