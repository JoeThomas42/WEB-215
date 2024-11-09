'use strict';

const age = 25;

if (age > 55) {
  console.log('Older than 55');
} else if (age > 21) {
  console.log('Older than 21');
} else if (age > 13) {           //doesn't get this far with else if
  console.log('Older than 13');
} else {                         // fallback fires if all others are false
  console.log('none are true');
}
