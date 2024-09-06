'use strict'

/*
delete function keyword
add fat arrow => between parameters and opening curly brace
use parentheses ony if more than one parameter or none
IF ONE LINE
delete return keyword
delete curly braces
put all on one line
*/

// ---------------------------------------------------------------

const sayHello1 = function(name){
  return `Hello ${name}`;
}

const sayHello2 = name => `Hello ${name}`;


console.log(sayHello1(`Joe`));
console.log(sayHello2(`Joe`));

// ---------------------------------------------------------------

function formatCurrency1(totalCents) {
  let dollars = (totalCents/ 100).toFixed(2);
  dollars = `$${dollars}`;
  return dollars; 
}

// must be converted to function expression

const formatCurrency2 = totalCents => {
  let dollars = (totalCents/ 100).toFixed(2);
  dollars = `$${dollars}`;
  return dollars; 
}


console.log(formatCurrency1(298))
console.log(formatCurrency2(298))

// ---------------------------------------------------------------

function whereAmI1() {
  const url = window.location.href;
  console.log(url);
  return url;
}

const whereAmI2 = () => console.log(window.location.href);


whereAmI1();
whereAmI2();

// ----------------------------------------------------------------

function buildGuitar1(body, neck, pickups) {
  const guitar = {
    body: `${body}`,
    neck: `${neck}`,
    pickups: `${pickups}`
  };
  return guitar;
}

// if returning something in curly braces, encase in parenthesis
const buildGuitar2 = (body, neck, pickups) => ({body: `${body}`, neck: `${neck}`, pickups: `${pickups}`});

//readability
const buildGuitar3 = (body, neck, pickups) => (
  {body: `${body}`,
  neck: `${neck}`,
  pickups: `${pickups}`
});


console.log(buildGuitar1(`swamp ash`, `maple`, `DiMarzio`));
console.log(buildGuitar2(`swamp ash`, `maple`, `DiMarzio`));
console.log(buildGuitar3(`swamp ash`, `maple`, `DiMarzio`));
