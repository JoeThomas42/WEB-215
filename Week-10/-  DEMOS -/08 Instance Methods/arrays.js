'use strict';

/* 
ARRAY METHODS:
static - array.method()
  utility
instanced - array.prototype.method()
*/

const guitars = [
  'fender',
  'gibson',
  'ibanze'
];

/* toString() - convert array to comma separated string */
const gtrString = guitars.toString();
console.log(gtrString);  // fender,gibson,ibanze

/* join() - converts array to a string with custom delimiter */
const gtrJoin = guitars.join(', ');
console.log(gtrJoin);  // fender, gibson, ibanze

/* split() - convert a string into an array, split at the delimiter */
const strings = `d'addario; elixir; ernie ball`;
const arrStrings = strings.split(';');
console.log(arrStrings);  // [ "d'addario", " elixir", " ernie ball" ] (spaces included)

/* trim() - removes stray spaces */
const arrTrimmedStrings = arrStrings.map(itm => itm.trim()); // map applies trim to all items in the array and returns the new string
console.log(arrTrimmedStrings);  // [ "d'addario", "elixir", "ernie ball" ] (spaces gone)

/*
indexOf() - first occurrence of an item
lastIndexOf() - last occurrence of an item
*/
const arrRaces = [
  'relay',
  'sprint',
  'marathon',
  'sprint'
];
const result = arrRaces.indexOf('sprint');
console.log(result);  // index 1
const result2 = arrRaces.lastIndexOf('sprint');
console.log(result2); // index 3

// finding page name
let url = window.location.href;
let lastSlash = url.lastIndexOf('/');
let page = url.slice(lastSlash + 1);  // arrays.html
console.log(page);
// or use substring
let page2 = url.substring(lastSlash + 1);
console.log(page2);

/* includes() - tests for true or false existence - USE "is" PREFIX when looking for t/f */
const arrTodaysRaces = [
  'relay',
  'sprint',
  'marathon'
];
let isRace = arrTodaysRaces.includes('marathon');
console.log(isRace);  // true
let isRace2 = arrTodaysRaces.includes('Marathon');
console.log(isRace2);  // FALSE DUE TO CASE

