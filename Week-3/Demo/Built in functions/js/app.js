'use strict'

// converts string into decimal
// parseFloat(); 

// converts string into integer, cuts off decimal
// parseInt(); 

// converts number to rounded string
// toFixed(); 

let total = 16.456;
let totalConvert = parseFloat(total.toFixed(2)); // converts to 2 decimals while keeping it a number

let microphone = `Blue snowball`;
console.log(microphone.includes(`snow`)); // tests to see if string includes provided argument - CASE SENSITIVE
console.log(microphone.startsWith(`snow`)); // these only work with strings

let text = `javascript`;
let sub = text.substring(0,4); // start, end (EXCLUSIVE)
let sub2 = text.substring(4,-1); // negative takes all before the start location
console.log(sub);
console.log(sub2);
