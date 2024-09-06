'use strict';

const btn = document.getElementsByTagName(`button`)[0];

btn.addEventListener(`mouseover`, handleOver); // ass soon as mouseover is done, handleOver is called. Don't use () 
btn.addEventListener(`click`, () => console.log(`You clicked the button`)); // anonymous arrow function

function handleOver() {
  console.log(`You moused over the button`)
}

function timer() {
  console.log(`Time's up!`);
}

setTimeout(timer, 3000); // runs after 3 secs
