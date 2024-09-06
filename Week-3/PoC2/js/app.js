'use strict';

/**
 * Task 1: Constructs and console.logs a message about WEB-215
 */

function courseDescription() {
  let course = 'WEB-215';
  let desc = 'vanilla JavaScript';
  let msg = `${course} covers mainly ${desc}.`;
  console.log(msg);
}

courseDescription();

/**
 * TasK 2: Use substring method to pull out a segment of a string
 */

function needle() {
  const sentence = 'A needle in a haystack.';
  console.log(sentence.substring(14, 22));
}

needle();

/**
 * Task 3: calculate the area of a triangle
 * 
 * @param {number} base - the triangles base
 * @param {number} height - the triangles hight
 * 
 * @returns {number} the calculated area of the triangle
 */

const area = (base, height) => (base * height) / 2;

console.log(area(5, 10));

/**
 * Task 4: construct area message with data passed to another function
 * 
 * @param {number} b - base of the triangle
 * @param {number} h - height of the triangle
 */

function areaMessage(b, h) {
  let theArea = area(b, h);
  let msg = `The area of the triangle is ${theArea}`;
  console.log(msg);
}

areaMessage(5, 10);

/*
Task 5:
Create an anonymous callback function
*/

const button = document.getElementsByTagName('button')[0];
button.addEventListener('mouseenter', function(){
  console.count(`The button was entered`);
});

/*
Task 6:
Create an anonymous callback arrow function
*/
button.addEventListener('click', () => console.count(`The button was clicked`));

/*
Task 7:
Create an external callback function
*/
button.addEventListener('mouseleave', handleLeave);

/**
 * outputs a message and counts the times it's activated
 */
function handleLeave() {
  console.count(`The button was exited`)
}

/**
 * Task 8: an IIFE that displays my completion of the PoC
 * 
 * @param {string} name - my name
 * @param {number} pocNum - the proof of concept project number
 */
(function(name, pocNum){
  console.log(`${name} has completed the PoC${pocNum} assignment.`);
})(`Joe`, 2)
