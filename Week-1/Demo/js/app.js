`use strict`;

//--------------- stings
let message = `JS is cool`;
message = `new value`;

let fname = `Joe`;
console.log(`Welcome back ${fname}`);

const body = document.getElementsByTagName(`body`)[0];
body.textContent = `altered text`;

//--------------- variables
let pizzas = 5;
let slicesPer = 8;
let kids = 12;
let totalSlices = pizzas * slicesPer;
let slicesForEach = Math.floor(totalSlices / kids);
let leftovers = totalSlices % kids;
// console.log(slicesForEach)
// console.log(leftovers)

//------------------ numbers
let total = 1732;
let payment = 2000;
let change = (payment - total) / 100;
// console.log(change);

//------------------ object
const course = {
  prefix: `web`,
  num: 215,
  section: `os1`,
  courseName: `Advanced Scripting`,
};
// console.log(course);
// console.log(course.num);

//------------------ Boolean
  // set
let isLoggedIn = false;

  // calculated
let passingGrade = 75;
let studentGrade = 85;
let isPassed = studentGrade >= passingGrade;
// console.log(isPassed);

//------------------ Null
let petName = null;

//------------------ Undefined
let dogName; // or nothing at all

//------------------ equal signs
  // =
let lName = `Thomas`;

 // == DON'T USE THIS
let areEqual = studentGrade == passingGrade;
// console.log(areEqual);

  // ===
10 == `10`; // true
10 === `10`; // false

// Console Group - good for testing and trouble shooting - don't leave in final code
console.groupCollapsed(`Messages`);
console.log(`msg 1`);
console.log(`msg 2`);
console.log(`msg 3`);
console.log(`msg 4`);
console.groupEnd();

console.group(`Scores`);
console.log(100);
console.log(85);
console.log(70);
console.log(90);
console.groupEnd();


/*
Loading JS
use strict
Variables // case sensitive // no kebab case
  var // don't use for now
  let // use this instead

  const // cannot change its value
  global variable (no kind declared)

Types
  strings // no reason not to use backticks
    template literal/variable interpolation // ${variable}
  number // for money never use decimals, convert to cents
    + - * / % ++ --
    Math // Math.round() Math.floor() Math.cel() Math.random()
  BigInt // huge numbers, won't use in this class or perhaps ever
  Objects
  Symbols // unlikely to ever use
  Null/Undefined // something doesn't exist
    Null = exists and does have a value of Null
    Undefined = exists but doesn't have a value or doesn't exist
  Boolean // binary - true or false

Equal signs
  = sets a value
  == "loose" compares (value) DON'T USE THIS
  === "precise" compares (value and type) ONLY USE THIS
  != (bang equals) (inverse of =)
  !== (inverse of ===)
*/
