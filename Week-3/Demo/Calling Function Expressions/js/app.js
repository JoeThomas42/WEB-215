'use strict';

// anonymous, function expression --- THESE DON NOT HOIST
const sayHello = function(name){
  return `Hello ${name}`;
}

console.log(sayHello(`Joe`));
